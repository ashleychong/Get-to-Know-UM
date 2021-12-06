import mongoose from "mongoose";

const expSchema = mongoose.Schema({
  title: String,
  description: String,
  img: String,
  name: String,
  creator: String,
  likes: {
    type: [String],
    default: [],
  },
  status: String,
});

const Experience = mongoose.model("Experience", expSchema);

export default Experience;
