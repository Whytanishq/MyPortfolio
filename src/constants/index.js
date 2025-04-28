const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 10, suffix: "+", label: "Tech Stacks Mastered" },
    { value: 1543, suffix: "", label: "CodeChef Rating" },
    { value: 8, suffix: "+", label: "Projects Built" },
    { value: 90, suffix: "%", label: "Problem-Solving Success" },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Clear technical communicator who documents thoroughly and collaborates effectively in teams and hackathons.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review: "\nTanishq demonstrates exceptional problem-solving skills and technical aptitude in his academic projects. His ECG monitoring system shows innovative thinking in hardware-software integration, combining medical technology with software development in a unique way.",
      imgPath: "/images/education-icon.svg",
      logoPath: "/images/vit-logo.svg",
      title: "AI & Robotics Student",
      date: "2023 - Present | VIT Chennai",
      responsibilities: [
        "Maintaining outstanding 8.7 CGPA in B.Tech Computer Science with specialization in AI and Robotics",
        "Developing comprehensive understanding of data structures, algorithms, and system design principles",
        "Building multiple production-ready applications including healthcare and e-commerce solutions",
        "Participating in advanced coursework in machine learning, neural networks, and robotic systems"
      ],
      achievements: [
        "Recipient of Academic Excellence Scholarship for consistent top performance",
        "Selected for prestigious research project in computer vision applications",
        "Course representative for Artificial Intelligence department"
      ]
    },
    {
      review: "\nTanishq's URL shortener project demonstrates full-stack development capabilities beyond typical academic requirements. His implementation of JWT authentication and analytics dashboard shows particular strength in system architecture and security considerations.",
      imgPath: "/images/project-icon.svg",
      logoPath: "/images/js-logo.svg",
      title: "Full-Stack Developer",
      date: "2023 - Present | Personal Projects",
      responsibilities: [
        "Designed and implemented complete URL shortener with user authentication and link analytics",
        "Developed restaurant reservation system with real-time table availability and admin dashboard",
        "Created interactive e-commerce UI with advanced product filtering and 3D previews",
        "Optimized application performance through code refactoring and database indexing",
        "Built Wealth Finance application an AI-powered financial dashboard with predictive analytics, expense tracking, and interactive data visualizations."
      ],
      technologies: [
        "React.js with TypeScript for frontend development",
        "Node.js with Express for backend services",
        "MongoDB with Mongoose for data persistence",
        "Tailwind CSS for responsive UI design",
        "Docker for containerization and deployment"
      ]
    },
    {
      review: "\\nTanishq actively contributes to the tech community through hackathons and technical clubs, demonstrating strong leadership and collaborative skills that enhance team performance.",
      imgPath: "/images/hackathon-icon.svg",
      logoPath: "/images/club-logo.svg",
      title: "Extra curricular activities",
      date: "2023 - Present | VIT Chennai",
      responsibilities: [
        "Competed in Blitz N Battle and DATASET'24 hackathons, developing innovative solutions under time constraints",
        "Member of Zero Bugs Club, conducted many coding workshops to encourage student interest in coding",
        "Lead coordinator for Techvilla 2023 and Style-A-Thon 2024, managing team of 15+ volunteers",
        "Mentor for first-year students in programming fundamentals"
      ],
      accomplishments: [
        "Won 'Best UI/UX Design' award at DATASET'24 hackathon",
        "Increased club membership by 40% through outreach initiatives",
        "Developed curriculum for beginner c/c++ workshops"
      ]
    }
  ];   
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  
  
  const socialImgs = [
    {
      name: "instagram",
      imgPath: "/images/insta.png",
      link: "https://www.instagram.com/whytanishqq/profilecard/?igsh=dzRxZHVoaGRqbnI3"
    },
    {
      name: "github",
      imgPath: "/images/GitHub.png",
      link: "https://github.com/Whytanishq"
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
      link: "https://www.linkedin.com/in/tanishq-saraf-04b0a8288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];
  
  export {
    words,
    abilities,
    counterItems,
    expCards,
    expLogos,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };