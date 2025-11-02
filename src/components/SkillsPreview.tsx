import React from 'react';
import { motion } from 'framer-motion';

const SkillsPreview: React.FC = () => {
  const skills = {
    technical: [
      { name: 'Full Stack Development', icon: '💻' },
      { name: 'AI/ML', icon: '🤖' },
      { name: 'Cloud', icon: '☁️' },
      { name: 'Database Management', icon: '🗄️' },
    ],
    languages: [
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'Java', icon: '☕' },
      { name: 'SQL', icon: '📊' },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(skills).map(([category, items], categoryIndex) => (
        <div key={category} className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4 capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-neutral-800/50 backdrop-blur-sm p-4 rounded-lg border border-neutral-700 hover:border-primary-500 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <div className="font-medium text-white">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default SkillsPreview;