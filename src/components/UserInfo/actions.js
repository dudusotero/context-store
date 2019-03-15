export const fetchData = () => ({
  type: 'USER_FETCH',
})

export const fetchSuccess = payload => ({
  type: 'USER_FETCH_SUCCESS',
  payload,
})

export const fetchError = payload => ({
  type: 'USER_FETCH_ERROR',
  payload,
})
