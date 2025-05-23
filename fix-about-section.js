/**
 * Fix About Section Layout - Mobile Responsive CV Style
 * Maintains layout stability with proper mobile responsiveness
 */

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(fixAboutSectionLayout, 100);
});

function fixAboutSectionLayout() {
  console.log('Applying responsive CV-style layout to About section');
  
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  
  // Reset any existing modifications
  resetAboutSection(aboutSection);
  
  // Apply responsive CV-style layout
  applyResponsiveCVLayout(aboutSection);
  
  // Setup enhanced tab switching
  setupResponsiveTabSwitching(aboutSection);
  
  // Stabilize content heights
  stabilizeResponsiveContent(aboutSection);
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

function applyResponsiveCVLayout(aboutSection) {
  const gridContainer = aboutSection.querySelector('.grid.grid-cols-1.lg\\:grid-cols-12');
  if (!gridContainer) return;
  
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
  
  if (isMobile) {
    // Mobile layout: single column, profile first
    gridContainer.style.cssText = `
      display: grid !important;
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
      max-width: 100% !important;
      margin: 0 auto !important;
      width: 100% !important;
    `;
    
    // Profile column for mobile
    const profileColumn = aboutSection.querySelector('.lg\\:col-span-5');
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
    
    // Content column for mobile
    const contentColumn = aboutSection.querySelector('.lg\\:col-span-7');
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
    
    // Mobile-specific content adjustments
    createMobileTabContainer(aboutSection);
    
  } else if (isTablet) {
    // Tablet layout: two columns with adjusted proportions
    gridContainer.style.cssText = `
      display: grid !important;
      grid-template-columns: 1fr 2fr !important;
      gap: 3rem !important;
      align-items: start !important;
      max-width: 100% !important;
      margin: 0 auto !important;
      width: 100% !important;
    `;
    
    // Profile column for tablet
    const profileColumn = aboutSection.querySelector('.lg\\:col-span-5');
    if (profileColumn) {
      profileColumn.style.cssText = `
        position: sticky !important;
        top: 2rem !important;
        align-self: flex-start !important;
        height: fit-content !important;
        width: 100% !important;
      `;
    }
    
    // Content column for tablet
    const contentColumn = aboutSection.querySelector('.lg\\:col-span-7');
    if (contentColumn) {
      contentColumn.style.cssText = `
        display: flex !important;
        flex-direction: column !important;
        gap: 2rem !important;
        width: 100% !important;
        max-width: 100% !important;
        min-height: 500px !important;
      `;
    }
    
    createTabletTabContainer(aboutSection);
    
  } else {
    // Desktop layout: CV style with smaller content width
    gridContainer.style.cssText = `
      display: grid !important;
      grid-template-columns: 380px 1fr !important;
      gap: 3rem !important;
      align-items: start !important;
      max-width: 1100px !important;
      margin: 0 auto !important;
      width: 100% !important;
    `;
    
    // Profile column for desktop
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
    
    // Content column for desktop
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
    }
    
    createDesktopTabContainer(aboutSection);
  }
}

function createMobileTabContainer(aboutSection) {
  const spaceContainer = aboutSection.querySelector('.lg\\:col-span-7 .space-y-6');
  if (!spaceContainer) return;
  
  spaceContainer.style.cssText = `
    display: flex !important;
    flex-direction: column !important;
    gap: 2rem !important;
    width: 100% !important;
    min-height: auto !important;
  `;
  
  const tabSection = spaceContainer.querySelector('.mb-10');
  if (tabSection) {
    tabSection.style.cssText = `
      display: flex !important;
      flex-direction: column !important;
      width: 100% !important;
      margin-bottom: 0 !important;
    `;
    
    // Mobile tab navigation
    const tabNavigation = tabSection.querySelector('.flex.overflow-x-auto');
    if (tabNavigation) {
      tabNavigation.style.cssText = `
        display: flex !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
        margin-bottom: 1.5rem !important;
        overflow-x: auto !important;
        width: 100% !important;
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      `;
      
      // Hide scrollbar
      tabNavigation.style.setProperty('-webkit-scrollbar', 'none');
    }
    
    // Mobile tab content
    const tabContents = tabSection.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
      content.style.cssText = `
        position: relative !important;
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
        width: 100% !important;
        height: auto !important;
        min-height: auto !important;
        padding: 0 !important;
        margin: 0 !important;
      `;
      
      if (content.classList.contains('hidden')) {
        content.style.display = 'none';
      }
    });
  }
  
  // Mobile skills section
  const skillsSection = spaceContainer.querySelector('div:last-child');
  if (skillsSection && !skillsSection.classList.contains('mb-10')) {
    skillsSection.style.cssText = `
      width: 100% !important;
      padding-top: 2rem !important;
      border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
      margin-top: 0 !important;
    `;
  }
}

