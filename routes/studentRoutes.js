const router = require('express').Router()
const {
    uploadAssignment,
    deleteAssignment,
    downloadCourseMaterials
} = require('../controllers/studentController')

const upload = require('../middleware/fileUpload')

router.route('/course/:courseId/submission-links/:linkId/upload-assignment').post(upload.single('files'), uploadAssignment)
router.route('/course/:courseId/submission-links/:linkId/delete-assignment/:fileId').delete(deleteAssignment)
router.route('/course/:courseId/download-courseMaterial/:id').get(downloadCourseMaterials)

module.exports = router