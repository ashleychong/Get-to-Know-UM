import mongoose from "mongoose";

const clubSchema = mongoose.Schema({
  title: String,
  about: String,
  event: String,
  contact: String,
  img: String,
});

const Club = mongoose.model("Club", clubSchema);

export default Club;
