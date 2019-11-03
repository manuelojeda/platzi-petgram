import React from 'react'
import { Image, Grid, Link } from './styles'

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
