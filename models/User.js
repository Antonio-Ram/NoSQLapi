const { Schema, model } = require('mongoose');

const UserSchema = new Schema ({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
        //validation
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
},
{
    toJSON: {
            virtuals: true,
        },
        id: false
});

/*UserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.length;
});*/

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model ('User', UserSchema);

module.exports = User;