import mongoose from "mongoose";

import Course from "../models/course.js";
import CourseReview from "../models/courseReview.js";

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getCourse = async (req, res) => {
    const { id } = req.params;
    try {
        const course = await Course.findById(id);
        res.status(200).json(course);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createCourse = async (req, res) => {
    const course = req.body;

    const newCourse = new Course({
        ...course,
    });

    try {
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(409).json({ message: error.message });
  }
};

export const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, courseCode, description, image, faculty } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No course with id: ${id}`);
    }
    
    const updatedCourse = await Course.findByIdAndUpdate(id, { title, courseCode, description, image, faculty }, { new: true });
    res.json(updatedCourse);
};

export const deleteCourse = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No course with id: ${id}`);
    }

    await Course.findByIdAndRemove(id);
    await CourseReview.deleteMany({ courseId: id });
    
    res.json({ message: "Course deleted successfully." });
};