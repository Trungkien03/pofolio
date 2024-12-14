import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./common/ThemeContext.jsx";
import Loading from "./pages/Loading/Loading.jsx";

const Routers = React.lazy(() => import("./routers/Routers.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <Routers />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
