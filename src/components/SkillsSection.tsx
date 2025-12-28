import { Database, Globe, Smartphone, Cpu } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'AI & Data Science',
    icon: Database,
    gradient: 'from-cyan-500 to-blue-500',
    bgGlow: 'bg-cyan-500/20',
    skills: ['Python', 'Machine Learning', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Web & Backend',
    icon: Globe,
    gradient: 'from-green-500 to-emerald-500',
    bgGlow: 'bg-green-500/20',
    skills: ['Java', 'Spring Boot', 'JavaScript', 'React'],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    gradient: 'from-purple-500 to-pink-500',
    bgGlow: 'bg-purple-500/20',
    skills: ['Flutter', 'Dart', 'Mobile UI/UX'],
  },
  {
    title: 'Core Engineering',
    icon: Cpu,
    gradient: 'from-orange-500 to-red-500',
    bgGlow: 'bg-orange-500/20',
    skills: ['C', 'C++', 'Data Structures', 'Algorithms'],
  },
];

const SkillsSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
  const [gridRef, gridVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <SectionWrapper id="skills" backgroundVariant="grid" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block text-primary font-mono text-sm tracking-wider px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-4">
             SYSTEM CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Languages & <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A versatile toolkit spanning AI, web, mobile, and systems programming
          </p>
        </div>

        {/* Skills Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative border-gradient p-8 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-500 min-h-[200px] flex flex-col ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background glow on hover */}
              <div className={`absolute inset-0 ${category.bgGlow} blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-xl`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className={`absolute inset-0 ${category.bgGlow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                  <h3 className="font-mono font-semibold text-xl">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-secondary/80 text-sm font-medium border border-border/50 hover:bg-primary/20 hover:text-primary hover:border-primary/30 hover:scale-105 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
