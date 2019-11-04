import React from 'react'
import { Layout } from '../components/Layout/index.jsx'
import { CategoriesList } from '../components/CategoriesList/index.jsx'
import { PhotoCardsList } from '../container/PhotoCardsList.jsx'

const HomePage = ({ id }) => {
  return (
    <>
      <Layout title='Your pets photos repository'>
        <CategoriesList />
        <PhotoCardsList categoryId={id} />
      </Layout>
    </>
  )
}

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
