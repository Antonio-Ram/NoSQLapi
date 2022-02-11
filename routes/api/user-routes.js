const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
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

module.exports = router;