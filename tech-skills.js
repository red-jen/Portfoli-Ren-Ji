/**
 * Tech Skills Animation and Interaction
 * Simple skill bar animations and category interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Animate skill bars on scroll
    animateSkillBarsOnScroll();
    
    // Add hover effects to category cards
    setupCategoryCardInteractions();
});

// Use Intersection Observer to animate skill bars when visible
function animateSkillBarsOnScroll() {
    const skillBars = document.querySelectorAll('.tech-skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                bar.classList.add('animate-skill');
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.2 });
    
    skillBars.forEach(skillBar => {
        // Hide the skill fill initially
        const skillLevel = skillBar.parentElement.classList.contains('advanced') ? '95%' : 
                           skillBar.parentElement.classList.contains('intermediate') ? '66%' : '33%';
        
        // Set initial state with zero width
        skillBar.style.setProperty('--skill-width', '0%');
        
        // Add animation class when in view
        observer.observe(skillBar);
        
        // Create animation
        skillBar.addEventListener('animationstart', () => {
            skillBar.style.setProperty('--skill-width', skillLevel);
        });
    });
}

// Add interactions to category cards
function setupCategoryCardInteractions() {
    const categoryCards = document.querySelectorAll('.tech-category-card');
    
    categoryCards.forEach(card => {
        // Add slight interactive tilt effect on mousemove
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate tilt values (subtle effect)
            const tiltX = (y / rect.height - 0.5) * 4;
            const tiltY = (x / rect.width - 0.5) * -4;
            
            // Apply tilt transform
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-5px)`;
        }, { passive: true });
        
        // Reset transform on mouseleave
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        }, { passive: true });
        
        // Highlight skill on hover
        const skills = card.querySelectorAll('.tech-skill');
        skills.forEach(skill => {
            skill.addEventListener('mouseenter', () => {
                skills.forEach(s => {
                    if (s !== skill) s.style.opacity = '0.6';
                });
            }, { passive: true });
            
            skill.addEventListener('mouseleave', () => {
                skills.forEach(s => s.style.opacity = '');
            }, { passive: true });
        });
    });
    
    // Add hover effect to concept items
    const conceptItems = document.querySelectorAll('.concept-item');
    conceptItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.boxShadow = `0 0 20px rgba(100, 255, 218, 0.25)`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.boxShadow = '';
        });
    });
}

// Add this to the global CSS
document.head.insertAdjacentHTML('beforeend', `
<style>
@keyframes fillSkill {
    from { width: 0; }
    to { width: var(--skill-width, 0%); }
}

.animate-skill::after {
    animation: fillSkill 1s ease-out forwards;
}
</style>
`);
