import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes";

import "@picocss/pico";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
