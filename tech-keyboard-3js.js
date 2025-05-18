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
  
  // Check if Three.js is properly loaded
  if (typeof THREE === 'undefined') {
    console.error('ERROR: Three.js is not loaded. Please check script includes.');
    // Try to load Three.js directly
    const threeScript = document.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r132/three.min.js';
    threeScript.onload = () => {
      console.log('Three.js loaded dynamically');
      loadOrbitControls();
    };
    document.head.appendChild(threeScript);
  } else {
    console.log('Three.js is loaded correctly');
    // Initialize with a slight delay to ensure all dependencies are ready
    setTimeout(initTechKeyboard3D, 100);
  }
  
  // Helper function to load OrbitControls if needed
  function loadOrbitControls() {
    if (typeof THREE.OrbitControls === 'undefined') {
      console.log('Loading OrbitControls');
      const orbitScript = document.createElement('script');
      orbitScript.src = 'https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/controls/OrbitControls.js';
      orbitScript.onload = () => {
        console.log('OrbitControls loaded dynamically');
        setTimeout(initTechKeyboard3D, 100);
      };
      document.head.appendChild(orbitScript);
    } else {
      setTimeout(initTechKeyboard3D, 100);
    }
  }
});

// Main initialization function for the 3D keyboard
function initTechKeyboard3D() {
  console.log('Initializing 3D Keyboard...');
  
  // Category colors
  const categoryColors = {
    frontend: 0x38BDF8,  // Blue
    backend: 0x4ADE80,   // Green
    tools: 0xC084FC,     // Purple
    concepts: 0xFB7185   // Red
  };
  
  // Get container element
  const container = document.getElementById('tech-keyboard-container');
  if (!container) {
    console.error('ERROR: Tech keyboard container not found!');
    return;
  }
  
  console.log('Container found:', container);
  console.log('Container dimensions:', container.offsetWidth, 'x', container.offsetHeight);
  
  // Initialize Three.js
  let scene, camera, renderer, controls;
  let keyboard = new THREE.Group();
  let hoveredKey = null;
  let techObjects = new Map();
  
  // Setup scene, camera, renderer, lights, etc.
  setupScene();
  
  // Create keyboard base and keys
  createKeyboardBase();
  createKeyboardKeys();
  
  // Setup interaction
  setupRaycaster();
  
  // Start animation loop
  animate(0);
  
  // Add window resize handler
  window.addEventListener('resize', handleResize);
  
  // Start demo animation after a delay
  setTimeout(randomKeyAnimation, 2000);
  
  // Setup scene function
  function setupScene() {
    console.log('Setting up scene');
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0c12);
    
    // Create renderer with antialiasing
    renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    
    console.log('Renderer created');
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit for performance
    
    // Check if renderer was created successfully
    if (!renderer.domElement) {
      console.error('Failed to create WebGL renderer');
      return;
    }
    
    // Force the canvas to be visible
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.borderRadius = '50px';
    container.appendChild(renderer.domElement);
    console.log('Canvas added to container');
    
    // Create camera
    camera = new THREE.PerspectiveCamera(
      35, // Slightly wider field of view for better keyboard visibility
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    
    // Position camera to better show the tighter key layout
    camera.position.set(0, 12, 20);  // Adjusted position for better view
    
    // Add camera controls if OrbitControls is available
    if (typeof THREE.OrbitControls !== 'undefined') {
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.screenSpacePanning = false;
      controls.minDistance = 10;
      controls.maxDistance = 50;
      controls.maxPolarAngle = Math.PI / 2;
      controls.target.set(0, 0, -2);  // Look at the center of the keyboard
    } else {
      console.warn('OrbitControls not available');
    }
    
    // Add enhanced lighting for more realistic appearance
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    // Key lighting from front
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 15, 20);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    // Accent lighting for keyboard glow
    const pointLight = new THREE.PointLight(0x64ffda, 0.6);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);
    
    // Add subtle side lighting for depth
    const rightLight = new THREE.PointLight(0x6236FF, 0.3);
    rightLight.position.set(15, 5, 0);
    scene.add(rightLight);
    
    const leftLight = new THREE.PointLight(0x38BDF8, 0.3);
    leftLight.position.set(-15, 5, 0);
    scene.add(leftLight);
  }
  
  function createKeyboardBase() {
    // Create a wider and deeper base to properly fit all keys
    const baseWidth = 24;  // Adjusted width to fit keys tightly
    const baseDepth = 14;  // Adjusted depth for better proportion
    const baseThickness = 0.8;  // Thicker for better appearance
    
    // Create base with significantly more rounded corners for keyboard look
    try {
      // Main keyboard plate with very rounded corners (much rounder than before)
      const baseGeometry = new THREE.BoxGeometry(baseWidth, baseThickness, baseDepth);
      const baseMaterial = new THREE.MeshPhongMaterial({
        color: 0x111111,
        specular: 0x333333,
        shininess: 30
      });
      
      const base = new THREE.Mesh(baseGeometry, baseMaterial);
      base.position.y = -0.8;  // Lower position so keys sit on top properly
      
      // Add chamfered edges to simulate rounded corners
      const chamferAmount = 1.5; // Much larger chamfer for very rounded look
      
      // Create rounded corners with cylinder geometry for top edges
      const edgeRadius = 1.0; // Larger radius for more obvious rounding
      const cylinderMaterial = new THREE.MeshPhongMaterial({
        color: 0x111111,
        specular: 0x333333,
        shininess: 30
      });
      
      // Add cylinders to create rounded edges at the four corners (top face)
      const topCorners = [
        {x: baseWidth/2 - edgeRadius, z: baseDepth/2 - edgeRadius}, // top right
        {x: -baseWidth/2 + edgeRadius, z: baseDepth/2 - edgeRadius}, // top left
        {x: baseWidth/2 - edgeRadius, z: -baseDepth/2 + edgeRadius}, // bottom right
        {x: -baseWidth/2 + edgeRadius, z: -baseDepth/2 + edgeRadius} // bottom left
      ];
      
      topCorners.forEach(corner => {
        const sphereGeom = new THREE.SphereGeometry(edgeRadius, 16, 16, 0, Math.PI*2, 0, Math.PI/2);
        const cornerSphere = new THREE.Mesh(sphereGeom, cylinderMaterial);
        cornerSphere.position.set(corner.x, -0.5, corner.z);
        keyboard.add(cornerSphere);
      });
      
      keyboard.add(base);
      
      // Add glow effect with rounded shape
      const glowGeometry = new THREE.BoxGeometry(baseWidth + 0.6, 0.1, baseDepth + 0.6);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x64ffda,
        transparent: true,
        opacity: 0.12
      });
      
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.position.y = -0.1;
      keyboard.add(glow);
      
      // Bottom part with rounded corners for better appearance
      const bottomGeometry = new THREE.BoxGeometry(baseWidth - 1, 1.2, baseDepth - 1);
      const bottomMaterial = new THREE.MeshPhongMaterial({
        color: 0x0a0a0a
      });
      
      const bottom = new THREE.Mesh(bottomGeometry, bottomMaterial);
      bottom.position.y = -1.4;
      keyboard.add(bottom);
      
    } catch (e) {
      console.error("Error creating keyboard base:", e);
      
      // Fallback to simple geometry if error occurs
      const baseGeometry = new THREE.BoxGeometry(baseWidth, baseThickness, baseDepth);
      const baseMaterial = new THREE.MeshPhongMaterial({
        color: 0x111111,
        specular: 0x333333,
        shininess: 30
      });
      
      const base = new THREE.Mesh(baseGeometry, baseMaterial);
      base.position.y = -0.8;
      keyboard.add(base);
      
      // Add simple bottom
      const bottomGeometry = new THREE.BoxGeometry(baseWidth - 1, 1.2, baseDepth - 1);
      const bottomMaterial = new THREE.MeshPhongMaterial({
        color: 0x0a0a0a
      });
      
      const bottom = new THREE.Mesh(bottomGeometry, bottomMaterial);
      bottom.position.y = -1.4;
      keyboard.add(bottom);
    }
    
    // Add keyboard to scene
    scene.add(keyboard);
  }
  
  function createKeyboardKeys() {
    // Key dimensions - smaller for more realistic layout
    const keyCap = {
      width: 1.6,   // Narrower keys to fit closer together
      height: 0.6,  // Standard height
      depth: 1.6    // Consistent square proportion
    };
    
    // Much tighter spacing between keys - like a real keyboard
    const spacing = {
      x: 1.7,       // Much tighter horizontal spacing
      z: 1.7        // Much tighter vertical spacing
    };
    
    // Calculate total width needed for proper centering
    const rowSizes = techKeyboard.map(row => row.keys.length);
    const maxKeysInRow = Math.max(...rowSizes);
    const totalWidth = maxKeysInRow * spacing.x;
    
    // Calculate starting position for better centering
    const startPos = {
      x: -((maxKeysInRow - 1) * spacing.x) / 2,  // Center the keyboard more precisely
      z: -3.5                                    // Position keys more centrally on keyboard
    };
    
    // Create rows with proper keyboard staggering
    techKeyboard.forEach((row, rowIndex) => {
      // Row staggering mimicking a real keyboard layout
      let rowOffset = 0;
      switch(rowIndex) {
        case 0: rowOffset = 0;    break; // Top row
        case 1: rowOffset = 0.25; break; // Second row (slightly shifted)
        case 2: rowOffset = 0.5;  break; // Third row (more shifted)
        case 3: rowOffset = 0.75; break; // Fourth row (even more shifted)
        case 4: rowOffset = 1.0;  break; // Bottom row (most shifted)
      }
      
      // Calculate how much to center this specific row
      const keysInRow = row.keys.length;
      const rowWidth = keysInRow * spacing.x;
      const rowCentering = (totalWidth - rowWidth) / 2;
      
      // Special treatment for the concept keys row
      if (rowIndex === 4) {
        // Make concept keys bigger with more even spacing
        const conceptKeyWidth = 2.2;  // Wider keys for concepts but not too wide
        const conceptKeyGap = 0.3;    // Small gap between concept keys
        const conceptSpacing = conceptKeyWidth + conceptKeyGap;
        
        // Position concept keys centrally
        const totalConceptWidth = (row.keys.length * conceptKeyWidth) + ((row.keys.length - 1) * conceptKeyGap);
        const conceptStartX = -totalConceptWidth / 2;
        
        // Create each concept key
        row.keys.forEach((tech, keyIndex) => {
          const xPos = conceptStartX + (keyIndex * conceptSpacing) + (conceptKeyWidth / 2);
          const zPos = startPos.z + (rowIndex * spacing.z * 1.1); // Extra vertical space
          
          // Create larger, more prominent keys for concepts
          const keyObj = createKey(tech, xPos, 0, zPos, conceptKeyWidth, keyCap.height * 1.2, conceptKeyWidth);
          keyboard.add(keyObj);
          
          techObjects.set(tech.id, {
            object: keyObj,
            data: tech,
            position: new THREE.Vector3(xPos, 0, zPos)
          });
        });
      } 
      else {
        // Standard rows with proper staggering and centering
        row.keys.forEach((tech, keyIndex) => {
          // Calculate key position with more precise centering
          const rowCenter = (maxKeysInRow - keysInRow) * spacing.x / 2;
          const xPos = startPos.x + rowCenter + (keyIndex * spacing.x) + rowOffset;
          const zPos = startPos.z + (rowIndex * spacing.z);
          
          // Create standard keys
          const keyObj = createKey(tech, xPos, 0, zPos, keyCap.width, keyCap.height, keyCap.depth);
          keyboard.add(keyObj);
          
          techObjects.set(tech.id, {
            object: keyObj,
            data: tech,
            position: new THREE.Vector3(xPos, 0, zPos)
          });
        });
      }
    });
  }
  
  function createKey(tech, x, y, z, width, height, depth) {
    // Create key group
    const keyGroup = new THREE.Group();
    keyGroup.position.set(x, y, z);
    keyGroup.userData = { tech };
    
    // Get category color
    const keyColor = categoryColors[tech.category] || 0x64ffda;
    
    // Add a lighting effect based on category
    const lightColor = new THREE.Color(keyColor);
    lightColor.convertSRGBToLinear();  // Enhance color vibrancy
    
    // Create key cap with improved shape - much rounder edges
    let keyGeometry;
    
    try {
      // Try to create box with significantly more rounded edges
      keyGeometry = new THREE.BoxGeometry(width, height, depth);
      
      // Add rounded corners with a special technique for THREE.js
      const radiusSegments = 5;  // More segments for smoother rounding
      const cornerRadius = width * 0.15; // More pronounced rounding (15% of width)
      
      // Create chamfered edges if available
      if (typeof THREE.ChamferBox !== 'undefined') {
        keyGeometry = new THREE.ChamferBox(width, height, depth, cornerRadius, radiusSegments);
      }
    } catch (e) {
      console.log('Using standard box geometry');
      keyGeometry = new THREE.BoxGeometry(width, height, depth);
    }
    
    // Create materials with better appearance
    const keyMaterial = new THREE.MeshPhongMaterial({
      color: keyColor,
      specular: 0xffffff,
      shininess: 70,     // More shine
      flatShading: false
    });
    
    const keyCap = new THREE.Mesh(keyGeometry, keyMaterial);
    keyCap.position.y = height / 2;
    keyGroup.add(keyCap);
    
    // Add key icon with improved size and position
    loadTexture(tech.icon, (texture) => {
      const iconSize = width * 0.65;  // Slightly larger icon
      const iconGeometry = new THREE.PlaneGeometry(iconSize, iconSize);
      const iconMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
      });
      
      const icon = new THREE.Mesh(iconGeometry, iconMaterial);
      icon.position.y = height + 0.02;  // Just above the key
      icon.rotation.x = -Math.PI / 2;   // Lay flat on top of key
      keyGroup.add(icon);
    });
    
    return keyGroup;
  }
  
  // Create rounded box geometry
  function createRoundedBox(width, height, depth, radius) {
    // Use built-in BoxGeometry as fallback
    return new THREE.BoxGeometry(width, height, depth);
  }
  
  // Helper function to load textures
  function loadTexture(url, callback) {
    new THREE.TextureLoader().load(
      url,
      callback,
      undefined,
      (err) => console.error('Error loading texture', err)
    );
  }
  
  // Setup interaction
  function setupRaycaster() {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    // Mouse move event
    container.addEventListener('mousemove', (event) => {
      // Calculate mouse position
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Update raycaster
      raycaster.setFromCamera(mouse, camera);
      
      // Find intersections
      const intersects = raycaster.intersectObjects(keyboard.children, true);
      
      // Reset previous hover
      if (hoveredKey) {
        resetKeyAnimation(hoveredKey);
        hoveredKey = null;
        container.style.cursor = 'default';
      }
      
      // Check for new hover
      if (intersects.length > 0) {
        const keyObj = findParentWithUserData(intersects[0].object);
        
        if (keyObj) {
          hoveredKey = keyObj;
          animateKeyHover(hoveredKey);
          container.style.cursor = 'pointer';
          
          // Show tech details
          showTechDetails(keyObj.userData.tech);
        }
      }
    });
    
    // Click event
    container.addEventListener('click', () => {
      if (hoveredKey) {
        animateKeyPress(hoveredKey);
        playKeyPressSound();
      }
    });
    
    // Helper to find parent with tech data
    function findParentWithUserData(object) {
      let current = object;
      while (current !== null) {
        if (current.userData && current.userData.tech) {
          return current;
        }
        current = current.parent;
      }
      return null;
    }
  }
  
  // Animate hover effect
  function animateKeyHover(keyObj) {
    if (typeof gsap !== 'undefined') {
      gsap.to(keyObj.position, {
        y: 0.4,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(keyObj.rotation, {
        x: -0.1,
        z: 0.05,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      // Fallback if GSAP is not available
      keyObj.position.y = 0.4;
      keyObj.rotation.x = -0.1;
      keyObj.rotation.z = 0.05;
    }
  }
  
  // Reset animation
  function resetKeyAnimation(keyObj) {
    if (typeof gsap !== 'undefined') {
      gsap.to(keyObj.position, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(keyObj.rotation, {
        x: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      // Fallback if GSAP is not available
      keyObj.position.y = 0;
      keyObj.rotation.x = 0;
      keyObj.rotation.z = 0;
    }
  }
  
  // Key press animation
  function animateKeyPress(keyObj) {
    if (typeof gsap !== 'undefined') {
      gsap.timeline()
        .to(keyObj.position, {
          y: -0.2,
          duration: 0.05,
          ease: "power1.in"
        })
        .to(keyObj.position, {
          y: 0.4,
          duration: 0.1,
          ease: "power1.out"
        });
    } else {
      // Simple animation without GSAP
      keyObj.position.y = -0.2;
      setTimeout(() => {
        keyObj.position.y = 0.4;
      }, 50);
    }
  }
  
  // Show tech details
  function showTechDetails(tech) {
    const panel = document.getElementById('tech-detail-panel');
    if (!panel) return;
    
    // Update panel content
    const icon = panel.querySelector('.tech-detail-icon');
    if (icon) icon.src = tech.icon;
    
    const name = panel.querySelector('.tech-detail-name');
    if (name) name.textContent = tech.name;
    
    const category = panel.querySelector('.tech-detail-category');
    if (category) {
      category.textContent = getCategoryName(tech.category);
      category.style.backgroundColor = getCategoryColor(tech.category, 0.1);
      category.style.color = getCategoryColor(tech.category);
    }
    
    const description = panel.querySelector('.tech-detail-description');
    if (description) description.textContent = tech.description;
    
    const experience = panel.querySelector('.tech-detail-experience');
    if (experience) experience.textContent = tech.experience;
    
    // Show panel
    panel.classList.add('active');
  }
  
  // Random key animation
  function randomKeyAnimation() {
    const techValues = Array.from(techObjects.values());
    if (techValues.length === 0) return;
    
    const randomTech = techValues[Math.floor(Math.random() * techValues.length)];
    animateKeyPress(randomTech.object);
    showTechDetails(randomTech.data);
    playKeyPressSound();
    
    // Schedule next animation
    setTimeout(randomKeyAnimation, 3000 + Math.random() * 2000);
  }
  
  // Window resize handler
  function handleResize() {
    if (camera && renderer) {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
  }
  
  // Play key sound
  function playKeyPressSound() {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Create sound
      const clickOsc = audioContext.createOscillator();
      const clickGain = audioContext.createGain();
      
      clickOsc.connect(clickGain);
      clickGain.connect(audioContext.destination);
      
      clickOsc.type = 'triangle';
      clickOsc.frequency.value = 2000 + Math.random() * 500;
      clickGain.gain.value = 0.03;
      
      clickOsc.start();
      clickGain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.08);
      clickOsc.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      // Silently fail if audio is not supported
    }
  }
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    // Update controls if available
    if (controls) controls.update();
    
    // Add subtle floating movement
    keyboard.position.y = Math.sin(Date.now() * 0.0005) * 0.1;
    
    // Render scene
    renderer.render(scene, camera);
  }
  
  // Helper for category name
  function getCategoryName(category) {
    const categories = {
      'frontend': 'Frontend Development',
      'backend': 'Backend Development',
      'tools': 'Developer Tools',
      'concepts': 'Professional Skills'
    };
    return categories[category] || category;
  }
  
  // Helper for category color
  function getCategoryColor(category, opacity = '') {
    const colors = {
      'frontend': `#38BDF8`,
      'backend': `#4ADE80`,
      'tools': `#C084FC`,
      'concepts': `#FB7185`
    };
    
    const color = colors[category] || '#64FFDA';
    
    if (opacity !== '') {
      // Convert hex to rgba
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    
    return color;
  }
}
