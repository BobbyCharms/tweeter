const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },
    username: {
        type: String,
        required: true,
        minlength: 1
    },
    password: {
        type: String,
        required: true,
        validate: {
          validator: function(value) {
            // tests password for having one digit, one lowercase, one uppercase, and to be at least 8 characters long
            return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(value);
          },
          message: props => "Not a valid password!"
        },
    },
    tweeterYellow: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    twits: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Twit',
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
