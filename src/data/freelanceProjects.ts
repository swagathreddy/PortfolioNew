export interface FreelanceProject {
  id: string;
  title: string;
  description: string;
  region: string;
  type: string;
  highlights: string[];
  skills: string[];
}

export const freelanceProjects: FreelanceProject[] = [
  {
    id: 'freelance-it-consulting-1',
    title: 'IT Consulting Platform',
    description: 'Full-stack web application for an Australian IT consulting client. Built and delivered end-to-end with a focus on scalability, SEO, and seamless user experience.',
    region: 'Australia',
    type: 'IT Consulting Website',
    highlights: [
      'Deployed and managed with custom domain and end-to-end setup',
      'Implemented comprehensive SEO optimization for search visibility',
      'Workflow automation for email notifications and payment gateway integrations'
    ],
    skills: ['Full Stack', 'Vercel', 'Custom Domains', 'SEO', 'Workflow Automation', 'Payment Integration']
  },
  {
    id: 'freelance-it-consulting-2',
    title: 'IT Consulting Web Portal',
    description: 'Enterprise-grade web platform for an Australian IT consulting client. Delivered complete deployment lifecycle with production-ready infrastructure and integrations.',
    region: 'Australia',
    type: 'IT Consulting Website',
    highlights: [
      'End-to-end deployment and management with custom domains',
      'SEO strategy and implementation for improved online presence',
      'Email notification workflows and payment gateway integrations'
    ],
    skills: ['Full Stack', 'Deployment', 'SEO', 'Automation', 'Payment Gateway', 'Email Workflows']
  }
];
