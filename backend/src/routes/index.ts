import UserController from "../controller/users";
import { Application, Request, Response } from "express";
import { verifyToken } from "../middleware";

export class MainRoutes {
  private userController: UserController = new UserController();

  public route(app: Application) {
    app.post("/api/register", this.userController.register);
    app.get("/api/users", verifyToken, this.userController.getUsers);
    app.get("/api/user", verifyToken, this.userController.getUser);
    app.post("/api/login", this.userController.login);
  }
}
