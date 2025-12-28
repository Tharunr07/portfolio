import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  connections: number[];
}

interface ParticleBackgroundProps {
  variant?: 'neural' | 'grid' | 'flow' | 'nodes';
  density?: number;
  className?: string;
}

const ParticleBackground = ({ 
  variant = 'neural', 
  density = 50,
  className = '' 
}: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / (20000 / density * 10));
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          connections: [],
        });
      }
    };

    const drawParticle = (particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2
      );
      
      if (variant === 'neural' || variant === 'nodes') {
        gradient.addColorStop(0, `rgba(56, 189, 248, ${particle.opacity})`);
        gradient.addColorStop(1, `rgba(56, 189, 248, 0)`);
      } else if (variant === 'grid') {
        gradient.addColorStop(0, `rgba(168, 85, 247, ${particle.opacity})`);
        gradient.addColorStop(1, `rgba(168, 85, 247, 0)`);
      } else {
        gradient.addColorStop(0, `rgba(34, 211, 238, ${particle.opacity})`);
        gradient.addColorStop(1, `rgba(34, 211, 238, 0)`);
      }
      
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const drawConnections = () => {
      const maxDistance = 150;
      const particles = particlesRef.current;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            if (variant === 'neural' || variant === 'nodes') {
              ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            } else if (variant === 'grid') {
              ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
            } else {
              ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
            }
            
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      
      particles.forEach((particle) => {
        // Mouse interaction - subtle attraction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200 && distance > 0) {
          const force = (200 - distance) / 200 * 0.01;
          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }
        
        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;
        
        // Speed limit
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > 0.5) {
          particle.vx = (particle.vx / speed) * 0.5;
          particle.vy = (particle.vy / speed) * 0.5;
        }
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateParticles();
      drawConnections();
      
      particlesRef.current.forEach(drawParticle);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, density]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleBackground;
