/**
 * Tab functionality emergency fix
 * This script ensures that tab switching works properly in the About section
 */

document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    
    // Run again after a slight delay to catch any elements that load late
    setTimeout(initializeTabs, 500);
});

function initializeTabs() {
    console.log("🔄 Initializing tabs");
    
    // Get all tab links
    const tabLinks = document.querySelectorAll('#about .tab-link');
    
    if (!tabLinks.length) {
        console.log("❌ No tab links found");
        return;
    }
    
    console.log(`✅ Found ${tabLinks.length} tabs`);
    
    // First, clear any existing listeners by cloning and replacing
    tabLinks.forEach(link => {
        const newLink = link.cloneNode(true);
        if (link.parentNode) {
            link.parentNode.replaceChild(newLink, link);
        }
    });
    
    // Now get the fresh links and add listeners
    const freshTabLinks = document.querySelectorAll('#about .tab-link');
    
    // Add click event to each tab
    freshTabLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Get the target tab ID
            const tabId = this.getAttribute('data-tab');
            if (!tabId) {
                console.log("❌ Tab missing data-tab attribute");
                return;
            }
            
            console.log(`🔄 Switching to tab: ${tabId}`);
            
            // Remove active class from all tabs
            freshTabLinks.forEach(tab => {
                tab.classList.remove('active-tab');
                tab.style.borderColor = '';
                tab.style.color = '';
            });
            
            // Add active class to clicked tab
            this.classList.add('active-tab');
            this.style.borderColor = 'var(--accent)';
            this.style.color = 'var(--accent)';
            
            // Get all tab contents
            const tabContents = document.querySelectorAll('#about .tab-content');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.add('hidden');
                content.classList.remove('active');
                content.style.display = 'none';
                content.style.opacity = '0';
                content.style.visibility = 'hidden';
            });
            
            // Show active tab content
            const activeContent = document.getElementById(tabId + '-tab');
            if (activeContent) {
                activeContent.classList.remove('hidden');
                activeContent.classList.add('active');
                activeContent.style.display = 'block';
                
                // Use a slight delay to ensure display property is applied
                setTimeout(() => {
                    activeContent.style.opacity = '1';
                    activeContent.style.visibility = 'visible';
                }, 10);
                
                console.log(`✅ Tab content ${tabId}-tab is now visible`);
            } else {
                console.log(`❌ Could not find tab content with ID: ${tabId}-tab`);
            }
        });
    });
    
    // Activate the default tab if none are active
    const activeTab = document.querySelector('#about .tab-link.active-tab');
    if (!activeTab && freshTabLinks.length > 0) {
        console.log("🔄 No active tab found, activating first tab");
        freshTabLinks[0].click();
    } else if (activeTab) {
        // Make sure the active tab's content is visible
        const tabId = activeTab.getAttribute('data-tab');
        const activeContent = document.getElementById(tabId + '-tab');
        
        if (activeContent) {
            activeContent.classList.remove('hidden');
            activeContent.classList.add('active');
            activeContent.style.display = 'block';
            activeContent.style.opacity = '1';
            activeContent.style.visibility = 'visible';
            
            console.log(`✅ Ensured active tab ${tabId}-tab is visible`);
        }
    }
}

// Also run when the page is fully loaded
window.addEventListener('load', function() {
    setTimeout(initializeTabs, 300);
});
