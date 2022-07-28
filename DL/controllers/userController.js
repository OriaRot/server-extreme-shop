const userModel = require("../models/userModel");

async function create(data) {
  const result = await userModel.create(data);
  return result;
}
async function read(_id) {
  const result = _id ? await userModel.findById(_id) : await userModel.find({});
  return result;
}
async function readByEmail(email) {
  const result = await userModel.findOne({ email: email });
  return result;
}
async function update(_id, data) {
  const result = await userModel.findByIdAndUpdate(_id, data);
  return result;
}
async function del(_id) {
  const result = await userModel.findByIdAndDelete(_id);
  return result;
}

module.exports = { create, read, readByEmail, update, del };
