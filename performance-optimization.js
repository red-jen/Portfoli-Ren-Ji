/**
 * Performance Optimization Script
 * This script improves overall website performance with various techniques
 */

// Lazy load images that aren't handled by native loading="lazy"
document.addEventListener('DOMContentLoaded', () => {
  // Performance optimizations
  optimizeAnimations();
  lazyLoadImages();
  deferNonCriticalOperations();
  
  // Monitor for performance issues
  monitorLongTasks();
});

// Optimize animations by reducing work on invisible elements
function optimizeAnimations() {
  const animatedElements = document.querySelectorAll('.animate-pulse, .animate-ping, .animate-spin');
  
  // IntersectionObserver for animation elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Pause animations when elements are off-screen
      if (entry.target.classList.contains('animate-pulse') || 
          entry.target.classList.contains('animate-ping') ||
          entry.target.classList.contains('animate-spin')) {
        if (!entry.isIntersecting) {
          entry.target.style.animationPlayState = 'paused';
        } else {
          entry.target.style.animationPlayState = 'running';
        }
      }
    });
  }, { threshold: 0.1 });
  
  // Observe all animated elements
  animatedElements.forEach(el => observer.observe(el));
}

// Custom lazy load for images not using native lazy loading
function lazyLoadImages() {
  const imgOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px 200px 0px'
  };
  
  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
        }
        
        observer.unobserve(img);
      }
    });
  }, imgOptions);
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imgObserver.observe(img);
  });
}

// Defer non-critical operations
function deferNonCriticalOperations() {
  // Use requestIdleCallback when browser is idle
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Fix any scrollbar flash issues
      document.body.addEventListener('mouseenter', function(e) {
        if (e.target.tagName === 'IMG' || e.target.closest('.tech-item')) {
          // Prevent scrollbar from appearing temporarily
          const curWidth = document.body.style.width;
          document.body.style.width = '100%';
          setTimeout(() => {
            document.body.style.width = curWidth;
          }, 50);
        }
      }, { passive: true });
    }, { timeout: 2000 });
  }
}

// Monitor for performance issues
function monitorLongTasks() {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log long tasks (>50ms) to find performance bottlenecks
          if (entry.duration > 50) {
            console.warn('Long task detected', entry);
          }
        }
      });
      
      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      console.error('PerformanceObserver error:', e);
    }
  }
}

// Fix for hover causing scrollbar flash
window.addEventListener('DOMContentLoaded', () => {
  // Add a class to the body when it's fully loaded
  document.body.classList.add('loaded');
  
  // Handle window resize to prevent layout shifts
  let resizeTimer;
  window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('resize-animation-stopper');
    }, 400);
  }, { passive: true });
});
