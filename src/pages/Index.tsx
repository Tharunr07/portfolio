import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import FocusSection from '@/components/FocusSection';
import ContactSection from '@/components/ContactSection';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Global particle background */}
      <ParticleBackground variant="neural" density={40} />
      
      {/* Content layers */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <FocusSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;
