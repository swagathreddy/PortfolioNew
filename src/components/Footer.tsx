import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, PhoneOutgoing } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/swagathreddykasula/',
      ariaLabel: 'Visit LinkedIn profile',
    },
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/swagathreddy',
      ariaLabel: 'Visit GitHub profile',
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:swagathreddy128@gmail.com',
      ariaLabel: 'Send an email',
    },
    {
      name: 'Phone',
      icon: <PhoneOutgoing size={20} />,
      url: 'tel:+916281116923',
      ariaLabel: 'Call phone number',
    },
  ];

  const footerLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Projects', url: '/projects' },
    { name: 'Skills', url: '/skills' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <footer className="bg-neutral-900/80 backdrop-blur-md border-t border-neutral-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold text-primary-500">
              SWAGATH<span className="text-white">REDDY</span>
            </Link>
            <p className="mt-4 text-neutral-400 max-w-md">
              Full Stack Developer specializing in crafting innovative solutions with expertise in AI and Machine Learning.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.url}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="p-2 bg-neutral-800 text-neutral-400 rounded-full hover:bg-primary-500 hover:text-white transition-all"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <a 
              href="mailto:swagathreddy128@gmail.com"
              className="text-neutral-400 hover:text-primary-400 transition-colors block mb-2"
            >
              swagathreddy128@gmail.com
            </a>
            <a 
              href="tel:+916281116923"
              className="text-neutral-400 hover:text-primary-400 transition-colors block"
            >
              +91-6281116923
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
          <p>&copy; {currentYear} Swagath Reddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;