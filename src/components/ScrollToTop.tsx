import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Force scroll to top with a slight delay to ensure it works after rendering
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Use 'instant' instead of 'smooth' to prevent partial scrolling
      });
    };
    
    // Execute immediately and with a small delay to ensure it works
    scrollToTop();
    const timeoutId = setTimeout(scrollToTop, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
  
  return null;
}

export default ScrollToTop;