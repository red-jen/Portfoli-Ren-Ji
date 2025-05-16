/**
 * CONSOLIDATED EMERGENCY FIX
 * This simplified script replaces all previous fix attempts
 * with a single, robust solution
 */

(function() {
  console.log("🔧 Running consolidated fix");
  
  // Run immediately
  fixEverything();
  
  // Also run on important events
  window.addEventListener('DOMContentLoaded', fixEverything);
  window.addEventListener('load', fixEverything);
  window.addEventListener('resize', fixEverything);
  
  // Run periodically for a few seconds
  let count = 0;
  const interval = setInterval(function() {
    fixEverything();
    count++;
    if (count >= 10) clearInterval(interval);
  }, 500);
})();

function fixEverything() {
  try {
    // 1. Fix About section layout
    fixAboutLayout();
    
    // 2. Fix tab navigation
    fixTabs();
    
    // 3. Ensure content visibility
    fixVisibility();
  } catch (error) {
    console.error("Error in consolidated fix:", error);
  }
}

function fixAboutLayout() {
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  
  // DIRECT FIX - no complex selectors
  // This is a brute force approach that should work regardless of HTML structure
  
  // Insert a completely new structure with the existing content
  try {
    // Only do this replacement once
    if (aboutSection.getAttribute('data-fixed') !== 'true') {
      console.log("Applying major structural fix to About section");
      
      // Store original content
      const originalContent = aboutSection.innerHTML;
      
      // Try to extract key components
      let title = "ABOUT ME";
      const titleEl = aboutSection.querySelector('h2');
      if (titleEl) title = titleEl.innerText;
      
      let profileCard = '';
      const card = aboutSection.querySelector('.rounded-2xl, .bg-opacity-50');
      if (card) profileCard = card.outerHTML;
      
      let tabsAndContent = '';
      const tabs = aboutSection.querySelector('.flex.overflow-x-auto.border-b');
      const contents = aboutSection.querySelector('.tab-contents');
      if (tabs && contents) {
        tabsAndContent = tabs.outerHTML + contents.outerHTML;
      }
      
      // Only proceed if we found the important content
      if (profileCard && tabsAndContent) {
        // Create new structure
        const newStructure = `
          <div class="max-w-7xl mx-auto w-full relative z-10">
            <!-- Section title -->
            <div class="flex flex-col items-center mb-16">
              <h2 class="text-4xl md:text-5xl font-bold mb-4 relative">
                <span class="relative z-10">${title}</span>
                <span class="absolute bottom-2 left-0 w-full h-3 bg-accent opacity-20" style="background-color: var(--accent);"></span>
              </h2>
              <div class="w-12 h-1 bg-accent" style="background-color: var(--accent);"></div>
            </div>
            
            <!-- Direct flex container -->
            <div class="about-container" style="display: flex; flex-direction: ${window.innerWidth >= 768 ? 'row' : 'column'}; gap: 2rem; width: 100%;">
              <!-- Left column -->
              <div class="profile-column" style="${window.innerWidth >= 768 ? 'flex: 0 0 350px; max-width: 350px;' : 'width: 100%;'}">
                ${profileCard}
              </div>
              
              <!-- Right column -->
              <div class="tabs-column" style="${window.innerWidth >= 768 ? 'flex: 1;' : 'width: 100%;'}">
                ${tabsAndContent}
              </div>
            </div>
          </div>
        `;
        
        // Replace the content
        aboutSection.innerHTML = newStructure;
        aboutSection.setAttribute('data-fixed', 'true');
        
        console.log("About section structural fix applied");
      } else {
        console.log("Could not find required content for structural fix");
      }
    } else {
      // Just fix the layout properties
      console.log("Applying layout adjustments to already fixed structure");
      
      const container = aboutSection.querySelector('.about-container');
      const profileCol = aboutSection.querySelector('.profile-column');
      const tabsCol = aboutSection.querySelector('.tabs-column');
      
      if (container && profileCol && tabsCol) {
        container.style.flexDirection = window.innerWidth >= 768 ? 'row' : 'column';
        
        if (window.innerWidth >= 768) {
          profileCol.style.flex = '0 0 350px';
          profileCol.style.maxWidth = '350px';
          tabsCol.style.flex = '1';
        } else {
          profileCol.style.width = '100%';
          tabsCol.style.width = '100%';
        }
      }
    }
    
    // Ensure profile card has right size
    const profileCard = aboutSection.querySelector('.rounded-2xl, .bg-opacity-50');
    if (profileCard) {
      profileCard.style.margin = '0 auto';
      profileCard.style.maxWidth = window.innerWidth >= 768 ? '350px' : '100%';
    }
  } catch (error) {
    console.error("Error in structural fix:", error);
    // Try to restore original structure if available
    if (aboutSection.getAttribute('data-original-content')) {
      try {
        aboutSection.innerHTML = aboutSection.getAttribute('data-original-content');
      } catch (e) {
        console.error("Failed to restore original content:", e);
      }
    }
  }
}

