import { Request, Response } from "express";
import UserModel from "../models/user.model";
import apiKeyGenerator from "../helpers/apikey.generator";

const createUser = (req: Request, res: Response) => {
  const { email } = req.body;
  let apiKey = apiKeyGenerator();
  const newUser = UserModel.build({ email, apiKey });

  newUser
    .save()
    .then((rs) => {
      res.status(201).json(rs);
    })
    .catch((e) => {
      res.status(400).json({ error: e.name });
      console.log(e);
    });
};

const securityAPIKey = (apiKey: string) => {
  return new Promise<boolean>((resolve, reject) => {
    UserModel.findOne({ where: { apiKey } }).then((rs) => {
      if (!rs) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};

export { createUser, securityAPIKey };
