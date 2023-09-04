const router = require('express').Router()
const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/adminController')

router.route('/user').get(getAllUsers)
router.route('/user/:id').get(getOneUser)
router.route('/user/create').post(createUser)
router.route('/user/update/:id').put(updateUser)
router.route('/user/delete/:id').delete(deleteUser)


const {
    createCourse,
    deleteCourse,
    getOneCourse,
    getAllCourses,
    assignLecturerToCourse,
    enrollStudentInCourse,
} = require('../controllers/courseController')

router.route('/course').get(getAllCourses)
router.route('/course/:courseId').get(getOneCourse);
router.route('/course/create').post(createCourse);
router.route('/course/delete/:courseId').delete(deleteCourse);

router.route('/course/:courseId/lecturer/:lecturerId/assign').put(assignLecturerToCourse);
router.route('/course/:courseId/student/:studentId/enroll').put(enrollStudentInCourse);

module.exports = router