/**
 * Tech Keyboard Visualization
 * Enhanced with true 3D cube keys
 */

// Add more technologies to the keyboard layout
const techKeyboard = [
  // First row - Frontend basics
  {
    row: 0,
    keys: [
      { 
        id: "html5", 
        name: "HTML5",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        experience: "Advanced • 2+ years",
        description: "Semantic markup language for structuring web content with modern features for multimedia, graphics, and client-side storage."
      },
      { 
        id: "css3", 
        name: "CSS3",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        experience: "Advanced • 2+ years",
        description: "Styling language for defining the visual presentation of HTML documents with advanced features like animations, flexbox, and grid layouts."
      },
      { 
        id: "javascript", 
        name: "JavaScript",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        experience: "Advanced • 2+ years",
        description: "Versatile programming language that enables dynamic, interactive content and browser-based applications with support for modern ES6+ features."
      },
      { 
        id: "typescript", 
        name: "TypeScript",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        experience: "Intermediate • 8+ months",
        description: "Strongly typed programming language that builds on JavaScript, adding static type definitions for enhanced code quality and developer experience."
      },
      { 
        id: "sass", 
        name: "Sass",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        experience: "Intermediate • 1+ year",
        description: "CSS preprocessor scripting language that extends CSS with variables, nested rules, mixins, and more for more maintainable stylesheets."
      },
      { 
        id: "bootstrap", 
        name: "Bootstrap",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        experience: "Advanced • 2+ years",
        description: "Front-end framework with pre-built components and responsive grid system for faster and easier web development."
      }
    ]
  },
  
  // Second row - Frontend frameworks & libraries
  {
    row: 1,
    keys: [
      { 
        id: "react", 
        name: "React",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        experience: "Intermediate • 1+ year",
        description: "JavaScript library for building component-based user interfaces with a virtual DOM for efficient rendering and state management."
      },
      { 
        id: "vue", 
        name: "Vue.js",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        experience: "Basic • 6+ months",
        description: "Progressive JavaScript framework for building user interfaces with a focus on declarative rendering and component composition."
      },
      { 
        id: "tailwind", 
        name: "Tailwind CSS",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        experience: "Advanced • 1.5+ years",
        description: "Utility-first CSS framework for rapidly building custom designs without leaving your HTML, enabling highly efficient development workflows."
      },
      { 
        id: "gsap", 
        name: "GSAP",
        category: "frontend",
        icon: "https://cdn.cdnlogo.com/logos/g/21/gsap-greensock.svg",
        experience: "Intermediate • 1+ year",
        description: "Professional-grade animation library for creating high-performance, complex animations with precise control."
      },
      { 
        id: "threejs", 
        name: "Three.js",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
        experience: "Basic • 4+ months",
        description: "JavaScript 3D library that makes WebGL simpler, enabling the creation of 3D graphics in the browser."
      },
      { 
        id: "nextjs", 
        name: "Next.js",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        experience: "Basic • 3+ months",
        description: "React framework enabling server-side rendering, static site generation, and other performance optimizations with built-in routing."
      }
    ]
  },
  
  // Third row - Backend technologies
  {
    row: 2,
    keys: [
      { 
        id: "php", 
        name: "PHP",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        experience: "Advanced • 2+ years",
        description: "Server-side scripting language designed for web development with a focus on database connectivity and HTML generation."
      },
      { 
        id: "laravel", 
        name: "Laravel",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
        experience: "Intermediate • 1+ year",
        description: "PHP framework with expressive, elegant syntax that provides tools needed for large, robust applications with MVC architecture."
      },
      { 
        id: "mysql", 
        name: "MySQL",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        experience: "Intermediate • 1.5+ years",
        description: "Open-source relational database management system known for its reliability, performance, and ease of use in web applications."
      },
      { 
        id: "postgresql", 
        name: "PostgreSQL",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        experience: "Intermediate • 1+ year",
        description: "Advanced open-source relational database with strong standards compliance and extensive features for complex data workloads."
      },
      { 
        id: "nodejs", 
        name: "Node.js",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        experience: "Basic • 8+ months",
        description: "JavaScript runtime built on Chrome's V8 engine for building scalable network applications on the server-side."
      },
      { 
        id: "express", 
        name: "Express.js",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        experience: "Basic • 6+ months",
        description: "Fast, unopinionated, minimalist web framework for Node.js for building web applications and APIs."
      }
    ]
  },
  
  // Fourth row - Developer tools
  {
    row: 3,
    keys: [
      { 
        id: "git", 
        name: "Git",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        experience: "Advanced • 2+ years",
        description: "Distributed version control system for tracking changes in source code during software development and collaboration."
      },
      { 
        id: "github", 
        name: "GitHub",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        experience: "Advanced • 2+ years",
        description: "Hosting platform for Git repositories with features for collaboration, code review, issue tracking, and CI/CD workflows."
      },
      { 
        id: "vscode", 
        name: "VS Code",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        experience: "Advanced • 2+ years",
        description: "Lightweight but powerful source code editor with extensive plugin support, debugging capabilities, and Git integration."
      },
      { 
        id: "composer", 
        name: "Composer",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg",
        experience: "Intermediate • 1+ year",
        description: "Dependency management tool for PHP that allows declaration and management of project dependencies."
      },
      { 
        id: "npm", 
        name: "NPM",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        experience: "Intermediate • 1.5+ years",
        description: "Default package manager for Node.js that facilitates installation and management of code packages and dependencies."
      },
      { 
        id: "docker", 
        name: "Docker",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        experience: "Basic • 6+ months",
        description: "Platform for developing, shipping, and running applications in containers for consistent deployment across environments."
      }
    ]
  },
  
  // Fifth row - Professional skills
  {
    row: 4,
    keys: [
      { 
        id: "responsive", 
        name: "Responsive Design",
        category: "concepts",
        icon: "https://cdn.iconscout.com/icon/free/png-256/free-responsive-282-1123251.png",
        experience: "Advanced • 2+ years",
        description: "Creating web applications that work seamlessly across different screen sizes, devices, and orientations using flexible layouts and media queries.",
        size: "1-5u"
      },
      { 
        id: "accessibility", 
        name: "Accessibility",
        category: "concepts",
        icon: "https://cdn-icons-png.flaticon.com/512/6364/6364343.png",
        experience: "Intermediate • 1.5+ years",
        description: "Designing and developing websites to be usable by people of all abilities and disabilities, following WCAG guidelines.",
        size: "1-5u"
      },
      { 
        id: "mvc", 
        name: "MVC Pattern",
        category: "concepts",
        icon: "https://cdn-icons-png.flaticon.com/512/6295/6295417.png",
        experience: "Intermediate • 1+ year",
        description: "Software architectural pattern that separates an application into Model (data), View (interface), and Controller (business logic) components.",
        size: "1-5u"
      },
      { 
        id: "oop", 
        name: "OOP",
        category: "concepts",
        icon: "https://cdn-icons-png.flaticon.com/512/2166/2166823.png",
        experience: "Advanced • 2+ years",
        description: "Programming paradigm based on the concept of objects that contain data and code to manipulate that data, with principles like encapsulation and inheritance.",
        size: "1-5u"
      }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Initialize keyboard visualization
  initTechKeyboard();
  
  // Add 3D tilt effect
  addKeyboardTiltEffect();
  
  // Set up demo type animation after a short delay
  setTimeout(() => {
    initiateTypingAnimation();
  }, 1800);
});

// Improved tech keyboard initialization to ensure all keys display properly
function initTechKeyboard() {
  const container = document.getElementById('tech-keyboard');
  if (!container) return;
  
  // Clear any existing content
  container.innerHTML = '';
  
  // Add keyboard edge glow
  const keyboardEdge = document.createElement('div');
  keyboardEdge.className = 'keyboard-edge';
  container.appendChild(keyboardEdge);
  
  // Add keyboard base texture
  const keyboardBase = document.createElement('div');
  keyboardBase.className = 'keyboard-base';
  container.appendChild(keyboardBase);
  
  // Add lighting element for ambient effects
  const lighting = document.createElement('div');
  lighting.className = 'keyboard-lighting';
  container.appendChild(lighting);
  
  // Add keyboard brand and status light for realism
  const keyboardBrand = document.createElement('div');
  keyboardBrand.className = 'keyboard-brand';
  keyboardBrand.textContent = 'TECH STACK';
  container.appendChild(keyboardBrand);
  
  const statusLight = document.createElement('div');
  statusLight.className = 'keyboard-status-light';
  statusLight.id = 'keyboard-status';
  container.appendChild(statusLight);
  
  // Create keyboard rows with optimized layout
  techKeyboard.forEach((rowData, rowIndex) => {
    const keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard-row';
    
    // Special handling for different rows
    if (rowIndex === 4) { // Concepts row
      keyboardRow.style.justifyContent = 'space-evenly';
    } else {
      keyboardRow.style.justifyContent = 'center';
    }
    
    // Create keys in this row
    rowData.keys.forEach(key => {
      const keyElement = createKeyElement(key, rowIndex);
      keyboardRow.appendChild(keyElement);
    });
    
    container.appendChild(keyboardRow);
  });
  
  // Initial check for layout issues after a brief delay to allow rendering
  setTimeout(() => {
    checkAndAdjustKeyboardLayout();
  }, 50);
}

// Create individual keys with optimized dimensions
function createKeyElement(key, rowIndex) {
  // Create key container
  const keyElement = document.createElement('div');
  keyElement.className = `keyboard-key key-${key.category} ${key.size ? `key-${key.size}` : 'key-1u'}`;
  keyElement.dataset.tech = key.id;
  
  // Adjust size for fifth row (concepts row) to ensure equal distribution
  if (rowIndex === 4) {
    keyElement.classList.add('concept-key');
  }
  
  // Add key shadow
  const keyShadow = document.createElement('div');
  keyShadow.className = 'key-shadow';
  keyElement.appendChild(keyShadow);
  
  // Create the actual cube container
  const keyCube = document.createElement('div');
  keyCube.className = 'key-cube';
  
  // Create all six cube faces
  
  // 1. Top face (main visible face with icon)
  const keyTop = document.createElement('div');
  keyTop.className = 'key-face key-top';
  const keyIcon = document.createElement('img');
  keyIcon.src = key.icon;
  keyIcon.alt = key.name;
  keyIcon.className = 'key-img';
  keyIcon.loading = "lazy";
  keyTop.appendChild(keyIcon);
  
  // 2. Bottom face (opposite of top)
  const keyBottom = document.createElement('div');
  keyBottom.className = 'key-face key-bottom';
  
  // 3. Front face
  const keyFront = document.createElement('div');
  keyFront.className = 'key-face key-front';
  
  // 4. Back face
  const keyBack = document.createElement('div');
  keyBack.className = 'key-face key-back';
  
  // 5. Left face
  const keyLeft = document.createElement('div');
  keyLeft.className = 'key-face key-left';
  
  // 6. Right face
  const keyRight = document.createElement('div');
  keyRight.className = 'key-face key-right';
  
  // Add all faces to cube
  keyCube.appendChild(keyTop);
  keyCube.appendChild(keyBottom);
  keyCube.appendChild(keyFront);
  keyCube.appendChild(keyBack);
  keyCube.appendChild(keyLeft);
  keyCube.appendChild(keyRight);
  
  // Add cube to key
  keyElement.appendChild(keyCube);
  
  // Create tooltip
  const tooltip = document.createElement('div');
  tooltip.className = 'key-tooltip';
  tooltip.textContent = key.name;
  keyElement.appendChild(tooltip);
  
  // Add event listeners
  keyElement.addEventListener('mouseenter', () => {
    showTechDetails(key);
    playKeyPressSound();
    document.getElementById('keyboard-status').classList.add('active');
  });
  
  keyElement.addEventListener('mouseleave', () => {
    document.getElementById('keyboard-status').classList.remove('active');
  });
  
  keyElement.addEventListener('click', () => {
    pressKey(keyElement);
    showTechDetails(key);
    playKeyPressSound(true);
  });
  
  return keyElement;
}

// More robust layout checking and adjustment
function checkAndAdjustKeyboardLayout() {
  const container = document.getElementById('tech-keyboard');
  if (!container) return;
  
  const containerWidth = container.clientWidth;
  const rows = container.querySelectorAll('.keyboard-row');
  
  // First pass - check if any row exceeds container width
  let needsCompactMode = false;
  rows.forEach(row => {
    // Get total width of all keys in row
    const keysWidth = Array.from(row.querySelectorAll('.keyboard-key'))
      .reduce((total, key) => total + key.offsetWidth, 0);
    
    if (keysWidth > containerWidth * 0.98) {
      needsCompactMode = true;
    }
  });
  
  // Apply compact mode if needed
  if (needsCompactMode) {
    container.classList.add('keyboard-compact');
    
    // Adjust each row's keys proportionally
    rows.forEach((row, rowIndex) => {
      const keys = row.querySelectorAll('.keyboard-key');
      const totalKeys = keys.length;
      
      // Calculate new width for keys
      let newKeyWidth;
      if (rowIndex === 4) { // Concepts row
        newKeyWidth = (containerWidth * 0.95) / totalKeys - 10; // 10px for margins
      } else {
        newKeyWidth = (containerWidth * 0.95) / Math.max(totalKeys, 8) - 8; // Ensure consistent width
      }
      
      // Apply new width to each key
      keys.forEach(key => {
        key.style.width = `${newKeyWidth}px`;
      });
    });
  }
}

function showTechDetails(tech) {
  const detailPanel = document.getElementById('tech-detail-panel');
  if (!detailPanel) return;
  
  // Set tech details
  detailPanel.querySelector('.tech-detail-icon').src = tech.icon;
  detailPanel.querySelector('.tech-detail-icon').alt = tech.name;
  detailPanel.querySelector('.tech-detail-name').textContent = tech.name;
  
  // Set category with appropriate style
  const categoryElement = detailPanel.querySelector('.tech-detail-category');
  categoryElement.textContent = getCategoryName(tech.category);
  categoryElement.style.backgroundColor = getCategoryColor(tech.category, '0.1');
  categoryElement.style.color = getCategoryColor(tech.category);
  
  detailPanel.querySelector('.tech-detail-description').textContent = tech.description;
  detailPanel.querySelector('.tech-detail-experience').textContent = tech.experience;
  
  // Show panel with animation
  detailPanel.classList.add('active');
}

function getCategoryName(category) {
  const categories = {
    'frontend': 'Frontend Development',
    'backend': 'Backend Development',
    'tools': 'Developer Tools',
    'concepts': 'Professional Skills'
  };
  return categories[category] || category;
}

function getCategoryColor(category, opacity = '') {
  const colors = {
    'frontend': `#38BDF8${opacity}`,
    'backend': `#4ADE80${opacity}`,
    'tools': `#C084FC${opacity}`,
    'concepts': `#FB7185${opacity}`
  };
  return colors[category] || `#64FFDA${opacity}`;
}

function pressKey(keyElement) {
  keyElement.classList.add('key-pressed');
  
  // Reset after animation completes
  setTimeout(() => {
    keyElement.classList.remove('key-pressed');
  }, 250);
}

// Sound effects for keyboard
let audioContext;
function playKeyPressSound(louder = false) {
  try {
    // Initialize AudioContext on first use (needs user interaction)
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    // Create more complex sound for mechanical keyboard effect
    const clickOscillator = audioContext.createOscillator();
    const clickGain = audioContext.createGain();
    const thumpOscillator = audioContext.createOscillator();
    const thumpGain = audioContext.createGain();
    
    // Connect nodes
    clickOscillator.connect(clickGain);
    thumpOscillator.connect(thumpGain);
    clickGain.connect(audioContext.destination);
    thumpGain.connect(audioContext.destination);
    
    // High-frequency click (plastic keycap sound)
    clickOscillator.type = 'triangle';
    clickOscillator.frequency.value = louder ? 2000 + Math.random() * 500 : 1500 + Math.random() * 500;
    clickGain.gain.value = louder ? 0.03 : 0.02;
    
    // Low-frequency thump (key bottoming out)
    thumpOscillator.type = 'sine';
    thumpOscillator.frequency.value = louder ? 120 + Math.random() * 30 : 100 + Math.random() * 20;
    thumpGain.gain.value = louder ? 0.08 : 0.05;
    
    // Play sounds
    clickOscillator.start();
    thumpOscillator.start();
    
    // Release sounds quickly
    clickGain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.08);
    thumpGain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.15);
    
    clickOscillator.stop(audioContext.currentTime + 0.1);
    thumpOscillator.stop(audioContext.currentTime + 0.2);
  } catch (error) {
    // Silently fail if audio context isn't supported or fails
    console.log('Audio not supported');
  }
}

