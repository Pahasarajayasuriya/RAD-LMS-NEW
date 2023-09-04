const mongoose = require('mongoose');

const submissionLinkSchema = new mongoose.Schema({
    title: {
        type: String
    },         // Title for the submission link
    description: {
        type: String
    },   // Description of the submission link (optional)
    pdfFiles: {
        type: [String]
    }    // Store uploaded assignment files (PDFs)
  });

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
    ref: 'User',  // Reference to the User model for the teacher
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User model for students
  }],
  submissionLinks: [submissionLinkSchema]
});

const courseModel = mongoose.model('Course', courseSchema);

module.exports = { courseModel };
