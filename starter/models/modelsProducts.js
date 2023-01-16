const mongoose = require('mongoose'); // import  mongoos  for  schema


//set schem for all values models
const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'product name must be  provided'],

    },
    price : {
        type: Number,
        required: [true, "product price must be  provided"],

    },
    feautured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt : {
        type: Date,
        default: Date.now(),
    },

    company : {
        type: String,
        enum: ['HNI', 'STEELCASE',' IKEA', 'LIDDY']
    }
})