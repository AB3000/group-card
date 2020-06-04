// /models/Card.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const cardSchema = new Schema({
    name: String,
    description: String,
})

mongoose.model('cards', cardSchema);