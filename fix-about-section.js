/**
 * Fix About Section Layout - CV Style with Smaller Content Width and Stable Layout
 * Maintains layout stability during tab switches with optimized content width
 */

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(fixAboutSectionLayout, 100);
});

function fixAboutSectionLayout() {
  console.log('Applying CV-style layout to About section');
  
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  
  // Reset any existing modifications
  resetAboutSection(aboutSection);
  
  // Apply CV-style layout with smaller content width
  applyCVLayout(aboutSection);
  
  // Setup enhanced tab switching with smooth transitions
  setupSmoothTabSwitching(aboutSection);
  
  // Stabilize tab content heights
  stabilizeTabContentHeights(aboutSection);
}

function resetAboutSection(aboutSection) {
  // Clean up any existing horizontal modifications
  const gridContainer = aboutSection.querySelector('.grid');
  if (gridContainer) {
    gridContainer.classList.remove('flex', 'flex-row', 'flex-nowrap');
    gridContainer.style.cssText = '';
    gridContainer.classList.add('grid', 'grid-cols-1', 'lg:grid-cols-12');
  }
  
  // Reset columns
  const profileColumn = aboutSection.querySelector('.lg\\:col-span-5');
  const contentColumn = aboutSection.querySelector('.lg\\:col-span-7');
  
  if (profileColumn) {
    profileColumn.style.cssText = '';
    profileColumn.classList.remove('flex', 'flex-col');
  }
  
  if (contentColumn) {
    contentColumn.style.cssText = '';
  }
  
  // Reset tab contents
  const tabContents = aboutSection.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.style.cssText = '';
    if (content.classList.contains('active')) {
      content.classList.remove('hidden');
    } else {
      content.classList.add('hidden');
    }
  });
  
  // Remove any scroll controls
  const scrollArrows = aboutSection.querySelector('.about-scroll-arrows');
  const scrollIndicators = aboutSection.querySelector('.about-scroll-indicators');
  if (scrollArrows) scrollArrows.remove();
  if (scrollIndicators) scrollIndicators.remove();
}

function applyCVLayout(aboutSection) {
  const gridContainer = aboutSection.querySelector('.grid.grid-cols-1.lg\\:grid-cols-12');
  if (!gridContainer) return;
  
  // Apply proper CV-style grid layout with smaller content width
  gridContainer.style.cssText = `
    display: grid !important;
    grid-template-columns: 380px 1fr !important;
    gap: 3rem !important;
    align-items: start !important;
    max-width: 1100px !important;
    margin: 0 auto !important;
    width: 100% !important;
  `;
  
  // Profile column styling (left side)
  const profileColumn = aboutSection.querySelector('.lg\\:col-span-5');
  if (profileColumn) {
    profileColumn.style.cssText = `
      position: sticky !important;
      top: 2rem !important;
      align-self: flex-start !important;
      height: fit-content !important;
      width: 100% !important;
      flex-shrink: 0 !important;
    `;
  }
  
  // Content column styling (right side) - smaller width
  const contentColumn = aboutSection.querySelector('.lg\\:col-span-7');
  if (contentColumn) {
    contentColumn.style.cssText = `
      display: flex !important;
      flex-direction: column !important;
      gap: 2rem !important;
      width: 100% !important;
      max-width: 600px !important;
      min-height: 500px !important;
    `;
    
    // Create stable container for tab content
    createStableTabContainer(contentColumn);
  }
  
  // Apply responsive design
  applyResponsiveDesign(gridContainer);
}

