import { Request, Response } from "express";
import ZipCodeModel from "../models/postal-codes.model";
import { zipCodeFormatter } from "../helpers/colonias.formater";

const getColoniasByCP = (req: Request, res: Response) => {
  const { zipcode } = req.params;

  ZipCodeModel.findAll({ where: { d_codigo: zipcode } }).then((rs) => {
    if (rs.length === 0)
      return res
        .status(404)
        .json({ error: `El codigo postal ${zipcode} no existe` });

    let response = zipCodeFormatter(rs);
    res.json(response);
  });
};

export { getColoniasByCP };
