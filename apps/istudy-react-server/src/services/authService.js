import {
  generateToken,
  comparePassword,
  hashPassword,
} from "../utils/authUtils.js";
import userService from "./userService.js";

class AuthService {
  // 用户注册
  async register(username, password) {
    const hashedPassword = await hashPassword(password); // 加密密码
    return await userService.register(username, hashedPassword); // 调用 userService 的 register 方法
  }

  // 用户登录
  async login(username, password) {
    const user = await userService.findByUsername(username);

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = generateToken(user);
    return { user, token };
  }
}

export default new AuthService();
