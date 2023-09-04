const router = require('express').Router()
const { login, logout, refresh } = require('../controllers/authController')

router.route('/').post(login)
router.route('/refresh').get(refresh)
router.route('/logout').post(logout)

module.exports = router