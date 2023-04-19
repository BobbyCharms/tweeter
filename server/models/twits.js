const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const twitSchema = new Schema({
    id: {
        type: Integer,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: Integer,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    twitText: {
        type: String,
        required: `Twit something. It doesn't have to be important, but it would be cooler if it was.`,
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    thumbsUp: {
        type: Integer,
        default: 0
    },
    thumbsDown: {
        type: Integer,
        default: 0
    },
    retwitCounter: {
        type: Integer,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
  comments: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    },
  ],
});

const Twit = model('Twit', twitSchema);

module.exports = Twit;
