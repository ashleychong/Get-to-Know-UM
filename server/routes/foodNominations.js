import express from "express";

import { getFoodNominations, getFoodNomination, createFoodNomimation, deleteFoodNomination, approveFoodNomination, declineFoodNomination } from "../controllers/foodNominations.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getFoodNominations);
router.get("/:id", getFoodNomination);
router.post("/", createFoodNomimation);
router.delete("/:id", deleteFoodNomination);
router.patch("/:id/approve", auth, approveFoodNomination);
router.patch("/:id/decline", auth, declineFoodNomination);

export default router;