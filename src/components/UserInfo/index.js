import UserInfo from './UserInfo'
import * as actions from './actions'
import middleware from './middleware'
import reducer, { initialState } from './reducer'

export const userActions = actions
export const userMiddleware = middleware
export const userReducer = reducer
export const userInitialState = initialState

export default UserInfo
