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

app.use("/users", authRouter);
app.use("/foods", foodRouter);

app.use("/orders", orderRouter);
app.use("/categories", CategoryRouter);

app.listen(port, async () => {
  await connectToMongoDB();
  console.log("http://localhost:8000");
});
