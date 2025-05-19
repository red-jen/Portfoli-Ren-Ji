/**
 * Horizontal About Section
 * Transforms the About section into a horizontal scrolling layout
 * with improved navigation and card-based design
 */

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    initHorizontalAboutSection();
  }, 500);
  
  window.addEventListener('resize', debounce(updateDots, 200));
});

function initHorizontalAboutSection() {
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  
  console.log('Initializing horizontal about section');
  
  // Get main container
  const container = aboutSection.querySelector('.grid-cols-1.lg\\:grid-cols-12');
  if (!container) return;
  
  // Find main content components
  const profileColumn = aboutSection.querySelector('.lg\\:col-span-5');
  const contentColumn = aboutSection.querySelector('.lg\\:col-span-7');
  
  if (!profileColumn || !contentColumn) return;
  
  // Reorganize the layout for horizontal scrolling
  reorganizeLayout(container, profileColumn, contentColumn);
  
  // Add navigation
  addNavigation(container, aboutSection);
  
  // Add scroll indicators (dots)
  addScrollDots(container, aboutSection);
  
  // Setup tab navigation in the horizontal layout
  setupTabNavigation(container);
  
  // Add hover effects to cards
  addCardEffects(container);
}

function reorganizeLayout(container, profileColumn, contentColumn) {
  // Reset any existing grid classes that might interfere
  container.classList.remove('grid');
  container.classList.remove('grid-cols-1');
  container.classList.remove('lg:grid-cols-12');
  container.classList.remove('gap-8');
  container.classList.remove('md:gap-16');
  container.classList.remove('items-center');
  
  // Apply horizontal scrolling styles
  container.style.display = 'flex';
  container.style.flexDirection = 'row';
  container.style.flexWrap = 'nowrap';
  container.style.gap = '2rem';
  container.style.overflowX = 'auto';
  container.style.padding = '2rem 0 3rem';
  container.style.scrollSnapType = 'x mandatory';
  container.style.scrollBehavior = 'smooth';
  container.style.width = '100%';
  container.style.marginBottom = '1rem';
  
  // Hide scrollbar for different browsers
  container.style.msOverflowStyle = 'none';  // IE and Edge
  container.style.scrollbarWidth = 'none';   // Firefox
  
  // Custom style for webkit browsers
  const style = document.createElement('style');
  style.textContent = `
    #about .grid-cols-1.lg\\:grid-cols-12::-webkit-scrollbar {
      display: none;
    }
  `;
  document.head.appendChild(style);
  
  // Style profile column as a card
  profileColumn.style.flex = '0 0 340px';
  profileColumn.style.minWidth = '340px';
  profileColumn.style.height = '500px';
  profileColumn.style.scrollSnapAlign = 'start';
  profileColumn.style.background = 'rgba(18, 18, 18, 0.5)';
  profileColumn.style.borderRadius = '16px';
  profileColumn.style.padding = '2rem';
  profileColumn.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
  profileColumn.style.backdropFilter = 'blur(8px)';
  profileColumn.style.border = '1px solid rgba(255, 255, 255, 0.05)';
  profileColumn.style.marginBottom = '0';
  
  // Find tab navigation
  const tabsContainer = contentColumn.querySelector('.flex.overflow-x-auto');
  if (tabsContainer) {
    // Move tab navigation to be a separate card in the horizontal layout
    container.insertBefore(tabsContainer, contentColumn);
    
    // Style the tab navigation as a vertical card
    tabsContainer.style.flex = '0 0 180px';
    tabsContainer.style.minWidth = '180px';
    tabsContainer.style.height = '500px';
    tabsContainer.style.flexDirection = 'column';
    tabsContainer.style.scrollSnapAlign = 'center';
    tabsContainer.style.background = 'rgba(18, 18, 18, 0.5)';
    tabsContainer.style.borderRadius = '16px';
    tabsContainer.style.padding = '2rem 1rem';
    tabsContainer.style.gap = '1rem';
    tabsContainer.style.border = '1px solid rgba(255, 255, 255, 0.05)';
    tabsContainer.style.borderBottom = 'none';
    tabsContainer.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    tabsContainer.style.marginBottom = '0';
    tabsContainer.style.alignItems = 'stretch';
    
    // Style tab buttons to be full width
    const tabs = tabsContainer.querySelectorAll('.tab-link');
    tabs.forEach(tab => {
      tab.style.textAlign = 'left';
      tab.style.padding = '0.75rem 1rem';
      tab.style.border = 'none';
      tab.style.borderRadius = '8px';
      tab.style.marginBottom = '0.5rem';
      tab.style.transition = 'all 0.3s ease';
      
      // Set active tab styling
      if (tab.classList.contains('active-tab')) {
        tab.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
        tab.style.color = 'var(--accent, #64ffda)';
        tab.style.fontWeight = '600';
      }
    });
  }
  
  // Find tab content items and make them into separate cards
  const tabContents = contentColumn.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    // Move tab content to be direct children of the container
    container.appendChild(content);
    
    // Style tab content as a card
    content.style.flex = '0 0 380px';
    content.style.minWidth = '380px';
    content.style.height = '500px';
    content.style.scrollSnapAlign = 'center';
    content.style.background = 'rgba(18, 18, 18, 0.5)';
    content.style.borderRadius = '16px';
    content.style.padding = '2rem';
    content.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    content.style.backdropFilter = 'blur(8px)';
    content.style.border = '1px solid rgba(255, 255, 255, 0.05)';
    content.style.overflowY = 'auto';
    content.style.marginBottom = '0';
  });
  
  // Find skills section and make it a card
  const skillsSection = contentColumn.querySelector('.space-y-6');
  if (skillsSection) {
    // Move skills section to be a direct child of the container
    container.appendChild(skillsSection);
    
    // Style skills section as a card
    skillsSection.style.flex = '0 0 340px';
    skillsSection.style.minWidth = '340px';
    skillsSection.style.height = '500px';
    skillsSection.style.scrollSnapAlign = 'center';
    skillsSection.style.background = 'rgba(18, 18, 18, 0.5)';
    skillsSection.style.borderRadius = '16px';
    skillsSection.style.padding = '2rem';
    skillsSection.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    skillsSection.style.border = '1px solid rgba(255, 255, 255, 0.05)';
    skillsSection.style.overflowY = 'auto';
  }
  
  // Remove the empty content column
  if (contentColumn.parentNode) {
    contentColumn.parentNode.removeChild(contentColumn);
  }
}

