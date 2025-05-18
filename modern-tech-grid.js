/**
 * Modern Tech Grid Visualization
 * A clean, responsive grid layout of technologies with detailed modal views
 */

// Tech data organized by categories
const techData = {
  frontend: {
    name: "Frontend",
    icon: "code",
    techs: [
      {
        id: "html5",
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        tag: "Core",
        experience: "Advanced • 2+ years",
        description: "Semantic markup language for structuring web content with modern features for multimedia, graphics, and client-side storage.",
        relatedSkills: ["CSS3", "JavaScript", "Accessibility", "SVG"]
      },
      {
        id: "css3", 
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        tag: "Core",
        experience: "Advanced • 2+ years",
        description: "Styling language used to define the visual presentation of HTML documents with advanced features like animations, flexbox, and grid layouts.",
        relatedSkills: ["HTML5", "Tailwind CSS", "Responsive Design", "Animations"]
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        tag: "Core",
        experience: "Advanced • 2+ years",
        description: "Versatile programming language that enables dynamic, interactive content and browser-based applications with support for modern ES6+ features.",
        relatedSkills: ["HTML5", "CSS3", "DOM", "ES6+"]
      },
      {
        id: "react",
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        tag: "Framework",
        experience: "Intermediate • 1+ year",
        description: "JavaScript library for building component-based user interfaces with a virtual DOM for efficient rendering and state management.",
        relatedSkills: ["JavaScript", "JSX", "Components", "Hooks"]
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        tag: "Framework",
        experience: "Advanced • 1.5+ years",
        description: "Utility-first CSS framework for rapidly building custom designs without leaving your HTML, enabling highly efficient development workflows.",
        relatedSkills: ["CSS3", "Responsive Design", "UI Design"]
      },
      {
        id: "gsap",
        name: "GSAP",
        icon: "https://cdn.cdnlogo.com/logos/g/21/gsap-greensock.svg",
        tag: "Animation",
        experience: "Intermediate • 1+ year",
        description: "Professional-grade animation library for creating high-performance, complex animations with precise control and cross-browser compatibility.",
        relatedSkills: ["JavaScript", "CSS3", "SVG", "Animations"]
      }
    ]
  },
  backend: {
    name: "Backend",
    icon: "server",
    techs: [
      {
        id: "php",
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        tag: "Core",
        experience: "Advanced • 2+ years",
        description: "Server-side scripting language designed for web development with a focus on database connectivity and HTML generation.",
        relatedSkills: ["MySQL", "Laravel", "API Development", "OOP"]
      },
      {
        id: "laravel",
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
        tag: "Framework",
        experience: "Intermediate • 1+ year",
        description: "PHP framework with expressive, elegant syntax that provides tools needed for large, robust applications with MVC architecture.",
        relatedSkills: ["PHP", "Blade", "Eloquent ORM", "MVC"]
      },
      {
        id: "mysql",
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        tag: "Database",
        experience: "Intermediate • 1.5+ years",
        description: "Open-source relational database management system known for its reliability, performance, and ease of use in web applications.",
        relatedSkills: ["SQL", "Database Design", "PHP", "Queries"]
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        tag: "Database",
        experience: "Intermediate • 1+ year",
        description: "Advanced open-source relational database with strong standards compliance and extensive features for complex data workloads.",
        relatedSkills: ["SQL", "Database Design", "Transactions", "ACID"]
      },
      {
        id: "rest",
        name: "REST API",
        icon: "https://cdn.iconscout.com/icon/free/png-256/free-api-3521432-2944880.png",
        tag: "Architecture",
        experience: "Intermediate • 1.5+ years",
        description: "Architectural style for designing networked applications with stateless operations and standardized interfaces for web services.",
        relatedSkills: ["HTTP", "JSON", "API Design", "PHP"]
      }
    ]
  },
  tools: {
    name: "Developer Tools",
    icon: "tools",
    techs: [
      {
        id: "git",
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        tag: "Version Control",
        experience: "Advanced • 2+ years",
        description: "Distributed version control system for tracking changes in source code during software development and collaboration.",
        relatedSkills: ["GitHub", "Branching", "Commits", "Pull Requests"]
      },
      {
        id: "github",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        tag: "Platform",
        experience: "Advanced • 2+ years",
        description: "Hosting platform for Git repositories with features for collaboration, code review, issue tracking, and CI/CD workflows.",
        relatedSkills: ["Git", "Actions", "Issues", "Pull Requests"]
      },
      {
        id: "vscode",
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        tag: "Editor",
        experience: "Advanced • 2+ years",
        description: "Lightweight but powerful source code editor with extensive plugin support, debugging capabilities, and Git integration.",
        relatedSkills: ["Extensions", "Debugging", "Terminal", "Git Integration"]
      },
      {
        id: "composer",
        name: "Composer",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg",
        tag: "Package Manager",
        experience: "Intermediate • 1+ year",
        description: "Dependency management tool for PHP that allows declaration and management of project dependencies.",
        relatedSkills: ["PHP", "Packages", "Laravel", "Dependency Management"]
      },
      {
        id: "npm",
        name: "NPM",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        tag: "Package Manager",
        experience: "Intermediate • 1.5+ years",
        description: "Default package manager for Node.js that facilitates installation and management of code packages and dependencies.",
        relatedSkills: ["JavaScript", "Node.js", "Package Management", "Scripts"]
      },
      {
        id: "figma",
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        tag: "Design",
        experience: "Intermediate • 1+ year",
        description: "Cloud-based design tool for collaborative interface design, prototyping, and handoff to developers.",
        relatedSkills: ["UI Design", "Prototyping", "Components", "Design Systems"]
      }
    ]
  },
  concepts: {
    name: "Professional Skills",
    icon: "lightbulb",
    techs: [
      {
        id: "responsive",
        name: "Responsive Design",
        icon: "https://cdn.iconscout.com/icon/free/png-256/free-responsive-282-1123251.png",
        tag: "Design",
        experience: "Advanced • 2+ years",
        description: "Creating web applications that work seamlessly across different screen sizes, devices, and orientations using flexible layouts and media queries.",
        relatedSkills: ["CSS3", "Mobile-First", "Media Queries", "Flexbox/Grid"]
      },
      {
        id: "accessibility",
        name: "Accessibility",
        icon: "https://cdn-icons-png.flaticon.com/512/6364/6364343.png",
        tag: "Best Practice",
        experience: "Intermediate • 1.5+ years",
        description: "Designing and developing websites to be usable by people of all abilities and disabilities, following WCAG guidelines.",
        relatedSkills: ["HTML Semantics", "ARIA", "Color Contrast", "Keyboard Navigation"]
      },
      {
        id: "mvc",
        name: "MVC Pattern",
        icon: "https://cdn-icons-png.flaticon.com/512/6295/6295417.png",
        tag: "Architecture",
        experience: "Intermediate • 1+ year",
        description: "Software architectural pattern that separates an application into Model (data), View (interface), and Controller (business logic) components.",
        relatedSkills: ["Laravel", "Design Patterns", "Software Architecture"]
      },
      {
        id: "oop",
        name: "OOP",
        icon: "https://cdn-icons-png.flaticon.com/512/2166/2166823.png",
        tag: "Paradigm",
        experience: "Advanced • 2+ years",
        description: "Programming paradigm based on the concept of objects that contain data and code to manipulate that data, with principles like encapsulation and inheritance.",
        relatedSkills: ["Classes", "Inheritance", "Polymorphism", "Encapsulation"]
      }
    ]
  }
};

