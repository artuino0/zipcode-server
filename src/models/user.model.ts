import Sequelize from "sequelize";

import dbConnection from "../database/mssql.connect";

const UserModel = dbConnection.define(
  "Dir_Users",
  {
    email: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    apiKey: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default UserModel;
