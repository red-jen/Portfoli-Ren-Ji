/**
 * Fix About Section Layout - Simple Clean Design
 * Creates a clean, user-friendly layout with profile card and content
 */

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(fixAboutSectionLayout, 100);
});

function fixAboutSectionLayout() {
  console.log('Applying simple clean layout to About section');
  
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  
  // Apply clean layout
  applyCleanLayout(aboutSection);
  
  // Setup simple tab switching
  setupSimpleTabSwitching(aboutSection);
}

function applyCleanLayout(aboutSection) {
  // Set clean section styling
  aboutSection.style.cssText = `
    padding: 4rem 1rem !important;
    min-height: 100vh !important;
    overflow-x: hidden !important;
    display: flex !important;
    align-items: center !important;
    position: relative !important;
    background: var(--bg-secondary) !important;
  `;
  
  // Style the container
  const container = aboutSection.querySelector('.max-w-7xl');
  if (container) {
    container.style.cssText = `
      max-width: 1200px !important;
      padding: 0 1rem !important;
      width: 100% !important;
      margin: 0 auto !important;
    `;
  }
  
  // Position section title
  const titleContainer = aboutSection.querySelector('.flex.flex-col.items-center');
  if (titleContainer) {
    titleContainer.style.cssText = `
      margin-bottom: 3rem !important;
      position: static !important;
      transform: none !important;
    `;
    
    const title = titleContainer.querySelector('h2');
    if (title) {
      title.style.cssText = `
        font-size: 2.5rem !important;
        margin-bottom: 1rem !important;
        text-align: center !important;
      `;
    }
  }
  
  // Create two-column grid layout
  const gridContainer = aboutSection.querySelector('.grid.grid-cols-1.lg\\:grid-cols-12');
  if (gridContainer) {
    const isMobile = window.innerWidth <= 1024;
    
    if (isMobile) {
      gridContainer.style.cssText = `
        display: grid !important;
        grid-template-columns: 1fr !important;
        grid-template-rows: auto auto !important;
        gap: 3rem !important;
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 auto !important;
        align-items: start !important;
        min-height: auto !important;
      `;
    } else {
      gridContainer.style.cssText = `
        display: grid !important;
        grid-template-columns: 380px 1fr !important;
        grid-template-rows: 1fr !important;
        gap: 4rem !important;
        width: 100% !important;
        max-width: 1200px !important;
        margin: 0 auto !important;
        align-items: start !important;
        min-height: 70vh !important;
      `;
    }
  }
  
  // Style profile column for same-row layout
  const profileColumn = aboutSection.querySelector('.lg\\:col-span-5');
  if (profileColumn) {
    if (isMobile) {
      profileColumn.style.cssText = `
        background: rgba(255, 255, 255, 0.02) !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-radius: 1rem !important;
        padding: 2rem !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        position: static !important;
        max-width: 400px !important;
        margin: 0 auto !important;
        height: fit-content !important;
        max-height: none !important;
        overflow-y: visible !important;
      `;
    } else {
      profileColumn.style.cssText = `
        background: rgba(255, 255, 255, 0.02) !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-radius: 1rem !important;
        padding: 2rem !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: flex-start !important;
        position: sticky !important;
        top: 2rem !important;
        height: fit-content !important;
        max-height: calc(100vh - 4rem) !important;
        overflow-y: auto !important;
        align-self: flex-start !important;
      `;
    }
  }
  
  // Style content column for same-row layout
  const contentColumn = aboutSection.querySelector('.lg\\:col-span-7');
  if (contentColumn) {
    if (isMobile) {
      contentColumn.style.cssText = `
        background: transparent !important;
        padding: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 2rem !important;
        width: 100% !important;
        max-width: 100% !important;
        min-height: auto !important;
      `;
    } else {
      contentColumn.style.cssText = `
        background: transparent !important;
        padding: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 2rem !important;
        width: 100% !important;
        max-width: 700px !important;
        min-height: 70vh !important;
        justify-content: flex-start !important;
      `;
    }
  }
  
  // Style profile card
  const profileCard = profileColumn?.querySelector('.relative.w-full.max-w-sm');
  if (profileCard) {
    profileCard.style.cssText = `
      max-width: 100% !important;
      width: 100% !important;
      transform: none !important;
    `;
    
    const cardBackground = profileCard.querySelector('.absolute.inset-0');
    if (cardBackground) {
      cardBackground.style.cssText = `
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
      `;
    }
  }
  
  // Style profile image
  const profileImage = profileColumn?.querySelector('.relative.w-48.h-48');
  if (profileImage) {
    if (isMobile) {
      profileImage.style.cssText = `
        width: 8rem !important;
        height: 8rem !important;
        margin-bottom: 1.5rem !important;
      `;
    } else {
      profileImage.style.cssText = `
        width: 10rem !important;
        height: 10rem !important;
        margin-bottom: 1.5rem !important;
      `;
    }
  }
  
  // Style content area
  const spaceContainer = contentColumn?.querySelector('.space-y-6');
  if (spaceContainer) {
    spaceContainer.style.cssText = `
      display: flex !important;
      flex-direction: column !important;
      gap: 2rem !important;
      width: 100% !important;
    `;
  }
  
  // Style tab section
  const tabSection = spaceContainer?.querySelector('.mb-10');
  if (tabSection) {
    tabSection.style.cssText = `
      display: flex !important;
      flex-direction: column !important;
      margin-bottom: 2rem !important;
    `;
  }
  
  // Style tab navigation
  const tabNavigation = tabSection?.querySelector('.flex.overflow-x-auto');
  if (tabNavigation) {
    tabNavigation.style.cssText = `
      display: flex !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
      margin-bottom: 2rem !important;
      gap: 0.5rem !important;
    `;
  }
  
  // Style tab links
  const tabLinks = aboutSection.querySelectorAll('.tab-link');
  tabLinks.forEach(link => {
    link.style.cssText = `
      padding: 0.75rem 1.5rem !important;
      font-size: 0.9rem !important;
      font-weight: 500 !important;
      border-bottom: 2px solid transparent !important;
      border-radius: 0.5rem 0.5rem 0 0 !important;
      transition: all 0.3s ease !important;
      color: rgba(255, 255, 255, 0.7) !important;
      background: rgba(255, 255, 255, 0.02) !important;
      cursor: pointer !important;
    `;
    
    if (link.classList.contains('active-tab')) {
      link.style.color = 'var(--accent)';
      link.style.borderBottomColor = 'var(--accent)';
      link.style.background = 'rgba(100, 255, 218, 0.05)';
    }
  });
  
  // Style tab content
  const tabContents = aboutSection.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.style.cssText = `
      background: rgba(255, 255, 255, 0.02) !important;
      border: 1px solid rgba(255, 255, 255, 0.05) !important;
      border-radius: 0.5rem !important;
      padding: 2rem !important;
      width: 100% !important;
      display: block !important;
      opacity: 1 !important;
      visibility: visible !important;
      transform: none !important;
      position: relative !important;
      height: auto !important;
      min-height: auto !important;
    `;
    
    if (content.classList.contains('hidden')) {
      content.style.display = 'none';
    }
  });
  
  // Style skills section
  const skillsSection = spaceContainer?.querySelector('div:last-child');
  if (skillsSection && !skillsSection.classList.contains('mb-10')) {
    skillsSection.style.cssText = `
      background: rgba(255, 255, 255, 0.02) !important;
      border: 1px solid rgba(255, 255, 255, 0.05) !important;
      border-radius: 0.5rem !important;
      padding: 2rem !important;
      width: 100% !important;
      margin-top: 0 !important;
    `;
  }
  
  // Style skills grid
  const skillsGrid = skillsSection?.querySelector('.grid.grid-cols-1.md\\:grid-cols-2');
  if (skillsGrid) {
    const isMobile = window.innerWidth <= 1024;
    
    if (isMobile) {
      skillsGrid.style.cssText = `
        display: grid !important;
        grid-template-columns: 1fr !important;
        gap: 1.5rem !important;
        width: 100% !important;
      `;
    } else {
      skillsGrid.style.cssText = `
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        gap: 2rem !important;
        width: 100% !important;
      `;
    }
  }
  
  // Style skills tags
  const skillTags = aboutSection.querySelectorAll('.flex.flex-wrap.gap-2');
  skillTags.forEach(tagContainer => {
    const tags = tagContainer.querySelectorAll('span');
    tags.forEach(tag => {
      tag.style.cssText = `
        background: rgba(100, 255, 218, 0.1) !important;
        color: var(--accent) !important;
        border: 1px solid rgba(100, 255, 218, 0.2) !important;
        padding: 0.25rem 0.75rem !important;
        border-radius: 1rem !important;
        font-size: 0.8rem !important;
        transition: all 0.3s ease !important;
      `;
    });
  });
  
  // Style download CV button
  const downloadButton = profileColumn?.querySelector('a[download]');
  if (downloadButton) {
    downloadButton.style.cssText = `
      margin-top: 1.5rem !important;
      background: var(--accent) !important;
      color: #000 !important;
      border: none !important;
      padding: 0.75rem 1.5rem !important;
      border-radius: 0.5rem !important;
      font-weight: 600 !important;
      transition: all 0.3s ease !important;
      text-decoration: none !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 0.5rem !important;
    `;
  }
}

