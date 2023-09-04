const router = require('express').Router();
const { getAllUsers, getOneUser, updateUser, deleteUser, createUser } = require('../controllers/userCtrl');

router.route('/').get(getAllUsers);
router.route('/:id').get(getOneUser);
router.route('/create').post(createUser);
router.route('/update/:id').patch(updateUser);
router.route('/delete/:id').delete(deleteUser);

module.exports = router;