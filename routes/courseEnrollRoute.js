const { courseEnroll } = require('../controllers/courseEnrollCtrl')
const router = require('express').Router();

router.route('/enroll').post(courseEnroll);

module.exports = router;