import { Mail, Github, Linkedin, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionWrapper from './SectionWrapper';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const socialLinks = [
  { icon: Mail, href: 'mailto:tharun0714@gmail.com', label: 'Email' },
  { icon: Github, href: 'https://github.com/Tharunr07', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/tharunr07/', label: 'LinkedIn' },
];

const ContactSection = () => {
  const [contentRef, contentVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <SectionWrapper id="contact" backgroundVariant="nodes" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div 
          ref={contentRef}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section Header */}
          <div className={`transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-primary font-mono text-sm tracking-wider px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-4">
               COMMUNICATION INTERFACE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Open to internship opportunities and open-source collaborations. 
              Let's build something impactful together.
            </p>
          </div>


          {/* Social Links */}
          <div className={`flex justify-center gap-6 mb-12 transition-all duration-1000 delay-300 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-2 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border-gradient hover:scale-110 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                
                <social.icon className="relative w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                <span className="relative text-sm text-muted-foreground group-hover:text-foreground transition-colors">{social.label}</span>
              </a>
            ))}
          </div>

          {/* Availability Badge */}
          <div className={`transition-all duration-1000 delay-400 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm group hover:bg-green-500/20 hover:scale-105 transition-all duration-300">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-sm text-green-400 font-mono">Available for internships</span>
              <Sparkles className="w-4 h-4 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
