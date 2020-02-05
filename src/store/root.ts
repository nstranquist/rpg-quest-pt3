import { combineReducers } from 'redux'
// import reducers
import user from './user'
import battle from './battle'
import game from './game'

const rootApp = combineReducers({
  user,
  battle,
  game,
})

export default rootApp

export type RootState = ReturnType<typeof rootApp>