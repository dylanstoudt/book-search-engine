import { gql } from '@apollo/client';

export const GET_ME = gql`
query Query {
  me {
    _id
    email
    username
    bookCount
    savedBooks {
      _id
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`;