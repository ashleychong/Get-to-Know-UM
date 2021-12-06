import express from "express";

import { getAllCafes, getCafe, createCafe, updateCafe, deleteCafe } from './../controllers/cafe.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllCafes);
router.get("/:id", getCafe);
router.post("/", auth, createCafe);
router.patch("/:id", auth, updateCafe);
router.delete("/:id", auth, deleteCafe);

export default router;