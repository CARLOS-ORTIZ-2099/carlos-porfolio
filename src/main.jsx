import ReactDOM from "react-dom/client";
import App from "./App.jsx";
/* import './index.css' */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudiesPage } from "./page/StudiesPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/studies-page" element={<StudiesPage />} />
    </Routes>
  </BrowserRouter>
);
