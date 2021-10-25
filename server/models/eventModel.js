import mongoose from "mongoose";

//Schema defines the structure of the document
//Each schema maps to a MongoDB collection
const eventSchema = mongoose.Schema({
  title: String,
  about: String,
  startDate: String,
  endDate: String,
  venue: String,
  contact: String,
  img: String,
});

////to use the schema, need to convert it to model
//Mongoose compiles a model
//later can use for data interaction such as create,delete...
const Event = mongoose.model("Event", eventSchema);

export default Event;
