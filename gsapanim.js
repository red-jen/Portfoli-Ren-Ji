document.addEventListener("DOMContentLoaded", function() {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Variables
    const cursor = {
        dot: document.querySelector('.cursor--dot'),
        circle: document.querySelector('.cursor--circle'),
        text: document.querySelector('.cursor--text'),
        distortion: document.querySelector('.distortion')
    };
    
    const sections = document.querySelectorAll('section');
    const navDots = document.querySelectorAll('.nav-dot');
    const magneticElements = document.querySelectorAll('.magnetic');
    const projectCards = document.querySelectorAll('.project-card');
    const loadingScreen = document.querySelector('.loading-screen');
    const progressBar = document.querySelector('.progress-bar');
    const revealTexts = document.querySelectorAll('.reveal-text');
    
    // Loading animation
    const tl = gsap.timeline();
    tl.to(loadingScreen, {
        opacity: 0,
        duration: 1,
        delay: 1.5,
        onComplete: () => {
            loadingScreen.style.display = 'none';
            document.body.style.overflow = 'visible';
            // Initialize animations after loading
            initAnimations();
        }
    });
    
    // Initialize all animations
    function initAnimations() {
        // Reveal text animation
        revealTexts.forEach(text => {
            text.classList.add('revealed');
        });
        
        // Custom cursor movement
        window.addEventListener('mousemove', (e) => {
            // GSAP for smoother movement
            gsap.to(cursor.dot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power1.out'
            });
            
            gsap.to(cursor.circle, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            gsap.to(cursor.text, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            // Distortion effect follows with delay
            gsap.to(cursor.distortion, {
                x: e.clientX,
                y: e.clientY,
                duration: 1,
                ease: 'power2.out'
            });
        });
        
        // Create scroll animations for each section
        sections.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top center',
                onEnter: () => updateActiveDot(index),
                onEnterBack: () => updateActiveDot(index)
            });
        });
        
        // Initialize magnetic elements
        magneticElements.forEach(el => {
            const strength = 30;
            
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const deltaX = Math.floor((x - centerX) / 6);
                const deltaY = Math.floor((y - centerY) / 6);
                
                gsap.to(el, {
                    x: deltaX,
                    y: deltaY,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            el.addEventListener('mouseleave', () => {
                gsap.to(el, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.3)'
                });
            });
        });
        
        // Project cards hover effects
        projectCards.forEach(card => {
            // 3D tilt effect
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                gsap.to(card, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    duration: 0.4,
                    ease: 'power2.out',
                    transformPerspective: 1000,
                    transformStyle: 'preserve-3d'
                });
                
                // Show distortion effect
                gsap.to(cursor.distortion, {
                    opacity: 0.8,
                    duration: 0.3
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.7,
                    ease: 'elastic.out(1, 0.3)'
                });
                
                // Hide distortion effect
                gsap.to(cursor.distortion, {
                    opacity: 0,
                    duration: 0.3
                });
            });
            
            // Custom cursor text
            card.addEventListener('mouseenter', () => {
                const cursorText = card.getAttribute('data-cursor-text');
                cursor.text.textContent = cursorText;
                cursor.text.classList.add('visible');
            });
            
            card.addEventListener('mouseleave', () => {
                cursor.text.classList.remove('visible');
            });
        });
        
        // Scroll progress bar
        window.addEventListener('scroll', updateProgressBar);
        
        // Nav dots functionality
        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const targetSection = document.getElementById(dot.getAttribute('data-section'));
                
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 0
                    },
                    ease: 'power3.inOut'
                });
            });
        });
        
        // Initialize hero animations - replace with luxury version
        initLuxuryHeroAnimations();
    }
    
    // Enhanced hero animations for luxury section
    function initLuxuryHeroAnimations() {
        // Create particles
        function createLuxuryParticles() {
            const particlesContainer = document.getElementById('luxury-particles');
            const particleCount = 30;
            
            if (!particlesContainer) return;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'luxury-particle';
                
                // Random attributes
                const size = Math.random() * 4 + 1;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                
                particlesContainer.appendChild(particle);
                
                // Animate with GSAP
                gsap.to(particle, {
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    opacity: Math.random() * 0.5 + 0.3,
                    duration: 15 + Math.random() * 20,
                    delay: Math.random() * 5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }
        }
        
        // Initialize animation sequence
        function animateLuxuryHero() {
            const tl = gsap.timeline({defaults: {ease: 'power3.out'}});
            
            tl.to('#luxury-subtitle', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 0.5
            })
            .to('#luxury-title', {
                y: 0,
                opacity: 1,
                duration: 1
            }, '-=0.4')
            .to('#luxury-tagline', {
                y: 0,
                opacity: 1,
                duration: 0.8
            }, '-=0.6')
            .to('#luxury-typing', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                onComplete: () => startLuxuryTypingAnimation()
            }, '-=0.6')
            .to('#luxury-description', {
                y: 0,
                opacity: 1,
                duration: 0.8
            }, '-=0.5')
            .to('#luxury-stats', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                onComplete: () => animateLuxuryNumbers()
            }, '-=0.6')
            .to('#luxury-buttons', {
                y: 0,
                opacity: 1,
                duration: 0.8
            }, '-=0.5')
            .to('#luxury-profile', {
                x: 0,
                opacity: 1,
                duration: 1
            }, '-=0.7')
            .to(['#luxury-social', '#luxury-scroll'], {
                opacity: 1,
                duration: 0.8
            }, '-=0.5');
        }
        
        // Enhanced typing animation
        function startLuxuryTypingAnimation() {
            const typingElement = document.getElementById('luxury-typing-text');
            const phrases = [
                "Crafting Premium Digital Experiences",
                "Building Advanced Web Applications",
                "Designing Intuitive User Interfaces",
                "Developing Scalable Solutions"
            ];
            let currentPhrase = 0;
            let currentChar = 0;
            let isDeleting = false;
            let typingSpeed = 80; // faster than before
            
            function typeText() {
                const phrase = phrases[currentPhrase];
                
                if (isDeleting) {
                    // Remove character
                    typingElement.textContent = phrase.substring(0, currentChar - 1);
                    currentChar--;
                    typingSpeed = 40; // faster deletion
                } else {
                    // Add character
                    typingElement.textContent = phrase.substring(0, currentChar + 1);
                    currentChar++;
                    typingSpeed = 80;
                }
                
                // If phrase is complete
                if (!isDeleting && currentChar === phrase.length) {
                    isDeleting = true;
                    typingSpeed = 1500; // longer pause at end
                }
                
                // If deletion is complete
                if (isDeleting && currentChar === 0) {
                    isDeleting = false;
                    currentPhrase = (currentPhrase + 1) % phrases.length;
                }
                
                setTimeout(typeText, typingSpeed);
            }
            
            typeText();
        }
        
        // Enhanced number animation with counting up effect
        function animateLuxuryNumbers() {
            const statElements = document.querySelectorAll('.luxury-stat-number');
            
            statElements.forEach(stat => {
                const targetValue = parseInt(stat.getAttribute('data-value'));
                const duration = 2000; // ms
                
                // Use GSAP for smoother counting animation
                gsap.fromTo(stat, 
                    { textContent: 0 }, 
                    {
                        textContent: targetValue,
                        duration: duration / 1000,
                        ease: "power2.inOut",
                        snap: { textContent: 1 },
                        stagger: {
                            each: 0.1,
                            onUpdate: function() {
                                stat.textContent = Math.round(stat.textContent);
                            }
                        }
                    }
                );
            });
        }
        
        // Enhanced parallax background effect
        function initLuxuryParallax() {
            const bg = document.querySelector('.luxury-hero-bg');
            const overlay = document.querySelector('.luxury-overlay');
            const particles = document.querySelector('.luxury-particles');
            const content = document.querySelector('.luxury-content');
            
            document.addEventListener('mousemove', (e) => {
                const xPos = (e.clientX / window.innerWidth - 0.5);
                const yPos = (e.clientY / window.innerHeight - 0.5);
                
                gsap.to(bg, {
                    x: xPos * 30,
                    y: yPos * 30,
                    duration: 1.5,
                    ease: "power1.out"
                });
                
                gsap.to(overlay, {
                    x: xPos * 15,
                    y: yPos * 15,
                    duration: 1.5,
                    ease: "power1.out"
                });
                
                gsap.to(particles, {
                    x: xPos * 20,
                    y: yPos * 20,
                    duration: 1.5,
                    ease: "power1.out"
                });
                
                gsap.to(content, {
                    x: xPos * -5,
                    y: yPos * -5,
                    duration: 1.5,
                    ease: "power1.out"
                });
            });
        }
        
        // Initialize all luxury hero animations
        createLuxuryParticles();
        animateLuxuryHero();
        initLuxuryParallax();
    }
    
    // Update progress bar function
    function updateProgressBar() {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = window.scrollY / scrollTotal;
        progressBar.style.width = `${scrollProgress * 100}%`;
    }
    
    // Update active nav dot
    function updateActiveDot(index) {
        navDots.forEach(dot => dot.classList.remove('active'));
        navDots[index].classList.add('active');
    }
    
    // Smooth navigation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: targetElement,
                    ease: 'power3.inOut'
                });
            }
        });
    });
    
    // Initialize EmailJS
    (function() {
        // Simple initialization with just the public key string, not an object
        emailjs.init("E90Lx2Biv3fKWxeT8");
        console.log("EmailJS initialized");
    })();
    
    // Contact form submission with more detailed error handling
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnLoading = document.getElementById('btn-loading');
    const formStatus = document.getElementById('form-status');
    const successMessage = document.querySelector('.success-message');
    const errorMessage = document.querySelector('.error-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            btnText.classList.add('hidden');
            btnLoading.classList.remove('hidden');
            submitBtn.disabled = true;
            formStatus.classList.add('hidden');
            
            // Get form data
            const templateParams = {
                from_name: this.user_name.value,
                from_email: this.user_email.value,
                message: this.message.value,
            };
            
            console.log("Attempting to send email with EmailJS...");
            
            // Send the email using EmailJS (verify these IDs in your dashboard)
            emailjs.send("service_rwr0hnq", "template_xnwbh1s", templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    formStatus.classList.remove('hidden');
                    successMessage.classList.remove('hidden');
                    errorMessage.classList.add('hidden');
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formStatus.classList.add('hidden');
                        successMessage.classList.add('hidden');
                    }, 5000);
                })
                .catch(function(error) {
                    console.error('EMAILJS ERROR:', error);
                    
                    // Show error message with more specific details
                    formStatus.classList.remove('hidden');
                    errorMessage.classList.remove('hidden');
                    
                    // Provide more specific error information
                    if (error.text) {
                        errorMessage.textContent = `EmailJS Error: ${error.text}`;
                    } else if (error.message) {
                        errorMessage.textContent = `Error: ${error.message}`;
                    } else {
                        errorMessage.textContent = "Something went wrong sending your email. Please try again or contact me directly.";
                    }
                    
                    successMessage.classList.add('hidden');
                    
                    // Hide error message after 5 seconds
                    setTimeout(() => {
                        formStatus.classList.add('hidden');
                        errorMessage.classList.add('hidden');
                    }, 8000);
                })
                .finally(() => {
                    // Reset button state
                    btnText.classList.remove('hidden');
                    btnLoading.classList.add('hidden');
                    submitBtn.disabled = false;
                });
        });
    }
    
    // Add dramatically enhanced animation to Explore Portfolio button
    const exploreButton = document.querySelector('.luxury-btn-primary');
    if (exploreButton) {
        exploreButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create container for all transition effects
            const transitionContainer = document.createElement('div');
            transitionContainer.className = 'transition-container';
            transitionContainer.style.position = 'fixed';
            transitionContainer.style.top = '0';
            transitionContainer.style.left = '0';
            transitionContainer.style.width = '100vw';
            transitionContainer.style.height = '100vh';
            transitionContainer.style.zIndex = '9996';
            transitionContainer.style.pointerEvents = 'none';
            transitionContainer.style.perspective = '1000px';
            document.body.appendChild(transitionContainer);
            
            // Create directional sweep layer
            const sweepLayer = document.createElement('div');
            sweepLayer.className = 'sweep-layer';
            sweepLayer.style.position = 'absolute';
            sweepLayer.style.top = '0';
            sweepLayer.style.left = '0';
            sweepLayer.style.width = '100%';
            sweepLayer.style.height = '100%';
            sweepLayer.style.background = `linear-gradient(45deg, var(--accent), transparent)`;
            sweepLayer.style.opacity = '0';
            sweepLayer.style.zIndex = '1';
            transitionContainer.appendChild(sweepLayer);
            
            // Create light flash effect
            const flashLayer = document.createElement('div');
            flashLayer.className = 'flash-layer';
            flashLayer.style.position = 'absolute';
            flashLayer.style.top = '0';
            flashLayer.style.left = '0';
            flashLayer.style.width = '100%';
            flashLayer.style.height = '100%';
            flashLayer.style.backgroundColor = 'white';
            flashLayer.style.opacity = '0';
            flashLayer.style.zIndex = '2';
            transitionContainer.appendChild(flashLayer);
            
            // Create energy wave circle
            const energyWave = document.createElement('div');
            energyWave.className = 'energy-wave';
            energyWave.style.position = 'absolute';
            energyWave.style.borderRadius = '50%';
            energyWave.style.boxShadow = '0 0 60px 20px var(--accent)';
            energyWave.style.opacity = '0';
            energyWave.style.zIndex = '3';
            transitionContainer.appendChild(energyWave);
            
            // Create particles system with trails
            const particlesContainer = document.createElement('div');
            particlesContainer.className = 'particles-container';
            particlesContainer.style.position = 'absolute';
            particlesContainer.style.top = '0';
            particlesContainer.style.left = '0';
            particlesContainer.style.width = '100%';
            particlesContainer.style.height = '100%';
            particlesContainer.style.zIndex = '4';
            transitionContainer.appendChild(particlesContainer);
            
            // Create multiple particle types with different behaviors
            const particleCount = {
                small: 40,
                medium: 20,
                large: 10,
                trail: 30,
            };
            
            const rect = exploreButton.getBoundingClientRect();
            const buttonCenterX = rect.left + rect.width / 2;
            const buttonCenterY = rect.top + rect.height / 2;
            
            // Place energy wave at button position
            energyWave.style.left = `${buttonCenterX}px`;
            energyWave.style.top = `${buttonCenterY}px`;
            energyWave.style.width = '10px';
            energyWave.style.height = '10px';
            
            // Create small particles
            for (let i = 0; i < particleCount.small; i++) {
                createParticle('small', buttonCenterX, buttonCenterY, particlesContainer);
            }
            
            // Create medium particles with slight delay
            setTimeout(() => {
                for (let i = 0; i < particleCount.medium; i++) {
                    createParticle('medium', buttonCenterX, buttonCenterY, particlesContainer);
                }
            }, 100);
            
            // Create large particles with more delay
            setTimeout(() => {
                for (let i = 0; i < particleCount.large; i++) {
                    createParticle('large', buttonCenterX, buttonCenterY, particlesContainer);
                }
            }, 200);
            
            // Create particles with trails
            setTimeout(() => {
                for (let i = 0; i < particleCount.trail; i++) {
                    createTrailParticle(buttonCenterX, buttonCenterY, particlesContainer);
                }
            }, 300);
            
            // Clone project section content for transition
            const projectsSection = document.querySelector('#projects');
            const projectItems = projectsSection.querySelectorAll('.project-card');
            
            // Create floating elements that preview projects section
            projectItems.forEach((item, index) => {
                if (index < 3) { // Limit to first 3 projects
                    const previewEl = document.createElement('div');
                    previewEl.className = 'project-preview';
                    previewEl.style.position = 'absolute';
                    previewEl.style.width = '300px';
                    previewEl.style.height = '200px';
                    previewEl.style.borderRadius = '8px';
                    previewEl.style.backgroundColor = 'rgba(18, 18, 18, 0.8)';
                    previewEl.style.border = '1px solid var(--accent)';
                    previewEl.style.overflow = 'hidden';
                    previewEl.style.opacity = '0';
                    previewEl.style.zIndex = '5';
                    
                    // Position off-screen initially based on index
                    const startX = [window.innerWidth + 300, -300, window.innerWidth / 2];
                    const startY = [window.innerHeight + 200, -200, -200];
                    const endX = [window.innerWidth * 0.2, window.innerWidth * 0.5, window.innerWidth * 0.7];
                    const endY = [window.innerHeight * 0.4, window.innerHeight * 0.6, window.innerHeight * 0.3];
                    
                    previewEl.style.left = `${startX[index]}px`;
                    previewEl.style.top = `${startY[index]}px`;
                    
                    // Add project image if available
                    const projectImg = item.querySelector('img, [style*="background-image"]');
                    if (projectImg) {
                        const previewImg = document.createElement('div');
                        previewImg.style.width = '100%';
                        previewImg.style.height = '100%';
                        
                        if (projectImg.tagName === 'IMG') {
                            previewImg.style.backgroundImage = `url(${projectImg.src})`;
                        } else {
                            const bgImg = projectImg.style.backgroundImage;
                            previewImg.style.backgroundImage = bgImg;
                        }
                        
                        previewImg.style.backgroundSize = 'cover';
                        previewImg.style.backgroundPosition = 'center';
                        previewImg.style.filter = 'brightness(0.7)';
                        previewEl.appendChild(previewImg);
                    }
                    
                    transitionContainer.appendChild(previewEl);
                    
                    // Animate preview elements later in the sequence
                    setTimeout(() => {
                        gsap.to(previewEl, {
                            x: endX[index] - startX[index],
                            y: endY[index] - startY[index],
                            opacity: 0.9,
                            scale: 1,
                            rotation: Math.random() * 10 - 5,
                            duration: 1.2,
                            ease: 'power3.out',
                            delay: index * 0.2
                        });
                    }, 800);
                }
            });
            
            // Create 3D world-rotation effect container
            const worldRotator = document.createElement('div');
            worldRotator.className = 'world-rotator';
            worldRotator.style.position = 'fixed';
            worldRotator.style.top = '0';
            worldRotator.style.left = '0';
            worldRotator.style.width = '100%';
            worldRotator.style.height = '100%';
            worldRotator.style.transformStyle = 'preserve-3d';
            worldRotator.style.perspective = '1000px';
            worldRotator.style.zIndex = '1';
            document.body.insertBefore(worldRotator, document.body.firstChild);
            
            // Main animation timeline
            const tl = gsap.timeline({
                onComplete: () => {
                    // Clean up after animation completes
                    document.body.removeChild(transitionContainer);
                    document.body.removeChild(worldRotator);
                }
            });
            
            // Button effect
            tl.to(exploreButton, {
                scale: 1.3,
                boxShadow: '0 0 30px var(--accent)',
                color: '#000',
                background: 'var(--accent)',
                duration: 0.4,
                ease: 'power2.out'
            });
            
            // Energy wave expanding from button
            tl.to(energyWave, {
                opacity: 0.8,
                width: '2000px',
                height: '2000px',
                left: buttonCenterX - 1000,
                top: buttonCenterY - 1000,
                duration: 1.5,
                ease: 'power2.out'
            }, "-=0.2");
            
            // Flash effect
            tl.to(flashLayer, {
                opacity: 0.3,
                duration: 0.2,
                yoyo: true,
                repeat: 1,
                ease: 'power4.out'
            }, "-=1.2");
            
            // Directional sweep
            tl.to(sweepLayer, {
                opacity: 0.7,
                duration: 0.8,
                ease: 'power2.in'
            }, "-=1");
            
            tl.to(sweepLayer, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            }, "+=0.2");
            
            // 3D rotate effect on the entire viewport
            tl.to(worldRotator, {
                rotationX: -5,
                rotationY: 15,
                duration: 1.2,
                ease: 'power2.inOut'
            }, "-=1.5");
            
            tl.to(worldRotator, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.8,
                ease: 'power2.out'
            }, "+=0.2");
            
            // Fade and blur the hero section
            tl.to('#hero', {
                filter: 'blur(10px)',
                opacity: 0.2,
                scale: 0.95,
                duration: 0.8,
                ease: 'power2.in'
            }, "-=1.8");
            
            // Perform the scroll to projects section
            tl.to(window, {
                scrollTo: {
                    y: '#projects',
                    offsetY: 0
                },
                duration: 1,
                ease: 'power3.inOut'
            }, "-=0.5");
            
            // Fade in projects section with special effect
            tl.fromTo('#projects', 
                { opacity: 0, scale: 0.9, filter: 'blur(15px)' },
                { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' },
                "-=0.5"
            );
            
            // Remove preview elements with staggered fade out
            tl.to('.project-preview', {
                opacity: 0,
                scale: 1.5,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.in'
            }, "-=0.3");
            
            // Animate project cards with staggered entrance
            tl.fromTo('#projects .project-card', 
                { y: 100, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'back.out(1.4)'
                }, 
                "-=0.2"
            );
            
            // Reset hero section styles after scroll completes
            tl.set('#hero', { clearProps: 'all' });
        });
    }
    
    // Helper function to create a particle with specified size
    function createParticle(size, x, y, container) {
        const particle = document.createElement('div');
        particle.className = `particle ${size}`;
        
        // Size based on particle type
        let dimensions, duration, distance;
        switch(size) {
            case 'large':
                dimensions = Math.random() * 15 + 10;
                duration = Math.random() * 2 + 1.5;
                distance = Math.random() * 300 + 200;
                break;
            case 'medium':
                dimensions = Math.random() * 8 + 5;
                duration = Math.random() * 1.5 + 1;
                distance = Math.random() * 200 + 150;
                break;
            default: // small
                dimensions = Math.random() * 4 + 2;
                duration = Math.random() * 1 + 0.5;
                distance = Math.random() * 150 + 50;
        }
        
        // Styling
        particle.style.position = 'absolute';
        particle.style.width = `${dimensions}px`;
        particle.style.height = `${dimensions}px`;
        particle.style.left = `${x - dimensions/2}px`;
        particle.style.top = `${y - dimensions/2}px`;
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = `var(--accent)`;
        particle.style.boxShadow = `0 0 ${dimensions/2}px var(--accent)`;
        particle.style.opacity = Math.random() * 0.5 + 0.5;
        
        container.appendChild(particle);
        
        // Random direction
        const angle = Math.random() * Math.PI * 2;
        const destX = Math.cos(angle) * distance;
        const destY = Math.sin(angle) * distance;
        
        // Animate with GSAP
        gsap.to(particle, {
            x: destX,
            y: destY,
            opacity: 0,
            scale: size === 'large' ? 0.2 : 0,
            duration: duration,
            ease: 'power2.out',
            onComplete: () => container.removeChild(particle)
        });
    }
    
    // Helper function to create particles with trails
    function createTrailParticle(x, y, container) {
        const particle = document.createElement('div');
        particle.className = 'trail-particle';
        
        // Trail particle styling
        const size = Math.random() * 6 + 3;
        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x - size/2}px`;
        particle.style.top = `${y - size/2}px`;
        particle.style.borderRadius = '50%';
        particle.style.background = `var(--accent)`;
        particle.style.boxShadow = `0 0 ${size}px var(--accent)`;
        
        container.appendChild(particle);
        
        // Random curved path parameters
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 250 + 100;
        const destX = Math.cos(angle) * distance;
        const destY = Math.sin(angle) * distance;
        const duration = Math.random() * 2 + 1;
        
        // Create trail effect by adding segments along the path
        const trailCount = 8;
        for (let i = 0; i < trailCount; i++) {
            const trail = document.createElement('div');
            const trailSize = size * (1 - i/trailCount*0.7);
            
            trail.style.position = 'absolute';
            trail.style.width = `${trailSize}px`;
            trail.style.height = `${trailSize}px`;
            trail.style.left = `${x - trailSize/2}px`;
            trail.style.top = `${y - trailSize/2}px`;
            trail.style.borderRadius = '50%';
            trail.style.backgroundColor = `var(--accent)`;
            trail.style.opacity = (1 - i/trailCount) * 0.7;
            container.appendChild(trail);
            
            // Animate trail segment with delay
            gsap.to(trail, {
                x: destX * (i/trailCount),
                y: destY * (i/trailCount),
                delay: i * (duration/trailCount),
                duration: duration - (i * duration/trailCount),
                ease: 'power2.out',
                opacity: 0,
                onComplete: () => container.removeChild(trail)
            });
        }
        
        // Animate main particle
        gsap.to(particle, {
            x: destX,
            y: destY,
            opacity: 0,
            duration: duration,
            ease: 'power2.out',
            onComplete: () => container.removeChild(particle)
        });
    }
});