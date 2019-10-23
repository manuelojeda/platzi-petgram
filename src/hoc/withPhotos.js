import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const GET_PHOTOS = gql`
query getPhoto($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    likes
  }
}
`

export const withPhotos = graphql(GET_PHOTOS)
