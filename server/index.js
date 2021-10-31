import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/user.js";
import topicRoutes from "./routes/topics.js";
import courseRoutes from "./routes/courses.js";
import manageEventRoutes from "./routes/events.js";
import manageClubRoutes from "./routes/clubs.js";
import manageLeisureRoutes from "./routes/experience.js";
import foodNominationRoutes from "./routes/foodNominations.js";
import foodRoutes from "./routes/food.js";
import gpaRoutes from "./routes/gpa.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/topics", topicRoutes);
app.use("/courses", courseRoutes);
app.use("/gpa", gpaRoutes);
app.use("/event", manageEventRoutes);
app.use("/club", manageClubRoutes);
app.use("/leisure", manageLeisureRoutes);
app.use("/foodNominations", foodNominationRoutes);
app.use("/food", foodRoutes);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.ATLAS_URI;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
