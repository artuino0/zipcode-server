import Sequelize from "sequelize";

import dbConnection from "../database/mssql.connect";

const UserModel = dbConnection.define("User", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  apiKey: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default UserModel;
