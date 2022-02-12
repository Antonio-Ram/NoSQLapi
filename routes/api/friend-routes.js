const router = require('express').Router();
const {
    addFriend,
    removeFriend
} = require('../../controllers/friend-controller');

// api/users/:userId/friends/:friendId
router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

module.exports = router;