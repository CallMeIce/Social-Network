const router = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    deleteUser,
} = require('../../controllers/courseController.js');



// const {
//   getCourses,
//   getSingleCourse,
//   createCourse,
//   updateCourse,
//   deleteCourse,
// } = require('../../controllers/courseController.js');

// // /api/courses
// router.route('/').get(getCourses).post(createCourse);

// // /api/courses/:courseId
// router
//   .route('/:courseId')
//   .get(getSingleCourse)
//   .put(updateCourse)
//   .delete(deleteCourse);

// module.exports = router;
// const router = require('express').Router();
// const {
//   getStudents,
//   getSingleStudent,
//   createStudent,
//   deleteStudent,
//   addAssignment,
//   removeAssignment,
// } = require('../../controllers/studentController');

// // /api/students
// router.route('/').get(getStudents).post(createStudent);

// // /api/students/:studentId
// router.route('/:studentId').get(getSingleStudent).delete(deleteStudent);

// // /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);

// // /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

// module.exports = router;
