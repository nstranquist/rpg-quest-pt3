// can play into the 'rpg' side of the game
// can record things like total battles won, lost, total deaths, days elapsed, etc

//TYPES:
export interface StatState {
  totalDeaths: number | null
}

export type StatActions =
  | {readonly type: 'ADD_TO_DEATHS' }


// ACTIONS:



// REDUCERS:
// would have to be set when getting profile data... so maybe wait on this one

const initialState: StatState = {
  totalDeaths: null
}

const statReducer = (
  state=initialState,
  action: StatActions
): StatState => {
  switch(action.type) {
    case 'ADD_TO_DEATHS':
      return {
        ...state,
        totalDeaths: state.totalDeaths! + 1
      }
    default:
      return state
  }
}

export default statReducer