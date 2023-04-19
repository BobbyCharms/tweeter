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
    }
  }
};

module.exports = resolvers;
