const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtById,
    addThought, 
    removeThought 
} = require('../../controllers/thought-controller');

// api/thoughts
router.route('/').get(getAllThoughts)

// api/thoughts/(userId)
router.route('/:userId')
.post(addThought);

// api/thoughts/(userId)/(thoughtId)
router.route('/:userId/:thoughtId')
.get(getThoughtById)
.delete(removeThought);

module.exports = router;