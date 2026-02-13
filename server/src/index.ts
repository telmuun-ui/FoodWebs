import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response, Router } from "express";
import connectToMongoDB from "./mongodb";
import { foodRouter } from "./router/food.router";
import { CategoryRouter } from "./router/category.router";
import { authRouter } from "./router";
import { orderRouter } from "./router/order.router";

configDotenv();
const app: Application = express();
const port = 8000;

app.use(cors());
app.use(express.json());
//user postman
app.use("/create-signUp", authRouter)
app.use("/create-signIn", authRouter)
app.use("/create-pass", authRouter)
app.use("/create-change", authRouter)
app.use("/get-verifyPass", authRouter)
app.use("/get-refresh", authRouter)
//food postman
app.use("/food", foodRouter);
app.use("/new-food",foodRouter);

//Category
app.use("/create-cat", CategoryRouter);
app.use("/get-cat", CategoryRouter);
app.use("/patch-cat", CategoryRouter);
app.use("/del-cat", CategoryRouter);
//Order
app.use("/create-order", orderRouter)
app.use("/update-order", orderRouter)
app.use("/get-order", orderRouter)
app.use("/get-userid", orderRouter)
app.listen(port, async () => {
  await connectToMongoDB();
  console.log("http://localhost:8000");
});
