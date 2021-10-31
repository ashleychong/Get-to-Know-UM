import express from "express";

import ExpMessage from "../models/experienceModal.js";
import LeisureMessage from "../models/leisureModel.js";

const router = express.Router();

export const getExpList = async (req, res) => {
  try {
    const exps = await ExpMessage.find();
    res.status(200).json(exps);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const addExp = async (req, res) => {
  const { title, description, img } = req.body;

  const newExp = new ExpMessage({
    title,
    description,
    img,
  });

  try {
    await newExp.save();
    res.status(201).json(newExp);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getLeisureList = async (req, res) => {
  try {
    const leisures = await LeisureMessage.find();
    res.status(200).json(leisures);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getLeisure = async (req, res) => {
  const { id } = req.params;
  try {
    const leisure = await LeisureMessage.findById(id);

    res.status(200).json(leisure);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getLeisuresBySearch = async (req, res) => {
  // const { searchQuery, tags } = req.query;
  // try {
  //   const title = new RegExp(searchQuery, "i");
  //   const leisures = await LeisureMessage.find({
  //     $or: [{ title: title }, { tags: { $in: tags.split(",") } }],
  //   });
  //   res.json({ data: leisures });
  // } catch (error) {
  //   res.status(404).json({ message: error.message });
  // }
};

export const addLeisure = async (req, res) => {
  const { title, details, category } = req.body;

  const newLeisure = new LeisureMessage({
    title,
    details,
    category,
  });

  try {
    await newLeisure.save();
    res.status(201).json(newLeisure);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateLeisure = async (req, res) => {
  const { id } = req.params;
  const { title, details, category } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  const updateLeisure = {
    title,
    details,
    category,
    _id: id,
  };
  await LeisureMessage.findByIdAndUpdate(id, updateLeisure, { new: true });
  res.json(updateLeisure);
};

export const deleteLeisure = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  await LeisureMessage.findByIdAndRemove(id);
  res.json({ message: "Deleted successfully." });
};

export default router;
