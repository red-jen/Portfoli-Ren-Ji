/**
 * Fix About Section Layout - CV Style (One Row, Two Columns)
 * Clean implementation with profile left, content right
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
  
  // Apply CV-style layout
  applyCVLayout(aboutSection);
  
  // Setup enhanced tab switching
  setupTabSwitching(aboutSection);
}

function resetAboutSection(aboutSection) {
  // Clean up any existing horizontal modifications
  const gridContainer = aboutSection.querySelector('.grid');
  if (gridContainer) {
    // Remove any flex modifications
    gridContainer.classList.remove('flex', 'flex-row', 'flex-nowrap');
    gridContainer.style.cssText = '';
    
    // Ensure proper grid classes
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
  
  // Apply proper CV-style grid layout
  gridContainer.style.cssText = `
    display: grid !important;
    grid-template-columns: 380px 1fr !important;
    gap: 3rem !important;
    align-items: start !important;
    max-width: 1200px !important;
    margin: 0 auto !important;
    width: 100% !important;
  `;
  
  // Profile column styling
  const profileColumn = aboutSection.querySelector('.lg\\:col-span-5');
  if (profileColumn) {
    profileColumn.style.cssText = `
      position: sticky !important;
      top: 2rem !important;
      align-self: flex-start !important;
      height: fit-content !important;
    `;
  }
  
  // Content column styling
  const contentColumn = aboutSection.querySelector('.lg\\:col-span-7');
  if (contentColumn) {
    contentColumn.style.cssText = `
      min-height: 600px !important;
      display: flex !important;
      flex-direction: column !important;
    `;
    
    // Ensure tab content container has proper height
    const tabContentArea = contentColumn.querySelector('.space-y-6');
    if (tabContentArea) {
      tabContentArea.style.cssText = `
        flex: 1 !important;
        display: flex !important;
        flex-direction: column !important;
      `;
      
      // Style the tab content container
      const tabSection = tabContentArea.querySelector('.mb-10');
      if (tabSection) {
        tabSection.style.cssText = `
          flex: 1 !important;
          display: flex !important;
          flex-direction: column !important;
        `;
        
        // Find tab contents wrapper and set proper height
        const tabContentsWrapper = tabSection.querySelector('div:last-child');
        if (tabContentsWrapper) {
          tabContentsWrapper.style.cssText = `
            position: relative !important;
            min-height: 400px !important;
            flex: 1 !important;
          `;
        }
      }
    }
  }
  
  // Style tab contents for proper CV layout
  const tabContents = aboutSection.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.style.cssText = `
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      min-height: 400px !important;
      opacity: 0 !important;
      visibility: hidden !important;
      transform: translateY(10px) !important;
      transition: all 0.3s ease !important;
    `;
    
    if (content.classList.contains('active')) {
      content.style.cssText += `
        position: relative !important;
        opacity: 1 !important;
        visibility: visible !important;
        transform: translateY(0) !important;
      `;
    }
  });
  
  // Apply responsive design
  applyResponsiveDesign(gridContainer);
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
        max-width: 600px !important;
        margin: 0 auto !important;
        width: 100% !important;
      `;
      
      const profileColumn = document.querySelector('#about .lg\\:col-span-5');
      if (profileColumn) {
        profileColumn.style.cssText = `
          position: static !important;
          order: 1 !important;
          margin-bottom: 2rem !important;
        `;
      }
      
      const contentColumn = document.querySelector('#about .lg\\:col-span-7');
      if (contentColumn) {
        contentColumn.style.cssText = `
          order: 2 !important;
          min-height: auto !important;
        `;
      }
    } else {
      // Desktop layout
      applyCVLayout(document.getElementById('about'));
    }
  }
  
  mediaQuery.addListener(handleResponsive);
  handleResponsive(mediaQuery);
}

function setupTabSwitching(aboutSection) {
  const tabLinks = aboutSection.querySelectorAll('.tab-link');
  const tabContents = aboutSection.querySelectorAll('.tab-content');
  
  // Remove existing event listeners and add new ones
  tabLinks.forEach(link => {
    // Clone to remove existing listeners
    const newLink = link.cloneNode(true);
    link.parentNode.replaceChild(newLink, link);
    
    newLink.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const targetTab = this.getAttribute('data-tab');
      switchToTab(targetTab, aboutSection);
    });
  });
}

function switchToTab(targetTab, aboutSection) {
  requestAnimationFrame(() => {
    const tabLinks = aboutSection.querySelectorAll('.tab-link');
    const tabContents = aboutSection.querySelectorAll('.tab-content');
    
    // Update tab link states
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
    
    // Update tab content visibility
    tabContents.forEach(content => {
      const contentTab = content.id.replace('-tab', '');
      
      if (contentTab === targetTab) {
        // Show target content
        content.classList.remove('hidden');
        content.classList.add('active');
        
        content.style.cssText = `
          position: relative !important;
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) !important;
          transition: all 0.3s ease !important;
          min-height: 400px !important;
        `;
      } else {
        // Hide other content
        content.classList.add('hidden');
        content.classList.remove('active');
        
        content.style.cssText = `
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          opacity: 0 !important;
          visibility: hidden !important;
          transform: translateY(10px) !important;
          transition: all 0.3s ease !important;
          min-height: 400px !important;
        `;
      }
    });
  });
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

// Handle window resize
window.addEventListener('resize', () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    setTimeout(() => fixAboutSectionLayout(), 100);
  }
});