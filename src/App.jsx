import "./App.css";
import { About } from "./components/about/About";
import { Studies } from "./components/studies/Studies";
import { Footer } from "./components/Footer";
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

        <Studies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
