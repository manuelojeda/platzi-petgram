import React from 'react'
import { Query } from 'react-apollo'
import { PhotoCard } from '../PhotoCard/index.jsx'

export const PhotoCardWithQueryComponent = ({ id }, { data: { photo = {} } }) => {
  console.log(id)
  return (
    <Query variables={{ id }}>
      <PhotoCard {...photo} />
    </Query>
  )
}
