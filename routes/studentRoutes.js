const router = require('express').Router()
const {
    uploadAssignment,
    deleteAssignment
} = require('../controllers/studentController')

router.route('/course/:courseId/submission-links/:linkId/upload-assignment/:fileId').post(uploadAssignment)
router.route('/course/:courseId/submission-links/:linkId/delete-assignment/:fileId').delete(deleteAssignment)

module.exports = router