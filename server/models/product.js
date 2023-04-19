const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    pname: {
        type: String,
        required: [true, 'please enter the product name'],
        trim: true,
        maxLength: [100, "product name cannot exceed 100 characters"]
    },
    price: {
        type: Number,
        required: true,
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'please enter product description']
    },
    ratings: {
        type: String,
        default: 0
    },
    images: [
        {
            filename: {
                type: String,
                // required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'please enter the product category'],
        enum: {
            values: [
                'amplifiers',
                'speakers',
                'televisions',
                'hometheatres',
                'spares'
            ],
            message: "please select correct category"
        }
    },
    seller: {
        type: String,
        required: [true, "please enter product seller"]
    },
    stocks: {
        type: Number,
        required: [true, 'please enter product stock'],
        maxLength: [20, "product name cannot exceed 20 characters"]
    },
    numofreviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                // required: true
            },
            rating: {
                type: String,
                // required: true
            },
            comment: {
                type: String,
                // required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const prodSchema = mongoose.model('products', productSchema);

module.exports = prodSchema;