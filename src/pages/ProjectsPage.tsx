import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Extract unique categories from projects
  const categories = ['all', ...new Set(projects.flatMap(project => project.skills))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.skills.includes(filter));

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
            className="text-center"
          >
            <motion.h1
              className="heading-xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
               <span className="text-white">My</span> <span className="text-primary-500">Projects</span>
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              A showcase of my work, featuring case studies and detailed project analyses.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-spacing bg-neutral-950">
        <div className="container-custom">
          <SectionTitle
            subtitle="CASE STUDIES"
            title="Explore My Projects"
            alignment="center"
          />
          
          {/* Filter Categories */}
          <motion.div
            className="mb-12 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.slice(0, 8).map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
                onClick={() => setFilter(category)}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-neutral-400">No projects found for this filter.</p>
              <button
                className="mt-4 btn-outline"
                onClick={() => setFilter('all')}
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;