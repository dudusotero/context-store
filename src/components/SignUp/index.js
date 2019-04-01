import React, { useState, useEffect } from 'react'

import { useRouter } from '../../hooks'
import { getUrlParams } from '../../helpers'
import {
  Wrapper, Form, Input, ButtonSubmit, Button,
} from './styles'

export default function SignUp() {
  const [username, setUsername] = useState('')
  const { location } = useRouter()

  useEffect(() => {
    const { social, id } = getUrlParams(location.search)
    console.log(social, id)
  }, [location])

  function goTo(path) {
    window.location.href = `http://localhost:4500/auth/${path}`
  }

  const handleSubmit = e => e.preventDefault()

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input value={username} onChange={e => setUsername(e.target.value)} />
        <Button bgColor="#3a589e" onClick={() => goTo('facebook')}>
          Facebook
        </Button>
        <Button color="#757575" bgColor="#fff" onClick={() => goTo('google')}>
          Google
        </Button>
        <Button bgColor="#6441a5" onClick={() => goTo('twitch')}>
          Twitch
        </Button>
        <ButtonSubmit>Submit</ButtonSubmit>
      </Form>
    </Wrapper>
  )
}
