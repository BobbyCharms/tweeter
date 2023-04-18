const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    tweeterYellow: Boolean
    twits: [Twit]!
  }

  type Twit {
    _id: ID
    userId: ID
    twitText: String
    thumbsUp: Int
    thumbsDown: Int
    retwitCounter: Int
    createdAt: Date
    updatedAt: Date
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    twitId: ID
    userId: ID
    commentText: String
    thumbsUp: Int
    thumbsDown: Int
    createdAt: Date
    updatedAt: Date
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    twits: [Twit]
    userTwits(userId: ID!): [Twit]
  }
`;

// Twuts is also being used to access userId and thus username for the side bar
// use a recentReactedTwits if we want a recent drama side bar instead

module.exports = typeDefs;
