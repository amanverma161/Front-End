import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/App.css";
import Header from "./component/header.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* ye hamesha show hoga header isiliye isko yaha rkha hai */}
      <Header />
      <App />
    </BrowserRouter>
  </StrictMode>
);
