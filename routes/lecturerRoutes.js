const router = require('express').Router()
const {
    uploadCourseMaterial,
    createSubmissionLink
} = require('../controllers/lecturerController')

router.route('/upload-courseMaterials/:courseId').post(uploadCourseMaterial)
router.route('/create-submissionLinks:courseId').post(createSubmissionLink)

module.exports = router