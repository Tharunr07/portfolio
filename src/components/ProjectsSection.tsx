import { ExternalLink, Github, Leaf, Bot, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionWrapper from './SectionWrapper';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'DIGITAL FARM PORTAL FOR MONITORING  LIVESTOCK MRL AND ANTIMICROBIAL USAGE',
    description: 'A centralized digital farm portal that tracks antimicrobial usage in livestock, automates withdrawal period and MRL compliance checks, and integrates veterinary digital prescriptions. The platform provides real-time dashboards for farmers, veterinarians, and government authorities, enables QR-based traceability for safe animal products, and supports mobile, voice-based data entry to promote responsible antimicrobial use, food safety, and AMR mitigation.',
    problem: 'he lack of a centralized digital system to monitor antimicrobial usage in livestock leads to improper drug use, MRL violations, and increased antimicrobial resistance. A secure, real-time platform is needed to track antimicrobial use, ensure compliance with withdrawal periods and MRL standards, and support responsible antimicrobial stewardship and food safety in India.',
    tech: ['Dart', 'Python', 'NoSQL'],
    icon: Leaf,
    featured: true,
    github: 'https://github.com/Tharunr07/ABC',
  
  },
  {
    title: 'DIGITAL BIOSECURITY PORTAL FOR PIG AND POULTRY FARMS',
    description: 'Create a mobile-friendly digital platform that helps farmers monitor biosecurity, detect diseases early, receive alerts, and access veterinary support, reducing outbreaks and losses in pig and poultry farms.',
    problem: 'This increases disease risks and economic losses in pig and poultry production.A simple, mobile digital solution is urgently needed.',
    tech: ['Python', 'Dart', 'SQL', 'FastAPI'],
    icon: Bot,
    github: 'https://github.com/Tharunr07/DFM',
  },
  {
    title: 'Data Analytics AI-Based Crop Yield Prediction System',
    description: 'Developed a machine learning model that analyzes historical agricultural datasets to predict expected crop yield. The model is designed to be scalable and integrable into real-world applications such as dashboards or mobile apps.',
    problem: 'Farmers often lack accurate, data-driven methods to estimate crop yield in advance, making planning and resource allocation inefficient.',
    tech: ['Python', 'SQL', 'Java', 'Javascript'],
    icon: BarChart3,
    github: 'https://github.com',
  },
];

const ProjectsSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
  const [projectsRef, projectsVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <SectionWrapper id="projects" backgroundVariant="flow" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block text-primary font-mono text-sm tracking-wider px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-4">
             AI LAB
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Real-world projects demonstrating end-to-end AI and full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative border-gradient p-8 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-500 ${
                project.featured ? 'lg:col-span-2' : ''
              } ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Animated border glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-xl" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-7 h-7 text-primary" />
                    <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-mono font-bold text-xl group-hover:text-primary transition-colors">{project.title}</h3>
                      {project.featured && (
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-xs font-mono border border-primary/30">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-4 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-mono">Problem:</span> {project.problem}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary/80 text-xs font-mono border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild className="group/btn">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
