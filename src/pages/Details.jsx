import React from 'react'
import { Layout } from '../components/Layout/index.jsx'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery.jsx'

export const Details = ({ id }) => {
  return (
    <Layout title='Details'>
      <PhotoCardWithQuery id={id} />
    </Layout>
  )
}
