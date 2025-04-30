import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeCanvas from '../components/ThreeCanvas';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import SkillsPreview from '../components/SkillsPreview';
import ProfileComposition from '../components/ProfileComposition';
import MarqueeText from '../components/MarqueeText';
import profileImage from '../static/Swagath.jpg';

// Rest of your imports and component definitions...

// Badge component with proper icon handling
const Badge = ({ text, icon = null }) => {
  return (
    <motion.div 
      className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-white"
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
    >
      {icon && icon}
      {text}
    </motion.div>
  );
};

// Particle animation
const ParticleField = () => {
  // Your existing ParticleField component code...
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

const HomePage = () => {
  const [userImage, setUserImage] = useState(null);
  
  return (
    <div>
      {/* Hero Section with improved responsive layout */}
      {/* Hero Section with improved responsive layout */}
<section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-zinc-900">
  {/* Background Elements */}
  <div className="absolute inset-0 opacity-50">
    <div className="absolute top-0 left-0 w-full h-full">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern" />
      
      {/* Gradient circles */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl" />
      
      {/* Animated particles */}
      <ParticleField />
    </div>
  </div>
  
  {/* Content Container with improved responsive layout */}
  <div className="container mx-auto h-full px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center py-16 md:py-24 lg:py-32 lg:flex-row md:flex-col">
    {/* Profile Composition - stays at top on mobile and medium screens */}
    <motion.div 
      className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <ProfileComposition />
    </motion.div>
    
    {/* Text Content - Added margin-top for mobile and medium screens to move it down */}
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full lg:w-1/2 pt-4 pb-8 lg:pt-0 lg:pb-0 text-center lg:text-left mt-12 sm:mt-16 md:mt-16 lg:mt-0"
    >
      <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
        <motion.div 
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="h-2 w-2 bg-green-400 rounded-full" />
          <p className="text-green-400 text-sm font-medium">Available for projects</p>
        </motion.div>
        
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-cyan-300">
            Swagath
          </span>
          <br />
          <span className="text-white">Reddy</span>
        </motion.h1>
        
        <motion.div 
          className="flex flex-col space-y-6 max-w-md mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-zinc-400 text-lg px-2 lg:px-0">
  Full Stack Developer and AI Enthusiast with a knack for crafting exceptional web applications and innovative solutions.
</p>
          
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <Badge icon={<Code size={14} />} text="Developer" />
            <Badge text="Django" />
            <Badge text="React" />
            <Badge text="AI/ML" />
            <Badge text="LLM" />
          </div>
          
          <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
  <Link to="/projects">
    <motion.button 
      className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-green-500/20 transition-shadow"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      View Projects
      <ChevronRight size={16} />
    </motion.button>
  </Link>
  
  <Link to="/contact">
    <motion.button 
      className="px-6 py-3 rounded-lg bg-white/10 text-white font-medium flex items-center gap-2 backdrop-blur-sm hover:bg-white/15 transition-colors"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      Contact Me
    </motion.button>
  </Link>
</div>
          
<div className="flex items-center gap-6 pt-2 justify-center lg:justify-start">
  <a href="https://github.com/swagathreddy" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
    </svg>
  </a>
  <a href="https://linkedin.com/in/swagathreddykasula" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
    </svg>
  </a>
</div>
          
        </motion.div>
      </div>
    </motion.div>
  </div>
  
  {/* Bottom Marquee Text - adjusted position to fill empty space and increased height */}
  <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 overflow-hidden">
    <MarqueeText 
      text="DESIGN WITH EMPATHY • CODE WITH PASSION • INNOVATE WITH PURPOSE" 
      direction="left" 
      opacity={0.08}
      size="text-7xl md:text-8xl lg:text-9xl" 
      speed={50}
    />
  </div>
</section>
      
      
      {/* About Section */}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <p className="text-neutral-400">Full Stack Development, AI/ML, LLM</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Preview */}
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Preview Section */}
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
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-secondary-900">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto px-4"
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