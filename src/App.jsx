import React from 'react'
import { CategoriesList } from './components/CategoriesList/index.jsx'
import { PhotoCardList } from './components/PhotoCardList/index.jsx'
import { Logo } from './components/Logo/index.jsx'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <CategoriesList />
      <PhotoCardList />
    </div>
  )
}
