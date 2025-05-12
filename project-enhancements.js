/**
 * Enhanced Project Cards
 * Adds advanced hover effects and 3D transformations to project cards
 */

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add 3D tilt effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation values
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            // Apply transformation
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        // Reset on mouse leave
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
        
        // Add shine effect
        const addShineEffect = () => {
            // Create shine overlay
            const shineOverlay = document.createElement('div');
            shineOverlay.className = 'project-shine-overlay';
            card.appendChild(shineOverlay);
            
            // Handle mouse movement for shine effect
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate percentage positions
                const percentX = x / rect.width * 100;
                const percentY = y / rect.height * 100;
                
                // Update shine effect position
                shineOverlay.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)`;
            });
            
            // Remove shine effect on mouse leave
            card.addEventListener('mouseleave', () => {
                shineOverlay.style.background = 'none';
            });
        };
        
        addShineEffect();
        
        // Add reveal animation on scroll
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('project-revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );
        
        observer.observe(card);
    });
    
    // Add necessary styles
    const style = document.createElement('style');
    style.textContent = `
        .project-card {
            transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            opacity: 0;
            transform: translateY(50px);
        }
        
        .project-revealed {
            opacity: 1;
            transform: translateY(0);
        }
        
        .project-shine-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 0.5rem;
            pointer-events: none;
            z-index: 1;
        }
        
        .project-overlay {
            z-index: 2;
        }
    `;
    
    document.head.appendChild(style);
});
