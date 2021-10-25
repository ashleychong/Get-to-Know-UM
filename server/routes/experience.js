import express from "express";
import { getExpList, addExp } from "../controllers/experience.js";

const router = express.Router();

router.get("/exp", getExpList);
router.post("/exp", addExp);

export default router;
