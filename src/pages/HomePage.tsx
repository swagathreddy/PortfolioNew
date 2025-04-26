import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeCanvas from '../components/ThreeCanvas';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import SkillsPreview from '../components/SkillsPreview';
import profileImage from '../static/Swagath.jpg';

const HomePage: React.FC = () => {
  const [userImage, setUserImage] = useState<string | null>(null);
  
  // Handle image upload for demonstration purposes
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {/* Hero Section - ENHANCED */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Added top padding for mobile screens to prevent navbar overlap */}
        <div className="pt-20 pb-24 sm:pt-24 sm:pb-28 md:py-0 w-full">
          <div className="absolute inset-0 z-0">
            <ThreeCanvas className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950" />
           {/* MODIFIED: Bubble background with increased blur and reduced opacity */}
<motion.div 
  className="absolute inset-0 z-0 opacity-50 w-full h-full"
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.5 }}
  transition={{ duration: 2 }}
>
  {[...Array(30)].map((_, i) => (
    <motion.div
      key={i}
      className={`absolute rounded-full ${
        i % 4 === 0 ? 'bg-cyan-400/60' :
        i % 4 === 1 ? 'bg-pink-400/60' :
        i % 4 === 2 ? 'bg-yellow-400/60' : 
        'bg-green-400/60'
      } blur-2xl`}
      style={{
        width: `${Math.random() * 150 + 50}px`,
        height: `${Math.random() * 150 + 50}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      initial={{ 
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        scale: Math.random() * 0.5 + 0.5
      }}
      animate={{ 
        x: [
          Math.random() * 100 - 50, 
          Math.random() * 100 - 50,
          Math.random() * 100 - 50
        ],
        y: [
          Math.random() * 100 - 50, 
          Math.random() * 100 - 50,
          Math.random() * 100 - 50
        ]
      }}
      transition={{ 
        duration: 15 + Math.random() * 20, 
        repeat: Infinity,
        repeatType: "reverse"
      }}
    />
  ))}
</motion.div>
            
            {/* Added subtle grid overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-6 md:py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Text Content Side - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 mt-10 sm:mt-0" // Added top margin for mobile
              >
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block bg-primary-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-500/30"
                >
                  <p className="text-primary-400 font-medium">Hello, I'm</p>
                </motion.div>
                
                <motion.h1
                  className="heading-xl text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  Swagath <span className="text-primary-500">Reddy</span>
                  <motion.span 
                    className="inline-block ml-1"
                    animate={{ 
                      rotate: [0, 10, 0, 10, 0],
                      transition: { repeat: Infinity, repeatDelay: 4, duration: 1.5 }
                    }}
                   
                  >
                    
                    👋
                  </motion.span>
                </motion.h1>
                
                <motion.div
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-200 h-[40px] md:h-[48px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <div className="h-[40px] md:h-[48px] overflow-hidden">
                    <motion.div
                      animate={{ 
                        y: [0, -40, -80, -120, -160, -200, 0] 
                      }}
                      transition={{ 
                        duration: 5, 
                        ease: "easeInOut", 
                        repeat: Infinity,
                        repeatDelay: 0.5
                      }}
                    >
                      <div className="h-[40px] md:h-[48px] flex items-center">
                        <span className="text-primary-400 mr-2">&lt;</span>
                        Full Stack Developer
                        <span className="text-primary-400 ml-2">/&gt;</span>
                      </div>
                      <div className="h-[40px] md:h-[48px] flex items-center">
                        <span className="text-primary-400 mr-2">&lt;</span>
                        AI Enthusiast
                        <span className="text-primary-400 ml-2">/&gt;</span>
                      </div>
                      <div className="h-[40px] md:h-[48px] flex items-center">
                        <span className="text-primary-400 mr-2">&lt;</span>
                        ML Specialist
                        <span className="text-primary-400 ml-2">/&gt;</span>
                      </div>
                      <div className="h-[40px] md:h-[48px] flex items-center">
                        <span className="text-primary-400 mr-2">&lt;</span>
                        Problem Solver
                        <span className="text-primary-400 ml-2">/&gt;</span>
                      </div>
                      <div className="h-[40px] md:h-[48px] flex items-center">
                        <span className="text-primary-400 mr-2">&lt;</span>
                        Team Leader
                        <span className="text-primary-400 ml-2">/&gt;</span>
                      </div>
                      <div className="h-[40px] md:h-[48px] flex items-center">
                        <span className="text-primary-400 mr-2">&lt;</span>
                        Full Stack Developer
                        <span className="text-primary-400 ml-2">/&gt;</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.p
                  className="text-neutral-400 text-base sm:text-lg max-w-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  Creating innovative solutions with expertise in Python, Django, React, and machine learning technologies. Transforming ideas into impactful digital experiences.
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/contact" className="btn-primary bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-500/20">
                      Get in Touch
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/projects" className="btn-outline border-primary-500 text-primary-400 hover:bg-primary-500/10">
                      View Projects
                    </Link>
                  </motion.div>
                </motion.div>
                
                {/* Added social media links */}
                <motion.div 
                  className="flex items-center gap-5 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <a href="https://github.com/swagathreddy" target="_blank" rel="noopener noreferrer" 
                     className="text-neutral-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/swagathreddykasula" target="_blank" rel="noopener noreferrer"
                     className="text-neutral-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com/swagathreddy" target="_blank" rel="noopener noreferrer"
                     className="text-neutral-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
         
              
              {/* Profile Image Side with Enhanced Effects & Responsive Sizing */}
              <motion.div
                className="relative flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {/* Enhanced glowing circular background - smaller on mobile */}
                <motion.div 
                  className="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-primary-500/20 blur-xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                {userImage ? (
                  <motion.div
                    className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg shadow-primary-500/30"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    drag
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    dragElastic={0.1}
                  >
                    <img 
                      src={userImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Enhanced image decoration */}
                    <motion.div 
                      className="absolute inset-0 border-4 border-primary-500/50 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      style={{ borderRadius: "50%", borderStyle: "dashed" }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-75 blur-md"
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.02, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                      }}
                    />
                    
                    
                    <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center border-4 border-primary-500 shadow-xl shadow-primary-500/20 relative z-10">
  <img src={profileImage} alt="Profile Picture" className="w-full h-full rounded-full object-cover"/>
</div>
                    
                    <motion.div 
                      className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 bg-neutral-800 p-3 sm:p-4 rounded-full shadow-lg z-20"
                      animate={{ rotate: [0, 10, 0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <span className="text-2xl sm:text-4xl">👨‍💻</span>
                    </motion.div>
                  </motion.div>
                )}
                
                {/* Floating skill bubbles */}
                <motion.div
                  className="absolute top-3 sm:top-5 -left-3 sm:-left-5 bg-primary-900/80 backdrop-blur-sm p-2 sm:p-3 rounded-lg text-primary-200 shadow-lg text-xs sm:text-sm"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [-2, 2, -2]
                  }}
                  transition={{ 
                    y: { duration: 2, repeat: Infinity, repeatType: "reverse" },
                    rotate: { duration: 4, repeat: Infinity, repeatType: "reverse" }
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="font-mono">{'<Python />'}</span>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-2 left-5 sm:left-10 bg-secondary-900/80 backdrop-blur-sm p-2 sm:p-3 rounded-lg text-secondary-200 shadow-lg text-xs sm:text-sm"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [2, -2, 2]
                  }}
                  transition={{ 
                    y: { duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.2 },
                    rotate: { duration: 5, repeat: Infinity, repeatType: "reverse" }
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="font-mono">{'<React />'}</span>
                </motion.div>
                
                <motion.div
                  className="absolute top-10 sm:top-16 -right-5 sm:-right-8 bg-accent-900/80 backdrop-blur-sm p-2 sm:p-3 rounded-lg text-accent-200 shadow-lg text-xs sm:text-sm"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [-3, 3, -3]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 },
                    rotate: { duration: 6, repeat: Infinity, repeatType: "reverse" }
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="font-mono">{'<AI />'}</span>
                </motion.div>
                
                <motion.div
                  className="absolute bottom-8 sm:bottom-10 -right-5 sm:-right-8 bg-primary-800/80 backdrop-blur-sm p-2 sm:p-3 rounded-lg text-primary-200 shadow-lg text-xs sm:text-sm"
                  animate={{ 
                    y: [0, 8, 0],
                    rotate: [3, -3, 3]
                  }}
                  transition={{ 
                    y: { duration: 2.7, repeat: Infinity, repeatType: "reverse", delay: 0.7 },
                    rotate: { duration: 5.5, repeat: Infinity, repeatType: "reverse" }
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="font-mono">{'<Django />'}</span>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Enhanced scroll indicator */}
            <motion.div
 className="flex justify-center items-center mt-5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.div
        className="bg-neutral-800/50 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-neutral-700/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        whileHover={{ scale: 1.1 }}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center text-neutral-300 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs sm:text-sm mb-1">Scroll Down</span>
          <ArrowDown size={16} className="sm:w-5 sm:h-5" />
        </a>
      </motion.div>
    </motion.div>
          </div>
        </div>
      </section>
      
  
      <section id="about" className="section-spacing bg-neutral-900">
        <div className="container-custom">
          <SectionTitle
            subtitle="ABOUT ME"
            title="Information Technology Student with Full Stack Expertise"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-neutral-300 mb-6">
                I'm an Information Technology student at Anurag University with a passion for 
                developing secure, scalable applications. With expertise in Python, Django, and 
                data management, I focus on creating solutions that make a difference.
              </p>
              <p className="text-neutral-300 mb-6">
                My experience extends to machine learning techniques including supervised and 
                unsupervised learning, with specialized skills in diffusion models, SpaCy, and 
                FuzzyWuzzy for NLP applications.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Me
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-neutral-800 p-6 rounded-lg"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl mb-4">🎓</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Education</h4>
                  <p className="text-neutral-400">B.Tech, Information Technology at Anurag University</p>
                </motion.div>
                
                <motion.div
                  className="bg-neutral-800 p-6 rounded-lg"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.05 }}
                >
                  <div className="text-4xl mb-4">💼</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Leadership</h4>
                  <p className="text-neutral-400">Core Member at GDSC, Anurag University</p>
                </motion.div>
                
                <motion.div
                  className="bg-neutral-800 p-6 rounded-lg"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                >
                  <div className="text-4xl mb-4">🏆</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Achievement</h4>
                  <p className="text-neutral-400">Hackathon Winner at VIVITSU</p>
                </motion.div>
                
                <motion.div
                  className="bg-neutral-800 p-6 rounded-lg"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.15 }}
                >
                  <div className="text-4xl mb-4">🧠</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Expertise</h4>
                  <p className="text-neutral-400">Full Stack Development, AI/ML, NLP</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Preview - MOVED UP */}
      <section className="section-spacing bg-neutral-950">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <SectionTitle
              subtitle="FEATURED PROJECTS"
              title="My Recent Work"
              className="md:mb-0"
            />
            <Link to="/projects" className="btn-outline mt-4 md:mt-0">
              View All Projects
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Preview Section - MOVED DOWN */}
      <section className="section-spacing bg-neutral-950">
        <div className="container-custom">
          <SectionTitle
            subtitle="MY EXPERTISE"
            title="Core Skills & Technologies"
            alignment="center"
          />
          
          <SkillsPreview />
          
          <div className="text-center mt-12">
            <Link to="/skills" className="btn-primary">
              View All Skills
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Preview */}
      
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-secondary-900">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-white mb-6">Interested in Working Together?</h2>
            <p className="text-lg text-white/80 mb-8">
              Let's collaborate on your next project and build something amazing together.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-900 hover:bg-neutral-100">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;