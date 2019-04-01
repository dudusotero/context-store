import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { ContextProvider } from './store'
import Routes from './routes'

const App = () => (
  <ContextProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ContextProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
