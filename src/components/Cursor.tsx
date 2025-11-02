import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    // Check if we're on a touch device - if so, we don't need a custom cursor
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    // Create and add a style tag to set custom cursors
    const styleTag = document.createElement('style');
    
    // You can replace these cursor URLs with any custom cursor you want
    // For different cursor states (default, pointer, text, etc.)
    styleTag.innerHTML = `
      body {
        /* Default cursor - you can use an emoji or replace with your custom cursor URL */
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewport='0 0 40 40' style='fill:none;stroke:white;stroke-width:2px;'><circle cx='20' cy='20' r='8'/></svg>") 20 20, auto !important;
      }
      
      a, button, [role="button"], .clickable, [onclick], input[type="submit"], input[type="button"] {
        /* Pointer cursor for clickable elements */
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewport='0 0 40 40' style='fill:white;stroke:white;stroke-width:2px;'><circle cx='20' cy='20' r='8'/></svg>") 20 20, pointer !important;
      }
      
      input, textarea, [contenteditable="true"] {
        /* Text cursor for text elements */
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewport='0 0 40 40' style='fill:none;stroke:white;stroke-width:2px;'><circle cx='20' cy='20' r='6'/><line x1='20' y1='5' x2='20' y2='35'/></svg>") 20 20, text !important;
      }
    `;
    
    document.head.appendChild(styleTag);
    
    return () => {
      // Clean up
      document.head.removeChild(styleTag);
    };
  }, []);

  // Component doesn't render anything visible
  return null;
};

export default Cursor;