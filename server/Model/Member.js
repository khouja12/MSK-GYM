const mongoose = require("mongoose");

const schema = mongoose.Schema;

const memberSchema = new schema({
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
  password:{
    type:String,
    required:true
  }

 
});

module.exports = Member = mongoose.model("member", memberSchema);
