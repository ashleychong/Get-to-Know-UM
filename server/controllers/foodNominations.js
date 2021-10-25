import mongoose from "mongoose";

import FoodNomination from "../models/foodNomination.js";

export const getFoodNominations = async (req, res) => {
  try {
    const foodNomination = await FoodNomination.find();
    res.status(200).json(foodNomination);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getFoodNomination = async (req, res) => {
  const { id } = req.params;
  try {
    const foodNomination = await FoodNomination.findById(id);
    
    res.status(200).json(foodNomination);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createFoodNomimation = async (req, res) => {
  const foodNomination = req.body;

  const newFoodNomination = new FoodNomination({
    ...foodNomination,
  });

  try {
    await newFoodNomination.save();
    res.status(201).json(newFoodNomination);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


export const deleteFoodNomination = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No food nomination with id: ${id}`);
  }

  await FoodNomination.findByIdAndRemove(id);
  res.json({ message: "Food nomination deleted successfully." });
};
