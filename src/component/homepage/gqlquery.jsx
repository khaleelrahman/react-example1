import { gql } from "@apollo/client";

export const QUERRY=gql`
{
  episodesByIds(ids: [1, 2]) {
    characters {
      name
      status
      species
      type
      gender
      image
      
     
    }
  }
}

`