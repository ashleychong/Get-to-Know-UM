import mongoose from "mongoose";

import Cafe from "../models/cafe.js";

export const getAllCafe = async (req, res) => {
  try {
    const cafes = await Cafe.find();

    res.status(200).json(cafes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCafe = async (res, req) => {
  const { id } = req.params;
  try {
    const cafe = await Cafe.findById(id);
    res.status(200).json(cafe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCafe = async (req, res) => {
  const cafe = req.body;

  const newCafe = new Cafe({
    ...cafe,
  });

  try {
    await newCafe.save();
    res.status(201).json(newCafe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateCafe = async (req, res) => {
  const { id } = req.params;
  const { title, description, avgRating, image } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No cafe with id: ${id}`);
  }

  const updatedCafe = await Cafe.findByIdAndUpdate(
    id,
    { title, description, avgRating, image },
    { new: true }
  );
  res.json(updatedCafe);
};

export const deleteCafe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No cafe with id: ${id}`);
  }

  await Cafe.findByIdAndRemove(id);
  res.json({ message: "Cafe deleted successfully." });
};
