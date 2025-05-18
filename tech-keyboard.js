/**
 * Tech Keyboard Visualization
 * Enhanced with 3D rendering and realistic keyboard effects
 */

// Tech data structure with keyboard layout information
const techKeyboard = [
  // Layout data with rows and tech keys
  {
    // First row - typically numbers
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
        id: "react", 
        name: "React",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        experience: "Intermediate • 1+ year",
        description: "JavaScript library for building component-based user interfaces with a virtual DOM for efficient rendering and state management."
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
      }
    ]
  },
  
  // Second row - typically QWERTY
  {
    row: 1,
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
        id: "rest", 
        name: "REST API",
        category: "backend",
        icon: "https://cdn.iconscout.com/icon/free/png-256/free-api-3521432-2944880.png",
        experience: "Intermediate • 1.5+ years",
        description: "Architectural style for designing networked applications with stateless operations and standardized interfaces for web services."
      }
    ]
  },
  
  // Third row - typically ASDF
  {
    row: 2,
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
      }
    ]
  },
  
  // Fourth row - typically ZXCV (space bar row)
  {
    row: 3,
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
        size: "2u"
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
  
  // Create keyboard rows
  techKeyboard.forEach(rowData => {
    const keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard-row';
    
    // Create keys in this row
    rowData.keys.forEach(key => {
      const keyElement = createKeyElement(key);
      keyboardRow.appendChild(keyElement);
    });
    
    container.appendChild(keyboardRow);
  });
}

function createKeyElement(key) {
  // Create key container with improved 3D button structure
  const keyElement = document.createElement('div');
  keyElement.className = `keyboard-key key-${key.category} ${key.size ? `key-${key.size}` : 'key-1u'}`;
  keyElement.dataset.tech = key.id;
  
  // Add key shadow
  const keyShadow = document.createElement('div');
  keyShadow.className = 'key-shadow';
  keyElement.appendChild(keyShadow);
  
  // Create button structure with all sides for true 3D appearance
  // 1. Top face (visible face with icon)
  const keyTop = document.createElement('div');
  keyTop.className = 'key-top';
  
  // 2. Right edge - more visible, defines key depth
  const keyRightEdge = document.createElement('div');
  keyRightEdge.className = 'key-right-edge';
  
  // 3. Left edge - improved positioning
  const keyLeftEdge = document.createElement('div');
  keyLeftEdge.className = 'key-left-edge';
  
  // 4. Bottom edge - visible when hovering
  const keyBottomEdge = document.createElement('div');
  keyBottomEdge.className = 'key-bottom-edge';
  
  // 5. Back edge - for complete cube appearance
  const keyBackEdge = document.createElement('div');
  keyBackEdge.className = 'key-back-edge';
  
  // Create icon with enhanced appearance
  const keyIcon = document.createElement('img');
  keyIcon.src = key.icon;
  keyIcon.alt = key.name;
  keyIcon.className = 'key-img';
  keyIcon.loading = "lazy"; // Performance optimization
  
  // Create tooltip
  const tooltip = document.createElement('div');
  tooltip.className = 'key-tooltip';
  tooltip.textContent = key.name;
  
  // Add icon to top face
  keyTop.appendChild(keyIcon);
  
  // Add all elements to key - with improved structure
  keyElement.appendChild(keyTop);
  keyElement.appendChild(keyRightEdge);
  keyElement.appendChild(keyLeftEdge);
  keyElement.appendChild(keyBottomEdge);
  keyElement.appendChild(keyBackEdge);
  keyElement.appendChild(tooltip);
  
  // Add event listeners with enhanced effects
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
  
  // Enhanced 3D press effect
  keyElement.style.transform = 'translateY(2px) translateZ(0)';
  
  // Adjust shadow on press for more realism
  const shadow = keyElement.querySelector('.key-shadow');
  if (shadow) {
    shadow.style.opacity = '0.15';
    shadow.style.transform = 'translateY(1px) scale(0.75, 0.5)';
    shadow.style.filter = 'blur(3px)';
  }
  
  // Reset after animation completes
  setTimeout(() => {
    keyElement.style.transform = '';
    if (shadow) {
      shadow.style.opacity = '';
      shadow.style.transform = '';
      shadow.style.filter = '';
    }
    keyElement.classList.remove('key-pressed');
  }, 200);
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

// Enhanced but simplified tilt effect 
function addKeyboardTiltEffect() {
  const keyboard = document.getElementById('tech-keyboard');
  if (!keyboard) return;
  
  keyboard.addEventListener('mousemove', (e) => {
    const rect = keyboard.getBoundingClientRect();
    
    // Calculate relative position within keyboard
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate tilt - more subtle for better stability
    const tiltX = -((y / rect.height - 0.5) * 6); 
    const tiltY = (x / rect.width - 0.5) * 6;
    
    // Apply tilt with smooth transition - starting from 20 degrees
    keyboard.style.transform = `rotateX(${20 + tiltX}deg) rotateY(${tiltY}deg) scale(0.9)`;
  });
  
  // Reset tilt when mouse leaves
  keyboard.addEventListener('mouseleave', () => {
    keyboard.style.transform = 'rotateX(20deg) rotateY(0deg) scale(0.9)';
  });
}
