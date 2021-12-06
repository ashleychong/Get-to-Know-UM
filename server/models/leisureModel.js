import mongoose from "mongoose";

const leisureSchema = mongoose.Schema({
  title: String,
  details: [String],
  category: String,
});

const Leisure = mongoose.model("Leisure", leisureSchema);

export default Leisure;
