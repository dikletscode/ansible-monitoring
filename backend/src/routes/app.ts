import UserController from "../controller/users";
import { Application, Request, Response } from "express";
import { verifyToken } from "../middleware";
import AppTypes from "../models/app";
import AppController from "../controller/app";

export class AppRoutes {
  private appController = new AppController();

  public route(app: Application) {
    app.post("/api/app", verifyToken, this.appController.createApp);
    app.get("/api/apps", verifyToken, this.appController.getApp);
  }
}
