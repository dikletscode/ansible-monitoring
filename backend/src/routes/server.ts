import { Application, Request, Response } from "express";
import { verifyToken } from "../middleware";
import ServerController from "../controller/servet";

class ServerRoutes {
  private serverController: ServerController = new ServerController();

  public route(app: Application) {
    app.post("/api/server", verifyToken, this.serverController.createServer);
    app.get("/api/servers", verifyToken, this.serverController.getServer);
  }
}

export default ServerRoutes;
