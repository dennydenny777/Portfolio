import ParticleBackground from './components/ParticleBackground';
import ScanlineEffect from './components/ScanlineEffect';
import MatrixBackground from './components/MatrixBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import { useState } from 'react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <ParticleBackground />
      <MatrixBackground />
      <ScanlineEffect />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-green-500/30 hover:border-green-500/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-green-400 font-mono font-bold text-lg hover:text-white transition-colors cursor-pointer">
              &gt; denny_sec.dev
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-green-400 font-mono transition-colors duration-300 hover:drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="md:hidden">
              <button className="text-green-400 hover:text-white transition-colors" onClick={toggleMobileMenu}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-black/90 backdrop-blur-md`}>
          <div className="px-4 py-2 flex flex-col space-y-4">
            {['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-green-400 font-mono transition-colors duration-300 hover:drop-shadow-[0_0_10px_rgba(0,255,65,0.8)] block py-2 border-b border-green-500/30"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="certifications">
          <CertificationsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-green-500/30 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 font-mono text-sm">
            © 2025 Denny Jobin Daniel | Cybersecurity Enthusiast | 
            <span className="text-green-400 ml-2 animate-pulse">Securing the Digital Future</span>
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-xs font-mono text-gray-500">
            <span>🔐 SSL Secured</span>
            <span>🛡️ Privacy Protected</span>
            <span>⚡ Optimized</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;