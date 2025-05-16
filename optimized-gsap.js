/**
 * Optimized GSAP Animations
 * This script replaces the original GSAP animations with more performance-focused versions
 */

// Wait for GSAP to be loaded
function initGSAPAnimations() {
    if (typeof gsap === 'undefined') {
        setTimeout(initGSAPAnimations, 100);
        return;
    }
    
    // Register ScrollTrigger plugin if available
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
    
    // Ensure hero section is visible immediately
    gsap.set(".section-wrapper", { autoAlpha: 1 });
    
    // Fix section visibility issues
    gsap.set("section", { autoAlpha: 1 });
    gsap.set("#about, #projects, #skills, #testimonials, #contact", { 
        autoAlpha: 1,
        visibility: "visible",
        opacity: 1
    });
    
    // Show all content immediately on mobile
    if (window.innerWidth < 768) {
        gsap.set(".section-wrapper section *", { 
            autoAlpha: 1,
            opacity: 1,
            y: 0,
            x: 0
        });
    }
    
    // Fix hero animations with improved performance
    const heroElements = {
        subtitle: document.getElementById('luxury-subtitle'),
        title: document.getElementById('luxury-title'),
        tagline: document.getElementById('luxury-tagline'),
        typing: document.getElementById('luxury-typing'),
        description: document.getElementById('luxury-description'),
        stats: document.getElementById('luxury-stats'),
        buttons: document.getElementById('luxury-buttons'),
        profile: document.getElementById('luxury-profile'),
        social: document.getElementById('luxury-social'),
        scroll: document.getElementById('luxury-scroll'),
        badges: document.getElementById('achievement-badges')
    };
    
    // Restore original hero animation order
    // Create a single timeline for hero section to reduce layout thrashing
    const heroTl = gsap.timeline({ 
        defaults: { 
            ease: "power3.out",
            duration: 0.7
        }
    });
    
    // Only animate if elements exist - simplified to match original order
    if (heroElements.subtitle) {
        heroTl.to(heroElements.subtitle, { 
            opacity: 1, 
            y: 0,
            duration: 0.6
        });
    }
    
    if (heroElements.title) {
        heroTl.to(heroElements.title, { 
            opacity: 1, 
            y: 0, 
            duration: 0.7
        }, "-=0.4");
    }
    
    if (heroElements.tagline) {
        heroTl.to(heroElements.tagline, { 
            opacity: 1, 
            y: 0,
            duration: 0.7
        }, "-=0.4");
    }
    
    if (heroElements.typing) {
        heroTl.to(heroElements.typing, { 
            opacity: 1, 
            y: 0,
            duration: 0.6
        }, "-=0.4");
    }
    
    if (heroElements.description) {
        heroTl.to(heroElements.description, { 
            opacity: 1, 
            y: 0,
            duration: 0.6
        }, "-=0.4");
    }
    
    if (heroElements.stats) {
        heroTl.to(heroElements.stats, { 
            opacity: 1, 
            y: 0,
            duration: 0.6,
            onComplete: animateCounters
        }, "-=0.4");
    }
    
    if (heroElements.buttons) {
        heroTl.to(heroElements.buttons, { 
            opacity: 1, 
            y: 0,
            duration: 0.6
        }, "-=0.4");
    }
    
    if (heroElements.profile) {
        heroTl.to(heroElements.profile, { 
            opacity: 1, 
            x: 0,
            duration: 0.8
        }, "-=0.8");
    }
    
    if (heroElements.social) {
        heroTl.to(heroElements.social, { 
            opacity: 1,
            duration: 0.5
        }, "-=0.2");
    }
    
    if (heroElements.scroll) {
        heroTl.to(heroElements.scroll, { 
            opacity: 1,
            duration: 0.5
        }, "-=0.2");
    }
    
    if (heroElements.badges) {
        heroTl.to(heroElements.badges, { 
            opacity: 1,
            duration: 0.5
        }, "-=0.2");
    }
    
    // Optimize counter animations
    function animateCounters() {
        const counters = document.querySelectorAll('.luxury-stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-value'), 10);
            const duration = 1.5; // seconds
            const step = target / (duration * 60); // assuming 60fps
            
            let current = 0;
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            requestAnimationFrame(updateCounter);
        });
    }
    
    // Initialize particles for hero section if exists
    initializeParticles();
    
    // More efficient scroll animations with scroll triggers - fix visibility issues
    if (typeof ScrollTrigger !== 'undefined') {
        // Create scroll animations only if elements are present
        const scrollSections = document.querySelectorAll('section[id]:not(#hero)');
        
        scrollSections.forEach(section => {
            // Make sure section is visible regardless of scroll
            gsap.set(section, { autoAlpha: 1 });
            
            // Create a timeline for each section with better defaults
            const sectionTl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 95%", // Start earlier
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                }
            });
            
            // Ensure elements are visible with much shorter animations
            const headings = section.querySelectorAll('h2, h3');
            const paragraphs = section.querySelectorAll('p');
            const lists = section.querySelectorAll('ul, ol');
            const images = section.querySelectorAll('img');
            const cards = section.querySelectorAll('.project-card, .testimonial-slider, .interactive-skills-container');
            
            // Use shorter, subtle animations
            if (headings.length) {
                sectionTl.from(headings, {
                    y: 15,
                    opacity: 0.8,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power1.out"
                }, 0);
            }
            
            if (paragraphs.length) {
                sectionTl.from(paragraphs, {
                    y: 10,
                    opacity: 0.8,
                    duration: 0.3,
                    stagger: 0.05,
                    ease: "power1.out"
                }, 0.1);
            }
            
            if (lists.length) {
                sectionTl.from(lists, {
                    y: 10,
                    opacity: 0.8,
                    duration: 0.3,
                    stagger: 0.05,
                    ease: "power1.out"
                }, 0.1);
            }
            
            if (images.length) {
                sectionTl.from(images, {
                    y: 10,
                    opacity: 0.8,
                    duration: 0.3,
                    stagger: 0.1,
                    ease: "power1.out"
                }, 0.1);
            }
            
            if (cards.length) {
                sectionTl.from(cards, {
                    y: 15,
                    opacity: 0.8,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power1.out"
                }, 0.2);
            }
        });
        
        // Optimize progress bar
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            gsap.to(progressBar, {
                width: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.3
                }
            });
        }
    }
    
    // Typing effect optimization
    const typingText = document.getElementById('luxury-typing-text');
    if (typingText) {
        const phrases = [
            "Building responsive web applications",
            "Creating clean, maintainable code",
            "Developing seamless user experiences",
            "Transforming ideas into reality"
        ];
        
        let currentPhrase = 0;
        let currentChar = 0;
        let isDeleting = false;
        let typeSpeed = 100;
        
        function typeWriter() {
            const phrase = phrases[currentPhrase];
            
            if (isDeleting) {
                typingText.textContent = phrase.substring(0, currentChar - 1);
                currentChar--;
                typeSpeed = 50;
            } else {
                typingText.textContent = phrase.substring(0, currentChar + 1);
                currentChar++;
                typeSpeed = 100;
            }
            
            if (!isDeleting && currentChar === phrase.length) {
                isDeleting = true;
                typeSpeed = 1000; // Pause at the end
            } else if (isDeleting && currentChar === 0) {
                isDeleting = false;
                currentPhrase = (currentPhrase + 1) % phrases.length;
                typeSpeed = 500; // Pause before new phrase
            }
            
            setTimeout(typeWriter, typeSpeed);
        }
        
        // Start typing animation
        setTimeout(typeWriter, 1000);
    }
}

// More natural particle animation
function initializeParticles() {
    const particlesContainer = document.getElementById('luxury-particles');
    if (!particlesContainer) return;
    
    // Clear existing particles first
    particlesContainer.innerHTML = '';
    
    // Create new particles with better performance but original appearance
    const particleCount = window.innerWidth < 768 ? 20 : 40;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('luxury-particle');
        
        // Random positioning with original appearance
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = Math.random() * 0.6 + 0.2;
        
        particlesContainer.appendChild(particle);
    }
}

// Add a function to force all content to be visible
function forceContentVisibility() {
    // Force all sections to be visible
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '1';
        section.style.visibility = 'visible';
    });
    
    // Force all project cards to be visible
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
    });
    
    // Force tab content to be properly displayed
    const activeTabs = document.querySelectorAll('.tab-content.active');
    activeTabs.forEach(tab => {
        tab.style.display = 'block';
    });
}

// Call after a short delay to ensure everything is visible
window.addEventListener('load', function() {
    setTimeout(forceContentVisibility, 1000);
});

// Ensure visibility again after a longer time (failsafe)
setTimeout(forceContentVisibility, 2500);

// Start GSAP optimizations
document.addEventListener('DOMContentLoaded', initGSAPAnimations);
