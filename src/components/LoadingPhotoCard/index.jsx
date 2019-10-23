import React from 'react'
import { ImgWrapper, Img, Article } from '../PhotoCard/styles'

export const LoadingPhotoCard = () => {
  return (
    <Article>
      <ImgWrapper>
        <Img src='https://via.placeholder.com/800x533?text=Loading' />
      </ImgWrapper>
    </Article>
  )
}
