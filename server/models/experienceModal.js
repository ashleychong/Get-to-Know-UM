import mongoose from "mongoose";

const expSchema = mongoose.Schema({
  title: String,
  description: String,
  img: String,
});

const Experience = mongoose.model("Experience", expSchema);

export default Experience;
