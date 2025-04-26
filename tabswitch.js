document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabLinks.forEach(tabLink => {
        tabLink.addEventListener('click', function() {
            // Remove active class from all tabs
            tabLinks.forEach(link => {
                link.classList.remove('active-tab');
                link.style.borderColor = '';
                link.style.color = 'var(--text-secondary)';
            });
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.add('hidden');
                content.classList.remove('active');
            });
            
            // Add active class to clicked tab
            this.classList.add('active-tab');
            this.style.borderColor = 'var(--accent)';
            this.style.color = 'var(--accent)';
            
            // Show corresponding tab content
            const tabId = this.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId + '-tab');
            tabContent.classList.remove('hidden');
            tabContent.classList.add('active');
        });
    });
});