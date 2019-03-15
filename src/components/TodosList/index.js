import TodosList from './TodosList'
import * as actions from './actions'
import middleware from './middleware'
import reducer, { initialState } from './reducer'

export const todosActions = actions
export const todosMiddleware = middleware
export const todosReducer = reducer
export const todosInitialState = initialState

export default TodosList
