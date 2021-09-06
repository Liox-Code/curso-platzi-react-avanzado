import React from 'react'
import { PhotoCard } from '../components/PhotoCard/Index'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const query = gql`query getSinglePhoto($id: ID!){
    photo(id:$id){
        id
        categoryId
        src
        likes
        userId 
        liked
    }
}`

export const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={query} variables={{ id }}>
      {
        ({ loading, error, data }) => {
          if (!data) {
            return <h1>Loading</h1>
          } else {
            const { photo = {} } = data
            return <PhotoCard {...photo} />
          }
        }
      }
    </Query>
  )
}
