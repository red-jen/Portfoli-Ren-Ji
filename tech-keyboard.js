/**
 * Tech Keyboard Visualization
 * A 3D interactive keyboard displaying different technologies
 * Enhanced with camera controls and realistic materials
 */

class TechKeyboard {
  constructor(containerId = 'tech-keyboard-container') {
    this.containerId = containerId;
    this.container = null;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.keyboard = null;
    this.keys = [];
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.clock = new THREE.Clock();
    this.currentIntersected = null;
    this.textureLoader = new THREE.TextureLoader();
    this.isAnimating = false;
    this.initialCameraPosition = new THREE.Vector3(0, 4, 6);
    
    // Tech stack with corresponding colors and images
    this.techStack = [
      // First row
      { name: 'JavaScript', color: 0xF0DB4F, label: 'JS', position: [-1.5, 0, 1.5], 
        description: 'Core language for web development with strong ecosystem and frameworks.' },
      { name: 'TypeScript', color: 0x007ACC, label: 'TS', position: [-0.5, 0, 1.5],
        description: 'JavaScript with syntax for types, enhancing code quality and developer experience.' },
      { name: 'React', color: 0x61DAFB, label: '', icon: 'react.png', position: [0.5, 0, 1.5],
        description: 'Component-based UI library for building interactive web applications.' },
      { name: 'Vue', color: 0x41B883, label: '', icon: 'vue.png', position: [1.5, 0, 1.5],
        description: 'Progressive framework for building user interfaces with an approachable core library.' },
      
      // Second row
      { name: 'HTML', color: 0xE44D26, label: '', icon: 'html.png', position: [-1.5, 0, 0.5],
        description: 'Standard markup language for documents designed to be displayed in a web browser.' },
      { name: 'Node.js', color: 0x3C873A, label: '', icon: 'node.png', position: [-0.5, 0, 0.5],
        description: 'JavaScript runtime for executing JavaScript code server-side.' },
      { name: 'Python', color: 0x306998, label: '', icon: 'python.png', position: [0.5, 0, 0.5],
        description: 'Versatile programming language with clean syntax and rich ecosystem.' },
      { name: 'Docker', color: 0x0db7ed, label: '', icon: 'docker.png', position: [1.5, 0, 0.5],
        description: 'Platform for developing, shipping, and running applications in containers.' },
      
      // Third row
      { name: 'AWS', color: 0xFF9900, label: 'aws', position: [-1.5, 0, -0.5],
        description: 'Cloud computing platform with vast array of infrastructure services.' },
      { name: 'GraphQL', color: 0xE535AB, label: '', icon: 'graphql.png', position: [-0.5, 0, -0.5],
        description: 'Query language for APIs and runtime for executing those queries.' },
      { name: 'GitHub', color: 0x24292E, label: '', icon: 'github.png', position: [0.5, 0, -0.5],
        description: 'Platform for version control and collaboration using Git.' },
      { name: 'WordPress', color: 0x21759B, label: '', icon: 'wordpress.png', position: [1.5, 0, -0.5],
        description: 'Content management system focused on creating websites and blogs.' },
      
      // Fourth row
      { name: 'Linux', color: 0x222222, label: '', icon: 'linux.png', position: [-1.5, 0, -1.5],
        description: 'Open source operating system and foundation for many servers and devices.' },
      { name: 'Sass', color: 0xCC6699, label: '', icon: 'sass.png', position: [-0.5, 0, -1.5],
        description: 'CSS preprocessor scripting language with powerful features.' },
      { name: 'MongoDB', color: 0x4DB33D, label: '', icon: 'mongodb.png', position: [0.5, 0, -1.5],
        description: 'Document-oriented NoSQL database used in modern web applications.' },
      { name: 'Netlify', color: 0x00C7B7, label: '', icon: 'netlify.png', position: [1.5, 0, -1.5],
        description: 'Platform for automating modern web projects with continuous deployment.' },
    ];
  }

