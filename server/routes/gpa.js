import express from "express";
import { getGpa } from "../controllers/gpa.js";

const router = express.Router();

router.get("/", getGpa);

export default router;