function createStableTabContainer(contentColumn) {
  const spaceContainer = contentColumn.querySelector('.space-y-6');
  if (!spaceContainer) return;
  
  // Reset the space container with fixed height
  spaceContainer.style.cssText = `
    display: flex !important;
    flex-direction: column !important;
    gap: 2rem !important;
    width: 100% !important;
    min-height: 500px !important;
    max-width: 600px !important;
  `;
  
  const tabSection = spaceContainer.querySelector('.mb-10');
  if (tabSection) {
    // Style the tab section with consistent height
    tabSection.style.cssText = `
      display: flex !important;
      flex-direction: column !important;
      width: 100% !important;
      margin-bottom: 0 !important;
      flex: 1 !important;
      min-height: 350px !important;
    `;
    
    // Style the tab navigation
    const tabNavigation = tabSection.querySelector('.flex.overflow-x-auto');
    if (tabNavigation) {
      tabNavigation.style.cssText = `
        display: flex !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
        margin-bottom: 1.5rem !important;
        overflow-x: auto !important;
        width: 100% !important;
        flex-shrink: 0 !important;
      `;
    }
    
    // Create or find the stable wrapper for tab contents
    let tabContentsWrapper = tabSection.querySelector('.tab-contents-wrapper');
    if (!tabContentsWrapper) {
      tabContentsWrapper = document.createElement('div');
      tabContentsWrapper.className = 'tab-contents-wrapper';
      tabContentsWrapper.style.cssText = `
        position: relative !important;
        flex: 1 !important;
        min-height: 280px !important;
        height: 280px !important;
        width: 100% !important;
        overflow: hidden !important;
      `;
      
      // Move all tab contents to the wrapper
      const tabContents = tabSection.querySelectorAll('.tab-content');
      tabContents.forEach(content => {
        tabContentsWrapper.appendChild(content);
      });
      
      tabSection.appendChild(tabContentsWrapper);
    }
    
    // Style each tab content with consistent positioning and smaller width
    const tabContents = tabContentsWrapper.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
      content.style.cssText = `
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        max-width: 600px !important;
        height: 280px !important;
        overflow-y: auto !important;
        opacity: 0 !important;
        visibility: hidden !important;
        transform: translateY(20px) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        padding: 0 !important;
        margin: 0 !important;
        box-sizing: border-box !important;
      `;
      
      if (content.classList.contains('active')) {
        content.style.cssText += `
          position: relative !important;
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) !important;
          height: auto !important;
          min-height: 280px !important;
        `;
      }
    });
  }
  
  // Handle skills section with smaller width
  const skillsSection = spaceContainer.querySelector('div:last-child');
  if (skillsSection && !skillsSection.classList.contains('mb-10')) {
    skillsSection.style.cssText = `
      width: 100% !important;
      max-width: 600px !important;
      padding-top: 2rem !important;
      border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
      margin-top: 0 !important;
      flex-shrink: 0 !important;
    `;
  }
}

function stabilizeTabContentHeights(aboutSection) {
  const tabContents = aboutSection.querySelectorAll('.tab-content');
  if (!tabContents.length) return;
  
  // Set consistent height for all tab contents
  const fixedHeight = 280; // Fixed height in pixels
  
  // Apply consistent height to wrapper
  const tabWrapper = aboutSection.querySelector('.tab-contents-wrapper');
  if (tabWrapper) {
    tabWrapper.style.minHeight = fixedHeight + 'px';
    tabWrapper.style.height = fixedHeight + 'px';
  }
  
  // Ensure all tab contents have the same dimensions
  tabContents.forEach(content => {
    if (!content.classList.contains('active')) {
      content.style.height = fixedHeight + 'px';
    }
  });
}

function setupSmoothTabSwitching(aboutSection) {
  const tabLinks = aboutSection.querySelectorAll('.tab-link');
  
  // Remove existing event listeners and add optimized ones
  tabLinks.forEach(link => {
    const newLink = link.cloneNode(true);
    link.parentNode.replaceChild(newLink, link);
    
    newLink.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const targetTab = this.getAttribute('data-tab');
      smoothSwitchToTab(targetTab, aboutSection);
    });
  });
}

function smoothSwitchToTab(targetTab, aboutSection) {
  // Use requestAnimationFrame for smooth transitions
  requestAnimationFrame(() => {
    const tabLinks = aboutSection.querySelectorAll('.tab-link');
    const tabContents = aboutSection.querySelectorAll('.tab-content');
    
    // Update tab link states immediately
    tabLinks.forEach(link => {
      const linkTab = link.getAttribute('data-tab');
      if (linkTab === targetTab) {
        link.classList.add('active-tab');
        link.style.borderColor = 'var(--accent)';
        link.style.color = 'var(--accent)';
      } else {
        link.classList.remove('active-tab');
        link.style.borderColor = 'transparent';
        link.style.color = '';
      }
    });
    
    // Handle tab content transitions with consistent sizing
    tabContents.forEach((content, index) => {
      const contentTab = content.id.replace('-tab', '');
      
      if (contentTab === targetTab) {
        // Show target content with smooth transition
        setTimeout(() => {
          content.classList.remove('hidden');
          content.classList.add('active');
          
          // Apply smooth fade-in with consistent dimensions
          requestAnimationFrame(() => {
            content.style.cssText = `
              position: relative !important;
              opacity: 1 !important;
              visibility: visible !important;
              transform: translateY(0) !important;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
              width: 100% !important;
              max-width: 600px !important;
              height: auto !important;
              min-height: 280px !important;
              padding: 0 !important;
              margin: 0 !important;
              overflow-y: auto !important;
              box-sizing: border-box !important;
            `;
          });
        }, 50);
      } else {
        // Hide other content with consistent dimensions
        content.classList.add('hidden');
        content.classList.remove('active');
        
        content.style.cssText = `
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          max-width: 600px !important;
          height: 280px !important;
          opacity: 0 !important;
          visibility: hidden !important;
          transform: translateY(20px) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          padding: 0 !important;
          margin: 0 !important;
          overflow-y: auto !important;
          box-sizing: border-box !important;
        `;
      }
    });
  });
}

