import React from 'react'
import { Layout } from '../components/Layout/index.jsx'
import { FavsWithQuery } from '../container/GetFavs.jsx'

export const Favs = () => {
  return (
    <Layout title='Petgram - Your favourites' subtitle='Here you can find your favourites'>
      <h1>Favs</h1>
      <FavsWithQuery />
    </Layout>
  )
}
