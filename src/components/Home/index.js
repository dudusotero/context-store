import React, { Fragment } from 'react'

import { UserInfo, TodosList } from '..'

export default function Home() {
  return (
    <Fragment>
      <UserInfo />
      <TodosList />
    </Fragment>
  )
}
