import mongoose from "mongoose";

const topicSchema = mongoose.Schema({
    title: { type: String },
    message: { type: String },
    username: { type: String },
    userId: { type: String },
    createdAt: { type: Date, default: new Date() },
    category: { type: String, default: "" },
});

export default mongoose.model("Topic", topicSchema);