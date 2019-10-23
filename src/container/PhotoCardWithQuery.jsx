import React from 'react'
import { PhotoCard } from '../components/PhotoCard/index.jsx'
import { LoadingPhotoCard } from '../components/LoadingPhotoCard/index.jsx'
import { Query } from 'react-apollo'
import { getSinglePhoto } from '../hoc/PhotoWithQuery'
import { PhotoWrapper } from './styles/styles'

const renderProp = ({ loading, error, data }) => {
  if (loading) return <LoadingPhotoCard />
  if (error) return <p>`Error! ${error.message}`</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => {
  return (
    <PhotoWrapper>
      <Query query={getSinglePhoto} variables={{ id }}>
        {
          renderProp
        }
      </Query>
    </PhotoWrapper>
  )
}
