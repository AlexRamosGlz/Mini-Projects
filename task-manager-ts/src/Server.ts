import https from "https";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import App from "./App";

dotenv.config();

class Server {
  protected httpsServer: any;
  private PORT: number;

  constructor() {
    this.httpsServer = https.createServer(
      {
        key: fs.readFileSync(
          path.join(__dirname, "..", "credentials", "key.pem")
        ),
        cert: fs.readFileSync(
          path.join(__dirname, "..", "credentials", "cert.pem")
        ),
      },
      App
    );
    this.PORT = Number(process.env.PORT);
  }

  startServer(): void {
    this.httpsServer.listen(this.PORT, () =>
      console.log(`Running on PORT: ${this.PORT}`)
    );
  }
}

export default Server;
