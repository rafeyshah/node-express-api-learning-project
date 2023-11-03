var Groups = require("../models/groupsDOA");
const { validate } = require("../models/groups");

exports.createGroup = async function (req, res) {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  var group = {
    name: req.body.name,
    works: req.body.works,
  };

  try {
    const newlyCreatedGroup = await Groups.create(group);
    res.json({
      msg: "Created Successfully",
    });
  } catch (ex) {
    res.json({
      error: ex,
    });
  }
};

exports.getGroups = async function (req, res) {
  try {
    const newGotWork = await Groups.find({}).populate("works");
    res.json({
      msg: newGotWork,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};


exports.updateGroup = async function (req, res) {
  var group = {
    name: req.body.name,
    works: req.body.works,
  };
  try {
    const updateGroup = await Groups.findByIdAndUpdate(req.params.id, group);
    res.json({
      msg: updateGroup,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.removeGroup = async function (req, res) {
  try {
    const removeGroup = await Groups.findByIdAndDelete(req.params.id);
    res.json({
      msg: "Group Removed",
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
