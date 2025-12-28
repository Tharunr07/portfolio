import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import AnimatedBackground from './AnimatedBackground';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  backgroundVariant?: 'neural' | 'grid' | 'flow' | 'nodes' | 'progress';
  animationDelay?: number;
}

const SectionWrapper = ({
  children,
  id,
  className = '',
  backgroundVariant,
  animationDelay = 0,
}: SectionWrapperProps) => {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Animated background layer */}
      {backgroundVariant && (
        <AnimatedBackground variant={backgroundVariant} />
      )}
      
      {/* Content layer with animation */}
      <div
        className={`relative z-10 transition-all duration-1000 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${animationDelay}ms` }}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