function addNavigation(container, aboutSection) {
  // Create arrow navigation container
  const navArrows = document.createElement('div');
  navArrows.className = 'about-nav-arrows';
  
  // Create left arrow
  const leftArrow = document.createElement('button');
  leftArrow.className = 'about-arrow prev-arrow';
  leftArrow.innerHTML = '&larr;';
  leftArrow.ariaLabel = 'Previous card';
  
  // Create right arrow
  const rightArrow = document.createElement('button');
  rightArrow.className = 'about-arrow next-arrow';
  rightArrow.innerHTML = '&rarr;';
  rightArrow.ariaLabel = 'Next card';
  
  // Add arrows to container
  navArrows.appendChild(leftArrow);
  navArrows.appendChild(rightArrow);
  
  // Add navigation after the main container
  aboutSection.querySelector('.max-w-7xl').appendChild(navArrows);
  
  // Set up navigation functionality
  leftArrow.addEventListener('click', () => {
    container.scrollBy({ left: -350, behavior: 'smooth' });
    setTimeout(updateDots, 500);
  });
  
  rightArrow.addEventListener('click', () => {
    container.scrollBy({ left: 350, behavior: 'smooth' });
    setTimeout(updateDots, 500);
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (isElementInViewport(container)) {
      if (e.key === 'ArrowLeft') {
        container.scrollBy({ left: -350, behavior: 'smooth' });
        setTimeout(updateDots, 500);
      } else if (e.key === 'ArrowRight') {
        container.scrollBy({ left: 350, behavior: 'smooth' });
        setTimeout(updateDots, 500);
      }
    }
  });
}

