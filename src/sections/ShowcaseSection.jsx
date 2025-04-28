import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Delicious Restaurant",
      description: "A full-stack reservation system featuring real-time table management, admin dashboard, and secure JWT authentication. Streamlines the dining experience for both customers and staff.",
      image: "/images/project1.png",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
      github: "https://github.com/Whytanishq/Mern-Project.git",
      bgColor: "bg-[#FFEFDB]"
    },
    {
      id: 2,
      title: "Wealth Finance",
      description: "AI-powered financial dashboard with predictive analytics, expense tracking, and interactive data visualizations. Helps users optimize their spending and savings habits.",
      image: "/images/project2.png",
      tech: ["React", "Chart.js", "Tailwind", "Supabase", "Node.js"],
      github: "https://github.com/Whytanishq/Welth.git",
      bgColor: "bg-[#E8F4FD]"
    },
    {
      id: 3,
      title: "FurniCraft",
      description: "Modern e-commerce platform for premium furniture with advanced filtering, 3D product previews, and seamless Stripe checkout flow.",
      image: "/images/project3.png",
      tech: ["React", "Redux", "Three.js", "Stripe", "Node.js"],
      github: "https://github.com/Whytanishq/My-new-App.git",
      bgColor: "bg-[#F5F5F5]"
    },
    {
      id: 4,
      title: "Trimrr",
      description: "High-performance URL shortener with custom slugs, detailed analytics, and Redis caching for lightning-fast redirects.",
      image: "/images/project4.png",
      tech: ["React", "Node.js", "MongoDB", "Redis", "JWT"],
      github: "https://github.com/Whytanishq/URL-SHORTENER.git",
      bgColor: "bg-[#F0EBFF]"
    }
  ];

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    projectRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase section-padding">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#d9ecff]">
        Featured <span className="text-primary">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            ref={el => projectRefs.current[index] = el}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = React.forwardRef(({ project }, ref) => {
  const cardRef = useRef();
  const contentRef = useRef();

  const handleMouseMove = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const centerX = cardRef.current.offsetWidth / 2;
    const centerY = cardRef.current.offsetHeight / 2;
    const rotateY = (x - centerX) / 20;
    const rotateX = (centerY - y) / 20;
    
    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
    
    contentRef.current.style.transform = `
      translateZ(50px)
    `;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
    contentRef.current.style.transform = `
      translateZ(0px)
    `;
  };

  return (
    <div 
      ref={ref}
      className="project-card-container h-full"
      onClick={() => window.open(project.github, '_blank')}
    >
      <div
        ref={cardRef}
        className="project-card h-full rounded-2xl overflow-hidden border border-[#1c1c21] transition-all duration-500 ease-out cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`${project.bgColor} h-64 relative overflow-hidden`}>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-contain p-4 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        <div 
          ref={contentRef}
          className="project-content p-6 bg-[#0e0e10] transition-transform duration-500"
        >
          <h3 className="text-2xl font-bold mb-3 text-[#d9ecff] group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-[#d9ecff] mb-4 min-h-[72px]">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-[#1c1c21] text-[#d9ecff] rounded-full text-sm font-medium hover:bg-[#282732] hover:text-white transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default AppShowcase;