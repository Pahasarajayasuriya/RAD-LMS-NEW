const { courseModel } = require('../models/courseModel');
const { userModel } = require('../models/userModel');

// Create a new course (accessible only to admins)
const createCourse = async (req, res) => {
    const courseData = req.body
    const { courseId } = req.body
    let duplicate = await courseModel.findOne({ courseId })
    if (duplicate) {
        return res.status(400).json('Course Already Exists')
    }
    const course = new courseModel()
    course.set(courseData)
    await course.save()
        .then(() => {
            res.status(200).json({ mssg: 'Course Added' })
        })
        .catch((err) => {
            res.status(401).json(err)
        }) 
}

// Delete a course (accessible only to admins)
const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;

    const course = await courseModel.findByIdAndRemove(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get a specific course (accessible to admins)
const getOneCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await courseModel.findById(courseId).populate('teacher students');

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

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

// Assign a teacher to a course (accessible only to admins)
// const assignTeacher = async (req, res) => {
//   try {
//     const courseId = req.params.courseId;
//     const teacherId = req.body.userId;

//     const course = await courseModel.findById(courseId);
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }

//     // Update the course with the assigned teacher
//     course.teacher = teacherId;
//     await course.save();

//     res.json(course);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// // Enroll a student in a course (accessible only to admins)
// const enrollStudent = async (req, res) => {
//   try {
//     const courseId = req.params.courseId;
//     const studentId = req.body.userId;

//     const course = await courseModele.findById(courseId);
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }

//     // Add the student to the course
//     course.students.push(studentId);
//     await course.save();

//     res.json(course);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };


// Assign a lecturer to a course
const assignLecturerToCourse = async (req, res) => {
  try {
    const { courseId, lecturerId } = req.params;
    
    // Check if the course exists
    const course = await courseModel.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Check if the lecturer exists
    const lecturer = await userModel.findById(lecturerId);
    if (!lecturer || lecturer.userRole !== 'lecturer') {
      return res.status(400).json({ error: 'Invalid lecturer ID' });
    }

    course.lecturer = lecturer;
    await course.save();
    res.json({ message: 'Lecturer assigned to the course successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to assign lecturer to the course' });
  }
};

// Enroll a student in a course
const enrollStudentInCourse = async (req, res) => {
  try {
    const { courseId, studentId } = req.params;
    
    // Check if the course exists
    const course = await courseModel.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Check if the student exists
    const student = await userModel.findById(studentId);
    if (!student || student.userRole !== 'student') {
      return res.status(400).json({ error: 'Invalid student ID' });
    }

    // Check if the student is already enrolled in the course
    if (course.students.includes(studentId)) {
      return res.status(400).json({ error: 'Student is already enrolled in the course' });
    }

    course.students.push(student);
    await course.save();
    res.json({ message: 'Student enrolled in the course successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to enroll student in the course' });
  }
};

module.exports = {
    createCourse,
    deleteCourse,
    getOneCourse,
    getAllCourses,
    assignLecturerToCourse,
    enrollStudentInCourse
};
