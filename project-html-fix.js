/**
 * Project HTML Fix
 * Ensure all project cards have proper HTML structure
 */

document.addEventListener('DOMContentLoaded', function() {
    // Fix project card HTML issues
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Make sure project cards have proper anchor tag structure
        const existingAnchor = card.querySelector('a');
        const existingAnchorParent = card.parentElement.tagName === 'A' ? card.parentElement : null;
        
        if (!existingAnchor && !existingAnchorParent) {
            // If no anchor, wrap content
            const href = card.getAttribute('data-href') || '#';
            const wrapper = document.createElement('a');
            wrapper.href = href;
            wrapper.target = "_blank";
            wrapper.rel = "noopener noreferrer";
            
            // Move children to wrapper
            while (card.firstChild) {
                wrapper.appendChild(card.firstChild);
            }
            
            // Append wrapper to card
            card.appendChild(wrapper);
        }
        
        // Fix any improperly closed div tags in project overlay
        const overlay = card.querySelector('.project-overlay');
        if (overlay) {
            // Ensure the overlay is inside the anchor tag 
            const anchor = card.querySelector('a') || existingAnchorParent;
            if (anchor && !anchor.contains(overlay)) {
                anchor.appendChild(overlay);
            }
        }
    });
    
    // Ensure all links in projects are valid
    document.querySelectorAll('#projects a').forEach(link => {
        if (!link.getAttribute('href')) {
            link.setAttribute('href', '#');
        }
        
        if (link.getAttribute('href') !== '#' && !link.getAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
