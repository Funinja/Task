const mongoose = require('mongoose');
const validator = require('validator');

const taskSchema = new mongoose.Schema({
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
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
}, {

    timestamps:true

});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;