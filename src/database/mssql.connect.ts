import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const MSSQL_HOST: string = process.env.MSSQL_HOST || "";
const MSSQL_DB: string = process.env.MSSQL_DB || "";
const MSSQL_USER: string = process.env.MSSQL_USER || "";
const MSSQL_PASSWORD: string = process.env.MSSQL_PASSWORD || "";

const mssqlConnection = new Sequelize(MSSQL_DB, MSSQL_USER, MSSQL_PASSWORD, {
  host: MSSQL_HOST,
  dialect: "mssql",
  port: 1433,
  logging: false,
});

export default mssqlConnection;
