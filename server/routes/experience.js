import express from "express";
import {
  getExpList,
  addExp,
  getLeisureList,
  getLeisure,
  addLeisure,
  updateLeisure,
  deleteLeisure,
  getLeisuresBySearch,
} from "../controllers/experience.js";

const router = express.Router();

router.get("/exp", getExpList);
router.post("/exp", addExp);

router.get("/", getLeisureList);
router.get("/:id", getLeisure);
router.get("/search", getLeisuresBySearch);
router.post("/", addLeisure);
router.patch("/:id", updateLeisure);
router.delete("/:id", deleteLeisure);

export default router;
