const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const errorParser = require("../../helpers/errorParser");
const { getUserPassword } = require("../../models/users/users.model");
require("dotenv").config();

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) return res.status(401).json({ error: "Unauthorized" });

  const token = authHeader.split(" ")[1];

  let result;
  try {
    result = jwt.verify(token, process.env.TOKEN_SECRET.toString());
  } catch (error) {
    return res.status(400).json(errorParser(error));
  }

  req.userId = result;

  next();
}

function checkIfValidBody(req, res, next) {
  const { password, email, username } = req.body;

  if (req.path === "/profile") return next();

  if (!password)
    return res.status(400).json({ error: `"password" value is missing` });

  if (!email)
    return res.status(400).json({ error: `"email" value is missing` });

  if (!req.path === "/login" && !username)
    return res.status(400).json({ error: `"username" values is missing` });

  next();
}

async function checkIfValidCredential(req, res, next) {
  const { email, password } = req.body;

  try {
    const { password: hash } = await getUserPassword(email);

    if (!hash) res.status(401).json({ error: "Unauthorized" });

    const match = await bcrypt.compare(password, hash);

    if (match) next();
  } catch (error) {
    return res.status(401).json(errorParser(error));
  }
}

module.exports = {
  authenticateToken,
  checkIfValidBody,
  checkIfValidCredential,
};
