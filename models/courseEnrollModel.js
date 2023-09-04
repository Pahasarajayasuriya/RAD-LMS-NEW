const mongoose = require('mongoose');

const courseEnrollSchema = new mongoose.Schema ({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    enrolledCourses: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course"
    }
}, { timestamps: true })

const courseEnrollModel = mongoose.model("CourseEnroll", courseEnrollSchema);

module.exports = enrollModel;