import { useQuery } from 'react-apollo-hooks'
import { gql } from 'apollo-boost'

const getSinglePhoto = gql`
query getSinglePhoto($id:ID!) {
  photo(id: $id) {
    id
    categoryId
    src
    likes
    userId
    likes
  }
}
`

export const useGetSinglePhoto = (id) => {
  console.log(id)
  const { loading, data, error } = useQuery(getSinglePhoto, { variables: { id } })
  return { loading, data, error }
}
