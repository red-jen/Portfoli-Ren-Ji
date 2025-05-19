/**
 * About Section Layout Enhancement
 * Provides responsive card-based layout with improved spacing and animations
 */

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(enhanceAboutSection, 500);
  
  // Listen for resize events to maintain layout
  window.addEventListener('resize', debounce(enhanceAboutSection, 250));
});

function enhanceAboutSection() {
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  
  console.log('Enhancing about section layout');
  
  // Get main container and content areas
  const container = aboutSection.querySelector('.grid-cols-1.lg\\:grid-cols-12');
  const profileColumn = aboutSection.querySelector('.lg\\:col-span-5');
  const contentColumn = aboutSection.querySelector('.lg\\:col-span-7');
  
  if (!container || !profileColumn || !contentColumn) return;
  
  // Apply card-based layout with improved spacing
  applyCardLayout(container, profileColumn, contentColumn);
  
  // Enhance tabs navigation
  enhanceTabNavigation(contentColumn);
  
  // Add scroll indicators if needed for horizontal scrolling
  addScrollIndicators(container);
  
  // Apply animations
  applyAnimations(aboutSection);
}

function applyCardLayout(container, profileColumn, contentColumn) {
  // Enhanced container layout
  container.style.display = 'flex';
  container.style.flexDirection = 'row';
  container.style.flexWrap = window.innerWidth < 1024 ? 'wrap' : 'nowrap';
  container.style.gap = '2rem';
  container.style.alignItems = 'stretch';
  
  // Make profile card more visually appealing
  profileColumn.style.flex = window.innerWidth < 1024 ? '1 0 100%' : '0 0 340px';
  profileColumn.style.backgroundColor = 'rgba(18, 18, 18, 0.5)';
  profileColumn.style.borderRadius = '16px';
  profileColumn.style.padding = '2rem';
  profileColumn.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
  profileColumn.style.backdropFilter = 'blur(8px)';
  profileColumn.style.transition = 'all 0.3s ease';
  profileColumn.style.border = '1px solid rgba(255, 255, 255, 0.05)';
  
  // Add hover effect to profile card
  profileColumn.addEventListener('mouseenter', () => {
    profileColumn.style.transform = 'translateY(-5px)';
    profileColumn.style.boxShadow = '0 8px 30px rgba(100, 255, 218, 0.1)';
    profileColumn.style.borderColor = 'rgba(100, 255, 218, 0.2)';
  });
  
  profileColumn.addEventListener('mouseleave', () => {
    profileColumn.style.transform = 'translateY(0)';
    profileColumn.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    profileColumn.style.borderColor = 'rgba(255, 255, 255, 0.05)';
  });
  
  // Enhance content column layout
  contentColumn.style.flex = window.innerWidth < 1024 ? '1 0 100%' : '1 1 auto';
  
  // Organize tab content items into cards
  const tabContents = contentColumn.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.style.backgroundColor = 'rgba(18, 18, 18, 0.5)';
    content.style.borderRadius = '16px';
    content.style.padding = '2rem';
    content.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    content.style.backdropFilter = 'blur(8px)';
    content.style.minHeight = '380px';
    content.style.transition = 'all 0.3s ease';
    content.style.border = '1px solid rgba(255, 255, 255, 0.05)';
    
    // Only apply hover effect to active tab
    if (content.classList.contains('active')) {
      content.addEventListener('mouseenter', () => {
        content.style.transform = 'translateY(-5px)';
        content.style.boxShadow = '0 8px 30px rgba(100, 255, 218, 0.1)';
        content.style.borderColor = 'rgba(100, 255, 218, 0.2)';
      });
      
      content.addEventListener('mouseleave', () => {
        content.style.transform = 'translateY(0)';
        content.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        content.style.borderColor = 'rgba(255, 255, 255, 0.05)';
      });
    }
  });
  
  // Enhance skills section card
  const skillsSection = contentColumn.querySelector('.space-y-6');
  if (skillsSection) {
    skillsSection.style.backgroundColor = 'rgba(18, 18, 18, 0.5)';
    skillsSection.style.borderRadius = '16px';
    skillsSection.style.padding = '2rem';
    skillsSection.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    skillsSection.style.backdropFilter = 'blur(8px)';
    skillsSection.style.transition = 'all 0.3s ease';
    skillsSection.style.border = '1px solid rgba(255, 255, 255, 0.05)';
    skillsSection.style.marginTop = '2rem';
    
    // Add hover effect to skills card
    skillsSection.addEventListener('mouseenter', () => {
      skillsSection.style.transform = 'translateY(-5px)';
      skillsSection.style.boxShadow = '0 8px 30px rgba(100, 255, 218, 0.1)';
      skillsSection.style.borderColor = 'rgba(100, 255, 218, 0.2)';
    });
    
    skillsSection.addEventListener('mouseleave', () => {
      skillsSection.style.transform = 'translateY(0)';
      skillsSection.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
      skillsSection.style.borderColor = 'rgba(255, 255, 255, 0.05)';
    });
  }
}

