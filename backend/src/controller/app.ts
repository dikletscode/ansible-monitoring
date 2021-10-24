import { RequestWithCredential } from "../types";
import { Response } from "express";
import { AppTypes, AppSchema } from "../models/app";

export default class AppController {
  public async createApp(req: RequestWithCredential, res: Response) {
    try {
      const { name, serverId }: AppTypes = req.body;
      const dataApp = {
        name,
        serverId,
      };
      const apps = new AppSchema(dataApp);
      await apps.save();
      res.status(201).send({ message: "App created Successfully" });
    } catch (error) {
      res.status(500).send({ message: "An error occured" });
    }
  }
  public async getApp(_req: RequestWithCredential, res: Response) {
    try {
      let data = await AppSchema.find();
      res.status(200).send({ apps: data });
    } catch (error) {
      res.status(500).send({ message: "An error occured" });
    }
  }
}
