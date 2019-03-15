import { todosMiddleware } from '../components/TodosList'
import { userMiddleware } from '../components/UserInfo'

export default [
  dispatch => todosMiddleware(dispatch),
  dispatch => userMiddleware(dispatch),
]
