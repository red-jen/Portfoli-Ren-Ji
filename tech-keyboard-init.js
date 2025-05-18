/**
 * Tech Keyboard Initialization Script
 * This is a lightweight script to ensure the tech keyboard loads properly
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Tech keyboard init script loaded');
  
  // Check for tech keyboard container
  const container = document.getElementById('tech-keyboard-container') || 
                   document.querySelector('.tech-keyboard-container');
  
  if (!container) {
    console.warn('Tech keyboard container not found in the DOM, creating one');
    createKeyboardContainer();
  } else {
    console.log('Tech keyboard container found in the DOM');
    
    // Ensure the container is visible and has proper dimensions
    container.style.display = 'block';
    container.style.visibility = 'visible';
    
    if (container.offsetWidth < 10 || container.offsetHeight < 10) {
      console.warn('Container has zero or very small dimensions, setting explicit dimensions');
      container.style.width = '100%';
      container.style.height = '460px';
      container.style.maxWidth = '1000px';
      container.style.margin = '0 auto 5rem';
    }
  }
  
  // Check if Three.js is loaded
  if (typeof THREE === 'undefined') {
    console.warn('THREE.js not loaded, attempting to load it');
    loadThreeJS();
  } else {
    console.log('THREE.js already loaded');
  }
  
  // Create container if needed
  function createKeyboardContainer() {
    const techSection = document.querySelector('.tech-stack-section');
    
    // If there's no tech section, create one
    if (!techSection) {
      const newSection = document.createElement('section');
      newSection.className = 'tech-stack-section';
      
      // Create container structure inside section
      newSection.innerHTML = `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div class="max-w-7xl mx-auto">
            <div class="section-header text-center mb-12">
              <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">My Tech Stack</h2>
              <p class="text-gray-400 max-w-2xl mx-auto">
                These are the technologies and concepts I work with, visualized as an interactive keyboard.
              </p>
            </div>
            
            <div id="tech-keyboard-container" class="tech-keyboard-container">
              <!-- Three.js will render here -->
            </div>
            
            <div id="tech-detail-panel" class="tech-detail-panel">
              <div class="tech-detail-inner">
                <div class="tech-detail-header">
                  <img src="" alt="" class="tech-detail-icon">
                  <h3 class="tech-detail-name"></h3>
                </div>
                <div class="tech-detail-category"></div>
                <p class="tech-detail-description"></p>
                <div class="tech-detail-experience"></div>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Append to a sensible location
      const portfolioSection = document.querySelector('main') || document.body;
      portfolioSection.appendChild(newSection);
      
      console.log('Created new tech stack section with keyboard container');
    } else {
      // If there is a tech section but no keyboard container, add just the container
      const container = document.createElement('div');
      container.id = 'tech-keyboard-container';
      container.className = 'tech-keyboard-container';
      
      // Style the container
      container.style.width = '100%';
      container.style.maxWidth = '1000px';
      container.style.height = '460px'; 
      container.style.margin = '0 auto 5rem';
      container.style.position = 'relative';
      container.style.background = '#111111';
      
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
      
      // Find a suitable place to append within the tech section
      const techContent = techSection.querySelector('.max-w-7xl') || techSection;
      techContent.appendChild(container);
      techContent.appendChild(detailPanel);
      
      console.log('Added keyboard container to existing tech section');
    }
  }
  
  // Load Three.js if needed
  function loadThreeJS() {
    const threeScript = document.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r132/three.min.js';
    threeScript.onload = () => {
      console.log('Three.js loaded dynamically');
      // Now load Orbit Controls
      const orbitScript = document.createElement('script');
      orbitScript.src = 'https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/controls/OrbitControls.js';
      orbitScript.onload = () => {
        console.log('OrbitControls loaded');
        // Now initialize the keyboard
        if (typeof initTechKeyboard3D === 'function') {
          setTimeout(initTechKeyboard3D, 100);
        } else {
          console.error('initTechKeyboard3D function not available!');
        }
      };
      document.head.appendChild(orbitScript);
    };
    document.head.appendChild(threeScript);
  }
});

// Retry initialization if window load event happens after DOMContentLoaded
window.addEventListener('load', () => {
  console.log('Window load event - checking if keyboard initialized');
  
  const container = document.getElementById('tech-keyboard-container');
  if (container && !container.querySelector('canvas')) {
    console.log('Canvas not found in container, attempting to initialize again');
    if (typeof initTechKeyboard3D === 'function') {
      setTimeout(initTechKeyboard3D, 100);
    }
  }
});
