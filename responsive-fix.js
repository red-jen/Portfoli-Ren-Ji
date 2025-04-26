/**
 * Additional JavaScript to improve mobile experience
 */
document.addEventListener("DOMContentLoaded", function() {
    // Check if we're on mobile
    const isMobile = window.innerWidth <= 768;
    
    // Fix horizontal scrolling issues
    const fixHorizontalScrolling = () => {
        // Force body to full width of viewport without overflow
        document.body.style.width = '100%';
        document.body.style.maxWidth = '100vw';
        document.body.style.overflowX = 'hidden';
        
        // Find and fix any overflowing elements
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
            if (el.offsetWidth > window.innerWidth) {
                console.log('Fixing overflowing element:', el);
                el.style.maxWidth = '100%';
                el.style.boxSizing = 'border-box';
                
                // Fix images specifically
                if (el.tagName === 'IMG') {
                    el.style.maxWidth = '100%';
                    el.style.height = 'auto';
                }
            }
        });
        
        // Fix any absolute positioned elements that might cause overflow
        const absoluteElements = document.querySelectorAll('[style*="position: absolute"]');
        absoluteElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.right > window.innerWidth) {
                el.style.right = '0';
                el.style.left = 'auto';
            }
        });
    };
    
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
        
        // Apply new fixes for horizontal scrolling
        fixHorizontalScrolling();
        
        // Fix contact section layout specifically
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const gridContainer = contactSection.querySelector('.grid');
            if (gridContainer) {
                gridContainer.style.width = '100%';
                gridContainer.style.display = 'block';
                
                // Fix eye loader container
                const eyeLoader = contactSection.querySelector('.eloader');
                if (eyeLoader) {
                    const parentDiv = eyeLoader.parentElement;
                    if (parentDiv) {
                        parentDiv.style.width = '100%';
                        parentDiv.style.overflow = 'visible';
                    }
                }
            }
        }
        
        // Remove unnecessary padding/margins
        document.querySelectorAll('section').forEach(section => {
            section.style.paddingLeft = '0';
            section.style.paddingRight = '0';
            
            const innerContainer = section.querySelector('.max-w-7xl, .container');
            if (innerContainer) {
                innerContainer.style.paddingLeft = '1rem';
                innerContainer.style.paddingRight = '1rem';
            }
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
    
    // Run the horizontal scroll fix on resize and orientation change
    window.addEventListener('resize', fixHorizontalScrolling);
    window.addEventListener('orientationchange', function() {
        setTimeout(fixHorizontalScrolling, 300);
    });
    
    // Initial run
    fixHorizontalScrolling();
});
