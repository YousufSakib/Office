import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { ImageProvider } from "./components/ImageContext.jsx";
import { DataProvider } from "./components/DataContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <ImageProvider>
        <App />
      </ImageProvider>
    </DataProvider>
  </React.StrictMode>
);
