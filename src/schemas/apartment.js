const mongoose = require('mongoose');
const { Schema } = mongoose;

const apartmentSchema = new Schema({
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

    rating: {
        type: String,
        default: '0'
    },

    ratingCounter:{
        type: String,
        default: '0'
    },

    price: {
        type: String,
        default: '0'
    },

    city: {
        type: String,
        required: [true, 'city is required']
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

const ApartmentShema = mongoose.model('notes', apartmentSchema)

module.exports = ApartmentShema