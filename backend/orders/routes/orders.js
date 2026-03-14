import express from "express";
import { createOrder, getMyOrders } from "../controllers/ordersController.js"
import authMiddleware from "../../auth/"
"../../auth/middleware/authMiddleware.js";
const router = express.Router();

router.post("/create", authMiddleware, createOrder);

router.get("/my-orders", authMiddleware, getMyOrders);

export default router;