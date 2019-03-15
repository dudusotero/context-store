import { fetchData, fetchSuccess, fetchError } from './actions'

export default (dispatch) => {
  dispatch(fetchData())
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=2')
    .then(response => response.json())
    .then(json => dispatch(fetchSuccess(json)))
    .catch(err => dispatch(fetchError(err)))
}
