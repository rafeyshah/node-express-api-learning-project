var mongoose = require("mongoose");
var { workSchema } = require("./work");

workSchema.statics = {
  create: async function (data) {
    var work = new this(data);
    await work.save();
  },

  get: async function (query) {
    await this.find(query);
  },

  getByName: async function (query) {
    await this.find(query);
  },

  update: async function (query, updateData) {
    await this.findOneAndUpdate(query, { $set: updateData }, { new: true });
  },

  delete: async function (query) {
    await this.findOneAndDelete(query);
  },
};

var workModel = mongoose.model("works", workSchema);
module.exports = workModel;
