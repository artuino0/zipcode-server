import { Router } from "express";
import { body, param } from "express-validator";
import { getColoniasByCP } from "../controllers/postal-code.controller";
import { fieldValidator } from "../helpers/errors.handler";

const postalCodeRouter = Router();

postalCodeRouter.get(
  "/:zipcode",
  [
    param("zipcode")
      .isLength({ min: 5, max: 5 })
      .withMessage("El formato del codigo postal ingresado no es valido"),
    fieldValidator,
  ],
  getColoniasByCP
);

export default postalCodeRouter;
