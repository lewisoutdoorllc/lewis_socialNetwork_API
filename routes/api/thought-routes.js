const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createNewThought,
    updateThoughtById,
    deleteThoughtById,
    addReaction,
    deleteReactionById
} = require('../../controllers/thoughts-controller');

router.route('/')
    .get(getAllThoughts)
    .post(createNewThought);

router.route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById);

router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/:reactionId')
    .delete(deleteReactionById);

module.exports = router;