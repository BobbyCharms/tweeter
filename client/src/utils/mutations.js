import { gql } from `@apollo/client;`

export const CREATE_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        tweeterYellow
        createdAt
      }
    }
  }
  `;

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        tweeterYellow
        email
        createdAt
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation Mutation($userId: ID!, $password: String!) {
    deleteUser(userId: $userId, password: $password) {
      _id
      username
      email
    }
  }
`;

export const ADD_TWIT = gql`
  mutation Mutation($twitText: String!) {
    addTwit(twitText: $twitText) {
      _id
      userId
      twitText
      thumbsUp
      thumbsDown
      retwitCounter
      createdAt
    }
  }
`;

export const EDIT_TWIT = gql`
  mutation Mutation($twitId: ID!, $editTwitTwitText2: String!) {
    editTwit(twitId: $twitId, twitText: $editTwitTwitText2) {
      _id
      userId
      twitText
      thumbsUp
      thumbsDown
      retwitCounter
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_TWIT = gql`
  mutation Mutation($twitId: ID!) {
    deleteTwit(twitId: $twitId) {
      _id
      userId
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation Mutation($twitId: ID!, $commentText: String!) {
    addComment(twitId: $twitId, commentText: $commentText) {
      _id
      twitId
      userId
      commentText
      thumbsUp
      thumbsDown
      createdAt
    }
  }
`;

export const EDIT_COMMENT = gql`
  mutation Mutation($commentId: ID!, $commentText: String!) {
    editComment(commentId: $commentId, commentText: $commentText) {
      _id
      twitId
      userId
      commentText
      thumbsUp
      thumbsDown
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation Mutation($commentId: ID!) {
    deleteComment(commentId: $commentId) {
      _id
      twitId
      userId
    }
  }
`;

