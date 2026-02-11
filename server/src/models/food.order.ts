import { models, model, Schema, Model, Types } from "mongoose";
import { FoodOrderItemSchema } from "./FoodOrderItem";
export enum FoodOrderStatusEnum {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}

export type Order = {
  user: Types.ObjectId;
  foodOrderItems: {
    food: Types.ObjectId;
    quantity: number;
  }[];
  totalPrice: number;
  status: FoodOrderStatusEnum;
};

const OrderSchema = new Schema<Order>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    foodOrderItems: [FoodOrderItemSchema],

    totalPrice: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: Object.values(FoodOrderStatusEnum),
      default: FoodOrderStatusEnum.PENDING,
    },
  },
  { timestamps: true }
);

export const OrderModel: Model<Order> =
  models.Order || model<Order>("Order", OrderSchema);
