import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@assets/styles/reset.scss";
import "@assets/styles/iconfont.scss";
import "@assets/styles/common.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
