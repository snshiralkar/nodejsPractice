const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  field: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
});

const Players = mongoose.model("Player", playerSchema);
module.exports = Players;
