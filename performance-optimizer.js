/**
 * Performance Optimizer
 * Improves website performance and reduces lag
 */

// Wait for DOMContentLoaded to ensure the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Performance improvements for animations
    optimizeAnimations();
    
    // Optimize scroll events
    optimizeScrollEvents();
    
    // Optimize event handlers
    optimizeEventListeners();
    
    // Optimize third-party scripts
    optimizeThirdPartyScripts();
    
    // Monitor performance
    setupPerformanceMonitoring();
});

/**
 * Optimize animations by batching DOM operations and using requestAnimationFrame
 */
function optimizeAnimations() {
    // Use requestAnimationFrame for smoother animations
    window.addEventListener('scroll', () => {
        // Prevent scroll calculations during animation frames
        if (!window.ticking) {
            window.requestAnimationFrame(() => {
                // Perform any scroll-based animations here
                window.ticking = false;
            });
            window.ticking = true;
        }
    });
    
    // Reduce animations on mobile devices
    if (window.innerWidth < 768) {
        document.body.classList.add('reduce-animations');
    }
    
    // Limit animations on devices with reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduce-animations');
    }
}

/**
 * Optimize scroll events by throttling and using passive listeners
 */
function optimizeScrollEvents() {
    // Remove existing scroll listeners that might cause performance issues
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (type === 'scroll' || type === 'touchmove') {
            const passiveOptions = options || {};
            if (typeof passiveOptions === 'object') {
                passiveOptions.passive = true;
            } else {
                options = { passive: true };
            }
        }
        return originalAddEventListener.call(this, type, listener, options);
    };
    
    // Optimize all scroll-dependent elements using IntersectionObserver
    const scrollElements = document.querySelectorAll('.scroll-animated, .project-card, [data-section]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Only observe once if it's a one-time animation
                if (entry.target.classList.contains('animate-once')) {
                    observer.unobserve(entry.target);
                }
            } else {
                // Optional: Remove class when element is not in view
                // For persistent animations, you might want to keep the class
                if (!entry.target.classList.contains('animate-once')) {
                    entry.target.classList.remove('in-view');
                }
            }
        });
    }, {
        threshold: 0.1, // 10% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Adjust based on your design
    });
    
    scrollElements.forEach(el => {
        observer.observe(el);
    });
}

/**
 * Optimize event listeners by debouncing and throttling
 */
function optimizeEventListeners() {
    // Debounce function to limit rapid fire events
    function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    
    // Throttle function to limit execution rate
    function throttle(func, limit = 200) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Apply to resize events
    const resizeHandler = throttle(() => {
        // Handle resize logic, such as recalculating dimensions
        if (window.innerWidth < 768) {
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
        }
    }, 200);
    
    // Add optimized event listeners
    window.addEventListener('resize', resizeHandler, { passive: true });
    
    // REMOVED: Don't override the cursor movement handler, as we're now using the custom implementation
    // that's more responsive for the cursor effect
}

/**
 * Optimize loading of third-party scripts
 */
function optimizeThirdPartyScripts() {
    // Load non-critical scripts after page load
    window.addEventListener('load', () => {
        // Add any additional scripts that aren't essential for first paint
        const nonCriticalScripts = [
            'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver'
        ];
        
        nonCriticalScripts.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
        });
    });
}

/**
 * Set up performance monitoring to identify bottlenecks
 */
function setupPerformanceMonitoring() {
    if ('PerformanceObserver' in window) {
        // Monitor layout shifts
        try {
            const perfObserver = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    // Log layout shifts for debugging
                    if (entry.value > 0.1) {
                        console.warn('Large layout shift detected:', entry);
                    }
                }
            });
            
            perfObserver.observe({ type: 'layout-shift', buffered: true });
        } catch (e) {
            console.warn('PerformanceObserver for CLS not supported', e);
        }
        
        // Monitor long tasks
        try {
            const longTaskObserver = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    console.warn('Long task detected:', entry.duration, 'ms');
                }
            });
            
            longTaskObserver.observe({ type: 'longtask', buffered: true });
        } catch (e) {
            console.warn('PerformanceObserver for long tasks not supported', e);
        }
    }
}

// Initialize optimizations when the script loads
console.log('Performance optimizations loaded');
