import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
      {/* {React.createElement("h1", null, "Hello, React!")} */}
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
