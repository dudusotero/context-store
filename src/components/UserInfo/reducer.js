export const initialState = {
  data: [],
  loading: false,
}

export default (state, action) => {
  switch (action.type) {
    case 'USER_FETCH':
      return { ...state, loading: true }
    case 'USER_FETCH_SUCCESS':
      return { loading: false, data: action.payload }
    case 'USER_FETCH_ERROR':
      return { loading: false }
    default:
      return state
  }
}
