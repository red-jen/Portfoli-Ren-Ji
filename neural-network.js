/**
 * Neural Tech Network Visualization
 * Represents tech skills as an interactive neural network in the brain
 */

// Tech data structure with metadata
const techSkills = [
  // Frontend core skills
  {
    id: "html",
    name: "HTML5",
    category: "frontend",
    type: "core",
    strength: 0.9,
    description: "Semantic markup for modern web applications",
    experience: "Advanced • 2+ years",
    color: "#E44D26",
    connections: ["css", "javascript", "accessibility", "svg"]
  },
  {
    id: "css",
    name: "CSS3",
    category: "frontend", 
    type: "core",
    strength: 0.9,
    description: "Styling and responsive design for web interfaces",
    experience: "Advanced • 2+ years",
    color: "#264DE4",
    connections: ["html", "tailwind", "animations", "svg"]
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    type: "core",
    strength: 0.9,
    description: "Dynamic programming for interactive web experiences",
    experience: "Advanced • 2+ years",
    color: "#F7DF1E", 
    connections: ["html", "css", "react", "typescript", "dom", "npm"]
  },
  
  // Frontend frameworks
  {
    id: "react",
    name: "React",
    category: "frontend",
    type: "framework",
    strength: 0.75,
    description: "UI library for building component-based interfaces",
    experience: "Intermediate • 1+ year",
    color: "#61DAFB",
    connections: ["javascript", "tailwind", "hooks", "components"]
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    type: "framework",
    strength: 0.85,
    description: "Utility-first CSS framework for rapid development",
    experience: "Advanced • 1.5+ years",
    color: "#38B2AC",
    connections: ["css", "react", "design"]
  },
  
  // Frontend concepts
  {
    id: "accessibility",
    name: "Accessibility",
    category: "frontend",
    type: "concept",
    strength: 0.7,
    description: "Creating inclusive web experiences for all users",
    experience: "Practiced regularly",
    color: "#13AA52",
    connections: ["html", "dom"]
  },
  {
    id: "animations",
    name: "Animations",
    category: "frontend",
    type: "concept",
    strength: 0.8,
    description: "Creating engaging motion and transitions",
    experience: "Practiced regularly",
    color: "#F48024",
    connections: ["css", "javascript"]
  },
  {
    id: "dom",
    name: "DOM",
    category: "frontend",
    type: "concept",
    strength: 0.8,
    description: "Document Object Model manipulation",
    experience: "Advanced understanding",
    color: "#FF9A00",
    connections: ["javascript", "html", "accessibility"]
  },
  {
    id: "components",
    name: "Components",
    category: "frontend",
    type: "concept",
    strength: 0.75,
    description: "Reusable, composable UI elements",
    experience: "Practiced regularly",
    color: "#F44250",
    connections: ["react", "design"]
  },
  {
    id: "hooks",
    name: "React Hooks",
    category: "frontend",
    type: "concept",
    strength: 0.7,
    description: "Functional component state and lifecycle",
    experience: "Intermediate understanding",
    color: "#53C1DE",
    connections: ["react", "javascript"]
  },
  
  // Backend core
  {
    id: "php",
    name: "PHP",
    category: "backend",
    type: "core",
    strength: 0.9,
    description: "Server-side scripting language for web development",
    experience: "Advanced • 2+ years",
    color: "#777BB4",
    connections: ["mysql", "laravel", "api", "composer"]
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "backend",
    type: "core",
    strength: 0.8,
    description: "Relational database management system",
    experience: "Intermediate • 1.5+ years",
    color: "#4479A1",
    connections: ["php", "postgresql", "data-modeling", "sql"]
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "backend",
    type: "database",
    strength: 0.7,
    description: "Advanced open-source relational database",
    experience: "Intermediate • 1+ year",
    color: "#336791",
    connections: ["mysql", "php", "data-modeling"]
  },
  
  // Backend frameworks
  {
    id: "laravel",
    name: "Laravel",
    category: "backend",
    type: "framework",
    strength: 0.8,
    description: "PHP framework with expressive, elegant syntax",
    experience: "Intermediate • 1+ year",
    color: "#FF2D20",
    connections: ["php", "mvc", "mysql", "composer"]
  },
  
  // Backend concepts
  {
    id: "api",
    name: "RESTful API",
    category: "backend",
    type: "concept",
    strength: 0.8,
    description: "Creating and consuming web services",
    experience: "Practiced regularly",
    color: "#0096D6",
    connections: ["php", "json", "architecture"]
  },
  {
    id: "sql",
    name: "SQL",
    category: "backend",
    type: "concept",
    strength: 0.8,
    description: "Structured query language for databases",
    experience: "Advanced understanding",
    color: "#FFD700",
    connections: ["mysql", "postgresql", "data-modeling"]
  },
  {
    id: "mvc",
    name: "MVC Pattern",
    category: "backend",
    type: "concept",
    strength: 0.75,
    description: "Model-View-Controller architecture",
    experience: "Practiced regularly",
    color: "#68A063",
    connections: ["laravel", "architecture"]
  },
  {
    id: "data-modeling",
    name: "Data Modeling",
    category: "backend",
    type: "concept",
    strength: 0.7,
    description: "Designing database schemas and relationships",
    experience: "Practiced regularly",
    color: "#00758F",
    connections: ["mysql", "postgresql", "sql", "architecture"]
  },
  
  // Tools
  {
    id: "git",
    name: "Git",
    category: "tools",
    type: "core",
    strength: 0.9,
    description: "Distributed version control system",
    experience: "Advanced • 2+ years",
    color: "#F05032",
    connections: ["github", "terminal", "collaboration"]
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    type: "platform",
    strength: 0.9,
    description: "Hosting platform for Git repositories",
    experience: "Advanced • 2+ years",
    color: "#181717",
    connections: ["git", "collaboration"]
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    type: "environment",
    strength: 0.9,
    description: "Code editor with integrated developer tools",
    experience: "Advanced • 2+ years",
    color: "#007ACC",
    connections: ["git", "npm", "terminal"]
  },
  {
    id: "composer",
    name: "Composer",
    category: "tools",
    type: "package-manager",
    strength: 0.8,
    description: "Dependency manager for PHP",
    experience: "Intermediate • 1+ year",
    color: "#885630",
    connections: ["php", "laravel"]
  },
  {
    id: "npm",
    name: "NPM",
    category: "tools",
    type: "package-manager",
    strength: 0.8,
    description: "Package manager for JavaScript",
    experience: "Intermediate • 1.5+ years",
    color: "#CB3837",
    connections: ["javascript", "vscode"]
  },
  
  // Cross-cutting concepts
  {
    id: "architecture",
    name: "Architecture",
    category: "concept",
    type: "cross-cutting",
    strength: 0.7,
    description: "Software design patterns and principles",
    experience: "Growing expertise",
    color: "#3C873A",
    connections: ["mvc", "data-modeling", "api"]
  },
  {
    id: "design",
    name: "UI Design",
    category: "concept",
    type: "cross-cutting",
    strength: 0.7,
    description: "Creating visually appealing interfaces",
    experience: "Growing expertise",
    color: "#FF7C00",
    connections: ["tailwind", "components", "animations"]
  },
  {
    id: "collaboration",
    name: "Collaboration",
    category: "concept",
    type: "soft-skill",
    strength: 0.85,
    description: "Working effectively in teams",
    experience: "Strong interpersonal skills",
    color: "#6236FF",
    connections: ["git", "github", "communication"]
  },
  {
    id: "communication",
    name: "Communication",
    category: "concept",
    type: "soft-skill",
    strength: 0.85,
    description: "Clearly conveying ideas and concepts",
    experience: "Strong interpersonal skills",
    color: "#00B4D8",
    connections: ["collaboration", "problem-solving"]
  },
  {
    id: "problem-solving",
    name: "Problem Solving",
    category: "concept",
    type: "soft-skill",
    strength: 0.9,
    description: "Finding innovative solutions to challenges",
    experience: "Core strength",
    color: "#7209B7",
    connections: ["communication", "architecture"]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Add console logging for debugging
  console.log("DOM loaded, initializing neural network");
  
  // Make sure we wait a bit for all resources to be properly loaded
  setTimeout(() => {
    initNeuralNetwork();
  }, 500);
  
  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initNeuralNetwork, 300);
  }, { passive: true });
});

