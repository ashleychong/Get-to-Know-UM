import mongoose from "mongoose";

const leisureSchema = mongoose.Schema({
  title: String,
  details: [String],
  category: String,
  img: String,
});

const Leisure = mongoose.model("Leisure", leisureSchema);

export default Leisure;
