import { todosReducer, todosInitialState } from '../components/TodosList'
import { userInitialState, userReducer } from '../components/UserInfo'

export const initialState = {
  todos: todosInitialState,
  user: userInitialState,
}

export default ({ todos, user }, action) => ({
  todos: todosReducer(todos, action),
  user: userReducer(user, action),
})
