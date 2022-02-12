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
.get(getThoughtById)
.post(addThought);

// api/thoughts/(userId)/(thoughtId)
router.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router;