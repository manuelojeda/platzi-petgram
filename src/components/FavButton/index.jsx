import React from 'react'
import { Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import propTypes from 'prop-types'

export const FavButton = ({ liked, likes = 0, setLiked }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={() => setLiked(!liked)}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}

FavButton.propTypes = {
  liked: propTypes.bool.isRequired,
  likes: propTypes.number.isRequired,
  setLiked: propTypes.func.isRequired
}
