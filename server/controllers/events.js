import express from "express";
import mongoose from "mongoose";

import EventMessage from "../models/eventModel.js";

const router = express.Router();

//retrieving data takes time so async
//if successful return status 200 and json
export const getEventList = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    const today = new Date().toISOString();
    const total = await EventMessage.countDocuments({
      startDate: { $gt: today },
    });

    const events = await EventMessage.find({
      startDate: { $gt: today },
    })
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.json({
      data: events,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getFavEventList = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT;
    const today = new Date().toISOString();
    const total = await EventMessage.countDocuments({
      startDate: { $gt: today },
      fav: req.userId,
    });

    const events = await EventMessage.find({
      startDate: { $gt: today },
      fav: req.userId,
    })
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);
    console.log(events);
    res.json({
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
      data: events,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//for admin portal table
export const getEventTable = async (req, res) => {
  const { user } = req.params;
  try {
    const eventTable = await EventMessage.find();
    res.status(200).json(eventTable);
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
  const { searchQuery } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");
    console.log(title);
    const events = await EventMessage.find({ title });
    console.log(events);
    res.json(events);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getEventsByTag = async (req, res) => {
  const { tag } = req.query;

  try {
    const eventTag = new RegExp(tag, "i");
    console.log(eventTag);
    const events = await EventMessage.find({ tags: eventTag });
    console.log(events);
    res.json(events);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addEvent = async (req, res) => {
  const event = req.body;

  const newEvent = new EventMessage({
    ...event,
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
  const {
    title,
    tags,
    about,
    startDate,
    endDate,
    venue,
    contact,
    organizer,
    img,
    fav,
  } = req.body;

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
    organizer,
    img,
    fav,
    _id: id,
  };
  await EventMessage.findByIdAndUpdate(id, updateEvent, { new: true });
  res.json(updateEvent);
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No event with id: ${id}`);
  await EventMessage.findByIdAndRemove(id);
  res.json({ message: "Deleted successfully." });
};

export default router;

export const favEvent = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No event with id: ${id}`);

  const event = await EventMessage.findById(id);

  const index = event.fav.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    event.fav.push(req.userId);
  } else {
    event.fav = event.fav.filter((id) => id !== String(req.userId));
  }
  const updatedEvent = await EventMessage.findByIdAndUpdate(id, event, {
    new: true,
  });
  res.status(200).json(updatedEvent);
};
