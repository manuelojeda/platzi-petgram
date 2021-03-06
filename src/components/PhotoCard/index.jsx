/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation.jsx'
import { FavButton } from '../FavButton/index.jsx'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {
        show && <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='PhotoCard' />
            </ImgWrapper>
          </Link>

          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({
                    variables: {
                      input: { id }
                    }
                  })
                }
                return <FavButton liked={liked} setLiked={handleFavClick} likes={likes} />
              }
            }
          </ToggleLikeMutation>
        </>
      }
    </Article>
  )
}
