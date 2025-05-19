/**
 * Fix for About Section Content Display
 * Ensures content is properly shown in the horizontal layout
 */

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(fixAboutSectionContent, 700);
  
  // Watch for resize events
  window.addEventListener('resize', debounce(fixAboutSectionContent, 250));
});

function fixAboutSectionContent() {
  console.log("Fixing about section content display");
  
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  
  // Get main container
  const container = aboutSection.querySelector('.grid-cols-1.lg\\:grid-cols-12');
  if (!container) {
    console.warn("About section container not found");
    return;
  }
  
  // Check if the content is already displayed
  const visibleContent = container.querySelector('.tab-content[style*="display: block"]');
  if (!visibleContent) {
    console.log("No visible content found, showing first tab content");
    
    // Get all tab contents and show the first one
    const allTabContents = container.querySelectorAll('.tab-content');
    if (allTabContents && allTabContents.length > 0) {
      allTabContents.forEach((content, index) => {
        if (index === 0) {
          // Show first tab content
          content.style.display = 'block';
          content.classList.add('active');
        } else {
          content.style.display = 'none';
          content.classList.remove('active');
        }
      });
    } else {
      console.warn("No tab contents found");
    }
  }
  
  // Make sure at least one tab is active
  const activeTab = aboutSection.querySelector('.tab-link.active-tab');
  if (!activeTab) {
    console.log("No active tab found, setting first tab as active");
    const firstTab = aboutSection.querySelector('.tab-link');
    if (firstTab) {
      firstTab.classList.add('active-tab');
      firstTab.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
      firstTab.style.color = 'var(--accent, #64ffda)';
      firstTab.style.fontWeight = '600';
      
      // Activate corresponding content
      const tabId = firstTab.getAttribute('data-tab');
      if (tabId) {
        const targetContent = document.getElementById(`${tabId}-tab`);
        if (targetContent) {
          targetContent.style.display = 'block';
          targetContent.classList.add('active');
        }
      }
    }
  }
  
  // Fix ghost section positioning
  const ghostContainer = aboutSection.querySelector('#ghost');
  if (ghostContainer) {
    // Move ghost element to profile card if it's not in the right place
    const profileColumn = aboutSection.querySelector('.lg\\:col-span-5');
    if (profileColumn && !profileColumn.contains(ghostContainer)) {
      console.log("Moving ghost element to profile card");
      profileColumn.appendChild(ghostContainer);
      
      // Style ghost element to fit in profile card
      ghostContainer.style.position = 'relative';
      ghostContainer.style.display = 'block';
      ghostContainer.style.margin = '0 auto';
      ghostContainer.style.maxWidth = '100%';
      ghostContainer.style.height = '250px';
    }
  }
  
  // Fix any missing or empty content sections
  createMissingContent(aboutSection, container);
  
  // Make sure tab navigation is working
  setupTabNavigation(aboutSection);
}

