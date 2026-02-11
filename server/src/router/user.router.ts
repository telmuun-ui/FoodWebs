import { Router } from "express";
import { signUpController } from "../controller/users";
import { signInController } from "../controller/users";
import { resetPass } from "../controller/users";
import { confirmResetPass } from "../controller/users/create-changePass.controller";
import { verifyPass } from "../controller/users";
import { refreshUser } from "../controller/users";
export const authRouter = Router();

authRouter.post("/sign-up", signUpController);
authRouter.post("/sign-in", signInController);
authRouter.post("/resetPass", resetPass);
authRouter.post("/changePass", confirmResetPass);
authRouter.get("/verifyPass", verifyPass);
authRouter.get("/refresh", refreshUser );