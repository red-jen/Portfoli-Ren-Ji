/**
 * About Section Fixes
 * Improves about section tab switching and animations
 */

document.addEventListener('DOMContentLoaded', function() {
    // Improved tab switching with animation
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Function to ensure at least one tab is active
    function ensureActiveTab() {
        // Check if any tab is already active
        let hasActiveTab = false;
        tabContents.forEach(tab => {
            if (tab.classList.contains('active') && tab.style.display !== 'none') {
                hasActiveTab = true;
            }
        });
        
        // If no tab is active, activate the first one
        if (!hasActiveTab && tabContents.length > 0) {
            tabLinks[0].classList.add('active-tab');
            tabLinks[0].style.color = 'var(--accent)';
            tabLinks[0].style.borderColor = 'var(--accent)';
            
            tabContents[0].classList.add('active');
            tabContents[0].style.display = 'block';
            tabContents[0].style.opacity = '1';
        }
    }
    
    // Set up tab click handlers
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the tab ID
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tab links
            tabLinks.forEach(tab => {
                tab.classList.remove('active-tab');
                tab.style.borderColor = 'transparent';
                tab.style.color = 'rgb(156, 163, 175)'; // text-gray-400
            });
            
            // Hide all tab contents with fade effect
            tabContents.forEach(content => {
                content.style.opacity = '0';
                content.style.transform = 'translateY(10px)';
                
                // After fade out, hide the content
                setTimeout(() => {
                    content.classList.remove('active');
                    content.style.display = 'none';
                }, 250);
            });
            
            // Add active class to clicked tab
            this.classList.add('active-tab');
            this.style.borderBottom = '2px solid var(--accent)';
            this.style.color = 'var(--accent)';
            
            // Show corresponding content with fade effect
            const targetTab = document.getElementById(tabId + '-tab');
            if (targetTab) {
                setTimeout(() => {
                    targetTab.classList.add('active');
                    targetTab.style.display = 'block';
                    
                    // Trigger reflow before fading in
                    void targetTab.offsetWidth;
                    
                    targetTab.style.opacity = '1';
                    targetTab.style.transform = 'translateY(0)';
                }, 300);
            }
        });
    });
    
    // Run fix on load and periodically to ensure tab visibility
    ensureActiveTab();
    setTimeout(ensureActiveTab, 500);
    setTimeout(ensureActiveTab, 1000);
    
    // Add CSS animations for smoother transitions
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerHTML = `
        .tab-content {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .tab-link {
            position: relative;
            transition: color 0.3s ease, border-color 0.3s ease;
        }
        
        .tab-link.active-tab {
            position: relative;
        }
        
        .tab-link.active-tab::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--accent);
        }
    `;
    document.head.appendChild(styleSheet);
    
    // Enhanced profile image animation
    const profileContainer = document.querySelector('#about .relative.w-40.h-40') || 
                            document.querySelector('#about .relative.w-48.h-48');
    
    if (profileContainer) {
        const profileGradient = profileContainer.querySelector('.absolute.rounded-full.bg-gradient-to-tr');
        
        if (profileGradient) {
            // Better pulse animation
            profileGradient.style.animation = 'customPulse 3s infinite alternate ease-in-out';
        }
    }
    
    // Add subtle animation to the skill tags
    const skillTags = document.querySelectorAll('#about .px-4.py-2.bg-opacity-10');
    
    skillTags.forEach((tag, index) => {
        // Staggered entrance animation
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            tag.style.transition = 'all 0.5s ease';
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
        
        // Hover animation enhancement
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(100, 255, 218, 0.2)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Add animation to the section background
    const aboutSection = document.getElementById('about');
    
    if (aboutSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const sectionTop = aboutSection.offsetTop;
            const sectionHeight = aboutSection.offsetHeight;
            
            if (scrollPosition > sectionTop - 300 && scrollPosition < sectionTop + sectionHeight) {
                const scrollProgress = (scrollPosition - (sectionTop - 300)) / (sectionHeight + 300);
                
                // Subtle parallax effect
                const translateY = scrollProgress * 30;
                aboutSection.style.backgroundPositionY = `${translateY}px`;
            }
        });
    }

    // Make sure tab content appears on page load
    function ensureActiveTabVisible() {
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab) {
            activeTab.style.display = 'block';
            activeTab.style.opacity = '1';
        } else {
            // If no active tab, set the first one as active
            const firstTab = document.getElementById('about-tab');
            if (firstTab) {
                firstTab.classList.add('active');
                firstTab.style.display = 'block';
                firstTab.style.opacity = '1';
                
                // Also activate the corresponding tab link
                const firstTabLink = document.querySelector('.tab-link[data-tab="about"]');
                if (firstTabLink) {
                    firstTabLink.classList.add('active-tab');
                    firstTabLink.style.borderBottom = '2px solid var(--accent)';
                    firstTabLink.style.color = 'var(--accent)';
                }
            }
        }
    }

    // Run on load and after a short delay to ensure it works
    ensureActiveTabVisible();
    setTimeout(ensureActiveTabVisible, 500);
});

// Add custom pulse animation to style sheet
(function addCustomAnimations() {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerHTML = `
        @keyframes customPulse {
            0% { opacity: 0.2; transform: scale(0.98); }
            100% { opacity: 0.4; transform: scale(1.02); }
        }
        
        .tab-content {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        #about .rounded-full img {
            transition: transform 0.5s ease;
        }
        
        #about .rounded-full:hover img {
            transform: scale(1.05);
        }
    `;
    document.head.appendChild(styleSheet);
})();

// Add event listener for window resize to handle responsive layout
window.addEventListener('resize', function() {
    // Ensure tabs fit in smaller screens
    if (window.innerWidth < 768) {
        const tabLinks = document.querySelectorAll('.tab-link');
        tabLinks.forEach(tab => {
            tab.style.padding = '0.5rem 1rem';
            tab.style.fontSize = '0.9rem';
        });
    } else {
        const tabLinks = document.querySelectorAll('.tab-link');
        tabLinks.forEach(tab => {
            tab.style.padding = '';
            tab.style.fontSize = '';
        });
    }
});
