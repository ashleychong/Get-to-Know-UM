import express from "express";
import {
  getClubList,
  getClub,
  addClub,
  updateClub,
  deleteClub,
  getClubsBySearch,
} from "../controllers/clubs.js";

const router = express.Router();

router.get("/", getClubList);
router.get("/:id", getClub);
router.get("/search", getClubsBySearch);
router.post("/", addClub);
router.patch("/:id", updateClub);
router.delete("/:id", deleteClub);

export default router;
