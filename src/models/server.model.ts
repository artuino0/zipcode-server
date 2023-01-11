import express, { Application } from "express";

class Server {
  app: Application;
  PORT: string = process.env.PORT || "3000";

  constructor() {
    this.app = express();
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Server is running on port: ${this.PORT}`);
    });
  }
}

export default Server;
