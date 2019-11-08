// manages user authentication state
// includes types, actions, and reducers
import { Dispatch } from 'redux'
import { auth, firestore } from '../../fbConfig'

// TYPES:
interface AuthState {
  isAuth: boolean
  token?: null | string
}

interface attemptLogin {
  readonly type: 'AUTHENTICATE'
  email: string
  password: string
}
interface attemptSignup {
  readonly type: 'AUTHENTICATE'
  email: string
  password: string
}
interface logout {
  readonly type: 'UNAUTHENTICATE'
}
interface setAuthError {
  readonly type: 'SET_AUTH_ERROR'
  err: any
}

type AuthActionTypes =
  | attemptLogin
  | attemptSignup
  | logout
  | setAuthError
  | { type: 'LOADING_AUTH' }


// ACTIONS:
export const attemptLogin = (email: string, password: string) => (dispatch: Dispatch) => {
  console.log('attempt login')
}
export const attemptSignup = (email: string, password: string) => (dispatch: Dispatch) => {
  console.log('attempt signup')
}
export const logout = () => (dispatch: Dispatch) => {
  console.log('logout')
}


// REDUCER:
const initialState: AuthState = {
  isAuth: false,
  token: null
}

const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch(action.type) {
    default:
      return state
  }
}

export default authReducer