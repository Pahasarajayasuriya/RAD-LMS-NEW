const mongoose = require('mongoose')
const Grid = require('gridfs-stream')
const { courseModel } = require('../models/courseModel')
const conn = mongoose.connection
Grid.mongo = mongoose.mongo

// Create GridFS stream
const gfs = new Grid(conn)

const uploadAssignment = async (req, res) => {
    const courseId = req.params.courseId
    const linkId = req.params.linkId
    const file = req.file

    try {
        const course = await courseModel.findById(courseId)
        if (!course) {
            return res.status(404).json({ message: 'Course not found' })
        }

        const submissionLink = course.submissionLinks.id(linkId)
        if (!submissionLink) {
            return res.status(404).json({ message: 'Submission link not found' })
        }

        const writeStream = gfs.createWriteStream({
            filename: file,
            metadata: {
                courseId: course._id,  // Associate the file with the course
                linkId: submissionLink._id, // Associate the file with the submission link
                fileType: 'assignment', // You can customize this metadata
            }
        })

        const fileReadStream = fs.createReadStream(file.path)
        fileReadStream.pipe(writeStream)

        writeStream.on('close', async uploadedFile => {
            fs.unlinkSync(file.path)

            submissionLink.pdfFiles.push(uploadedFile._id)
            await course.save()

            res.json({ message: 'Assignment file (PDF) uploaded successfully' })
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const deleteAssignment = async (req, res) => {
    const courseId = req.params.courseId
    const linkId = req.params.linkId
    const fileId = req.params.fileId
    const studentId = req.user._id

    try {
        const course = await courseModel.findById(courseId)
        if (!course) {
            return res.status(404).json({ message: 'Course not found' })
        }

        const submissionLink = course.submissionLinks.id(linkId)
        if (!submissionLink) {
            return res.status(404).json({ message: 'Submission link not found' })
        }

        const fileIndex = submissionLink.pdfFiles.fileIndex(fileObj => (
            fileObj.student.toString() === studentId && fileObj._id.toString() === fileId
        ))

        if (fileIndex === -1) {
            return res.status(404).json({ message: 'File not found in submission link' })
        }

        const fileToRemove = submissionLink.pdfFiles[fileIndex]
        gfs.remove({ _id: fileToRemove }, async (err) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ message: 'Internal Server Error' })
            }

            submissionLink.pdfFiles.splice(fileIndex, 1)
            await course.save()

            res.json({ message: 'Assignment file (PDF) deleted successfully' })
        })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

module.exports = {
    uploadAssignment,
    deleteAssignment
}