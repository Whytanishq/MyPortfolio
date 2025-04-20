// LogoSection.jsx
import React from 'react'

const techStack = [
  // Original technologies
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'Django',
  'Next.js',
  'GraphQL',
  'Redux',
  'Tailwind',
  'Docker',
  'Git',
  
  // Additional frontend frameworks
  'Vue',
  'Angular',
  'Svelte',
  'Nuxt',
  'Gatsby',
  
  // Additional backend technologies
  'Express',
  'NestJS',
  'FastAPI',
  'Flask',
  'Laravel',
  
  // Databases
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Firebase',
  
  // DevOps & Cloud
  'Kubernetes',
  'AWS',
  'Azure',
  'GCP',
  
  // Tools
  'GitHub',
  'VS Code',
  'Figma',
  'Jira'
]

const LogoSection = () => {
  return (
    <div className="py-3 bg-transparent border-t border-b border-gray-100 dark:border-gray-800">
      <div className="relative overflow-hidden">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, index) => (
            <div 
              key={`${tech}-${index}`} 
              className="mx-4 inline-flex items-center"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 opacity-90 hover:opacity-100 transition-opacity duration-200">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoSection