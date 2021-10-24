import express, { Application } from "express";
import mongoose from "mongoose";
import ServerRoutes from "../routes/server";
import { MainRoutes } from "../routes";
import cors from "cors";
import { AppRoutes } from "../routes/app";

class App {
  public app: Application;
  public mongoUrl = process.env.mongoUrl;

  private parsing() {
    this.app.use(
      cors({
        origin: "http://localhost:3000",
      })
    );
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  private mainRoutes = new MainRoutes();
  private serverRoutes = new ServerRoutes();
  private appRoutes = new AppRoutes();

  private async dbSetup() {
    try {
      await mongoose.connect(this.mongoUrl);
    } catch (error) {
      console.log("connection error", error);
    }
  }

  constructor() {
    this.app = express();
    this.parsing();
    this.dbSetup();
    this.mainRoutes.route(this.app);
    this.serverRoutes.route(this.app);
    this.appRoutes.route(this.app);
  }
}

export default new App().app;
