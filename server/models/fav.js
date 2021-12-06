import mongoose from "mongoose";

const favSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  eventId: {
    type: String,
  },
});

const Fav = mongoose.model("Fav", favSchema);

export default Fav;
