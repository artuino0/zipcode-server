import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import commonRouter from "../routes/common.routes";
import sequelize from "../database/mssql.connect";
import postalCodeRouter from "../routes/postal-code.routes";
import userRouter from "../routes/user.routes";

class Server {
  app: Application;
  PORT: string = process.env.PORT || "3000";
  BASE_API: string = "/api/v1";
  API_ROUTES = {
    postalCodeRoute: "/zipcode",
    userRoute: "/user",
  };

  constructor() {
    this.app = express();
    this.database();
    this.middlewares();
    this.routes();
  }

  async database() {
    sequelize
      .authenticate()
      .then((rs) => {
        console.log("Database connected successfully");
      })
      .catch((e) => {
        throw new Error(`Can't connect to database: ${e.name}`);
      });
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan("dev"));
  }

  routes() {
    this.app.use(`${this.BASE_API}`, commonRouter);
    this.app.use(
      `${this.BASE_API}${this.API_ROUTES.postalCodeRoute}`,
      postalCodeRouter
    );
    this.app.use(`${this.BASE_API}${this.API_ROUTES.userRoute}`, userRouter);
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Server is running on port: ${this.PORT}`);
    });
  }
}

export default Server;
