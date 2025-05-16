/**
 * Section Visibility Fix
 * Simple utility to ensure all sections are visible
 */

// Execute immediately
(function() {
    function fixVisibility() {
        // Make all sections visible
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '1';
            section.style.visibility = 'visible';
        });
        
        // Fix About section specific issues
        const aboutTabContent = document.querySelector('#about .tab-content.active');
        if (aboutTabContent) {
            aboutTabContent.style.display = 'block';
        }
        
        // Ensure profile image is visible
        const profileImages = document.querySelectorAll('#about img');
        profileImages.forEach(img => {
            img.style.opacity = '1';
        });
        
        // Make sure all project cards are visible
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.opacity = '1';
        });
    }
    
    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixVisibility);
    } else {
        fixVisibility();
    }
    
    // Also run after a short delay for reliability
    setTimeout(fixVisibility, 500);
})();
