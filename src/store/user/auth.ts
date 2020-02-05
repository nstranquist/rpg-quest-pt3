// manages user authentication state
// includes types, actions, and reducers
import { Dispatch } from 'redux'
import { auth, firestore } from '../../utils/fbConfig'

// TYPES:
export interface AuthState {
  isAuth: boolean
  token?: null | string
  loadingAuth: boolean
  errors: any
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
  | { readonly type: 'LOADING_AUTH' }


// ACTIONS:
export const attemptLogin = (email: string, password: string) => (dispatch: Dispatch) => {
  dispatch({ type: 'LOADING_AUTH' })
  console.log('attempt login')
  auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log('user signed up:', user)
      dispatch({ type: 'AUTHENTICATE'})
    })
    .catch(err => {
      console.log('error signing in:', err)
      dispatch({ type: 'SET_AUTH_ERROR', err})
    })
}
export const attemptSignup = (username: string, email: string, password: string) => (dispatch: Dispatch) => {
  dispatch({ type: 'LOADING_AUTH' })
  console.log('attempt signup')
  auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log('user account created:', user)
      dispatch({ type: 'AUTHENTICATE'})
      firestore
        .doc(`/profiles/${user.user!.uid}`)
        .set({
          username,
          hp: 50, // baseHealth
          damage: 8, // baseDamage (can change later based on their chosen 'class')
          xp: 0,
          level: 1,
          gold: 0,
          castle: false,
          maxItems: 5
        })
        .catch(err => console.log(err)) // shouldn't be an error here, so not dispatching
    })
    .catch(err => {
      console.log('signup error:', err)
      dispatch({ type: 'SET_AUTH_ERROR', err })
    })
}
export const logout = () => (dispatch: Dispatch) => {
  console.log('logout')
  auth.signOut()
    .then(() => {
      dispatch({ type: 'UNAUTHENTICATE' })
      console.log('signed out')
    })
    .catch(err => console.log(err)) // shouldn't be an error here, so not going to dispatch 'SET_AUTH_ERROR'
}


// REDUCER:
const initialState: AuthState = {
  isAuth: false,
  token: null,
  loadingAuth: false,
  errors: null
}

const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch(action.type) {
    case 'AUTHENTICATE':
      return {
        ...state,
        isAuth: true,
        loadingAuth: false,
        errors: null
      }
    case 'UNAUTHENTICATE':
      return {
        ...state,
        isAuth: false,
        loadingAuth: false,
        errors: null
      }
    case 'LOADING_AUTH':
      return {
        ...state,
        loadingAuth: true,
      }
    case 'SET_AUTH_ERROR':
      return {
        ...state,
        errors: action.err,
        loadingAuth: false,
      }
    // is a clear errors dispatch needed ?
    default:
      return state
  }
}

export default authReducer