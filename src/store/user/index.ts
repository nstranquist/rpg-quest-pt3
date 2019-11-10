// import profile/auth
import { combineReducers } from 'redux'
import authReducer from './auth'
import profileReducer from './profile'
import statReducer from './stats'

// export user
export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  stats: statReducer,
})