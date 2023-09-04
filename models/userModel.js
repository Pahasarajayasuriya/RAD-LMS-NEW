const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "Student"
    },
    active: {
        type: Boolean,
        default: true
    }
},{ timestamps: true })

const userModel = mongoose.model("User", userSchema)

module.exports = { userModel };





// const studentSchema = new schema({
//     userName: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     role: {
//         type: String,
//         default: "Student"
//     }
// }, {timestamps: true})

// const studentModel = mongoose.model("Student", studentSchema)

// const teacherSchema = new schema({
//     userName: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     role: {
//         type: String,
//         default: "Teacher"
//     }
// }, { timestamps: true })

// const teacherModel = mongoose.model("Teacher", teacherSchema)

