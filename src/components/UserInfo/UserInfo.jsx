import React from 'react'

import { useStore } from '../../store'
import { getUserInfo } from './services'

const UserInfo = () => {
  const { user, dispatch } = useStore()

  function refreshData() {
    getUserInfo(dispatch)
  }

  return (
    <div>
      <h1>User Info</h1>
      <button type="button" onClick={refreshData}>
        Renew UserInfo
      </button>
      <p>{user.loading ? 'Loading...' : JSON.stringify(user.data)}</p>
    </div>
  )
}

export default UserInfo
