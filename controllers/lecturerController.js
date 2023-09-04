const mongoose = require('mongoose')
const Grid = require('gridfs-stream')
const { courseModel } = require('../models/courseModel')
const conn = mongoose.connection
Grid.mongo = mongoose.mongo

const gfs = new Grid(conn)

const uploadCourseMaterial = async (req, res) => {
    const courseId = req.params.courseId
    const file = req.file

    try {
        const course = await courseModel.findById(courseId)
        if (!course) {
            return res.status(404).json({ message: "Course not found" })
        }

        const writeStream = gfs.createReadStream({
            filename: file.originalname,
            metadata: {
                courseId: course._id,
                fileType: 'material'
            }
        })

        const fileReadStream = fs.createReadStream(file.path)
        fileReadStream.pipe(writeStream)

        writeStream.on('close', async uploadedFile => {
            fs.unlinkSync(file.path)

            course.pdfFiles.push(uploadedFile._id)
            await course.save()

            res.json({ message: 'Course material (PDF) uploaded successfully' })
        })
    }
    catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const createSubmissionLink = async (req, res) => {
    const courseId = req.params.courseId
    const { title } = req.body

    try {
        const course = await courseModel.findById(courseId)
        if (!course) {
            return res.status(404).json({ message: "Course not found" })
        }

        course.submissionLinks.push({ title })
        await course.save()

        res.json({ message: 'Submission link created successfully' });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    uploadCourseMaterial,
    createSubmissionLink
}