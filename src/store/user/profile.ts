// manages user profile data state
// includes types, actions, and reducers
import { Dispatch } from 'redux'
import { auth, firestore } from '../../fbConfig'

// TYPES:
interface ProfileState {
  name: string
  xp: number | null  // move to backend
  level: number | null // move to backend
  gold: number | null
  hp: number | null
}

interface setProfileData {
  readonly type: 'SET_PROFILE_DATA'
  profileData: ProfileState // beware of shallow copying
}

type ProfileActionTypes =
  | setProfileData
  | { readonly type: 'LOADING_PROFILE' }


// ACTIONS:
export const setProfileData = () => (dispatch: Dispatch) => {
  console.log('called set profile data action')
}


// REDUCER:
const initialState: ProfileState = {
  name: '',
  xp: null,
  level: null,
  gold: null,
  hp: null,
}

const profileReducer = (
  state = initialState,
  action: ProfileActionTypes
): ProfileState => {
  switch(action.type) {
    default:
      return state
  }
}

export default profileReducer