// Demonstration typing animation
function initiateTypingAnimation() {
  const keys = document.querySelectorAll('.keyboard-key');
  if (keys.length === 0) return;
  
  // Status light flashing
  const statusLight = document.getElementById('keyboard-status');
  if (statusLight) statusLight.classList.add('active');
  
  // More realistic typing pattern - nearby keys in sequence
  const keyGroups = [
    // Group of frontend technologies
    [0, 1, 2, 3],
    // Group of backend technologies
    [5, 6, 7, 8],
    // Group of tools
    [10, 11, 12],
    // Group of concepts
    [15, 16, 17]
  ];
  
  // Pick a random group to "type"
  const groupIndex = Math.floor(Math.random() * keyGroups.length);
  const selectedKeys = keyGroups[groupIndex];
  
  // Animate the keys in more realistic sequence with varied timing
  let delay = 0;
  selectedKeys.forEach((index, i) => {
    if (index >= keys.length) return;
    
    setTimeout(() => {
      const key = keys[index];
      pressKey(key);
      playKeyPressSound();
      
      // Show tech details for the last key
      if (i === selectedKeys.length - 1) {
        const techId = key.dataset.tech;
        const tech = findTechById(techId);
        if (tech) {
          showTechDetails(tech);
        }
        
        // Turn off status light after typing sequence
        setTimeout(() => {
          if (statusLight) statusLight.classList.remove('active');
        }, 500);
      }
    }, delay);
    
    // More realistic varied typing speed
    delay += 100 + Math.random() * 200;
  });
  
  // Schedule the next animation with natural pauses
  setTimeout(initiateTypingAnimation, delay + 4000 + Math.random() * 2000);
}

