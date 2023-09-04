const adminAuthentication = (req, res, next) => {
    req.userModel.role != "Admin"
        .then(res.status(401).json({ err: "Access Denied" }))
    next()
}
 
const studentAuthentication = (req, res, next) => {
    req.userModel.role != "Student"
        .then(res.status(401).json({ err: "Access Denied" }))
    next()
}

const teacherAuthentication = (req, res, next) => {
    req.userModel.role != "Teacher"
        .then(res.status(401).json({ err: "Access Denied" }))
    next()
}

module.exports = { adminAuthentication, studentAuthentication, teacherAuthentication };
