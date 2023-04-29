function verifyCallback(accesToken, refreshToken, profile, done) {
  return done(null, profile);
}

function parseUser(req, res, next) {
  const { id: usersID, displayName: username } = req.user;

  if (!usersID)
    return res
      .status(400)
      .json({ error: "something went wrong, try again later" });

  req.googleUser = { usersID, username };

  next();
}

module.exports = {
  verifyCallback,
  parseUser,
};
