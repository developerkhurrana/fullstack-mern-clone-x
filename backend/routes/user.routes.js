import express from "express";
import { protectedRoute } from "../middleware/protectedRoute.js";
import {
  followUnfollowUser,
  getSuggestedProfile,
  getUserProfile,
  updateUserProfile,
} from "../controllers/user.controller.js";
const router = express.Router();

router.get("/profile/:username", protectedRoute, getUserProfile);
router.get("/suggested", protectedRoute, getSuggestedProfile);
router.post("/follow/:id", protectedRoute, followUnfollowUser);
router.post("/update", protectedRoute, updateUserProfile);

export default router;
