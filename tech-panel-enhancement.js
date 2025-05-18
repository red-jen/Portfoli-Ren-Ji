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
      expertiseLevel: 80, // Percentage
      description: 'Core language for web development with strong ecosystem and frameworks.',
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
    'React': {
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
    'Vue': {
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
    'HTML': {
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
    'Python': {
      experience: '1 year',
      expertiseLevel: 60,
      description: 'Versatile programming language with clean syntax and rich ecosystem.',
      category: 'Programming Language',
      skills: [
        { name: 'Data Analysis', level: 65 },
        { name: 'Basic Scripting', level: 75 },
        { name: 'Web Scraping', level: 60 }
      ],
      projects: ['Data Analysis Project']
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
    'AWS': {
      experience: '6 months',
      expertiseLevel: 45,
      description: 'Cloud computing platform with vast array of infrastructure services.',
      category: 'Cloud Platform',
      skills: [
        { name: 'S3', level: 65 },
        { name: 'EC2', level: 50 },
        { name: 'Lambda', level: 40 }
      ],
      projects: ['Portfolio Deployment', 'Image Storage Service']
    },
    'GraphQL': {
      experience: '6 months',
      expertiseLevel: 60,
      description: 'Query language for APIs and runtime for executing those queries.',
      category: 'API Technology',
      skills: [
        { name: 'Queries & Mutations', level: 70 },
        { name: 'Schema Design', level: 60 },
        { name: 'Apollo Client', level: 55 }
      ],
      projects: ['Blog API', 'E-commerce API']
    },
    'GitHub': {
      experience: '2 years',
      expertiseLevel: 85,
      description: 'Platform for version control and collaboration using Git.',
      category: 'Development Tool',
      skills: [
        { name: 'Version Control', level: 90 },
        { name: 'Pull Requests', level: 85 },
        { name: 'GitHub Actions', level: 70 }
      ],
      projects: ['All Projects']
    },
    'WordPress': {
      experience: '1 year',
      expertiseLevel: 75,
      description: 'Content management system focused on creating websites and blogs.',
      category: 'CMS',
      skills: [
        { name: 'Theme Development', level: 80 },
        { name: 'Plugin Customization', level: 70 },
        { name: 'Site Administration', level: 85 }
      ],
      projects: ['Client Blog', 'E-commerce Store']
    },
    'Linux': {
      experience: '1.5 years',
      expertiseLevel: 65,
      description: 'Open source operating system and foundation for many servers and devices.',
      category: 'Operating System',
      skills: [
        { name: 'Bash Scripting', level: 60 },
        { name: 'Server Management', level: 70 },
        { name: 'Package Management', level: 75 }
      ],
      projects: ['Server Deployment', 'Dev Environment']
    },
    'Sass': {
      experience: '1.5 years',
      expertiseLevel: 80,
      description: 'CSS preprocessor scripting language with powerful features.',
      category: 'Stylesheet Language',
      skills: [
        { name: 'Variables & Mixins', level: 85 },
        { name: 'Nesting', level: 90 },
        { name: 'Functions', level: 75 }
      ],
      projects: ['Portfolio', 'YOUDEMY', 'E-commerce UI']
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
