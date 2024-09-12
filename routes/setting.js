const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/setting');
const authController = require('../controllers/auth');

router.get('/', settingsController.getSiteSettings);
router.patch('/toggle-summer-courses-visibility', authController.protect, authController.restrictTo('admin'), settingsController.hideSummerCourses);

module.exports = router;