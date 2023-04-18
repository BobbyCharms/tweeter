const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema({
    id: {
        type: Integer,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },
    username: {
        type: String,
        required: true,
        allowNull: false,
        validate: {
            len: [1],
        },
    },
    password: {
        type: String,
        required: true,
        allowNull: false,
        validate: {
            // requires password to have one digit, one lowercase, one uppercase, and be at least 8 characters long
            is: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/,
        },
    },
    tweeterYellow: {
        type: Boolean,
        allowNull: false,
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
