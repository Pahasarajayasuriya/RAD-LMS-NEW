const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
    unique: true,
    required: true,
  },
  userRole: {
    type: String,
    enum: ['admin', 'lecturer', 'student'],
    required: true
  },
});

// // Auto-increment UserId
// userSchema.pre('save', async function (next) {
//     if (!this.userId) {
//       try {
//         const counter = await UserCounter.findOneAndUpdate(
//           { model: 'userModel', field: 'userId' },
//           { $inc: { count: 1 } },
//           { upsert: true, new: true }
//         );
//         this.userId = counter.count;
//         next();
//       } catch (error) {
//         next(error);
//       }
//     } else {
//       next();
//     }
//   });
  

const userModel = mongoose.model('User', userSchema);

module.exports = { userModel };
