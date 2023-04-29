const {
  getUserInfo,
  postNewUser,
  postCredentialsLogin,
} = require("../../models/users/users.model");

const errorParser = require("../../helpers/errorParser");

async function httpsGetUserInfo(req, res) {
  const { userId } = req.userId;

  let user;

  try {
    user = await getUserInfo(userId);
  } catch (error) {
    return res.status(400).json(errorParser(error));
  }

  return res.status(200).json(user);
}

async function httpsPostNewUser(req, res) {
  const { username, email, password } = req.body;

  let token;

  try {
    token = await postNewUser(username, password, email);
  } catch (error) {
    return res.status(400).json(errorParser(error));
  }

  return res.status(201).json({ token: token });
}

async function httpsCredentialsLogin(req, res) {
  const { email, password } = req.body;

  let token;

  try {
    token = await postCredentialsLogin(email, password);
  } catch (error) {
    return res.status(400).json(errorParser(error));
  }

  return res.status(200).json({ token });
}

module.exports = { httpsGetUserInfo, httpsPostNewUser, httpsCredentialsLogin };
