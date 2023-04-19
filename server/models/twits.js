const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const twitSchema = new Schema({
    userId: {
        type: Number,
        required: true,
        primaryKey: true,
        autoIncrement: true,
    },
    twitText: {
        type: String,
        required: true,
        validate: {
            minlength: 1,
            maxlength: 280,
            trim: true,
        }
    },
    thumbsUp: {
        type: Number,
        default: 0
    },
    thumbsDown: {
        type: Number,
        default: 0
    },
    retwitCounter: {
        type: Number,
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
