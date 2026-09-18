const mongoose = require("mongoose");

const holdingSchema= require("../schema/holdingSchema");

const Holding = mongoose.model("Holding", holdingSchema);

module.exports = Holding;