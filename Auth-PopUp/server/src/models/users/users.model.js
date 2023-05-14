const { v4: uuidv4 } = require("uuid");

const {
  createUserPostQuery,
  createPostTokenQuery,
  createGetUserQuery,
  createGetUserByCredentials,
  createGetUserPasswordQuery,
  createLoginQuery,
  createGetUserByCredentialsQuery,
  createLogOutQuery,
} = require("../../routes/users/users.querys");
const execute = require("../../config/db");
const responseParser = require("../../helpers/responseParser");

const generateToken = require("../../helpers/generateToken");
const hashPassword = require("../../helpers/hashPassword");

async function getUserInfo(id) {
  const query = createGetUserQuery(id);

  let response;
  try {
    response = responseParser(await execute(query));
  } catch (error) {
    throw new Error(error);
  }

  return response;
}

async function postCredentialsLogin(email) {
  let token;

  const usersIDQuery = createGetUserByCredentialsQuery(email);

  try {
    const { usersID } = responseParser(await execute(usersIDQuery));

    if (!usersID)
      throw new Error(`error: "The email or password is incorrect." `);

    token = generateToken(usersID);

    const query = createLoginQuery({ usersID, token });

    await execute(query);
  } catch (error) {
    throw new Error(error);
  }

  return token;
}

async function getUserPassword(email) {
  let response;

  const query = createGetUserPasswordQuery({ email });

  try {
    response = responseParser(await execute(query));
  } catch (error) {
    throw new Error(error);
  }

  return response;
}

async function postNewUser(username, passwrd, email) {
  const usersID = uuidv4();
  const token = generateToken(usersID);
  const password = await hashPassword(passwrd);
  const userQuery = createUserPostQuery({ usersID, username, password, email });
  const tokenQuery = createPostTokenQuery({ usersID, token });

  try {
    await execute(userQuery);
    await execute(tokenQuery);
  } catch (err) {
    throw new Error(err);
  }

  return token;
}

async function postlogin3rdPartyAuthServer({ usersID, username }) {
  let token;

  try {
    token = generateToken(usersID);
    const query = createLoginQuery({ usersID, token });

    await execute(query);
  } catch (error) {
    throw new Error(error);
  }

  return token;
}

async function logOut(userId, token) {
  try {
    const query = createLogOutQuery(userId, token);

    await execute(query);

    return { succes: true };
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getUserInfo,
  postNewUser,
  getUserPassword,
  postCredentialsLogin,
  postlogin3rdPartyAuthServer,
  logOut,
};
