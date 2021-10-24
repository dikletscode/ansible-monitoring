import hash, { dataCredential } from "../helpers/hash";
import createAccessToken from "../helpers/createToken";
import { User, UserTypes } from "../models/user";
import { RequestWithCredential } from "../types";
import { Response } from "express";

export default class UserController {
  public async register(req: RequestWithCredential, res: Response) {
    const { name, email, country, password }: UserTypes = req.body;
    try {
      const hashed = await hash(password);
      const dataUser = {
        name,
        email,
        country,
        password: hashed,
      };
      const user = new User(dataUser);
      await user.save();
      res.status(201).send({ message: "User created Successfully" });
    } catch (err) {
      console.log(err.message, err.code, "err");
      if (err.name === "MongoServerError" && err.code === 11000) {
        res.status(409).send({ message: "Email has been user" });
      } else {
        res.status(500).send({ message: "An error occured" });
      }
    }
  }

  public async login(req: RequestWithCredential, res: Response) {
    const { email, password }: UserTypes = req.body;
    try {
      let user = await User.findOne({ email: email });
      let userCredential = await dataCredential(password, user);
      const token = createAccessToken(user.id);

      res.status(200).send({ user: userCredential, token: token });
    } catch (error) {
      if (error.error || error instanceof TypeError) {
        res.status(401).json({
          message: "email or password are invalid",
          user: null,
        });
      } else {
        console.log(error);
        res.status(500).send({ message: "An error occured" });
      }
    }
  }

  public getUsers(req: RequestWithCredential, res: Response) {
    User.find((err, data) => {
      if (!err) {
        console.log(data);
        res.status(200).send({ users: data });
      } else {
        res.status(500).send({ message: "An error occured" });
      }
    });
  }
  public async getUser(req: RequestWithCredential, res: Response) {
    try {
      let data = await User.findOne({ _id: req.user.id }, { password: 0 });
      console.log(data);
      res.status(200).send({ user: data });
    } catch (error) {
      res.status(500).send({ message: "An error occured" });
    }
  }
}
