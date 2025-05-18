// Tech Stack Orbital Animation

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set up the tech stack orbital animation
    initTechStack();
    
    // Handle window resize events with debounce for better performance
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            initTechStack();
        }, 250);
    }, { passive: true }); // Passive event listener for better performance
});

function initTechStack() {
    // Position tech items in their orbits
    requestAnimationFrame(() => {
        positionTechItems();
        addInteractiveEffects();
    });
}

function positionTechItems() {
    const orbits = document.querySelectorAll('.tech-orbit');
    
    orbits.forEach(orbit => {
        const items = orbit.querySelectorAll('.tech-item');
        const totalItems = items.length;
        const orbitRadius = orbit.offsetWidth / 2;
        
        items.forEach((item, index) => {
            // Calculate position based on index and total items
            const angle = (360 / totalItems) * index;
            const radian = (angle * Math.PI) / 180;
            
            const x = orbitRadius * Math.cos(radian);
            const y = orbitRadius * Math.sin(radian);
            
            // Position the item - use transform instead of left/top for better performance
            item.style.transform = `translate(${x}px, ${y}px)`;
            
            // Store original position for hover effect
            item.dataset.originalX = x;
            item.dataset.originalY = y;
        });
    });
}

function addInteractiveEffects() {
    const techItems = document.querySelectorAll('.tech-item');
    const techCore = document.querySelector('.tech-core');
    
    if (!techCore) return; // Safety check
    
    techItems.forEach(item => {
        // Add tooltip
        const imgAlt = item.querySelector('img')?.alt || 'Technology';
        item.setAttribute('title', imgAlt);
        
        // Use event delegation to improve performance
        item.addEventListener('mouseenter', () => {
            const textElement = techCore.querySelector('.text-sm');
            if (textElement) textElement.textContent = imgAlt;
            
            // Use opacity animation for better performance
            techItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.style.opacity = '0.5';
                }
            });
        }, { passive: true });
        
        item.addEventListener('mouseleave', () => {
            const textElement = techCore.querySelector('.text-sm');
            if (textElement) textElement.textContent = 'Years';
            
            // Reset opacity of all items
            techItems.forEach(otherItem => {
                otherItem.style.opacity = '1';
            });
        }, { passive: true });
    });
}

// Ensure resize events don't trigger scrollbar issues
function preventScrollbarFlash() {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        document.body.style.overflow = '';
    }, 50);
}

// Fix for any hover effects that might cause scrollbars
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.tech-item')) {
        preventScrollbarFlash();
    }
}, { passive: true });
