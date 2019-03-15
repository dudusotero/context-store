import { fetchData, fetchSuccess, fetchError } from './actions'

export const getUserInfo = (dispatch) => {
  dispatch(fetchData())
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => dispatch(fetchSuccess(json)))
    .catch(err => dispatch(fetchError(err)))
}
