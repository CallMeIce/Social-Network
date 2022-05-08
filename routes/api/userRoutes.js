const router = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
} = require('../../controllers/userController');

//* /api/user
router.route('/').get(getUser).post(createUser);

//* /api/user/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);


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
