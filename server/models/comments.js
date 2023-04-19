const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
    userId: {
        type: Number,
        required: true,
        autoIncrement: true,
    },
    twitId: {
        type: Number,
        required: true,
        autoIncrement: true,
    },
    commentText: {
        type: String,
        required: `You got something to say?`,
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
});

const Comment = model('Comment', commentSchema);

module.exports = Comment
