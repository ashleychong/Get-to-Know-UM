import express from "express";
import mongoose from "mongoose";

import EventMessage from "../models/eventModel.js";

const router = express.Router();

//retrieving data takes time so async
//if successful return status 200 and json
export const getEventList = async (req, res) => {
  try {
    const events = await EventMessage.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await EventMessage.findById(id);

    res.status(200).json(event);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getEventsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    const events = await EventMessage.find({
      $or: [{ title: title }, { tags: { $in: tags.split(",") } }],
    });

    res.json({ data: events });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addEvent = async (req, res) => {
  const { title, tags, about, startDate, endDate, venue, contact, img } =
    req.body;

  const newEvent = new EventMessage({
    title,
    tags,
    about,
    startDate,
    endDate,
    venue,
    contact,
    img,
  });

  try {
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, tags, about, startDate, endDate, venue, contact, img } =
    req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  const updateEvent = {
    title,
    tags,
    about,
    startDate,
    endDate,
    venue,
    contact,
    img,
    _id: id,
  };
  await EventMessage.findByIdAndUpdate(id, updateEvent, { new: true });
  res.json(updateEvent);
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  await EventMessage.findByIdAndRemove(id);
  res.json({ message: "Deleted successfully." });
};

export default router;
