import { Router } from "express";
import { createOrder } from "../controller/order";
import { authentication } from "../middleware/authencation";
export const orderRouter = Router();

orderRouter.post("/order", authentication, createOrder)
