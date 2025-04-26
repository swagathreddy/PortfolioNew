import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  alignment = 'left',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClasses[alignment]} ${className}`}>
      {subtitle && (
        <motion.p
          className="text-primary-500 font-semibold text-sm tracking-wider uppercase mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        className="heading-lg text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="w-20 h-1 bg-primary-500 mt-4"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 80 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        style={{ 
          marginLeft: alignment === 'center' ? 'auto' : undefined,
          marginRight: alignment === 'center' ? 'auto' : undefined 
        }}
      />
    </div>
  );
};

export default SectionTitle;