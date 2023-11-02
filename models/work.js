var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workSchema = new Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true,
    },
    type: {
      type: String,
      unique: false,
      required: true,
    },
    startDate: {
      type: String,
    },
    userId: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = workSchema;