function createMissingContent(aboutSection, container) {
  // Sample content to use if needed
  const sampleContent = {
    about: `
      <h3 class="text-lg font-semibold mb-4">About Me</h3>
      <p class="text-gray-300 leading-relaxed mb-4">
        I'm a passionate Full-Stack Developer with a strong focus on creating clean, 
        efficient, and user-friendly websites and web applications. Currently 
        pursuing professional training at YouCode, I'm dedicated to expanding my 
        skills and staying current with the latest web technologies.
      </p>
      <p class="text-gray-300 leading-relaxed mb-4">
        My approach combines creative problem-solving with technical expertise 
        to deliver solutions that not only meet but exceed client expectations.
        I enjoy the full development process from planning and design through 
        to writing clean, efficient code and deploying the finished product.
      </p>
      <p class="text-gray-300 leading-relaxed">
        When I'm not coding, I enjoy reading about new technologies, 
        contributing to open-source projects, and continuously improving my skills 
        through online courses and coding challenges.
      </p>
    `,
    
    experience: `
      <h3 class="text-lg font-semibold mb-4">Work Experience</h3>
      <div class="mb-6">
        <div class="flex justify-between items-center mb-2">
          <h4 class="text-white font-medium">Freelance Web Developer</h4>
          <span class="text-accent" style="color: var(--accent);">2023 - Present</span>
        </div>
        <p class="text-gray-400 text-sm mb-3">Independent Projects</p>
        <p class="text-gray-300 leading-relaxed">
          Developing responsive websites and web applications for clients using 
          modern technologies including React, PHP, and Laravel. Managing projects 
          from concept to deployment while ensuring high-quality code and excellent user experience.
        </p>
      </div>
      
      <div>
        <div class="flex justify-between items-center mb-2">
          <h4 class="text-white font-medium">Web Development Intern</h4>
          <span class="text-accent" style="color: var(--accent);">2023</span>
        </div>
        <p class="text-gray-400 text-sm mb-3">Local Tech Studio</p>
        <p class="text-gray-300 leading-relaxed">
          Assisted in developing and maintaining client websites, learned about professional
          workflows and coding standards, and contributed to team projects using HTML,
          CSS, JavaScript, and PHP.
        </p>
      </div>
    `,
    
    education: `
      <h3 class="text-lg font-semibold mb-4">Education & Certifications</h3>
      
      <div class="mb-8">
        <div class="flex justify-between items-center mb-2">
          <h4 class="text-white font-medium">YouCode - Full-Stack Web Development</h4>
          <span class="text-accent" style="color: var(--accent);">2024 - 2026</span>
        </div>
        <p class="text-gray-400 text-sm mb-3">Professional Training Program</p>
        <p class="text-gray-300 leading-relaxed">
          Intensive two-year program focused on modern web development technologies, software engineering principles, and professional best practices. Curriculum includes front-end development, back-end systems, databases, and DevOps fundamentals.
        </p>
      </div>
      
      <div>
        <h4 class="text-white font-medium mb-4">Professional Certifications</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="border border-gray-800 p-4 rounded-lg">
            <div class="flex items-center mb-2">
              <span class="text-white">HackerRank Problem Solving</span>
            </div>
            <p class="text-gray-400 text-sm">Verified skills in algorithms and data structures</p>
          </div>
          
          <div class="border border-gray-800 p-4 rounded-lg">
            <div class="flex items-center mb-2">
              <span class="text-white">Codex Web Development</span>
            </div>
            <p class="text-gray-400 text-sm">Comprehensive web development fundamentals</p>
          </div>
        </div>
      </div>
    `
  };
  
  // Check if we need to create any missing tab content
  const tabContents = container.querySelectorAll('.tab-content');
  const tabs = aboutSection.querySelectorAll('.tab-link');
  
  if (tabs.length === 0) {
    console.warn("No tabs found in about section");
    return;
  }
  
  // Array of expected tab IDs
  const expectedTabIds = ['about', 'experience', 'education'];
  
  // Check each expected tab
  expectedTabIds.forEach(tabId => {
    // Check if tab exists
    const tabExists = Array.from(tabs).some(tab => tab.getAttribute('data-tab') === tabId);
    
    // Check if content exists
    const contentId = `${tabId}-tab`;
    const contentExists = Array.from(tabContents).some(content => content.id === contentId);
    
    if (tabExists && !contentExists) {
      console.log(`Creating missing tab content for ${tabId}`);
      
      // Create new tab content
      const newContent = document.createElement('div');
      newContent.id = contentId;
      newContent.className = 'tab-content';
      newContent.style.display = 'none';
      newContent.innerHTML = sampleContent[tabId] || 'Content coming soon...';
      
      // Style the new tab content
      newContent.style.flex = '0 0 380px';
      newContent.style.minWidth = '380px';
      newContent.style.height = '500px';
      newContent.style.scrollSnapAlign = 'center';
      newContent.style.background = 'rgba(18, 18, 18, 0.5)';
      newContent.style.borderRadius = '16px';
      newContent.style.padding = '2rem';
      newContent.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
      newContent.style.backdropFilter = 'blur(8px)';
      newContent.style.border = '1px solid rgba(255, 255, 255, 0.05)';
      newContent.style.overflowY = 'auto';
      newContent.style.marginBottom = '0';
      
      // Add to container
      container.appendChild(newContent);
    }
  });
  
  // If no tab contents are displayed, show the first one
  let anyContentVisible = false;
  tabContents.forEach(content => {
    if (content.style.display === 'block') {
      anyContentVisible = true;
    }
  });
  
  if (!anyContentVisible && tabContents.length > 0) {
    tabContents[0].style.display = 'block';
    tabs[0].classList.add('active-tab');
    tabs[0].style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
    tabs[0].style.color = 'var(--accent, #64ffda)';
  }
}

function setupTabNavigation(aboutSection) {
  // Get all tabs
  const tabs = aboutSection.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');
  
  if (!tabs.length || !tabContents.length) return;
  
  // Remove existing event listeners to prevent duplicates
  tabs.forEach(tab => {
    const clone = tab.cloneNode(true);
    tab.parentNode.replaceChild(clone, tab);
    
    // Add click event to cloned element
    clone.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      if (!tabId) return;
      
      console.log(`Tab clicked: ${tabId}`);
      
      // Update active status for all tabs
      tabs.forEach(t => {
        t.classList.remove('active-tab');
        t.style.backgroundColor = 'transparent';
        t.style.color = '';
        t.style.fontWeight = 'normal';
      });
      
      // Activate the clicked tab
      this.classList.add('active-tab');
      this.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
      this.style.color = 'var(--accent, #64ffda)';
      this.style.fontWeight = '600';
      
      // Show corresponding content
      const targetId = `${tabId}-tab`;
      tabContents.forEach(content => {
        if (content.id === targetId) {
          content.style.display = 'block';
          
          // Scroll to make this content visible
          setTimeout(() => {
            content.scrollIntoView({ 
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center' 
            });
          }, 50);
        } else {
          content.style.display = 'none';
        }
      });
    });
  });
}

// Helper function to debounce events
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
