import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Button, Error } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }
  return (
    <>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input type='email' placeholder='Email' {...email} disabled={disabled} />
        <Input type='password' placeholder='Password' {...password} disabled={disabled} />
        <Button disabled={disabled}>
          {title}
        </Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
