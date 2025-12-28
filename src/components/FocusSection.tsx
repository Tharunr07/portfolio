import { Sprout, Target, TrendingUp } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FocusSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
  const [cardRef, cardVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <SectionWrapper backgroundVariant="progress" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-block text-primary font-mono text-sm tracking-wider px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-4">
               TRAINING IN PROGRESS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              AI for <span className="text-gradient">Agriculture</span>
            </h2>
          </div>

          {/* Focus Card */}
          <div 
            ref={cardRef}
            className={`group relative border-gradient p-8 md:p-12 bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-1000 ${cardVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
          >
            {/* Animated background decorations */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/10 to-accent/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-green-400/40 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                    animation: `floatParticle ${8 + i * 2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sprout className="w-10 h-10 text-green-400" />
                  <div className="absolute inset-0 bg-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-2xl md:text-3xl group-hover:text-green-400 transition-colors">Building for Farmers</h3>
                  <p className="text-muted-foreground">Functional AI that makes a real difference</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                My current focus is on developing AI solutions specifically designed for agricultural workflows. 
                I'm working on systems that help farmers with <span className="text-green-400 font-medium">crop disease detection</span>, 
                <span className="text-green-400 font-medium"> yield prediction</span>, and <span className="text-green-400 font-medium">smart advisory systems</span>—all 
                designed to be accessible and practical for real-world use.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Target,
                    title: 'The Goal',
                    description: 'Democratize access to AI-powered agricultural insights for small and medium-scale farmers',
                  },
                  {
                    icon: TrendingUp,
                    title: 'The Impact',
                    description: 'Increase crop yields, reduce losses, and enable data-driven farming decisions',
                  },
                ].map((item, index) => (
                  <div 
                    key={item.title}
                    className={`group/item flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border/30 hover:bg-secondary/50 hover:border-green-500/30 transition-all duration-300 ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-mono font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FocusSection;
