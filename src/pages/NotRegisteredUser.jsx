import React, { useContext } from 'react'
import { Context } from '../Context.jsx'
import { RegisterMutation } from '../container/RegisterMutation.jsx'
import { LoginMutation } from '../container/LoginMutation.jsx'
import { UserForm } from '../components/UserForm/index.jsx'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables })
                .then(({ data }) => {
                  const { signup } = data
                  activateAuth(signup)
                })
            }

            const errorMsg = error && 'El usuario ya existe o hay algún problema.'

            return (
              <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
            )
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }

            const errorMsg = error && 'La contraseña no es correcta o el usuario no existe'

            return <UserForm disabled={loading} error={errorMsg} title='Iniciar sesión' onSubmit={onSubmit} />
          }
        }
      </LoginMutation>
    </>
  )
}