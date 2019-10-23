import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery.jsx'

export const Details = ({ id }) => {
  return (
    <div>
      <PhotoCardWithQuery id={id} />
    </div>
  )
}
