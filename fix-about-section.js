/**
 * Enhanced horizontal layout for About section with centered alignment
 * and improved tab content stability
 */

document.addEventListener('DOMContentLoaded', function() {
  // Apply enhanced horizontal layout with a slight delay to ensure DOM is ready
  setTimeout(() => {
    transformToHorizontalLayout();
    setupScrollBehavior();
    
    // Force content heights to be equal for stability
    equalizeTabContentHeights();
  }, 300);
  
  // Watch for window resize and adjust layout
  window.addEventListener('resize', () => {
    transformToHorizontalLayout();
    updateScrollIndicators();
    equalizeTabContentHeights();
  });
  
  console.log('About section enhanced with centered horizontal layout and improved stability');
});

// Apply horizontal centered layout with improved structure
function transformToHorizontalLayout() {
  // Get the main container
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  
  // Get the main wrapper
  const wrapper = aboutSection.querySelector('.max-w-7xl');
  if (wrapper) {
    wrapper.style.cssText = `
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      width: 100% !important;
    `;
  }
  
  const container = aboutSection.querySelector('.grid-cols-1.lg\\:grid-cols-12');
  if (!container) return;
  
  // Reset any conflicting classes
  container.classList.remove('grid', 'grid-cols-1', 'grid-cols-2');
  
  // Apply enhanced flex layout with centering
  container.style.cssText = `
    display: flex !important;
    flex-direction: row !important;
    align-items: stretch !important;
    justify-content: center !important;
    gap: 2rem !important;
    width: auto !important;
    max-width: 90% !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    padding-bottom: 1.5rem !important;
    -webkit-overflow-scrolling: touch !important;
    scroll-snap-type: x mandatory !important;
    scrollbar-width: thin !important;
    scrollbar-color: var(--accent) rgba(255,255,255,0.1) !important;
    margin: 0 auto !important;
  `;
  
  // Apply styles to main columns
  const profileColumn = container.querySelector('.lg\\:col-span-5');
  const contentColumn = container.querySelector('.lg\\:col-span-7');
  
  if (!profileColumn || !contentColumn) return;
  
  // Enhanced profile column with increased width
  profileColumn.style.cssText = `
    flex: 0 0 340px !important;
    min-width: 340px !important;
    max-width: 340px !important;
    margin-right: 0 !important;
    margin-bottom: 0 !important;
    scroll-snap-align: start !important;
    align-self: stretch !important;
    background: rgba(18, 18, 18, 0.5) !important;
    border-radius: 16px !important;
    backdrop-filter: blur(8px) !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2) !important;
    padding: 1rem !important;
  `;
  
  // Apply hover effect
  profileColumn.addEventListener('mouseenter', () => {
    profileColumn.style.transform = 'translateY(-5px)';
    profileColumn.style.boxShadow = '0 8px 30px rgba(100, 255, 218, 0.1)';
  });
  
  profileColumn.addEventListener('mouseleave', () => {
    profileColumn.style.transform = 'translateY(0)';
    profileColumn.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
  });
  
  // Reorganize content area
  const tabsContainer = contentColumn.querySelector('.flex.overflow-x-auto');
  const contentArea = contentColumn.querySelector('.space-y-6');
  
  if (!tabsContainer || !contentArea) return;
  
  // Enhanced content layout
  contentArea.style.cssText = `
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    gap: 1.5rem !important;
    align-items: stretch !important;
  `;
  
  // Style tab container as a sidebar card with increased width
  tabsContainer.style.cssText = `
    flex: 0 0 auto !important;
    width: auto !important;
    min-width: 150px !important;
    max-width: 150px !important;
    padding: 1.5rem 1rem !important;
    background: rgba(18, 18, 18, 0.5) !important;
    border-radius: 16px !important;
    border-right: none !important;
    flex-direction: column !important;
    align-items: flex-end !important;
    justify-content: center !important;
    margin-right: 0 !important;
    height: auto !important;
    align-self: stretch !important;
  `;
  
  // Style individual tabs
  const tabs = tabsContainer.querySelectorAll('.tab-link');
  tabs.forEach(tab => {
    tab.style.cssText = `
      padding: 0.75rem 0.5rem 0.75rem 0 !important;
      margin-bottom: 1rem !important;
      margin-right: 0 !important;
      text-align: right !important;
      border-bottom: none !important;
      border-right: 2px solid transparent !important;
      transition: all 0.3s ease !important;
      width: 100% !important;
      position: relative !important;
      cursor: pointer !important;
    `;
    
    // Add hover effect
    tab.addEventListener('mouseenter', () => {
      if (!tab.classList.contains('active-tab')) {
        tab.style.color = 'rgba(100, 255, 218, 0.7)';
      }
    });
    
    tab.addEventListener('mouseleave', () => {
      if (!tab.classList.contains('active-tab')) {
        tab.style.color = '';
      }
    });
    
    // Add dot indicator
    const dotIndicator = document.createElement('span');
    dotIndicator.style.cssText = `
      position: absolute !important;
      right: -0.5rem !important;
      top: 50% !important;
      transform: translateY(-50%) scale(0) !important;
      width: 6px !important;
      height: 6px !important;
      border-radius: 50% !important;
      background: var(--accent, #64ffda) !important;
      transition: transform 0.3s ease !important;
    `;
    tab.appendChild(dotIndicator);
    
    if (tab.classList.contains('active-tab')) {
      tab.style.color = 'var(--accent, #64ffda)';
      tab.style.borderRightColor = 'var(--accent, #64ffda)';
      dotIndicator.style.transform = 'translateY(-50%) scale(1)';
    }
  });
  
  // Improve tab click behavior for stability
  tabs.forEach(tab => {
    // Remove existing click listeners to prevent duplicates
    const clone = tab.cloneNode(true);
    tab.parentNode.replaceChild(clone, tab);
    
    clone.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Update tab styles
      tabs.forEach(t => {
        const indicator = t.querySelector('span');
        if (indicator) {
          t.classList.remove('active-tab');
          t.style.color = '';
          t.style.borderRightColor = 'transparent';
          indicator.style.transform = 'translateY(-50%) scale(0)';
        }
      });
      
      this.classList.add('active-tab');
      this.style.color = 'var(--accent, #64ffda)';
      this.style.borderRightColor = 'var(--accent, #64ffda)';
      
      const thisIndicator = this.querySelector('span');
      if (thisIndicator) {
        thisIndicator.style.transform = 'translateY(-50%) scale(1)';
      }
      
      // Show corresponding content with improved stability
      const tabContents = document.querySelectorAll('.tab-content');
      tabContents.forEach(content => {
        if (content.id === `${tabId}-tab`) {
          content.style.display = 'block';
          
          // Add fade-in effect
          content.style.opacity = '0';
          setTimeout(() => {
            content.style.opacity = '1';
            content.style.transition = 'opacity 0.3s ease-in-out';
          }, 50);
          
          // Ensure same height for stability
          equalizeTabContentHeights();
          
          // Scroll this tab content into view
          setTimeout(() => {
            content.scrollIntoView({ behavior: 'smooth', inline: 'center' });
          }, 100);
        } else {
          content.style.display = 'none';
        }
      });
      
      // Update scroll indicators
      updateScrollIndicators();
    });
  });
  
  // Style content panels as cards with fixed height for stability
  const tabContents = contentArea.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.style.cssText = `
      flex: 0 0 380px !important;
      width: 380px !important;
      min-height: 450px !important;
      height: 450px !important;
      overflow-y: auto !important;
      scroll-snap-align: center !important;
      background: rgba(18, 18, 18, 0.5) !important;
      border-radius: 16px !important;
      padding: 1.5rem !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
      transition: transform 0.3s ease, border-color 0.3s ease, opacity 0.3s ease !important;
      display: ${content.classList.contains('active') ? 'block' : 'none'} !important;
      scrollbar-width: thin !important;
      scrollbar-color: var(--accent) rgba(255,255,255,0.1) !important;
    `;
    
    // Add hover effect
    content.addEventListener('mouseenter', () => {
      content.style.transform = 'translateY(-5px)';
      content.style.borderColor = 'var(--accent)';
    });
    
    content.addEventListener('mouseleave', () => {
      content.style.transform = 'translateY(0)';
      content.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
  });
  
  // Style skills section as a card with matching width
  const skillsSection = contentArea.querySelector('div:last-child');
  if (skillsSection) {
    skillsSection.style.cssText = `
      flex: 0 0 340px !important;
      width: 340px !important;
      scroll-snap-align: center !important;
      padding: 1.5rem !important;
      background: rgba(18, 18, 18, 0.5) !important;
      border-radius: 16px !important;
      border-left: none !important;
      margin-left: 0 !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
      transition: transform 0.3s ease, border-color 0.3s ease !important;
    `;
    
    // Add hover effect
    skillsSection.addEventListener('mouseenter', () => {
      skillsSection.style.transform = 'translateY(-5px)';
      skillsSection.style.borderColor = 'var(--accent)';
    });
    
    skillsSection.addEventListener('mouseleave', () => {
      skillsSection.style.transform = 'translateY(0)';
      skillsSection.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
  }
  
  // Add scroll arrows and indicators
  addScrollControls(aboutSection, container);
  
  // Apply responsive adjustments based on screen size
  applyResponsiveAdjustments(container);
}

// Ensure all tab contents have the same height for stability
function equalizeTabContentHeights() {
  const tabContents = document.querySelectorAll('.tab-content');
  if (!tabContents.length) return;
  
  // Find the tallest content
  let maxHeight = 450; // Minimum default height
  
  tabContents.forEach(content => {
    // Temporarily make visible to measure height
    const wasHidden = content.style.display === 'none';
    if (wasHidden) {
      content.style.position = 'absolute';
      content.style.visibility = 'hidden';
      content.style.display = 'block';
    }
    
    // Get the scroll height (full content height)
    const contentHeight = content.scrollHeight;
    if (contentHeight > maxHeight) {
      maxHeight = contentHeight;
    }
    
    // Restore original visibility
    if (wasHidden) {
      content.style.position = '';
      content.style.visibility = '';
      content.style.display = 'none';
    }
  });
  
  // Add some padding to the max height
  maxHeight += 20;
  
  // Set a minimum height, but don't exceed a reasonable maximum
  maxHeight = Math.max(450, Math.min(maxHeight, 650));
  
  // Apply uniform height to all tab contents
  tabContents.forEach(content => {
    content.style.minHeight = maxHeight + 'px';
    content.style.height = maxHeight + 'px';
  });
}

// Setup enhanced scrolling behavior
function setupScrollBehavior() {
  const container = document.querySelector('#about .grid-cols-1.lg\\:grid-cols-12');
  if (!container) return;
  
  // Add smooth scrolling with mouse wheel
  container.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
      updateScrollIndicators();
    }
  }, { passive: false });
  
  // Update scroll indicators on scroll
  container.addEventListener('scroll', () => {
    updateScrollIndicators();
  });
}