function initNeuralNetwork() {
  // Get container element
  const container = document.getElementById('neural-tech-network');
  if (!container) {
    console.error("Container element 'neural-tech-network' not found!");
    return;
  }
  
  console.log("Container found, dimensions:", container.offsetWidth, "x", container.offsetHeight);
  
  // Create canvas
  let canvas = document.getElementById('neural-canvas');
  if (!canvas) {
    console.log("Creating new canvas element");
    canvas = document.createElement('canvas');
    canvas.id = 'neural-canvas';
    container.appendChild(canvas);
  }
  
  // Set canvas dimensions
  const rect = container.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  console.log("Canvas dimensions set to:", canvas.width, "x", canvas.height);
  
  // Create info panel
  let infoPanel = document.getElementById('neural-info-panel');
  if (!infoPanel) {
    console.log("Creating info panel");
    infoPanel = document.createElement('div');
    infoPanel.id = 'neural-info-panel';
    infoPanel.className = 'neural-info-panel';
    container.appendChild(infoPanel);
  }
  
  // Create legend
  createLegend(container);
  
  // Initialize the network
  try {
    console.log("Initializing network");
    const network = new NeuralNetwork(canvas, infoPanel);
    network.initialize();
    console.log("Network initialized successfully");
  } catch (error) {
    console.error("Error initializing network:", error);
  }
}

