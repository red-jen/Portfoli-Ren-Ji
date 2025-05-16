/**
 * Explosive Portfolio Button Animation
 * Creates a dramatic explosion effect transitioning to projects section
 */

document.addEventListener('DOMContentLoaded', function() {
    const exploreBtn = document.getElementById('explore-portfolio-btn');
    
    if (!exploreBtn) return;
    
    // Add click event for explosive transition to projects section
    exploreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create initial ripple effect
        createRippleEffect(e);
        
        // Create the explosive transition
        createExplosiveTransition();
        
        // After animation, scroll to projects section
        setTimeout(() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ 
                    behavior: 'smooth'
                });
            }
        }, 1000); // Match timing with explosion animation
    });
    
    // Ripple effect function
    function createRippleEffect(e) {
        // Remove any existing ripples
        const existingRipple = document.querySelector('.btn-ripple');
        if (existingRipple) {
            existingRipple.remove();
        }
        
        // Create new ripple element
        const ripple = document.createElement('span');
        ripple.classList.add('btn-ripple');
        
        // Calculate position relative to the button
        const rect = exploreBtn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        // Position the ripple
        ripple.style.width = ripple.style.height = `${size * 2}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        // Add ripple to button
        exploreBtn.appendChild(ripple);
        
        // Audio effect (optional - uncomment if desired)
        // const audio = new Audio('explosion.mp3');
        // audio.volume = 0.2;
        // audio.play();
        
        // Remove ripple after animation completes
        setTimeout(() => {
            ripple.remove();
        }, 700);
    }
    
    // Create explosive transition effect
    function createExplosiveTransition() {
        // Create explosion container
        const explosionContainer = document.createElement('div');
        explosionContainer.className = 'explosion-container';
        document.body.appendChild(explosionContainer);
        
        // Create fragments
        const fragmentCount = 80;
        const buttonRect = exploreBtn.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;
        
        // Create flash effect
        const flash = document.createElement('div');
        flash.className = 'explosion-flash';
        document.body.appendChild(flash);
        
        // Trigger flash
        setTimeout(() => {
            flash.style.opacity = '0.8';
            setTimeout(() => {
                flash.style.opacity = '0';
                setTimeout(() => {
                    flash.remove();
                }, 300);
            }, 100);
        }, 50);
        
        // Create fragments
        for (let i = 0; i < fragmentCount; i++) {
            const fragment = document.createElement('div');
            fragment.className = 'explosion-fragment';
            
            // Random size
            const size = Math.random() * 30 + 10;
            fragment.style.width = `${size}px`;
            fragment.style.height = `${size}px`;
            
            // Set initial position at button center
            fragment.style.left = `${buttonCenterX}px`;
            fragment.style.top = `${buttonCenterY}px`;
            
            // Random background color with accent
            const hue = Math.random() * 40 + 160; // cyan-green range
            fragment.style.backgroundColor = `hsla(${hue}, 100%, 70%, ${Math.random() * 0.7 + 0.3})`;
            
            // Add fragment to container
            explosionContainer.appendChild(fragment);
            
            // Animate fragment outward
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 1000 + 200;
            const duration = Math.random() * 0.7 + 0.7;
            
            const targetX = buttonCenterX + Math.cos(angle) * distance;
            const targetY = buttonCenterY + Math.sin(angle) * distance;
            
            // Apply animation with random timing
            setTimeout(() => {
                fragment.style.transform = `translate(${targetX - buttonCenterX}px, ${targetY - buttonCenterY}px) rotate(${Math.random() * 720 - 360}deg)`;
                fragment.style.opacity = '0';
            }, Math.random() * 100);
        }
        
        // Create shockwave effect
        const shockwave = document.createElement('div');
        shockwave.className = 'explosion-shockwave';
        shockwave.style.left = `${buttonCenterX}px`;
        shockwave.style.top = `${buttonCenterY}px`;
        document.body.appendChild(shockwave);
        
        // Animate shockwave
        setTimeout(() => {
            shockwave.style.transform = 'scale(20)';
            shockwave.style.opacity = '0';
            
            setTimeout(() => {
                // Clean up
                shockwave.remove();
                explosionContainer.remove();
            }, 600);
        }, 50);
        
        // Create website shatter effect (screen fragments)
        createScreenShatter();
    }
    
    // Create screen shatter effect
    function createScreenShatter() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const buttonRect = exploreBtn.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;
        
        // Create screen fragments container
        const shatterContainer = document.createElement('div');
        shatterContainer.className = 'screen-shatter-container';
        document.body.appendChild(shatterContainer);
        
        // Number of fragments (grid size)
        const cols = 8;
        const rows = 6;
        
        // Take a screenshot of the current view using HTML2Canvas (simulated)
        const screenshot = document.createElement('div');
        screenshot.className = 'screenshot';
        
        // Get a visual copy of the current screen
        html2canvas(document.body).then(canvas => {
            // Create fragments based on the screenshot
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const pieceWidth = screenWidth / cols;
                    const pieceHeight = screenHeight / rows;
                    
                    const piece = document.createElement('div');
                    piece.className = 'screen-fragment';
                    piece.style.width = `${pieceWidth}px`;
                    piece.style.height = `${pieceHeight}px`;
                    piece.style.left = `${i * pieceWidth}px`;
                    piece.style.top = `${j * pieceHeight}px`;
                    piece.style.backgroundImage = `url(${canvas.toDataURL()})`;
                    piece.style.backgroundSize = `${screenWidth}px ${screenHeight}px`;
                    piece.style.backgroundPosition = `-${i * pieceWidth}px -${j * pieceHeight}px`;
                    
                    shatterContainer.appendChild(piece);
                    
                    // Calculate the distance and angle from button center
                    const pieceCenterX = i * pieceWidth + pieceWidth / 2;
                    const pieceCenterY = j * pieceHeight + pieceHeight / 2;
                    const dx = pieceCenterX - buttonCenterX;
                    const dy = pieceCenterY - buttonCenterY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx);
                    
                    // Random offset distance based on distance from center
                    const offset = distance / 2 + Math.random() * 300;
                    
                    // Animate with slight delay based on distance
                    setTimeout(() => {
                        piece.style.transform = `translate(${Math.cos(angle) * offset}px, ${Math.sin(angle) * offset}px) rotate(${Math.random() * 30 - 15}deg)`;
                        piece.style.opacity = '0';
                    }, distance * 0.5);
                }
            }
            
            // Cleanup after animation completes
            setTimeout(() => {
                shatterContainer.remove();
            }, 1500);
        });
    }
    
    // Hover effects
    exploreBtn.addEventListener('mouseenter', function() {
        // Glow effect on hover
        exploreBtn.classList.add('mega-glow');
        
        // Particle effect
        createHoverParticles(exploreBtn);
    });
    
    exploreBtn.addEventListener('mouseleave', function() {
        exploreBtn.classList.remove('mega-glow');
        
        // Clean up hover particles
        document.querySelectorAll('.hover-particle').forEach(particle => {
            particle.style.opacity = '0';
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 500);
        });
    });
    
    // Create hover particles
    function createHoverParticles(button) {
        const rect = button.getBoundingClientRect();
        const particleInterval = setInterval(() => {
            if (!button.matches(':hover')) {
                clearInterval(particleInterval);
                return;
            }
            
            const particle = document.createElement('span');
            particle.classList.add('hover-particle');
            
            // Random size
            const size = Math.random() * 8 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position along button edge
            const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
            let x, y;
            
            switch (side) {
                case 0: // top
                    x = Math.random() * rect.width;
                    y = -5;
                    break;
                case 1: // right
                    x = rect.width + 5;
                    y = Math.random() * rect.height;
                    break;
                case 2: // bottom
                    x = Math.random() * rect.width;
                    y = rect.height + 5;
                    break;
                case 3: // left
                    x = -5;
                    y = Math.random() * rect.height;
                    break;
            }
            
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            
            // Animation properties
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 20 + 10;
            const tx = Math.cos(angle) * speed;
            const ty = Math.sin(angle) * speed;
            
            particle.style.animation = `float-particle 1s forwards`;
            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            
            button.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1000);
        }, 50); // Create particles at regular intervals
    }

    // Load HTML2Canvas dynamically if not present
    if (typeof html2canvas === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.async = true;
        document.head.appendChild(script);
    }
});