function findTechById(id) {
  for (const row of techKeyboard) {
    for (const key of row.keys) {
      if (key.id === id) {
        return key;
      }
    }
  }
  return null;
}

// Create ripple effect when pressing keys
function createRippleEffect(element) {
  const ripple = document.createElement('div');
  ripple.className = 'key-ripple';
  ripple.style.position = 'absolute';
  ripple.style.top = '50%';
  ripple.style.left = '50%';
  ripple.style.width = '0';
  ripple.style.height = '0';
  ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  ripple.style.borderRadius = '50%';
  ripple.style.transform = 'translate(-50%, -50%)';
  ripple.style.transition = 'all 0.6s ease-out';
  ripple.style.zIndex = '1';
  ripple.style.pointerEvents = 'none';
  
  element.appendChild(ripple);
  
  // Animate ripple
  setTimeout(() => {
    const size = Math.max(element.offsetWidth, element.offsetHeight) * 2;
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.opacity = '0';
  }, 10);
  
  // Clean up
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Add responsive behavior
window.addEventListener('resize', () => {
  // Adjust keyboard layout based on screen size
  const container = document.getElementById('tech-keyboard');
  if (!container) return;
  
  if (window.innerWidth < 768) {
    container.classList.add('compact-layout');
  } else {
    container.classList.remove('compact-layout');
  }
});

// Enhanced tilt effect with lower angle to keep all keys visible
function addKeyboardTiltEffect() {
  const keyboard = document.getElementById('tech-keyboard');
  if (!keyboard) return;
  
  keyboard.addEventListener('mousemove', (e) => {
    const rect = keyboard.getBoundingClientRect();
    
    // Calculate relative position within keyboard
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate tilt with better constraints
    const tiltX = -((y / rect.height - 0.5) * 2);
    const tiltY = (x / rect.width - 0.5) * 3;
    
    // Apply tilt with smooth transition - using lower starting angle
    keyboard.style.transform = `rotateX(${8 + tiltX}deg) rotateY(${tiltY}deg) scale(0.9)`;
  });
  
  // Reset tilt when mouse leaves - to lower base angle
  keyboard.addEventListener('mouseleave', () => {
    keyboard.style.transform = 'rotateX(8deg) rotateY(0deg) scale(0.9)';
  });
  
  // Add touch support for mobile tilt
  keyboard.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = keyboard.getBoundingClientRect();
      
      // Calculate relative position
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      
      // Calculate tilt (less than mouse for better mobile experience)
      const tiltX = -((y / rect.height - 0.5) * 1.5);
      const tiltY = (x / rect.width - 0.5) * 2.5;
      
      // Apply tilt
      keyboard.style.transform = `rotateX(${8 + tiltX}deg) rotateY(${tiltY}deg) scale(0.8)`;
      
      // Prevent page scrolling while interacting with keyboard
      e.preventDefault();
    }
  }, { passive: false });
}

// Add additional window resize handler to readjust layout as needed
window.addEventListener('resize', () => {
  // Reset any custom widths first
  const keys = document.querySelectorAll('.keyboard-key');
  keys.forEach(key => key.style.width = '');
  
  // Remove compact class to start fresh
  const keyboard = document.getElementById('tech-keyboard');
  if (keyboard) keyboard.classList.remove('keyboard-compact');
  
  // Re-check layout
  setTimeout(checkAndAdjustKeyboardLayout, 50);
});

// Add window resize handler to adjust layout
window.addEventListener('resize', () => {
  checkKeyboardLayout();
});
