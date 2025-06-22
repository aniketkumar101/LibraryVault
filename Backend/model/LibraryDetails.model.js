const mongoose = require('mongoose');

const LibraryDetailsSchema = new mongoose.Schema({
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
    available:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('LibraryDetails',LibraryDetailsSchema);
