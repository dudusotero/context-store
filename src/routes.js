import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { PrivateRoute, Home, SignUp } from './components'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={SignUp} />
    <PrivateRoute path="/private" component={() => <h1>Private</h1>} />
    <Route path="*" component={() => <h1>Page 404</h1>} />
  </Switch>
)

export default Routes
