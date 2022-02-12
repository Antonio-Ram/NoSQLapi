const { Schema, model } = require('mongoose');
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true
        //some kind of VARCHAR
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username:{
        type: String,
        required: true
    },
    reactions:[]
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;