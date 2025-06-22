const mongoose = require('mongoose');

const CardDetailsSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const CartDetails = mongoose.model('CartDetails', CardDetailsSchema);

module.exports = CartDetails;