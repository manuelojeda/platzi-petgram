import React, { useContext } from 'react'
import { Wrapper } from './styles'
import { Context } from '../Context.jsx'
import { Button } from '../components/UserForm/styles'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <Wrapper>
      <h1>User</h1>
      <Button onClick={removeAuth}>Logout</Button>
    </Wrapper>
  )
}
