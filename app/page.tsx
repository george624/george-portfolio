import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

export default function Page() {
  return (
    <div>
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
        <WorkExperience />
      </div>
      <CTA />
    </div>
  );
}
