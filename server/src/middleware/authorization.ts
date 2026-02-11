
import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models";

export const authorization =
  (...role: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;

    if (role.includes(user.role)) {
      req.body.user = user;
      next();
    } else {
      res.status(400).json({ message: "invalid role bro" });
    }
  }; 