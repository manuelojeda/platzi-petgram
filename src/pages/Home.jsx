import React from 'react'
import { CategoriesList } from '../components/CategoriesList/index.jsx'
import { PhotoCardsList } from '../container/PhotoCardsList.jsx'

export const Home = ({ id }) => {
  return (
    <>
      <CategoriesList />
      <PhotoCardsList categoryId={id} />
    </>
  )
}
