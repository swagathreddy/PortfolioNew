import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Github, Calendar, Clock } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<any | null>(null);
  
  useEffect(() => {
    const foundProject = projects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/projects', { replace: true });
    }
  }, [id, navigate]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-primary-500 border-solid rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-white">Loading project details...</p>
        </div>
      </div>
    );
  }
  
  // Find next and previous projects
  const currentIndex = projects.findIndex(p => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-neutral-900 to-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#5d5dff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center text-white hover:text-primary-400 transition-colors mb-8"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Link>
            
            <motion.h1
              className="heading-xl mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {project.title}
            </motion.h1>
            
            <motion.p
              className="text-xl text-white max-w-3xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {project.description}
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {project.skills.map((skill: string, index: number) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-sm rounded-full bg-primary-900/50 text-white"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Live Demo
                <ArrowUpRight size={16} className="ml-2" />
              </a>
              
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  View Code
                  <Github size={16} className="ml-2" />
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-spacing bg-neutral-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content - Case Study */}
            <div className="lg:col-span-2">
              {/* Project Image */}
              <motion.div
                className="rounded-xl overflow-hidden mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto"
                />
              </motion.div>
              
              {/* Case Study Sections */}
              <div className="space-y-12">
                {/* Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-md text-white mb-6 font-bold text-2xl">Project Overview</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white">{project.overview || project.description}</p>
                  </div>
                </motion.div>
                
                {/* Problem Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-md text-white mb-6 font-bold text-2xl">Problem Statement</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white">{project.problem || "The project addressed a key challenge in this domain, focusing on improving user experience and solving real-world problems through innovative technology solutions."}</p>
                  </div>
                </motion.div>
                
                {/* Research and Insights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-md text-white mb-6 font-bold text-2xl">Research and Insights</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white">{project.research || "Extensive research was conducted to understand user needs and market requirements. Key insights were gathered to inform the development process and ensure the solution effectively addressed the core problems."}</p>
                  </div>
                </motion.div>
                
                {/* Ideation and Process */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-md text-white mb-6 font-bold text-2xl">Ideation and Process</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white">{project.process || "The development process followed an agile methodology, with regular iterations and feedback cycles. Multiple approaches were explored before settling on the final solution, ensuring the best possible outcome."}</p>
                  </div>
                </motion.div>
                
                {/* Final Outcome */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-md text-white mb-6 font-bold text-2xl">Final Outcome</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white">{project.outcome || "The project successfully met its objectives, delivering a robust, user-friendly solution that effectively addresses the identified problems. User feedback has been overwhelmingly positive, confirming the solution's value and effectiveness."}</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Sidebar - Project Info */}
            <div>
              <div className="bg-neutral-900 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>
                
                {/* Project Info List */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm text-white uppercase mb-2 font-semibold">Project Type</h4>
                    <p className="text-white">{project.type || "Full Stack Application"}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-white uppercase mb-2 font-semibold">Timeline</h4>
                    <div className="flex items-center text-white">
                      <Calendar size={16} className="mr-2 text-primary-500" />
                      <span>{project.timeline || "2024"}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-white uppercase mb-2 font-semibold">Duration</h4>
                    <div className="flex items-center text-white">
                      <Clock size={16} className="mr-2 text-primary-500" />
                      <span>{project.duration || "3 months"}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-white uppercase mb-2 font-semibold">Role</h4>
                    <p className="text-white">{project.role || "Full Stack Developer"}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-white uppercase mb-2 font-semibold">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill: string, index: number) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 text-xs rounded-full bg-neutral-800 text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="mt-8 space-y-4">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    Visit Live Site
                    <ArrowUpRight size={16} className="ml-2" />
                  </a>
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline w-full justify-center"
                    >
                      View Source Code
                      <Github size={16} className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* More Projects Navigation */}
      <section className="py-16 bg-neutral-900">
        <div className="container-custom">
          <h2 className="heading-md text-white text-center mb-12">Explore More Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous Project */}
            {prevProject ? (
              <Link 
                to={`/projects/${prevProject.id}`}
                className="group bg-neutral-800 rounded-xl p-6 flex flex-col transition-all duration-300 hover:bg-neutral-700"
              >
                <div className="text-white mb-2">Previous Project</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {prevProject.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {prevProject.skills.slice(0, 3).map((skill: string, index: number) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs rounded-full bg-neutral-700 text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Link>
            ) : (
              <div className="bg-neutral-800/50 rounded-xl p-6 flex flex-col opacity-50">
                <div className="text-white mb-2">Previous Project</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  No Previous Project
                </h3>
              </div>
            )}
            
            {/* Next Project */}
            {nextProject ? (
              <Link 
                to={`/projects/${nextProject.id}`}
                className="group bg-neutral-800 rounded-xl p-6 flex flex-col transition-all duration-300 hover:bg-neutral-700"
              >
                <div className="text-white mb-2">Next Project</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {nextProject.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {nextProject.skills.slice(0, 3).map((skill: string, index: number) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs rounded-full bg-neutral-700 text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Link>
            ) : (
              <div className="bg-neutral-800/50 rounded-xl p-6 flex flex-col opacity-50">
                <div className="text-white mb-2">Next Project</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  No Next Project
                </h3>
              </div>
            )}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;