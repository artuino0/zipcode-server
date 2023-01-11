import { Request, Response } from "express";
import ZipCodeModel from "../models/postal-codes.model";
import { Colonia, zipCodeFormatter } from "../helpers/colonias.formater";

const getColoniasByCP = (req: Request, res: Response) => {
  ZipCodeModel.findAll({ where: { d_codigo: 36740 } }).then((rs) => {
    console.log(rs);
    let response = zipCodeFormatter(rs);
    res.json(response);
  });
};

export { getColoniasByCP };
