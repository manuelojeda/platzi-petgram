import React, { useContext } from 'react'
import { Layout } from '../components/Layout/index.jsx'
import { Context } from '../Context.jsx'
import { Button } from '../components/UserForm/styles'

export default () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout title='Petgram - User settings' subtitle='Your petgram settings'>
      <h1>User</h1>
      <Button onClick={removeAuth}>Logout</Button>
    </Layout>
  )
}
