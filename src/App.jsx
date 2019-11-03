/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext } from 'react'
// import { PhotoCardWithQuery } from './container/PhotoCardWithQuery.jsx'
import { Logo } from './components/Logo/index.jsx'
import { NavBar } from './components/Navbar/index.jsx'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home.jsx'
import { Details } from './pages/Details.jsx'
import { Favs } from './pages/Favs.jsx'
import { User } from './pages/User.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { NotRegisteredUser } from './pages/NotRegisteredUser.jsx'
import { Router, Link, Redirect } from '@reach/router'
import { Context } from './Context.jsx'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <div>
      <GlobalStyle />
      <Link to='/'>
        <Logo />
      </Link>
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Details path='/detail/:id' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>

      <NavBar />
    </div>
  )
}
