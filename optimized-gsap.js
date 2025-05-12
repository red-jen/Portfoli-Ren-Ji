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
    
    // Create a single timeline for hero section to reduce layout thrashing
    const heroTl = gsap.timeline({ 
        defaults: { 
            ease: "power3.out",
            duration: 0.7
        },
        onStart: () => {
            // Force a single reflow before animations start
            document.body.offsetHeight;
        }
    });
    
    // Only animate if elements exist - add 0.1s delays between animations for smoother effect
    if (heroElements.subtitle) {
        heroTl.to(heroElements.subtitle, { 
            opacity: 1, 
            y: 0,
            duration: 0.6
        }, 0.2);
    }
    
    if (heroElements.title) {
        heroTl.to(heroElements.title, { 
            opacity: 1, 
            y: 0, 
            duration: 0.7
        }, 0.3);
    }
    
    if (heroElements.tagline) {
        heroTl.to(heroElements.tagline, { 
            opacity: 1, 
            y: 0,
            duration: 0.7
        }, 0.4);
    }
    
    if (heroElements.typing) {
        heroTl.to(heroElements.typing, { 
            opacity: 1, 
            y: 0,
            duration: 0.6
        }, 0.5);
    }
    
    if (heroElements.description) {
        heroTl.to(heroElements.description, { 
            opacity: 1, 
            y: 0,
            duration: 0.6
        }, 0.6);
    }
    
    if (heroElements.stats) {
        heroTl.to(heroElements.stats, { 
            opacity: 1, 
            y: 0,
            duration: 0.6,
            onComplete: animateCounters
        }, 0.7);
    }
    
    if (heroElements.buttons) {
        heroTl.to(heroElements.buttons, { 
            opacity: 1, 
            y: 0,
            duration: 0.6
        }, 0.8);
    }
    
    if (heroElements.profile) {
        heroTl.to(heroElements.profile, { 
            opacity: 1, 
            x: 0,
            duration: 0.8
        }, 0.5);
    }
    
    if (heroElements.social) {
        heroTl.to(heroElements.social, { 
            opacity: 1,
            duration: 0.5
        }, 0.9);
    }
    
    if (heroElements.scroll) {
        heroTl.to(heroElements.scroll, { 
            opacity: 1,
            duration: 0.5
        }, 1);
    }
    
    if (heroElements.badges) {
        heroTl.to(heroElements.badges, { 
            opacity: 1,
            duration: 0.5
        }, 1.1);
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
    
    // More efficient scroll animations with scroll triggers
    if (typeof ScrollTrigger !== 'undefined') {
        // Create scroll animations only if elements are present
        const scrollSections = document.querySelectorAll('section[id]:not(#hero)');
        
        scrollSections.forEach(section => {
            // Create a timeline for each section
            const sectionTl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                }
            });
            
            // Animate section elements with batched operations
            const headings = section.querySelectorAll('h2, h3');
            const paragraphs = section.querySelectorAll('p');
            const lists = section.querySelectorAll('ul, ol');
            const images = section.querySelectorAll('img');
            const cards = section.querySelectorAll('.project-card, .testimonial-slider, .interactive-skills-container');
            
            // Group similar elements to reduce reflows
            if (headings.length) {
                sectionTl.from(headings, {
                    y: 30,
                    opacity: 0,
                    duration: 0.7,
                    stagger: 0.2,
                    ease: "power3.out"
                }, 0);
            }
            
            if (paragraphs.length) {
                sectionTl.from(paragraphs, {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power3.out"
                }, 0.2);
            }
            
            if (lists.length) {
                sectionTl.from(lists, {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power3.out"
                }, 0.3);
            }
            
            if (images.length) {
                sectionTl.from(images, {
                    y: 20,
                    opacity: 0,
                    duration: 0.7,
                    stagger: 0.2,
                    ease: "power3.out"
                }, 0.2);
            }
            
            if (cards.length) {
                sectionTl.from(cards, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out"
                }, 0.3);
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

// Add particles initialization for hero section
function initializeParticles() {
    const particlesContainer = document.getElementById('luxury-particles');
    if (!particlesContainer) return;
    
    // Clear existing particles first
    particlesContainer.innerHTML = '';
    
    // Create new particles with better performance
    const particleCount = window.innerWidth < 768 ? 20 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('luxury-particle');
        
        // Random positioning
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const animDuration = Math.random() * 20 + 10;
        const animDelay = Math.random() * 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = Math.random() * 0.6 + 0.2;
        
        // Use CSS transform for animation instead of JS for better performance
        particle.style.animation = `float-slow ${animDuration}s ${animDelay}s infinite alternate ease-in-out`;
        
        particlesContainer.appendChild(particle);
    }
}

// Start GSAP optimizations
document.addEventListener('DOMContentLoaded', initGSAPAnimations);