function setupSimpleTabSwitching(aboutSection) {
  const tabLinks = aboutSection.querySelectorAll('.tab-link');
  
  tabLinks.forEach(link => {
    // Remove existing listeners
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
  const tabLinks = aboutSection.querySelectorAll('.tab-link');
  const tabContents = aboutSection.querySelectorAll('.tab-content');
  
  // Update tab link states
  tabLinks.forEach(link => {
    const linkTab = link.getAttribute('data-tab');
    if (linkTab === targetTab) {
      link.classList.add('active-tab');
      link.style.color = 'var(--accent)';
      link.style.borderBottomColor = 'var(--accent)';
      link.style.background = 'rgba(100, 255, 218, 0.05)';
    } else {
      link.classList.remove('active-tab');
      link.style.color = 'rgba(255, 255, 255, 0.7)';
      link.style.borderBottomColor = 'transparent';
      link.style.background = 'rgba(255, 255, 255, 0.02)';
    }
  });
  
  // Update tab content - simple show/hide
  tabContents.forEach(content => {
    const contentTab = content.id.replace('-tab', '');
    
    if (contentTab === targetTab) {
      content.classList.remove('hidden');
      content.classList.add('active');
      content.style.display = 'block';
    } else {
      content.classList.add('hidden');
      content.classList.remove('active');
      content.style.display = 'none';
    }
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