// Add scroll controls (arrows and indicators)
function addScrollControls(aboutSection, container) {
  // Remove any existing controls
  const existingArrows = aboutSection.querySelector('.about-scroll-arrows');
  if (existingArrows) existingArrows.remove();
  
  const existingIndicators = aboutSection.querySelector('.about-scroll-indicators');
  if (existingIndicators) existingIndicators.remove();
  
  // Create and add scroll arrows
  const scrollArrowsDiv = document.createElement('div');
  scrollArrowsDiv.className = 'about-scroll-arrows';
  
  const leftArrow = document.createElement('button');
  leftArrow.className = 'about-scroll-arrow';
  leftArrow.innerHTML = '←';
  leftArrow.setAttribute('aria-label', 'Scroll left');
  
  const rightArrow = document.createElement('button');
  rightArrow.className = 'about-scroll-arrow';
  rightArrow.innerHTML = '→';
  rightArrow.setAttribute('aria-label', 'Scroll right');
  
  leftArrow.addEventListener('click', () => {
    container.scrollBy({ left: -350, behavior: 'smooth' });
  });
  
  rightArrow.addEventListener('click', () => {
    container.scrollBy({ left: 350, behavior: 'smooth' });
  });
  
  scrollArrowsDiv.appendChild(leftArrow);
  scrollArrowsDiv.appendChild(rightArrow);
  aboutSection.appendChild(scrollArrowsDiv);
  
  // Create scroll indicators
  const scrollIndicatorsDiv = document.createElement('div');
  scrollIndicatorsDiv.className = 'about-scroll-indicators';
  
  // Count number of scrollable items
  const scrollItems = container.children;
  for (let i = 0; i < scrollItems.length; i++) {
    const indicator = document.createElement('div');
    indicator.className = 'about-scroll-indicator';
    if (i === 0) indicator.classList.add('active');
    
    indicator.addEventListener('click', () => {
      scrollItems[i].scrollIntoView({ behavior: 'smooth', inline: 'center' });
    });
    
    scrollIndicatorsDiv.appendChild(indicator);
  }
  
  aboutSection.appendChild(scrollIndicatorsDiv);
}

