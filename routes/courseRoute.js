const router = require('express').Router();
const { createCourse, getAllCourses, getOneCourse, deleteCourse } = require('../controllers/courseCtrl');

router.route('/').get(getAllCourses);
router.route('/:id').get(getOneCourse);
router.route('/delete/:id').delete(deleteCourse);
router.route('/create').post(createCourse);

module.exports = router;