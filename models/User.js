const { Schema, model } = require('mongoose');

const UserSchema = new Schema ({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {},
    thoughts: {},
    friends: {},
})