// Update scroll indicators based on current scroll position
function updateScrollIndicators() {
  const container = document.querySelector('#about .grid-cols-1.lg\\:grid-cols-12');
  const indicators = document.querySelectorAll('.about-scroll-indicator');
  if (!container || !indicators.length) return;
  
  const scrollItems = container.children;
  const containerWidth = container.clientWidth;
  const scrollPosition = container.scrollLeft;
  
  // Calculate which item is most visible
  let mostVisibleIndex = 0;
  let maxVisibility = 0;
  
  for (let i = 0; i < scrollItems.length; i++) {
    const item = scrollItems[i];
    const itemLeft = item.offsetLeft - container.offsetLeft;
    const itemRight = itemLeft + item.offsetWidth;
    
    // Calculate how much of this item is visible
    const visibleLeft = Math.max(itemLeft, scrollPosition);
    const visibleRight = Math.min(itemRight, scrollPosition + containerWidth);
    const visibleWidth = Math.max(0, visibleRight - visibleLeft);
    
    if (visibleWidth > maxVisibility) {
      maxVisibility = visibleWidth;
      mostVisibleIndex = i;
    }
  }
  
  // Update indicators
  indicators.forEach((indicator, index) => {
    if (index === mostVisibleIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Apply responsive adjustments based on screen size
function applyResponsiveAdjustments(container) {
  const width = window.innerWidth;
  
  if (width <= 480) {
    // Mobile adjustments
    container.style.gap = '0.75rem';
    container.style.maxWidth = '100%';
    
    const profileColumn = container.querySelector('.lg\\:col-span-5');
    if (profileColumn) {
      profileColumn.style.flex = '0 0 280px';
      profileColumn.style.minWidth = '280px';
      profileColumn.style.maxWidth = '280px';
    }
    
    const tabContents = container.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
      content.style.flex = '0 0 280px';
      content.style.width = '280px';
      content.style.minHeight = '420px';
      content.style.height = '420px';
      content.style.padding = '1rem';
    });
    
    const tabsContainer = container.querySelector('.flex.overflow-x-auto');
    if (tabsContainer) {
      tabsContainer.style.minWidth = '110px';
      tabsContainer.style.maxWidth = '110px';
      tabsContainer.style.padding = '0.75rem';
    }
    
    const skillsSection = container.querySelector('.space-y-6 > div:last-child');
    if (skillsSection) {
      skillsSection.style.flex = '0 0 280px';
      skillsSection.style.width = '280px';
    }
    
  } else if (width <= 768) {
    // Tablet adjustments
    container.style.gap = '1rem';
    container.style.maxWidth = '98%';
    
    const profileColumn = container.querySelector('.lg\\:col-span-5');
    if (profileColumn) {
      profileColumn.style.flex = '0 0 300px';
      profileColumn.style.minWidth = '300px';
      profileColumn.style.maxWidth = '300px';
    }
    
    const tabContents = container.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
      content.style.flex = '0 0 320px';
      content.style.width = '320px';
      content.style.minHeight = '420px';
      content.style.height = '420px';
    });
    
    const tabsContainer = container.querySelector('.flex.overflow-x-auto');
    if (tabsContainer) {
      tabsContainer.style.minWidth = '130px';
      tabsContainer.style.maxWidth = '130px';
      tabsContainer.style.padding = '1rem 0.5rem';
    }
    
    const skillsSection = container.querySelector('.space-y-6 > div:last-child');
    if (skillsSection) {
      skillsSection.style.flex = '0 0 300px';
      skillsSection.style.width = '300px';
    }
  } else {
    // Desktop adjustments
    container.style.gap = '2rem';
    container.style.maxWidth = '90%';
  }
}