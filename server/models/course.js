import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    courseCode: { type: String },
    title: { type: String },
    description: { type: String },
    faculty: { type: String, default: "" },
    image: { type: String, default: "" },
});

export default mongoose.model("Course", courseSchema);