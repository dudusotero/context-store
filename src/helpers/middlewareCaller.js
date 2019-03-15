import { useEffect } from 'react'

export default (dispatch, middlewares) => useEffect(() => {
  middlewares.forEach((func) => {
    func(dispatch)
  })
}, [dispatch, middlewares])
