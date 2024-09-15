const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    checked: {
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('Todo', todoSchema);