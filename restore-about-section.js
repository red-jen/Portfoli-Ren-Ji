/**
 * Restore About Section to Original Structure
 * Returns the section to its initial HTML structure and styling
 */

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(restoreAboutSection, 300);
});

function restoreAboutSection() {
  console.log('Restoring about section to original state');
  
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  
  // Check if we need to restore (if the section has been remade)
  const horizontalContainer = aboutSection.querySelector('.about-horizontal-container');
  if (!horizontalContainer) {
    // If there's no horizontal container, then likely still in original state
    console.log('About section appears to be in original state');
    return;
  }
  
  // Get the wrapper that contains all content
  const wrapper = aboutSection.querySelector('.max-w-7xl');
  if (!wrapper) return;
  
  // Store original ghost element to preserve it
  const ghostElement = aboutSection.querySelector('#ghost');
  
  // Create the original structure
  wrapper.innerHTML = `
    <h2 class="text-4xl md:text-5xl font-bold mb-12 md:mb-16">ABOUT ME</h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
      <!-- Profile Column -->
      <div class="lg:col-span-5 mb-10 lg:mb-0">
        <!-- Ghost element will be inserted here -->
        
        <h3 class="text-xl font-semibold mb-3">Reda Jenhaji</h3>
        <p class="text-accent mb-6" style="color: var(--accent);">Full-Stack Developer</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">
          Based in Sale, Morocco, I'm a full-stack developer passionate about creating 
          exceptional digital experiences with clean, efficient code.
        </p>
        
        <a href="resume.pdf" download class="inline-flex items-center gap-2 px-4 py-2 
        bg-transparent border border-accent text-accent hover:bg-accent hover:bg-opacity-10 
        transition-all rounded-lg" style="color: var(--accent); border-color: var(--accent);">
          <span>Download CV</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
          </svg>
        </a>
      </div>
      
      <!-- Content Column -->
      <div class="lg:col-span-7">
        <!-- Tabs Navigation -->
        <div class="flex overflow-x-auto border-b border-gray-800 mb-8 pb-1">
          <button class="tab-link active-tab mr-8 pb-2 border-b-2 border-transparent text-base font-medium" data-tab="about">About</button>
          <button class="tab-link mr-8 pb-2 border-b-2 border-transparent text-base font-medium" data-tab="experience">Experience</button>
          <button class="tab-link mr-8 pb-2 border-b-2 border-transparent text-base font-medium" data-tab="education">Education</button>
        </div>
        
        <!-- Tab Content -->
        <div>
          <!-- About content -->
          <div class="tab-content" id="about-tab">
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
          </div>
          
          <!-- Experience content -->
          <div class="tab-content hidden" id="experience-tab">
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
          </div>
          
          <!-- Education content -->
          <div class="tab-content hidden" id="education-tab">
            <h3 class="text-lg font-semibold mb-4">Education & Certifications</h3>
            
            <!-- Formal education -->
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
            
            <!-- Certifications -->
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
          </div>
        </div>
        
        <!-- Skills section -->
        <div>
          <h3 class="text-lg font-semibold mb-5 flex items-center gap-2">
            <span class="inline-block w-8 h-0.5 bg-accent" style="background-color: var(--accent);"></span>
            <span>Technical Expertise</span>
          </h3>
          
          <!-- Skill categories -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Frontend -->
            <div class="space-y-4">
              <h4 class="text-base font-medium text-white">Frontend</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-transparent border border-accent text-accent text-sm rounded-full" style="color: var(--accent); border-color: var(--accent);">HTML5</span>
                <span class="px-4 py-2 bg-transparent border border-accent text-accent text-sm rounded-full" style="color: var(--accent); border-color: var(--accent);">CSS3</span>
                <span class="px-4 py-2 bg-transparent border border-accent text-accent text-sm rounded-full" style="color: var(--accent); border-color: var(--accent);">JavaScript</span>
                <span class="px-4 py-2 bg-transparent border border-accent text-accent text-sm rounded-full" style="color: var(--accent); border-color: var(--accent);">React</span>
                <span class="px-4 py-2 bg-transparent border border-accent text-accent text-sm rounded-full" style="color: var(--accent); border-color: var(--accent);">TailwindCSS</span>
              </div>
            </div>
            
            <!-- Backend -->
            <div class="space-y-4">
              <h4 class="text-base font-medium text-white">Backend</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-transparent border border-accent text-accent text-sm rounded-full" style="color: var(--accent); border-color: var(--accent);">PHP</span>
                <span class="px-4 py-2 bg-transparent border border-accent text-accent text-sm rounded-full" style="color: var(--accent); border-color: var(--accent);">Laravel</span>
                <span class="px-4 py-2 bg-transparent border border-accent text-accent text-sm rounded-full" style="color: var(--accent); border-color: var(--accent);">MySQL</span>
                <span class="px-4 py-2 bg-transparent border border-accent text-accent text-sm rounded-full" style="color: var(--accent); border-color: var(--accent);">API Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Re-insert the ghost element if it exists
  if (ghostElement) {
    const profileColumn = wrapper.querySelector('.lg\\:col-span-5');
    if (profileColumn) {
      profileColumn.insertBefore(ghostElement, profileColumn.firstChild);
    }
  }
  
  // Setup tab switching functionality
  setupTabSwitching(aboutSection);
  
  // Clean up any remaining elements from the remake version
  removeRemakeElements(aboutSection);
}

function setupTabSwitching(aboutSection) {
  const tabs = aboutSection.querySelectorAll('.tab-link');
  const tabContents = aboutSection.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Reset all tabs and contents
      tabs.forEach(t => t.classList.remove('active-tab'));
      tabContents.forEach(c => c.classList.add('hidden'));
      
      // Activate current tab and content
      this.classList.add('active-tab');
      document.getElementById(`${tabId}-tab`).classList.remove('hidden');
    });
  });
  
  // Make sure at least one tab is active
  if (!aboutSection.querySelector('.tab-link.active-tab')) {
    tabs[0].classList.add('active-tab');
    tabContents[0].classList.remove('hidden');
  }
}

function removeRemakeElements(aboutSection) {
  // Remove any elements added by the remade version
  const elementsToRemove = [
    '.about-arrow', 
    '.about-dots',
    '.about-dot',
    '.about-controls',
    '.about-carousel-dot'
  ];
  
  elementsToRemove.forEach(selector => {
    aboutSection.querySelectorAll(selector).forEach(el => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
  });
}
