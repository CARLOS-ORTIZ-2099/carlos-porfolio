import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppContainer } from "./components/app-container/AppContainer";
import { HomePage } from "./page/home/HomePage";
import { EducationPage } from "./page/educations-page/EducationPage";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppContainer />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/education-page" element={<EducationPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
