/**
 * Debugging tool to help diagnose and fix 3D keyboard issues
 */

// Check if the page has loaded properly
console.log("Keyboard debugger loaded!");

// Function to diagnose keyboard issues
function diagnoseKeyboard() {
  console.log("--- Keyboard Diagnostics ---");
  
  // Check container
  const container = document.getElementById('tech-keyboard-container');
  console.log("Container exists:", !!container);
  
  if (container) {
    console.log("Container dimensions:", container.offsetWidth, "x", container.offsetHeight);
    console.log("Container visible:", isElementVisible(container));
    console.log("Container styles:", {
      display: getComputedStyle(container).display,
      visibility: getComputedStyle(container).visibility,
      opacity: getComputedStyle(container).opacity
    });
    
    // Check canvas
    const canvas = container.querySelector('canvas');
    console.log("Canvas exists:", !!canvas);
    
    if (canvas) {
      console.log("Canvas dimensions:", canvas.width, "x", canvas.height);
      console.log("Canvas visible:", isElementVisible(canvas));
      console.log("Canvas styles:", {
        display: getComputedStyle(canvas).display,
        visibility: getComputedStyle(canvas).visibility,
        opacity: getComputedStyle(canvas).opacity
      });
    } else {
      console.log("No canvas found - Three.js may not have initialized");
    }
  }
  
  // Check if Three.js is available
  console.log("THREE object available:", typeof THREE !== 'undefined');
  
  // Check for WebGL support
  checkWebGLSupport();
}

// Helper function to check if an element is visible
function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

// Check WebGL support and capabilities
function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext("webgl") || 
               canvas.getContext("experimental-webgl");
    
    if (gl) {
      console.log("WebGL is supported!");
      
      // Check extensions and capabilities
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      
      if (debugInfo) {
        const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        console.log("WebGL Vendor:", vendor);
        console.log("WebGL Renderer:", renderer);
      }
      
      console.log("Max Texture Size:", gl.getParameter(gl.MAX_TEXTURE_SIZE));
    } else {
      console.error("WebGL is not supported on this browser/device!");
    }
  } catch (e) {
    console.error("Error checking WebGL support:", e);
  }
}

// Initialize keyboard with fallback options
function initFallbackKeyboard() {
  console.log("Setting up fallback keyboard...");
  
  const container = document.getElementById('tech-keyboard-container');
  if (!container) {
    console.error("Container not found");
    return;
  }
  
  // Add a simple message
  const fallbackMessage = document.createElement('div');
  fallbackMessage.style.position = 'absolute';
  fallbackMessage.style.top = '50%';
  fallbackMessage.style.left = '50%';
  fallbackMessage.style.transform = 'translate(-50%, -50%)';
  fallbackMessage.style.color = 'white';
  fallbackMessage.style.textAlign = 'center';
  fallbackMessage.innerHTML = `
    <h3>3D Tech Keyboard</h3>
    <div style="
      width: 80%;
      height: 120px;
      margin: 15px auto;
      background: linear-gradient(145deg, #181c24, #0f1218);
      border-radius: 6px;
      border: 1px solid rgba(100, 255, 218, 0.15);
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
      position: relative;
    ">
      <div style="
        display: flex;
        justify-content: space-around;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
      ">
        <div style="
          width: 60px; 
          height: 15px; 
          background: rgba(100, 255, 218, 0.2);
          border-radius: 3px;
        "></div>
        <div style="
          width: 60px; 
          height: 15px; 
          background: rgba(56, 189, 248, 0.2);
          border-radius: 3px;
        "></div>
        <div style="
          width: 60px; 
          height: 15px; 
          background: rgba(74, 222, 128, 0.2);
          border-radius: 3px;
        "></div>
        <div style="
          width: 60px; 
          height: 15px; 
          background: rgba(192, 132, 252, 0.2);
          border-radius: 3px;
        "></div>
      </div>
    </div>
    <p>Displaying simplified version of the tech keyboard</p>
    <button id="retry-3d-keyboard" style="
      background: rgba(100, 255, 218, 0.2);
      color: white;
      border: 1px solid rgba(100, 255, 218, 0.5);
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
    ">Retry 3D Version</button>
  `;
  
  container.appendChild(fallbackMessage);
  
  // Add retry button handler
  document.getElementById('retry-3d-keyboard').addEventListener('click', () => {
    container.innerHTML = '';
    if (typeof initTechKeyboard3D === 'function') {
      initTechKeyboard3D();
    }
  });
}

// Run diagnostics after a short delay
setTimeout(diagnoseKeyboard, 1000);

// Setup a fallback if keyboard isn't visible after 3 seconds
setTimeout(() => {
  const container = document.getElementById('tech-keyboard-container');
  const canvas = container?.querySelector('canvas');
  
  if (!canvas || !isElementVisible(canvas)) {
    console.log("Canvas not visible after timeout - using fallback");
    initFallbackKeyboard();
  }
}, 3000);

// Export the diagnostic function
window.diagnoseKeyboard = diagnoseKeyboard;
