const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction
} = require('../../controllers/userController');

//* /api/thought
router.route('/').get(getThought).post(createThought);

//* /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

//* /api/thought/:thoughtId/reaction
router.route('/:thoughtId/reaction').post(addReaction);

//* /api/thought/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;

// // /api/students
// router.route('/').get(getStudents).post(createStudent);

// // /api/students/:studentId
// router.route('/:studentId').get(getSingleStudent).delete(deleteStudent);

// // /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);

// // /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

// module.exports = router;