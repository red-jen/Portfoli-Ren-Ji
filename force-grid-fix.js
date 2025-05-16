/**
 * FORCEFUL About Section Grid Fix
 * This script uses extreme measures to ensure the about section
 * displays in a horizontal layout no matter what.
 */

// Run immediately
(function() {
  console.log("🔨 Running emergency grid fix");
  forceCorrectAboutLayout();
  
  // Also run after everything else has loaded
  window.addEventListener('DOMContentLoaded', forceCorrectAboutLayout);
  window.addEventListener('load', forceCorrectAboutLayout);
  
  // And keep checking periodically for the first 5 seconds
  const interval = setInterval(forceCorrectAboutLayout, 500);
  setTimeout(() => clearInterval(interval), 5000);
  
  // Also fix on resize
  window.addEventListener('resize', forceCorrectAboutLayout);
})();

function forceCorrectAboutLayout() {
  // Get the about section
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;

  // Force the flex layout on the about content wrapper
  const aboutWrapper = aboutSection.querySelector('.about-content-wrapper');
  if (aboutWrapper) {
    // Force flex direction based on screen width
    aboutWrapper.style.cssText = `
      display: flex !important;
      flex-direction: ${window.innerWidth >= 768 ? 'row' : 'column'} !important;
      gap: 2rem !important;
      width: 100% !important;
    `;
    
    // Force the left and right column styles
    const leftColumn = aboutWrapper.querySelector('.about-left-column');
    const rightColumn = aboutWrapper.querySelector('.about-right-column');
    
    if (leftColumn && rightColumn) {
      if (window.innerWidth >= 768) {
        // Desktop/Tablet layout
        leftColumn.style.cssText = `
          flex: 0 0 350px !important;
          width: 350px !important;
          max-width: 350px !important;
          margin-right: 2rem !important;
        `;
        
        rightColumn.style.cssText = `
          flex: 1 !important;
          width: auto !important;
        `;
      } else {
        // Mobile layout
        leftColumn.style.cssText = `
          flex: 0 0 100% !important;
          width: 100% !important;
          max-width: 100% !important;
          margin-bottom: 2rem !important;
        `;
        
        rightColumn.style.cssText = `
          flex: 0 0 100% !important;
          width: 100% !important;
        `;
      }
      
      // Force profile card to be the right size
      const profileCard = leftColumn.querySelector('.bg-opacity-50.rounded-2xl');
      if (profileCard) {
        if (window.innerWidth >= 768) {
          profileCard.style.maxWidth = '350px';
          profileCard.style.margin = '0 auto';
        } else {
          profileCard.style.maxWidth = '100%';
        }
      }
    }
  } else {
    // No wrapper found, force layout on the legacy grid structure
    const aboutGrid = aboutSection.querySelector('.grid-cols-1.lg\\:grid-cols-12');
    const leftColumn = aboutSection.querySelector('.lg\\:col-span-4');
    const rightColumn = aboutSection.querySelector('.lg\\:col-span-8');
    
    if (aboutGrid && leftColumn && rightColumn) {
      // Force styles with !important
      if (window.innerWidth >= 768) {
        // Tablet/Desktop
        aboutGrid.style.cssText = `
          display: grid !important;
          grid-template-columns: 350px 1fr !important;
          gap: 2rem !important;
          width: 100% !important;
        `;
        
        leftColumn.style.cssText = `
          grid-column: 1 !important;
          width: 100% !important;
          max-width: 350px !important;
        `;
        
        rightColumn.style.cssText = `
          grid-column: 2 !important;
          width: 100% !important;
        `;
      } else {
        // Mobile
        aboutGrid.style.cssText = `
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
          width: 100% !important;
        `;
        
        leftColumn.style.cssText = `
          grid-column: 1 !important;
          width: 100% !important;
        `;
        
        rightColumn.style.cssText = `
          grid-column: 1 !important;
          width: 100% !important;
        `;
      }
      
      // Force profile card to be the right size
      const profileCard = leftColumn.querySelector('.bg-opacity-50.rounded-2xl');
      if (profileCard) {
        profileCard.style.cssText = `
          width: ${window.innerWidth >= 768 ? '350px' : '100%'} !important;
          max-width: ${window.innerWidth >= 768 ? '350px' : '100%'} !important;
          margin-left: auto !important;
          margin-right: auto !important;
        `;
      }
    }
  }
  
  // Make sure the about section is visible
  aboutSection.style.opacity = '1';
  aboutSection.style.visibility = 'visible';
  
  // Ensure tab content is visible
  const activeTab = aboutSection.querySelector('.tab-content.active');
  if (activeTab) {
    activeTab.style.display = 'block';
    activeTab.style.opacity = '1';
    activeTab.style.visibility = 'visible';
  }
  
  console.log("🔧 About section layout forcefully fixed!");
}
