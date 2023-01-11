import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user.model";

const apiKeyValidator = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) return res.status(403).send(`403 Forbidden`);

  UserModel.findOne({ where: { apiKey } }).then((rs) => {
    if (!rs) {
      return res.status(403).send(`403 Forbidden`);
    } else {
      next();
    }
  });
};

export { apiKeyValidator };
