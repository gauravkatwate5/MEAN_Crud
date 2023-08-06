const mongoose = require("mongoose");

StudentSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  mob: {
    type: Number,
  },
  city: {
    type: String,
  },
});

module.exports = mongoose.model("students", StudentSchema);
