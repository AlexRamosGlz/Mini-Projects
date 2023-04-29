import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IGetUser, IUser } from "../config/Interfaces";
import express, { Request, Response } from "express";
import UsersModel from "../models/UsersModel";

class User implements IUser {
  private username: string;
  private password: string;

  public usersRouter: express.IRouter;

  constructor() {
    this.usersRouter = express.Router();
    this.initRoutes();
  }

  async getUser(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ) {
    let response;
    try {
      response = await UsersModel.getUser();
    } catch (err) {
      return res.status(404).json({ err: "error" });
    }

    return res.status(200).json(req.params);
  }

  postUser: (
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ) => object;

  deleteUser: (
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ) => object;

  initRoutes(): void {
    this.usersRouter.get("/:id", this.getUser);
  }
}

export default User;
