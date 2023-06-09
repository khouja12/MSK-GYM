const mongoose = require("mongoose");

const schema = mongoose.Schema;

const adminSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    unique: true,
  },

});

module.exports = Admin = mongoose.model("admin", adminSchema);
