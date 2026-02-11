import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../../models";

export const signInController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user oldsongui" });
    }

    const ok = bcrypt.compareSync(password, user.password);
    if (!ok) {
      return res.status(400).json({ message: "password buruu" });
    }

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "15m" },
    );

    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_REFRESH_SECRET as string,
      { expiresIn: "7d" },
    );
    user.refreshToken = refreshToken;
    await user.save();
    return res.status(200).json({
      message: "Success",
      accessToken,
      refreshToken,
      user: { id: user._id, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Aldaa garlaa" });
  }
};
