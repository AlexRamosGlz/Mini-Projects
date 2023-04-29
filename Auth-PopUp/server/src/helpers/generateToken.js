const jwt = require("jsonwebtoken");

function generateToken(userId) {
  return jwt.sign({ userId }, process.env.TOKEN_SECRET.toString(), {
    expiresIn: "86400s",
  });
}

module.exports = generateToken;
