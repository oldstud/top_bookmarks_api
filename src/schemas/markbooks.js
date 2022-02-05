const mongoose = require('mongoose');
const { Schema } = mongoose;

const markbookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },

    image: {
        type: String,
        default: ''
    },

    urlMarkbook: {
        type: String,
        required: [true, 'title is required']
    },

    rating: {
        type: String,
        default: '0'
    },

    ratingCounter:{
        type: String,
        default: '0'
    },

    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    }

},
    {
        timestamps: true
    }
);

const markbooksSchema = mongoose.model('markbooks', markbookSchema)

module.exports = markbooksSchema