function enhanceTabNavigation(contentColumn) {
  const tabsContainer = contentColumn.querySelector('.flex.overflow-x-auto');
  if (!tabsContainer) return;
  
  // Style tabs navigation
  tabsContainer.style.backgroundColor = 'rgba(18, 18, 18, 0.5)';
  tabsContainer.style.borderRadius = '8px';
  tabsContainer.style.padding = '0.75rem';
  tabsContainer.style.marginBottom = '1.5rem';
  tabsContainer.style.display = 'flex';
  tabsContainer.style.gap = '1rem';
  tabsContainer.style.justifyContent = 'center';
  tabsContainer.style.border = '1px solid rgba(255, 255, 255, 0.05)';
  tabsContainer.style.backdropFilter = 'blur(8px)';
  
  // Enhance tab links
  const tabs = tabsContainer.querySelectorAll('.tab-link');
  tabs.forEach(tab => {
    const isActive = tab.classList.contains('active-tab');
    
    // Style each tab
    tab.style.padding = '0.75rem 1.25rem';
    tab.style.borderRadius = '8px';
    tab.style.cursor = 'pointer';
    tab.style.transition = 'all 0.2s ease';
    tab.style.fontSize = '0.9rem';
    tab.style.fontWeight = isActive ? 'bold' : 'normal';
    tab.style.position = 'relative';
    tab.style.border = 'none';
    tab.style.backgroundColor = isActive ? 'rgba(100, 255, 218, 0.1)' : 'transparent';
    tab.style.color = isActive ? 'var(--accent, #64ffda)' : '';
    
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
    
    // Add click event with visual feedback
    newTab.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Update all tabs
      tabs.forEach(t => {
        const isNowActive = t === this;
        t.classList.toggle('active-tab', isNowActive);
        t.style.backgroundColor = isNowActive ? 'rgba(100, 255, 218, 0.1)' : 'transparent';
        t.style.fontWeight = isNowActive ? 'bold' : 'normal';
        t.style.color = isNowActive ? 'var(--accent, #64ffda)' : '';
      });
      
      // Show corresponding content
      const tabContents = document.querySelectorAll('.tab-content');
      tabContents.forEach(content => {
        const isVisible = content.id === `${tabId}-tab`;
        content.classList.toggle('active', isVisible);
        content.style.display = isVisible ? 'block' : 'none';
        
        // Only add hover effects to active tab content
        if (isVisible) {
          content.addEventListener('mouseenter', () => {
            content.style.transform = 'translateY(-5px)';
            content.style.boxShadow = '0 8px 30px rgba(100, 255, 218, 0.1)';
            content.style.borderColor = 'rgba(100, 255, 218, 0.2)';
          });
          
          content.addEventListener('mouseleave', () => {
            content.style.transform = 'translateY(0)';
            content.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
            content.style.borderColor = 'rgba(255, 255, 255, 0.05)';
          });
          
          // Add fade-in animation
          content.style.opacity = '0';
          content.style.transform = 'translateY(10px)';
          setTimeout(() => {
            content.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
          }, 50);
        }
      });
    });
  });
}

function addScrollIndicators(container) {
  // Only needed on horizontal layouts
  if (window.innerWidth <= 768) return;
  
  // Check if scroll is needed
  if (container.scrollWidth <= container.clientWidth) return;
  
  // Create scroll indicators if they don't exist
  if (!document.querySelector('.about-scroll-indicators')) {
    const indicatorsContainer = document.createElement('div');
    indicatorsContainer.className = 'about-scroll-indicators';
    indicatorsContainer.style.display = 'flex';
    indicatorsContainer.style.justifyContent = 'center';
    indicatorsContainer.style.gap = '0.5rem';
    indicatorsContainer.style.marginTop = '1rem';
    
    const leftArrow = document.createElement('button');
    leftArrow.innerHTML = '←';
    leftArrow.className = 'about-scroll-arrow';
    leftArrow.style.width = '40px';
    leftArrow.style.height = '40px';
    leftArrow.style.borderRadius = '50%';
    leftArrow.style.border = '1px solid var(--accent, #64ffda)';
    leftArrow.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
    leftArrow.style.color = 'var(--accent, #64ffda)';
    leftArrow.style.cursor = 'pointer';
    leftArrow.style.transition = 'all 0.3s ease';
    
    const rightArrow = leftArrow.cloneNode(true);
    rightArrow.innerHTML = '→';
    
    // Add scroll behavior
    leftArrow.addEventListener('click', () => {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    rightArrow.addEventListener('click', () => {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    });
    
    // Add hover effects
    [leftArrow, rightArrow].forEach(arrow => {
      arrow.addEventListener('mouseenter', () => {
        arrow.style.backgroundColor = 'rgba(100, 255, 218, 0.2)';
        arrow.style.transform = 'scale(1.1)';
      });
      
      arrow.addEventListener('mouseleave', () => {
        arrow.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
        arrow.style.transform = 'scale(1)';
      });
    });
    
    indicatorsContainer.appendChild(leftArrow);
    indicatorsContainer.appendChild(rightArrow);
    
    // Add to the DOM
    container.parentNode.insertBefore(indicatorsContainer, container.nextSibling);
  }
}

function applyAnimations(aboutSection) {
  // Add animation to section title
  const sectionTitle = aboutSection.querySelector('h2');
  if (sectionTitle) {
    sectionTitle.style.transform = 'translateY(20px)';
    sectionTitle.style.opacity = '0';
    sectionTitle.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
    
    // Use IntersectionObserver to trigger animation when scrolled into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sectionTitle.style.transform = 'translateY(0)';
          sectionTitle.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(sectionTitle);
  }
  
  // Add stagger animation to cards
  const cards = aboutSection.querySelectorAll('.lg\\:col-span-5, .tab-content, .space-y-6');
  cards.forEach((card, index) => {
    card.style.transform = 'translateY(30px)';
    card.style.opacity = '0';
    card.style.transition = `transform 0.8s ease ${0.1 + index * 0.1}s, opacity 0.8s ease ${0.1 + index * 0.1}s`;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          card.style.transform = 'translateY(0)';
          card.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(card);
  });
}

// Helper function to debounce events
function debounce(func, delay) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}
