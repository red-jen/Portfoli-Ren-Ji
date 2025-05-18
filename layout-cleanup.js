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
      fixContactSectionLayout();
    }, 100);
  });
}