function fixTabs() {
  // Replace tab functionality with simpler approach
  try {
    const tabLinks = document.querySelectorAll('#about .tab-link');
    const tabContents = document.querySelectorAll('#about .tab-content');
    
    if (!tabLinks.length || !tabContents.length) return;
    
    // Remove old listeners
    tabLinks.forEach(link => {
      const clone = link.cloneNode(true);
      if (link.parentNode) {
        link.parentNode.replaceChild(clone, link);
      }
    });
    
    // Get fresh collection after cloning
    const freshTabLinks = document.querySelectorAll('#about .tab-link');
    
    // Add new listeners
    freshTabLinks.forEach(link => {
      link.addEventListener('click', function() {
        const targetId = this.getAttribute('data-tab');
        if (!targetId) return;
        
        // Update active tab styling
        freshTabLinks.forEach(tab => {
          tab.classList.remove('active-tab');
          tab.style.borderColor = '';
          tab.style.color = '';
        });
        
        this.classList.add('active-tab');
        this.style.borderColor = 'var(--accent)';
        this.style.color = 'var(--accent)';
        
        // Show correct content
        tabContents.forEach(content => {
          content.style.display = 'none';
          content.classList.remove('active');
        });
        
        const target = document.getElementById(targetId + '-tab');
        if (target) {
          target.style.display = 'block';
          target.classList.add('active');
        }
      });
    });
    
    // Ensure at least one tab is active
    const activeTab = document.querySelector('#about .tab-link.active-tab');
    if (!activeTab && freshTabLinks.length) {
      freshTabLinks[0].click();
    } else if (activeTab) {
      // Make sure the active tab's content is visible
      const targetId = activeTab.getAttribute('data-tab');
      if (targetId) {
        const target = document.getElementById(targetId + '-tab');
        if (target) {
          target.style.display = 'block';
          target.classList.add('active');
        }
      }
    }
  } catch (error) {
    console.error("Error fixing tabs:", error);
  }
}

function fixVisibility() {
  // Make sure everything is visible
  try {
    // Show the About section
    const about = document.getElementById('about');
    if (about) {
      about.style.visibility = 'visible';
      about.style.opacity = '1';
      about.style.display = 'block';
    }
    
    // Show the active tab content
    const activeTab = document.querySelector('#about .tab-content.active');
    if (activeTab) {
      activeTab.style.display = 'block';
      activeTab.style.opacity = '1';
      activeTab.style.visibility = 'visible';
    }
    
    // Make sure all sections are visible
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '1';
      section.style.visibility = 'visible';
    });
    
    // Make images visible
    document.querySelectorAll('img').forEach(img => {
      img.style.opacity = '1';
    });
    
    // Show project cards
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.opacity = '1';
    });
  } catch (error) {
    console.error("Error fixing visibility:", error);
  }
}
