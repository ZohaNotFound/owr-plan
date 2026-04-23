const mongoose = require("mongoose");

const iconSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["accessory", "face", "expense"],
    required: true
  },
  filename: {
    type: String,
    required: true
  }
}, { timestamps: true });

  export default mongoose.model("Icon", iconSchema);