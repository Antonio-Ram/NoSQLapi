const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');
//const friendRoutes = require('./friend-routes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
//router.use('/friends', friendRoutes);

module.exports = router;
