const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name:{
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

    category: {
        type: String,
        required: true
    },
    inStock:{
        type: Number,
        required: true  
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);