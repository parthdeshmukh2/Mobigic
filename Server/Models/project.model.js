const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  uniqueCode: { type: Number, required: true },
  userId: String,
});

const ProjectModel = mongoose.model("project", ProjectSchema);

module.exports = ProjectModel;
