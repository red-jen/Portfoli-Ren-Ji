/**
 * About Section Content Verification
 * This script runs after page load to verify content is properly displayed
 */

document.addEventListener('DOMContentLoaded', function() {
  // Let the main scripts initialize first
  setTimeout(verifyAboutContent, 1500);
});

function verifyAboutContent() {
  console.log("Verifying about section content display");
  
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  
  // Log content structure for debugging
  const container = aboutSection.querySelector('.grid-cols-1.lg\\:grid-cols-12');
  if (!container) {
    console.error("About container not found - critical error");
    return;
  }
  
  // Check for content elements
  const tabContents = container.querySelectorAll('.tab-content');
  console.log(`Found ${tabContents.length} tab content elements`);
  
  // Check if any content is visible
  let visibleContent = false;
  tabContents.forEach((content, i) => {
    const isVisible = window.getComputedStyle(content).display !== 'none';
    console.log(`Tab content #${i} (${content.id}): ${isVisible ? 'Visible' : 'Hidden'}`);
    visibleContent = visibleContent || isVisible;
  });
  
  // Force first content to be visible if nothing is showing
  if (!visibleContent && tabContents.length > 0) {
    console.warn("No visible content found - forcing first tab to show");
    tabContents[0].style.display = 'block';
    tabContents[0].style.opacity = '1';
    
    // Also activate the corresponding tab
    const tabId = tabContents[0].id.replace('-tab', '');
    const firstTab = aboutSection.querySelector(`.tab-link[data-tab="${tabId}"]`);
    if (firstTab) {
      firstTab.classList.add('active-tab');
      firstTab.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
      firstTab.style.color = 'var(--accent, #64ffda)';
    }
  }
  
  // Set explicit width for content columns if they're too narrow
  tabContents.forEach((content) => {
    const computedWidth = parseInt(window.getComputedStyle(content).width);
    if (computedWidth < 300) {
      console.warn(`Content width too small (${computedWidth}px), setting minimum width`);
      content.style.minWidth = '350px';
      content.style.flex = '0 0 350px';
    }
  });
  
  // Check for any CSS conflicts
  const conflictingStyles = checkConflictingStyles(container);
  if (conflictingStyles.length > 0) {
    console.warn("Found conflicting styles that may hide content:", conflictingStyles);
    
    // Fix conflicting styles
    conflictingStyles.forEach(selector => {
      const elements = container.querySelectorAll(selector);
      elements.forEach(el => {
        el.style.display = '';
        el.style.visibility = 'visible';
        el.style.opacity = '1';
      });
    });
  }
  
  // Ensure container is wide enough to fit content
  if (container.scrollWidth > container.clientWidth) {
    console.log("Container needs horizontal scrolling - ensuring scroll enabled");
    container.style.overflowX = 'auto';
    container.style.flexWrap = 'nowrap';
    
    // Remove any max-width constraints
    container.style.maxWidth = 'none';
  }
}

function checkConflictingStyles(container) {
  const conflictingSelectors = [];
  
  // Check common causes of hidden content
  const possibleConflicts = [
    '.tab-content', 
    '.tab-content.hidden',
    '.tab-content:not(.active)',
    '.space-y-6',
    '.space-y-6 > div'
  ];
  
  possibleConflicts.forEach(selector => {
    const elements = container.querySelectorAll(selector);
    elements.forEach(el => {
      const style = window.getComputedStyle(el);
      if (
        style.display === 'none' || 
        style.visibility === 'hidden' || 
        style.opacity === '0' || 
        style.height === '0px'
      ) {
        conflictingSelectors.push(selector);
      }
    });
  });
  
  return [...new Set(conflictingSelectors)]; // Deduplicate
}
