// const mongoose = require('mongoose')
// const Grid = require('gridfs-stream')
// const { courseModel } = require('../models/courseModel')
// const conn = mongoose.connection
// const fs = require('fs');

// // Grid.mongo = mongoose.mongo

// // const gfs = Grid(conn.db)
// let gfs;

// if (mongoose.connection.readyState === 1) {
//     gfs = Grid(conn.db, mongoose.mongo);
// } 
// else {
//     conn.once("open", () => {
//         gfs = Grid(conn.db, mongoose.mongo);
//     });
// }


// const uploadCourseMaterial = async (req, res) => {
//     const courseId = req.params.courseId
//     const file = req.file

//     try {
//         const course = await courseModel.findById(courseId)
//         if (!course) {
//             return res.status(404).json({ message: "Course not found" })
//         }

//         const writeStream = gfs.createReadStream({
//             filename: file,
//             metadata: {
//                 courseId: course._id,
//                 fileType: 'material'
//             }
//         })

//         const fileReadStream = fs.createReadStream(file.path)
//         fileReadStream.pipe(writeStream)

//         writeStream.on('close', async uploadedFile => {
//             fs.unlinkSync(file.path)

//             course.pdfFiles.push(uploadedFile._id)
//             await course.save()

//             res.json({ message: 'Course material (PDF) uploaded successfully' })
//         })
//     }
//     catch (err) {
//         console.error(err)
//         res.status(500).json({ message: 'Internal Server Error' })
//     }
// }

// const mongoose = require('mongoose');
// const Grid = require('gridfs-stream');
const { courseModel } = require('../models/courseModel');
// const conn = mongoose.connection;
// const fs = require('fs');
// const multer = require('multer');
const { courseMaterialsModel } = require('../models/courseMaterialsModel');

// Grid.mongo = mongoose.mongo;

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// const uploadCourseMaterial = async (req, res) => {
//     const courseId = req.params.courseId
//     const file = req.file
//     const { originalname, mimetype, buffer } = req.file

//     try {
//         const course = await courseModel.findById(courseId);
//         if (!course) {
//             return res.status(404).json({ message: 'Course not found' });
//         }

//         const newFile = new courseModel({
//             filename: originalname,
//             contentType: mimetype,
//             data: buffer,
//           });

//         await newFile.save()
//         res.status(201).json({ message: 'File uploaded successfully' });

//     }
//     catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// }

// let gfs;

// if (mongoose.connection.readyState === 1) {
//     gfs = Grid(conn.db, mongoose.mongo);
// } else {
//     conn.once('open', () => {
//         gfs = Grid(conn.db, mongoose.mongo);
//     });
// }

// const uploadCourseMaterial = async (req, res) => {
//     const courseId = req.params.courseId;
//     const file = req.file;

//     try {
//         const course = await courseModel.findById(courseId);
//         if (!course) {
//             return res.status(404).json({ message: 'Course not found' });
//         }

//         const writeStream = gfs.createWriteStream({
//             filename: file,
//             metadata: {
//                 courseId: course._id,
//                 fileType: 'material',
//             },
//         });

//         writeStream.on('close', async (uploadedFile) => {
//             course.pdfFiles.push(uploadedFile._id);
//             await course.save();
//             res.json({ message: 'Course material (PDF) uploaded successfully' });
//         });

//         writeStream.write(file.buffer);
//         writeStream.end();
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };

const uploadCourseMaterial = async (req, res) => {
    const courseId = req.params.courseId

    const course = await courseModel.findById(courseId);
    if (!course) {
        return res.status(404).json({ message: 'Course not found' });
    }

    const newFile = new courseMaterialsModel({
        courseId: req.params.courseId,
        filename: req.body.filename,
        fileData: req.file.path
    });

    await newFile.save()
        .then(()=> {
            res.status(201).json({ message: 'File uploaded successfully' })
        })
        .catch((err) => {
            res.status(500).json({ message: 'File uploading unsuccussful'})
        })
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