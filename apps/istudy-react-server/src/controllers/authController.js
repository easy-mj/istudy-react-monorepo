import authService from "../services/authService.js";

class AuthController {
  // 注册接口
  async register(req, res) {
    try {
      const { username, password } = req.body;
      const newUser = await authService.register(username, password);
      res.status(201).json({ message: "用户注册成功", user: newUser });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // 登录接口
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const { user, token } = await authService.login(username, password);
      res.json({ message: "登录成功", user, token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
}

export default new AuthController();
