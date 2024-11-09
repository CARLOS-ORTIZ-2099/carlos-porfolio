import { About } from "../../components/about/About";
import { Skills } from "../../components/skills/Skills";
import { Projects } from "../../components/projects/Projects";
import { Education } from "../../components/education/Education";

export const HomePage = () => {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Education />
    </>
  );
};
