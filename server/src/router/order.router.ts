import { Router } from "express";
import { createOrder, getOrderedFood, getOrders, updateOrder } from "../controller/order";
import { authentication } from "../middleware/authencation";
export const orderRouter = Router();

orderRouter.post("/order", authentication, createOrder);
orderRouter.patch("/food-order/:orderId", updateOrder);
orderRouter.get("/getorder", getOrders)
orderRouter.get("/food-order/user/:userId", getOrderedFood)