/**
 * Tech Network Visualization
 * Creates a network graph of technologies showing their relationships
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize after a brief delay to ensure DOM is fully ready
    setTimeout(initTechNetwork, 100);
    
    // Handle window resize with debounce
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(initTechNetwork, 250);
    }, { passive: true });
});

function initTechNetwork() {
    const container = document.querySelector('.tech-network-container');
    if (!container) return;
    
    const canvas = document.getElementById('tech-network');
    const ctx = canvas.getContext('2d');
    
    // Set canvas to proper resolution
    resizeCanvas();
    
    // Get all tech nodes
    const nodes = document.querySelectorAll('.tech-node');
    
    // Create tooltip element
    createTooltip();
    
    // Position nodes
    positionNodes();
    
    // Draw connections between nodes
    drawConnections();
    
    // Add node interactivity
    addNodeInteractivity();
    
    function resizeCanvas() {
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
    }
    
    function createTooltip() {
        // Remove any existing tooltip
        const existingTooltip = document.querySelector('.tech-tooltip');
        if (existingTooltip) existingTooltip.remove();
        
        // Create new tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'tech-tooltip';
        container.appendChild(tooltip);
    }
    
    function positionNodes() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        // Group nodes by category
        const frontendNodes = Array.from(document.querySelectorAll('.node-frontend'));
        const backendNodes = Array.from(document.querySelectorAll('.node-backend'));
        const toolsNodes = Array.from(document.querySelectorAll('.node-tools'));
        
        // Calculate positions
        positionNodeGroup(frontendNodes, 0, 0.5, centerX, centerY);
        positionNodeGroup(backendNodes, 0.6, 1.2, centerX, centerY);
        positionNodeGroup(toolsNodes, 1.3, 1.9, centerX, centerY);
    }
    
    function positionNodeGroup(nodes, startAngle, endAngle, centerX, centerY) {
        const radius = Math.min(canvas.width, canvas.height) * 0.38;
        const angleStep = (endAngle - startAngle) / (nodes.length + 1);
        
        nodes.forEach((node, index) => {
            const angle = startAngle + angleStep * (index + 1);
            const x = centerX + radius * Math.cos(angle * Math.PI);
            const y = centerY + radius * Math.sin(angle * Math.PI);
            
            // Position the node
            node.style.left = `${x - node.offsetWidth / 2}px`;
            node.style.top = `${y - node.offsetHeight / 2}px`;
            
            // Store position for drawing connections
            node.dataset.x = x;
            node.dataset.y = y;
        });
    }
    
    function drawConnections() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Set line style
        ctx.strokeStyle = 'rgba(100, 255, 218, 0.2)';
        ctx.lineWidth = 1;
        
        // Draw connections based on data attributes
        nodes.forEach(node => {
            if (!node.dataset.connectsTo) return;
            
            const connections = node.dataset.connectsTo.split(',');
            const fromX = parseFloat(node.dataset.x);
            const fromY = parseFloat(node.dataset.y);
            
            connections.forEach(targetName => {
                const targetNode = Array.from(nodes).find(
                    n => n.dataset.name === targetName
                );
                
                if (targetNode && targetNode.dataset.x) {
                    const toX = parseFloat(targetNode.dataset.x);
                    const toY = parseFloat(targetNode.dataset.y);
                    
                    // Draw connection line
                    ctx.beginPath();
                    ctx.moveTo(fromX, fromY);
                    ctx.lineTo(toX, toY);
                    ctx.stroke();
                }
            });
        });
    }
    
    function addNodeInteractivity() {
        const tooltip = document.querySelector('.tech-tooltip');
        
        nodes.forEach(node => {
            if (!node.dataset.name) return;
            
            node.addEventListener('mouseenter', () => {
                // Show tooltip
                tooltip.textContent = node.dataset.name;
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateY(0)';
                
                // Position tooltip near the node
                const rect = node.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                
                tooltip.style.left = `${rect.left + rect.width / 2 - containerRect.left}px`;
                tooltip.style.top = `${rect.top - containerRect.top - 25}px`;
                
                // Highlight connections
                highlightConnections(node);
            }, { passive: true });
            
            node.addEventListener('mouseleave', () => {
                // Hide tooltip
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(10px)';
                
                // Reset connections
                resetConnections();
            }, { passive: true });
        });
    }
    
    function highlightConnections(node) {
        // Redraw all connections with faded style
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // First draw all connections with reduced opacity
        ctx.globalAlpha = 0.1;
        drawConnections();
        
        // Then draw the connections for this node with full opacity
        ctx.globalAlpha = 1;
        ctx.strokeStyle = 'rgba(100, 255, 218, 0.7)';
        ctx.lineWidth = 2;
        
        if (!node.dataset.connectsTo) return;
        
        const connections = node.dataset.connectsTo.split(',');
        const fromX = parseFloat(node.dataset.x);
        const fromY = parseFloat(node.dataset.y);
        
        connections.forEach(targetName => {
            const targetNode = Array.from(nodes).find(
                n => n.dataset.name === targetName
            );
            
            if (targetNode && targetNode.dataset.x) {
                const toX = parseFloat(targetNode.dataset.x);
                const toY = parseFloat(targetNode.dataset.y);
                
                // Draw connection line
                ctx.beginPath();
                ctx.moveTo(fromX, fromY);
                ctx.lineTo(toX, toY);
                ctx.stroke();
                
                // Highlight the connected node
                targetNode.style.transform = 'scale(1.1)';
                targetNode.style.boxShadow = '0 0 15px rgba(100, 255, 218, 0.5)';
            }
        });
        
        ctx.globalAlpha = 1;
    }
    
    function resetConnections() {
        // Reset node styles
        nodes.forEach(node => {
            if (node !== document.querySelector('.node-core')) {
                node.style.transform = '';
                node.style.boxShadow = '';
            }
        });
        
        // Redraw connections normally
        drawConnections();
    }
}
