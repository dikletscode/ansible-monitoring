import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { RequestWithCredential } from "../types";

export const verifyToken = async (
  req: RequestWithCredential,
  res: Response,
  next: NextFunction
) => {
  const headers = req.headers;
  const auth = headers.authorization;
  //   console.log(auth);
  if (auth) {
    const token = auth && auth.split(" ")[1];
    Jwt.verify(token, process.env.SECRET_TOKEN, (err, decode) => {
      if (err) {
        const message =
          err.name === "JsonWebTokenError"
            ? { message: "unauthorized", code: "401" }
            : { message: "expired", code: "403" };
        console.log(err);
        return res.status(403).json(message);
      }

      req.user = decode;
      return next();
    });
  } else {
    return res.status(401).send("u can't access,not authenticated");
  }
};
