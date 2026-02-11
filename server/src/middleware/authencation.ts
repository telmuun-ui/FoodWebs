import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models";

export const authentication = async (req: any, res: Response, next: NextFunction) => {
  try {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith("Bearer ")) {
      return res.status(401).json({ message: "token bhgui" });
    }

    const token = auth.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };

    const user = await UserModel.findById(decoded.userId);
    if (!user) return res.status(401).json({ message: "user oldsongui" });

    req.user = user; 
    next();
  } catch (err) {
    return res.status(401).json({ message: "invalid token" });
  }
};

