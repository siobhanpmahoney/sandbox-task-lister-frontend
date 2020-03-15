import {loginCurrentUser, fetchCurrentUser} from '../utils'


export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER'

export function fetchCurrentUserAction(jwt) {
  return(dispatch) => {
    return fetchCurrentUser(jwt)
    .then(json => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: json
      })
      return json.user.id;
    })
  }
}

export function removeCurrentUserAction() {
  return {
    type: REMOVE_CURRENT_USER,
  };
}
