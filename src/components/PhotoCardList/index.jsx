import React from 'react'
import { PhotoCard } from '../PhotoCard/index.jsx'
import { Item } from './styles'

export const PhotoCardList = () => {
  return (
    <ul>
      {
        [1, 2, 3].map(id => (
          <Item key={id}>
            <PhotoCard />
          </Item>
        ))
      }
    </ul>
  )
}
