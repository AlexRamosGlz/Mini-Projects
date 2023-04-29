const mysql = require("mysql2/promise");

async function dbConnection() {
  const connection = await mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    database: process.env.DB_NAME,
    port: process.env.RDS_PORT,
    password: process.env.RDS_PASSWORD,
  });

  connection.on("connection", () => {
    console.log("connected");
  });

  return connection;
}

async function execute(query) {
  return await (await dbConnection()).execute(query);
}

module.exports = execute;
