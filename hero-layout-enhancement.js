/**
 * Hero Section Layout and Animation Enhancement
 * Improves structure and adds animations to create a more engaging hero section
 */

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    enhanceHeroSection();
  }, 300);
});

function enhanceHeroSection() {
  // Get hero section elements
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;
  
  const title = document.getElementById('luxury-title');
  const tagline = document.getElementById('luxury-tagline');
  const description = document.getElementById('luxury-description');
  const profileContainer = document.getElementById('luxury-profile');
  const buttons = document.getElementById('luxury-buttons');
  
  // Apply structural enhancements
  enhanceTitleStructure();
  enhanceProfileContainer();
  enhanceButtons();
  
  // Initialize animations
  initializeHeroAnimations();
  
  console.log('Hero section layout enhanced with improved structure and animations');
}

function enhanceTitleStructure() {
  // Get the title element
  const title = document.getElementById('luxury-title');
  if (!title) return;
  
  // Get the current text and wrap the first name in a highlight span
  const titleText = title.innerHTML.trim();
  const parts = titleText.split('<br>');
  
  if (parts.length >= 2) {
    // Wrap the first name in a highlight span
    title.innerHTML = `<span class="highlight">${parts[0]}</span><br>${parts[1]}`;
  }
}

function enhanceProfileContainer() {
  // Add depth to the profile container
  const profileContainer = document.getElementById('luxury-profile');
  if (!profileContainer) return;
  
  // Add a spotlight effect to the image
  const imageContainer = profileContainer.querySelector('.luxury-image-container');
  if (imageContainer) {
    // Create spotlight overlay
    const spotlight = document.createElement('div');
    spotlight.className = 'luxury-image-spotlight';
    spotlight.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(
        circle at 50% 50%,
        rgba(100, 255, 218, 0.1),
        transparent 70%
      );
      z-index: 2;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.5s ease;
    `;
    
    imageContainer.appendChild(spotlight);
    
    // Add mouse move effect
    profileContainer.addEventListener('mousemove', (e) => {
      const rect = profileContainer.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse position X relative to container
      const y = e.clientY - rect.top;  // Mouse position Y relative to container
      
      // Calculate position as percentage
      const xPercent = Math.floor((x / rect.width) * 100);
      const yPercent = Math.floor((y / rect.height) * 100);
      
      // Move spotlight
      spotlight.style.background = `radial-gradient(
        circle at ${xPercent}% ${yPercent}%,
        rgba(100, 255, 218, 0.15),
        transparent 70%
      )`;
      
      spotlight.style.opacity = '1';
    });
    
    // Reset on mouse leave
    profileContainer.addEventListener('mouseleave', () => {
      spotlight.style.opacity = '0';
    });
  }
}

function enhanceButtons() {
  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('.luxury-btn-primary, .luxury-btn-secondary');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple';
      ripple.style.cssText = `
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `;
      
      ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) * 2 + 'px';
      ripple.style.left = x - ripple.offsetWidth / 2 + 'px';
      ripple.style.top = y - ripple.offsetHeight / 2 + 'px';
      
      button.appendChild(ripple);
      
      // Add the ripple animation to document if it doesn't exist
      if (!document.querySelector('#ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
          @keyframes ripple {
            to {
              opacity: 0;
              transform: scale(2);
            }
          }
        `;
        document.head.appendChild(style);
      }
      
      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

function initializeHeroAnimations() {
  // Check if GSAP is available
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded. Basic animations will be used instead.');
    initializeBasicAnimations();
    return;
  }
  
  // Use GSAP for more sophisticated animations
  // Elements to animate
  const title = document.getElementById('luxury-title');
  const subtitle = document.getElementById('luxury-subtitle');
  const tagline = document.getElementById('luxury-tagline');
  const typing = document.getElementById('luxury-typing');
  const description = document.getElementById('luxury-description');
  const stats = document.getElementById('luxury-stats');
  const buttons = document.getElementById('luxury-buttons');
  const profile = document.getElementById('luxury-profile');
  const social = document.getElementById('luxury-social');
  const scroll = document.getElementById('luxury-scroll');
  
  // Create a timeline
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  
  // Add animations to timeline
  tl.from(subtitle, { 
    y: 30, 
    opacity: 0, 
    duration: 0.8 
  })
  .from(title, { 
    y: 50, 
    opacity: 0, 
    duration: 1,
    stagger: 0.2
  }, "-=0.3")
  .from(tagline, { 
    y: 30, 
    opacity: 0, 
    duration: 0.8 
  }, "-=0.5")
  .from(typing, { 
    y: 30, 
    opacity: 0, 
    duration: 0.8 
  }, "-=0.5")
  .from(description, { 
    y: 30, 
    opacity: 0, 
    duration: 0.8 
  }, "-=0.5")
  .from(stats, { 
    y: 30, 
    opacity: 0, 
    duration: 0.8 
  }, "-=0.5")
  .from(buttons, { 
    y: 30, 
    opacity: 0, 
    duration: 0.8 
  }, "-=0.6")
  .from(profile, { 
    x: 50, 
    opacity: 0, 
    duration: 1 
  }, "-=1.2")
  .from(social, { 
    y: 30, 
    opacity: 0, 
    duration: 0.8 
  }, "-=0.3")
  .from(scroll, { 
    y: 30, 
    opacity: 0, 
    duration: 0.8 
  }, "-=0.8");
  
  // Animate numbers
  animateStats();
}

function initializeBasicAnimations() {
  // Use CSS transitions as fallback if GSAP is not available
  const elements = [
    document.getElementById('luxury-subtitle'),
    document.getElementById('luxury-title'),
    document.getElementById('luxury-tagline'),
    document.getElementById('luxury-typing'),
    document.getElementById('luxury-description'),
    document.getElementById('luxury-stats'),
    document.getElementById('luxury-buttons'),
    document.getElementById('luxury-profile'),
    document.getElementById('luxury-social'),
    document.getElementById('luxury-scroll')
  ];
  
  // Apply fade-in animations in sequence
  elements.forEach((el, index) => {
    if (!el) return;
    
    // Set initial styles
    el.style.opacity = '0';
    el.style.transform = el === document.getElementById('luxury-profile')
      ? 'translateX(30px)' 
      : 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // Add animation with delay
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translate(0)';
    }, 100 + index * 150);
  });
  
  // Animate stats
  setTimeout(() => {
    animateStats();
  }, 1000);
}

function animateStats() {
  // Get all stat counters
  const counters = document.querySelectorAll('.luxury-stat-number');
  
  counters.forEach(counter => {
    // Get target value
    const target = parseInt(counter.getAttribute('data-value'), 10);
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // Update every 16ms (approx. 60fps)
    let current = 0;
    
    // Create animation
    const updateCounter = () => {
      current += step;
      
      if (current < target) {
        counter.textContent = Math.round(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    // Start animation
    updateCounter();
  });
}
