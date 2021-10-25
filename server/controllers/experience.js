import express from "express";

import ExpMessage from "../models/experienceModal.js";

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
