const courseEnrollModel = require('../models/courseEnrollModel');

const courseEnroll = async (req, res) => {
    try {
        const { user } = req.params.id
        const { courseID } = req.body;
        const enroll = await courseEnrollModel.findOne({ courseID })
        if (enroll) {
            throw Error('User already enrolled to the course');2
        }
        const newEnrollment = new enrollModel({ userID: user, enrolledCourse: courseID })
        await newEnrollment.save()
            .then((result) => {
                res.status(200).json({ mssg: 'Succussfully enrolled', result: result })
            })
            .catch((err) => {
                res.status(401).json(err)
            })
    }
    catch (err) {
        res.status(400).json({ error: 'Unable to enroll to the course'})
    }
}

module.exports = { courseEnroll };