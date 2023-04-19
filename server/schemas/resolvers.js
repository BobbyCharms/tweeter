const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return [
        {
          _id: 'asdioufo9a8rtjaod8iosmf',
          username: 'Mork',
          email: 'mork@nanoo.org',
          password: 'youllneverguess',
        },
      ];
    },
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user)

      return { token, user }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user)

      return { token, user }
    },
    deleteUser: async (parent, { userId, password }) => {
      const user = await User.findByIdAnd({ userId })

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      return await User.findByIdAndDelete({ userId })
    },
    addComment: async (parent, { twitId, commentText }) => {
      return await Comment.create({ twitId, commentText })
    },
    editComment: async (parent, { commentId, commentText }) => {
      return await Comment.findOneAndUpdate(
        {_id: commentId,
        commentText: commentText},
        { new: true, runValidators: true}
      );
    },
    deleteComment: async (parent, { commentId }) => {
      return await Comment.findByIdAndDelete({commentId}) 
    },
  }
};

module.exports = resolvers;
