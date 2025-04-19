import db from "../db.js";
import { hashPassword } from "../utils/authUtils.js";

class UserService {
  // 注册用户
  async register(username, password) {
    if (!username || !password) {
      throw new Error("Username and password are required");
    }

    const existingUser = db.data.users.find(
      (user) => user.username === username
    );
    if (existingUser) {
      throw new Error("Username already exists");
    }
    const newUser = { id: Date.now(), username, password };

    db.data.users.push(newUser);
    await db.write(); // 将数据写入 JSON 文件
    return newUser;
  }

  // 查找用户
  async findByUsername(username) {
    return db.data.users.find((user) => user.username === username);
  }
}

export default new UserService();
