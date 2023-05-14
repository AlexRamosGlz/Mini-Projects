const express = require("express");
const passport = require("passport");
const GitHubStrategy = require("passport-github2");

const { verifyCallback, parseGithubUser } = require("./githubAuthMiddleware");
const { gitHubLogin } = require("./githubAuthController");

const githubAuthRouter = express.Router();

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    verifyCallback
  )
);

githubAuthRouter.get(
  "/",
  passport.authenticate("github", { scope: ["user:email"] })
);

githubAuthRouter.get(
  "/callback",
  passport.authenticate("github", {
    failureRedirect: "/",
    session: false,
  }),
  parseGithubUser,
  gitHubLogin
);

module.exports = githubAuthRouter;
