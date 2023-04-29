const errorParser = require("../../../helpers/errorParser");
const {
  postlogin3rdPartyAuthServer,
} = require("../../../models/users/users.model");

async function login(req, res) {
  let token;
  try {
    token = await postlogin3rdPartyAuthServer(req.googleUser);
  } catch (error) {
    return res.status(401).json(errorParser(error));
  }

  return res.status(201).json({ token });
}

module.exports = { login };
