import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";
import { Low } from "lowdb";
import { JSONFilePreset } from "lowdb/node";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 初始化数据库
const defaultData = { users: [] };
const db = await JSONFilePreset(
  path.join(__dirname, "./data/db.json"),
  defaultData
);

export default db;