  init() {
    this.container = document.getElementById(this.containerId);
    if (!this.container) {
      console.error(`Container "${this.containerId}" not found`);
      return false;
    }

    this.container.innerHTML = '';
    
    // Create scene with improved environment
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x121212);
    
    // Add fog for depth perception
    this.scene.fog = new THREE.Fog(0x121212, 10, 20);
    
    // Enhanced lighting setup for realism
    this.setupLighting();
    
    // Camera setup
    const aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
    this.camera.position.copy(this.initialCameraPosition);
    this.camera.lookAt(0, 0, 0);
    
    // Renderer setup with enhanced shadows
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance" 
    });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.container.appendChild(this.renderer.domElement);
    
    // Add OrbitControls for camera manipulation
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 3;
    this.controls.maxDistance = 10;
    this.controls.maxPolarAngle = Math.PI / 2;
    this.controls.saveState();
    
    // Add keyboard base and environment
    this.addEnvironment();
    
    // Create keyboard base
    this.createKeyboard();
    
    // Add Skills text overlay
    this.addSkillsText();
    
    // Add hint text
    this.addHintText();
    
    // Add camera reset button
    this.addCameraResetButton();
    
    // Event listeners
    window.addEventListener('resize', () => this.onWindowResize(), false);
    this.renderer.domElement.addEventListener('mousemove', (event) => this.onMouseMove(event), false);
    this.renderer.domElement.addEventListener('click', (event) => this.onMouseClick(event), false);
    
    // Start animation loop
    this.animate();
    
    return true;
  }
  
  setupLighting() {
    // Ambient light for base illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    this.scene.add(ambientLight);
    
    // Main directional light with shadows
    const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
    mainLight.position.set(5, 8, 7);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 25;
    mainLight.shadow.camera.left = -7;
    mainLight.shadow.camera.right = 7;
    mainLight.shadow.camera.top = 7;
    mainLight.shadow.camera.bottom = -7;
    mainLight.shadow.bias = -0.001;
    this.scene.add(mainLight);
    
    // Secondary fill light
    const fillLight = new THREE.DirectionalLight(0x8494e4, 0.4);
    fillLight.position.set(-5, 3, -5);
    this.scene.add(fillLight);
    
    // Key highlight light
    const keyLight = new THREE.SpotLight(0xffffff, 0.4);
    keyLight.position.set(0, 5, 0);
    keyLight.angle = Math.PI / 4;
    keyLight.penumbra = 0.5;
    keyLight.decay = 1;
    keyLight.distance = 15;
    this.scene.add(keyLight);
    
    // Rim light for keyboard edges
    const rimLight = new THREE.DirectionalLight(0x41b883, 0.3);
    rimLight.position.set(0, 0, -5);
    this.scene.add(rimLight);
  }
  
  addEnvironment() {
    // Add reflective floor
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.3,
      roughness: 0.8,
      envMapIntensity: 0.5
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2;
    floor.receiveShadow = true;
    this.scene.add(floor);
    
    // Add subtle background grid
    const gridHelper = new THREE.GridHelper(20, 40, 0x303030, 0x202020);
    gridHelper.position.y = -1.99;
    gridHelper.material.opacity = 0.15;
    gridHelper.material.transparent = true;
    this.scene.add(gridHelper);
    
    // Add circular platform for keyboard
    const platformGeometry = new THREE.CylinderGeometry(3, 3.5, 0.2, 32);
    const platformMaterial = new THREE.MeshStandardMaterial({
      color: 0x202020,
      metalness: 0.6,
      roughness: 0.4,
    });
    const platform = new THREE.Mesh(platformGeometry, platformMaterial);
    platform.position.y = -0.8;
    platform.receiveShadow = true;
    this.scene.add(platform);
    
    // Add rotating outer ring
    const ringGeometry = new THREE.RingGeometry(3.6, 3.8, 64);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x41b883,
      metalness: 0.9,
      roughness: 0.2,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -0.7;
    this.scene.add(ring);
    
    // Animate the ring
    this.outerRing = ring;
  }
  
  createKeyboard() {
    // Create keyboard base with improved materials
    const baseGeometry = new THREE.BoxGeometry(5, 0.5, 4);
    
    // Create and apply materials with bump mapping for texture
    const bumpTexture = this.textureLoader.load('https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/textures/brick_bump.jpg');
    bumpTexture.wrapS = THREE.RepeatWrapping;
    bumpTexture.wrapT = THREE.RepeatWrapping;
    bumpTexture.repeat.set(2, 2);
    
    const baseMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x202020,
      bumpMap: bumpTexture,
      bumpScale: 0.02,
      metalness: 0.8,
      roughness: 0.3,
      clearcoat: 0.4,
      clearcoatRoughness: 0.3
    });
    
    // Create the base mesh
    this.keyboard = new THREE.Mesh(baseGeometry, baseMaterial);
    this.keyboard.position.y = -0.5;
    this.keyboard.receiveShadow = true;
    this.keyboard.castShadow = true;
    this.scene.add(this.keyboard);
    
    // Add trim to keyboard edges
    this.addKeyboardTrim();
    
    // Create keys with enhanced materials
    this.techStack.forEach(tech => {
      this.createKey(tech);
    });
    
    // Set initial keyboard rotation
    this.keyboard.rotation.x = -0.2;
  }
  
  addKeyboardTrim() {
    // Top edge
    const edgeGeometry = new THREE.BoxGeometry(5.2, 0.1, 0.1);
    const edgeMaterial = new THREE.MeshStandardMaterial({
      color: 0x41b883,
      metalness: 0.7,
      roughness: 0.3,
      emissive: 0x41b883,
      emissiveIntensity: 0.1
    });
    
    const topEdge = new THREE.Mesh(edgeGeometry, edgeMaterial);
    topEdge.position.set(0, -0.25, 2.05);
    this.keyboard.add(topEdge);
    
    const bottomEdge = new THREE.Mesh(edgeGeometry, edgeMaterial);
    bottomEdge.position.set(0, -0.25, -2.05);
    this.keyboard.add(bottomEdge);
    
    const leftEdgeGeometry = new THREE.BoxGeometry(0.1, 0.1, 4.2);
    const leftEdge = new THREE.Mesh(leftEdgeGeometry, edgeMaterial);
    leftEdge.position.set(-2.55, -0.25, 0);
    this.keyboard.add(leftEdge);
    
    const rightEdge = new THREE.Mesh(leftEdgeGeometry, edgeMaterial);
    rightEdge.position.set(2.55, -0.25, 0);
    this.keyboard.add(rightEdge);
  }
  
  createKey(tech) {
    // Create more realistic key geometry with rounded corners
    const keyGeometry = new THREE.BoxGeometry(0.8, 0.3, 0.8, 4, 4, 4);
    
    // Create key material with reflections
    const keyMaterial = new THREE.MeshPhysicalMaterial({
      color: tech.color,
      metalness: 0.5,
      roughness: 0.4,
      clearcoat: 0.5,
      clearcoatRoughness: 0.2,
      reflectivity: 0.5
    });
    
    const key = new THREE.Mesh(keyGeometry, keyMaterial);
    key.position.set(tech.position[0], tech.position[1] + 0.15, tech.position[2]);
    key.castShadow = true;
    key.receiveShadow = true;
    key.userData.tech = tech;
    key.userData.originalY = key.position.y;
    key.userData.originalColor = tech.color;
    
    // Add text or icon to key
    if (tech.icon) {
      this.addIconToKey(key, tech.icon);
    } else if (tech.label) {
      this.addTextToKey(key, tech.label);
    }
    
    // Add concave key top
    this.addKeyConcavity(key);
    
    this.keyboard.add(key);
    this.keys.push(key);
  }
  
  addKeyConcavity(key) {
    // Add subtle concave top to key for realism
    const concaveGeometry = new THREE.SphereGeometry(0.75, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
    const concaveMaterial = new THREE.MeshPhongMaterial({
      color: key.material.color,
      opacity: 0.2,
      transparent: true,
      side: THREE.BackSide,
      shininess: 100
    });
    
    const concave = new THREE.Mesh(concaveGeometry, concaveMaterial);
    concave.scale.set(1, 0.2, 1);
    concave.rotation.x = Math.PI;
    concave.position.y = 0.15;
    concave.visible = false; // Initially hidden, only show when implementing full finger press animation
    key.add(concave);
  }
  
  addIconToKey(key, iconName) {
    // Create high-quality icon display
    const iconGeometry = new THREE.PlaneGeometry(0.65, 0.65);
    const iconMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95
    });
    
    // Try loading from assets folder first
    this.textureLoader.load(
      `assets/icons/${iconName}`,
      (texture) => {
        iconMaterial.map = texture;
        iconMaterial.needsUpdate = true;
      },
      undefined,
      // Fallback to CDN if local file not found
      () => {
        const cdnPath = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName.split('.')[0]}/`;
        this.textureLoader.load(
          `${cdnPath}${iconName.split('.')[0]}-original.svg`,
          (texture) => {
            iconMaterial.map = texture;
            iconMaterial.needsUpdate = true;
          }
        );
      }
    );
    
    const icon = new THREE.Mesh(iconGeometry, iconMaterial);
    icon.rotation.x = -Math.PI / 2;
    icon.position.y = 0.151;
    key.add(icon);
    
    // Add subtle glow effect
    this.addKeyGlow(key, key.userData.tech.color);
  }
  
  addKeyGlow(key, color) {
    const glowGeometry = new THREE.PlaneGeometry(1.2, 1.2);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending
    });
    
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.rotation.x = -Math.PI / 2;
    glow.position.y = 0.16;
    key.add(glow);
  }
  
  addTextToKey(key, text) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 256;
    
    // Draw text with improved styling
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Create gradient for text
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(1, 'rgba(200, 200, 200, 0.8)');
    
    ctx.fillStyle = gradient;
    ctx.font = 'bold 120px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    
    // Add subtle shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    
    // Create texture
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true
    });
    
    // Create plane with texture
    const labelGeometry = new THREE.PlaneGeometry(0.65, 0.65);
    const label = new THREE.Mesh(labelGeometry, material);
    label.rotation.x = -Math.PI / 2;
    label.position.y = 0.151;
    key.add(label);
    
    // Add subtle glow effect
    this.addKeyGlow(key, key.userData.tech.color);
  }
  
  addSkillsText() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 256;
    
    // Draw text with enhanced styling
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Create gradient for text
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
    gradient.addColorStop(1, 'rgba(100, 255, 218, 0.7)');
    
    ctx.fillStyle = gradient;
    ctx.font = 'bold 140px "Arial Black", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SKILLS', canvas.width / 2, canvas.height / 2);
    
    // Add glow
    ctx.shadowColor = 'rgba(100, 255, 218, 0.7)';
    ctx.shadowBlur = 30;
    ctx.fillText('SKILLS', canvas.width / 2, canvas.height / 2);
    
    // Create texture
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthTest: false,
      blending: THREE.AdditiveBlending
    });
    
    // Create plane with texture
    const textGeometry = new THREE.PlaneGeometry(5, 1.25);
    const text = new THREE.Mesh(textGeometry, material);
    text.position.set(0, 2, 0);
    text.rotation.x = -Math.PI / 4;
    
    this.scene.add(text);
    
    // Add animation
    this.skillsText = text;
  }
  
  addHintText() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 64;
    
    // Draw text
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = '28px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('(drag to rotate - scroll to zoom)', canvas.width / 2, canvas.height / 2);
    
    // Create texture
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthTest: false
    });
    
    // Create plane with texture
    const textGeometry = new THREE.PlaneGeometry(2.5, 0.3);
    const text = new THREE.Mesh(textGeometry, material);
    text.position.set(0, 0.5, 0);
    text.rotation.x = -Math.PI / 4;
    
    this.scene.add(text);
  }
  
  addCameraResetButton() {
    // Create reset view button
    const resetButton = document.createElement('button');
    resetButton.innerHTML = 'Reset View';
    resetButton.className = 'reset-camera-button';
    resetButton.style.position = 'absolute';
    resetButton.style.bottom = '10px';
    resetButton.style.right = '10px';
    resetButton.style.padding = '8px 12px';
    resetButton.style.background = 'rgba(65, 184, 131, 0.8)';
    resetButton.style.color = 'white';
    resetButton.style.border = 'none';
    resetButton.style.borderRadius = '4px';
    resetButton.style.cursor = 'pointer';
    resetButton.style.zIndex = '100';
    resetButton.style.fontFamily = 'Arial, sans-serif';
    resetButton.style.fontSize = '14px';
    
    resetButton.addEventListener('click', () => {
      this.resetCamera();
    });
    
    this.container.appendChild(resetButton);
  }
  
  resetCamera() {
    // Animate camera back to initial position
    const currentPosition = this.camera.position.clone();
    const currentTarget = new THREE.Vector3();
    this.controls.target.clone(currentTarget);
    
    const duration = 1.0; // seconds
    const startTime = this.clock.getElapsedTime();
    
    const animate = () => {
      const elapsedTime = this.clock.getElapsedTime() - startTime;
      const progress = Math.min(elapsedTime / duration, 1.0);
      
      // Use easing function for smooth transition
      const easeProgress = this.easeInOutCubic(progress);
      
      // Interpolate position
      this.camera.position.lerpVectors(
        currentPosition, 
        this.initialCameraPosition, 
        easeProgress
      );
      
      // Interpolate controls target
      this.controls.target.set(
        (1 - easeProgress) * currentTarget.x,
        (1 - easeProgress) * currentTarget.y,
        (1 - easeProgress) * currentTarget.z
      );
      
      this.controls.update();
      
      if (progress < 1.0) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }
  
  easeInOutCubic(t) {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  
  onWindowResize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
  
  onMouseMove(event) {
    // Calculate mouse position in normalized device coordinates
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }
  
  onMouseClick(event) {
    if (this.currentIntersected) {
      const tech = this.currentIntersected.userData.tech;
      console.log(`Selected technology: ${tech.name}`);
      
      // Trigger detailed key press animation
      this.animateDetailedKeyPress(this.currentIntersected);
      
      // Show tech details panel
      this.showTechDetails(tech);
    }
  }
  
  animateDetailedKeyPress(key) {
    if (this.isAnimating) return;
    this.isAnimating = true;
    
    const originalY = key.userData.originalY;
    const originalColor = key.userData.originalColor;
    
    // Store initial state
    const initialPosition = key.position.y;
    const initialEmissive = key.material.emissive.getHex();
    
    // Press down animation
    new TWEEN.Tween(key.position)
      .to({ y: originalY - 0.15 }, 100)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start()
      .onStart(() => {
        // Change emissive color on press
        key.material.emissive.set(new THREE.Color(originalColor));
        key.material.emissiveIntensity = 0.3;
      })
      .onComplete(() => {
        // Press up with bounce
        new TWEEN.Tween(key.position)
          .to({ y: originalY + 0.05 }, 100)
          .easing(TWEEN.Easing.Quadratic.Out)
          .start()
          .onComplete(() => {
            // Settle back
            new TWEEN.Tween(key.position)
              .to({ y: originalY }, 200)
              .easing(TWEEN.Easing.Elastic.Out)
              .start()
              .onComplete(() => {
                // Reset emissive
                new TWEEN.Tween({ intensity: 0.3 })
                  .to({ intensity: 0 }, 300)
                  .onUpdate((obj) => {
                    key.material.emissiveIntensity = obj.intensity;
                  })
                  .start()
                  .onComplete(() => {
                    key.material.emissive.set(new THREE.Color(0x000000));
                    this.isAnimating = false;
                  });
              });
          });
      });
  }
  
  showTechDetails(tech) {
    // This would connect to your HTML panel for showing details
    const detailPanel = document.getElementById('tech-detail-panel');
    if (!detailPanel) return;
    
    const nameElement = detailPanel.querySelector('.tech-detail-name');
    const descriptionElement = detailPanel.querySelector('.tech-detail-description');
    
    if (nameElement) nameElement.textContent = tech.name;
    if (descriptionElement) descriptionElement.textContent = tech.description || '';
    
    // Show the panel
    detailPanel.classList.add('active');
    
    // Hide after a delay
    setTimeout(() => {
      detailPanel.classList.remove('active');
    }, 4000);
  }
  
  checkIntersections() {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.keys);
    
    if (intersects.length > 0) {
      if (this.currentIntersected !== intersects[0].object) {
        // Reset previous intersected key
        if (this.currentIntersected) {
          const prevKey = this.currentIntersected;
          new TWEEN.Tween(prevKey.material)
            .to({ emissiveIntensity: 0 }, 200)
            .start()
            .onComplete(() => {
              prevKey.material.emissive.setHex(0x000000);
            });
        }
        
        // Highlight new intersected key
        this.currentIntersected = intersects[0].object;
        const color = this.currentIntersected.userData.tech.color;
        this.currentIntersected.material.emissive.set(new THREE.Color(color));
        
        new TWEEN.Tween(this.currentIntersected.material)
          .to({ emissiveIntensity: 0.2 }, 200)
          .start();
          
        // Slightly raise the key
        const originalY = this.currentIntersected.userData.originalY;
        new TWEEN.Tween(this.currentIntersected.position)
          .to({ y: originalY + 0.05 }, 200)
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();
          
        document.body.style.cursor = 'pointer';
      }
    } else {
      // Reset when no intersection
      if (this.currentIntersected) {
        const prevKey = this.currentIntersected;
        new TWEEN.Tween(prevKey.material)
          .to({ emissiveIntensity: 0 }, 200)
          .start()
          .onComplete(() => {
            prevKey.material.emissive.setHex(0x000000);
          });
          
        // Return to original position
        const originalY = this.currentIntersected.userData.originalY;
        new TWEEN.Tween(this.currentIntersected.position)
          .to({ y: originalY }, 200)
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();
      }
      this.currentIntersected = null;
      document.body.style.cursor = 'auto';
    }
  }
  
  animate() {
    requestAnimationFrame(() => this.animate());
    
    // Update controls
    this.controls.update();
    
    // Update tweens
    if (typeof TWEEN !== 'undefined') {
      TWEEN.update();
    }
    
    const time = this.clock.getElapsedTime();
    
    // Gentle floating motion for keyboard
    if (this.keyboard) {
      this.keyboard.position.y = -0.5 + Math.sin(time * 0.5) * 0.05;
    }
    
    // Animate outer ring
    if (this.outerRing) {
      this.outerRing.rotation.z = time * 0.2;
    }
    
    // Animate skills text
    if (this.skillsText) {
      this.skillsText.position.y = 2 + Math.sin(time * 0.7) * 0.1;
      this.skillsText.material.opacity = 0.7 + Math.sin(time * 1.5) * 0.3;
    }
    
    // Check for intersections
    this.checkIntersections();
    
    // Render scene
    this.renderer.render(this.scene, this.camera);
  }
}

// Export the TechKeyboard class
if (typeof module !== 'undefined') {
  module.exports = TechKeyboard;
} else {
  window.TechKeyboard = TechKeyboard;
}

// Auto-initialize when script loads
document.addEventListener('DOMContentLoaded', () => {
  // Load Three.js OrbitControls if not available
  if (typeof THREE.OrbitControls === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/controls/OrbitControls.js';
    document.head.appendChild(script);
    script.onload = initKeyboard;
  } else {
    initKeyboard();
  }
  
  // Check if TWEEN is available, load if not
  if (typeof TWEEN === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/tween.js/18.6.4/tween.umd.js';
    document.head.appendChild(script);
  }
});

function initKeyboard() {
  // Initialize after a short delay to ensure resources are loaded
  setTimeout(() => {
    const techKeyboard = new TechKeyboard();
    techKeyboard.init();
  }, 1000);
}
