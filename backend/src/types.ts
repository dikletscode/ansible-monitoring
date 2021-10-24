import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface RequestWithCredential extends Request {
  user?: JwtPayload;
}
export interface ExpressParams {
  req: RequestWithCredential;
  res: Response;
  next?: NextFunction;
}
