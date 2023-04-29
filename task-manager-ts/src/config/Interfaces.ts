import { Express, Request, Response, NextFunction } from "express";

export interface IUser {
  postUser: (req: Request, res: Response) => object;
  getUser: (req: Request, res: Response) => object;
  deleteUser: (req: Request, res: Response) => object;
}

export interface IPostUser {
  succes: boolean;
}

export interface IGetUser {
  id: string;
  email: string;
  username: string;
}

export interface IDeleteUser {
  succes: boolean;
}

export interface IError {
  error: string;
}
