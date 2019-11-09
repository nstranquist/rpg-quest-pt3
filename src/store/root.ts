import { combineReducers } from 'redux'
import user from './user'

const rootApp = combineReducers({
  user,

})

export default rootApp

export type RootState = ReturnType<typeof rootApp>