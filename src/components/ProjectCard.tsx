import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    skills: string[];
    demoLink: string;
    githubLink?: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-neutral-800/50 backdrop-blur-sm h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Project Image with Overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-transparent opacity-70" />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          
          <div className="flex space-x-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label={`View ${project.title} code on GitHub`}
              >
                <Github size={20} />
              </a>
            )}
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label={`Visit ${project.title} live demo`}
            >
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
        
        <p className="text-neutral-400 mb-4 line-clamp-2">{project.description}</p>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-primary-900/50 text-primary-300"
            >
              {skill}
            </span>
          ))}
        </div>
        
        {/* View Details Link */}
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center text-primary-400 font-medium hover:text-primary-300 transition-colors"
        >
          View Case Study
          <motion.span
            className="ml-1"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;