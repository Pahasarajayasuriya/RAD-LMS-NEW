const router = require('express').Router()
const {
    uploadCourseMaterial,
    createSubmissionLink
} = require('../controllers/lecturerController')

router.route('/course/:courseId/upload-courseMaterials').post(uploadCourseMaterial)
router.route('/course/:courseId/create-submissionLinks').post(createSubmissionLink)

module.exports = router