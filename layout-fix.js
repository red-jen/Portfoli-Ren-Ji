/**
 * Layout fix for About Me section
 * This script ensures the About Me section displays correctly in a horizontal layout
 */

document.addEventListener('DOMContentLoaded', function() {
    fixAboutSectionLayout();
    
    // Fix layout on resize
    window.addEventListener('resize', fixAboutSectionLayout);
});

function fixAboutSectionLayout() {
    const aboutSection = document.getElementById('about');
    
    if (!aboutSection) return;
    
    // Fix the grid layout
    const aboutGrid = aboutSection.querySelector('.grid-cols-1.lg\\:grid-cols-12');
    if (aboutGrid) {
        // Clear any inline styles that might interfere
        aboutGrid.style.display = '';
        
        // Apply the right layout classes based on screen width
        if (window.innerWidth >= 768) {
            aboutGrid.classList.add('about-horizontal-layout');
            
            // Explicitly set grid template columns for browsers that might need it
            aboutGrid.style.display = 'grid';
            
            if (window.innerWidth >= 1024) {
                aboutGrid.style.gridTemplateColumns = 'minmax(350px, 1fr) 2fr';
            } else {
                aboutGrid.style.gridTemplateColumns = 'minmax(300px, 1fr) 2fr';
            }
        } else {
            aboutGrid.classList.remove('about-horizontal-layout');
            aboutGrid.style.gridTemplateColumns = '1fr';
        }
    }
    
    // Make sure tab content is visible
    const activeTab = aboutSection.querySelector('.tab-content.active');
    if (activeTab) {
        activeTab.style.display = 'block';
        activeTab.style.opacity = '1';
    }
    
    // Fix profile card on small screens
    const profileCard = aboutSection.querySelector('.bg-opacity-50.rounded-2xl');
    if (profileCard && window.innerWidth < 768) {
        profileCard.style.maxWidth = '100%';
    } else if (profileCard) {
        profileCard.style.maxWidth = '350px';
    }
}

// Run on load to fix initial state
window.addEventListener('load', function() {
    setTimeout(fixAboutSectionLayout, 300);
});
