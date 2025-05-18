/**
 * Enhanced Tech Keyboard with Three.js 3D rendering
 * This provides an alternative rendering method using WebGL for more realistic 3D
 */

// Check if Three.js is available and decide whether to use it
let useThreeJS = false;
const ENABLE_WEBGL = true; // Set to false to force CSS 3D transforms

document.addEventListener('DOMContentLoaded', () => {
  // Check if Three.js is available
  if (ENABLE_WEBGL && window.THREE) {
    useThreeJS = true;
    initThreeJSKeyboard();
  } else {
    // Fall back to CSS 3D transforms
    console.log('Using CSS 3D transforms for keyboard');
  }
});

// Map to store references to 3D objects by tech ID
const techObjects = new Map();

// Initialize Three.js scene
function initThreeJSKeyboard() {
  const container = document.querySelector('.tech-keyboard-container');
  if (!container) return;
  
  console.log('Initializing Three.js keyboard');
  container.classList.add('webgl-enabled');
  
  // Create Three.js canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'tech-keyboard-canvas';
  container.prepend(canvas);
  
  // Set up Three.js
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
  });
  
  // Configure renderer
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputEncoding = THREE.sRGBEncoding;
  
  // Camera setup - optimized for full keyboard visibility
  const camera = new THREE.PerspectiveCamera(
    35, // Wider FOV to see more keys
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 20, 35); // Higher and closer position
  camera.lookAt(0, 0, -2); // Looking slightly downward to center all keys
  
  // Lighting setup
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(10, 20, 15);
  scene.add(directionalLight);
  
  const pointLight = new THREE.PointLight(0x64ffda, 0.5);
  pointLight.position.set(0, 10, 10);
  scene.add(pointLight);
  
  // Add keyboard base plane
  const baseGeometry = new THREE.BoxGeometry(30, 2, 20);
  const baseMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x0a0c12,
    specular: 0x222222,
    shininess: 10
  });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.position.y = -2;
  scene.add(base);
  
  // Process tech data and create 3D keys
  createTechKeys(scene);
  
  // Set up mouse interaction
  setupMouseInteraction(container, camera, scene, renderer);
  
  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
}

// Improved key layout for better distribution
function createTechKeys(scene) {
  // Clear previous objects
  techObjects.clear();
  
  // Calculate total width needed
  const rowSizes = techKeyboard.map(row => row.keys.length);
  const maxKeysInRow = Math.max(...rowSizes);
  
  // Create keys in rows with optimized spacing
  let startX = -maxKeysInRow * 1.5; // Dynamically calculate start position
  let startZ = -6;
  const keySize = 2.2; // Smaller keys to fit more
  const rowSpacing = 2.4; // Tighter row spacing
  const keySpacing = 2.4; // Tighter key spacing
  
  // Process tech keyboard data
  techKeyboard.forEach((row, rowIndex) => {
    const keysInRow = row.keys.length;
    
    // Calculate row offset for staggering
    let rowOffset = 0;
    if (rowIndex === 1) rowOffset = 0.5;
    if (rowIndex === 2) rowOffset = 0.8;
    if (rowIndex === 3) rowOffset = 0.4;
    if (rowIndex === 4) rowOffset = 0.5;
    
    // Handle special case for concept keys
    let rowKeySize = keySize;
    if (rowIndex === 4) {
      rowKeySize = keySize * 1.3; // Slightly bigger concept keys
    }
    
    // Special centering for rows with fewer keys
    const rowCenterOffset = (maxKeysInRow - keysInRow) * keySpacing / 2;
    
    // Create keys in this row
    row.keys.forEach((tech, keyIndex) => {
      const x = startX + rowCenterOffset + (keyIndex * keySpacing) + rowOffset;
      const y = 0;
      const z = startZ + (rowIndex * rowSpacing);
      
      const keyObj = createKey(tech, x, y, z, rowKeySize);
      scene.add(keyObj);
      
      techObjects.set(tech.id, keyObj);
    });
  });
}

