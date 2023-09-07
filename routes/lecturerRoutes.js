const router = require('express').Router()

const {
    uploadCourseMaterial,
    createSubmissionLink
} = require('../controllers/lecturerController')

const upload = require('../middleware/fileUpload')

router.route('/course/:courseId/upload-courseMaterials').post(upload.single('fileData'), uploadCourseMaterial)
router.route('/course/:courseId/create-submissionLinks').post(createSubmissionLink)

module.exports = router