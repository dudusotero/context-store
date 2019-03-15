import React, { Fragment } from 'react'

import { ContextProvider } from './store'
import { UserInfo, TodosList } from './components'

const App = () => (
  <ContextProvider>
    <Fragment>
      <UserInfo />
      <TodosList />
    </Fragment>
  </ContextProvider>
)

export default App
