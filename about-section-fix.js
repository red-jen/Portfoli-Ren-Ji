// About section enhancement script

document.addEventListener('DOMContentLoaded', function() {
    // Fix tab initialization and switching
    initializeAboutTabs();
    
    // Fix profile card hover effects
    enhanceProfileCard();
    
    // Ensure all content is visible
    fixVisibilityIssues();
    
    // Give it a small delay to ensure the DOM is fully ready
    setTimeout(fixVisibilityIssues, 100);
});

function initializeAboutTabs() {
    // Get all tab links
    const tabLinks = document.querySelectorAll('#about .tab-link');
    
    // Add click event listener to each tab link
    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Get the target tab from data-tab attribute
            const tabTarget = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabLinks.forEach(tab => {
                tab.classList.remove('active-tab');
                tab.style.borderColor = '';
                tab.style.color = '';
            });
            
            // Add active class to the clicked tab
            this.classList.add('active-tab');
            this.style.borderColor = 'var(--accent)';
            this.style.color = 'var(--accent)';
            
            // Hide all tab contents
            document.querySelectorAll('#about .tab-content').forEach(content => {
                content.classList.add('hidden');
                content.classList.remove('active');
                content.style.display = 'none';
                content.style.opacity = '0';
            });
            
            // Show the target tab content
            const targetContent = document.getElementById(tabTarget + '-tab');
            if (targetContent) {
                targetContent.classList.remove('hidden');
                targetContent.classList.add('active');
                targetContent.style.display = 'block';
                
                // Use setTimeout to ensure the display property has taken effect before setting opacity
                setTimeout(() => {
                    targetContent.style.opacity = '1';
                }, 10);
            }
        });
    });
    
    // Initialize tabs on page load
    const activeTab = document.querySelector('#about .tab-link.active-tab');
    if (activeTab) {
        // Manually trigger a click on the active tab to ensure correct initialization
        activeTab.click();
    } else if (tabLinks.length > 0) {
        // If no active tab is found, activate the first one
        tabLinks[0].classList.add('active-tab');
        tabLinks[0].style.borderColor = 'var(--accent)';
        tabLinks[0].style.color = 'var(--accent)';
        
        const firstTabContent = document.querySelector('#about .tab-content');
        if (firstTabContent) {
            firstTabContent.classList.remove('hidden');
            firstTabContent.classList.add('active');
            firstTabContent.style.display = 'block';
            firstTabContent.style.opacity = '1';
        }
    }
}

function enhanceProfileCard() {
    // Add hover effect to the profile image
    const profileImage = document.querySelector('#about .relative.w-48.h-48 img, #about .relative.w-40.h-40 img');
    const profileCard = document.querySelector('#about .bg-opacity-50.rounded-2xl');
    
    if (profileImage && profileCard) {
        // Create a subtle parallax effect on hover
        profileCard.addEventListener('mousemove', function(e) {
            // Only apply effects on devices that support hover
            if (window.matchMedia('(hover: hover)').matches) {
                const bounds = this.getBoundingClientRect();
                const mouseX = e.clientX - bounds.left;
                const mouseY = e.clientY - bounds.top;
                
                const centerX = bounds.width / 2;
                const centerY = bounds.height / 2;
                
                const moveX = (mouseX - centerX) / 20;
                const moveY = (mouseY - centerY) / 20;
                
                profileImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
        
        profileCard.addEventListener('mouseleave', function() {
            // Reset transform when mouse leaves
            profileImage.style.transform = 'translate(0, 0)';
        });
    }
}

function fixVisibilityIssues() {
    // Make sure the About section and its content are visible
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.style.visibility = 'visible';
        aboutSection.style.opacity = '1';
        
        // Force tab contents to be properly styled
        const activeTabContent = aboutSection.querySelector('.tab-content.active');
        if (activeTabContent) {
            activeTabContent.style.display = 'block';
            activeTabContent.style.opacity = '1';
        }
        
        // Ensure all children are visible
        aboutSection.querySelectorAll('p, h3, h4, img, div').forEach(el => {
            el.style.opacity = '1';
        });
    }
    
    // Make sure profile image is visible
    const profileImage = document.querySelector('#about .relative.w-48.h-48 img, #about .relative.w-40.h-40 img');
    if (profileImage) {
        profileImage.style.opacity = '1';
    }
    
    // Fix the grid layout issues
    const aboutGrid = document.querySelector('#about .grid-cols-1.lg\\:grid-cols-12');
    const leftColumn = document.querySelector('#about .lg\\:col-span-4');
    const rightColumn = document.querySelector('#about .lg\\:col-span-8');
    
    if (aboutGrid && leftColumn && rightColumn) {
        // Force the correct layout based on screen size
        if (window.innerWidth >= 768) {
            aboutGrid.style.display = 'grid';
            
            if (window.innerWidth >= 1024) {
                aboutGrid.style.gridTemplateColumns = 'minmax(350px, 1fr) 2fr';
            } else {
                aboutGrid.style.gridTemplateColumns = 'minmax(300px, 1fr) 2fr';
            }
            
            leftColumn.style.gridColumn = '1 / 2';
            rightColumn.style.gridColumn = '2 / 3';
        } else {
            aboutGrid.style.gridTemplateColumns = '1fr';
        }
    }
    
    // Ensure the tab content is visible
    const activeTabContent = document.querySelector('#about .tab-content.active');
    if (activeTabContent) {
        activeTabContent.style.display = 'block';
        activeTabContent.style.opacity = '1';
    }
}

// Run the script once when the page has loaded
window.addEventListener('load', function() {
    // Wait a bit to ensure everything else has initialized
    setTimeout(() => {
        initializeAboutTabs();
        fixVisibilityIssues();
    }, 300);
});

// Add a resize handler to fix layout on window resize
window.addEventListener('resize', function() {
    fixVisibilityIssues();
});
