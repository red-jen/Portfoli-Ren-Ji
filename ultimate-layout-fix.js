/**
 * ULTIMATE LAYOUT FIX - The Nuclear Option
 * This script combines all fixes to ensure the About section displays properly
 * regardless of any CSS or JS conflicts.
 */

// Run immediately - don't even wait for DOM to be ready
(function() {
    console.log("🚀 ULTIMATE LAYOUT FIX: Initializing");
    
    // The master fix function that tries every approach
    function masterLayoutFix() {
        // Get the about section
        const aboutSection = document.getElementById('about');
        if (!aboutSection) return false;
        
        console.log("🔍 ULTIMATE LAYOUT FIX: Found about section, applying fixes");
        
        // 1. Force visibility and display properties
        aboutSection.style.visibility = 'visible';
        aboutSection.style.opacity = '1';
        aboutSection.style.display = 'block';
        aboutSection.style.overflow = 'visible';
        
        // 2. APPROACH 1: Fix the new flex-based layout
        const aboutWrapper = aboutSection.querySelector('.about-content-wrapper');
        if (aboutWrapper) {
            console.log("🛠️ ULTIMATE LAYOUT FIX: Fixing flex layout");
            
            // Force wrapper to use flex
            aboutWrapper.style.cssText = `
                display: flex !important;
                flex-wrap: nowrap !important;
                gap: 2rem !important;
                width: 100% !important;
                flex-direction: ${window.innerWidth >= 768 ? 'row' : 'column'} !important;
            `;
            
            // Force columns
            const leftColumn = aboutWrapper.querySelector('.about-left-column');
            const rightColumn = aboutWrapper.querySelector('.about-right-column');
            
            if (leftColumn && rightColumn) {
                if (window.innerWidth >= 768) {
                    // Desktop/tablet
                    leftColumn.style.cssText = `
                        flex: 0 0 350px !important;
                        width: 350px !important;
                        max-width: 350px !important;
                    `;
                    
                    rightColumn.style.cssText = `
                        flex: 1 !important;
                        width: auto !important;
                    `;
                } else {
                    // Mobile
                    leftColumn.style.cssText = `
                        flex: 0 0 100% !important;
                        width: 100% !important;
                    `;
                    
                    rightColumn.style.cssText = `
                        flex: 0 0 100% !important;
                        width: 100% !important;
                    `;
                }
                
                // Fix profile card
                const profileCard = leftColumn.querySelector('.bg-opacity-50.rounded-2xl');
                if (profileCard) {
                    profileCard.style.margin = '0 auto';
                    profileCard.style.maxWidth = window.innerWidth >= 768 ? '350px' : '100%';
                }
            }
        } 
        // 3. APPROACH 2: Fix the legacy grid layout
        else {
            console.log("🛠️ ULTIMATE LAYOUT FIX: Fixing grid layout");
            
            const gridContainer = aboutSection.querySelector('.grid-cols-1.lg\\:grid-cols-12');
            const leftColumn = aboutSection.querySelector('.lg\\:col-span-4');
            const rightColumn = aboutSection.querySelector('.lg\\:col-span-8');
            
            if (gridContainer && leftColumn && rightColumn) {
                // Set inline styles with !important
                if (window.innerWidth >= 768) {
                    // Desktop/tablet view
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
                    // Mobile view
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
                
                // Fix profile card
                const profileCard = leftColumn.querySelector('.bg-opacity-50.rounded-2xl');
                if (profileCard) {
                    profileCard.style.cssText = `
                        margin-left: auto !important;
                        margin-right: auto !important;
                        max-width: ${window.innerWidth >= 768 ? '350px' : '100%'} !important;
                    `;
                }
            }
        }
        
        // 4. APPROACH 3: Try recreating the about section structure if all else fails
        if ((!aboutWrapper && !aboutSection.querySelector('.grid-cols-1.lg\\:grid-cols-12')) || 
            aboutSection.dataset.ultimateFixAttempted !== 'true') {
            
            console.log("⚠️ ULTIMATE LAYOUT FIX: Structure not found, attempting to rebuild");
            
            // Mark that we've attempted the ultimate fix
            aboutSection.dataset.ultimateFixAttempted = 'true';
            
            // Save original content
            const originalContent = aboutSection.innerHTML;
            
            try {
                // Extract left and right column content
                let leftContent = '';
                let rightContent = '';
                
                // Try to find content for left column (profile card)
                const profileCard = aboutSection.querySelector('.bg-opacity-50.rounded-2xl');
                if (profileCard) {
                    leftContent = profileCard.outerHTML;
                }
                
                // Try to find content for right column (tabs and content)
                const tabsContainer = aboutSection.querySelector('.flex.overflow-x-auto.border-b');
                const tabContents = aboutSection.querySelector('.tab-contents');
                
                if (tabsContainer && tabContents) {
                    rightContent = tabsContainer.outerHTML + tabContents.outerHTML;
                }
                
                // Only proceed if we found both columns' content
                if (leftContent && rightContent) {
                    // Create new structure with flex layout
                    const newStructure = `
                        <div class="max-w-7xl mx-auto w-full relative z-10">
                            <!-- Section title with underline -->
                            <div class="flex flex-col items-center mb-16">
                                <h2 class="text-4xl md:text-5xl font-bold mb-4 relative">
                                    <span class="relative z-10">ABOUT ME</span>
                                    <span class="absolute bottom-2 left-0 w-full h-3 bg-accent opacity-20" style="background-color: var(--accent);"></span>
                                </h2>
                                <div class="w-12 h-1 bg-accent" style="background-color: var(--accent);"></div>
                            </div>
                            
                            <!-- Flex layout container -->
                            <div class="about-content-wrapper" style="display: flex; flex-direction: ${window.innerWidth >= 768 ? 'row' : 'column'}; gap: 2rem;">
                                <!-- Left column -->
                                <div class="about-left-column" style="${window.innerWidth >= 768 ? 'flex: 0 0 350px; max-width: 350px;' : 'width: 100%;'}">
                                    ${leftContent}
                                </div>
                                
                                <!-- Right column -->
                                <div class="about-right-column" style="${window.innerWidth >= 768 ? 'flex: 1;' : 'width: 100%;'}">
                                    ${rightContent}
                                </div>
                            </div>
                        </div>
                    `;
                    
                    // Replace content
                    aboutSection.innerHTML = newStructure;
                    
                    // Fix tab functionality
                    fixTabFunctionality();
                    
                    console.log("🔄 ULTIMATE LAYOUT FIX: Section structure rebuilt");
                } else {
                    console.log("❌ ULTIMATE LAYOUT FIX: Couldn't extract content for rebuild");
                }
            } catch (error) {
                // If anything fails, restore original content
                aboutSection.innerHTML = originalContent;
                console.error("❌ ULTIMATE LAYOUT FIX: Error during rebuild:", error);
            }
        }
        
        // 5. Make sure tab content is visible
        fixTabFunctionality();
        
        return true;
    }
    
    // Helper function to fix tab visibility and functionality
    function fixTabFunctionality() {
        // Get all tabs
        const tabLinks = document.querySelectorAll('#about .tab-link');
        const tabContents = document.querySelectorAll('#about .tab-content');
        
        // Hide all tab contents
        tabContents.forEach(content => {
            content.style.display = 'none';
            content.style.opacity = '0';
            content.classList.add('hidden');
            content.classList.remove('active');
        });
        
        // Find active tab or use first tab
        let activeTab = document.querySelector('#about .tab-link.active-tab');
        if (!activeTab && tabLinks.length > 0) {
            activeTab = tabLinks[0];
            activeTab.classList.add('active-tab');
            activeTab.style.borderColor = 'var(--accent)';
            activeTab.style.color = 'var(--accent)';
        }
        
        // Show active tab content
        if (activeTab) {
            const tabId = activeTab.getAttribute('data-tab');
            const activeContent = document.getElementById(tabId + '-tab');
            
            if (activeContent) {
                activeContent.style.display = 'block';
                activeContent.style.opacity = '1';
                activeContent.style.visibility = 'visible';
                activeContent.classList.remove('hidden');
                activeContent.classList.add('active');
            }
        }
        
        // Add click listeners to tabs
        tabLinks.forEach(link => {
            // Remove existing listeners by cloning and replacing
            const newLink = link.cloneNode(true);
            if (link.parentNode) {
                link.parentNode.replaceChild(newLink, link);
            }
            
            // Add new listener
            newLink.addEventListener('click', function() {
                // Get target tab
                const tabTarget = this.getAttribute('data-tab');
                
                // Remove active class from all tabs
                tabLinks.forEach(tab => {
                    tab.classList.remove('active-tab');
                    tab.style.borderColor = '';
                    tab.style.color = '';
                });
                
                // Add active class to clicked tab
                this.classList.add('active-tab');
                this.style.borderColor = 'var(--accent)';
                this.style.color = 'var(--accent)';
                
                // Hide all tab contents
                tabContents.forEach(content => {
                    content.style.display = 'none';
                    content.style.opacity = '0';
                    content.classList.add('hidden');
                    content.classList.remove('active');
                });
                
                // Show target tab content
                const targetContent = document.getElementById(tabTarget + '-tab');
                if (targetContent) {
                    targetContent.style.display = 'block';
                    targetContent.style.opacity = '1';
                    targetContent.style.visibility = 'visible';
                    targetContent.classList.remove('hidden');
                    targetContent.classList.add('active');
                }
                
                // Run layout fix again after tab switch
                setTimeout(masterLayoutFix, 10);
            });
        });
    }
    
    // Execute immediately
    masterLayoutFix();
    
    // Also run when window is fully loaded
    window.addEventListener('load', function() {
        masterLayoutFix();
        // And again after a slight delay
        setTimeout(masterLayoutFix, 500);
    });
    
    // Run when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        masterLayoutFix();
    });
    
    // Run on resize
    window.addEventListener('resize', function() {
        masterLayoutFix();
    });
    
    // Also poll occasionally for the first 10 seconds
    let attempts = 0;
    const interval = setInterval(function() {
        masterLayoutFix();
        attempts++;
        if (attempts >= 20) {
            clearInterval(interval);
            console.log("✅ ULTIMATE LAYOUT FIX: Completed polling sequence");
        }
    }, 500);
    
    console.log("🚀 ULTIMATE LAYOUT FIX: Setup complete");
})();
