const mongoose = require('mongoose')

const courseMaterialsSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    },
    filename: {
        type: String
    },    
    fileData: {
        type: String
    }
});

const courseMaterialsModel = mongoose.model('CourseMaterials', courseMaterialsSchema);

module.exports = { courseMaterialsModel };