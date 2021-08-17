const mongoose = require('mongoose');
const validator = require('validator');

const Task = mongoose.model('Task', {
    name: {
        type: String,
        default: "Dennis Lam"
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Task;