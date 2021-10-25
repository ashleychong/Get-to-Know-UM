import mongoose from "mongoose";

const foodNominationSchema = mongoose.Schema({
  foodName: { type: String },
  image: { type: String, default: "" },
  description: { type: String },
});

export default mongoose.model("FoodNomination", foodNominationSchema);
