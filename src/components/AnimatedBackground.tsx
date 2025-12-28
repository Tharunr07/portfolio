import { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  variant: 'hero' | 'neural' | 'grid' | 'flow' | 'nodes' | 'progress';
  className?: string;
}

const AnimatedBackground = ({ variant, className = '' }: AnimatedBackgroundProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.1;

  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Gradient orbs */}
        <div 
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(192 95% 55% / 0.3) 0%, transparent 70%)',
            transform: `translateY(${parallaxOffset * 0.5}px)`,
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(270 60% 60% / 0.3) 0%, transparent 70%)',
            transform: `translateY(${parallaxOffset * 0.3}px)`,
            animation: 'float 25s ease-in-out infinite reverse',
          }}
        />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(192 95% 55%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(192 95% 55%) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translateY(${parallaxOffset}px)`,
          }}
        />
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatParticle ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'neural') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Neural network lines effect */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]">
          <defs>
            <pattern id="neural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="hsl(192 95% 55%)" />
              <line x1="50" y1="50" x2="100" y2="0" stroke="hsl(192 95% 55%)" strokeWidth="0.5" opacity="0.5" />
              <line x1="50" y1="50" x2="100" y2="100" stroke="hsl(192 95% 55%)" strokeWidth="0.5" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-pattern)" />
        </svg>
        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, hsl(192 95% 55% / 0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, hsl(270 60% 60% / 0.08) 0%, transparent 50%)
            `,
            animation: 'gradientShift 15s ease-in-out infinite alternate',
          }}
        />
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Data matrix grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(270 60% 60%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(270 60% 60%) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridPulse 8s ease-in-out infinite',
          }}
        />
        {/* Glowing intersections */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${(i % 5) * 25 + 12.5}%`,
                top: `${Math.floor(i / 5) * 33 + 16}%`,
                background: 'radial-gradient(circle, hsl(192 95% 55% / 0.4) 0%, transparent 70%)',
                animation: `nodePulse ${2 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'flow') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Flowing data streams */}
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px opacity-15"
              style={{
                left: 0,
                right: 0,
                top: `${10 + i * 9}%`,
                background: `linear-gradient(90deg, transparent, hsl(192 95% 55%), hsl(270 60% 60%), transparent)`,
                animation: `dataFlow ${8 + i * 0.8}s linear infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
        {/* Floating orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-08"
          style={{
            background: 'radial-gradient(circle, hsl(192 95% 55%) 0%, transparent 70%)',
            animation: 'float 25s ease-in-out infinite',
          }}
        />
      </div>
    );
  }

  if (variant === 'nodes') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Connection nodes */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${15 + Math.floor(i / 4) * 30}%`,
              }}
            >
              <div
                className="w-3 h-3 rounded-full bg-primary/30 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
              <div
                className="absolute inset-0 w-8 h-8 -m-2.5 rounded-full"
                style={{
                  background: 'radial-gradient(circle, hsl(192 95% 55% / 0.2) 0%, transparent 70%)',
                  animation: `nodePulse ${3 + Math.random()}s ease-in-out infinite`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'progress') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Progress/loading bars */}
        <div className="absolute inset-0 opacity-[0.06]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-1 rounded-full overflow-hidden"
              style={{
                left: `${5 + i * 5}%`,
                right: `${5 + (4 - i) * 5}%`,
                top: `${20 + i * 15}%`,
                background: 'hsl(var(--muted))',
              }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: '30%',
                  background: 'linear-gradient(90deg, hsl(192 95% 55%), hsl(270 60% 60%))',
                  animation: `progressMove ${4 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default AnimatedBackground;
