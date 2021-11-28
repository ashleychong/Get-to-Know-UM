import express from "express";
import {
  getExpList,
  addExp,
  likeExp,
  getLeisureList,
  getLeisure,
  addLeisure,
  updateLeisure,
  deleteLeisure,
  getLeisuresBySearch,
  getLeisureTable,
} from "../controllers/experience.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/exp", getExpList);
router.post("/exp", auth, addExp);
router.patch("/:id/likeExp", auth, likeExp);

router.get("/", getLeisureList);
router.get("/:user", getLeisureTable);
router.get("/:id", getLeisure);
router.get("/search", getLeisuresBySearch);
router.post("/", addLeisure);
router.patch("/:id", updateLeisure);
router.delete("/:id", deleteLeisure);

export default router;
