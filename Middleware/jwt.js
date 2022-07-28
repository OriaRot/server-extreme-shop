const jwt = require("jsonwebtoken");
SECRET = process.env.JWT_SECRET_TOKEN;

function createToken(_id) {
  return jwt.sign({ _id }, SECRET, { expiresIn: "10m" });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

module.exports = { createToken, verifyToken };
