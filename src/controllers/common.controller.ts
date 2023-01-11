import { Request, Response } from "express";

const apiInfo = (req: Request, res: Response): void => {
  res
    .status(200)
    .json({ api_version: 1.0, dev: "Arturo Sistemas", licence: "OpenSource" });
};

export { apiInfo };
