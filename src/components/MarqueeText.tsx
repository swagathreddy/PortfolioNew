import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const MarqueeText = ({ 
  text, 
  direction = 'right', 
  className = '', 
  opacity = 0.15, 
  size = 'text-7xl', 
  speed = 60 
}) => {
  // Use media query to detect smaller screens
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  
  // Much slower speed calculation with very small multipliers
  const adjustedSpeed = isSmallScreen ? speed * 0.08 : speed * 0.05;
  
  // Duplicate the text to create a seamless loop
  const repeatedText = `${text} • `.repeat(10);
  
  // Significantly increase duration for very slow movement
  // Using a larger multiplier of 3 for even slower animation
  const duration = repeatedText.length / adjustedSpeed * 2;
  
  return (
    <div className={`overflow-hidden whitespace-nowrap w-full ${className}`} style={{ position: 'relative' }}>
      <div className="flex">
        {/* First copy of the text */}
        <motion.div
          className={`${size} font-extrabold tracking-tight flex-shrink-0`}
          animate={{
            x: direction === 'left' ? '-100%' : '100%'
          }}
          initial={{
            x: direction === 'left' ? '0%' : '-100%'
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear"
          }}
          style={{
            opacity: opacity,
            textTransform: 'uppercase',
            fontWeight: 800,
            whiteSpace: 'nowrap'
          }}
        >
          {repeatedText}
        </motion.div>
        
        {/* Second copy of the text for seamless looping */}
        <motion.div
          className={`${size} font-extrabold tracking-tight flex-shrink-0`}
          animate={{
            x: direction === 'left' ? '-100%' : '100%'
          }}
          initial={{
            x: direction === 'left' ? '100%' : '0%'
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear"
          }}
          style={{
            opacity: opacity,
            textTransform: 'uppercase',
            fontWeight: 800,
            whiteSpace: 'nowrap'
          }}
        >
          {repeatedText}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeText;