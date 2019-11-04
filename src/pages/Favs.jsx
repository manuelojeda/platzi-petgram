import React from 'react'
import { Layout } from '../components/Layout/index.jsx'
import { FavsWithQuery } from '../container/GetFavs.jsx'

export default () => {
  return (
    <Layout title='Petgram - Your favourites' subtitle='Here you can find your favourites'>
      <FavsWithQuery />
    </Layout>
  )
}
