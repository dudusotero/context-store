import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const isAuthenticated = () => true

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{ pathname: '/signin', state: { from: props.location } }}
      />
    ))
    }
  />
)
