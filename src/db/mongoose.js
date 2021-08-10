const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const Task = mongoose.model('Task', {
//     name: {
//         type: String
//     },
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const gardening = new Task({
//     name: 'Gardening',
//     description: 'Garden',
//     completed: false
// })

// gardening.save().then(() => {
//     console.log(gardening);
// }).catch( (error) => {
//     console.log(error);
// })

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim : true
    },
    password: {
        type: String,
        trim: true,
        validate(value) {
            if(value.length < 7) {
                throw new Error('Password is not greater than 6')
            }else if(value.includes("password")){
                throw new Error("The password should not be 'password' ");
            }
        }
    },
    age:{
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number!')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    }
})

const me = new User({
    name: '    Dennis    ',
    email: 'mike@mead.io    ',
    password: 'helo123123'
})

me.save().then(() => {
    console.log(me);

}).catch((error) => {
    console.log(error);
})
