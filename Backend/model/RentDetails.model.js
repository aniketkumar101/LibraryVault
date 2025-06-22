const mongoose = require('mongoose');

const RentDetailSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    duration:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('RentDetails',RentDetailSchema);

