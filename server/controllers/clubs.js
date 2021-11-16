import express from "express";
import mongoose from "mongoose";

import ClubMessage from "../models/clubModal.js";

const router = express.Router();

export const getClubList = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    const total = await ClubMessage.countDocuments({});
    const clubs = await ClubMessage.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.json({
      data: clubs,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
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

export const getClubsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    const clubs = await ClubMessage.find({
      $or: [{ title: title }, { tags: { $in: tags.split(",") } }],
    });

    res.json({ data: clubs });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addClub = async (req, res) => {
  const { title, about, event, contact, img, clublink } = req.body;

  const newClub = new ClubMessage({
    title,
    about,
    event,
    contact,
    img,
    clublink,
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
  const { title, about, event, contact, img, clublink } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No club with id: ${id}`);
  const updateClub = {
    title,
    about,
    event,
    contact,
    img,
    clublink,
    _id: id,
  };
  await ClubMessage.findByIdAndUpdate(id, updateClub, { new: true });
  res.json(updateClub);
};

export const deleteClub = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No club with id: ${id}`);
  await ClubMessage.findByIdAndRemove(id);
  res.json({ message: "Deleted successfully." });
};

export default router;
