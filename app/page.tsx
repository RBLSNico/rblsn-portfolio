import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Header from "./components/header";
import HomeSection from "./components/home"
import AboutSection from "./components/about"
import ProjectsSection from "./components/projects";


export default function Home() {
  return (
    <div className="container flex flex-col gap-10">
      <Header />
      {/* Home Section */}
      <HomeSection />
      {/* About Section */}
      <AboutSection />
      {/* Projects Section */}
      <ProjectsSection />
    </div>
  );
}
