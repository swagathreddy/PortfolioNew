
import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  // Create a staggered loading animation with dots
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const dotVariants = {
    initial: { 
      y: 0,
      opacity: 0.2
    },
    animate: { 
      y: [0, -10, 0],
      opacity: [0.2, 1, 0.2],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Array of creative loading messages related to portfolio/character
  const loadingMessages = [
    "Crafting Digital Experiences...",
    "Preparing Creative Solutions...",
    "Initializing Innovation Mode...",
    "Curating My Best Work For You...",
    "Transforming Ideas Into Reality..."
  ];

  // Randomly select one message
  const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-neutral-900/90 backdrop-blur-lg">
      <div className="text-center">
        {/* Logo similar to header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-8"
        >
          <span className="text-primary-500">SWAGATH</span>
          <span className="text-white">REDDY</span>
        </motion.div>
        
        {/* Loading dots animation */}
        <motion.div 
          className="flex space-x-3 justify-center"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-500 to-purple-600"
              variants={dotVariants}
            />
          ))}
        </motion.div>
        
        {/* Loading text - now using a creative message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-neutral-300 text-sm font-medium"
        >
          {randomMessage}
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
