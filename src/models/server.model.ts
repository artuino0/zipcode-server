import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import commonRouter from "../routes/common.routes";

class Server {
  app: Application;
  PORT: string = process.env.PORT || "3000";
  BASE_API: string = "/api/v1";
  API_ROUTES = {};

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan("dev"));
  }

  routes() {
    this.app.use(`${this.BASE_API}`, commonRouter);
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Server is running on port: ${this.PORT}`);
    });
  }
}

export default Server;
