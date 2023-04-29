const express = require("express");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { verifyCallback, parseUser } = require("./googleAuthMiddleware");
const { login } = require("./googleAuthController");

const googleAuthRouter = express.Router();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    verifyCallback
  )
);

googleAuthRouter.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

googleAuthRouter.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    session: false,
  }),
  parseUser,
  login
);

module.exports = googleAuthRouter;
