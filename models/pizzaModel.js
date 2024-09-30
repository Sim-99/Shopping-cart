const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
    name: { type: String, required: true },
    variants: [String],
    prices: {
        Small: Number,
        Medium: Number,
        Large: Number
    },
    category: String,
    image: String,
    description: String
});

const Pizza = mongoose.model('Pizza', pizzaSchema);
module.exports = Pizza;
