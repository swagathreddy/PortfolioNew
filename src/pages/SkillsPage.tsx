import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const SkillsPage: React.FC = () => {
  const skills = {
    machinelearning: [
      { name: 'LLM (DeepSeek etc.)', icon: '🧠' },
      { name: 'Diffusion Models', icon: '🌀' },
      { name: 'Image Generation', icon: '🖼️' },
      { name: 'NLP(Spacy, FuzzyWuzzy)', icon: '📝' },
      { name: 'Matplotlib', icon: '📊' },
      { name: 'Seaborn', icon: '📈' },
      { name: 'TensorFlow', icon: '🧮' },
    ],
    programming: [
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'C', icon: '©️' },
      { name: 'Django', icon: '🌐' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'MySQL', icon: '🗄️' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MERN Stack', icon: '🔄' },
    ],
    
    tools: [
      { name: 'Git', icon: '📂' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Railway', icon: '🚄' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Postman', icon: '📮' },
      { name: 'RESTful APIs', icon: '🔄' },
    ],
    professional: [
      { name: 'Problem-solving', icon: '🧩' },
      { name: 'Team Leadership', icon: '👥' },
      { name: 'Project Management', icon: '📋' },
      { name: 'Analytical Thinking', icon: '🔍' },
    ],
  };

  const programmingRef = useRef(null);
  const mlRef = useRef(null);
  const toolsRef = useRef(null);
  const professionalRef = useRef(null);
  
  const programmingInView = useInView(programmingRef, { once: true, amount: 0.3 });
  const mlInView = useInView(mlRef, { once: true, amount: 0.3 });
  const toolsInView = useInView(toolsRef, { once: true, amount: 0.3 });
  const professionalInView = useInView(professionalRef, { once: true, amount: 0.3 });

  // Animated background particles
  const particles = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-r from-neutral-900 to-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#5d5dff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
        
        {/* Animated floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary-500"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100],
                x: [0, Math.random() * 50 - 25],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <motion.h1
              className="heading-xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
               <span className="text-white">My</span> <span className="text-primary-500">Skills</span>
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              A comprehensive overview of my technical capabilities and expertise.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-neutral-950 relative overflow-hidden">
        <div className="container-custom">
          <SectionTitle
            subtitle="EXPERTISE"
            title="Technical Proficiency"
            alignment="center"
          />
          
          {/* Dynamic skills visualization */}
          <div className="h-[500px] w-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-neutral-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f6_0,transparent_70%)] opacity-20"></div>
            
            {/* Decorative grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(90,90,90,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(90,90,90,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            
            {/* Animated skill bubbles */}
            <div className="absolute inset-0">
              {Object.values(skills).flat().map((skill, index) => (
                <motion.div
                  key={index}
                  className="absolute rounded-full flex items-center justify-center bg-gradient-to-br from-neutral-800/90 to-neutral-900/90 backdrop-blur-md border border-neutral-700/50 shadow-xl overflow-hidden group"
                  style={{
                    width: `${80 + Math.random() * 60}px`,
                    height: `${80 + Math.random() * 60}px`,
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: [0, Math.random() * 30 - 15],
                    y: [0, Math.random() * 30 - 15],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: index * 0.1,
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    zIndex: 10,
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)'
                  }}
                >
                  <div className="flex flex-col items-center justify-center text-center p-2">
                    <div className="text-2xl group-hover:text-3xl transition-all duration-300">{skill.icon}</div>
                    <motion.span 
                      className="text-xs text-neutral-300 opacity-0 group-hover:opacity-100 absolute -bottom-6"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      {skill.name}
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Center glow effect */}
            <motion.div 
              className="absolute inset-0 pointer-events-none"
              animate={{ 
                background: [
                  'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at center, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            
            <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-black/50 backdrop-blur-sm p-6 rounded-lg"
              >
                <div className="text-center">
                  <p className="text-primary-400 text-l mb-2">Scroll down for detailed skills breakdown</p>
            
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section ref={mlRef} className="section-spacing bg-neutral-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 border-t-8 border-l-8 border-purple-500 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-b-8 border-r-8 border-purple-700 rounded-br-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <SectionTitle
            subtitle="MACHINE LEARNING"
            title="AI & Data Science"
          />
          
          {/* Updated grid: 2 columns on XS screens, 2 on SM, 3 on LG */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.machinelearning.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-neutral-700 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={mlInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: '#8b5cf6' }}
              >
                <div className="absolute -right-8 -bottom-8 opacity-5 text-6xl sm:text-8xl group-hover:opacity-10 group-hover:scale-110 transition-all duration-300">
                  {skill.icon}
                </div>
                <div className="text-2xl sm:text-4xl mb-2 sm:mb-4 relative z-10">{skill.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white relative z-10">{skill.name}</h3>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-purple-500/10 group-hover:to-purple-500/5 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={programmingRef} className="section-spacing bg-neutral-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute -inset-1/2 rotate-12 w-full h-full border-8 border-primary-500 rounded-full"></div>
          <div className="absolute -inset-1/4 -rotate-12 w-full h-full border-8 border-primary-700 rounded-full"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <SectionTitle
            subtitle="PROGRAMMING"
            title="Languages & Frameworks"
          />
          
          {/* Updated grid: 2 columns on XS screens, 2 on SM, 3 on LG */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.programming.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-neutral-700 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={programmingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: '#0ea5e9' }}
              >
                <div className="absolute -right-8 -bottom-8 opacity-5 text-6xl sm:text-8xl group-hover:opacity-10 group-hover:scale-110 transition-all duration-300">
                  {skill.icon}
                </div>
                <div className="text-2xl sm:text-4xl mb-2 sm:mb-4 relative z-10">{skill.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white relative z-10">{skill.name}</h3>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      <section className="section-spacing bg-neutral-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
            <div ref={toolsRef}>
              <SectionTitle
                subtitle="TOOLS"
                title="Development Environment"
              />
              
              {/* Updated grid: 2 columns on XS screens */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {skills.tools.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-neutral-700 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={toolsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, borderColor: '#ec4899' }}
                  >
                    <div className="absolute -right-8 -bottom-8 opacity-5 text-6xl sm:text-8xl group-hover:opacity-10 group-hover:scale-110 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <div className="text-2xl sm:text-4xl mb-2 sm:mb-4 relative z-10">{skill.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-white relative z-10">{skill.name}</h3>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/0 to-pink-500/0 group-hover:from-pink-500/5 group-hover:via-pink-500/10 group-hover:to-pink-500/5 transition-all duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div ref={professionalRef}>
              <SectionTitle
                subtitle="PROFESSIONAL"
                title="Soft Skills"
              />
              
              {/* Updated grid: 2 columns on XS screens */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {skills.professional.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-neutral-700 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={professionalInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, borderColor: '#16a34a' }}
                  >
                    <div className="absolute -right-8 -bottom-8 opacity-5 text-6xl sm:text-8xl group-hover:opacity-10 group-hover:scale-110 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <div className="text-2xl sm:text-4xl mb-2 sm:mb-4 relative z-10">{skill.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-white relative z-10">{skill.name}</h3>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:via-green-500/10 group-hover:to-green-500/5 transition-all duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-spacing bg-neutral-950 relative overflow-hidden">
        {/* Motion lines background effect */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent w-full"
              style={{ top: `${5 + i * 5}%` }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <SectionTitle
            subtitle="CERTIFICATIONS"
            title="Professional Development"
            alignment="center"
          />
          
          {/* Updated grid: 2 columns on XS screens, 2 on MD, 3 on LG */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              "CCNA – Introduction to Networks",
              "AWS Cloud Foundations",
              "MathWorks ML Onramp",
              "Cisco Cybersecurity Essentials",
              "Introduction to MongoDB",
              "NPTEL – Programming in Java"
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-neutral-700 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 10px 30px -10px rgba(14, 165, 233, 0.3)',
                  borderColor: '#0ea5e9'
                }}
              >
                <motion.div 
                  className="absolute -right-8 -bottom-8 text-6xl sm:text-8xl opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-300"
                >
                  🏅
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-800/0 group-hover:from-primary-500/5 group-hover:to-primary-800/10 transition-all duration-300"
                />
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-4 relative z-10 group-hover:text-primary-400 transition-all duration-300">🏅</div>
                <h3 className="text-sm sm:text-lg font-semibold text-white mb-2 relative z-10 group-hover:text-primary-300 transition-all duration-300">{cert}</h3>
                <motion.div
                  className="w-0 h-1 bg-gradient-to-r from-primary-500 to-primary-400 group-hover:w-full transition-all duration-500 mt-2"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;