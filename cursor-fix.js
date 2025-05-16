/**
 * Cursor Fix
 * Improves custom cursor functionality for better performance and reliability
 */

function initCustomCursor() {
    // Get cursor elements
    const cursor = document.querySelector('.cursor--dot');
    const cursorCircle = document.querySelector('.cursor--circle');
    const cursorText = document.querySelector('.cursor--text');
    
    // Exit if cursor elements don't exist
    if (!cursor || !cursorCircle) return;
    
    // Variables for smooth movement
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let isVisible = true;
    
    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Show cursor if it was hidden
        if (!isVisible) {
            cursor.style.opacity = '1';
            cursorCircle.style.opacity = '1';
            if (cursorText) cursorText.style.opacity = '1';
            isVisible = true;
        }
    });
    
    // Animation loop for smoother cursor
    function updateCursor() {
        // Smoothing factor
        const ease = 0.15;
        
        // Apply smooth interpolation
        cursorX += (mouseX - cursorX) * ease;
        cursorY += (mouseY - cursorY) * ease;
        
        // Update dot position - follows cursor exactly
        if (cursor) {
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }
        
        // Update circle with smooth follow
        if (cursorCircle) {
            cursorCircle.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
        }
        
        // Update text with smooth follow
        if (cursorText) {
            cursorText.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
        }
        
        // Continue animation loop
        requestAnimationFrame(updateCursor);
    }
    
    // Start animation loop
    requestAnimationFrame(updateCursor);
    
    // Project hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cursorCircle.classList.add('cursor--hover');
            if (cursorText) {
                cursorText.classList.add('visible');
            }
        });
        
        card.addEventListener('mouseleave', () => {
            cursorCircle.classList.remove('cursor--hover');
            if (cursorText) {
                cursorText.classList.remove('visible');
            }
        });
    });
    
    // Handle interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .magnetic, .tab-link');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorCircle.classList.add('cursor--hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursorCircle.classList.remove('cursor--hover');
        });
    });
    
    // Fix cursor disappearing on window edges
    document.addEventListener('mouseout', (e) => {
        if (e.relatedTarget === null) {
            isVisible = false;
            cursor.style.opacity = '0';
            cursorCircle.style.opacity = '0';
            if (cursorText) cursorText.style.opacity = '0';
        }
    });
    
    // Fix cursor on mobile/touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        cursor.style.display = 'none';
        cursorCircle.style.display = 'none';
        if (cursorText) cursorText.style.display = 'none';
        
        document.body.style.cursor = 'auto';
        
        // Reset cursor styles for interactive elements
        document.querySelectorAll('a, button, .btn, .magnetic, .project-card').forEach(el => {
            el.style.cursor = 'pointer';
        });
    }
}

// Initialize cursor when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Delay initialization slightly to ensure all elements are ready
    setTimeout(initCustomCursor, 100);
});

// Reinitialize on window resize
window.addEventListener('resize', function() {
    initCustomCursor();
});
