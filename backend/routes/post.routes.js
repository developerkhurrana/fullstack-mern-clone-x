import express from "express";
import { protectedRoute } from "../middleware/protectedRoute.js";
import {
  addCommentToPost,
  fetchAllPosts,
  fetchLikedPostsByUser,
  fetchPostsByUserFollowing,
  fetchUserPosts,
  handleCreatePost,
  handleDeletePost,
  togglePostLike,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/all", protectedRoute, fetchAllPosts);
router.get("/likes/:id", protectedRoute, fetchLikedPostsByUser);
router.get("/user/:username", protectedRoute, fetchUserPosts);
router.get("/following", protectedRoute, fetchPostsByUserFollowing);
router.post("/create", protectedRoute, handleCreatePost);
router.post("/like/:id", protectedRoute, togglePostLike);
router.post("/comment/:id", protectedRoute, addCommentToPost);
router.delete("/:id", protectedRoute, handleDeletePost);

export default router;
