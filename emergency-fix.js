/**
 * EMERGENCY LAYOUT FIX
 * This script addresses the issues shown in the error logs
 * with improved error handling and selector strategies
 */

// Run immediately with error handling
(function() {
  console.log("⚠️ Running emergency grid fix");
  
  try {
    fixLayout();
    
    // Keep checking in case of dynamic content changes
    window.addEventListener('DOMContentLoaded', fixLayout);
    window.addEventListener('load', fixLayout);
    const interval = setInterval(fixLayout, 500);
    setTimeout(() => clearInterval(interval), 5000);
    window.addEventListener('resize', fixLayout);
  } catch (error) {
    console.error("Error in emergency fix:", error);
  }
})();

function fixLayout() {
  try {
    console.log("Applying emergency fixes...");
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;
    
    // Make sure section is visible
    safeApplyStyle(aboutSection, {
      visibility: 'visible',
      opacity: '1',
      display: 'block'
    });
    
    // Try multiple selector strategies for grid container
    const gridContainer = findElement([
      '#about .grid-cols-1.lg\\:grid-cols-12',
      '#about > div > div.grid',
      '#about .grid',
      '#about > div > div:nth-child(2)'
    ]);
    
    // Try multiple selector strategies for columns
    const leftColumn = findElement([
      '#about .lg\\:col-span-4',
      '#about > div > div.grid > div:first-child',
      '#about .grid > div:first-child'
    ]);
    
    const rightColumn = findElement([
      '#about .lg\\:col-span-8',
      '#about > div > div.grid > div:last-child',
      '#about .grid > div:nth-child(2)'
    ]);
    
    // If we found the grid structure
    if (gridContainer && leftColumn && rightColumn) {
      console.log("Found grid structure, applying fixes");
      
      // Desktop/tablet layout
      if (window.innerWidth >= 768) {
        safeApplyStyle(gridContainer, {
          display: 'grid',
          gridTemplateColumns: '350px 1fr',
          gap: '2rem'
        });
        
        safeApplyStyle(leftColumn, {
          gridColumn: '1',
          width: '100%',
          maxWidth: '350px'
        });
        
        safeApplyStyle(rightColumn, {
          gridColumn: '2',
          width: '100%'
        });
      } 
      // Mobile layout
      else {
        safeApplyStyle(gridContainer, {
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem'
        });
        
        safeApplyStyle(leftColumn, {
          gridColumn: '1',
          width: '100%'
        });
        
        safeApplyStyle(rightColumn, {
          gridColumn: '1',
          width: '100%'
        });
      }
      
      // Fix the profile card with multiple selector strategies
      const profileCard = findElement([
        '#about .bg-opacity-50.rounded-2xl',
        '#about .rounded-2xl',
        leftColumn.querySelector('.rounded-2xl'),
        leftColumn.querySelector('div > div')
      ]);
      
      if (profileCard) {
        safeApplyStyle(profileCard, {
          margin: '0 auto',
          maxWidth: window.innerWidth >= 768 ? '350px' : '100%'
        });
      } else {
        console.log("Warning: Profile card not found");
      }
    } else {
      console.log("Warning: Grid structure not fully found");
      // Try alternative approach with flexbox if grid not found
      createFlexboxLayout(aboutSection);
    }
    
    // Fix visibility of tab content
    const activeTab = findElement([
      '#about .tab-content.active',
      '#about .tab-contents > div:not([style*="display: none"])', 
      '#about .tab-contents > div:first-child'
    ]);
    
    if (activeTab) {
      safeApplyStyle(activeTab, {
        display: 'block',
        opacity: '1',
        visibility: 'visible'
      });
    }
    
    console.log("Emergency fixes applied successfully");
  } catch (error) {
    console.error("Error in fixLayout:", error);
  }
}

// Safe style application with error handling
function safeApplyStyle(element, styles) {
  if (!element) return;
  
  try {
    for (const [property, value] of Object.entries(styles)) {
      try {
        element.style[property] = value;
      } catch (err) {
        console.warn(`Failed to set ${property} on element:`, err);
      }
    }
  } catch (error) {
    console.error("Error in safeApplyStyle:", error);
  }
}

// Helper to find elements using multiple strategies
function findElement(selectors) {
  for (const selector of selectors) {
    try {
      let element = null;
      if (typeof selector === 'string') {
        element = document.querySelector(selector);
      } else if (selector instanceof Element) {
        element = selector;
      }
      
      if (element) {
        return element;
      }
    } catch (error) {
      console.warn("Selector failed:", selector, error);
    }
  }
  return null;
}

// Create a flexbox layout from scratch if grid fails
function createFlexboxLayout(aboutSection) {
  try {
    console.log("Attempting to create flexbox layout");
    
    // Find content containers using more generic selectors
    const contentContainer = findElement([
      '#about > div',
      '#about > div:first-child'
    ]);
    
    if (!contentContainer) return;
    
    // Try to find existing content
    const title = findElement(['#about h2', '#about .text-4xl']);
    const profileContent = findElement(['#about .rounded-2xl', '#about img[src*="0P9A"]:first-child']);
    const tabsContent = findElement(['#about .tab-contents', '#about .overflow-x-auto']);
    
    if (!profileContent || !tabsContent) {
      console.log("Can't find necessary content for flexbox");
      return;
    }
    
    // Preserve any title/header content
    let headerHTML = '';
    if (title && title.parentElement) {
      headerHTML = title.parentElement.outerHTML;
    }
    
    // Create flex container
    const flexContainer = document.createElement('div');
    flexContainer.className = 'about-content-wrapper';
    flexContainer.style.cssText = `
      display: flex !important;
      flex-direction: ${window.innerWidth >= 768 ? 'row' : 'column'} !important;
      gap: 2rem !important;
      width: 100% !important;
    `;
    
    // Create columns
    const leftCol = document.createElement('div');
    leftCol.className = 'about-left-column';
    leftCol.style.cssText = window.innerWidth >= 768 
      ? 'flex: 0 0 350px !important; max-width: 350px !important;' 
      : 'width: 100% !important;';
      
    const rightCol = document.createElement('div');
    rightCol.className = 'about-right-column';
    rightCol.style.cssText = window.innerWidth >= 768 
      ? 'flex: 1 !important;' 
      : 'width: 100% !important;';
    
    // Clone existing content into new structure
    leftCol.appendChild(profileContent.cloneNode(true));
    rightCol.appendChild(tabsContent.cloneNode(true));
    
    // Clear and rebuild content
    contentContainer.innerHTML = headerHTML;
    flexContainer.appendChild(leftCol);
    flexContainer.appendChild(rightCol);
    contentContainer.appendChild(flexContainer);
    
    console.log("Flexbox layout created");
  } catch (error) {
    console.error("Error in createFlexboxLayout:", error);
  }
}
