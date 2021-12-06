import mongoose from "mongoose";

const foodNominationSchema = mongoose.Schema({
  foodName: { type: String },
  image: { type: String, default: "" },
  description: { type: String },
  createdAt: { type: Date, default: new Date() },
  status: { type: String, default: "pending" },
});

export default mongoose.model("FoodNomination", foodNominationSchema);