function createLegend(container) {
  let legend = document.getElementById('neural-legend');
  if (!legend) {
    legend = document.createElement('div');
    legend.id = 'neural-legend';
    legend.className = 'neural-legend';
    
    const categories = [
      { name: "Frontend", color: "#38BDF8" },
      { name: "Backend", color: "#4ADE80" },
      { name: "Tools", color: "#C084FC" },
      { name: "Concepts", color: "#FB7185" }
    ];
    
    categories.forEach(cat => {
      const item = document.createElement('div');
      item.className = 'legend-item';
      
      const dot = document.createElement('span');
      dot.className = 'legend-dot';
      dot.style.backgroundColor = cat.color;
      
      const text = document.createElement('span');
      text.className = 'legend-text';
      text.textContent = cat.name;
      
      item.appendChild(dot);
      item.appendChild(text);
      legend.appendChild(item);
    });
    
    container.appendChild(legend);
  }
}

class NeuralNetwork {
  constructor(canvas, infoPanel) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.infoPanel = infoPanel;
    this.width = canvas.width;
    this.height = canvas.height;
    this.nodes = [];
    this.connections = [];
    this.hoveredNode = null;
    this.selectedNode = null;
    this.animationFrame = null;
    this.brainRegions = {
      frontend: { x: this.width * 0.3, y: this.height * 0.35, radius: this.width * 0.2 },
      backend: { x: this.width * 0.7, y: this.height * 0.35, radius: this.width * 0.2 },
      tools: { x: this.width * 0.5, y: this.height * 0.7, radius: this.width * 0.15 },
      concept: { x: this.width * 0.5, y: this.height * 0.5, radius: this.width * 0.25 }
    };
    this.categoryColors = {
      frontend: '#38BDF8',
      backend: '#4ADE80',
      tools: '#C084FC',
      concept: '#FB7185'
    };
    this.pulseTimer = 0;
    this.signalParticles = [];
  }
  
  initialize() {
    // Create the nodes from tech data
    this.createNodes();
    
    // Create connections between nodes
    this.createConnections();
    
    // Add interaction event listeners
    this.addEventListeners();
    
    // Start the animation
    this.animate();
  }
  
  createNodes() {
    this.nodes = techSkills.map(tech => {
      // Determine position based on category and randomize within brain region
      const region = this.brainRegions[tech.category] || this.brainRegions.concept;
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * region.radius * 0.8;
      
      // Calculate position with some randomness
      const x = region.x + Math.cos(angle) * distance;
      const y = region.y + Math.sin(angle) * distance;
      
      // Set base node size by strength
      const baseSize = 6 + (tech.strength * 10);
      
      return {
        id: tech.id,
        name: tech.name,
        category: tech.category,
        type: tech.type,
        description: tech.description,
        experience: tech.experience,
        strength: tech.strength,
        color: tech.color,
        connections: tech.connections,
        x,
        y,
        targetX: x,
        targetY: y,
        baseSize,
        currentSize: baseSize,
        hovered: false,
        selected: false,
        velocity: { x: 0, y: 0 },
        angle: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.1, // Orbit speed
        glowIntensity: 0,
        glowTargetIntensity: 0,
        pulsePhase: Math.random() * Math.PI * 2,
        categoryColor: this.categoryColors[tech.category]
      };
    });
  }
  
  createConnections() {
    this.connections = [];
    
    // Create bidirectional connections
    this.nodes.forEach(source => {
      if (!source.connections) return;
      
      source.connections.forEach(targetId => {
        const target = this.nodes.find(node => node.id === targetId);
        if (target) {
          this.connections.push({
            source,
            target,
            strength: (source.strength + target.strength) / 2,
            active: false,
            particles: [],
            pulsePhase: Math.random() * Math.PI * 2,
            color: this.blendColors(source.categoryColor, target.categoryColor, 0.5)
          });
        }
      });
    });
  }
  
  addEventListeners() {
    // Mouse move for hover detection
    this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this), { passive: true });
    
    // Click for node selection
    this.canvas.addEventListener('click', this.handleClick.bind(this), { passive: true });
    
    // Touch support
    this.canvas.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
    this.canvas.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: true });
    this.canvas.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
  }
  
  handleMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Check if mouse is over any node
    const hoveredNode = this.findNodeAtPosition(mouseX, mouseY);
    
    if (this.hoveredNode !== hoveredNode) {
      // Update hover states
      if (this.hoveredNode) {
        this.hoveredNode.hovered = false;
        this.hoveredNode.glowTargetIntensity = 0;
      }
      
      this.hoveredNode = hoveredNode;
      
      if (this.hoveredNode) {
        this.hoveredNode.hovered = true;
        this.hoveredNode.glowTargetIntensity = 1;
        this.canvas.style.cursor = 'pointer';
      } else {
        this.canvas.style.cursor = 'default';
      }
    }
  }
  
  handleClick(e) {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Find clicked node
    const clickedNode = this.findNodeAtPosition(mouseX, mouseY);
    
    // Update selection
    if (this.selectedNode) {
      this.selectedNode.selected = false;
      
      // Reset all connections
      this.connections.forEach(conn => {
        conn.active = false;
      });
    }
    
    this.selectedNode = clickedNode === this.selectedNode ? null : clickedNode;
    
    if (this.selectedNode) {
      this.selectedNode.selected = true;
      this.updateInfoPanel(this.selectedNode);
      
      // Activate connections for selected node
      this.connections.forEach(conn => {
        if (conn.source === this.selectedNode || conn.target === this.selectedNode) {
          conn.active = true;
          
          // Create particles for active connections
          this.createConnectionParticles(conn);
        }
      });
    } else {
      this.hideInfoPanel();
    }
  }
  
  handleTouchStart(e) {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = this.canvas.getBoundingClientRect();
      const touchX = touch.clientX - rect.left;
      const touchY = touch.clientY - rect.top;
      
      // Find touched node
      const touchedNode = this.findNodeAtPosition(touchX, touchY);
      
      if (touchedNode) {
        // Update hover and selection
        this.hoveredNode = touchedNode;
        touchedNode.hovered = true;
        touchedNode.glowTargetIntensity = 1;
      }
    }
  }
  
  handleTouchMove(e) {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = this.canvas.getBoundingClientRect();
      const touchX = touch.clientX - rect.left;
      const touchY = touch.clientY - rect.top;
      
      // Find touched node
      const touchedNode = this.findNodeAtPosition(touchX, touchY);
      
      if (this.hoveredNode !== touchedNode) {
        // Reset previous hover
        if (this.hoveredNode) {
          this.hoveredNode.hovered = false;
          this.hoveredNode.glowTargetIntensity = 0;
        }
        
        this.hoveredNode = touchedNode;
        
        if (touchedNode) {
          touchedNode.hovered = true;
          touchedNode.glowTargetIntensity = 1;
        }
      }
    }
  }
  
  handleTouchEnd() {
    // Handle selection similar to click
    if (this.hoveredNode) {
      // Update selection
      if (this.selectedNode) {
        this.selectedNode.selected = false;
        
        // Reset connections
        this.connections.forEach(conn => {
          conn.active = false;
        });
      }
      
      this.selectedNode = this.hoveredNode === this.selectedNode ? null : this.hoveredNode;
      
      if (this.selectedNode) {
        this.selectedNode.selected = true;
        this.updateInfoPanel(this.selectedNode);
        
        // Activate connections
        this.connections.forEach(conn => {
          if (conn.source === this.selectedNode || conn.target === this.selectedNode) {
            conn.active = true;
            this.createConnectionParticles(conn);
          }
        });
      } else {
        this.hideInfoPanel();
      }
    }
    
    // Reset hover state
    if (this.hoveredNode) {
      this.hoveredNode.hovered = false;
      this.hoveredNode.glowTargetIntensity = 0;
      this.hoveredNode = null;
    }
  }
  
  findNodeAtPosition(x, y) {
    // Find node under the cursor with larger hit area
    return this.nodes.find(node => {
      const dx = node.x - x;
      const dy = node.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance <= node.currentSize + 5; // Add 5px padding for easier selection
    });
  }
  
  updateInfoPanel(node) {
    // Show and populate info panel
    this.infoPanel.innerHTML = `
      <div class="neural-info-header" style="background-color: ${node.color}">
        <h3>${node.name}</h3>
        <div class="neural-info-badge">${node.category.charAt(0).toUpperCase() + node.category.slice(1)}</div>
      </div>
      <div class="neural-info-content">
        <div class="neural-info-exp">${node.experience}</div>
        <p>${node.description}</p>
        <div class="neural-info-connections">
          <h4>Connections</h4>
          <div class="neural-connection-list">
            ${this.getConnectionNames(node).map(name => 
              `<span class="neural-connection-chip">${name}</span>`
            ).join('')}
          </div>
        </div>
      </div>
    `;
    
    // Show the panel with animation
    this.infoPanel.classList.add('active');
  }
  
  hideInfoPanel() {
    this.infoPanel.classList.remove('active');
  }
  
  getConnectionNames(node) {
    // Get names of connected nodes
    return node.connections.map(connId => {
      const connNode = this.nodes.find(n => n.id === connId);
      return connNode ? connNode.name : '';
    }).filter(Boolean);
  }
  
  createConnectionParticles(connection) {
    // Reset particles
    connection.particles = [];
    
    // Generate particles
    const count = 3 + Math.floor(Math.random() * 3); // 3-5 particles
    
    for (let i = 0; i < count; i++) {
      connection.particles.push({
        position: Math.random(), // Position along the line (0 to 1)
        speed: 0.003 + Math.random() * 0.005, // Speed of particle
        size: 1.5 + Math.random() * 2,
        alpha: 0.6 + Math.random() * 0.4
      });
    }
  }
  
  animate() {
    this.updateNetwork();
    this.renderNetwork();
    this.animationFrame = requestAnimationFrame(() => this.animate());
  }
  
  updateNetwork() {
    this.pulseTimer += 0.01;
    
    // Update nodes
    this.nodes.forEach(node => {
      // Update node size with easing for hover/selection effects
      const targetSize = node.baseSize * (node.selected ? 1.4 : (node.hovered ? 1.2 : 1));
      node.currentSize += (targetSize - node.currentSize) * 0.1;
      
      // Update glow intensity with easing
      node.glowIntensity += (node.glowTargetIntensity - node.glowIntensity) * 0.1;
      
      // Add subtle orbital motion
      if (!node.selected && !node.hovered) {
        const region = this.brainRegions[node.category] || this.brainRegions.concept;
        node.angle += node.speed / 100;
        const orbitDistance = region.radius * 0.5 * node.strength;
        
        node.targetX = region.x + Math.cos(node.angle) * orbitDistance;
        node.targetY = region.y + Math.sin(node.angle) * orbitDistance;
        
        // Move towards target position with easing
        node.x += (node.targetX - node.x) * 0.02;
        node.y += (node.targetY - node.y) * 0.02;
      }
      
      // Update pulse effect
      node.pulsePhase += 0.03;
    });
    
    // Update connections
    this.connections.forEach(conn => {
      // Update pulse phase
      conn.pulsePhase += 0.03;
      
      // Update particles if connection is active
      if (conn.active) {
        conn.particles.forEach(particle => {
          particle.position += particle.speed;
          if (particle.position > 1) particle.position = 0;
        });
      }
    });
    
    // Generate new signal particles occasionally
    if (Math.random() < 0.02) {
      this.createRandomSignalParticle();
    }
    
    // Update signal particles
    this.updateSignalParticles();
  }
  
  createRandomSignalParticle() {
    // Select random active connection
    const activeConnections = this.connections.filter(conn => conn.active);
    if (activeConnections.length > 0) {
      const randomConn = activeConnections[Math.floor(Math.random() * activeConnections.length)];
      
      // Create signal particle
      this.signalParticles.push({
        connection: randomConn,
        position: 0,
        speed: 0.01 + Math.random() * 0.02,
        size: 3 + Math.random() * 3,
        alpha: 0.7 + Math.random() * 0.3,
        color: randomConn.color
      });
    }
  }
  
  updateSignalParticles() {
    // Update signal particles
    for (let i = this.signalParticles.length - 1; i >= 0; i--) {
      const particle = this.signalParticles[i];
      particle.position += particle.speed;
      
      // Remove if completed
      if (particle.position > 1) {
        this.signalParticles.splice(i, 1);
      }
    }
  }
  
  renderNetwork() {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    // Draw brain regions (subtle)
    this.drawBrainRegions();
    
    // Draw inactive connections first
    this.connections.forEach(conn => {
      if (!conn.active) {
        this.drawConnection(conn);
      }
    });
    
    // Draw active connections on top
    this.connections.forEach(conn => {
      if (conn.active) {
        this.drawConnection(conn);
      }
    });
    
    // Draw signal particles
    this.drawSignalParticles();
    
    // Draw nodes on top
    this.nodes.forEach(node => {
      // Draw inactive nodes
      if (!node.selected && !node.hovered) {
        this.drawNode(node);
      }
    });
    
    // Draw hovered nodes on top of inactive ones
    this.nodes.forEach(node => {
      if (!node.selected && node.hovered) {
        this.drawNode(node);
      }
    });
    
    // Draw selected node on top of everything
    this.nodes.forEach(node => {
      if (node.selected) {
        this.drawNode(node);
      }
    });
  }
  
  drawBrainRegions() {
    // Draw subtle brain region backgrounds
    for (const category in this.brainRegions) {
      const region = this.brainRegions[category];
      const color = this.categoryColors[category];
      
      // Create gradient
      const gradient = this.ctx.createRadialGradient(
        region.x, region.y, 0,
        region.x, region.y, region.radius
      );
      
      gradient.addColorStop(0, color + '10'); // 6% opacity
      gradient.addColorStop(0.7, color + '05'); // 3% opacity
      gradient.addColorStop(1, 'transparent');
      
      this.ctx.beginPath();
      this.ctx.fillStyle = gradient;
      this.ctx.arc(region.x, region.y, region.radius, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Draw pulsing ring
      const ringRadius = region.radius * (0.8 + Math.sin(this.pulseTimer + parseInt(category.charCodeAt(0))) * 0.1);
      this.ctx.beginPath();
      this.ctx.strokeStyle = color + '15'; // 10% opacity
      this.ctx.lineWidth = 1;
      this.ctx.arc(region.x, region.y, ringRadius, 0, Math.PI * 2);
      this.ctx.stroke();
    }
  }
  
  drawNode(node) {
    const { x, y, currentSize, color, glowIntensity, pulsePhase, categoryColor } = node;
    
    // Draw glow effect if hovered or selected
    if (glowIntensity > 0) {
      const glowSize = currentSize * 2.5;
      const gradient = this.ctx.createRadialGradient(x, y, currentSize, x, y, glowSize);
      gradient.addColorStop(0, categoryColor + Math.floor(glowIntensity * 50).toString(16).padStart(2, '0'));
      gradient.addColorStop(1, categoryColor + '00');
      
      this.ctx.beginPath();
      this.ctx.fillStyle = gradient;
      this.ctx.arc(x, y, glowSize, 0, Math.PI * 2);
      this.ctx.fill();
    }
    
    // Draw node background
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    
    // Add subtle pulse effect
    const pulseEffect = Math.sin(pulsePhase) * 0.1 + 0.9;
    const finalSize = node.selected ? currentSize : currentSize * pulseEffect;
    
    this.ctx.arc(x, y, finalSize, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Add ring for selected nodes
    if (node.selected) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = categoryColor;
      this.ctx.lineWidth = 2;
      this.ctx.arc(x, y, finalSize + 3, 0, Math.PI * 2);
      this.ctx.stroke();
      
      // Add expanding pulse ring
      const ringPhase = (Date.now() % 3000) / 3000;
      const ringRadius = finalSize + ringPhase * 20;
      const ringOpacity = 0.5 - ringPhase * 0.5; // Fade out as it expands
      
      this.ctx.beginPath();
      this.ctx.strokeStyle = categoryColor + Math.floor(ringOpacity * 255).toString(16).padStart(2, '0');
      this.ctx.lineWidth = 1;
      this.ctx.arc(x, y, ringRadius, 0, Math.PI * 2);
      this.ctx.stroke();
    }
  }
  
  drawConnection(conn) {
    const { source, target, active, pulsePhase, color } = conn;
    
    // Get positions
    const x1 = source.x;
    const y1 = source.y;
    const x2 = target.x;
    const y2 = target.y;
    
    // Calculate distance
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Calculate direction
    const dirX = dx / distance;
    const dirY = dy / distance;
    
    // Calculate start and end points (offset by node size)
    const startX = x1 + dirX * source.currentSize;
    const startY = y1 + dirY * source.currentSize;
    const endX = x2 - dirX * target.currentSize;
    const endY = y2 - dirY * target.currentSize;
    
    // Determine connection opacity
    const baseOpacity = active ? 0.5 : 0.1;
    const pulseOpacity = active ? 0.2 * Math.sin(pulsePhase) + 0.8 : 1;
    const finalOpacity = baseOpacity * pulseOpacity;
    
    // Draw main connection line
    this.ctx.beginPath();
    this.ctx.strokeStyle = color + Math.floor(finalOpacity * 255).toString(16).padStart(2, '0');
    this.ctx.lineWidth = active ? 1.5 : 0.5;
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(endX, endY);
    this.ctx.stroke();
    
    // Draw particles on active connections
    if (active) {
      conn.particles.forEach(particle => {
        const particleX = startX + (endX - startX) * particle.position;
        const particleY = startY + (endY - startY) * particle.position;
        
        // Draw particle
        const gradient = this.ctx.createRadialGradient(
          particleX, particleY, 0,
          particleX, particleY, particle.size * 3
        );
        
        gradient.addColorStop(0, color + 'FF');
        gradient.addColorStop(0.5, color + '80');
        gradient.addColorStop(1, color + '00');
        
        this.ctx.beginPath();
        this.ctx.fillStyle = gradient;
        this.ctx.arc(particleX, particleY, particle.size * 3, 0, Math.PI * 2);
        this.ctx.fill();
      });
    }
  }
  
  drawSignalParticles() {
    // Draw signal particles
    this.signalParticles.forEach(particle => {
      const { connection, position, size, color } = particle;
      
      const startX = connection.source.x;
      const startY = connection.source.y;
      const endX = connection.target.x;
      const endY = connection.target.y;
      
      // Calculate particle position
      const particleX = startX + (endX - startX) * position;
      const particleY = startY + (endY - startY) * position;
      
      // Draw particle with glow
      const gradient = this.ctx.createRadialGradient(
        particleX, particleY, 0,
        particleX, particleY, size * 2
      );
      
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, color + '00');
      
      this.ctx.beginPath();
      this.ctx.fillStyle = gradient;
      this.ctx.arc(particleX, particleY, size * 2, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Draw bright core
      this.ctx.beginPath();
      this.ctx.fillStyle = '#FFFFFF';
      this.ctx.arc(particleX, particleY, size * 0.5, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }
  
  blendColors(color1, color2, ratio) {
    // Convert hex to RGB
    const r1 = parseInt(color1.substr(1, 2), 16);
    const g1 = parseInt(color1.substr(3, 2), 16);
    const b1 = parseInt(color1.substr(5, 2), 16);
    
    const r2 = parseInt(color2.substr(1, 2), 16);
    const g2 = parseInt(color2.substr(3, 2), 16);
    const b2 = parseInt(color2.substr(5, 2), 16);
    
    // Blend colors
    const r = Math.round(r1 * (1 - ratio) + r2 * ratio);
    const g = Math.round(g1 * (1 - ratio) + g2 * ratio);
    const b = Math.round(b1 * (1 - ratio) + b2 * ratio);
    
    // Convert back to hex
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }
}