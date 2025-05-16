/**
 * About Section Layout Fix
 * This script applies direct DOM manipulations to ensure the about section
 * displays in the correct horizontal layout regardless of CSS issues
 */

document.addEventListener('DOMContentLoaded', function() {
    // Apply fixes immediately
    fixAboutSectionLayout();
    
    // Also fix after a short delay to ensure all content is loaded
    setTimeout(fixAboutSectionLayout, 500);
    
    // Fix on window resize
    window.addEventListener('resize', fixAboutSectionLayout);
    
    // Fix when tab is switched (which might affect layout)
    const tabLinks = document.querySelectorAll('#about .tab-link');
    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            setTimeout(fixAboutSectionLayout, 50);
        });
    });
});

function fixAboutSectionLayout() {
    console.log("Applying about section layout fix");
    
    // Get the about section elements
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;
    
    // Get the grid container and columns
    const gridContainer = aboutSection.querySelector('.grid-cols-1.lg\\:grid-cols-12');
    const leftColumn = aboutSection.querySelector('.lg\\:col-span-4');
    const rightColumn = aboutSection.querySelector('.lg\\:col-span-8');
    
    if (!gridContainer || !leftColumn || !rightColumn) return;
    
    // Apply forceful inline styles for horizontal layout
    if (window.innerWidth >= 768) {
        // Force horizontal layout on tablet and desktop
        gridContainer.style.cssText = `
            display: grid !important;
            grid-template-columns: 350px 1fr !important;
            gap: 2rem !important;
            width: 100% !important;
        `;
        
        leftColumn.style.cssText = `
            grid-column: 1 !important;
            width: 100% !important;
            max-width: 350px !important;
        `;
        
        rightColumn.style.cssText = `
            grid-column: 2 !important;
            width: 100% !important;
        `;
    } else {
        // Force vertical layout on mobile
        gridContainer.style.cssText = `
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            width: 100% !important;
        `;
        
        leftColumn.style.cssText = `
            grid-column: 1 !important;
            width: 100% !important;
        `;
        
        rightColumn.style.cssText = `
            grid-column: 1 !important;
            width: 100% !important;
        `;
    }
    
    // Ensure profile card is correctly sized
    const profileCard = leftColumn.querySelector('.bg-opacity-50.rounded-2xl');
    if (profileCard) {
        if (window.innerWidth >= 768) {
            profileCard.style.maxWidth = '350px';
            profileCard.style.margin = '0 auto';
        } else {
            profileCard.style.maxWidth = '100%';
        }
    }
    
    // Ensure tab content is visible
    const activeTab = aboutSection.querySelector('.tab-content.active');
    if (activeTab) {
        activeTab.style.display = 'block';
        activeTab.style.opacity = '1';
        activeTab.style.visibility = 'visible';
    }
    
    // Ensure entire section is visible
    aboutSection.style.opacity = '1';
    aboutSection.style.visibility = 'visible';
    
    console.log("About section layout fix applied");
}

// Run on load to make sure everything is fixed once page is fully loaded
window.addEventListener('load', function() {
    setTimeout(fixAboutSectionLayout, 300);
    // Try again after a longer delay to catch any late-loading content
    setTimeout(fixAboutSectionLayout, 1000);
});
