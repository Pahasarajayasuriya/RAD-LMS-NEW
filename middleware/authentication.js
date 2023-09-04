const adminAuthentication = (req, res, next) => {
    req.userModel.userRole != "admin"
        .then(res.status(401).json({ err: "Access Denied" }))
    next()
}
 
const studentAuthentication = (req, res, next) => {
    req.userModel.userRole != "student"
        .then(res.status(401).json({ err: "Access Denied" }))
    next()
}

const lecturerAuthentication = (req, res, next) => {
    req.userModel.userRole != "lecturer"
        .then(res.status(401).json({ err: "Access Denied" }))
    next()
}

module.exports = { adminAuthentication, studentAuthentication, lecturerAuthentication };
