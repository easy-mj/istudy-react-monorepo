import app from "./app.js";
import "./db.js"; // 确保数据库文件被初始化

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
