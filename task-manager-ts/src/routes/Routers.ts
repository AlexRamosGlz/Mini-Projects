import express, { Response, Request, NextFunction } from "express";
import routesConstants from "../config/routesConstants";
import User from "../controllers/Users";

class Router {
  public router: express.IRouter;

  constructor() {
    this.router = express.Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.router.use(routesConstants.USERS, new User().usersRouter);
    this.router.get("/", (req, res) => {
      res.send("hola mundo");
    });
  }
}

export default Router;
