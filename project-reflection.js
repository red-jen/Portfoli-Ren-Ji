/**
 * Enhanced Project Card Reflection Effects
 * Adds interactive 3D tilt and reflection effects to project cards
 */

document.addEventListener('DOMContentLoaded', function() {
  // Wait for the page to fully load before applying effects
  setTimeout(() => {
    initProjectCardEffects();
  }, 500);
});

function initProjectCardEffects() {
  // Get all project cards
  const projectCards = document.querySelectorAll('.project-card');
  
  if (!projectCards.length) {
    console.warn('No project cards found on page');
    return;
  }
  
  console.log(`Enhancing ${projectCards.length} project cards with reflection effects`);
  
  // Set up the CSS variable for accent color RGB
  const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#64ffda';
  const rgbValues = hexToRgb(accentColor);
  document.documentElement.style.setProperty('--accent-rgb', rgbValues ? `${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b}` : '100, 255, 218');
  
  // Add reflection and 3D tilt effects to each card
  projectCards.forEach(card => {
    // Enhanced mouse move effect with 3D tilt
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse position X relative to card
      const y = e.clientY - rect.top;  // Mouse position Y relative to card
      
      // Calculate position as percentage of card dimensions
      const xPercent = Math.floor((x / rect.width) * 100);
      const yPercent = Math.floor((y / rect.height) * 100);
      
      // Set CSS variables for the glow effect
      card.style.setProperty('--x', `${xPercent}%`);
      card.style.setProperty('--y', `${yPercent}%`);
      
      // Calculate tilt based on mouse position
      // Limit the maximum tilt to keep the effect subtle
      const tiltX = ((y / rect.height) - 0.5) * 8; // Max ±4 degrees
      const tiltY = (0.5 - (x / rect.width)) * 8;  // Max ±4 degrees
      
      card.style.setProperty('--rotateX', `${tiltX}deg`);
      card.style.setProperty('--rotateY', `${tiltY}deg`);
      
      // Move the reflection based on mouse position
      const reflectionElement = card.querySelector('.reflection-overlay');
      if (reflectionElement) {
        const moveX = (x / rect.width - 0.5) * 40;
        const moveY = (y / rect.height - 0.5) * 40;
        reflectionElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    });
    
    // Reset transformations when mouse leaves
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--rotateX', '0deg');
      card.style.setProperty('--rotateY', '0deg');
      
      // Center the glow when not hovering
      card.style.setProperty('--x', '50%');
      card.style.setProperty('--y', '50%');
      
      // Reset reflection position
      const reflectionElement = card.querySelector('.reflection-overlay');
      if (reflectionElement) {
        reflectionElement.style.transform = 'translate(0, 0)';
      }
    });
    
    // Add unique reflection overlay
    addReflectionOverlay(card);
    
    // Enhance project tags with staggered animation
    enhanceProjectTags(card);
  });
  
  // Add intersection observer for nice reveal effect
  setupCardRevealAnimation();
}

// Helper function to convert hex color to RGB
function hexToRgb(hex) {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Parse hex values
  const bigint = parseInt(hex, 16);
  
  // Handle different hex formats (3 or 6 characters)
  if (hex.length === 3) {
    const r = ((bigint >> 4) & 15) * 17;
    const g = (bigint & 15) * 17;
    const b = ((bigint >> 8) & 15) * 17;
    return { r, g, b };
  } else if (hex.length === 6) {
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }
  
  return null;
}

// Add a special reflection overlay to each card
function addReflectionOverlay(card) {
  // Only add if it doesn't already exist
  if (card.querySelector('.reflection-overlay')) return;
  
  const overlay = document.createElement('div');
  overlay.className = 'reflection-overlay';
  overlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      transparent 0%,
      rgba(255, 255, 255, 0.04) 40%,
      rgba(255, 255, 255, 0.07) 50%,
      transparent 60%
    );
    pointer-events: none;
    z-index: 3;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  
  card.appendChild(overlay);
  
  // Show overlay on hover
  card.addEventListener('mouseenter', () => {
    overlay.style.opacity = '1';
  });
  
  card.addEventListener('mouseleave', () => {
    overlay.style.opacity = '0';
  });
}

// Enhance project tags with staggered animation
function enhanceProjectTags(card) {
  const tags = card.querySelectorAll('.project-overlay .px-2');
  tags.forEach((tag, index) => {
    // Add delay based on tag index for staggered animation
    tag.style.transition = `transform 0.3s ease ${index * 0.05}s, 
                           background-color 0.3s ease, 
                           opacity 0.3s ease ${index * 0.05}s`;
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(10px)';
    
    // Show tags with staggered animation on hover
    card.addEventListener('mouseenter', () => {
      setTimeout(() => {
        tag.style.opacity = '1';
        tag.style.transform = 'translateY(0)';
      }, 100 + index * 50);
    });
    
    // Hide tags when not hovering
    card.addEventListener('mouseleave', () => {
      tag.style.opacity = '0';
      tag.style.transform = 'translateY(10px)';
    });
  });
}

// Set up animation for cards as they scroll into view
function setupCardRevealAnimation() {
  // Only proceed if Intersection Observer is supported
  if (!('IntersectionObserver' in window)) return;
  
  const options = {
    root: null, // Use viewport
    rootMargin: '0px',
    threshold: 0.2 // Trigger when 20% visible
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Stop observing once revealed
      }
    });
  }, options);
  
  // Observe each project card
  document.querySelectorAll('.project-card').forEach(card => {
    // Add initial hidden state
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // Add revealed style
    const style = document.createElement('style');
    style.textContent = `
      .project-card.revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);
    
    // Start observing
    observer.observe(card);
  });
}
