import React from 'react'
import { PhotoCard } from '../PhotoCard/index.jsx'
import { Item } from './styles'

export const PhotoCardListComponent = ({ data: { photos = [] } }) => {
  return (
    <ul>
      {
        photos.map(photo => (
          <Item key={photo.id}>
            <PhotoCard id={photo.id} {...photo} />
          </Item>
        ))
      }
    </ul>
  )
}
