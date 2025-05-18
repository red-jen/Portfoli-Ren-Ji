/**
 * Tech Neural Network Debug Tool
 * Helps diagnose and fix visualization issues
 */

// IMPORTANT: Removed automatic loading which was causing infinite reload

// Check network status but don't automatically reload
function checkNeuralNetworkStatus() {
  // Check all required elements
  const container = document.getElementById('neural-tech-network');
  const canvas = document.getElementById('neural-canvas');
  const infoPanel = document.getElementById('neural-info-panel');
  
  console.log("Neural network status check:");
  console.log("- Container:", container ? "Found" : "Missing");
  console.log("- Canvas:", canvas ? "Found" : "Missing");
  console.log("- Info panel:", infoPanel ? "Found" : "Missing");
  
  if (container) {
    console.log("Container dimensions:", container.offsetWidth, "x", container.offsetHeight);
    console.log("Container visibility:", getComputedStyle(container).display);
  }
  
  if (canvas) {
    console.log("Canvas dimensions:", canvas.width, "x", canvas.height);
  }
  
  // Check if script is loaded
  const neuralScriptLoaded = document.querySelector('script[src*="neural-network.js"]');
  console.log("Neural network script:", neuralScriptLoaded ? "Loaded" : "Not loaded");
  
  // Check for CSS
  const styles = document.querySelector('link[href*="neural-styles.css"]');
  console.log("Neural styles:", styles ? "Loaded" : "Not loaded");
  
  // If any elements are missing, try to fix WITHOUT RELOADING
  if (!container || !canvas || container.offsetWidth === 0) {
    console.log("Issues detected, attempting fix...");
    fixNeuralNetwork();
  }
}

function fixNeuralNetwork() {
  console.log("Applying neural network fixes...");
  
  // First check if container exists
  let container = document.getElementById('neural-tech-network');
  
  // If container doesn't exist, find the tech-stack-section and create it
  if (!container) {
    const section = document.querySelector('.tech-stack-section');
    if (section) {
      console.log("Creating missing container");
      container = document.createElement('div');
      container.id = 'neural-tech-network';
      container.className = 'neural-network-container';
      
      // Add background
      const bg = document.createElement('div');
      bg.className = 'neural-background';
      container.appendChild(bg);
      
      // Find the right place to insert
      const existingContainer = section.querySelector('.neural-network-container');
      if (existingContainer) {
        console.log("Replacing existing container");
        existingContainer.parentNode.replaceChild(container, existingContainer);
      } else {
        console.log("Adding container to section");
        const content = section.querySelector('.max-w-7xl');
        if (content) {
          // Insert after the paragraph
          const paragraph = content.querySelector('p');
          if (paragraph && paragraph.nextElementSibling) {
            content.insertBefore(container, paragraph.nextElementSibling);
          } else {
            content.appendChild(container);
          }
        } else {
          section.appendChild(container);
        }
      }
    } else {
      console.error("Could not find tech-stack-section to fix");
      return;
    }
  }
  
  // Make sure container has proper dimensions
  if (container.offsetWidth === 0 || container.offsetHeight === 0) {
    console.log("Fixing container dimensions");
    container.style.width = '100%';
    container.style.height = '700px';
    container.style.maxWidth = '1200px';
    container.style.margin = '0 auto';
  }
  
  // Check if canvas exists
  let canvas = document.getElementById('neural-canvas');
  if (!canvas) {
    console.log("Creating missing canvas");
    canvas = document.createElement('canvas');
    canvas.id = 'neural-canvas';
    container.appendChild(canvas);
  }
  
  // Check if info panel exists
  let infoPanel = document.getElementById('neural-info-panel');
  if (!infoPanel) {
    console.log("Creating missing info panel");
    infoPanel = document.createElement('div');
    infoPanel.id = 'neural-info-panel';
    infoPanel.className = 'neural-info-panel';
    container.appendChild(infoPanel);
  }
  
  // Make sure CSS is loaded
  let styles = document.querySelector('link[href*="neural-styles.css"]');
  if (!styles) {
    console.log("Adding missing CSS");
    styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = './neural-styles.css';
    document.head.appendChild(styles);
  }
  
  // Check if JS is loaded
  let script = document.querySelector('script[src*="neural-network.js"]');
  if (!script) {
    console.log("Adding missing script");
    script = document.createElement('script');
    script.src = './neural-network.js';
    script.defer = true;
    document.body.appendChild(script);
  } else {
    // If script is already there, try initializing again
    console.log("Attempting to reinitialize neural network");
    if (typeof initNeuralNetwork === 'function') {
      setTimeout(initNeuralNetwork, 500);
    } else {
      console.log("initNeuralNetwork function not available");
    }
  }
  
  // Initialize modern tech grid instead of reloading
  console.log("Initializing modern tech grid...");
  if (typeof createTechGrid === 'function') {
    createTechGrid();
  } else {
    console.log("Using fallback tech grid initialization");
    // Fallback to load modern-tech-grid.js if not already loaded
    if (!document.querySelector('script[src*="modern-tech-grid.js"]')) {
      const techGridScript = document.createElement('script');
      techGridScript.src = './modern-tech-grid.js';
      techGridScript.onload = function() {
        if (typeof createTechGrid === 'function') {
          createTechGrid();
        }
      };
      document.body.appendChild(techGridScript);
    }
  }
  
  // REMOVED: The page reload that was causing infinite loading
  // setTimeout(() => { window.location.reload(); }, 2000);
}
