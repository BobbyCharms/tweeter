const { GraphQLScalarType } = require('graphql');

// create scalar date
const dateScalar = new GraphQLScalarType({
  name: 'Date',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.toISOString();
  }
})

module.exports = dateScalar;