import { Request, Response } from "express";
import { OrderModel } from "../../models";

export const createOrder = async (req: any, res: Response) => {
  try {
    const { foodOrderItems } = req.body;

    if (!foodOrderItems || foodOrderItems.length === 0) {
      return res.status(400).json({ message: "foodOrderItems required" });
    }

    const order = await OrderModel.create({
      user: req.user._id,     
      foodOrderItems,
      totalPrice: 0,
      status: "PENDING",
     
    });

    return res.status(200).json({ message: "zahialga amjilttai", data: order });
  } catch (err: any) {
    return res.status(500).json({ message: "aldaa", error: err.message });
  }
};

