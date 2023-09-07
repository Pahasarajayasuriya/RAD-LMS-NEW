const mongoose = require('mongoose');

const submissionLinkSchema = new mongoose.Schema({
    title: {
        type: String
    },         // Title for the submission link
    description: {
        type: String
    },   // Description of the submission link (optional)
    files: {
        type: [String]
    }    // Store uploaded assignment files (PDFs)
  });

//   const uploadCourseMaterial = new mongoose.Schema({
//     filename: String,     // Original filename of the PDF file
//     contentType: String,  // MIME type of the PDF file (e.g., application/pdf)
//     data: Buffer,    // Store uploaded assignment files (PDFs)
//   });

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',  // Reference to the User model for the teacher
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',  // Reference to the User model for students
  }],
  // courseMaterials: [uploadCourseMaterial],
  submissionLinks: [submissionLinkSchema]
});

const courseModel = mongoose.model('Course', courseSchema);

module.exports = { courseModel };
