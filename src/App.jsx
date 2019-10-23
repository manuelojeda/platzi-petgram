/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
// import { PhotoCardWithQuery } from './container/PhotoCardWithQuery.jsx'
import { Logo } from './components/Logo/index.jsx'
import { NavBar } from './components/Navbar/index.jsx'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home.jsx'
import { Details } from './pages/Details.jsx'
import { Favs } from './pages/Favs.jsx'
import { User } from './pages/User.jsx'
import { NotRegisteredUser } from './pages/NotRegisteredUser.jsx'
import { Router, Link } from '@reach/router'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}
export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Link to='/'>
        <Logo />
      </Link>
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Details path='/detail/:id' />
      </Router>

      <UserLogged>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
        }
      </UserLogged>
      <NavBar />
    </div>
  )
}
