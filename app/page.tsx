import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Header from "./components/header";
import HomeSection from "./components/home"
import AboutSection from "./components/about"
import ProjectsSection from "./components/projects";
import ResumeSection from "./components/resume"


export default function Home() {
  return (
    <div id="home" className="container flex flex-col gap-10">
      <Header />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
    </div>
  );
}
