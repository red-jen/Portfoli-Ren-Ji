/**
 * Enhanced Tech Detail Panel
 * Improves the interaction and display of technology details when clicking keyboard keys
 */

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    enhanceTechDetailPanel();
  }, 1200); // Wait for keyboard to initialize
});

function enhanceTechDetailPanel() {
  // Tech data with experience levels and projects
  const techData = {
    'JavaScript': {
      experience: '2 years',
      expertiseLevel: 80,
      description: 'Core language for web development with ES6+ features and strong ecosystem.',
      category: 'Programming Language',
      skills: [
        { name: 'ES6+ Features', level: 85 },
        { name: 'DOM Manipulation', level: 90 },
        { name: 'Asynchronous JS', level: 75 }
      ],
      projects: ['FUT Champions', 'Task Manager', 'Portfolio']
    },
    'TypeScript': {
      experience: '1 year',
      expertiseLevel: 65,
      description: 'JavaScript with syntax for types, enhancing code quality and developer experience.',
      category: 'Programming Language',
      skills: [
        { name: 'Type Definitions', level: 70 },
        { name: 'Interfaces', level: 75 },
        { name: 'Generics', level: 55 }
      ],
      projects: ['Task Manager', 'Portfolio']
    },
    'React.js': {
      experience: '1.5 years',
      expertiseLevel: 75,
      description: 'Component-based UI library for building interactive web applications.',
      category: 'Frontend Framework',
      skills: [
        { name: 'Hooks', level: 85 },
        { name: 'State Management', level: 75 },
        { name: 'Component Lifecycle', level: 80 }
      ],
      projects: ['FUT Champions', 'Portfolio', 'SYBER SOUNDSCAPE']
    },
    'Next.js': {
      experience: '1 year',
      expertiseLevel: 70,
      description: 'React framework with server-side rendering and static site generation capabilities.',
      category: 'Frontend Framework',
      skills: [
        { name: 'Server-side Rendering', level: 75 },
        { name: 'API Routes', level: 80 },
        { name: 'Static Generation', level: 70 }
      ],
      projects: ['Portfolio', 'E-commerce App']
    },
    'Vue.js': {
      experience: '1 year',
      expertiseLevel: 70,
      description: 'Progressive framework for building user interfaces with an approachable core library.',
      category: 'Frontend Framework',
      skills: [
        { name: 'Vue Components', level: 80 },
        { name: 'Vuex', level: 65 },
        { name: 'Vue Router', level: 75 }
      ],
      projects: ['YOUDEMY', 'Todo App']
    },
    'HTML5': {
      experience: '2 years',
      expertiseLevel: 90,
      description: 'Standard markup language for documents designed to be displayed in a web browser.',
      category: 'Markup Language',
      skills: [
        { name: 'Semantic HTML', level: 95 },
        { name: 'Accessibility', level: 85 },
        { name: 'Forms & Validation', level: 90 }
      ],
      projects: ['All Projects']
    },
    'CSS3': {
      experience: '2 years',
      expertiseLevel: 85,
      description: 'Style sheet language used for describing the presentation of a document.',
      category: 'Stylesheet Language',
      skills: [
        { name: 'Flexbox', level: 90 },
        { name: 'Grid Layout', level: 85 },
        { name: 'Animations', level: 80 }
      ],
      projects: ['All Projects']
    },
    'Tailwind CSS': {
      experience: '1.5 years',
      expertiseLevel: 85,
      description: 'Utility-first CSS framework for rapidly building custom user interfaces.',
      category: 'CSS Framework',
      skills: [
        { name: 'Utility Classes', level: 90 },
        { name: 'Responsive Design', level: 85 },
        { name: 'Custom Configuration', level: 75 }
      ],
      projects: ['Portfolio', 'FUT Champions', 'Task Manager']
    },
    'Node.js': {
      experience: '1.5 years',
      expertiseLevel: 70,
      description: 'JavaScript runtime for executing JavaScript code server-side.',
      category: 'Runtime Environment',
      skills: [
        { name: 'Express.js', level: 75 },
        { name: 'API Development', level: 80 },
        { name: 'npm Ecosystem', level: 85 }
      ],
      projects: ['YOUDEMY API', 'Task Manager Backend']
    },
    'Express.js': {
      experience: '1.5 years',
      expertiseLevel: 75,
      description: 'Fast, unopinionated, minimalist web framework for Node.js.',
      category: 'Backend Framework',
      skills: [
        { name: 'Routing', level: 85 },
        { name: 'Middleware', level: 80 },
        { name: 'RESTful APIs', level: 75 }
      ],
      projects: ['YOUDEMY API', 'Task Manager Backend']
    },
    'PHP': {
      experience: '2 years',
      expertiseLevel: 80,
      description: 'Popular server-side scripting language designed for web development.',
      category: 'Programming Language',
      skills: [
        { name: 'OOP Concepts', level: 85 },
        { name: 'Database Interaction', level: 80 },
        { name: 'Session Handling', level: 75 }
      ],
      projects: ['YOUDEMY', 'E-commerce Backend', 'CMS']
    },
    'Laravel': {
      experience: '1.5 years',
      expertiseLevel: 75,
      description: 'PHP framework with expressive, elegant syntax for web application development.',
      category: 'Backend Framework',
      skills: [
        { name: 'Eloquent ORM', level: 80 },
        { name: 'Blade Templates', level: 85 },
        { name: 'Laravel Mix', level: 70 }
      ],
      projects: ['YOUDEMY', 'Blog Platform']
    },
    'Git': {
      experience: '2 years',
      expertiseLevel: 85,
      description: 'Distributed version control system for tracking changes in source code.',
      category: 'Version Control',
      skills: [
        { name: 'Branching & Merging', level: 90 },
        { name: 'Pull Requests', level: 85 },
        { name: 'Resolving Conflicts', level: 75 }
      ],
      projects: ['All Projects']
    },
    'MySQL': {
      experience: '1.5 years',
      expertiseLevel: 75,
      description: 'Open-source relational database management system.',
      category: 'Database',
      skills: [
        { name: 'SQL Queries', level: 80 },
        { name: 'Database Design', level: 75 },
        { name: 'Indexing & Optimization', level: 70 }
      ],
      projects: ['YOUDEMY', 'Task Manager', 'E-commerce']
    },
    'PostgreSQL': {
      experience: '1 year',
      expertiseLevel: 70,
      description: 'Powerful, open source object-relational database system.',
      category: 'Database',
      skills: [
        { name: 'Advanced Queries', level: 70 },
        { name: 'JSON Data Types', level: 75 },
        { name: 'Full-text Search', level: 65 }
      ],
      projects: ['SYBER SOUNDSCAPE', 'Analytics Platform']
    },
    'MongoDB': {
      experience: '1 year',
      expertiseLevel: 70,
      description: 'Document-oriented NoSQL database used in modern web applications.',
      category: 'Database',
      skills: [
        { name: 'CRUD Operations', level: 80 },
        { name: 'Aggregation Framework', level: 65 },
        { name: 'Schema Design', level: 70 }
      ],
      projects: ['Task Manager', 'Blog Backend']
    },
    'RESTful APIs': {
      experience: '2 years',
      expertiseLevel: 80,
      description: 'Architectural style for designing networked applications.',
      category: 'API Development',
      skills: [
        { name: 'Resource Design', level: 85 },
        { name: 'HTTP Methods', level: 90 },
        { name: 'Status Codes', level: 80 }
      ],
      projects: ['YOUDEMY API', 'FUT Champions Backend']
    },
    'Docker': {
      experience: '6 months',
      expertiseLevel: 50,
      description: 'Platform for developing, shipping, and running applications in containers.',
      category: 'DevOps Tool',
      skills: [
        { name: 'Dockerfiles', level: 60 },
        { name: 'Docker Compose', level: 55 },
        { name: 'Containerization', level: 50 }
      ],
      projects: ['YOUDEMY Deployment']
    },
    'MVC Architecture': {
      experience: '1.5 years',
      expertiseLevel: 80,
      description: 'Software design pattern dividing application into Model, View, and Controller.',
      category: 'Architecture Pattern',
      skills: [
        { name: 'Separation of Concerns', level: 85 },
        { name: 'Data Modeling', level: 80 },
        { name: 'Controller Logic', level: 75 }
      ],
      projects: ['YOUDEMY', 'SYBER SOUNDSCAPE', 'Task Manager']
    },
    'Netlify': {
      experience: '1.5 years',
      expertiseLevel: 80,
      description: 'Platform for automating modern web projects with continuous deployment.',
      category: 'Deployment Platform',
      skills: [
        { name: 'Continuous Deployment', level: 85 },
        { name: 'Form Handling', level: 75 },
        { name: 'Serverless Functions', level: 70 }
      ],
      projects: ['Portfolio', 'FUT Champions', 'Static Sites']
    },
    'Vercel': {
      experience: '1 year',
      expertiseLevel: 75,
      description: 'Deployment and collaboration platform for frontend developers.',
      category: 'Deployment Platform',
      skills: [
        { name: 'Frontend Deployments', level: 85 },
        { name: 'Serverless Functions', level: 70 },
        { name: 'Environment Variables', level: 75 }
      ],
      projects: ['Next.js Projects', 'Portfolio']
    }
  };

  // Get the tech detail panel element
  const detailPanel = document.getElementById('tech-detail-panel');
  if (!detailPanel) {
    console.error('Tech detail panel not found');
    return;
  }
  
  // Enhance the panel structure
  detailPanel.innerHTML = `
    <button class="tech-detail-close" aria-label="Close panel">&times;</button>
    <div class="tech-detail-inner">
      <div class="tech-detail-header">
        <img src="" alt="" class="tech-detail-icon">
        <h4 class="tech-detail-name"></h4>
      </div>
      <div class="tech-detail-category"></div>
      <p class="tech-detail-description"></p>
      <div class="tech-skill-bars"></div>
      <div class="tech-projects"></div>
      <div class="tech-detail-experience"></div>
    </div>
  `;
  
  // Add close button functionality
  const closeButton = detailPanel.querySelector('.tech-detail-close');
  closeButton.addEventListener('click', () => {
    detailPanel.classList.remove('active');
  });
  
  // Hook into TechKeyboard's tech display method
  if (window.TechKeyboard) {
    const originalShowTech = window.TechKeyboard.prototype.showTechDetails;
    
    window.TechKeyboard.prototype.showTechDetails = function(tech) {
      // Don't call original if it would show an overlay panel
      // if (originalShowTech) {
      //   originalShowTech.apply(this, arguments);
      // }

      // Enhanced display with our custom data
      const techName = tech.name;
      const techInfo = techData[techName] || {
        experience: 'Learning',
        expertiseLevel: 30,
        description: tech.description || 'A technology in my stack.',
        category: 'Technology',
        skills: [{ name: 'Basic Usage', level: 50 }],
        projects: ['Various Projects']
      };
      
      // Scroll the panel into view if needed
      const keyboardContainer = document.getElementById('tech-keyboard-container');
      
      // Update panel content
      const nameElement = detailPanel.querySelector('.tech-detail-name');
      const categoryElement = detailPanel.querySelector('.tech-detail-category');
      const descriptionElement = detailPanel.querySelector('.tech-detail-description');
      const experienceElement = detailPanel.querySelector('.tech-detail-experience');
      const iconElement = detailPanel.querySelector('.tech-detail-icon');
      const skillsElement = detailPanel.querySelector('.tech-skill-bars');
      const projectsElement = detailPanel.querySelector('.tech-projects');
      
      if (nameElement) nameElement.textContent = techName;
      if (categoryElement) categoryElement.textContent = techInfo.category;
      if (descriptionElement) descriptionElement.textContent = techInfo.description;
      if (experienceElement) experienceElement.textContent = `Experience: ${techInfo.experience}`;
      
      // Set icon if available
      if (iconElement) {
        if (tech.icon) {
          iconElement.src = `assets/icons/${tech.icon}`;
          iconElement.alt = techName;
          iconElement.style.display = 'block';
        } else {
          // Use first letter as icon if no image
          iconElement.style.display = 'none';
        }
      }
      
      // Create skill bars
      if (skillsElement) {
        skillsElement.innerHTML = '';
        techInfo.skills.forEach(skill => {
          const skillBar = document.createElement('div');
          skillBar.className = 'skill-bar-container';
          skillBar.innerHTML = `
            <div class="skill-bar-label">
              <span class="skill-name">${skill.name}</span>
              <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-bar-bg">
              <div class="skill-bar-fill" style="width: 0%"></div>
            </div>
          `;
          skillsElement.appendChild(skillBar);
        });
      }
      
      // Create project tags
      if (projectsElement) {
        projectsElement.innerHTML = '';
        techInfo.projects.forEach(project => {
          const projectTag = document.createElement('span');
          projectTag.className = 'tech-project-tag';
          projectTag.textContent = project;
          projectsElement.appendChild(projectTag);
        });
      }
      
      // Show the panel with animation
      detailPanel.classList.add('active');
      
      // Animate skill bars after panel is visible
      setTimeout(() => {
        const skillFills = detailPanel.querySelectorAll('.skill-bar-fill');
        techInfo.skills.forEach((skill, index) => {
          if (skillFills[index]) {
            skillFills[index].style.width = `${skill.level}%`;
          }
        });
        
        // Scroll to ensure the panel is visible
        if (keyboardContainer) {
          setTimeout(() => {
            // Smooth scroll to make the panel visible
            detailPanel.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'nearest' 
            });
          }, 100);
        }
      }, 300);
      
      // Hide after a longer delay for reading
      clearTimeout(this.panelTimeout);
      this.panelTimeout = setTimeout(() => {
        detailPanel.classList.remove('active');
      }, 10000);  // 10 seconds - increased for better readability
    };
  }

  // Add keyboard accessibility - close with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailPanel.classList.contains('active')) {
      detailPanel.classList.remove('active');
    }
  });
}
