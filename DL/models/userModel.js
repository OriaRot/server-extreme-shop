const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true 
  },
  password: {
    type: String,
    require: true,
  },
  permission: {
    type: String,
    enum: ["admin", "customer"],
    default: "customer",
  },
  token:{
    type: String
  }
});

const userModel = mongoose.model('user', userSchema)
module.exports = userModel