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

// router.route('/:pizzaId').post(addComment);

// router.route('/:pizzaId/:commentId').delete(removeComment);

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

// router.route('/:pizzaId/:commentId')
//     .delete(removeComment);

// router
//     .route('/:pizzaId/:commentId')
//     .put(addReply)
//     .delete(removeComment)

// router.route('/:pizzaId/:commentId/:replyId')
//     .delete(removeReply);

module.exports = router;