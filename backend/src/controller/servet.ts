import { ServersTypes, Servers } from "../models/server";
import { RequestWithCredential } from "../types";
import { Response } from "express";

export default class ServerController {
  public async createServer(req: RequestWithCredential, res: Response) {
    try {
      const { ip, sshKey, username }: ServersTypes = req.body;
      const dataServer = {
        ip,
        sshKey,
        userId: req.user.id,
        username,
      };
      const server = new Servers(dataServer);
      await server.save();
      res.status(201).send({ message: "Server created Successfully" });
    } catch (error) {
      res.status(500).send({ message: "An error occured" });
    }
  }
  public async getServer(_req: RequestWithCredential, res: Response) {
    try {
      let data = await Servers.find();
      res.status(200).send({ servers: data });
    } catch (error) {
      res.status(500).send({ message: "An error occured" });
    }
  }
}
