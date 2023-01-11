import Sequelize from "sequelize";

import dbConnection from "../database/mssql.connect";

const ZipCodeModel = dbConnection.define(
  "Dir_CodigosPostales",
  {
    d_codigo: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    d_asenta: {
      type: Sequelize.STRING,
    },
    d_tipo_asenta: {
      type: Sequelize.STRING,
    },
    d_mnpio: {
      type: Sequelize.STRING,
    },
    d_estado: {
      type: Sequelize.STRING,
    },
    d_ciudad: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

export default ZipCodeModel;
