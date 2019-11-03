import React from 'react'
import { Wrapper } from './styles'
import { FavsWithQuery } from '../container/GetFavs.jsx'

export const Favs = () => {
  return (
    <Wrapper>
      <h1>Favs</h1>
      <FavsWithQuery />
    </Wrapper>
  )
}
