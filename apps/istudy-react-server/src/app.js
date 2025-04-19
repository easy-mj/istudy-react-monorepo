import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.js";

const app = express();

// 中间件
app.use(bodyParser.json());

// 认证路由
app.use("/api/auth", authRoutes);

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "系统错误，请联系管理员！" });
});

export default app;
