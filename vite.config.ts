import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createAlias = (dirName: string) =>
  path.resolve(__dirname, "src", dirName);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": createAlias(""), // src/. 项目根目录
      "@components": createAlias("components"), // src/components/. 组件专用通道
      "~img": createAlias("assets/img"), // src/assets/img/. 图片专用通道
      "#types": createAlias("types"), // src/types/. 类型定义专用通道
    },
  },
});
