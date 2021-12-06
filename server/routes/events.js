import express from "express";
import {
  getEventList,
  getEvent,
  addEvent,
  updateEvent,
  deleteEvent,
  getEventsBySearch,
  getEventTable,
  favEvent,
} from "../controllers/events.js";

//create a new router obj for request handling
const router = express.Router();

//specify a callback fx when received a request to the specific endpoints
router.get("/", getEventList);
router.get("/:user", getEventTable);
router.get("/detail/:id", getEvent);
router.get("/search", getEventsBySearch);
router.post("/", addEvent);
router.patch("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.post("/addfav", favEvent);
export default router;
