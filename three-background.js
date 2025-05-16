/**
 * WebGL Background Animation
 * Creates an impressive 3D background with interactive elements
 */

// Initialize Three.js scene
class ThreeBackground {
    constructor() {
        this.container = document.getElementById('hero-canvas');
        if (!this.container) return;
        
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.mouseX = 0;
        this.mouseY = 0;
        
        this.init();
        this.setupEventListeners();
    }
    
    init() {
        // Create scene
        this.scene = new THREE.Scene();
        
        // Set up camera
        this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.1, 2000);
        this.camera.position.z = 800;
        
        // Set up renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.container,
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
        
        // Create particle system
        this.createParticles();
        
        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0x404040);
        this.scene.add(ambientLight);
        
        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0x64ffda, 0.5);
        directionalLight.position.set(1, 1, 1);
        this.scene.add(directionalLight);
        
        // Start animation loop
        this.animate();
    }
    
    createParticles() {
        const particleCount = 500;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        
        const color = new THREE.Color();
        
        for (let i = 0; i < particleCount; i++) {
            // Position
            positions[i * 3] = (Math.random() - 0.5) * 2000;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
            
            // Color
            const colorValue = Math.random();
            if (colorValue > 0.8) {
                color.setHSL(0.55, 1, 0.5); // Accent color
            } else {
                color.setHSL(0.55, 0.8, 0.3); // Darker accent
            }
            
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
            
            // Size
            sizes[i] = Math.random() * 5 + 1;
        }
        
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
        // Create particle material
        const particleMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0.0 },
                pixelRatio: { value: window.devicePixelRatio }
            },
            vertexShader: `
                attribute float size;
                uniform float time;
                uniform float pixelRatio;
                varying vec3 vColor;
                
                void main() {
                    vColor = color;
                    
                    vec3 pos = position;
                    pos.y += sin(time * 0.2 + position.x * 0.01) * 20.0;
                    pos.x += cos(time * 0.2 + position.y * 0.01) * 20.0;
                    
                    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                    gl_PointSize = size * pixelRatio * (300.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying vec3 vColor;
                
                void main() {
                    // Create a circular particle
                    float r = 0.5;
                    vec2 uv = gl_PointCoord - vec2(0.5);
                    float d = length(uv);
                    float circle = smoothstep(r, r - 0.01, d);
                    
                    if (d > r) discard;
                    
                    gl_FragColor = vec4(vColor, circle * 0.8);
                }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true
        });
        
        // Create particle system
        this.particles = new THREE.Points(particles, particleMaterial);
        this.scene.add(this.particles);
    }
    
    setupEventListeners() {
        window.addEventListener('resize', this.onResize.bind(this));
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
        window.addEventListener('scroll', this.onScroll.bind(this));
    }
    
    onResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
        
        this.renderer.setSize(this.width, this.height);
    }
    
    onMouseMove(event) {
        this.mouseX = (event.clientX - this.width / 2) * 0.1;
        this.mouseY = (event.clientY - this.height / 2) * 0.1;
    }
    
    onScroll() {
        const scrollY = window.scrollY;
        // Adjust particle visibility based on scroll
        if (this.particles && scrollY < window.innerHeight) {
            const opacity = 1 - (scrollY / window.innerHeight);
            this.particles.material.opacity = opacity;
        }
    }
    
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        
        // Update particle animation
        if (this.particles) {
            this.particles.material.uniforms.time.value += 0.01;
            
            // Rotate particles based on mouse movement
            this.particles.rotation.x += (this.mouseY * 0.0001 - this.particles.rotation.x) * 0.05;
            this.particles.rotation.y += (this.mouseX * 0.0001 - this.particles.rotation.y) * 0.05;
        }
        
        // Render scene
        this.renderer.render(this.scene, this.camera);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Three.js background
    const threeBackground = new ThreeBackground();
});
