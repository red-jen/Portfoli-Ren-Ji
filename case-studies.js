/**
 * Advanced Case Studies Component
 * Creates interactive, detailed case studies for your best projects
 */

document.addEventListener('DOMContentLoaded', () => {
    const caseStudiesContainer = document.getElementById('case-studies-wrapper');
    if (!caseStudiesContainer) return;
    
    // Case studies data - Replace with your real project details
    const caseStudiesData = [
        {
            id: 'fut-champions',
            title: 'FUT Champions - Team Builder App',
            subtitle: 'Interactive Football Team Management Platform',
            description: 'Designed and developed a web application that allows users to build and manage their ultimate football team, featuring player statistics, team formation options, and performance analytics.',
            challenge: 'Creating a performant application that could handle complex team management logic while maintaining an intuitive user interface accessible to football fans of all technical abilities.',
            solution: 'Implemented a modular architecture with React for the frontend and integrated with external football APIs. Created a custom state management system for team formations and player stats.',
            result: 'The application has attracted over 2,000 users since launch, with an average session duration of 15 minutes, indicating high user engagement.',
            technologies: ['React', 'API Integration', 'CSS3', 'JavaScript', 'Tailwind CSS'],
            image: './imges/Capture d\'écran 2025-04-25 195109.png',
            liveUrl: 'https://fut-champions-phi.vercel.app/',
            githubUrl: 'https://github.com/red-jen/fut-champions',
            highlights: [
                { title: 'Interactive Player Cards', description: 'Dynamic cards with hover animations and stats details' },
                { title: 'Formation Builder', description: 'Drag-and-drop interface for team creation' },
                { title: 'Performance Analytics', description: 'Visual representation of team chemistry and strength' }
            ]
        },
        {
            id: 'youdemy',
            title: 'YouDemy Learning Platform',
            subtitle: 'Full-Featured E-Learning Solution',
            description: 'Built a comprehensive e-learning platform that enables instructors to create courses, and students to enroll and track progress. Includes admin dashboard for platform management.',
            challenge: 'Creating a secure, scalable system that could handle video content, user authentication, payment processing, and course management.',
            solution: 'Developed a custom PHP framework with MVC architecture, implemented role-based access control, and created an optimized video delivery system.',
            result: 'Successfully deployed with 10+ courses, 200+ students, and average course completion rate of 78%.',
            technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS3', 'Authentication'],
            image: './imges/Capture d\'écran 2025-01-22 025538.png',
            githubUrl: 'https://github.com/red-jen/youdemy',
            highlights: [
                { title: 'Video Lesson Player', description: 'Custom-built player with progress tracking' },
                { title: 'Dashboard Analytics', description: 'Detailed insights for instructors and students' },
                { title: 'Responsive Design', description: 'Optimized for learning on any device' }
            ]
        },
        {
            id: 'soundscape',
            title: 'Syber Soundscape',
            subtitle: 'Music Streaming Platform',
            description: 'Engineered a feature-rich music streaming service with playlists, artist profiles, and personalized recommendations. Implemented with clean PHP architecture.',
            challenge: 'Building a performant audio streaming service with an elegant MVC architecture while ensuring secure user data management.',
            solution: 'Created a repository pattern implementation for data access, used clean architecture principles, and implemented streaming optimization techniques.',
            result: 'Platform successfully handles 1000+ tracks with minimal load time and 100+ active users.',
            technologies: ['PHP', 'PostgreSQL', 'MVC Pattern', 'Repository Layer', 'CSS3'],
            image: './imges/spotify.png',
            githubUrl: 'https://github.com/red-jen/spotify',
            highlights: [
                { title: 'Audio Visualizer', description: 'Real-time audio visualization effects' },
                { title: 'Recommendation Engine', description: 'Algorithm for personalized music suggestions' },
                { title: 'Clean Architecture', description: 'Implemented SOLID principles for maintainability' }
            ]
        }
    ];
    
    // Create detailed case study cards
    function renderCaseStudies() {
        caseStudiesContainer.innerHTML = '';
        
        caseStudiesData.forEach(study => {
            const studyElement = document.createElement('div');
            studyElement.className = 'case-study-card';
            studyElement.id = `case-study-${study.id}`;
            
            studyElement.innerHTML = `
                <div class="case-study-image">
                    <img src="${study.image}" alt="${study.title}">
                    <div class="case-study-links">
                        ${study.liveUrl ? `<a href="${study.liveUrl}" target="_blank" class="case-study-link">Live Demo</a>` : ''}
                        ${study.githubUrl ? `<a href="${study.githubUrl}" target="_blank" class="case-study-link">GitHub Repo</a>` : ''}
                    </div>
                </div>
                <div class="case-study-content">
                    <h3 class="text-2xl font-bold mb-1">${study.title}</h3>
                    <p class="text-accent mb-4">${study.subtitle}</p>
                    
                    <div class="case-study-tabs">
                        <div class="case-study-tab active" data-tab="overview">Overview</div>
                        <div class="case-study-tab" data-tab="challenge">Challenge</div>
                        <div class="case-study-tab" data-tab="solution">Solution</div>
                        <div class="case-study-tab" data-tab="result">Result</div>
                    </div>
                    
                    <div class="case-study-tab-content active" id="${study.id}-overview">
                        <p class="text-gray-300">${study.description}</p>
                        
                        <h4 class="font-bold mt-4 mb-2">Key Features</h4>
                        <div class="case-study-highlights">
                            ${study.highlights.map(highlight => `
                                <div class="case-study-highlight">
                                    <div class="case-study-highlight-icon">⭐</div>
                                    <div class="case-study-highlight-content">
                                        <h5 class="font-semibold">${highlight.title}</h5>
                                        <p class="text-sm text-gray-400">${highlight.description}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="case-study-tab-content" id="${study.id}-challenge">
                        <p class="text-gray-300">${study.challenge}</p>
                    </div>
                    
                    <div class="case-study-tab-content" id="${study.id}-solution">
                        <p class="text-gray-300">${study.solution}</p>
                    </div>
                    
                    <div class="case-study-tab-content" id="${study.id}-result">
                        <p class="text-gray-300">${study.result}</p>
                    </div>
                    
                    <div class="case-study-tags">
                        ${study.technologies.map(tech => `
                            <span class="case-study-tag">${tech}</span>
                        `).join('')}
                    </div>
                </div>
            `;
            
            caseStudiesContainer.appendChild(studyElement);
            
            // Add tab switching functionality
            const tabs = studyElement.querySelectorAll('.case-study-tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs in this card
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    // Hide all tab content in this card
                    const tabContents = studyElement.querySelectorAll('.case-study-tab-content');
                    tabContents.forEach(content => content.classList.remove('active'));
                    
                    // Show selected tab content
                    const tabName = tab.getAttribute('data-tab');
                    const tabContent = document.getElementById(`${study.id}-${tabName}`);
                    if (tabContent) {
                        tabContent.classList.add('active');
                    }
                });
            });
        });
    }
    
    // Add necessary styles
    function addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .case-study-card {
                background: linear-gradient(135deg, rgba(18, 18, 18, 0.8), rgba(30, 30, 30, 0.8));
                border-radius: 16px;
                overflow: hidden;
                position: relative;
                border: 1px solid rgba(255, 255, 255, 0.1);
                transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                margin-bottom: 3rem;
                transform-style: preserve-3d;
                perspective: 1000px;
            }
            
            .case-study-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                border-color: var(--accent);
            }
            
            .case-study-image {
                height: 400px;
                overflow: hidden;
                position: relative;
            }
            
            .case-study-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: all 0.5s ease;
                filter: brightness(0.8) contrast(1.1);
            }
            
            .case-study-card:hover .case-study-image img {
                transform: scale(1.05);
                filter: brightness(1) contrast(1.2);
            }
            
            .case-study-links {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 1.5rem;
                background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
                display: flex;
                gap: 1rem;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.5s ease;
            }
            
            .case-study-card:hover .case-study-links {
                opacity: 1;
                transform: translateY(0);
            }
            
            .case-study-link {
                padding: 0.5rem 1rem;
                background: var(--accent);
                color: var(--bg-primary);
                border-radius: 4px;
                font-weight: 600;
                font-size: 0.9rem;
                text-decoration: none;
                transition: all 0.3s ease;
                transform: translateZ(20px);
            }
            
            .case-study-link:hover {
                background: #fff;
                transform: translateZ(30px) scale(1.05);
            }
            
            .case-study-content {
                padding: 2rem;
            }
            
            .case-study-tabs {
                display: flex;
                gap: 0.5rem;
                margin: 1.5rem 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .case-study-tab {
                padding: 0.5rem 1rem;
                font-size: 0.9rem;
                cursor: pointer;
                border-bottom: 2px solid transparent;
                transition: all 0.3s ease;
                color: var(--text-secondary);
            }
            
            .case-study-tab.active {
                border-bottom-color: var(--accent);
                color: var(--accent);
            }
            
            .case-study-tab:hover {
                color: var(--text-primary);
            }
            
            .case-study-tab-content {
                display: none;
                animation: fadeIn 0.5s ease;
                margin-bottom: 1.5rem;
            }
            
            .case-study-tab-content.active {
                display: block;
            }
            
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .case-study-highlights {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
            }
            
            .case-study-highlight {
                display: flex;
                gap: 0.5rem;
                padding: 1rem;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 8px;
                transition: all 0.3s ease;
            }
            
            .case-study-highlight:hover {
                background: rgba(100, 255, 218, 0.1);
                transform: translateY(-5px);
            }
            
            .case-study-highlight-icon {
                font-size: 1.2rem;
                line-height: 1;
            }
            
            .case-study-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin-top: 1.5rem;
            }
            
            .case-study-tag {
                padding: 0.3rem 0.8rem;
                border-radius: 20px;
                background: rgba(100, 255, 218, 0.1);
                color: var(--accent);
                font-size: 0.8rem;
                border: 1px solid rgba(100, 255, 218, 0.3);
                transition: all 0.3s ease;
            }
            
            .case-study-tag:hover {
                background: rgba(100, 255, 218, 0.2);
                transform: translateY(-2px);
            }
            
            @media (max-width: 768px) {
                .case-study-image {
                    height: 250px;
                }
                
                .case-study-highlights {
                    grid-template-columns: 1fr;
                }
                
                .case-study-tabs {
                    overflow-x: auto;
                    padding-bottom: 0.5rem;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    // Initialize case studies
    addStyles();
    renderCaseStudies();
    
    // Add intersection observer for animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe each case study card
    document.querySelectorAll('.case-study-card').forEach(card => {
        observer.observe(card);
    });
});
