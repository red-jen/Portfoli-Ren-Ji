/**
 * Tech Circuit Visualization
 * Creates an interactive electricity-inspired tech stack visualization
 */

// Define technology data with details
const techData = [
    // Frontend Technologies
    {
        id: "html5",
        name: "HTML5",
        category: "frontend",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        experience: "Advanced • 2+ years",
        description: "Semantic markup for modern web applications",
        connections: ["css3", "javascript"],
        color: "#E34F26",
        glowColor: "#38bdf8",
        size: 50,
        charge: 1
    },
    {
        id: "css3",
        name: "CSS3",
        category: "frontend",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        experience: "Advanced • 2+ years",
        description: "Styling and responsive design for web interfaces",
        connections: ["html5", "tailwind", "javascript"],
        color: "#1572B6",
        glowColor: "#38bdf8",
        size: 50,
        charge: 1
    },
    {
        id: "javascript",
        name: "JavaScript",
        category: "frontend",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        experience: "Advanced • 2+ years",
        description: "Dynamic programming for interactive web experiences",
        connections: ["html5", "css3", "react", "php"],
        color: "#F7DF1E",
        glowColor: "#38bdf8",
        size: 55,
        charge: 1.2
    },
    {
        id: "react",
        name: "React",
        category: "frontend",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        experience: "Intermediate • 1+ year",
        description: "UI library for building component-based interfaces",
        connections: ["javascript", "tailwind"],
        color: "#61DAFB",
        glowColor: "#38bdf8",
        size: 48,
        charge: 0.9
    },
    {
        id: "tailwind",
        name: "Tailwind CSS",
        category: "frontend",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        experience: "Advanced • 1.5+ years",
        description: "Utility-first CSS framework for rapid development",
        connections: ["css3", "react"],
        color: "#06B6D4",
        glowColor: "#38bdf8",
        size: 45,
        charge: 0.8
    },
    
    // Backend Technologies
    {
        id: "php",
        name: "PHP",
        category: "backend",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        experience: "Advanced • 2+ years",
        description: "Server-side scripting language for web development",
        connections: ["mysql", "laravel", "postgresql", "javascript", "composer"],
        color: "#777BB4",
        glowColor: "#4ade80",
        size: 55,
        charge: 1.2
    },
    {
        id: "laravel",
        name: "Laravel",
        category: "backend",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
        experience: "Intermediate • 1+ year",
        description: "PHP framework with expressive, elegant syntax",
        connections: ["php", "mysql", "composer"],
        color: "#FF2D20",
        glowColor: "#4ade80",
        size: 48,
        charge: 0.9
    },
    {
        id: "mysql",
        name: "MySQL",
        category: "backend",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        experience: "Intermediate • 1.5+ years",
        description: "Relational database management system",
        connections: ["php", "laravel", "postgresql"],
        color: "#4479A1",
        glowColor: "#4ade80",
        size: 48,
        charge: 0.9
    },
    {
        id: "postgresql",
        name: "PostgreSQL",
        category: "backend",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        experience: "Intermediate • 1+ year",
        description: "Advanced open-source relational database",
        connections: ["php", "mysql"],
        color: "#336791",
        glowColor: "#4ade80",
        size: 46,
        charge: 0.8
    },
    {
        id: "postman",
        name: "Postman",
        category: "backend",
        image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        experience: "Intermediate • 1.5+ years",
        description: "API development and testing platform",
        connections: ["php", "laravel"],
        color: "#FF6C37",
        glowColor: "#4ade80",
        size: 45,
        charge: 0.8
    },
    
    // Tools
    {
        id: "git",
        name: "Git",
        category: "tools",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        experience: "Advanced • 2+ years",
        description: "Distributed version control system",
        connections: ["github", "vscode"],
        color: "#F05032",
        glowColor: "#c084fc",
        size: 48,
        charge: 1
    },
    {
        id: "github",
        name: "GitHub",
        category: "tools",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        experience: "Advanced • 2+ years",
        description: "Hosting platform for Git repositories",
        connections: ["git"],
        color: "#181717",
        glowColor: "#c084fc",
        size: 45,
        charge: 0.9
    },
    {
        id: "vscode",
        name: "VS Code",
        category: "tools",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        experience: "Advanced • 2+ years",
        description: "Code editor with integrated developer tools",
        connections: ["git", "npm"],
        color: "#007ACC",
        glowColor: "#c084fc",
        size: 48,
        charge: 1
    },
    {
        id: "composer",
        name: "Composer",
        category: "tools",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg",
        experience: "Intermediate • 1+ year",
        description: "Dependency manager for PHP",
        connections: ["php", "laravel"],
        color: "#885630",
        glowColor: "#c084fc",
        size: 45,
        charge: 0.8
    },
    {
        id: "npm",
        name: "NPM",
        category: "tools",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        experience: "Intermediate • 1.5+ years",
        description: "Package manager for JavaScript",
        connections: ["javascript", "vscode"],
        color: "#CB3837",
        glowColor: "#c084fc",
        size: 45,
        charge: 0.8
    }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Start visualization after a small delay to ensure DOM is ready
    setTimeout(initTechCircuit, 200);
    
    // Handle window resize with debounce
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(initTechCircuit, 300);
    }, { passive: true });
});

