const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            //var char?
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
            //getter
        }
    }
)
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
    reactions:[ReactionSchema]
},
{
    toJSON: {
        virtuals: true 
    }
}
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;