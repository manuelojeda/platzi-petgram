/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, Suspense } from 'react'
// import { PhotoCardWithQuery } from './container/PhotoCardWithQuery.jsx'
import { Logo } from './components/Logo/index.jsx'
import { NavBar } from './components/Navbar/index.jsx'
import { GlobalStyle } from './styles/GlobalStyles'
import { Router, Link, Redirect } from '@reach/router'
import { Context } from './Context.jsx'

const Home = React.lazy(() => import('./pages/Home.jsx'))
const Favs = React.lazy(() => import('./pages/Favs.jsx'))
const Details = React.lazy(() => import('./pages/Details.jsx'))
const User = React.lazy(() => import('./pages/User.jsx'))
const NotFound = React.lazy(() => import('./pages/NotFound.jsx'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser.jsx'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  )
}
