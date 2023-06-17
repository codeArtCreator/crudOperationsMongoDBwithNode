const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "NAME IS REQUIRED"],
        unique: true
    },
    color: {
        type: String,
        required: true
    },
    ROM: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    modeName: {
        type: String,
        required: true
    },
    modelNumber: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    camera: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
})

const mobile = mongoose.model('mobiles', mobileSchema)

module.exports = mobile;