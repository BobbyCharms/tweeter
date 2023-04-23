const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    email: String
    tweeterYellow: Boolean
    createdAt: String
    twits: [Twit]
  }

  type Twit {
    _id: ID
    userId: ID
    username: String
    twitText: String
    thumbsUp: Int
    thumbsDown: Int
    retwitCounter: Int
    createdAt: String
    updatedAt: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    twitId: ID
    userId: ID
    username: String
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
    users: [User]
    singleUser(userId: ID!): User
    twits: [Twit]
    userTwits(userId: ID!): [Twit]
    singleTwit(twitId: ID!): Twit
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

module.exports = typeDefs;
