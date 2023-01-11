import { Router } from "express";
import { createUser } from "../controllers/user.controller";
import { body } from "express-validator";
import { fieldValidator } from "../helpers/errors.handler";

const userRouter = Router();

userRouter.post(
  "/",
  [body("email").not().isEmpty().isEmail(), fieldValidator],
  createUser
);

export default userRouter;
