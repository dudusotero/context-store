export const fetchData = () => ({
  type: 'TODOS_FETCH',
})

export const fetchSuccess = payload => ({
  type: 'TODOS_FETCH_SUCCESS',
  payload,
})

export const fetchError = payload => ({
  type: 'TODOS_FETCH_ERROR',
  payload,
})

export const add = payload => ({
  type: 'TODOS_ADD',
  payload,
})

export const remove = payload => ({
  type: 'TODOS_REMOVE',
  payload,
})
