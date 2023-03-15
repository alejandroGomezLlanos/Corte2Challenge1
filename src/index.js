import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Son from "./Son";
import Father from "./Father";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Father />
  </StrictMode>
);
