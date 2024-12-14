import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./common/ThemeContext.jsx";

const Routers = React.lazy(() => import("./routers/Routers.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routers />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