// Initialize tech circuit visualization
function initTechCircuit() {
    const canvas = document.getElementById('tech-circuit');
    if (!canvas) return;
    
    const container = canvas.parentElement;
    const tooltip = document.getElementById('tech-tooltip');
    
    // Set canvas dimensions
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    // Get 2D rendering context
    const ctx = canvas.getContext('2d');
    
    // Create nodes from tech data
    const nodes = createTechNodes();
    
    // Initialize physics simulation
    const simulation = initSimulation(nodes);
    
    // Start animation loop
    animateCircuit();
    
    // Add interactivity
    addInteraction();
    
    // Create tech nodes from data
    function createTechNodes() {
        return techData.map(tech => {
            // Create image element for tech icon
            const img = new Image();
            img.src = tech.image;
            
            // Calculate initial position - more spread out initial positions
            const angle = Math.random() * Math.PI * 2;
            const distance = 150 + Math.random() * 180; // Increased distance from center
            
            return {
                id: tech.id,
                name: tech.name,
                category: tech.category,
                image: img,
                experience: tech.experience,
                description: tech.description,
                connections: tech.connections,
                color: tech.color,
                glowColor: tech.glowColor,
                size: tech.size,
                charge: tech.charge,
                x: canvas.width / 2 + Math.cos(angle) * distance,
                y: canvas.height / 2 + Math.sin(angle) * distance,
                vx: Math.random() * 0.2 - 0.1,
                vy: Math.random() * 0.2 - 0.1,
                hovered: false,
                related: false, // New property to track related nodes
                pulsePhase: Math.random() * Math.PI * 2
            };
        });
    }
    
    // Initialize physics simulation with modified parameters
    function initSimulation(nodes) {
        // Create links between nodes
        const links = [];
        nodes.forEach(node => {
            if (!node.connections) return;
            
            node.connections.forEach(targetId => {
                const targetNode = nodes.find(n => n.id === targetId);
                if (targetNode) {
                    links.push({
                        source: node,
                        target: targetNode,
                        strength: 0.035, // Reduced strength for gentler connections
                        distance: node.size + targetNode.size + 90, // Increased distance between nodes
                        // Add properties for electricity effect - slower particles
                        particles: Array(3).fill().map(() => ({
                            pos: Math.random(),
                            speed: 0.005 + Math.random() * 0.01, // Reduced speed by ~50%
                            size: 1 + Math.random() * 2,
                            alpha: 0.7 + Math.random() * 0.3
                        })),
                        pulseOffset: Math.random() * Math.PI * 2,
                        pulseSpeed: 0.02 + Math.random() * 0.02, // Slower pulse
                        highlighted: false, // Track if this connection is highlighted
                        highlightTransition: 0 // Transition factor for smooth highlighting
                    });
                }
            });
        });
        
        // Return simulation object with adjusted physics parameters
        return {
            nodes,
            links,
            // Physics configuration - better balanced for clarity
            centerForce: 0.00006, // Gentler center force
            repulsion: 500, // More repulsion for clearer separation
            linkForce: 0.025, // Gentler link force
            damping: 0.8, // More damping for stability
            time: 0
        };
    }
    
    // Animation loop
    function animateCircuit() {
        requestAnimationFrame(animateCircuit);
        updateSimulation();
        renderCircuit();
        simulation.time += 0.016; // Approx 16ms per frame
    }
    
    // Update physics simulation
    function updateSimulation() {
        const { nodes, links, centerForce, repulsion, linkForce, damping } = simulation;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        // Apply forces to each node
        nodes.forEach(node => {
            // Center gravity force
            const dx = centerX - node.x;
            const dy = centerY - node.y;
            const distanceToCenter = Math.sqrt(dx * dx + dy * dy);
            
            // Apply center force - stronger when far from center
            const centerFactor = 1 + (distanceToCenter > 300 ? (distanceToCenter - 300) * 0.001 : 0);
            node.vx += dx * centerForce * centerFactor;
            node.vy += dy * centerForce * centerFactor;
            
            // Add slight pull toward category clusters - more defined clusters
            const categoryAngle = node.category === 'frontend' ? -Math.PI / 3 :
                                 node.category === 'backend' ? Math.PI / 3 : Math.PI;
            const clusterRadius = Math.min(canvas.width, canvas.height) * 0.32; // Larger cluster radius
            const clusterX = centerX + Math.cos(categoryAngle) * clusterRadius;
            const clusterY = centerY + Math.sin(categoryAngle) * clusterRadius;
            
            // Category attraction adjusted based on highlighted status
            const clusterForce = (node.hovered || node.related) ? 0.0001 : 0.0002;
            node.vx += (clusterX - node.x) * clusterForce;
            node.vy += (clusterY - node.y) * clusterForce;
            
            // Apply repulsion between nodes
            nodes.forEach(otherNode => {
                if (node === otherNode) return;
                
                const dx = node.x - otherNode.x;
                const dy = node.y - otherNode.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDistance = node.size + otherNode.size + 25; // Larger minimum distance
                
                if (distance < 280) { // Increased repulsion range
                    const force = repulsion / (distance * distance);
                    const dirX = dx / distance;
                    const dirY = dy / distance;
                    
                    node.vx += dirX * force * node.charge;
                    node.vy += dirY * force * node.charge;
                    
                    // Strong repulsion to prevent overlap
                    if (distance < minDistance) {
                        const overlapForce = (minDistance - distance) * 0.1; // Enhanced overlap prevention
                        node.vx += dirX * overlapForce;
                        node.vy += dirY * overlapForce;
                    }
                }
            });
            
            // Apply damping (friction)
            node.vx *= damping;
            node.vy *= damping;
            
            // Update position
            node.x += node.vx;
            node.y += node.vy;
            
            // Boundary collision - softer boundaries
            const margin = node.size + 15; // Increased margin
            const boundaryForce = 0.15; // Softer bounce
            
            if (node.x < margin) {
                node.x = margin;
                node.vx *= -boundaryForce;
            }
            if (node.x > canvas.width - margin) {
                node.x = canvas.width - margin;
                node.vx *= -boundaryForce;
            }
            if (node.y < margin) {
                node.y = margin;
                node.vy *= -boundaryForce;
            }
            if (node.y > canvas.height - margin) {
                node.y = canvas.height - margin;
                node.vy *= -boundaryForce;
            }
            
            // Update pulse phase - slower pulsing
            node.pulsePhase += 0.03;
        });
        
        // Apply link forces and update transition states
        links.forEach(link => {
            // Smooth transition for highlights (0 to 1)
            if (link.highlighted && link.highlightTransition < 1) {
                link.highlightTransition += 0.08; // Speed of transition on
            }
            else if (!link.highlighted && link.highlightTransition > 0) {
                link.highlightTransition -= 0.04; // Speed of transition off (slower)
            }
            
            // Clamp values
            link.highlightTransition = Math.max(0, Math.min(1, link.highlightTransition));
            
            const dx = link.target.x - link.source.x;
            const dy = link.target.y - link.source.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const dirX = dx / distance;
            const dirY = dy / distance;
            
            // Spring force - adjusted dynamically based on highlight transition
            const forceFactor = 1 + link.highlightTransition * 0.7; // Up to 1.7x stronger when highlighted
            const force = (distance - link.distance) * linkForce * forceFactor;
            const forceX = dirX * force;
            const forceY = dirY * force;
            
            // Apply forces to both nodes
            link.source.vx += forceX;
            link.source.vy += forceY;
            link.target.vx -= forceX;
            link.target.vy -= forceY;
            
            // Update particles on the link - speed based on highlight transition
            const speedMultiplier = 0.8 + link.highlightTransition * 0.6; // 0.8x to 1.4x speed
            link.particles.forEach(particle => {
                particle.pos += particle.speed * speedMultiplier;
                if (particle.pos > 1) particle.pos = 0;
            });
        });
    }
    
    // Render the circuit
    function renderCircuit() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections first - non-highlighted ones
        drawConnections(false);
        
        // Draw highlighted connections on top
        drawConnections(true);
        
        // Draw electricity particles
        drawElectricity();
        
        // Draw nodes on top
        drawNodes();
    }
    
    // Draw connections between nodes with highlight support and transition
    function drawConnections(drawHighlighted) {
        simulation.links.forEach(link => {
            // Only draw links with significant highlight value matching the current draw pass
            const isHighlighted = link.highlightTransition > 0.3;
            if (isHighlighted !== drawHighlighted) return;
            
            const gradient = ctx.createLinearGradient(
                link.source.x, link.source.y, 
                link.target.x, link.target.y
            );
            
            // Get glow colors from nodes
            const sourceColor = link.source.glowColor;
            const targetColor = link.target.glowColor;
            
            // Adjust opacity based on highlight transition
            const baseOpacity = 30; // Base opacity (non-highlighted)
            const maxOpacity = 80;  // Max opacity (fully highlighted)
            const opacityValue = Math.floor(baseOpacity + link.highlightTransition * (maxOpacity - baseOpacity));
            const opacity = opacityValue.toString(16).padStart(2, '0');
            
            gradient.addColorStop(0, sourceColor + opacity);
            gradient.addColorStop(1, targetColor + opacity);
            
            // Line width based on highlight transition
            const baseWidth = 1;
            const maxWidth = 2.5;
            const lineWidth = baseWidth + link.highlightTransition * (maxWidth - baseWidth);
            
            ctx.beginPath();
            ctx.moveTo(link.source.x, link.source.y);
            ctx.lineTo(link.target.x, link.target.y);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = gradient;
            ctx.stroke();
            
            // Draw additional glow for highlighted connections based on transition
            if (link.highlightTransition > 0.2) {
                const glowOpacity = Math.floor(5 + link.highlightTransition * 20).toString(16).padStart(2, '0');
                const glowWidth = 4 + link.highlightTransition * 4;
                
                ctx.beginPath();
                ctx.moveTo(link.source.x, link.source.y);
                ctx.lineTo(link.target.x, link.target.y);
                ctx.lineWidth = glowWidth;
                ctx.strokeStyle = gradient.replace(opacity, glowOpacity);
                ctx.stroke();
            }
        });
    }
    
    // Draw electricity particles along connections
    function drawElectricity() {
        const time = simulation.time;
        
        simulation.links.forEach(link => {
            // Skip links with no highlight when some links are highlighted
            if (link.highlightTransition < 0.2 && simulation.links.some(l => l.highlightTransition > 0.5)) {
                return;
            }
            
            const dx = link.target.x - link.source.x;
            const dy = link.target.y - link.source.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Skip very short links
            if (distance < 10) return;
            
            // Adjust particle visibility based on highlight transition
            const particleAlphaMultiplier = 0.6 + link.highlightTransition * 0.9; // 0.6 to 1.5
            const particleSizeMultiplier = 0.8 + link.highlightTransition * 0.7; // 0.8 to 1.5
            
            const dirX = dx / distance;
            const dirY = dy / distance;
            
            // Slower pulse effect along the line
            const pulsePhase = time * 1.5 + link.pulseOffset; // Reduced from 2 to 1.5
            const pulseIntensity = Math.sin(pulsePhase) * 0.4 + 0.6; // 0.2-1.0 range for smoother pulsing
            
            // Get glow colors from nodes
            const sourceColor = hexToRgb(link.source.glowColor);
            const targetColor = hexToRgb(link.target.glowColor);
            
            // Draw electricity particles
            link.particles.forEach(particle => {
                // Particle position along the link
                const x = link.source.x + dx * particle.pos;
                const y = link.source.y + dy * particle.pos;
                
                // Mix colors based on particle position
                const r = Math.floor(sourceColor.r * (1 - particle.pos) + targetColor.r * particle.pos);
                const g = Math.floor(sourceColor.g * (1 - particle.pos) + targetColor.g * particle.pos);
                const b = Math.floor(sourceColor.b * (1 - particle.pos) + targetColor.b * particle.pos);
                
                // Particle alpha adjusted by pulse and link highlight
                const particleAlpha = particle.alpha * pulseIntensity * particleAlphaMultiplier;
                
                // Draw glow
                const glowSize = particle.size * 8 * particleSizeMultiplier;
                const glow = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
                glow.addColorStop(0, `rgba(${r},${g},${b},${particleAlpha})`);
                glow.addColorStop(0.6, `rgba(${r},${g},${b},${particleAlpha * 0.5})`);
                glow.addColorStop(1, `rgba(${r},${g},${b},0)`);
                
                ctx.beginPath();
                ctx.fillStyle = glow;
                ctx.arc(x, y, glowSize, 0, Math.PI * 2);
                ctx.fill();
                
                // Draw particle core
                const coreSize = particle.size * pulseIntensity * particleSizeMultiplier;
                ctx.beginPath();
                ctx.fillStyle = `rgba(${r},${g},${b},${particleAlpha * 1.5})`;
                ctx.arc(x, y, coreSize, 0, Math.PI * 2);
                ctx.fill();
            });
            
            // Less frequent lightning for a calmer effect, more when highlighted
            const baseLightningChance = link.highlighted ? 0.04 : 0.01; // Reduced rates
            const lightningChance = baseLightningChance * (1 + 3 * link.highlightTransition);
            if (Math.random() < lightningChance) {
                drawLightning(link.source.x, link.source.y, link.target.x, link.target.y, link);
            }
        });
    }
    
    // Draw lightning effect between nodes - enhanced with better gradient
    function drawLightning(x1, y1, x2, y2, link) {
        const sourceColor = link.source.glowColor;
        const targetColor = link.target.glowColor;
        
        // Average of two colors for lightning
        const lightningColor = blendColors(sourceColor, targetColor, 0.5);
        
        // Adjust opacity based on highlight transition
        const baseOpacity = 0x60; // Base opacity (non-highlighted)
        const maxOpacity = 0xDD;  // Max opacity (fully highlighted)
        const opacityValue = Math.floor(baseOpacity + link.highlightTransition * (maxOpacity - baseOpacity));
        const opacity = opacityValue.toString(16).padStart(2, '0');
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        
        // Number of segments for lightning - more segments for highlighted connections
        const baseSegments = 4; 
        const segments = baseSegments + Math.floor(link.highlightTransition * 3) + Math.floor(Math.random() * 2);
        const segmentLength = 1 / segments;
        
        // Create lightning path with dynamic randomness based on transition
        const randomFactor = 0.8 + link.highlightTransition * 0.8;
        for (let i = 1; i < segments; i++) {
            const t = i * segmentLength;
            const tx = x1 + (x2 - x1) * t;
            const ty = y1 + (y2 - y1) * t;
            
            // Add randomness to path
            const offset = 12 * Math.sin(i * Math.PI) * randomFactor;
            const nx = tx + offset * (Math.random() - 0.5);
            const ny = ty + offset * (Math.random() - 0.5);
            
            ctx.lineTo(nx, ny);
        }
        
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = lightningColor + opacity;
        ctx.lineWidth = 1.5 + link.highlightTransition * 1.5;
        ctx.stroke();
        
        // Draw glow effect
        const glowOpacity = Math.floor(20 + link.highlightTransition * 40).toString(16).padStart(2, '0');
        ctx.strokeStyle = lightningColor + glowOpacity;
        ctx.lineWidth = 4 + link.highlightTransition * 5;
        ctx.stroke();
        
        // Add bright core for highlighted lightning
        if (link.highlightTransition > 0.5) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            
            // Trace same path with a brighter, thinner line
            for (let i = 1; i < segments; i++) {
                const t = i * segmentLength;
                const tx = x1 + (x2 - x1) * t;
                const ty = y1 + (y2 - y1) * t;
                
                const offset = 12 * Math.sin(i * Math.PI) * randomFactor;
                const nx = tx + offset * (Math.random() - 0.5);
                const ny = ty + offset * (Math.random() - 0.5);
                
                ctx.lineTo(nx, ny);
            }
            
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = '#ffffff' + Math.floor(80 * link.highlightTransition).toString(16).padStart(2, '0');
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }
    
    // Draw nodes
    function drawNodes() {
        // First draw non-highlighted nodes
        simulation.nodes.forEach(node => {
            if (node.hovered || node.related) return; // Skip highlighted nodes for now
            drawNode(node, false);
        });
        
        // Then draw highlighted (hovered or related) nodes on top
        simulation.nodes.forEach(node => {
            if (node.hovered || node.related) {
                drawNode(node, true);
            }
        });
    }
    
    // Draw a single node with highlight support
    function drawNode(node, isHighlighted) {
        const { x, y, size, image, pulsePhase } = node;
        
        // Calculate pulse effect - stronger for highlighted nodes
        const pulseAmplitude = isHighlighted ? 0.15 : 0.08;
        const pulse = Math.sin(pulsePhase) * pulseAmplitude + (isHighlighted ? 1.05 : 0.95);
        
        // Draw glow around node
        const glowRadius = isHighlighted ? size * 2.0 : size * 1.5;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
        const glowColor = node.glowColor;
        
        // Stronger glow for highlighted nodes
        const innerGlowOpacity = isHighlighted ? '60' : '30';
        const outerGlowOpacity = '00';
        
        glow.addColorStop(0, glowColor + innerGlowOpacity);
        glow.addColorStop(1, glowColor + outerGlowOpacity);
        
        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw node background
        ctx.beginPath();
        ctx.fillStyle = isHighlighted ? 'rgba(17, 25, 40, 0.85)' : 'rgba(17, 25, 40, 0.6)';
        const nodeRadius = size * pulse;
        ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw border - thicker and more opaque for highlighted nodes
        ctx.beginPath();
        const borderOpacity = isHighlighted ? 'FF' : '90';
        ctx.strokeStyle = node.glowColor + borderOpacity;
        ctx.lineWidth = isHighlighted ? 3 : 1.5;
        ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw node icon - slightly larger for highlighted nodes
        if (image.complete && image.naturalWidth) {
            const iconSizeMultiplier = isHighlighted ? 1.3 : 1.1;
            const iconSize = size * iconSizeMultiplier;
            ctx.drawImage(image, x - iconSize/2, y - iconSize/2, iconSize, iconSize);
        }
        
        // Add a subtle ring animation for hovered node
        if (node.hovered) {
            const ringPhase = (simulation.time % 2) / 2; // 0 to 1 over 2 seconds
            const ringRadius = size * 2.5 * ringPhase;
            const ringOpacity = 0.7 - ringPhase * 0.7; // Fade out as it expands
            
            ctx.beginPath();
            ctx.strokeStyle = `${node.glowColor}${Math.floor(ringOpacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 2;
            ctx.arc(x, y, ringRadius, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
    
    // Add interaction with improved relationship highlighting
    function addInteraction() {
        let hoveredNode = null;
        let isDragging = false;
        let draggedNode = null;
        
        canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
        canvas.addEventListener('mousedown', handleMouseDown, { passive: true });
        canvas.addEventListener('mouseup', handleMouseUp, { passive: true });
        canvas.addEventListener('mouseleave', handleMouseLeave, { passive: true });
        canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
        canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
        canvas.addEventListener('touchend', handleTouchEnd, { passive: true });
        
        function handleMouseMove(e) {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            if (isDragging && draggedNode) {
                // Move node with cursor
                draggedNode.x = x;
                draggedNode.y = y;
                draggedNode.vx = 0;
                draggedNode.vy = 0;
                return;
            }
            
            // Check for node hover
            const prevHoveredNode = hoveredNode;
            hoveredNode = findNodeAtPosition(x, y);
            
            // If hover state changed, update relationships
            if (prevHoveredNode !== hoveredNode) {
                updateRelationships();
                renderCircuit(); // Redraw everything
            }
            
            // Update cursor style
            canvas.style.cursor = hoveredNode ? 'pointer' : 'default';
            
            // Show/update/hide tooltip
            if (hoveredNode) {
                showTooltip(hoveredNode, e.clientX, e.clientY);
            } else {
                hideTooltip();
            }
        }
        
        function handleMouseDown(e) {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            draggedNode = findNodeAtPosition(x, y);
            
            if (draggedNode) {
                isDragging = true;
                draggedNode.vx = 0;
                draggedNode.vy = 0;
            }
        }
        
        function handleMouseUp() {
            isDragging = false;
            draggedNode = null;
        }
        
        function handleMouseLeave() {
            hideTooltip();
            resetRelationships();
            hoveredNode = null;
            isDragging = false;
            draggedNode = null;
            renderCircuit();
        }
        
        function handleTouchStart(e) {
            if (e.touches.length > 0) {
                const rect = canvas.getBoundingClientRect();
                const x = e.touches[0].clientX - rect.left;
                const y = e.touches[0].clientY - rect.top;
                
                draggedNode = findNodeAtPosition(x, y);
                
                if (draggedNode) {
                    isDragging = true;
                    hoveredNode = draggedNode;
                    updateRelationships();
                    showTooltip(draggedNode, e.touches[0].clientX, e.touches[0].clientY);
                } else {
                    resetRelationships();
                }
                
                renderCircuit();
            }
        }
        
        function handleTouchMove(e) {
            if (isDragging && draggedNode && e.touches.length > 0) {
                const rect = canvas.getBoundingClientRect();
                const x = e.touches[0].clientX - rect.left;
                const y = e.touches[0].clientY - rect.top;
                
                draggedNode.x = x;
                draggedNode.y = y;
                draggedNode.vx = 0;
                draggedNode.vy = 0;
                
                updateTooltipPosition(e.touches[0].clientX, e.touches[0].clientY);
            }
        }
        
        function handleTouchEnd() {
            hideTooltip();
            resetRelationships();
            isDragging = false;
            draggedNode = null;
            hoveredNode = null;
            renderCircuit();
        }
        
        function findNodeAtPosition(x, y) {
            // Find node under the cursor
            for (let i = simulation.nodes.length - 1; i >= 0; i--) {
                const node = simulation.nodes[i];
                const dx = node.x - x;
                const dy = node.y - y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance <= node.size) {
                    return node;
                }
            }
            return null;
        }
        
        // Update which nodes and links are related to the hovered node
        function updateRelationships() {
            // Reset all relationships first but maintain transitions for smooth effects
            simulation.nodes.forEach(node => {
                if (!hoveredNode || (node !== hoveredNode && !isConnectedToHoveredNode(node))) {
                    node.hovered = false;
                    node.related = false;
                }
            });
            
            // Update link highlighting based on current hovered node
            simulation.links.forEach(link => {
                const shouldBeHighlighted = hoveredNode && 
                    (link.source === hoveredNode || link.target === hoveredNode);
                
                link.highlighted = shouldBeHighlighted;
            });
            
            // If no node is hovered, we're done
            if (!hoveredNode) return;
            
            // Mark the hovered node
            hoveredNode.hovered = true;
            
            // Mark related nodes
            simulation.nodes.forEach(node => {
                if (isConnectedToHoveredNode(node) && node !== hoveredNode) {
                    node.related = true;
                }
            });
            
            // Helper function to check if a node is connected to the hovered node
            function isConnectedToHoveredNode(node) {
                return simulation.links.some(link => 
                    (link.source === hoveredNode && link.target === node) || 
                    (link.source === node && link.target === hoveredNode)
                );
            }
        }
        
        // Reset all relationship highlights
        function resetRelationships() {
            simulation.nodes.forEach(node => {
                node.hovered = false;
                node.related = false;
            });
            
            simulation.links.forEach(link => {
                link.highlighted = false;
            });
        }
        
        function showTooltip(node, clientX, clientY) {
            tooltip.classList.add('visible');
            tooltip.classList.remove('hidden');
            
            // Set tooltip content
            const nameEl = tooltip.querySelector('.tech-tooltip-name');
            const expEl = tooltip.querySelector('.tech-tooltip-exp');
            const descEl = tooltip.querySelector('.tech-tooltip-desc');
            
            nameEl.textContent = node.name;
            expEl.textContent = node.experience;
            descEl.textContent = node.description;
            
            updateTooltipPosition(clientX, clientY);
        }
        
        function updateTooltipPosition(clientX, clientY) {
            const rect = container.getBoundingClientRect();
            const containerX = clientX - rect.left;
            const containerY = clientY - rect.top;
            
            const tooltipWidth = tooltip.offsetWidth;
            const tooltipHeight = tooltip.offsetHeight;
            
            // Position tooltip with offset
            let x = containerX + 15;
            let y = containerY - tooltipHeight - 15;
            
            // Make sure tooltip stays within bounds
            if (x + tooltipWidth > rect.width) {
                x = containerX - tooltipWidth - 15;
            }
            
            if (y < 0) {
                y = containerY + 15;
            }
            
            tooltip.style.left = `${x}px`;
            tooltip.style.top = `${y}px`;
        }
        
        function hideTooltip() {
            tooltip.classList.remove('visible');
            tooltip.classList.add('hidden');
        }
    }
    
    // Utility: Convert hex color to RGB
    function hexToRgb(hex) {
        hex = hex.replace(/^#/, '');
        const bigint = parseInt(hex, 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    }
    
    // Utility: Blend two colors
    function blendColors(color1, color2, ratio) {
        const rgb1 = hexToRgb(color1);
        const rgb2 = hexToRgb(color2);
        
        const r = Math.round(rgb1.r * (1 - ratio) + rgb2.r * ratio);
        const g = Math.round(rgb1.g * (1 - ratio) + rgb2.g * ratio);
        const b = Math.round(rgb1.b * (1 - ratio) + rgb2.b * ratio);
        
        return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
    }
}
