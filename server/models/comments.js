const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
    id: {
        type: Integer,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: Integer,
        allowNull: false,
        autoIncrement: true,
    },
    twitId: {
        type: Integer,
        allowNull: false,
        autoIncrement: true,
    },
    commentText: {
        type: String,
        required: `You got something to say?`,
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
