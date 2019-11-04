import React from 'react'
import { Image, Grid, Link } from './styles'
import propTypes from 'prop-types'

export const FavsList = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.map(fav => {
          return (
            <Link key={fav.id} to={`/detail/${fav.id}`}>
              <Image src={fav.src} />
            </Link>
          )
        })
      }
    </Grid>
  )
}

FavsList.propTypes = {
  favs: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      src: propTypes.string.isRequired
    })
  )
}
