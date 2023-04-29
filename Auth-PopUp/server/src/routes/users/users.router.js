const express = require("express");
const {
  httpsGetUserInfo,
  httpsPostNewUser,
  httpsCredentialsLogin,
} = require("./users.controller");
const {
  authenticateToken,
  checkIfValidCredential,
} = require("./users.middleware");

const usersRouter = express.Router();

usersRouter.get("/profile", authenticateToken, httpsGetUserInfo);
usersRouter.post("/new", httpsPostNewUser);
usersRouter.post("/login", checkIfValidCredential, httpsCredentialsLogin);

module.exports = usersRouter;
