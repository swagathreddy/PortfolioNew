import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SideNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const location = useLocation();

  // Close mobile/side menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navigationItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '👤' },
    { path: '/projects', label: 'Projects', icon: '💼' },
    { path: '/skills', label: 'Skills', icon: '🛠️' },
    { path: '/contact', label: 'Contact', icon: '✉️' },
  ];

  // Animation variants
  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    closed: {
      x: "-100%",
      opacity: 0.8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: {
      x: -20,
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const toggleButton = {
    open: {
      rotate: 0,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.4 }
    },
    closed: {
      rotate: 180,
      backgroundColor: "rgba(79, 70, 229, 0.9)",
      transition: { duration: 0.4 }
    }
  };
  
  // Tooltip animation variants
  const tooltipVariants = {
    hidden: { 
      opacity: 0, 
      x: -10,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.2 
      } 
    }
  };

  return (
    <>
      {/* Toggle Button - Always Visible */}
      <motion.button
        className="fixed top-8 left-4 z-50 p-3 rounded-full shadow-lg lg:left-8"
        onClick={() => setIsOpen(!isOpen)}
        animate={isOpen ? "open" : "closed"}
        variants={toggleButton}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
      </motion.button>

      {/* Brand Logo - Top Center */}
      <div className="fixed top-0 left-0 right-0 z-40 flex justify-center py-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent pointer-events-auto"
        >
         
        </motion.div>
      </div>

      {/* Side Navigation */}
      <AnimatePresence>
        <motion.nav
          className="fixed top-0 left-0 z-40 h-full w-24 lg:w-64 bg-neutral-900/90 backdrop-blur-lg shadow-xl flex flex-col"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={sidebarVariants}
        >
          {/* Logo for Side Nav */}
          <div className="py-12 mb-8 flex justify-center">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
              <span className="text-lg font-bold text-white">SR</span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col space-y-2 px-3">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.path}
                variants={itemVariants}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className="relative"
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative flex items-center px-4 py-3 rounded-lg transition-all duration-300 overflow-hidden ${
                      isActive 
                        ? 'text-white' 
                        : 'text-neutral-400 hover:text-white'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      {/* Background Animation */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary-500/80 to-purple-600/80 rounded-lg"
                          layoutId="nav-background"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      
                      {/* Item Content */}
                      <div className="flex items-center w-full z-10">
                        <span className="text-lg lg:text-base mr-3">{item.icon}</span>
                        <span className="hidden lg:block font-medium">{item.label}</span>
                        
                        {/* Arrow indicator */}
                        {isActive && (
                          <motion.div 
                            className="ml-auto"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <ChevronRight size={16} />
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Hover Effect */}
                      {hoverIndex === index && !isActive && (
                        <motion.div
                          className="absolute inset-0 bg-neutral-800/70 rounded-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
                
                {/* Tooltip for Mobile */}
                <AnimatePresence>
                  {hoverIndex === index && (
                    <motion.div
                      className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-neutral-800 text-white px-3 py-1.5 rounded-md shadow-lg z-50 whitespace-nowrap lg:hidden"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={tooltipVariants}
                    >
                      <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 rotate-45 w-2 h-2 bg-neutral-800" />
                      {item.label}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Social Media Links at Bottom */}
          <div className="mt-auto mb-8 flex justify-center gap-4 px-4">
            <motion.a
              href="https://github.com/swagathreddy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <span className="text-lg">𝕏</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/swagathreddykasula"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <span className="text-lg">in</span>
            </motion.a>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Content Overlay when Nav is Open (Mobile Only) */}
      <AnimatePresence>
        {isOpen && window.innerWidth < 1024 && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SideNavigation;