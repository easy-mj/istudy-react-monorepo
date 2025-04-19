import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

// 注册路由
router.post("/register", authController.register);

// 登录路由
router.post("/login", authController.login);

export default router;
