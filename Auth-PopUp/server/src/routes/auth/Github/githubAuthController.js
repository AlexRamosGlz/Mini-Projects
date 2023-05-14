const errorParser = require("../../../helpers/errorParser");
const {
  postlogin3rdPartyAuthServer,
} = require("../../../models/users/users.model");

async function gitHubLogin(req, res) {
  let token;

  try {
    token = await postlogin3rdPartyAuthServer(req.githubUser);
  } catch (error) {
    return res.status(400).json(errorParser(error));
  }

  return res.status(201).json({ token });
}

module.exports = { gitHubLogin };
