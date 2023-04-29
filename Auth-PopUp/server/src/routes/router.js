const express = require("express");

const routesConstants = require("../config/routesConstants");
const googleAuthRouter = require("./auth/Google/googleAuthRouter");
const githubAuthRouter = require("./auth/Github/githubAuthRouter");
const usersRouter = require("./users/users.router");
const { checkIfValidBody } = require("./users/users.middleware");

const router = express.Router();

router.use(routesConstants.GOOGLE_OAUTH, googleAuthRouter);
router.use(routesConstants.GITHUB_OAUTH, githubAuthRouter);
router.use(routesConstants.USERS, checkIfValidBody, usersRouter);

module.exports = router;
