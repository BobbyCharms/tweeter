const { AuthenticationError } = require('apollo-server-express');
const { User, Twit, Comment } = require('../models/index.js');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    twits: async () => {
      return Twit.find();
    },
    userTwits: async (parent, { userId }) => {
      return Twit.find({userId: userId});
    }
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
    addTwit: async (parent, { twitText }, context) => {
      if (context.user) {
        return await Twit.create({ userId: context.user._id, twitText: twitText })
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    editTwit: async (parent, { twitId, twitText }, context) => {
      const editTwit = Twit.find({_id: twitId});
      if (context.user._id === editTwit.userId) {
        return await Twit.findOneAndUpdate(
          {_id: twitId,
          twitText: twitText},
          { new: true, runValidators: true}
        );
      }
      throw new AuthenticationError("That's not your twit!");
    },
    deleteTwit: async (parent, { twitId }, context) => {
      const deletedTwit = Twit.find({_id: twitId});
      if (context.user._id === deletedTwit.userId) {
        return await Twit.findByIdAndDelete({twitId}) 
      }
      throw new AuthenticationError("That's not your twit!");
    },
  }
};

module.exports = resolvers;
