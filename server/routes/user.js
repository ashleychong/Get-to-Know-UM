import express from "express";
const router = express.Router();

import { signIn, signUp, updateProfile, updatePassword } from "../controllers/user.js";

router.post("/signin", signIn);
router.post("/signup", signUp);
router.patch("/updateProfile/:userId", updateProfile);
router.patch("/updatePassword/:userId", updatePassword);

export default router;
