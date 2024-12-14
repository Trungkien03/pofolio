import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./common/ThemeContext.jsx";
import Routers from "./routers/Routers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Routers />
    </ThemeProvider>
  </React.StrictMode>
);
