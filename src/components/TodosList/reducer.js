export const initialState = {
  data: [],
  loading: false,
}

export default (state, action) => {
  switch (action.type) {
    case 'TODOS_FETCH':
      return { ...state, loading: true }
    case 'TODOS_FETCH_SUCCESS':
      return { loading: false, data: action.payload }
    case 'TODOS_FETCH_ERROR':
      return { loading: false }
    case 'TODOS_ADD':
      return { ...state, data: [...state.data, action.payload] }
    case 'TODOS_REMOVE':
      return {
        ...state,
        data: [...state.data.filter(todo => todo.id !== action.payload)],
      }
    default:
      return state
  }
}
