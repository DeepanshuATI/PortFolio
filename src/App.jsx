import CursorGlow from './components/CursorGlow';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function SectionDivider() {
  return <div className="section-divider" />;
}

export default function App() {
  return (
    <>
      <CursorGlow />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <TechStack />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
