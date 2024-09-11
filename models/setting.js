const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({
  hideSummerCourses: {
    type: Boolean,
    default: false,
  }
},
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: false,
    versionKey: false,
  }
);

module.exports = mongoose.model("Settings", settingsSchema);