function createTabletTabContainer(aboutSection) {
  const spaceContainer = aboutSection.querySelector('.lg\\:col-span-7 .space-y-6');
  if (!spaceContainer) return;
  
  spaceContainer.style.cssText = `
    display: flex !important;
    flex-direction: column !important;
    gap: 2rem !important;
    width: 100% !important;
    min-height: 400px !important;
  `;
  
  const tabSection = spaceContainer.querySelector('.mb-10');
  if (tabSection) {
    tabSection.style.cssText = `
      display: flex !important;
      flex-direction: column !important;
      width: 100% !important;
      margin-bottom: 0 !important;
      flex: 1 !important;
    `;
    
    // Create stable wrapper for tablet
    let tabContentsWrapper = tabSection.querySelector('.tab-contents-wrapper');
    if (!tabContentsWrapper) {
      tabContentsWrapper = document.createElement('div');
      tabContentsWrapper.className = 'tab-contents-wrapper';
      tabContentsWrapper.style.cssText = `
        position: relative !important;
        min-height: 300px !important;
        width: 100% !important;
        flex: 1 !important;
      `;
      
      const tabContents = tabSection.querySelectorAll('.tab-content');
      tabContents.forEach(content => {
        tabContentsWrapper.appendChild(content);
      });
      
      tabSection.appendChild(tabContentsWrapper);
    }
  }
}

function createDesktopTabContainer(aboutSection) {
  const spaceContainer = aboutSection.querySelector('.lg\\:col-span-7 .space-y-6');
  if (!spaceContainer) return;
  
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

function stabilizeResponsiveContent(aboutSection) {
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
  
  if (isMobile) {
    // Mobile: no fixed heights, natural content flow
    const tabContents = aboutSection.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
      content.style.height = 'auto';
      content.style.minHeight = 'auto';
    });
    
  } else {
    // Tablet/Desktop: maintain stable heights
    const fixedHeight = isTablet ? 350 : 280;
    const tabWrapper = aboutSection.querySelector('.tab-contents-wrapper');
    if (tabWrapper) {
      tabWrapper.style.minHeight = fixedHeight + 'px';
      tabWrapper.style.height = fixedHeight + 'px';
    }
  }
}

function setupResponsiveTabSwitching(aboutSection) {
  const tabLinks = aboutSection.querySelectorAll('.tab-link');
  const isMobile = window.innerWidth <= 768;
  
  // Optimize tab links for mobile
  tabLinks.forEach(link => {
    if (isMobile) {
      link.style.cssText = `
        padding: 0.75rem 1rem !important;
        font-size: 0.9rem !important;
        white-space: nowrap !important;
        min-width: 120px !important;
        text-align: center !important;
        min-height: 44px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      `;
    }
    
    // Remove existing listeners and add responsive ones
    const newLink = link.cloneNode(true);
    link.parentNode.replaceChild(newLink, link);
    
    newLink.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const targetTab = this.getAttribute('data-tab');
      responsiveSwitchToTab(targetTab, aboutSection);
    });
  });
}

function responsiveSwitchToTab(targetTab, aboutSection) {
  const isMobile = window.innerWidth <= 768;
  
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
    
    // Update tab content with responsive behavior
    tabContents.forEach(content => {
      const contentTab = content.id.replace('-tab', '');
      
      if (contentTab === targetTab) {
        content.classList.remove('hidden');
        content.classList.add('active');
        
        if (isMobile) {
          // Mobile: simple show/hide
          content.style.cssText = `
            position: relative !important;
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
            width: 100% !important;
            height: auto !important;
            min-height: auto !important;
          `;
        } else {
          // Tablet/Desktop: smooth transitions
          setTimeout(() => {
            content.style.cssText = `
              position: relative !important;
              opacity: 1 !important;
              visibility: visible !important;
              transform: translateY(0) !important;
              transition: all 0.3s ease !important;
              width: 100% !important;
              height: auto !important;
              min-height: 280px !important;
            `;
          }, 50);
        }
      } else {
        content.classList.add('hidden');
        content.classList.remove('active');
        
        if (isMobile) {
          content.style.display = 'none';
        } else {
          content.style.cssText = `
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            opacity: 0 !important;
            visibility: hidden !important;
            transform: translateY(20px) !important;
            transition: all 0.3s ease !important;
          `;
        }
      }
    });
  });
}

// Handle responsive resize
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

// Handle orientation change
window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      fixAboutSectionLayout();
    }
  }, 300);
});