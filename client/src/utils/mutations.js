import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const SAVE_BOOK = gql`
  mutation SaveBook($authors: String!, $description: String!, $title: String!, $bookId: String!, $image: String!, $link: String!) {
  saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
    _id
    bookCount
    email
    username
    savedBooks {
      _id
      bookId
      title
      authors
      description
      image
      link
    }
  }
}
`;

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    bookCount
    email
    username
    savedBooks {
      _id
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;