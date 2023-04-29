import express, { Request, Response, NextFunction } from "express";
import Router from "./routes/Routers";

interface IApp {
  initRoutes: () => void;
  initMiddleware: () => void;
}

class App implements IApp {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.initRoutes();
    this.initMiddleware();
  }

  initRoutes() {
    const router = new Router().router;
    this.express.use(router);
  }

  initMiddleware() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }
}

export default new App().express;
