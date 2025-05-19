/**
 * About Section Content Fix
 * Ensures tab content is visible and properly displayed in the horizontal layout
 */

document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for other scripts to initialize
  setTimeout(fixAboutSectionTabContent, 800);
});

function fixAboutSectionTabContent() {
  console.log("Fixing about section tab content visibility");
  
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  
  // Get main container
  const container = aboutSection.querySelector('.grid-cols-1.lg\\:grid-cols-12');
  if (!container) return;
  
  // Find tab navigation and tab contents
  const tabs = aboutSection.querySelectorAll('.tab-link');
  const tabContents = aboutSection.querySelectorAll('.tab-content');
  
  if (!tabs.length || !tabContents.length) {
    console.warn("No tabs or tab contents found in about section");
    return;
  }
  
  console.log(`Found ${tabs.length} tabs and ${tabContents.length} content sections`);
  
  // Check if any tab content is visible
  let visibleContentFound = false;
  
  tabContents.forEach((content) => {
    // Check display property
    const display = window.getComputedStyle(content).display;
    if (display !== 'none') visibleContentFound = true;
    
    // Output debug info
    console.log(`Tab content ${content.id}: display=${display}`);
    
    // Make sure contents are displayed properly
    content.style.display = 'block';
    content.style.visibility = 'visible';
    content.style.opacity = '1';
    
    // Move content out of hidden containers if needed
    if (content.parentElement && content.parentElement.classList.contains('hidden')) {
      console.log(`Moving ${content.id} out of hidden container`);
      container.appendChild(content);
    }
  });
  
  // If no content is visible, force display the first tab
  if (!visibleContentFound && tabContents.length > 0) {
    console.log("No visible content found, forcing first tab to display");
    
    // Show first tab content and mark corresponding tab as active
    const firstTab = tabs[0];
    const firstTabId = firstTab.getAttribute('data-tab');
    
    // Mark the first tab as active
    tabs.forEach(tab => {
      const isFirstTab = tab.getAttribute('data-tab') === firstTabId;
      tab.classList.toggle('active-tab', isFirstTab);
      tab.style.backgroundColor = isFirstTab ? 'rgba(100, 255, 218, 0.1)' : 'transparent';
      tab.style.color = isFirstTab ? 'var(--accent, #64ffda)' : '';
      tab.style.fontWeight = isFirstTab ? 'bold' : 'normal';
    });
    
    // Ensure each tab content is appropriately shown or hidden
    tabContents.forEach(content => {
      const isFirstContent = content.id === `${firstTabId}-tab`;
      content.style.display = isFirstContent ? 'block' : 'none';
    });
  }
  
  // Fix tab click event handlers
  setupImprovedTabNavigation(tabs, tabContents);
  
  // If using horizontal layout, fix styling
  fixHorizontalLayoutStyling(container, tabContents);
}

function setupImprovedTabNavigation(tabs, tabContents) {
  // Clear existing listeners and set up new ones
  tabs.forEach(tab => {
    const clone = tab.cloneNode(true);
    tab.parentNode.replaceChild(clone, tab);
    
    clone.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Update active tab styling
      tabs.forEach(t => {
        const isActiveTab = t === this;
        t.classList.toggle('active-tab', isActiveTab);
        t.style.backgroundColor = isActiveTab ? 'rgba(100, 255, 218, 0.1)' : 'transparent';
        t.style.color = isActiveTab ? 'var(--accent, #64ffda)' : '';
        t.style.fontWeight = isActiveTab ? 'bold' : 'normal';
      });
      
      // Toggle content visibility with enhanced effect
      tabContents.forEach(content => {
        const shouldShow = content.id === `${tabId}-tab`;
        
        if (shouldShow) {
          // Show this tab content with fade-in effect
          content.style.transition = 'opacity 0.3s ease';
          content.style.display = 'block';
          
          // Force reflow
          void content.offsetWidth;
          
          content.style.opacity = '1';
          
          // Scroll this content into view if needed
          setTimeout(() => {
            if (content.scrollIntoView) {
              content.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
              });
            }
          }, 50);
        } else {
          // Hide other tab contents
          content.style.opacity = '0';
          content.style.display = 'none';
        }
      });
      
      console.log(`Tab clicked: ${tabId}`);
    });
  });
}

function fixHorizontalLayoutStyling(container, tabContents) {
  // Check if we're using horizontal layout
  if (window.getComputedStyle(container).flexDirection === 'row') {
    console.log("Fixing horizontal layout styling");
    
    // Make sure tab content cards have appropriate styling
    tabContents.forEach(content => {
      content.style.flex = '0 0 380px';
      content.style.minWidth = '380px';
      content.style.width = '380px';
      content.style.height = '500px';
      content.style.overflow = 'auto';
      content.style.background = 'rgba(18, 18, 18, 0.5)';
      content.style.backdropFilter = 'blur(8px)';
      content.style.padding = '2rem';
      content.style.borderRadius = '16px';
      content.style.border = '1px solid rgba(255, 255, 255, 0.05)';
      
      // Critical fix: ensure we're not hiding content
      const existingDisplay = content.style.display;
      if (existingDisplay === 'none') {
        // Preserve hidden state for inactive tabs
        content.style.visibility = 'hidden';
        content.style.opacity = '0';
      } else {
        // Make active tab fully visible
        content.style.visibility = 'visible';
        content.style.opacity = '1';
      }
    });
    
    // Make sure container has horizontal scrolling enabled
    container.style.overflowX = 'auto';
    container.style.flexWrap = 'nowrap';
    container.style.alignItems = 'stretch';
    container.style.gap = '2rem';
    container.style.paddingBottom = '2rem';
    
    // Add a delay to try scrolling to active tab content
    setTimeout(() => {
      const activeTab = document.querySelector('.tab-link.active-tab');
      if (activeTab) {
        const activeTabId = activeTab.getAttribute('data-tab');
        const activeContent = document.getElementById(`${activeTabId}-tab`);
        
        if (activeContent) {
          activeContent.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      }
    }, 100);
  }
}

// Initialize on page load and when tab content might change
window.addEventListener('load', fixAboutSectionTabContent);
document.addEventListener('about:tabsUpdated', fixAboutSectionTabContent);
