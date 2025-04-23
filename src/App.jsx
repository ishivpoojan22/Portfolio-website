import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#') && link.href.includes(window.location.pathname)) {
        e.preventDefault();
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for header
            behavior: 'smooth'
          });
          
          // Update URL without reload
          window.history.pushState(null, '', targetId);
        }
      }
    };
    
    document.addEventListener('click', handleSmoothScroll);
    
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  useEffect(() => {
    // Update document title
    document.title = 'Shiv Poojan | Full Stack Developer';
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;