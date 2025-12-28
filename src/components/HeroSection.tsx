import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import profileImg from '@/assets/profile.jpeg';
import heroBg from '@/assets/hero-bg.jpg';

const taglines = [
  "Building functional AI systems for real-world impact",
  "Transforming data into intelligent solutions",
  "Engineering the future of agriculture with AI",
];

const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const tagline = taglines[currentTagline];
    
    if (isTyping) {
      if (displayText.length < tagline.length) {
        const timeout = setTimeout(() => {
          setDisplayText(tagline.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentTagline]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Animated Background */}
      <AnimatedBackground variant="hero" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-[1]" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-6 animate-glow-pulse">
                B.Tech • AI & Data Science • 2nd Year
              </span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-4 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Hi, I'm <span className="text-gradient relative">
                Tharun R
                <span className="absolute -inset-1 bg-primary/20 blur-2xl rounded-full" />
              </span>
            </h1>
            
            <h2 className={`text-xl md:text-2xl text-muted-foreground font-mono mb-6 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Artificial Intelligence & Data Science Student
            </h2>
            
            <div className={`h-16 mb-8 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg md:text-xl text-primary font-mono">
                {displayText}
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
              </p>
            </div>

            <div className={`flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button variant="hero" size="lg" asChild className="group relative overflow-hidden">
                <a href="#projects">
                  <span className="relative z-10">View Projects</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>
              </Button>
              <Button variant="glow" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            <div className={`flex gap-4 mt-8 justify-center lg:justify-start transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { icon: Github, href: 'https://github.com/Tharunr07', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/tharunr07/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:tharun0714@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 hover:bg-primary/20 hover:border-primary/50 hover:scale-110 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon size={20} className="group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex-shrink-0 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative group">
              {/* Holographic glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-accent/50 to-primary/50 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" style={{ animation: 'holographicGlow 5s ease-in-out infinite' }} />
              
              {/* Rotating ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
              </div>
              <div className="absolute -inset-8 rounded-full border border-accent/10 animate-[spin_30s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full" />
              </div>
              
              {/* Main image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-gradient p-1 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float opacity-60 blur-[1px]" />
              <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-accent rounded-full animate-float opacity-60 blur-[1px]" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/60 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs font-mono tracking-wider opacity-60">SCROLL</span>
            <div className="relative">
              <ArrowDown size={24} className="animate-bounce" />
              <div className="absolute inset-0 bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
