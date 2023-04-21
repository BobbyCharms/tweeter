import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query Query {
    users {
      _id
      username
      email
      tweeterYellow
      createdAt
      twits {
        _id
        userId
        twitText
        thumbsUp
        thumbsDown
        retwitCounter
        createdAt
        updatedAt
        comments {
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
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query Query($userId: ID!) {
    singleUser(userId: $userId) {
      _id
      username
      email
      tweeterYellow
      createdAt
      twits {
        _id
        userId
        twitText
        thumbsUp
        thumbsDown
        retwitCounter
        createdAt
        updatedAt
        comments {
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
    }
  }
`;

export const QUERY_TWITS = gql`
  query Query {
    twits {
      _id
      userId
      username
      twitText
      thumbsUp
      thumbsDown
      retwitCounter
      createdAt
      updatedAt
      comments {
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
  }
`;

export const QUERY_USER_TWITS = gql`
  query Query($userId: ID!) {
    userTwits(userId: $userId) {
      _id
      userId
      username
      twitText
      thumbsUp
      thumbsDown
      retwitCounter
      createdAt
      updatedAt
      comments {
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
  }
`;

export const QUERY_SINGLE_TWIT = gql`
  query Query($twitId: ID!) {
    singleTwit(twitId: $twitId) {
      _id
      userId
      twitText
      thumbsUp
      thumbsDown
      retwitCounter
      createdAt
      updatedAt
      comments {
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
  }
`;
