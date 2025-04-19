import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key"; // 生产环境中请使用环境变量
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

// 生成 JWT
export const generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

// 验证密码
export const comparePassword = async (candidatePassword, hashedPassword) => {
  return await bcrypt.compare(candidatePassword, hashedPassword);
};

// 哈希密码
export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};
