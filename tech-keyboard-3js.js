/**
 * Tech Keyboard Visualization with Three.js
 * High-quality 3D keyboard visualization using WebGL
 */

// Tech keyboard data structure
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
        description: "Semantic markup language for structuring web content with modern features."
      },
      { 
        id: "css3", 
        name: "CSS3",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        experience: "Advanced • 2+ years",
        description: "Styling language for defining the visual presentation of HTML documents."
      },
      { 
        id: "javascript", 
        name: "JavaScript",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        experience: "Advanced • 2+ years",
        description: "Versatile programming language that enables dynamic, interactive content."
      },
      { 
        id: "typescript", 
        name: "TypeScript",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        experience: "Intermediate • 8+ months",
        description: "Strongly typed programming language that builds on JavaScript."
      },
      { 
        id: "sass", 
        name: "Sass",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        experience: "Intermediate • 1+ year",
        description: "CSS preprocessor scripting language with variables, nested rules, and mixins."
      },
      { 
        id: "bootstrap", 
        name: "Bootstrap",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        experience: "Advanced • 2+ years",
        description: "Front-end framework with pre-built components and responsive grid system."
      }
    ]
  },
  
  // Second row - Frontend frameworks
  {
    row: 1,
    keys: [
      { 
        id: "react", 
        name: "React",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        experience: "Intermediate • 1+ year",
        description: "JavaScript library for building component-based user interfaces."
      },
      { 
        id: "vue", 
        name: "Vue.js",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        experience: "Basic • 6+ months",
        description: "Progressive JavaScript framework for building user interfaces."
      },
      { 
        id: "tailwind", 
        name: "Tailwind CSS",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        experience: "Advanced • 1.5+ years",
        description: "Utility-first CSS framework for rapidly building custom designs."
      },
      { 
        id: "gsap", 
        name: "GSAP",
        category: "frontend",
        icon: "https://cdn.cdnlogo.com/logos/g/21/gsap-greensock.svg",
        experience: "Intermediate • 1+ year",
        description: "Professional-grade animation library for complex animations."
      },
      { 
        id: "threejs", 
        name: "Three.js",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
        experience: "Basic • 4+ months",
        description: "JavaScript 3D library that makes WebGL simpler for 3D graphics."
      },
      { 
        id: "nextjs", 
        name: "Next.js",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        experience: "Basic • 3+ months",
        description: "React framework enabling server-side rendering and static site generation."
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
        description: "Server-side scripting language designed for web development."
      },
      { 
        id: "laravel", 
        name: "Laravel",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
        experience: "Intermediate • 1+ year",
        description: "PHP framework with expressive, elegant syntax for robust applications."
      },
      { 
        id: "mysql", 
        name: "MySQL",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        experience: "Intermediate • 1.5+ years",
        description: "Open-source relational database management system."
      },
      { 
        id: "postgresql", 
        name: "PostgreSQL",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        experience: "Intermediate • 1+ year",
        description: "Advanced open-source relational database with extensive features."
      },
      { 
        id: "nodejs", 
        name: "Node.js",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        experience: "Basic • 8+ months",
        description: "JavaScript runtime built on Chrome's V8 engine for server-side applications."
      },
      { 
        id: "express", 
        name: "Express.js",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        experience: "Basic • 6+ months",
        description: "Fast, unopinionated, minimalist web framework for Node.js."
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
        description: "Distributed version control system for tracking code changes."
      },
      { 
        id: "github", 
        name: "GitHub",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        experience: "Advanced • 2+ years",
        description: "Hosting platform for Git repositories with collaboration features."
      },
      { 
        id: "vscode", 
        name: "VS Code",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        experience: "Advanced • 2+ years",
        description: "Lightweight but powerful source code editor with extensive plugin support."
      },
      { 
        id: "composer", 
        name: "Composer",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg",
        experience: "Intermediate • 1+ year",
        description: "Dependency management tool for PHP."
      },
      { 
        id: "npm", 
        name: "NPM",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        experience: "Intermediate • 1.5+ years",
        description: "Default package manager for Node.js."
      },
      { 
        id: "docker", 
        name: "Docker",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        experience: "Basic • 6+ months",
        description: "Platform for developing, shipping, and running applications in containers."
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
        description: "Creating web applications that work across different screen sizes."
      },
      { 
        id: "accessibility", 
        name: "Accessibility",
        category: "concepts",
        icon: "https://cdn-icons-png.flaticon.com/512/6364/6364343.png",
        experience: "Intermediate • 1.5+ years",
        description: "Designing websites to be usable by people of all abilities."
      },
      { 
        id: "mvc", 
        name: "MVC Pattern",
        category: "concepts",
        icon: "https://cdn-icons-png.flaticon.com/512/6295/6295417.png",
        experience: "Intermediate • 1+ year",
        description: "Architecture separating Model, View, and Controller components."
      },
      { 
        id: "oop", 
        name: "OOP",
        category: "concepts",
        icon: "https://cdn-icons-png.flaticon.com/512/2166/2166823.png",
        experience: "Advanced • 2+ years",
        description: "Programming paradigm based on the concept of objects with data and code."
      }
    ]
  }
];

// Adding console logging to debug the initialization process

