import { Brain, Code, Lightbulb, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionWrapper from './SectionWrapper';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const values = [
  {
    icon: Brain,
    title: 'Core Focus',
    signal: 'AI at the center',
    description: 'Machine learning & intelligent systems at the core',
  },
  {
    icon: Code,
    title: 'End-to-End',
    signal: 'Idea → Deployment',
    description: 'Building complete solutions from backend to frontend',
  },
  {
    icon: Lightbulb,
    title: 'Impact-Driven',
    signal: 'Real-world problems',
    description: 'Focused on real-world applications & impact',
  },
  {
    icon: Rocket,
    title: 'Execution-Oriented',
    signal: 'Shipping matters',
    description: 'Learning by doing & shipping functional products',
  },
];

const AboutSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
  const [contentRef, contentVisible] = useScrollAnimation<HTMLDivElement>();
  const [valuesRef, valuesVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <SectionWrapper id="about" backgroundVariant="neural" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-block text-primary font-mono text-sm tracking-wider px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-4">
               NEURAL PROFILE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              Building <span className="text-gradient">Functional AI</span> for Real Impact
            </h2>
          </div>

          {/* About Content */}
          <div
            ref={contentRef}
            className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="group border-gradient p-6 bg-card/80 backdrop-blur-sm hover:bg-card hover:translate-y-[-4px] hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <p className="relative text-muted-foreground leading-loose max-w-md text-justify">
                I'm a 2nd-year B.Tech student specializing in <span className="text-primary font-medium">Artificial Intelligence & Data Science</span>.
                focused on building functional AI systems that solve real-world problems. I enjoy turning data and models into complete, usable solutions rather than isolated experiments.
              </p>
            </div>
            <div className="group border-gradient p-6 bg-card/80 backdrop-blur-sm hover:bg-card hover:translate-y-[-4px] hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <p className="relative text-muted-foreground leading-loose max-w-md text-justify">
                With a <span className="text-primary font-medium">builder mindset</span>,
                I focus on end-to-end system development—from data pipelines to user-facing applications. I'm passionate about learning by doing, exploring new technologies, and currently working on AI-driven solutions for agriculture with real-world impact.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div 
            ref={valuesRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((item, index) => (
              <div
                key={item.title}
                className={`group border-gradient p-6 bg-card/80 backdrop-blur-sm text-center hover:scale-105 hover:translate-y-[-4px] hover:bg-card hover:shadow-xl transition-all duration-500 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-[3deg] transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-mono font-semibold mb-1 text-lg">{item.title}</h3>
                <p className="text-xs text-primary/80 font-medium mb-2">{item.signal}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
