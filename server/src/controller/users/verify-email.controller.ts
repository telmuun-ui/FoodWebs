import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../../models";

export const verifyUserController = async (req: Request, res: Response) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({
        message: "Token oldsongui",
      });
    }

    const decoded = jwt.verify(
      token as string,
      process.env.JWT_SECRET as string
    ) as { _id: string; email: string };

    const user = await UserModel.findById(decoded._id);

    if (!user) {
      return res.status(404).json({
        message: "Hereglegch oldsongui",
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        message: "Ali hediin batalgaajsan baina",
      });
    }

    user.isVerified = true;
    await user.save();

    return res.status(200).json({
      message: "Email amjilttai batalgaajlaa",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: "Token huchingui esvel hugatsaa duussan",
    });
  }
};


