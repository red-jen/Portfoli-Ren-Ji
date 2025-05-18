/**
 * Tech Keyboard Initialization
 * This script initializes the 3D tech keyboard visualization
 */

console.log('Tech keyboard initializer loaded');

// Check browser WebGL support
function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas');
    return !!window.WebGLRenderingContext && 
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch(e) {
    return false;
  }
}

// Initialize the tech keyboard visualization
function initTechKeyboard(containerId = 'tech-keyboard-container') {
  console.log(`Attempting to initialize tech keyboard in "${containerId}"`);
  
  // Find container
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container "${containerId}" not found`);
    return false;
  }
  
  // Clear any previous content
  container.innerHTML = '';
  
  try {
    // Check if Three.js is loaded
    if (typeof THREE === 'undefined') {
      console.error('THREE is not defined - loading from CDN');
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r132/three.min.js';
      document.head.appendChild(script);
      script.onload = () => {
        console.log('Three.js loaded dynamically, initializing tech keyboard');
        createTechKeyboard(container);
      };
      return true;
    } else {
      console.log('THREE is already defined, initializing tech keyboard');
      return createTechKeyboard(container);
    }
  } catch (e) {
    console.error('Error in initTechKeyboard:', e);
    return false;
  }
}

function createTechKeyboard(container) {
  try {
    // Create a scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);
    
    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75, container.clientWidth / container.clientHeight, 0.1, 1000
    );
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    
    // Create a keyboard (placeholder - replace with actual keyboard model)
    const geometry = new THREE.BoxGeometry(4, 1, 2);
    const material = new THREE.MeshBasicMaterial({ color: 0x444444 });
    const keyboard = new THREE.Mesh(geometry, material);
    scene.add(keyboard);
    
    // Add keys (simplified representation)
    for (let i = 0; i < 10; i++) {
      const keyGeometry = new THREE.BoxGeometry(0.3, 0.1, 0.3);
      const keyMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
      const key = new THREE.Mesh(keyGeometry, keyMaterial);
      key.position.set(-2 + (i * 0.45), 0.1, -0.5);
      keyboard.add(key);
    }
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      keyboard.rotation.x = -0.2;
      keyboard.rotation.y += 0.003;
      renderer.render(scene, camera);
    }
    animate();
    
    console.log('Tech keyboard created successfully');
    return true;
  } catch (e) {
    console.error('Error creating tech keyboard:', e);
    container.innerHTML = `
      <div style="padding: 20px; text-align: center; color: white;">
        <p>Failed to initialize tech keyboard visualization</p>
        <p>Error: ${e.message}</p>
      </div>
    `;
    return false;
  }
}

// Alert if WebGL is not supported
if (!checkWebGLSupport()) {
  console.error('WebGL is not supported in this browser');
  alert('Your browser does not support WebGL, which is required for the 3D keyboard visualization.');
}

// Export the init function
window.techKeyboard = {
  checkWebGLSupport,
  init: initTechKeyboard
};

// Auto-initialize for tech-keyboard-container if it exists
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    initTechKeyboard();
  }, 1000);
});
