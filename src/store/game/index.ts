// for managing certain states of the game, could rename to 'rpg'
//import { Dispatch } from 'redux'

// TYPE DEFINITIONS
export interface GameState {
  battleActive: boolean
  loading: boolean
  errors: any
  //loading? errors? 'freeze'? hmm
  // game loop?
}



export type GameActionTypes = 
  | {readonly type: 'LOADING_GAME' }
  | {readonly type: 'SET_GAME_ERR', err: any }


// ACTIONS


// REDUCER
const initialState: GameState = {
  battleActive: false,
  loading: false,
  errors: null,
}

const gameReducer = (
  state=initialState,
  action: GameActionTypes
): GameState => {
  switch(action.type) {
    case 'LOADING_GAME':
      return {
        ...state,
        loading: true,
      }
    case 'SET_GAME_ERR':
      return {
        ...state,
        loading: false,
        errors: action.err
      }
    default:
      return state
  }
}

export default gameReducer