import { Schema } from "mongoose";

export const FoodOrderItemSchema = new Schema(
  {
    food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
    quantity: { type: Number, required: true, min: 1 },
  },
  { _id: false }
);
