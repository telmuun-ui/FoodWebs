import { Router } from "express";
import { signUpController } from "../controller/users";
import { signInController } from "../controller/users";
import { resetPass } from "../controller/users";
import { confirmResetPass } from "../controller/users/create-changePass.controller";
import { verifyPass } from "../controller/users";
import { refreshUser } from "../controller/users";
import { authentication } from "../middleware/authencation";
import { verifyUserController } from "../controller/users/verify-email.controller";
export const authRouter = Router();

authRouter.post("/sign-up", signUpController);
authRouter.post("/sign-in", signInController);
authRouter.post("/resetPass", resetPass);
authRouter.post("/changePass", authentication, confirmResetPass);
authRouter.get("/verifyPass", authentication, verifyPass);
authRouter.get("/refresh", authentication, refreshUser);


authRouter.get("/verify-user", verifyUserController);
