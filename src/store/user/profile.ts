// manages user profile data state
// includes types, actions, and reducers
import { Dispatch } from 'redux'
import { auth, firestore } from '../../fbConfig'

// TYPES:
export interface ProfileState {
  name: string
  xp: number | null  // move to backend
  level: number | null // move to backend
  gold: number | null
  hp: number | null
  damage: number | null // or undefined?
  loading: boolean
  errors: any
}

interface getProfileData {
  readonly type: 'SET_PROFILE_DATA'
  profileData: ProfileState // beware of shallow copying
}
interface damagePlayer {
  readonly type: 'DAMAGE_PLAYER'
  damage: number
}
interface addReward {
  readonly type: 'ADD_REWARD'
  xpReward: number
  goldReward: number
  otherReward?: any
}

type ProfileActionTypes =
  | getProfileData
  | damagePlayer
  | addReward
  | { readonly type: 'SET_PROFILE_ERRORS', err: any }
  | { readonly type: 'LOADING_PROFILE' }


// ACTIONS:
export const getProfileData = () => (dispatch: Dispatch) => {
  console.log('called get profile data action')
  dispatch({ type: 'LOADING_PROFILE' })
  firestore
    .doc(`profiles/${auth.currentUser!.uid}`)
    .get()
    .then(doc => {
      console.log('user data from thunk:', doc)
      const profileData = {
        name: doc.data()!.username,
        xp: doc.data()!.xp,
        level: doc.data()!.level,
        gold: doc.data()!.gold,
        hp: doc.data()!.hp,
        damage: doc.data()!.damage,
      }
      dispatch({ type: 'SET_PROFILE_DATA', profileData})
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: 'SET_PROFILE_ERRORS', err })
    })
}


// REDUCER:
const initialState: ProfileState = {
  name: '',
  xp: null,
  level: null,
  gold: null,
  hp: null,
  damage: null,
  loading: false,
  errors: null,
}

const profileReducer = (
  state = initialState,
  action: ProfileActionTypes
): ProfileState => {
  switch(action.type) {
    case 'SET_PROFILE_DATA':
      return {
        ...state,
        name: action.profileData.name,
        xp: action.profileData.xp,
        level: action.profileData.level,
        gold: action.profileData.gold,
        hp: action.profileData.hp,
        damage: action.profileData.damage,
        loading: false,
        errors: null
      }
    case 'DAMAGE_PLAYER':
      return {
        ...state,
        hp: state.hp! - action.damage
      }
    case 'ADD_REWARD':
      return {
        ...state,
        xp: state.xp! + action.xpReward,
        gold: state.gold! + action.goldReward,
        // leaving out 'otherReward' for now
      }
    case 'LOADING_PROFILE':
      return {
        ...state,
        loading: true,
      }
    case 'SET_PROFILE_ERRORS':
      return {
        ...state,
        loading: false,
        errors: action.err
      }
    default:
      return state
  }
}

export default profileReducer
