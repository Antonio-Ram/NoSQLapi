const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtById,
    addThought,
    removeThought,
    updateThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// api/thoughts
router.route('/').get(getAllThoughts)

// api/thoughts/(userId)
router.route('/:userId').post(addThought);

// api/thoughts/(userId)/(thoughtId)
router
.route('/:userId/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.put(addReaction)
.delete(removeThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;

