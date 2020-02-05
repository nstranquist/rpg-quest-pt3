import { Dispatch } from "redux"
import firebase from 'firebase'
import { firestore, auth } from "../../utils/fbConfig"

// battle reducer mechanics

// TYPES

export interface BattleState {
  loading: boolean
  active: boolean
  round: number
  //playerTurn: boolean
  monsterName: string
  monsterHealth: number | null
  monsterDamage: number | null
  xpReward: number | null
  goldReward: number | null
  otherReward?: any
  errors: any
}

export interface startBattle {
  readonly type: 'SET_BATTLE'
  monsterName: string // or id
  monsterHealth: number
  monsterDamage: number
  xpReward: number
  goldReward: number
  otherReward?: any
}
export interface damageMonster {
  readonly type: 'DAMAGE_MONSTER'
  damage: number
}
// export interface endBattle {
//   readonly type: 'CLEAR_BATTLE'
//   //playerWon: boolean  // true for player, false for monster
// }

// can add: buffDamage, nerfDamage, buffDefense, nerfDefense
export type BattleActionTypes =
  | startBattle
  | damageMonster
  | { readonly type: 'INCREMENT_ROUND' }
  | { readonly type: 'LOADING_BATTLE' }
  | { readonly type: 'CLEAR_BATTLE' }
  | { readonly type: 'SET_BATTLE_ERROR', err: any }

// round increment
// turn increment
// battle over, battle winner
// clear battle
// battle loading
// battle error
// battle reward
// battle monster

// ACTIONS
export const startBattle = () => (dispatch: Dispatch, getState: any) => {
  console.log('start battle called')
  dispatch({ type: 'LOADING_BATTLE' })
  // have to retrieve random monster
  firestore
    .collection('monsters') // can change ids to indexes later for easier randomizing, or store an array of their ids
    .get()
    .then(snap => {
      let length = snap.docs.length
      let random = Math.floor(Math.random() * length)
      let monster = snap.docs[random]
      console.log('monster selected:', monster.data()) // should include id, name, baseDamage, baseHealth
      // get player level
      let playerLevel = getState().user.profile.level
      if(playerLevel < 1) playerLevel = 1
      dispatch({
        type: 'SET_BATTLE',
        monsterName: monster.data().name,
        monsterHealth: monster.data().baseHealth * playerLevel,  // a linear increase. TODO: fix to be more natural
        monsterDamage: monster.data().baseDamage * playerLevel,
        // will hardcode the reward for now
        // TODO: add baseReward and randomReward game logic
        xpReward: 15,
        goldReward: 25,
        otherReward: null
      })
    })
    .catch(err => {
      dispatch({ type: 'SET_BATTLE_ERROR' })
      console.log(err)
    })
}
// IDEA: replace getState with data from component? which way is better?
export const startPlayerTurn = () => (dispatch: Dispatch, getState: any) => {
  console.log('round started')
  console.log('player attacks')
  //player attacks monster
  dispatch({ type: 'DAMAGE_MONSTER', damage: getState().user.profile.damage })
  if(getState().battle.monsterHealth < 1) {
    console.log('player wins')
    endBattle(true)
  }
}

export const startMonsterTurn = () => (dispatch: Dispatch, getState: any) => {
  console.log('monster attacks')
  //monster attacks player
  dispatch({ type: 'DAMAGE_PLAYER', damage: getState().battle.monsterDamage })
  if(getState().battle.playerHealth < 1) {
    console.log('monster wins')
    endBattle(false)
  }
  else dispatch({ type: 'INCREMENT_ROUND' })
}

export const endBattle = (playerWon: boolean) => (dispatch: Dispatch) => {
  console.log('end battle called')
  if(playerWon) {
    console.log('player won')
    firestore
      .doc(`profiles/${auth.currentUser!.uid}`)
      .update({
        xp: firebase.firestore.FieldValue.increment(15),
        gold: firebase.firestore.FieldValue.increment(25),
        // add otherRewards support later
      })
    dispatch({ type: 'ADD_REWARD', xpReward: 15, goldReward: 25, otherReward: null })
    // can dispatch things to stats, etc as well
  } else {
    console.log('player lost') // can dispatch stat event later as well
    dispatch({ type: 'ADD_TO_DEATHS' })
  }
  
  dispatch({ type: 'CLEAR_BATTLE' })
}


// REDUCERS
const initialState: BattleState = {
  loading: false,
  active: false,
  round: 0,
  monsterName: '',
  monsterHealth: null,
  monsterDamage: null,
  xpReward: null,
  goldReward: null,
  otherReward: null,
  errors: null,
  //playerTurn: true,   // can randomize later
}

const battleReducer = (
  state=initialState,
  action: BattleActionTypes
): BattleState => {
  switch(action.type) {
    case 'INCREMENT_ROUND':
      return {
        ...state,
        round: state.round+1,
        //playerTurn: true
      }
    case 'DAMAGE_MONSTER':
      return {
        ...state,
        monsterHealth: state.monsterHealth! - action.damage
      }
    case 'LOADING_BATTLE':
      return {
        ...state,
        loading: true
      }
    case 'SET_BATTLE':
      return {
        ...state,
        monsterName: action.monsterName,
        monsterHealth: action.monsterHealth,
        monsterDamage: action.monsterDamage,
        xpReward: action.xpReward,
        goldReward: action.goldReward,
        otherReward: action.otherReward,  // can set to null in the action
        errors: null,
        active: true,
        loading: false,
      }
    case 'CLEAR_BATTLE':
      return initialState
    case 'SET_BATTLE_ERROR':
      return {
        ...state,
        loading: false,
        errors: action.err,
      }
    default:
      return state
  }
}

export default battleReducer

//export const isPlayerDead = () => state.