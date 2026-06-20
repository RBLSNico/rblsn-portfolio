'use client'
import Header from "./components/header";
import HomeSection from "./components/home";
import AboutSection from "./components/about";
import ProjectsSection from "./components/projects";
import ContactForm from "./components/contactForm"

export default function Home() {
  return (
    <main id="home" className="container flex flex-col gap-12 py-6 w-full min-w-0 overflow-x">
      <Header />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactForm />
    </main>
  );
}
