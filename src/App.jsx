import "./App.css";
import { About } from "./components/about/About";
import { Education } from "./components/education/Education";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />

        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
