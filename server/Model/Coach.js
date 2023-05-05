const mongoose = require("mongoose");

const schema = mongoose.Schema;

const coachSchema = new schema({
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
    
  }
});


const Coach = mongoose.model("coach", coachSchema);
module.exports = Coach;
