/**
 * Interactive Canvas Background for Hero Section
 * Creates dynamic, animated elements that respond to user interaction
 */

class HeroCanvas {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.lines = [];
    this.mouse = { x: null, y: null, radius: 100 };
    this.isInitialized = false;
    this.animationId = null;
    this.mouseTimeout = null;
    this.accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#64ffda';
    this.accentRGB = this.hexToRgb(this.accentColor) || { r: 100, g: 255, b: 218 };
    this.particleCount = this.getParticleCount();
    this.lastTime = 0;
    this.activeArea = { top: 0, left: 0, right: 0, bottom: 0 };
    this.resizeTimeout = null;
    this.isVisible = true;
    
    // Performance optimizations
    this.skipFrames = 0;
    this.maxSkipFrames = 2;
    this.frameCount = 0;
  }
  
  init() {
    if (this.isInitialized) return;
    this.isInitialized = true;
    
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;
    
    // Set up canvas styling
    this.canvas.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
    `;
    
    // Insert canvas before the first child to keep it behind content
    if (heroSection.firstChild) {
      heroSection.insertBefore(this.canvas, heroSection.firstChild);
    } else {
      heroSection.appendChild(this.canvas);
    }
    
    // Set initial canvas size and properties
    this.resizeCanvas();
    this.setActiveArea();
    this.createParticles();
    
    // Add event listeners
    window.addEventListener('resize', this.handleResize.bind(this));
    window.addEventListener('mousemove', this.handleMouseMove.bind(this));
    window.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: true });
    window.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
    
    // Set up intersection observer to pause animation when not visible
    this.setupVisibilityObserver();
    
    // Start animation
    this.animate(0);
    
    // Log initialization success
    console.log('Hero canvas background initialized');
  }
  
  getParticleCount() {
    const width = window.innerWidth;
    
    // Adjust particle count based on screen width
    if (width <= 480) return 30;
    if (width <= 768) return 50;
    if (width <= 1024) return 80;
    return 100;
  }
  
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
  handleResize() {
    // Use debounce to avoid excessive resizing
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.resizeCanvas();
      this.setActiveArea();
      this.particleCount = this.getParticleCount();
      
      // Regenerate particles when resizing
      this.particles = [];
      this.createParticles();
    }, 200);
  }
  
  handleMouseMove(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
    
    // Clear timeout and set new one
    clearTimeout(this.mouseTimeout);
    this.mouseTimeout = setTimeout(() => {
      this.mouse.x = null;
      this.mouse.y = null;
    }, 5000);
  }
  
  handleTouchMove(e) {
    if (e.touches.length > 0) {
      this.mouse.x = e.touches[0].clientX;
      this.mouse.y = e.touches[0].clientY;
      
      // Prevent scrolling when interacting with canvas
      if (e.target === this.canvas) {
        e.preventDefault();
      }
      
      // Clear timeout and set new one
      clearTimeout(this.mouseTimeout);
      this.mouseTimeout = setTimeout(() => {
        this.mouse.x = null;
        this.mouse.y = null;
      }, 3000); // Shorter timeout for touch
    }
  }
  
  handleTouchStart(e) {
    if (e.touches.length > 0) {
      this.mouse.x = e.touches[0].clientX;
      this.mouse.y = e.touches[0].clientY;
    }
  }
  
  setupVisibilityObserver() {
    // Use Intersection Observer to detect when hero section is visible
    if ('IntersectionObserver' in window) {
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          this.isVisible = entry.isIntersecting;
          
          if (this.isVisible && !this.animationId) {
            // Restart animation if it was paused
            this.animate(0);
          }
          // Animation will pause naturally when not visible in the next frame
        });
      }, { threshold: 0.1 });
      
      observer.observe(heroSection);
    }
  }
  
  resizeCanvas() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;
    
    const { width, height } = heroSection.getBoundingClientRect();
    
    // Set canvas dimensions accounting for pixel ratio
    const pixelRatio = window.devicePixelRatio || 1;
    this.canvas.width = width * pixelRatio;
    this.canvas.height = height * pixelRatio;
    
    // Scale context according to pixel ratio for sharp rendering
    this.ctx.scale(pixelRatio, pixelRatio);
    
    // Make sure the display size matches the viewport size
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
  }
  
  setActiveArea() {
    // Calculate the area where particles should be most active
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;
    
    const rect = heroSection.getBoundingClientRect();
    this.activeArea = {
      left: rect.width * 0.1,
      right: rect.width * 0.9,
      top: rect.height * 0.1,
      bottom: rect.height * 0.9
    };
  }
  
  createParticles() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;
    
    const rect = heroSection.getBoundingClientRect();
    const { width, height } = rect;
    
    // Create particles
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        color: this.getParticleColor(i)
      });
    }
  }
  
  getParticleColor(index) {
    // Create a gradient of colors from accent color to a darker version
    const ratio = index / this.particleCount;
    const { r, g, b } = this.accentRGB;
    
    // Create variations of the accent color
    if (ratio < 0.3) {
      // Light particles (accent color)
      return `rgba(${r}, ${g}, ${b}, 0.6)`;
    } else if (ratio < 0.7) {
      // Medium particles (slightly darker)
      const dr = Math.max(0, r - 40);
      const dg = Math.max(0, g - 40);
      const db = Math.max(0, b - 40);
      return `rgba(${dr}, ${dg}, ${db}, 0.5)`;
    } else {
      // Dark particles (much darker)
      const dr = Math.max(0, r - 80);
      const dg = Math.max(0, g - 80);
      const db = Math.max(0, b - 80);
      return `rgba(${dr}, ${dg}, ${db}, 0.4)`;
    }
  }
  
  animate(timestamp) {
    // Skip animation if not visible
    if (!this.isVisible) {
      this.animationId = null;
      return;
    }
    
    // Calculate delta time for smooth animation
    const delta = timestamp - this.lastTime;
    this.lastTime = timestamp;
    
    // Performance optimization - skip frames on low-end devices
    this.frameCount++;
    if (this.skipFrames > 0 && this.frameCount % (this.skipFrames + 1) !== 0) {
      this.animationId = requestAnimationFrame(this.animate.bind(this));
      return;
    }
    
    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width / window.devicePixelRatio, this.canvas.height / window.devicePixelRatio);
    
    // Update and draw particles
    this.updateParticles(delta);
    this.drawConnections();
    
    // Request next frame
    this.animationId = requestAnimationFrame(this.animate.bind(this));
  }
  
  updateParticles(delta) {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;
    
    const rect = heroSection.getBoundingClientRect();
    const { width, height } = rect;
    
    // Normalize delta time (60fps = 1)
    const normalizedDelta = delta / 16.67;
    
    this.particles.forEach(particle => {
      // Move particles
      particle.x += particle.speedX * normalizedDelta;
      particle.y += particle.speedY * normalizedDelta;
      
      // Wrap particles around the screen
      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;
      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;
      
      // Mouse interaction if mouse is active
      if (this.mouse.x != null && this.mouse.y != null) {
        // Calculate distance from mouse
        const dx = this.mouse.x - particle.x;
        const dy = this.mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Apply force if within radius
        if (distance < this.mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (this.mouse.radius - distance) / this.mouse.radius;
          
          // Push particles away from mouse
          particle.x -= forceDirectionX * force * 2 * normalizedDelta;
          particle.y -= forceDirectionY * force * 2 * normalizedDelta;
        }
      }
      
      // Draw particle
      this.ctx.fillStyle = particle.color;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }
  
  drawConnections() {
    // Only draw connections between nearby particles
    for (let i = 0; i < this.particles.length; i++) {
      const particle1 = this.particles[i];
      
      for (let j = i + 1; j < this.particles.length; j++) {
        const particle2 = this.particles[j];
        
        // Calculate distance between particles
        const dx = particle1.x - particle2.x;
        const dy = particle1.y - particle2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only connect particles that are close to each other
        if (distance < 100) {
          // Calculate opacity based on distance
          const opacity = 1 - distance / 100;
          const { r, g, b } = this.accentRGB;
          
          // Draw line
          this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.2})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.beginPath();
          this.ctx.moveTo(particle1.x, particle1.y);
          this.ctx.lineTo(particle2.x, particle2.y);
          this.ctx.stroke();
        }
      }
    }
  }
  
  // Public method to detect device capabilities and optimize performance
  optimizeForDevice() {
    // Detect if device is low-end
    const isLowEnd = 
      window.navigator.deviceMemory <= 4 || // Low memory (4GB or less)
      window.navigator.hardwareConcurrency <= 4 || // 4 cores or less
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // Mobile device
    
    if (isLowEnd) {
      // Reduce particle count by 50%
      this.particleCount = Math.floor(this.particleCount * 0.5);
      this.particles = this.particles.slice(0, this.particleCount);
      
      // Skip frames
      this.skipFrames = this.maxSkipFrames;
      
      // Reduce connection distance
      this.connectionDistance = 80;
      
      console.log('Optimized canvas for low-end device');
    }
    
    // Additional optimization for very low-end devices
    if (window.navigator.deviceMemory <= 2) {
      this.particleCount = Math.floor(this.particleCount * 0.5);
      this.particles = this.particles.slice(0, this.particleCount);
      this.skipFrames = this.maxSkipFrames + 1;
      console.log('Further optimized canvas for very low-end device');
    }
  }
  
  // Cleanup method to prevent memory leaks
  cleanup() {
    // Stop animation
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    
    // Remove event listeners
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('touchstart', this.handleTouchStart);
    
    // Remove canvas
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    
    // Clear data
    this.particles = [];
    this.lines = [];
    this.isInitialized = false;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const heroCanvas = new HeroCanvas();
  
  // Delay initialization slightly to ensure the hero section is rendered
  setTimeout(() => {
    heroCanvas.init();
    
    // Optimize performance based on device capabilities
    setTimeout(() => {
      heroCanvas.optimizeForDevice();
    }, 200);
    
    // Store instance in window for debugging
    window.heroCanvas = heroCanvas;
  }, 500);
});
