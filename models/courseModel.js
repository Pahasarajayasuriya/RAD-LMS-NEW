const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema ({
    courseName: {
        type: String,
        require: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    courseID: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const courseModel = mongoose.model("Course", courseSchema);

module.exports = courseModel;