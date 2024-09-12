const Settings = require('../models/setting');

exports.hideSummerCourses = async (req, res) => {
  try {
    let settings = await Settings.findOne();

    if (!settings) {
      settings = new Settings();
    }

    settings.hideSummerCourses = !settings.hideSummerCourses;
    await settings.save();

    // Respond with the updated settings
    res.status(200).json({
      status: 'success',
      hideSummerCourses: settings.hideSummerCourses
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message
    });
  }
}

exports.getSiteSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne();

    if (!settings) {
      settings = new Settings();
      await settings.save();
    }

    res.status(200).json({
      status: 'success',
      data: { settings }
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message
    });
  }
}