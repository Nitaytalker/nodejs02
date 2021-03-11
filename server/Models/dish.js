const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dishSchema = new Schema({
    id: Number,
    setup:String,
    punchline:String
});

module.exports = mongoose.model('alljokes', dishSchema);