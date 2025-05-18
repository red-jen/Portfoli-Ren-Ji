/**
 * Layout cleanup script to fix any remaining issues
 * This script runs after other scripts to catch any lingering problems
 */

document.addEventListener('DOMContentLoaded', function() {
  // Let the page load fully
  setTimeout(function() {
    console.log('Running layout cleanup script');
    
    // Fix any horizontal scrolling issues
    fixHorizontalOverflow();
    
    // Fix about section specific issues
    forceAboutSectionLayout();
    
    // Fix project cards layout
    fixProjectCardsLayout();
    
    // Fix tech keyboard layout
    fixTechKeyboardLayout();
    
    // Fix any contact section layout issues
    fixContactSectionLayout();
    
    // Monitor for layout changes and fix as needed
    setupResizeObserver();
    
  }, 500); // Short delay to ensure DOM is ready
});

// Fix horizontal overflow issues
function fixHorizontalOverflow() {
  // Find and fix overflowing elements
  document.querySelectorAll('*').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.width > window.innerWidth) {
      console.log('Fixing overflowing element:', el);
      el.style.maxWidth = '100%';
      el.style.boxSizing = 'border-box';
      el.style.overflowX = 'hidden';
    }
  });
}

// Force about section layout
function forceAboutSectionLayout() {
  const aboutContainer = document.querySelector('#about .grid-cols-1.lg\\:grid-cols-12');
  if (aboutContainer && window.innerWidth >= 1024) {
    aboutContainer.style.display = 'flex';
    aboutContainer.style.flexDirection = 'row';
    aboutContainer.style.alignItems = 'flex-start';
    aboutContainer.style.flexWrap = 'nowrap';
    aboutContainer.style.gap = '2rem';
  }
}

// Fix project cards layout
function fixProjectCardsLayout() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.maxWidth = '100%';
    
    // Fix aspect ratio images
    const imageContainer = card.querySelector('.aspect-video');
    if (imageContainer) {
      imageContainer.style.width = '100%';
      imageContainer.style.height = '0';
      imageContainer.style.paddingBottom = '56.25%'; // 16:9 aspect ratio
      imageContainer.style.position = 'relative';
      imageContainer.style.overflow = 'hidden';
      
      // Fix background images
      if (imageContainer.style.backgroundImage) {
        imageContainer.style.backgroundSize = 'cover';
        imageContainer.style.backgroundPosition = 'center';
      }
    }
  });
}

// Fix tech keyboard layout specifically
function fixTechKeyboardLayout() {
  const techSection = document.querySelector('.tech-stack-section');
  if (!techSection) return;
  
  // Center the heading and description
  const heading = techSection.querySelector('h2');
  const description = techSection.querySelector('p');
  
  if (heading) {
    heading.style.textAlign = 'center';
    heading.style.maxWidth = '800px'; // Increased from 700px
    heading.style.margin = '0 auto 1rem';
  }
  
  if (description) {
    description.style.textAlign = 'center';
    description.style.maxWidth = '700px'; // Increased from 600px
    description.style.margin = '0 auto 2rem';
    description.style.color = 'rgba(255, 255, 255, 0.7)';
  }
  
  // Make the keyboard container more comfortable
  const keyboardContainer = document.getElementById('tech-keyboard-container');
  if (keyboardContainer) {
    keyboardContainer.style.width = '95%'; // Increased from 90%
    keyboardContainer.style.maxWidth = '1000px'; // Increased from 800px
    keyboardContainer.style.height = '450px'; // Increased from 400px
    keyboardContainer.style.margin = '0 auto 3rem';
    
    // Add responsive adjustment
    if (window.innerWidth <= 768) {
      keyboardContainer.style.height = '400px'; // Increased from 350px
    }
    if (window.innerWidth <= 480) {
      keyboardContainer.style.height = '350px'; // Increased from 300px
      keyboardContainer.style.width = '100%';
    }
  }
  
  // Center the section content with more width
  const sectionContainer = techSection.querySelector('.max-w-7xl');
  if (sectionContainer) {
    sectionContainer.style.maxWidth = '1100px'; // Increased from 900px
    sectionContainer.style.margin = '0 auto';
    sectionContainer.style.paddingBottom = '2rem';
  }
  
  // Fix tech detail panel
  const detailPanel = document.getElementById('tech-detail-panel');
  if (detailPanel) {
    // Position it below keyboard instead of over it
    detailPanel.style.position = 'relative';
    detailPanel.style.maxWidth = '800px'; // Match keyboard width
    detailPanel.style.width = '95%';
    detailPanel.style.margin = '0 auto';
    detailPanel.style.transform = 'none';
    detailPanel.style.left = 'auto';
    detailPanel.style.bottom = 'auto';
  }
  
  // Ensure the section can grow to accommodate the panel
  if (techSection) {
    techSection.style.minHeight = 'auto';
    techSection.style.paddingBottom = '3rem';
  }
}

// Fix contact section layout
function fixContactSectionLayout() {
  const contactSection = document.getElementById('contact');
  if (!contactSection) return;
  
  // Fix grid layout
  const contactGrid = contactSection.querySelector('.grid-cols-1.md\\:grid-cols-2');
  if (contactGrid) {
    contactGrid.style.display = 'grid';
    contactGrid.style.width = '100%';
    
    if (window.innerWidth >= 768) {
      contactGrid.style.gridTemplateColumns = '1fr 1fr';
    } else {
      contactGrid.style.gridTemplateColumns = '1fr';
    }
  }
  
  // Fix nested grids
  const nestedGrid = contactSection.querySelector('.grid.grid-cols-2.width-100\\%');
  if (nestedGrid) {
    nestedGrid.style.width = '100%';
    
    if (window.innerWidth < 768) {
      nestedGrid.style.display = 'flex';
      nestedGrid.style.flexDirection = 'column';
    }
  }
}

// Set up a resize observer to fix layout on window resize
function setupResizeObserver() {
  window.addEventListener('resize', function() {
    setTimeout(function() {
      fixHorizontalOverflow();
      forceAboutSectionLayout();
      fixProjectCardsLayout();
      fixTechKeyboardLayout(); // Added keyboard fix to resize handler
      fixContactSectionLayout();
    }, 100);
  });
}
