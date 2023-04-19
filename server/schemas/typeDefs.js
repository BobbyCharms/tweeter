const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
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
    createdAt: String
    updatedAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    twitId: ID
    userId: ID
    commentText: String
    thumbsUp: Int
    thumbsDown: Int
    createdAt: String
    updatedAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    twits: [Twit]
    userTwits(userId: ID!): [Twit]
  }

  type Mutation {
    addTwit(twitText: String!): Twit
    editTwit(twitId: ID!, twitText: String!): Twit
    deleteTwit(twitId: ID!): Twit

    addComment(twitId: ID!, commentText: String!): Comment
    editComment(commentId: ID!, commentText: String!): Comment
    deleteComment(commentId: ID!): Comment

    createUser(username: String!, email: String!, password: String!): Auth
    deleteUser(userId: ID!, password: String!): User
    login(email: String!, password: String!): Auth
  }
`;

// Twuts is also being used to access userId and thus username for the side bar
// use a recentReactedTwits if we want a recent drama side bar instead

module.exports = typeDefs;
