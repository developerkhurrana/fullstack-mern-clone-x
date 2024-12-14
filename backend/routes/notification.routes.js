import express from "express";
import { protectedRoute } from "../middleware/protectedRoute.js";
import {
  deleteNotificationById,
  deleteNotifications,
  fetchNotifications,
} from "../controllers/notification.controller.js";
const router = express.Router();

router.get("/", protectedRoute, fetchNotifications);
router.delete("/", protectedRoute, deleteNotifications);
router.delete("/:id", protectedRoute, deleteNotificationById);

export default router;
