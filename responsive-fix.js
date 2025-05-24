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

    // Two-column layout optimization
    const gridContainer = aboutSection.querySelector('.grid.grid-cols-1.lg\\:grid-cols-12');
    if (gridContainer) {
      if (this.isMobile) {
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
      } else if (this.isTablet) {
        gridContainer.style.cssText = `
          display: grid !important;
          grid-template-columns: 300px 1fr !important;
          grid-template-rows: 1fr !important;
          gap: 3rem !important;
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 auto !important;
          align-items: start !important;
          min-height: 60vh !important;
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

    // Profile column optimization for same-row layout
    const profileColumn = aboutSection.querySelector('.lg\\:col-span-5');
    if (profileColumn) {
      if (this.isMobile) {
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

    // Content column optimization for same-row layout
    const contentColumn = aboutSection.querySelector('.lg\\:col-span-7');
    if (contentColumn) {
      if (this.isMobile) {
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
          min-height: ${this.isTablet ? '60vh' : '70vh'} !important;
          justify-content: flex-start !important;
        `;
      }
    }

    // Simple clean layout optimization
    const gridContainer = aboutSection.querySelector('.grid.grid-cols-1.lg\\:grid-cols-12');
    if (gridContainer) {
      if (this.isMobile) {
        gridContainer.style.cssText = `
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 3rem !important;
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 auto !important;
          align-items: start !important;
        `;
      } else if (this.isTablet) {
        gridContainer.style.cssText = `
          display: grid !important;
          grid-template-columns: 300px 1fr !important;
          gap: 3rem !important;
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 auto !important;
          align-items: start !important;
        `;
      } else {
        gridContainer.style.cssText = `
          display: grid !important;
          grid-template-columns: 350px 1fr !important;
          gap: 4rem !important;
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 auto !important;
          align-items: start !important;
        `;
      }
    }

    // Profile column optimization
    const profileColumn = aboutSection.querySelector('.lg\\:col-span-5');
    if (profileColumn) {
      if (this.isMobile) {
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
          position: sticky !important;
          top: 2rem !important;
          height: fit-content !important;
        `;
      }
    }

    // Content column optimization
    const contentColumn = aboutSection.querySelector('.lg\\:col-span-7');
    if (contentColumn) {
      contentColumn.style.cssText = `
        background: transparent !important;
        padding: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 2rem !important;
        width: 100% !important;
        max-width: 100% !important;
      `;
    }

    // Optimize tab navigation for touch
    const tabLinks = aboutSection.querySelectorAll('.tab-link');
    tabLinks.forEach(tab => {
      tab.style.cssText = `
        padding: ${this.isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem'} !important;
        font-size: ${this.isMobile ? '0.8rem' : '0.9rem'} !important;
        font-weight: 500 !important;
        border-bottom: 2px solid transparent !important;
        border-radius: 0.5rem 0.5rem 0 0 !important;
        transition: all 0.3s ease !important;
        color: rgba(255, 255, 255, 0.7) !important;
        background: rgba(255, 255, 255, 0.02) !important;
        cursor: pointer !important;
        flex-shrink: 0 !important;
      `;
    });

    // Optimize profile image size
    const profileImage = aboutSection.querySelector('.relative.w-48.h-48');
    if (profileImage) {
      if (this.isMobile) {
        profileImage.style.cssText = `
          width: 6rem !important;
          height: 6rem !important;
          margin-bottom: 1rem !important;
        `;
      } else if (this.isTablet) {
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

    // Ensure tab content is properly displayed
    const tabContents = aboutSection.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
      content.style.cssText = `
        background: rgba(255, 255, 255, 0.02) !important;
        border: 1px solid rgba(255, 255, 255, 0.05) !important;
        border-radius: 0.5rem !important;
        padding: ${this.isMobile ? '1.5rem' : '2rem'} !important;
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
        content.style.display = 'none !important';
      }
    });
    
    // Fix skills grid for mobile
    const skillsGrid = aboutSection.querySelector('.grid.grid-cols-1.md\\:grid-cols-2');
    if (skillsGrid) {
      if (this.isMobile) {
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
    // Optimize navigation dots for mobile - make them smaller
    const navDots = document.querySelector('.nav-dots');
    if (navDots) {
      const isMobile = this.isMobile;
      const isTablet = this.isTablet;
      const isLandscape = window.innerHeight <= 500;
      
      if (isMobile) {
        navDots.style.cssText = `
          position: fixed !important;
          right: ${isLandscape ? '0.5rem' : '1rem'} !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 1000 !important;
          display: flex !important;
          flex-direction: column !important;
          gap: ${isLandscape ? '0.4rem' : '0.5rem'} !important;
        `;
        
        const dots = navDots.querySelectorAll('.nav-dot');
        dots.forEach(dot => {
          const size = isLandscape ? '5px' : '6px';
          dot.style.cssText = `
            width: ${size} !important;
            height: ${size} !important;
            border-radius: 50% !important;
            background-color: rgba(255, 255, 255, 0.3) !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
          `;
          
          if (dot.classList.contains('active')) {
            dot.style.backgroundColor = 'var(--accent, #64ffda)';
            dot.style.borderColor = 'var(--accent, #64ffda)';
            dot.style.boxShadow = '0 0 8px rgba(100, 255, 218, 0.5)';
          }
        });
      } else if (isTablet) {
        navDots.style.cssText = `
          position: fixed !important;
          right: 1.5rem !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 1000 !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 0.6rem !important;
        `;
        
        const dots = navDots.querySelectorAll('.nav-dot');
        dots.forEach(dot => {
          dot.style.cssText = `
            width: 7px !important;
            height: 7px !important;
            border-radius: 50% !important;
            background-color: rgba(255, 255, 255, 0.3) !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
          `;
          
          if (dot.classList.contains('active')) {
            dot.style.backgroundColor = 'var(--accent, #64ffda)';
            dot.style.borderColor = 'var(--accent, #64ffda)';
            dot.style.boxShadow = '0 0 10px rgba(100, 255, 218, 0.5)';
          }
        });
      } else {
        // Desktop
        navDots.style.cssText = `
          position: fixed !important;
          right: 2rem !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 1000 !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 0.75rem !important;
        `;
        
        const dots = navDots.querySelectorAll('.nav-dot');
        dots.forEach(dot => {
          dot.style.cssText = `
            width: 8px !important;
            height: 8px !important;
            border-radius: 50% !important;
            background-color: rgba(255, 255, 255, 0.3) !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
          `;
          
          if (dot.classList.contains('active')) {
            dot.style.backgroundColor = 'var(--accent, #64ffda)';
            dot.style.borderColor = 'var(--accent, #64ffda)';
            dot.style.boxShadow = '0 0 10px rgba(100, 255, 218, 0.5)';
          }
        });
      }
    }

    // Optimize social links for mobile - keep them vertical
    const socialLinks = document.querySelector('.luxury-social');
    if (socialLinks) {
      if (this.isMobile) {
        socialLinks.style.cssText = `
          position: fixed !important;
          bottom: 20px !important;
          left: 20px !important;
          right: auto !important;
          flex-direction: column !important;
          gap: 1rem !important;
          z-index: 1000 !important;
          display: flex !important;
        `;
        
        // Style each social link for mobile
        const socialLinksElements = socialLinks.querySelectorAll('.luxury-social-link');
        socialLinksElements.forEach(link => {
          link.style.cssText = `
            width: 40px !important;
            height: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            background: rgba(0, 0, 0, 0.3) !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-radius: 50% !important;
            color: white !important;
            transition: all 0.3s ease !important;
            text-decoration: none !important;
          `;
          
          // Add hover effects programmatically for touch devices
          link.addEventListener('touchstart', () => {
            link.style.background = 'rgba(100, 255, 218, 0.2)';
            link.style.borderColor = 'var(--accent)';
            link.style.color = 'var(--accent)';
            link.style.transform = 'translateY(-2px)';
          });
          
          link.addEventListener('touchend', () => {
            setTimeout(() => {
              link.style.background = 'rgba(0, 0, 0, 0.3)';
              link.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              link.style.color = 'white';
              link.style.transform = 'translateY(0)';
            }, 150);
          });
          
          // Optimize SVG size for mobile
          const svg = link.querySelector('svg');
          if (svg) {
            svg.style.width = '18px';
            svg.style.height = '18px';
          }
        });
        
        // Adjust for very small screens
        if (window.innerWidth <= 480) {
          socialLinks.style.bottom = '15px';
          socialLinks.style.left = '15px';
          socialLinks.style.gap = '0.75rem';
          
          socialLinksElements.forEach(link => {
            link.style.width = '36px';
            link.style.height = '36px';
            
            const svg = link.querySelector('svg');
            if (svg) {
              svg.style.width = '16px';
              svg.style.height = '16px';
            }
          });
        }
        
        // Adjust for landscape orientation
        if (window.innerHeight <= 500) {
          socialLinks.style.bottom = '10px';
          socialLinks.style.left = '15px';
          socialLinks.style.gap = '0.5rem';
          
          socialLinksElements.forEach(link => {
            link.style.width = '32px';
            link.style.height = '32px';
            
            const svg = link.querySelector('svg');
            if (svg) {
              svg.style.width = '14px';
              svg.style.height = '14px';
            }
          });
        }
      } else {
        // Desktop styling
        socialLinks.style.cssText = `
          position: fixed !important;
          bottom: 30px !important;
          left: 30px !important;
          flex-direction: column !important;
          gap: 1.5rem !important;
          z-index: 1000 !important;
          display: flex !important;
        `;
      }
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
