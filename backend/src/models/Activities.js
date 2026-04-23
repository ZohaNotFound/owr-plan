const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  title: {
    type: String,
    required: true
  },

  description: String,

  location: {
    latitude: Number,
    longitude: Number
  },

  startTime: Date,
  endTime: Date,

  entities: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Entity"
  }]

}, { timestamps: true });

module.exports = mongoose.model("Activity", activitySchema);