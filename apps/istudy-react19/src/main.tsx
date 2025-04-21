import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "@assets/styles/reset.scss";
import "@assets/styles/iconfont.scss";
import "@assets/styles/common.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  </StrictMode>
);
