const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Task = mongoose.model('Task', {
    name: {
        type: String
    },
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const gardening = new Task({
    name: 'Gardening',
    description: 'Garden',
    completed: false
})

gardening.save().then(() => {
    console.log(gardening);
}).catch( (error) => {
    console.log(error);
})

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age:{
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Dennis',
//     age: 21
// })

// me.save().then(() => {
//     console.log(me);

// }).catch((error) => {
//     console.log(error);
// })