// SVG icons for category headers
const svgIcons = {
  code: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>`,
  server: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>`,
  tools: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>`,
  lightbulb: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>`
};

document.addEventListener('DOMContentLoaded', () => {
  // Create the tech grid as soon as the document is ready
  createTechGrid();
  
  // Handle modal events
  setupModalHandlers();
});

function createTechGrid() {
  const techGridContainer = document.querySelector('.modern-tech-grid');
  if (!techGridContainer) return;
  
  // Clear any existing content
  techGridContainer.innerHTML = '';
  
  // Create each category section
  for (const [categoryId, category] of Object.entries(techData)) {
    const categoryElement = document.createElement('div');
    categoryElement.className = `tech-category category-${categoryId}`;
    
    // Category header
    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'tech-category-header';
    
    // Category icon
    const categoryIcon = document.createElement('div');
    categoryIcon.className = 'tech-category-icon';
    categoryIcon.innerHTML = svgIcons[category.icon] || '';
    
    // Category title
    const categoryTitle = document.createElement('h3');
    categoryTitle.className = 'tech-category-title';
    categoryTitle.textContent = category.name;
    
    // Append header elements
    categoryHeader.appendChild(categoryIcon);
    categoryHeader.appendChild(categoryTitle);
    categoryElement.appendChild(categoryHeader);
    
    // Create tech cards container
    const techCardsContainer = document.createElement('div');
    techCardsContainer.className = 'tech-cards';
    
    // Create individual tech cards
    category.techs.forEach(tech => {
      const techCard = createTechCard(tech, categoryId);
      techCardsContainer.appendChild(techCard);
    });
    
    categoryElement.appendChild(techCardsContainer);
    techGridContainer.appendChild(categoryElement);
  }
  
  // Create modal container if it doesn't exist
  if (!document.querySelector('.tech-modal')) {
    const modal = document.createElement('div');
    modal.className = 'tech-modal';
    modal.innerHTML = `
      <div class="tech-modal-content">
        <div class="modal-header">
          <img src="" alt="" class="modal-icon">
          <div class="modal-title">
            <h3 class="modal-name"></h3>
            <div class="modal-category"></div>
          </div>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <p class="modal-desc"></p>
          <div class="modal-detail">
            <div class="detail-label">Experience</div>
            <div class="detail-value modal-experience"></div>
          </div>
          <div class="modal-skills">
            <div class="detail-label">Related Skills</div>
            <div class="skill-pills"></div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
}

function createTechCard(tech, categoryId) {
  const card = document.createElement('div');
  card.className = 'tech-card';
  card.dataset.techId = tech.id;
  card.dataset.category = categoryId;
  
  // Tech icon
  const icon = document.createElement('img');
  icon.src = tech.icon;
  icon.alt = tech.name;
  icon.className = 'tech-card-icon';
  
  // Tech name
  const name = document.createElement('div');
  name.className = 'tech-card-name';
  name.textContent = tech.name;
  
  // Tech tag
  const tag = document.createElement('div');
  tag.className = 'tech-card-tag';
  tag.textContent = tech.tag;
  
  // Append elements to card
  card.appendChild(icon);
  card.appendChild(name);
  card.appendChild(tag);
  
  // Add click event to show modal with tech details
  card.addEventListener('click', () => {
    showTechModal(tech, categoryId);
  });
  
  return card;
}

function setupModalHandlers() {
  document.addEventListener('click', (e) => {
    const modal = document.querySelector('.tech-modal');
    if (!modal) return;
    
    // Close when clicking the close button
    if (e.target.classList.contains('modal-close')) {
      closeModal();
    }
    
    // Close when clicking outside the modal content
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

function showTechModal(tech, categoryId) {
  const modal = document.querySelector('.tech-modal');
  if (!modal) return;
  
  // Set modal content
  modal.querySelector('.modal-icon').src = tech.icon;
  modal.querySelector('.modal-icon').alt = tech.name;
  modal.querySelector('.modal-name').textContent = tech.name;
  modal.querySelector('.modal-category').textContent = techData[categoryId].name;
  modal.querySelector('.modal-desc').textContent = tech.description;
  modal.querySelector('.modal-experience').textContent = tech.experience;
  
  // Set related skills
  const skillsContainer = modal.querySelector('.skill-pills');
  skillsContainer.innerHTML = '';
  
  tech.relatedSkills.forEach(skill => {
    const pill = document.createElement('div');
    pill.className = 'skill-pill';
    pill.textContent = skill;
    skillsContainer.appendChild(pill);
  });
  
  // Show modal with animation
  modal.classList.add('active');
  
  // Prevent body scrolling when modal is open
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.querySelector('.tech-modal');
  if (!modal) return;
  
  modal.classList.remove('active');
  
  // Re-enable body scrolling
  document.body.style.overflow = '';
}
