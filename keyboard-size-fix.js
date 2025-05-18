/**
 * Dedicated script to fix tech keyboard size and camera positioning
 * This script modifies the keyboard visualization to fit the container better
 */

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    adjustKeyboardVisualization();
  }, 1000); // Wait for keyboard to initialize
});

function adjustKeyboardVisualization() {
  const keyboardContainer = document.getElementById('tech-keyboard-container');
  if (!keyboardContainer) return;
  
  // Modify Three.js camera and rendering if possible
  if (window.TechKeyboard) {
    // Add a hook for after initialization is complete
    const originalInit = window.TechKeyboard.prototype.init;
    window.TechKeyboard.prototype.init = function() {
      const result = originalInit.apply(this, arguments);
      
      // Adjust camera position after initialization
      if (this.camera) {
        // Optimal camera position for the larger container
        this.initialCameraPosition = new THREE.Vector3(0, 4, 6);
        this.camera.position.copy(this.initialCameraPosition);
        this.camera.lookAt(0, 0, 0);
      }
      
      // Adjust controls if they exist
      if (this.controls) {
        this.controls.minDistance = 4;
        this.controls.maxDistance = 10;
      }
      
      // Reduce lighting intensity for more comfortable viewing
      if (this.scene) {
        // Find and adjust existing lights
        this.scene.children.forEach(child => {
          if (child.type === 'DirectionalLight') {
            child.intensity = Math.max(0.5, child.intensity * 0.7); // Reduce intensity by 30%
          } else if (child.type === 'AmbientLight') {
            child.intensity = Math.max(0.2, child.intensity * 0.8); // Reduce intensity by 20%
          } else if (child.type === 'SpotLight') {
            child.intensity = Math.max(0.3, child.intensity * 0.6); // Reduce intensity by 40%
          }
        });
        
        // Adjust ambient color to be more subtle
        const ambientLight = new THREE.AmbientLight(0x333333, 0.2);
        this.scene.add(ambientLight);
        
        // If there's a keyboard in the scene
        if (this.keyboard) {
          // Reduce any emissive intensity on keyboard materials
          this.keyboard.traverse(object => {
            if (object.material && object.material.emissive) {
              object.material.emissiveIntensity = 0.3; // Lower emissive intensity
            }
          });
        }
      }
      
      return result;
    };
    
    // Override existing setupLighting method if it exists
    if (window.TechKeyboard.prototype.setupLighting) {
      const originalSetupLighting = window.TechKeyboard.prototype.setupLighting;
      window.TechKeyboard.prototype.setupLighting = function() {
        originalSetupLighting.apply(this, arguments);
        
        // Now reduce the intensity of all lights for a more comfortable viewing experience
        this.scene.children.forEach(child => {
          if (child.isLight) {
            child.intensity = Math.max(0.3, child.intensity * 0.7);
          }
        });
      };
    }
  }
  
  // Create observer to watch for canvas resize
  const observer = new MutationObserver(() => {
    const canvas = keyboardContainer.querySelector('canvas');
    if (canvas) {
      // Force canvas to fit container
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    }
  });
  
  // Start observing
  observer.observe(keyboardContainer, { 
    childList: true,
    subtree: true
  });
  
  // Add resize handler
  window.addEventListener('resize', function() {
    // Adjust container dimensions based on screen size
    if (window.innerWidth < 768) {
      keyboardContainer.style.height = '400px'; // Increased from 350px
    } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      keyboardContainer.style.height = '450px'; // Increased from 400px
    } else {
      keyboardContainer.style.height = '450px'; // Increased from 400px
    }
    
    // Force canvas resize after window resize
    const canvas = keyboardContainer.querySelector('canvas');
    if (canvas && canvas.style) {
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    }
  });
}
