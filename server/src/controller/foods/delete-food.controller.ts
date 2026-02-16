// import { Request, Response } from "express";
// import { FoodModel } from "../../models";
// export const deleteFoodCategory = async (req: Request, res: Response) => {
//   const { foodCategoryId } = req.body;

//   const category = await FoodModel.findByIdAndDelete(foodCategoryId);

//   res.status(200).send(category);
// };