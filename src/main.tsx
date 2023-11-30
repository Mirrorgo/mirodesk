import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import BaseStyle from "./styles/BaseStyle.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BaseStyle />
    <App />
  </React.StrictMode>
);
