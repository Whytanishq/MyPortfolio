import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Technical = () => {
  const technicalSkills = [
    {
      title: "Languages",
      items: ["Python", "C/C++", "Java", "JavaScript"],
      review: "Proficient in multiple programming languages"
    },
    {
      title: "Web Development",
      items: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "HTML/CSS"],
      review: "Full-stack web development expertise"
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "VS Code", "Arduino", "LTSpice", "MySQL", "Linux"],
      review: "Experienced with development tools"
    },
    {
      title: "Core Concepts",
      items: ["Data Structures", "OOP", "REST APIs", "Full-stack Dev", "Sensors"],
      review: "Strong CS fundamentals"
    },
  ];

  useGSAP(() => {
    // Enhanced 3D scroll animation
    gsap.utils.toArray(".skill-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
          toggleActions: "play none none none"
        },
        z: -150,
        rotationY: 15,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.2)",
        stagger: 0.15 * i
      });
    });

    // Smoother hover effects
    gsap.utils.toArray(".skill-card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          rotationY: 5,
          rotationX: 3,
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.3,
          ease: "elastic.out(1, 0.5)"
        });
      });
    });
  });

  return (
    <section id="technical" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Technical Skills"
          sub="🛠️ My Core Competencies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 perspective-1000">
          {technicalSkills.map((skill, index) => (
            <div 
              key={index}
              className="skill-card h-full transform-style-preserve-3d transition-transform duration-300"
            >
              <GlowCard card={{ review: skill.review }} index={index}>
                <div className="p-4 h-full flex flex-col">
                  <h3 className="text-md font-semibold mb-2">{skill.title}</h3>
                  <ul className="space-y-1 text-sm flex-grow">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <span className="text-primary mr-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technical;