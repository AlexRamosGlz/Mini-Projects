import { IDeleteUser, IError, IGetUser, IPostUser } from "../config/Interfaces";

class UsersModel {
  createNewUser(): IPostUser | IError {
    return { succes: true };
  }

  async getUser(): Promise<IGetUser | IError> {
    return;
  }

  deleteUser(): IDeleteUser | IError {
    return;
  }
}

export default new UsersModel();
