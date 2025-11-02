import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TechElementProps {
  icon: string;
  className?: string;
}

interface FloatingCodeElementProps {
  code: string;
  className?: string;
  dataDepth?: string;
}

const ProfileComposition: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const elements = containerRef.current.querySelectorAll('.parallax-item');
      if (!elements || elements.length === 0) return;
      
      const container = containerRef.current.getBoundingClientRect();
      const centerX = container.left + container.width / 2;
      const centerY = container.top + container.height / 2;
      
      const moveX = (e.clientX - centerX) / 30;
      const moveY = (e.clientY - centerY) / 30;
      
      elements.forEach((el) => {
        if (!el) return;
        const depth = parseFloat(el.getAttribute('data-depth') || "1");
        (el as HTMLElement).style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
      });
    };
    
    // Only apply the parallax effect on larger screens
    if (window.innerWidth >= 768) {
      document.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    // Improved container positioning to prevent overlap
    <div className="relative w-full max-w-sm mx-auto md:max-w-xs lg:max-w-md h-[350px] md:h-[450px] lg:h-[500px]" ref={containerRef}>
      {/* Base glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/30 rounded-full blur-[50px]" />
      
      {/* Profile container - Reduced width on md screens to prevent text overlap */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[200px] md:w-[220px] lg:w-[280px] h-[240px] sm:h-[260px] md:h-[300px] lg:h-[380px] z-10"
        initial={{ y: 20 }}
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {/* Background shapes - adjusted for better positioning */}
        <motion.div 
          className="absolute -top-4 sm:-top-5 md:-top-6 lg:-top-12 -left-4 sm:-left-5 md:-left-6 lg:-left-12 w-16 sm:w-20 md:w-24 lg:w-40 h-16 sm:h-20 md:h-24 lg:h-40 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl blur-md parallax-item"
          data-depth="1.5"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, repeatType: "reverse" }
          }}
        />
        
        <motion.div 
          className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 lg:-bottom-8 -right-2 sm:-right-3 md:-right-4 lg:-right-8 w-12 sm:w-16 md:w-20 lg:w-32 h-12 sm:h-16 md:h-20 lg:h-32 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full blur-md parallax-item"
          data-depth="1.2"
          animate={{ 
            rotate: -360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }
          }}
        />
        
        {/* The main profile composition */}
        <div className="relative w-full h-full">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 to-black/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          </div>
          
          {/* Profile image container - better centering and sizing */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="relative w-[150px] sm:w-[170px] md:w-[190px] lg:w-[240px] h-[200px] sm:h-[220px] md:h-[260px] lg:h-[320px] flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Cut out shape - creates a custom shape mask for the image */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="profileClip">
                    <path d="M30 0H220C236.569 0 250 13.4315 250 30V290C250 306.569 236.569 320 220 320H30C13.4315 320 0 306.569 0 290V30C0 13.4315 13.4315 0 30 0Z" />
                    <path d="M125 35C151.51 35 173 56.4903 173 83C173 109.51 151.51 131 125 131C98.4903 131 77 109.51 77 83C77 56.4903 98.4903 35 125 35Z" fillRule="evenodd" clipRule="evenodd" />
                  </clipPath>
                </defs>
              </svg>
              
              {/* Image with custom shape */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ clipPath: "url(#profileClip)" }}>
                {/* Replace this URL with your actual profile image */}
                <div className="w-full h-full bg-gradient-to-b from-green-500/40 to-cyan-500/40" />
                <div className="absolute inset-0 bg-[url('./static/Swagath.jpg')] bg-cover bg-center" />
                
                {/* Floating tech elements - adjusted positioning with better spacing on small screens */}
                <TechElement icon="⚛️" className="absolute top-10 sm:top-12 md:top-14 lg:top-16 right-0 bg-blue-900/60 flex" />
                <TechElement icon="🐍" className="absolute top-1/3 -left-1 sm:left-0 bg-green-900/60 flex" />
                <TechElement icon="🧠" className="absolute bottom-16 sm:bottom-18 md:bottom-20 lg:bottom-24 -right-1 sm:right-0 bg-purple-900/60 flex" />
              </div>
              
              {/* Name plate - Improved alignment and sizing */}
              <motion.div 
                className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-zinc-900/90 to-zinc-800/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg w-auto min-w-[80px] sm:min-w-[100px] max-w-full mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 bg-green-500 rounded-full flex-shrink-0" />
                <span className="text-white font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">Hello</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Floating code elements - improved positioning for all screen sizes */}
      <FloatingCodeElement 
        code="<Designer/>" 
        className="absolute top-6 sm:top-8 md:top-10 -left-2 sm:left-0 bg-green-900/50 block" 
        dataDepth="2"
      />
      <FloatingCodeElement 
        code="<Problem Solver/>" 
        className="absolute bottom-12 sm:bottom-14 md:bottom-16 lg:bottom-20 left-4 sm:left-6 md:left-8 lg:left-10 bg-blue-900/50 block" 
        dataDepth="1.8"
      />
      <FloatingCodeElement 
        code="<Coder/>" 
        className="absolute top-1/3 right-1 sm:right-2 md:right-3 lg:right-5 bg-purple-900/50 block"
        dataDepth="1.5"
      />
    </div>
  );
};

// Tech icon element - adjusted sizing for smaller screens
const TechElement: React.FC<TechElementProps> = ({ icon, className = "" }) => {
  return (
    <motion.div 
      className={`flex items-center justify-center w-6 sm:w-7 md:w-8 lg:w-10 h-6 sm:h-7 md:h-8 lg:h-10 rounded-full backdrop-blur-md text-base sm:text-lg md:text-lg lg:text-xl shadow-lg parallax-item ${className}`}
      data-depth="2.5"
      whileHover={{ scale: 1.2 }}
      animate={{ 
        y: [0, -6, 0],
      }}
      transition={{ 
        y: { duration: 2, repeat: Infinity, repeatType: "reverse" },
        scale: { type: "spring", stiffness: 400 }
      }}
    >
      {icon}
    </motion.div>
  );
};

// Floating code element - adjusted for smaller screens
const FloatingCodeElement: React.FC<FloatingCodeElementProps> = ({ 
  code, 
  className = "",
  dataDepth = "1"
}) => {
  return (
    <motion.div 
      className={`px-2 sm:px-2.5 md:px-3 py-1 sm:py-1 md:py-1.5 rounded-lg backdrop-blur-sm text-white font-mono text-xs md:text-xs lg:text-sm shadow-lg border border-white/10 parallax-item ${className}`}
      data-depth={dataDepth}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        rotate: [-1, 1, -1],
      }}
      transition={{ 
        opacity: { duration: 0.5 },
        y: { duration: 0.5 },
        rotate: { duration: 5, repeat: Infinity, repeatType: "reverse" }
      }}
    >
      {code}
    </motion.div>
  );
};

export default ProfileComposition;