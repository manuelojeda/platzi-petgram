import React from 'react'
import { Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FavButton = ({ liked, likes = 0, setLiked }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={() => setLiked(!liked)}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}
