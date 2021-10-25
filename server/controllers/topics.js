import mongoose from "mongoose";

import Topic from "../models/topic.js";
import Post from "../models/post.js";

export const getTopics = async (req, res) => {
    try {
        const topics = await Topic.find();
        res.status(200).json(topics);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getTopic = async (req, res) => {
    const { id } = req.params;

    try {
        const topic = await Topic.findById(id);
        res.status(200).json(topic);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createTopic = async (req, res) => {
    const topic = req.body;

    const newTopic = new Topic({
        userId: req.userId,
        ...topic,
        createdAt: new Date().toISOString(),
    });

    try {
        await newTopic.save();
        res.status(201).json(newTopic);
    } catch (error) {
        res.status(409).json({ message: error.message });
  }
};

export const updateTopic = async (req, res) => {
    const { id } = req.params;
    const { title, message } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No topic with id: ${id}`);


    const updatedTopic = await Topic.findByIdAndUpdate(id, { title, message }, { new: true });

    res.json(updatedTopic);
};

export const deleteTopic = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No topic with id: ${id}`);

    await Topic.findByIdAndRemove(id);
    await Post.remove({ topicId: id });

    res.json({ message: "Topic deleted successfully." });
};
