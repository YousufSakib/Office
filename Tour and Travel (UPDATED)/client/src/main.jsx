import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { ImageProvider } from "./components/ImageContext.jsx";
import { CompanyInfoProvider } from "./components/CompanyInfoContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CompanyInfoProvider>
      <ImageProvider>
        <App />
      </ImageProvider>
    </CompanyInfoProvider>
  </React.StrictMode>
);