// Check if script is loaded
console.log('Tech keyboard script loaded');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded, checking for Three.js');
  
  // IMPORTANT: Ensure the container exists first
  const container = document.getElementById('tech-keyboard-container') || 
                   document.querySelector('.tech-keyboard-container');
                   
  if (!container) {
    console.error('ERROR: Container not found! Creating container before initializing Three.js.');
    createKeyboardContainer();
    return;
  }
  
  // Make container visible
  container.style.display = 'block';
  container.style.visibility = 'visible';
  container.style.background = '#111111';
  
  // Check if Three.js is loaded
  if (typeof THREE === 'undefined') {
    console.error('ERROR: Three.js is not loaded. Loading it now.');
    loadThreeJS();
  } else {
    console.log('Three.js is loaded correctly');
    // Initialize immediately
    initTechKeyboard3D();
  }
  
  function loadThreeJS() {
    const threeScript = document.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r132/three.min.js';
    threeScript.onload = () => {
      console.log('Three.js loaded dynamically');
      loadOrbitControls();
    };
    document.head.appendChild(threeScript);
  }
  
  // Helper function to load OrbitControls if needed
  function loadOrbitControls() {
    const orbitScript = document.createElement('script');
    orbitScript.src = 'https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/controls/OrbitControls.js';
    orbitScript.onload = () => {
      console.log('OrbitControls loaded dynamically');
      initTechKeyboard3D();
    };
    document.head.appendChild(orbitScript);
  }
});

// Main initialization function for the 3D keyboard
function initTechKeyboard3D() {
  console.log('Initializing 3D Keyboard...');
  
  // Set new colors to match the image of the keyboard
  const keyColors = {
    primary: 0xFFFFFF,  // White
    accent: 0x1E3A8A,   // Dark blue
    base: 0xFFFFFF,     // White
    shadow: 0x111111,   // Dark shadow
    brown: 0x8B4513    // Brown for key connectors
  };
  
  // Improved container lookup with debug info
  const container = document.getElementById('tech-keyboard-container') || 
                   document.querySelector('.tech-keyboard-container');
                   
  if (!container) {
    console.error('ERROR: Tech keyboard container not found at initialization time!');
    return;
  }
  
  console.log('Container found:', container);
  console.log('Container dimensions:', container.offsetWidth, 'x', container.offsetHeight);
  
  try {
    // Initialize Three.js
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111); // Dark background like in the image
    
    console.log('Scene created');
    
    // Create renderer with antialiasing
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    
    console.log('Renderer created');
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit for performance
    
    // Ensure the renderer element is visible and append it
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.innerHTML = ''; // Clear container before adding canvas
    container.appendChild(renderer.domElement);
    console.log('Canvas added to container');
    
    // Simple test cube to ensure rendering works
    const testGeometry = new THREE.BoxGeometry(5, 5, 5);
    const testMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const testCube = new THREE.Mesh(testGeometry, testMaterial);
    scene.add(testCube);
    
    // Create camera with better angle to see rounded keys
    const camera = new THREE.PerspectiveCamera(
      30, // Lower FOV for less distortion
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    
    // Position camera at an angle like in the image
    camera.position.set(0, 0, 15);
    
    // Simple animation function
    function animate() {
      requestAnimationFrame(animate);
      testCube.rotation.x += 0.01;
      testCube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
    
    console.log('Basic test scene initialized and running');
    
    // Once we confirm rendering works, we can initialize the full keyboard
    // But we'll do that after a small delay to ensure everything is ready
    setTimeout(() => {
      console.log("Initializing full keyboard");
      // Here we would call the function to create the full keyboard
    }, 1000);
    
  } catch (error) {
    console.error('Critical error in Three.js initialization:', error);
    showFallbackContent(container);
  }
}

// Simple fallback content function
function showFallbackContent(container) {
  console.log("Showing fallback content");
  container.innerHTML = `
    <div style="padding: 20px; text-align: center; color: white;">
      <h3>3D Tech Keyboard</h3>
      <p>Unable to load 3D visualization. Please ensure WebGL is supported in your browser.</p>
      <div style="width: 80%; height: 100px; background: #1a1a1a; margin: 20px auto; border-radius: 10px;"></div>
    </div>
  `;
}

// Helper function to create the keyboard container if it doesn't exist
function createKeyboardContainer() {
  console.log('Creating keyboard container');
  
  // Find a suitable parent element
  let parent = document.querySelector('.tech-stack-section');
  if (!parent) {
    parent = document.body;
    console.log('No tech-stack-section found, using body as parent');
  }
  
  // Create the container with explicit styles
  const container = document.createElement('div');
  container.id = 'tech-keyboard-container';
  container.className = 'tech-keyboard-container';
  container.style.width = '100%';
  container.style.maxWidth = '1000px';
  container.style.height = '460px';
  container.style.margin = '50px auto';
  container.style.position = 'relative';
  container.style.background = '#111111';
  container.style.borderRadius = '10px';
  container.style.overflow = 'hidden';
  container.style.display = 'block';
  container.style.visibility = 'visible';
  
  // Create detail panel as well
  const detailPanel = document.createElement('div');
  detailPanel.id = 'tech-detail-panel';
  detailPanel.className = 'tech-detail-panel';
  detailPanel.innerHTML = `
    <div class="tech-detail-inner">
      <div class="tech-detail-header">
        <img src="" alt="" class="tech-detail-icon">
        <h3 class="tech-detail-name"></h3>
      </div>
      <div class="tech-detail-category"></div>
      <p class="tech-detail-description"></p>
      <div class="tech-detail-experience"></div>
    </div>
  `;
  
  // Append to parent
  parent.appendChild(container);
  parent.appendChild(detailPanel);
  
  console.log('Container created:', container);
  return container;
}

// Helper for loading textures - with error handling
function loadTexture(url, callback) {
  new THREE.TextureLoader().load(
    url,
    callback,
    undefined,
    (err) => {
      console.error('Error loading texture:', err);
      // Provide a fallback or placeholder texture
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, 64, 64);
      
      const texture = new THREE.CanvasTexture(canvas);
      callback(texture);
    }
  );
}