function addScrollDots(container, aboutSection) {
  // Create dots container
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'about-carousel-dots';
  
  // Count the direct children to create the right number of dots
  const cardCount = container.children.length;
  
  // Create a dot for each card
  for (let i = 0; i < cardCount; i++) {
    const dot = document.createElement('div');
    dot.className = 'about-carousel-dot';
    if (i === 0) dot.classList.add('active');
    
    // Add click handler
    dot.addEventListener('click', () => {
      // Scroll to the corresponding card
      container.children[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setTimeout(updateDots, 500);
    });
    
    dotsContainer.appendChild(dot);
  }
  
  // Add dots after navigation
  aboutSection.querySelector('.max-w-7xl').appendChild(dotsContainer);
  
  // Add scroll event to update active dot
  container.addEventListener('scroll', debounce(updateDots, 100));
}

function setupTabNavigation(container) {
  // Get all tabs
  const tabs = container.querySelectorAll('.tab-link');
  const tabContents = container.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    // Remove existing event listeners by cloning and replacing
    const newTab = tab.cloneNode(true);
    tab.parentNode.replaceChild(newTab, tab);
    
    // Add hover effect
    newTab.addEventListener('mouseenter', () => {
      if (!newTab.classList.contains('active-tab')) {
        newTab.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
      }
    });
    
    newTab.addEventListener('mouseleave', () => {
      if (!newTab.classList.contains('active-tab')) {
        newTab.style.backgroundColor = 'transparent';
      }
    });
    
    // Add click event
    newTab.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Update all tabs
      tabs.forEach(t => {
        t.classList.remove('active-tab');
        t.style.backgroundColor = 'transparent';
        t.style.color = '';
        t.style.fontWeight = 'normal';
      });
      
      // Activate clicked tab
      this.classList.add('active-tab');
      this.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
      this.style.color = 'var(--accent, #64ffda)';
      this.style.fontWeight = '600';
      
      // Find corresponding content
      const targetContent = Array.from(tabContents).find(content => content.id === `${tabId}-tab`);
      
      if (targetContent) {
        // Scroll to the target content
        targetContent.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
        
        setTimeout(updateDots, 500);
        
        // Add fade-in animation
        targetContent.style.opacity = '0';
        targetContent.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
          targetContent.style.opacity = '1';
          targetContent.style.transform = 'translateY(0)';
          targetContent.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        }, 50);
      }
    });
  });
}

function addCardEffects(container) {
  // Add hover effects to all cards
  const cards = container.children;
  Array.from(cards).forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 10px 30px rgba(100, 255, 218, 0.1)';
      card.style.borderColor = 'rgba(100, 255, 218, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
      card.style.borderColor = 'rgba(255, 255, 255, 0.05)';
    });
  });
}

function updateDots() {
  const container = document.querySelector('#about .grid-cols-1.lg\\:grid-cols-12');
  const dots = document.querySelectorAll('.about-carousel-dot');
  if (!container || dots.length === 0) return;
  
  // Calculate which card is most visible
  const cards = Array.from(container.children);
  const containerRect = container.getBoundingClientRect();
  const containerCenter = containerRect.left + containerRect.width / 2;
  
  let closestCard = null;
  let minDistance = Infinity;
  
  cards.forEach((card, index) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const distance = Math.abs(cardCenter - containerCenter);
    
    if (distance < minDistance) {
      minDistance = distance;
      closestCard = card;
    }
  });
  
  // Find the index of the closest card
  const activeIndex = closestCard ? cards.indexOf(closestCard) : 0;
  
  // Update active dot
  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Helper function to check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Helper function to debounce events
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
