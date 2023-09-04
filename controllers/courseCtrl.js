const courseModel = require('../models/courseModel');

const createCourse = async (req, res) => {
    try {
        const { courseName, courseDescription, courseID } = req.body;
        let course = await courseModel.findOne({ courseID })
        if (course) {
            throw Error('Course Already Exists')
        }
        const newCousre = new courseModel({ courseName, courseDescription, courseID })
        await newCousre.save()
            .then(() => {
                res.status(200).json({ mssg: 'Course Added' })
            })
            .catch((err) => {
                res.status(401).json(err)
            })
    }
    catch (err) {
        console.log(err)
        res.status(401).json({ mssg: 'Unable to create a new Course' })
    }
}

const getAllCourses = async (req, res) => {
    await courseModel.find()
        .then(courseInfo => {
            res.status(200).json({ courseInfo })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ error: "Unable to fetch Courses" })
        })
}

const getOneCourse = async (req, res) => {
    const courseID = req.params._id;
    await courseModel.findOne({ courseID })
        .then(courseInfo => {
            res.status(200).json({ courseInfo })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ error: "Unable to fetch the Course" })
        })
}

const deleteCourse = async (req, res) => {
    const courseID = req.params._id;
    await userModel.findOneAndDelete({ courseID })
        .then(() => {
            res.status(200).json({ status: "Course Deleted" })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ status: "Unable to delete the Course" })
        })
}

module.exports = { createCourse, getAllCourses, getOneCourse, deleteCourse }