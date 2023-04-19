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
    twitAuthor: {
        type: String,
        required: true,
        trim: true,
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
    },
    thumbsDown: {
        type: Integer,
    },
    retwitCounter: {
        type: Integer,
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
        commentText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        commentAuthor: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
    },
  ],
});

const Twit = model('Twit', twitSchema);

module.exports = Twit;
