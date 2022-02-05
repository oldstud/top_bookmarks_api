const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    comment: {
        type: String,
        required: [true, 'comment is required']
    },
    projectId: {
        type: String,
        required: [true, 'projectId is required']
    },

    authorId: {
        type: String,
        required: [true, 'authorId is required']
    },
    authorName: {
        type: String,
        required: [true, 'authorName is required']
    },
    authorEmail: {
        type: String,
        default: ''
    },

    authorAvatar: {
        type: String,
        default: ''
    }
},
    {
        timestamps: true       
    }
);

const CommentSchema = mongoose.model('comment', commentSchema)

module.exports =CommentSchema