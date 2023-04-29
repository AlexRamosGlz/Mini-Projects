function verifyCallback(accesToken, refreshToken, profile, done) {
  console.log("Github", profile);

  return done(null, profile);
}

module.exports = {
  verifyCallback,
};
