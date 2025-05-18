/**
 * Tech Keyboard Extension to add more technologies
 * This adds a second keyboard row with additional technologies
 */

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    extendTechKeyboard();
  }, 1500); // Wait for keyboard to initialize
});

function extendTechKeyboard() {
  const keyboardContainer = document.getElementById('tech-keyboard-container');
  
  if (!window.TechKeyboard || !keyboardContainer) {
    console.warn('Tech keyboard not found or not initialized');
    return;
  }
  
  // Get the keyboard instance
  const keyboardInstance = keyboardContainer.__techKeyboard;
  if (!keyboardInstance || !keyboardInstance.keyboard) {
    console.warn('Could not access keyboard instance');
    return;
  }
  
  // Additional technologies to add to a second virtual keyboard
  const additionalTech = [
    { name: 'GitHub', color: 0x24292E, label: '', icon: 'github.png', position: [-1.5, 0, -2.5],
      description: 'Web-based platform for version control and collaboration using Git.' },
    { name: 'GitLab', color: 0xFC6D26, label: '', icon: 'gitlab.png', position: [-0.5, 0, -2.5],
      description: 'Web-based DevOps lifecycle tool providing Git repository management.' },
    { name: 'NPM', color: 0xCB3837, label: '', icon: 'npm.png', position: [0.5, 0, -2.5],
      description: 'Default package manager for Node.js for sharing and reusing code.' },
    { name: 'Yarn', color: 0x2C8EBB, label: '', icon: 'yarn.png', position: [1.5, 0, -2.5],
      description: 'Fast, reliable, and secure dependency management for JavaScript.' },
    
    { name: 'Composer', color: 0x885630, label: '', icon: 'composer.png', position: [-1.5, 0, -3.5],
      description: 'Dependency manager for PHP, required for modern PHP development.' },
    { name: 'Postman', color: 0xFF6C37, label: '', icon: 'postman.png', position: [-0.5, 0, -3.5],
      description: 'API platform for building and testing APIs.' },
    { name: 'gRPC', color: 0x244C5A, label: '', icon: 'grpc.png', position: [0.5, 0, -3.5],
      description: 'High-performance RPC framework for efficient client-server communication.' },
    { name: 'PHPUnit', color: 0x3F9C35, label: '', icon: 'phpunit.png', position: [1.5, 0, -3.5],
      description: 'Unit testing framework for PHP applications.' },
    
    { name: 'Figma', color: 0xF24E1E, label: '', icon: 'figma.png', position: [0, 0, -4.5],
      description: 'Cloud-based design tool for collaboration on interface design.' },
  ];
  
  // Function to create additional keys
  function createAdditionalKeys(tech) {
    // If we have the scene and three.js
    if (!keyboardInstance.scene || !window.THREE) return;
    
    const textureLoader = new THREE.TextureLoader();
    
    // Create a secondary keyboard base for the additional tech
    const baseGeometry = new THREE.BoxGeometry(5, 0.5, 3);
    const baseMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x181818,
      metalness: 0.8,
      roughness: 0.3,
      clearcoat: 0.4,
      clearcoatRoughness: 0.3
    });
    
    // Create the secondary keyboard 
    const secondaryKeyboard = new THREE.Mesh(baseGeometry, baseMaterial);
    secondaryKeyboard.position.set(0, -0.5, -3); // Position it behind the main keyboard
    secondaryKeyboard.receiveShadow = true;
    secondaryKeyboard.castShadow = true;
    keyboardInstance.scene.add(secondaryKeyboard);
    
    // Create keys with enhanced materials
    additionalTech.forEach(tech => {
      // Create key geometry
      const keyGeometry = new THREE.BoxGeometry(0.8, 0.3, 0.8, 4, 4, 4);
      
      // Create key material
      const keyMaterial = new THREE.MeshPhysicalMaterial({
        color: tech.color,
        metalness: 0.5,
        roughness: 0.4,
        clearcoat: 0.5,
        clearcoatRoughness: 0.2,
        reflectivity: 0.5
      });
      
      const key = new THREE.Mesh(keyGeometry, keyMaterial);
      
      // Adjust position relative to the secondary keyboard
      const position = tech.position;
      key.position.set(position[0], position[1] + 0.15, position[2]);
      
      key.castShadow = true;
      key.receiveShadow = true;
      key.userData.tech = tech;
      key.userData.originalY = key.position.y;
      key.userData.originalColor = tech.color;
      
      // Add icon to key
      if (tech.icon) {
        // Create icon geometry
        const iconGeometry = new THREE.PlaneGeometry(0.65, 0.65);
        const iconMaterial = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.95
        });
        
        // Try loading icon
        textureLoader.load(
          `assets/icons/${tech.icon}`,
          (texture) => {
            iconMaterial.map = texture;
            iconMaterial.needsUpdate = true;
          },
          undefined,
          // Fallback
          () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 256;
            canvas.height = 256;
            
            ctx.fillStyle = 'white';
            ctx.font = 'bold 120px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(tech.name.substring(0, 2), canvas.width / 2, canvas.height / 2);
            
            const texture = new THREE.CanvasTexture(canvas);
            iconMaterial.map = texture;
            iconMaterial.needsUpdate = true;
          }
        );
        
        const icon = new THREE.Mesh(iconGeometry, iconMaterial);
        icon.rotation.x = -Math.PI / 2;
        icon.position.y = 0.151;
        key.add(icon);
      }
      
      // Add concave top for realism
      const concaveGeometry = new THREE.SphereGeometry(0.75, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
      const concaveMaterial = new THREE.MeshPhongMaterial({
        color: keyMaterial.color,
        opacity: 0.2,
        transparent: true,
        side: THREE.BackSide,
        shininess: 100
      });
      
      const concave = new THREE.Mesh(concaveGeometry, concaveMaterial);
      concave.scale.set(1, 0.2, 1);
      concave.rotation.x = Math.PI;
      concave.position.y = 0.15;
      concave.visible = false;
      key.add(concave);
      
      // Add key to scene and keyboard array
      keyboardInstance.scene.add(key);
      keyboardInstance.keys.push(key); // Add to keys array for interaction
    });
    
    // Add camera controls to view the additional tech
    const viewAllButton = document.createElement('button');
    viewAllButton.innerHTML = 'View All Tech';
    viewAllButton.className = 'view-all-tech-button';
    viewAllButton.style.cssText = `
      position: absolute;
      bottom: 10px;
      left: 10px;
      padding: 8px 12px;
      background: rgba(65, 184, 131, 0.8);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      z-index: 100;
      font-family: Arial, sans-serif;
      font-size: 14px;
      transition: all 0.2s ease-in-out;
    `;
    
    viewAllButton.addEventListener('mouseover', function() {
      this.style.backgroundColor = 'rgba(65, 184, 131, 1)';
      this.style.transform = 'scale(1.05)';
    });
    
    viewAllButton.addEventListener('mouseout', function() {
      this.style.backgroundColor = 'rgba(65, 184, 131, 0.8)';
      this.style.transform = 'scale(1)';
    });
    
    viewAllButton.addEventListener('click', function() {
      const animateCameraPosition = new THREE.Vector3(0, 6, 0);
      const targetCameraLookAt = new THREE.Vector3(0, 0, -2);
      
      // Animate camera to bird's eye view showing all keyboards
      const currentPosition = keyboardInstance.camera.position.clone();
      const currentTarget = keyboardInstance.controls.target.clone();
      
      const duration = 1.0; // seconds
      const startTime = keyboardInstance.clock.getElapsedTime();
      
      const animate = () => {
        const elapsedTime = keyboardInstance.clock.getElapsedTime() - startTime;
        const progress = Math.min(elapsedTime / duration, 1.0);
        
        // Use easing for smooth animation
        const easeProgress = keyboardInstance.easeInOutCubic(progress);
        
        // Interpolate position
        keyboardInstance.camera.position.lerpVectors(
          currentPosition,
          animateCameraPosition,
          easeProgress
        );
        
        // Interpolate target
        keyboardInstance.controls.target.lerpVectors(
          currentTarget,
          targetCameraLookAt,
          easeProgress
        );
        
        keyboardInstance.controls.update();
        
        if (progress < 1.0) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    });
    
    keyboardContainer.appendChild(viewAllButton);
  }
  
  // Create the additional keys
  createAdditionalKeys(additionalTech);
  
  console.log('Extended tech keyboard with additional technologies');
}
