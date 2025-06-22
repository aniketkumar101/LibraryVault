const mongoose = require('mongoose')

const BookLibraryDetailsSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    LibId:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    seat: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: Date, 
        required: true
    },
    endTime: {
        type: Date, 
        required: true
    },
    expired: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('BookLibraryDetails',BookLibraryDetailsSchema);