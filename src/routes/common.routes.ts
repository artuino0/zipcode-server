import { Router } from "express";
import { apiInfo } from "../controllers/common.controller";

const commonRouter = Router();

commonRouter.get("/", apiInfo);

export default commonRouter;
