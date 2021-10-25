import express from "express";
import mongoose from "mongoose";

import ClubMessage from "../models/clubModal.js";

const router = express.Router();

export const getClubList = async (req, res) => {
  try {
    const clubs = await ClubMessage.find();
    res.status(200).json(clubs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getClub = async (req, res) => {
  const { id } = req.params;
  try {
    const club = await ClubMessage.findById(id);
    res.status(200).json(club);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addClub = async (req, res) => {
  const { title, about, event, contact, img } = req.body;

  const newClub = new ClubMessage({
    title,
    about,
    event,
    contact,
    img,
  });

  try {
    await newClub.save();
    res.status(201).json(newClub);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateClub = async (req, res) => {
  const { id } = req.params;
  const { title, about, event, contact, img } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  const updateClub = {
    title,
    about,
    event,
    contact,
    img,
    _id: id,
  };
  await ClubMessage.findByIdAndUpdate(id, updateClub, { new: true });
  res.json(updateClub);
};

export const deleteClub = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  await ClubMessage.findByIdAndRemove(id);
  res.json({ message: "Deleted successfully." });
};

export default router;