function applyResponsiveDesign(gridContainer) {
  const mediaQuery = window.matchMedia('(max-width: 1024px)');
  
  function handleResponsive(e) {
    if (e.matches) {
      // Mobile/tablet layout
      gridContainer.style.cssText = `
        display: grid !important;
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
        max-width: 100% !important;
        margin: 0 auto !important;
        width: 100% !important;
      `;
      
      const profileColumn = document.querySelector('#about .lg\\:col-span-5');
      if (profileColumn) {
        profileColumn.style.cssText = `
          position: static !important;
          order: 1 !important;
          margin-bottom: 2rem !important;
          width: 100% !important;
          max-width: 400px !important;
          margin-left: auto !important;
          margin-right: auto !important;
        `;
      }
      
      const contentColumn = document.querySelector('#about .lg\\:col-span-7');
      if (contentColumn) {
        contentColumn.style.cssText = `
          order: 2 !important;
          width: 100% !important;
          max-width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 2rem !important;
          min-height: auto !important;
        `;
      }
      
      // Fix tab contents for mobile
      const tabContents = document.querySelectorAll('#about .tab-content');
      tabContents.forEach(content => {
        if (content.classList.contains('hidden')) {
          content.style.display = 'none';
        } else {
          content.style.cssText = `
            position: relative !important;
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            min-height: auto !important;
            padding: 0 !important;
            margin: 0 !important;
          `;
        }
      });
      
      // Adjust wrapper for mobile
      const tabWrapper = document.querySelector('#about .tab-contents-wrapper');
      if (tabWrapper) {
        tabWrapper.style.cssText = `
          position: relative !important;
          min-height: auto !important;
          height: auto !important;
          width: 100% !important;
          overflow: visible !important;
        `;
      }
    } else {
      // Desktop layout
      setTimeout(() => {
        applyCVLayout(document.getElementById('about'));
        stabilizeTabContentHeights(document.getElementById('about'));
      }, 100);
    }
  }
  
  mediaQuery.addListener(handleResponsive);
  handleResponsive(mediaQuery);
}

// Handle tab switching with proper content display
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('tab-link')) {
    e.preventDefault();
    
    const tabId = e.target.getAttribute('data-tab');
    const aboutSection = document.getElementById('about');
    
    // Remove active from all tabs
    aboutSection.querySelectorAll('.tab-link').forEach(tab => {
      tab.classList.remove('active-tab');
      tab.style.borderColor = 'transparent';
      tab.style.color = '#9ca3af';
    });
    
    // Add active to clicked tab
    e.target.classList.add('active-tab');
    e.target.style.borderColor = 'var(--accent)';
    e.target.style.color = 'var(--accent)';
    
    // Hide all tab content
    aboutSection.querySelectorAll('.tab-content').forEach(content => {
      content.classList.add('hidden');
      content.classList.remove('active');
    });
    
    // Show target tab content
    const targetContent = document.getElementById(`${tabId}-tab`);
    if (targetContent) {
      targetContent.classList.remove('hidden');
      targetContent.classList.add('active');
    }
  }
});

// Handle window resize with debouncing
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      fixAboutSectionLayout();
    }
  }, 250);
});

// Prevent layout shift on initial load
window.addEventListener('load', () => {
  setTimeout(() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      stabilizeTabContentHeights(aboutSection);
    }
  }, 500);
});