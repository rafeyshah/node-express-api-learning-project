var mongoose = require("mongoose");
var workSchema = require("./work");

workSchema.statics = {
  create: function (data, cb) {
    var work = new this(data);
    work.save(cb);
  },

  get: function (query, cb) {
    this.find(query, cb);
  },

  getByName: function (query, cb) {
    this.find(query, cb);
  },

  update: function (query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },

  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  },
};

var workModel = mongoose.model("works", workSchema);
module.exports = workModel;
