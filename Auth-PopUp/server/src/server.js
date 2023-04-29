const fs = require("fs");
const path = require("path");
const https = require("https");
require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT;

const httpsServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "..", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "..", "cert.pem")),
  },
  app
);

httpsServer.listen(PORT, () => {
  console.log("server listening on port", PORT);
});
