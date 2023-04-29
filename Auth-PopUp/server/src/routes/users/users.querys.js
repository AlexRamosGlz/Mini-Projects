function createUserPostQuery(queryParamas) {
  const values = Object.values(queryParamas).map((item) => `"${item}"`);
  const params = Object.keys(queryParamas);

  return `INSERT INTO users (${params.join(",")}) VALUES (${values.join(",")})`;
}

function createPostTokenQuery(queryParamas) {
  const values = Object.values(queryParamas).map((item) => `"${item}"`);
  const params = Object.keys(queryParamas);

  return `INSERT INTO tokens (${params.join(",")}) VALUES (${values.join(
    ","
  )})`;
}

function createGetUserQuery(usersID) {
  return `SELECT users.usersID, token, email, username FROM users INNER JOIN tokens ON users.usersID = "${usersID}" AND tokens.usersID = "${usersID}"`;
}

function createGetUserPasswordQuery({ email }) {
  return `SELECT password FROM users WHERE email="${email}"`;
}

function createGetUserByCredentialsQuery(email) {
  return `SELECT usersID FROM users WHERE email="${email}"`;
}

function createLoginQuery(queryParamas) {
  const values = Object.values(queryParamas).map((item) => `"${item}"`);
  const params = Object.keys(queryParamas);

  return `INSERT INTO tokens (${params.join(",")}) VALUES (${values.join(
    ","
  )})`;
}

module.exports = {
  createUserPostQuery,
  createPostTokenQuery,
  createGetUserQuery,
  createGetUserPasswordQuery,
  createGetUserByCredentialsQuery,
  createLoginQuery,
};
