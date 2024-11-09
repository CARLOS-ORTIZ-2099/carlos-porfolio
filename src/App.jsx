import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppContainer } from "./components/app-container/AppContainer";
import { HomePage } from "./page/home/HomePage";
import { EducationPage } from "./page/educations-page/EducationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppContainer classStyle={"app-container"} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/education-page" element={<EducationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
