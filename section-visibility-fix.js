/**
 * Section Visibility Fix
 * Ensures all sections display properly regardless of scroll/animation state
 */

// Execute immediately to ensure content is visible
(function() {
    // Function to make all content visible
    function fixVisibility() {
        console.log("Fixing section visibility...");
        
        // Make sure all sections are visible
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '1';
            section.style.visibility = 'visible';
            section.style.display = 'block';
        });
        
        // Fix About section tab functionality
        const tabLinks = document.querySelectorAll('.tab-link');
        const tabContents = document.querySelectorAll('.tab-content');
        
        // Ensure at least one tab is active
        let hasActiveTab = false;
        tabContents.forEach(content => {
            if (content.classList.contains('active')) {
                hasActiveTab = true;
                content.style.display = 'block';
            }
        });
        
        // If no active tab, activate the first one
        if (!hasActiveTab && tabContents.length > 0) {
            tabContents[0].classList.add('active');
            tabContents[0].style.display = 'block';
            
            if (tabLinks.length > 0) {
                tabLinks[0].classList.add('active-tab');
            }
        }
        
        // Make sure project cards are visible
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.opacity = '1';
            card.style.visibility = 'visible';
        });
        
        // Make sure profile image in about section is visible
        const profileImage = document.querySelector('#about .rounded-full img');
        if (profileImage) {
            profileImage.style.opacity = '1';
        }
        
        // Make sure all skill tags are visible
        document.querySelectorAll('.px-4.py-2.bg-opacity-10').forEach(tag => {
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        });
        
        console.log("Section visibility fixed!");
    }
    
    // Run the fix multiple times to ensure it works
    // First run - immediate
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixVisibility);
    } else {
        fixVisibility();
    }
    
    // Second run - after a short delay
    setTimeout(fixVisibility, 500);
    
    // Third run - after page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(fixVisibility, 1000);
    });
    
    // Fix visibility when scrolling to sections
    document.addEventListener('scroll', function() {
        fixVisibility();
    }, { passive: true });
})();
