/**
 * Interactive Skills Visualization
 * Creates a force-directed graph of skills showing connections and expertise levels
 */

document.addEventListener('DOMContentLoaded', () => {
    const skillsContainer = document.getElementById('skills-graph');
    if (!skillsContainer) return;
    
    // Skills data with connections
    const skillsData = [
        { id: 'html', name: 'HTML5', icon: '🌐', level: 90, category: 'frontend', x: 0.2, y: 0.5 },
        { id: 'css', name: 'CSS3', icon: '🎨', level: 85, category: 'frontend', x: 0.3, y: 0.3 },
        { id: 'js', name: 'JavaScript', icon: '🚀', level: 85, category: 'frontend', x: 0.4, y: 0.6 },
        { id: 'react', name: 'React', icon: '⚛️', level: 80, category: 'frontend', x: 0.5, y: 0.4 },
        { id: 'tailwind', name: 'Tailwind', icon: '💨', level: 85, category: 'frontend', x: 0.25, y: 0.7 },
        { id: 'php', name: 'PHP', icon: '🐘', level: 75, category: 'backend', x: 0.6, y: 0.6 },
        { id: 'laravel', name: 'Laravel', icon: '🛡️', level: 70, category: 'backend', x: 0.7, y: 0.4 },
        { id: 'mysql', name: 'MySQL', icon: '📊', level: 80, category: 'backend', x: 0.75, y: 0.6 },
        { id: 'postgresql', name: 'PostgreSQL', icon: '🐘', level: 75, category: 'backend', x: 0.8, y: 0.5 },
        { id: 'git', name: 'Git', icon: '🔄', level: 85, category: 'tools', x: 0.5, y: 0.7 },
        { id: 'api', name: 'REST API', icon: '🔌', level: 80, category: 'backend', x: 0.65, y: 0.3 },
        { id: 'responsive', name: 'Responsive', icon: '📱', level: 90, category: 'frontend', x: 0.35, y: 0.5 }
    ];
    
    // Define connections between skills
    const connections = [
        { source: 'html', target: 'css' },
        { source: 'css', target: 'js' },
        { source: 'js', target: 'react' },
        { source: 'react', target: 'tailwind' },
        { source: 'php', target: 'laravel' },
        { source: 'php', target: 'mysql' },
        { source: 'laravel', target: 'mysql' },
        { source: 'mysql', target: 'postgresql' },
        { source: 'js', target: 'api' },
        { source: 'php', target: 'api' },
        { source: 'html', target: 'responsive' },
        { source: 'css', target: 'responsive' },
        { source: 'git', target: 'js' },
        { source: 'git', target: 'php' },
    ];
    
    // Create elements
    function createSkillsGraph() {
        const containerRect = skillsContainer.getBoundingClientRect();
        const width = containerRect.width;
        const height = containerRect.height;
        
        // Create skill nodes
        skillsData.forEach(skill => {
            const node = document.createElement('div');
            node.className = 'skill-node';
            node.id = `skill-${skill.id}`;
            node.setAttribute('data-category', skill.category);
            node.setAttribute('data-level', skill.level);
            
            // Position based on relative coordinates
            node.style.left = `${skill.x * width - 40}px`;
            node.style.top = `${skill.y * height - 40}px`;
            
            // Scale based on skill level
            const scale = 0.8 + (skill.level / 100) * 0.4;
            node.style.transform = `scale(${scale})`;
            
            // Add inner content
            node.innerHTML = `
                <div class="skill-node-icon">${skill.icon}</div>
                <div class="skill-node-name">${skill.name}</div>
            `;
            
            // Add hover tooltip with skill level
            node.setAttribute('title', `${skill.name}: ${skill.level}%`);
            
            skillsContainer.appendChild(node);
        });
        
        // Create connections between nodes
        connections.forEach(connection => {
            const source = document.getElementById(`skill-${connection.source}`);
            const target = document.getElementById(`skill-${connection.target}`);
            
            if (source && target) {
                const sourceRect = source.getBoundingClientRect();
                const targetRect = target.getBoundingClientRect();
                
                // Calculate positions relative to the container
                const sourceX = sourceRect.left - containerRect.left + sourceRect.width / 2;
                const sourceY = sourceRect.top - containerRect.top + sourceRect.height / 2;
                const targetX = targetRect.left - containerRect.left + targetRect.width / 2;
                const targetY = targetRect.top - containerRect.top + targetRect.height / 2;
                
                // Calculate line length and angle
                const dx = targetX - sourceX;
                const dy = targetY - sourceY;
                const length = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                
                // Create line element
                const line = document.createElement('div');
                line.className = 'skill-connection';
                line.style.width = `${length}px`;
                line.style.left = `${sourceX}px`;
                line.style.top = `${sourceY}px`;
                line.style.transform = `rotate(${angle}deg)`;
                
                skillsContainer.appendChild(line);
            }
        });
        
        // Add interactivity
        const nodes = document.querySelectorAll('.skill-node');
        
        nodes.forEach(node => {
            node.addEventListener('mouseover', () => {
                // Highlight related skills
                const skillId = node.id.replace('skill-', '');
                
                // Find connections
                const relatedConnections = connections.filter(conn => 
                    conn.source === skillId || conn.target === skillId
                );
                
                // Highlight related nodes
                relatedConnections.forEach(conn => {
                    const relatedId = conn.source === skillId ? conn.target : conn.source;
                    const relatedNode = document.getElementById(`skill-${relatedId}`);
                    if (relatedNode) {
                        relatedNode.classList.add('highlight');
                    }
                });
                
                // Highlight connections
                document.querySelectorAll('.skill-connection').forEach(conn => {
                    conn.style.opacity = '0.2';
                });
                
                // Show skill details
                showSkillDetails(node.getAttribute('data-category'), node.getAttribute('data-level'));
            });
            
            node.addEventListener('mouseout', () => {
                // Reset highlights
                document.querySelectorAll('.skill-node').forEach(n => {
                    n.classList.remove('highlight');
                });
                
                document.querySelectorAll('.skill-connection').forEach(conn => {
                    conn.style.opacity = '0.5';
                });
                
                // Hide skill details
                hideSkillDetails();
            });
        });
    }
    
    function showSkillDetails(category, level) {
        // Create or update skill details panel
        let detailsPanel = document.getElementById('skill-details-panel');
        
        if (!detailsPanel) {
            detailsPanel = document.createElement('div');
            detailsPanel.id = 'skill-details-panel';
            detailsPanel.className = 'skill-details-panel';
            skillsContainer.appendChild(detailsPanel);
        }
        
        // Update content
        detailsPanel.innerHTML = `
            <div class="skill-category">${category.toUpperCase()}</div>
            <div class="skill-level-bar">
                <div class="skill-level-fill" style="width: ${level}%"></div>
            </div>
            <div class="skill-level-text">${level}% Proficiency</div>
        `;
        
        // Show with animation
        detailsPanel.style.opacity = '0';
        detailsPanel.style.display = 'block';
        
        setTimeout(() => {
            detailsPanel.style.opacity = '1';
        }, 10);
    }
    
    function hideSkillDetails() {
        const detailsPanel = document.getElementById('skill-details-panel');
        if (detailsPanel) {
            detailsPanel.style.opacity = '0';
            setTimeout(() => {
                detailsPanel.style.display = 'none';
            }, 300);
        }
    }
    
    // Initialize visualization
    createSkillsGraph();
    
    // Animate skills on scroll into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate skill nodes when they come into view
                const nodes = entry.target.querySelectorAll('.skill-node');
                nodes.forEach((node, index) => {
                    setTimeout(() => {
                        node.style.opacity = '0';
                        node.style.transform = 'scale(0.5)';
                        node.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                        
                        setTimeout(() => {
                            node.style.opacity = '1';
                            const level = node.getAttribute('data-level');
                            const scale = 0.8 + (level / 100) * 0.4;
                            node.style.transform = `scale(${scale})`;
                        }, 100);
                    }, index * 100);
                });
                
                // Animate connections with delay
                const connections = entry.target.querySelectorAll('.skill-connection');
                connections.forEach((conn, index) => {
                    setTimeout(() => {
                        conn.style.opacity = '0';
                        conn.style.transition = 'all 0.5s ease';
                        
                        setTimeout(() => {
                            conn.style.opacity = '0.5';
                        }, 100);
                    }, index * 50 + 500);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    // Observe the skills container
    observer.observe(skillsContainer);
    
    // Recalculate on resize
    window.addEventListener('resize', () => {
        // Clear existing graph
        skillsContainer.innerHTML = '';
        
        // Rebuild the graph
        createSkillsGraph();
    });
});
