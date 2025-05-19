/**
 * Enhanced Mobile Responsiveness for Hero Section
 * Improves layout and animations for mobile devices
 */

document.addEventListener('DOMContentLoaded', function() {
  // Small delay to ensure DOM is ready
  setTimeout(enhanceMobileHero, 300);
  
  // Listen for orientation changes
  window.addEventListener('orientationchange', function() {
    // Small delay after orientation change to let browser catch up
    setTimeout(adjustForOrientation, 300);
  });
  
  // Listen for resize
  window.addEventListener('resize', debounce(enhanceMobileHero, 200));
});

function enhanceMobileHero() {
  const isMobile = window.innerWidth <= 768;
  const isSmallMobile = window.innerWidth <= 480;
  const isExtraSmallMobile = window.innerWidth <= 320;
  
  // Get hero section elements
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;
  
  const title = document.getElementById('luxury-title');
  const tagline = document.getElementById('luxury-tagline');
  const description = document.getElementById('luxury-description');
  const profileContainer = document.getElementById('luxury-profile');
  const buttons = document.getElementById('luxury-buttons');
  const stats = document.getElementById('luxury-stats');
  const socialLinks = document.getElementById('luxury-social');
  const scrollIndicator = document.getElementById('luxury-scroll');
  
  // Add class to mark device type for styling
  heroSection.classList.toggle('is-mobile', isMobile);
  heroSection.classList.toggle('is-small-mobile', isSmallMobile);
  heroSection.classList.toggle('is-extra-small-mobile', isExtraSmallMobile);
  
  // Adjust animations for better mobile performance
  if (isMobile) {
    // Reduce particle count on mobile
    const particles = document.querySelectorAll('#luxury-particles canvas');
    particles.forEach(p => {
      if (isSmallMobile) {
        p.style.opacity = '0.3'; // Reduce opacity on small devices
      }
    });
    
    // Optimize hover effects for touch devices
    optimizeForTouch(buttons);
    
    // Make sure elements are centered on mobile
    const textContent = document.querySelector('.luxury-text-content');
    if (textContent) {
      textContent.style.textAlign = 'center';
      textContent.style.width = '100%';
    }
    
    // Fix buttons on small screens
    if (isSmallMobile && buttons) {
      const allButtons = buttons.querySelectorAll('button');
      allButtons.forEach(button => {
        button.style.width = '100%';
        button.style.justifyContent = 'center';
      });
      
      // Fix button container width
      buttons.style.maxWidth = '300px';
      buttons.style.margin = '0 auto';
      buttons.style.width = '100%';
    }
    
    // Fix profile image size
    if (profileContainer) {
      const containerSize = isExtraSmallMobile ? '200px' : 
                           (isSmallMobile ? '240px' : '280px');
      
      profileContainer.style.width = containerSize;
      profileContainer.style.height = containerSize;
      profileContainer.style.margin = '0 auto 1rem';
    }
    
    // Fix stats for narrow screens
    if (stats && isSmallMobile) {
      const statItems = stats.querySelectorAll('.luxury-stat');
      statItems.forEach(stat => {
        stat.style.minWidth = '70px';
      });
    }
    
    // Fix social and scroll indicators position
    if (socialLinks) {
      socialLinks.style.bottom = '1rem';
      socialLinks.style.justifyContent = 'center';
    }
    
    if (scrollIndicator) {
      scrollIndicator.style.bottom = '1rem';
    }
    
    // Make typing text faster on mobile
    if (window.typingAnimation) {
      window.typingAnimation.typeDelay = 40; // Faster typing on mobile
    }
  } else {
    // Reset styles for desktop if needed
    if (profileContainer) {
      profileContainer.style.margin = '';
    }
  }
  
  // Check for landscape mode on mobile
  adjustForOrientation();
}

function adjustForOrientation() {
  const isLandscape = window.innerWidth > window.innerHeight;
  const isMobile = window.innerWidth <= 768 || window.innerHeight <= 500;
  
  if (isLandscape && isMobile) {
    // Special handling for landscape mode on mobile
    const heroGrid = document.querySelector('.luxury-grid');
    const profileContainer = document.getElementById('luxury-profile');
    const textContent = document.querySelector('.luxury-text-content');
    
    if (heroGrid) {
      heroGrid.style.flexDirection = 'row';
      heroGrid.style.alignItems = 'center';
      heroGrid.style.paddingTop = '1rem';
    }
    
    if (profileContainer) {
      profileContainer.style.width = 'min(180px, 30vw)';
      profileContainer.style.height = 'min(180px, 30vw)';
    }
    
    if (textContent) {
      textContent.style.textAlign = 'left';
    }
    
    // Adjust description to be shorter
    const description = document.getElementById('luxury-description');
    if (description) {
      description.style.marginBottom = '1rem';
      description.style.fontSize = '0.9rem';
    }
    
    // Fix buttons in landscape
    const buttons = document.getElementById('luxury-buttons');
    if (buttons) {
      buttons.style.justifyContent = 'flex-start';
    }
    
    // Fix stats in landscape
    const stats = document.getElementById('luxury-stats');
    if (stats) {
      stats.style.justifyContent = 'flex-start';
    }
  }
}

// Optimize hover effects for touch devices
function optimizeForTouch(element) {
  if (!element) return;
  
  const buttons = element.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.98)';
      this.style.opacity = '0.9';
    });
    
    button.addEventListener('touchend', function() {
      this.style.transform = '';
      this.style.opacity = '';
    });
  });
}

// Simple debounce function to prevent excessive function calls
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
