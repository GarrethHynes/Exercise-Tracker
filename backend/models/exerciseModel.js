const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema(
    {
    title: {
        type: String,
        required: [true, 'Please add a title'],
    },
    text: {
        type: String,
        required: [true, 'Please add a text value'],
    },
    },
    {
    timestamps: true,
    }
)

module.exports = mongoose.model('Exercise', exerciseSchema)
