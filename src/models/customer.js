const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        address: String,
        phone: Number,
        email: String,
        image: String,
        description: Text
    },
    {
        timestamps: true,
    }
);

const Customer = mongoose.model('user', customerSchema);

module.exports = Customer