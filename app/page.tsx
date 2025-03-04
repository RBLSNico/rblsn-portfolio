'use client'
import Header from "./components/header";
import HomeSection from "./components/home";
import AboutSection from "./components/about";
import ProjectsSection from "./components/projects";
import ResumeSection from "./components/resume";
import ContactForm from "./components/contactForm"


export default function Home() {
  return (
    <main id="home" className="container flex flex-col gap-10">
      <Header />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      {/* <ResumeSection /> */}
      <ContactForm />
    </main>
  );
}
