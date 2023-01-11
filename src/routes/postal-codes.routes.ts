import { Router } from "express";
import { getColoniasByCP } from "../controllers/postal-code.controller";

const postalCodeRouter = Router();

postalCodeRouter.get("/:zipcode", getColoniasByCP);

export default postalCodeRouter;
