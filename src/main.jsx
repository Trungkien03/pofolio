import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./common/ThemeContext.jsx";
import { BrowserRouter } from "react-router-dom";

const Routers = React.lazy(() => import("./routers/Routers.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter basename="/">
          <Routers />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
