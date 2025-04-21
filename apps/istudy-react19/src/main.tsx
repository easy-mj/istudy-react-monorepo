import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "@assets/styles/reset.scss";
import "@assets/styles/iconfont.scss";
import "@assets/styles/common.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import store from "./store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </Suspense>
  </StrictMode>
);
