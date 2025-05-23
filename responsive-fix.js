/**
 * Comprehensive Mobile Responsive JavaScript
 * Handles all mobile-specific functionality and optimizations
 */

class MobileOptimizer {
  constructor() {
    this.isMobile = window.innerWidth <= 768;
    this.isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    this.touchDevice = 'ontouchstart' in window;
    this.init();
  }

  init() {
    this.setupViewport();
    this.fixHorizontalScrolling();
    this.optimizeForMobile();
    this.setupEventListeners();
    this.handleOrientationChange();
    this.optimizeAnimations();
    this.setupTouchOptimizations();
  }

  setupViewport() {
    // Ensure proper viewport setup
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      document.head.appendChild(viewport);
    }
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, viewport-fit=cover';
  }

  fixHorizontalScrolling() {
    // Force body to full width without overflow
    document.body.style.width = '100%';
    document.body.style.maxWidth = '100vw';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';

    // Fix any overflowing elements
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width > window.innerWidth) {
        el.style.maxWidth = '100%';
        el.style.boxSizing = 'border-box';
      }
    });

    // Fix absolute positioned elements
    const absoluteElements = document.querySelectorAll('[style*="position: absolute"]');
    absoluteElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
        el.style.right = '0';
        el.style.left = 'auto';
      }
    });
  }

  optimizeForMobile() {
    if (!this.isMobile && !this.isTablet) return;

    // Optimize hero section
    this.optimizeHeroSection();
    
    // Optimize about section
    this.optimizeAboutSection();
    
    // Optimize projects section
    this.optimizeProjectsSection();
    
    // Optimize tech stack section
    this.optimizeTechStackSection();
    
    // Optimize contact section
    this.optimizeContactSection();
    
    // Fix navigation
    this.optimizeNavigation();
  }

  optimizeHeroSection() {
    const heroSection = document.querySelector('#hero');
    if (!heroSection) return;

    // Reduce particle count for better performance
    const particles = heroSection.querySelectorAll('.luxury-particle');
    particles.forEach((particle, index) => {
      if (this.isMobile && index % 3 !== 0) {
        particle.style.display = 'none';
      } else if (this.isTablet && index % 2 !== 0) {
        particle.style.display = 'none';
      }
    });

    // Optimize background elements
    const glowElements = heroSection.querySelectorAll('.luxury-glow');
    glowElements.forEach(glow => {
      if (this.isMobile) {
        glow.style.opacity = '0.3';
        glow.style.filter = 'blur(30px)';
      }
    });

    // Ensure proper mobile layout
    const luxuryGrid = heroSection.querySelector('.luxury-grid');
    if (luxuryGrid && this.isMobile) {
      luxuryGrid.style.flexDirection = 'column';
      luxuryGrid.style.textAlign = 'center';
      luxuryGrid.style.gap = '2rem';
    }
  }

  optimizeAboutSection() {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    // Ensure proper mobile grid layout
    const gridContainer = aboutSection.querySelector('.grid.grid-cols-1.lg\\:grid-cols-12');
    if (gridContainer) {
      if (this.isMobile) {
        gridContainer.style.cssText = `
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
          max-width: 100% !important;
        `;
      } else if (this.isTablet) {
        gridContainer.style.cssText = `
          display: grid !important;
          grid-template-columns: 1fr 2fr !important;
          gap: 3rem !important;
          max-width: 100% !important;
        `;
      }
    }

    // Optimize tab navigation for touch
    const tabLinks = aboutSection.querySelectorAll('.tab-link');
    tabLinks.forEach(tab => {
      tab.style.minHeight = '44px';
      tab.style.display = 'flex';
      tab.style.alignItems = 'center';
      tab.style.justifyContent = 'center';
      
      if (this.isMobile) {
        tab.style.padding = '0.75rem 0.5rem';
        tab.style.fontSize = '0.9rem';
      }
    });

    // Ensure tab content is properly displayed on mobile
    const tabContents = aboutSection.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
      if (this.isMobile || this.isTablet) {
        content.style.position = 'relative';
        content.style.opacity = '1';
        content.style.visibility = 'visible';
        content.style.transform = 'none';
        content.style.height = 'auto';
        content.style.minHeight = 'auto';
      }
    });
  }

  optimizeProjectsSection() {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;

    const gridContainer = projectsSection.querySelector('.grid');
    if (gridContainer) {
      if (this.isMobile) {
        gridContainer.style.gridTemplateColumns = '1fr';
        gridContainer.style.gap = '2rem';
      } else if (this.isTablet) {
        gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
        gridContainer.style.gap = '2rem';
      }
    }

    // Optimize project cards for touch
    const projectCards = projectsSection.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      if (this.touchDevice) {
        card.addEventListener('touchstart', () => {
          const overlay = card.querySelector('.project-overlay');
          if (overlay) {
            overlay.style.opacity = '1';
            overlay.style.transform = 'translateY(0)';
          }
        });

        card.addEventListener('touchend', () => {
          setTimeout(() => {
            const overlay = card.querySelector('.project-overlay');
            if (overlay) {
              overlay.style.opacity = '0';
              overlay.style.transform = 'translateY(100%)';
            }
          }, 3000);
        });
      }
    });
  }

  optimizeTechStackSection() {
    const techSection = document.querySelector('.tech-stack-section');
    if (!techSection) return;

    const keyboardContainer = document.getElementById('tech-keyboard-container');
    if (keyboardContainer) {
      if (this.isMobile) {
        keyboardContainer.style.cssText = `
          width: 100% !important;
          height: 280px !important;
          margin: 0 auto 2rem !important;
          border-radius: 15px !important;
        `;
      } else if (this.isTablet) {
        keyboardContainer.style.cssText = `
          width: 95% !important;
          height: 400px !important;
          margin: 0 auto 2rem !important;
          border-radius: 20px !important;
        `;
      }
    }

    const techPanel = document.querySelector('.tech-detail-panel');
    if (techPanel) {
      if (this.isMobile) {
        techPanel.style.cssText = `
          width: 95% !important;
          max-width: 100% !important;
          margin: 1rem auto !important;
          padding: 1rem !important;
        `;
      }
    }
  }

  optimizeContactSection() {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    const gridContainer = contactSection.querySelector('.grid.grid-cols-1.md\\:grid-cols-2');
    if (gridContainer && this.isMobile) {
      gridContainer.style.gridTemplateColumns = '1fr';
      gridContainer.style.gap = '3rem';
    }

    // Optimize form for mobile
    const formInputs = contactSection.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
      input.style.fontSize = '16px'; // Prevents zoom on iOS
      input.style.width = '100%';
    });

    // Fix eye loader for mobile
    const eyeLoader = contactSection.querySelector('.eloader');
    if (eyeLoader && this.isMobile) {
      eyeLoader.style.transform = 'scale(0.8)';
      eyeLoader.style.margin = '0 auto';
    }
  }

  optimizeNavigation() {
    // Optimize navigation dots for mobile
    const navDots = document.querySelector('.nav-dots');
    if (navDots) {
      if (this.isMobile) {
        navDots.style.right = '10px';
        const dots = navDots.querySelectorAll('.nav-dot');
        dots.forEach(dot => {
          dot.style.width = '8px';
          dot.style.height = '8px';
          dot.style.margin = '8px 0';
          dot.style.minHeight = '44px';
          dot.style.minWidth = '44px';
          dot.style.display = 'flex';
          dot.style.alignItems = 'center';
          dot.style.justifyContent = 'center';
        });
      }
    }

    // Optimize social links
    const socialLinks = document.querySelector('.luxury-social');
    if (socialLinks && this.isMobile) {
      socialLinks.style.flexDirection = 'row';
      socialLinks.style.gap = '1rem';
      socialLinks.style.bottom = '20px';
      socialLinks.style.left = '20px';
    }
  }

  optimizeAnimations() {
    // Reduce animations on mobile for better performance
    if (this.isMobile) {
      // Reduce marquee animation
      const marqueeElements = document.querySelectorAll('.animate-marquee span');
      marqueeElements.forEach(element => {
        element.style.fontSize = '1.5rem';
        element.style.margin = '0 1rem';
      });

      // Simplify particle animations
      const particles = document.querySelectorAll('.luxury-particle');
      particles.forEach((particle, index) => {
        if (index % 3 !== 0) {
          particle.style.display = 'none';
        }
      });
    }

    // Handle reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  setupTouchOptimizations() {
    if (!this.touchDevice) return;

    // Hide cursor elements on touch devices
    const cursors = document.querySelectorAll('.cursor');
    cursors.forEach(cursor => {
      cursor.style.display = 'none';
    });

    // Optimize touch targets
    const touchTargets = document.querySelectorAll('a, button, .tab-link, .nav-dot');
    touchTargets.forEach(target => {
      const computedStyle = window.getComputedStyle(target);
      const minSize = 44; // Minimum touch target size

      if (parseInt(computedStyle.height) < minSize) {
        target.style.minHeight = minSize + 'px';
      }
      if (parseInt(computedStyle.width) < minSize) {
        target.style.minWidth = minSize + 'px';
      }

      target.style.display = 'flex';
      target.style.alignItems = 'center';
      target.style.justifyContent = 'center';
    });

    // Add touch feedback
    document.addEventListener('touchstart', (e) => {
      if (e.target.classList.contains('btn') || 
          e.target.classList.contains('tab-link') ||
          e.target.classList.contains('project-card')) {
        e.target.style.transform = 'scale(0.98)';
      }
    });

    document.addEventListener('touchend', (e) => {
      if (e.target.classList.contains('btn') || 
          e.target.classList.contains('tab-link') ||
          e.target.classList.contains('project-card')) {
        setTimeout(() => {
          e.target.style.transform = '';
        }, 150);
      }
    });
  }

  setupEventListeners() {
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.isMobile = window.innerWidth <= 768;
        this.isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
        this.fixHorizontalScrolling();
        this.optimizeForMobile();
      }, 250);
    });

    // Handle orientation change
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        this.handleOrientationChange();
        this.fixHorizontalScrolling();
      }, 300);
    });

    // Prevent horizontal scroll on touch
    let startX = 0;
    document.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    document.addEventListener('touchmove', (e) => {
      const currentX = e.touches[0].clientX;
      const diffX = Math.abs(currentX - startX);
      
      // If horizontal swipe is detected and we're at page edge, prevent default
      if (diffX > 10 && (window.scrollX === 0 || 
          window.scrollX >= document.documentElement.scrollWidth - window.innerWidth)) {
        e.preventDefault();
      }
    }, { passive: false });
  }

  handleOrientationChange() {
    // Force layout recalculation after orientation change
    setTimeout(() => {
      window.scrollBy(0, 1);
      window.scrollBy(0, -1);
      
      // Update viewport height for mobile browsers
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    }, 300);
  }

  // Method to re-initialize if needed
  reinitialize() {
    this.isMobile = window.innerWidth <= 768;
    this.isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    this.optimizeForMobile();
  }
}

// Initialize mobile optimizer
document.addEventListener('DOMContentLoaded', () => {
  window.mobileOptimizer = new MobileOptimizer();
});

// Also initialize on load to catch any late-loading elements
window.addEventListener('load', () => {
  if (window.mobileOptimizer) {
    window.mobileOptimizer.reinitialize();
  }
});

// Export for use in other scripts
window.MobileOptimizer = MobileOptimizer;
