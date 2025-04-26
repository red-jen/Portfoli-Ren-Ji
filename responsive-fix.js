/**
 * Additional JavaScript to improve mobile experience
 */
document.addEventListener("DOMContentLoaded", function() {
    // Check if we're on mobile
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Simplify animations for better performance on mobile
        const simplifyAnimations = () => {
            // Reduce particle count for better performance
            const particles = document.querySelectorAll('.luxury-particle');
            particles.forEach((particle, index) => {
                if (index % 3 !== 0) { // Keep only 1/3 of particles
                    particle.style.display = 'none';
                }
            });
            
            // Scale down any oversized elements
            const heroSection = document.querySelector('.luxury-hero');
            if (heroSection) {
                // Add class for mobile optimization
                heroSection.classList.add('mobile-optimized');
            }
            
            // Fix marques being too large on mobile
            const marqueeTags = document.querySelectorAll('.text-7xl');
            marqueeTags.forEach(tag => {
                tag.classList.remove('text-7xl');
                tag.classList.add('text-4xl');
                tag.classList.add('my-4'); // Add vertical spacing
            });
        };
        
        // Fix sticky hover effects that can be problematic on mobile
        const fixStickyHovers = () => {
            const styleElement = document.createElement('style');
            styleElement.innerHTML = `
                .project-card:hover .project-overlay {
                    transform: translateY(0);
                    opacity: 1;
                }
                .project-card:active .project-overlay {
                    transform: translateY(0);
                    opacity: 1;
                }
                .project-card .project-overlay {
                    transform: translateY(0);
                    opacity: 0.8;
                }
            `;
            document.head.appendChild(styleElement);
        };
        
        // Fix tab navigation in about section for better touch experience
        const fixTabNavigation = () => {
            const tabs = document.querySelectorAll('.tab-link');
            tabs.forEach(tab => {
                tab.style.padding = '0.75rem 0.5rem';
                tab.style.fontSize = '0.9rem';
            });
        };
        
        // Execute mobile optimizations
        simplifyAnimations();
        fixStickyHovers();
        fixTabNavigation();
        
        // Add touch-friendly interaction for elements that rely on hover
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('touchstart', function() {
                this.querySelector('.project-overlay').style.opacity = '1';
                this.querySelector('.project-overlay').style.transform = 'translateY(0)';
            });
        });
    }
    
    // Handle orientation changes
    window.addEventListener('orientationchange', function() {
        // Force layout recalculation after orientation change
        setTimeout(function() {
            window.scrollBy(0, 1);
            window.scrollBy(0, -1);
        }, 300);
    });
});
