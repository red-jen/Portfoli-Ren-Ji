// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log("Initializing tab switching functionality");
    
    // Wait a short time to make sure the consolidated fix has run
    setTimeout(initTabs, 100);
    
    // Also initialize on load to be safe
    window.addEventListener('load', function() {
        setTimeout(initTabs, 100);
    });
});

function initTabs() {
    // Get all tab links
    const tabLinks = document.querySelectorAll('.tab-link');
    
    if (!tabLinks.length) {
        console.log("No tab links found yet, trying again later");
        setTimeout(initTabs, 200);
        return;
    }
    
    console.log("Found tab links, initializing");
    
    // Add click event listener to each tab link
    tabLinks.forEach(link => {
        // Remove existing listeners by cloning the element
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
        
        // Add new click listener
        newLink.addEventListener('click', function() {
            // Get the target tab from data-tab attribute
            const tabTarget = this.getAttribute('data-tab');
            if (!tabTarget) return;
            
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
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
                content.style.opacity = '0';
            });
            
            // Show the target tab content
            const targetContent = document.getElementById(tabTarget + '-tab');
            if (targetContent) {
                targetContent.classList.add('active');
                targetContent.style.display = 'block';
                
                // Use a small timeout to ensure display is applied before opacity transition
                setTimeout(() => {
                    targetContent.style.opacity = '1';
                }, 10);
            }
        });
    });
    
    // Initialize tabs - ensure the active tab is shown on page load
    const activeTab = document.querySelector('.tab-link.active-tab');
    if (activeTab) {
        // Make sure the active tab's content is visible
        const tabTarget = activeTab.getAttribute('data-tab');
        const targetContent = document.getElementById(tabTarget + '-tab');
        if (targetContent) {
            targetContent.classList.add('active');
            targetContent.style.display = 'block';
            targetContent.style.opacity = '1';
        }
    } else if (tabLinks.length > 0) {
        // If no tab is active, activate the first one
        tabLinks[0].click();
    }
}