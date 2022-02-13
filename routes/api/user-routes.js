const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

//Get all and POST at api/users
router
.route('/')
.get(getAllUsers)
.post(createUser);

//GET one, PUT, and DELETE at api/users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// api/users/:id/friends
router
.route('/:id/friends')
.post(addFriend);

// api/users/:id/friends/:friendId
router
.route('/:id/friends/:friendId')
//.post(addFriend)
.delete(removeFriend);

module.exports = router;