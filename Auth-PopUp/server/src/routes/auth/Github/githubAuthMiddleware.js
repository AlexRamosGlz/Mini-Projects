function verifyCallback(accesToken, refreshToken, profile, done) {
  return done(null, profile);
}

function parseGithubUser(req, res, next) {
  const { id: usersID, username } = req.user;

  if (!usersID)
    return res
      .status(400)
      .json({ error: "something went wrong, try again later" });

  req.githubUser = { usersID, username };

  next();
}

module.exports = {
  verifyCallback,
  parseGithubUser,
};
