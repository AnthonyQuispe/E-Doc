import React from "react";
import App from "./app";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/E-Doc">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
