import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import type { FreelanceProject } from '../data/freelanceProjects';

interface FreelanceProjectCardProps {
  project: FreelanceProject;
  index: number;
}

const FreelanceProjectCard: React.FC<FreelanceProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-neutral-800/50 backdrop-blur-sm h-full border border-neutral-700 hover:border-secondary-500/50 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Header with gradient accent */}
      <div className="relative bg-gradient-to-br from-secondary-900/40 to-primary-900/40 px-6 py-5 border-b border-neutral-700">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg bg-secondary-500/20 flex items-center justify-center">
            <Briefcase className="text-secondary-400" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-700/80 text-neutral-300">
                {project.type}
              </span>
              <span className="flex items-center gap-1 text-xs text-neutral-400">
                <MapPin size={12} />
                {project.region}
              </span>
            </div>
          </div>
        </div>
        <p className="text-neutral-400 text-sm">{project.description}</p>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-sm font-semibold text-white mb-3">Key Deliverables</h4>
        <ul className="space-y-2 mb-4">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-neutral-300 text-sm">
              <span className="text-secondary-500 mt-0.5">▸</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-700">
          {project.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-secondary-900/50 text-secondary-300 border border-secondary-500/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FreelanceProjectCard;
