const mongoose = require('mongoose');
const validator = require('validator');

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

module.exports = User;