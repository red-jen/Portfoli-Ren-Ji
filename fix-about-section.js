/**
 * Transform About Section Layout into a single horizontal row
 */

document.addEventListener('DOMContentLoaded', function() {
  // Apply horizontal single-row layout
  setTimeout(() => {
    transformToHorizontalLayout();
  }, 100);
  
  // Watch for window resize
  window.addEventListener('resize', transformToHorizontalLayout);
  
  console.log('About section transformed to horizontal single-row layout');
});

// Transform the layout to a single horizontal row with all components side by side
function transformToHorizontalLayout() {
  // Get the main container
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  
  const container = aboutSection.querySelector('.grid-cols-1.lg\\:grid-cols-12');
  if (!container) return;
  
  // Reset classes that might interfere
  container.classList.remove('grid', 'grid-cols-1', 'grid-cols-2');
  
  // Make container a flex row
  container.style.cssText = `
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    gap: 1.5rem !important;
    width: 100% !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    padding-bottom: 1rem !important;
    -webkit-overflow-scrolling: touch !important;
    scroll-snap-type: x proximity !important;
  `;
  
  // Get the main columns
  const profileColumn = container.querySelector('.lg\\:col-span-5');
  const contentColumn = container.querySelector('.lg\\:col-span-7');
  
  if (!profileColumn || !contentColumn) return;
  
  // Profile column styling
  profileColumn.style.cssText = `
    flex: 0 0 300px !important;
    width: 300px !important;
    max-width: 300px !important;
    margin-right: 0 !important;
    margin-bottom: 0 !important;
    scroll-snap-align: start !important;
  `;
  
  // Move tab content panels to be direct children of the main container
  const tabsContainer = contentColumn.querySelector('.flex.overflow-x-auto');
  const contentArea = contentColumn.querySelector('.space-y-6');
  
  if (!tabsContainer || !contentArea) return;
  
  // Rearrange content column for horizontal layout
  contentArea.style.cssText = `
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    gap: 1.5rem !important;
  `;
  
  // Make tabs vertical on the side
  tabsContainer.style.cssText = `
    flex: 0 0 auto !important;
    width: auto !important;
    margin-right: 1.5rem !important;
    border-bottom: none !important;
    border-right: 1px solid rgba(75, 85, 99, 0.5) !important;
    padding-right: 1rem !important;
    flex-direction: column !important;
  `;
  
  // Adjust individual tabs
  const tabs = tabsContainer.querySelectorAll('.tab-link');
  tabs.forEach(tab => {
    tab.style.cssText = `
      padding: 0.5rem 1rem 0.5rem 0 !important;
      margin-bottom: 1rem !important;
      margin-right: 0 !important;
      text-align: right !important;
      border-bottom: none !important;
      border-right: 2px solid transparent !important;
    `;
    
    if (tab.classList.contains('active-tab')) {
      tab.style.borderRightColor = 'var(--accent, #64ffda)';
    }
  });
  
  // Update tab click behavior to match new layout
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => {
        t.classList.remove('active-tab');
        t.style.borderRightColor = 'transparent';
      });
      
      this.classList.add('active-tab');
      this.style.borderRightColor = 'var(--accent, #64ffda)';
    });
  });
  
  // Make each content panel a direct child of the horizontal row
  const tabContents = contentArea.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.style.cssText = `
      flex: 0 0 auto !important;
      width: 280px !important;
      margin-left: 1rem !important;
      margin-right: 1rem !important;
      scroll-snap-align: start !important;
      min-height: 350px !important;
    `;
  });
  
  // Make the skills section its own panel
  const skillsSection = contentArea.querySelector('div:last-child');
  if (skillsSection) {
    skillsSection.style.cssText = `
      flex: 0 0 auto !important;
      width: 300px !important;
      scroll-snap-align: start !important;
      padding-right: 1rem !important;
      border-left: 1px solid rgba(75, 85, 99, 0.5) !important;
      padding-left: 1.5rem !important;
      margin-left: 0.5rem !important;
    `;
  }
  
  // Add scroll arrows for better UX on desktop
  if (window.innerWidth > 768 && !document.querySelector('.about-scroll-arrows')) {
    addScrollArrows(aboutSection, container);
  }
}

// Add scroll arrows for horizontal navigation
function addScrollArrows(aboutSection, container) {
  const scrollArrowsDiv = document.createElement('div');
  scrollArrowsDiv.className = 'about-scroll-arrows';
  scrollArrowsDiv.style.cssText = `
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
    z-index: 5;
  `;
  
  const leftArrow = document.createElement('button');
  leftArrow.innerHTML = '←';
  leftArrow.style.cssText = `
    background: rgba(100, 255, 218, 0.1);
    color: var(--accent, #64ffda);
    border: 1px solid var(--accent, #64ffda);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
  `;
  
  const rightArrow = document.createElement('button');
  rightArrow.innerHTML = '→';
  rightArrow.style.cssText = leftArrow.style.cssText;
  
  leftArrow.addEventListener('click', () => {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  });
  
  rightArrow.addEventListener('click', () => {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  });
  
  scrollArrowsDiv.appendChild(leftArrow);
  scrollArrowsDiv.appendChild(rightArrow);
  aboutSection.appendChild(scrollArrowsDiv);
}