// Create a single 3D key with improved shape
function createKey(tech, x, y, z, size) {
  // Get category color
  const colorMap = {
    'frontend': 0x38BDF8,
    'backend': 0x4ADE80,
    'tools': 0xC084FC,
    'concepts': 0xFB7185
  };
  
  const keyColor = colorMap[tech.category] || 0x64FFDA;
  
  // Create key group
  const keyGroup = new THREE.Group();
  keyGroup.position.set(x, y, z);
  keyGroup.userData = { tech: tech, originalY: y, hovered: false };
  
  // Create key body with improved proportions
  const keyHeight = size * 0.4; // Lower profile for better appearance
  const keyGeometry = new THREE.BoxGeometry(size, keyHeight, size);
  
  // Apply edge rounding if supported by Three.js version
  if (typeof THREE.BoxGeometry.fromGeometry === 'function') {
    // Attempt to round edges - will only work in newer Three.js
    try {
      keyGeometry.applyMatrix4(new THREE.Matrix4().makeScale(1, 0.5, 1));
      keyGeometry = new THREE.RoundedBoxGeometry(size, size * 0.5, size, 4, 0.2);
    } catch (e) {
      console.log('Advanced geometry not supported');
    }
  }
  
  // Add better rounding to edges if available in Three.js version
  try {
    // Use bevel if available for nicer edges
    const edgeRadius = size * 0.08;
    const options = {
      depth: size,
      bevelEnabled: true,
      bevelThickness: edgeRadius,
      bevelSize: edgeRadius,
      bevelSegments: 3
    };
    
    // Try different geometry approaches based on Three.js version
    if (THREE.RoundedBoxGeometry) {
      keyGeometry = new THREE.RoundedBoxGeometry(size, keyHeight, size, 4, edgeRadius);
    } else if (THREE.BoxGeometry.prototype.fromBufferGeometry) {
      // Add some chamfer to edges
      keyGeometry = new THREE.BoxGeometry(size * 0.95, keyHeight, size * 0.95);
    }
  } catch (e) {
    console.log('Advanced geometry not supported, using basic box');
  }
  
  const keyMaterial = new THREE.MeshPhongMaterial({
    color: keyColor,
    specular: 0xffffff,
    shininess: 30
  });
  
  const keyMesh = new THREE.Mesh(keyGeometry, keyMaterial);
  keyGroup.add(keyMesh);
  
  // Load and add tech icon as a texture
  loadTechIconTexture(tech.icon, texture => {
    const iconSize = size * 0.7;
    const iconGeometry = new THREE.PlaneGeometry(iconSize, iconSize);
    const iconMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthWrite: false
    });
    
    const iconMesh = new THREE.Mesh(iconGeometry, iconMaterial);
    iconMesh.position.y = size * 0.31; // Slightly above the key
    iconMesh.rotation.x = -Math.PI / 2; // Flat on top of the key
    
    keyGroup.add(iconMesh);
  });
  
  return keyGroup;
}

// Load tech icon textures
function loadTechIconTexture(iconUrl, callback) {
  new THREE.TextureLoader().load(iconUrl, texture => {
    callback(texture);
  }, undefined, error => {
    console.error('Error loading texture:', error);
  });
}

// Setup mouse interaction
function setupMouseInteraction(container, camera, scene, renderer) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let hoveredKey = null;
  
  // Track mouse position
  container.addEventListener('mousemove', event => {
    const rect = container.getBoundingClientRect();
    
    // Convert mouse position to normalized coordinates (-1 to +1)
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    // Update raycaster
    raycaster.setFromCamera(mouse, camera);
    
    // Find intersected objects
    const intersects = raycaster.intersectObjects(scene.children, true);
    
    // Reset previously hovered key
    if (hoveredKey) {
      resetKeyAnimation(hoveredKey);
      hoveredKey = null;
    }
    
    // Check for new hovered key
    if (intersects.length > 0) {
      // Find the first intersected object that is a key
      for (const intersect of intersects) {
        // Traverse up to find parent group with tech data
        let parent = intersect.object;
        while (parent && !parent.userData?.tech) {
          parent = parent.parent;
        }
        
        if (parent && parent.userData?.tech) {
          hoveredKey = parent;
          animateKeyHover(hoveredKey);
          
          // Show tech details
          showTechDetails(hoveredKey.userData.tech);
          break;
        }
      }
    }
  });
  
  // Handle click on keys
  container.addEventListener('click', event => {
    if (hoveredKey) {
      animateKeyPress(hoveredKey);
      playKeyPressSound(true);
    }
  });
  
  // Handle mouse leave
  container.addEventListener('mouseleave', () => {
    if (hoveredKey) {
      resetKeyAnimation(hoveredKey);
      hoveredKey = null;
    }
  });
}

// Animate key hover effect
function animateKeyHover(keyObj) {
  keyObj.userData.hovered = true;
  
  // Animate to hover position
  gsap.to(keyObj.position, {
    y: keyObj.userData.originalY + 0.8,
    duration: 0.3,
    ease: 'power2.out'
  });
  
  // Rotate slightly
  gsap.to(keyObj.rotation, {
    x: -Math.PI * 0.07,
    y: Math.PI * 0.04,
    duration: 0.3,
    ease: 'power2.out'
  });
}

// Reset key animation state
function resetKeyAnimation(keyObj) {
  keyObj.userData.hovered = false;
  
  // Animate back to original position
  gsap.to(keyObj.position, {
    y: keyObj.userData.originalY,
    duration: 0.3,
    ease: 'power2.out'
  });
  
  // Reset rotation
  gsap.to(keyObj.rotation, {
    x: 0,
    y: 0,
    duration: 0.3,
    ease: 'power2.out'
  });
}

// Animate key press
function animateKeyPress(keyObj) {
  // Quick down and up animation
  gsap.timeline()
    .to(keyObj.position, {
      y: keyObj.userData.originalY - 0.2,
      duration: 0.1,
      ease: 'power1.in'
    })
    .to(keyObj.position, {
      y: keyObj.userData.hovered ? 
         keyObj.userData.originalY + 0.8 : 
         keyObj.userData.originalY,
      duration: 0.2,
      ease: 'bounce.out'
    });
}

// Get tech by ID (for external calls)
function getTechObjectById(id) {
  return techObjects.get(id);
}

// Animate a specific tech key by ID
function animateTechKey(id) {
  const techObj = getTechObjectById(id);
  if (techObj) {
    animateKeyPress(techObj);
    showTechDetails(techObj.userData.tech);
    playKeyPressSound(true);
  }
}

// Export for external use
window.techKeyboard3D = {
  isEnabled: () => useThreeJS,
  animateKey: animateTechKey
};
