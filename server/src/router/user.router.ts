import { Router } from "express";
import { signUpController } from "../controller/users";
import { signInController } from "../controller/users";
import { resetPass } from "../controller/users";
import { confirmResetPass } from "../controller/users/create-changePass.controller";
import { verifyPass } from "../controller/users";
import { refreshUser } from "../controller/users";
import { authentication } from "../middleware/authencation";
export const authRouter = Router();

authRouter.post("/sign-up",authentication, signUpController);
authRouter.post("/sign-in",authentication, signInController);
authRouter.post("/resetPass",authentication, resetPass);
authRouter.post("/changePass",authentication, confirmResetPass);
authRouter.get("/verifyPass",authentication, verifyPass);
authRouter.get("/refresh", refreshUser );