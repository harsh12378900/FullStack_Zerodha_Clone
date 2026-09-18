const mongoose = require("mongoose");

const positionSchema= require("../schema/positionSchema");

const position = mongoose.model("position", positionSchema);

module.exports = position;