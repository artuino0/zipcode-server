import dotenv from "dotenv";
import Server from "./src/models/server.model";

dotenv.config();

const API_SERVER = new Server();

API_SERVER.listen();
