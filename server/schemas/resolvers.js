const { AuthenticationError } = require('apollo-server-express');
const { User, Twit, Comment } = require('../models/index.js');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate({
        path: 'twits',
        populate: {
          path: 'comments',
        },
      });
    },
    singleUser: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate({
        path: 'twits',
        populate: {
          path: 'comments',
        },
      });
    },
    twits: async () => {
      return Twit.find().populate('comments');
    },
    userTwits: async (parent, { userId }) => {
      return Twit.find({ userId: userId }).populate('comments');
    },
    singleTwit: async (parent, { twitId }) => {
      return Twit.findOne({ _id: twitId }).populate('comments');
    },
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);

      return { token, user };
    },
    deleteUser: async (parent, { userId, password }) => {
      const user = await User.findOne({ _id: userId });

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      return await User.findOneAndDelete({ _id: userId });
    },
    addComment: async (parent, { twitId, commentText }, context) => {
      if (context.user) {
        return await Comment.create({
          twitId,
          commentText,
          userId: context.user._id,
        });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    editComment: async (parent, { commentId, commentText }, context) => {
      const editComment = await Comment.findOne({ _id: commentId });
      if (context.user._id === editComment.userId) {
        return await Comment.findOneAndUpdate(
          { _id: commentId },
          { commentText: commentText },
          { new: true, runValidators: true }
        );
      }
      throw new AuthenticationError("That's not your comment!");
    },
    deleteComment: async (parent, { commentId }, context) => {
      const deletedComment = await Comment.findOne({ _id: commentId });
      if (context.user._id === deletedComment.userId) {
        return await Comment.findOneAndDelete({ _id: commentId });
      }
      throw new AuthenticationError("That's not your comment!");
    },
    addTwit: async (parent, { twitText }, context) => {
      if (context.user) {
        return await Twit.create({
          userId: context.user._id,
          username: context.user.username,
          twitText: twitText,
        });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    editTwit: async (parent, { twitId, twitText }, context) => {
      const editTwit = await Twit.findOne({ _id: twitId });
      if (context.user._id === editTwit.userId) {
        return await Twit.findOneAndUpdate(
          { _id: twitId },
          { twitText: twitText },
          { new: true, runValidators: true }
        );
      }
      throw new AuthenticationError("That's not your twit!");
    },
    deleteTwit: async (parent, { twitId }, context) => {
      const deletedTwit = await Twit.findOne({ _id: twitId });
      if (context.user._id === deletedTwit.userId) {
        return await Twit.findOneAndDelete({ _id: twitId });
      }
      throw new AuthenticationError("That's not your twit!");
    },
  },
};

module.exports = resolvers;
