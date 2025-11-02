import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import { Award, School, Briefcase, Calendar } from 'lucide-react';
import profile from '../static/image.jpg';
const AboutPage: React.FC = () => {
  const education = [
    {
      degree: "B.Tech, Information Technology",
      institution: "Anurag University",
      period: "2022–2026",
      gpa: "CGPA: 9.19",
      location: "Hyderabad, India",
      icon: <School className="text-primary-500" size={24} />
    },
    {
      degree: "HSC, Mathematics, Physics, & Chemistry",
      institution: "Narayana College",
      period: "2020-2022",
      gpa: "GPA: 9.6",
      icon: <School className="text-primary-500" size={24} />
    },
    {
      degree: "SSC",
      institution: "Rankers School",
      period: "2020",
      gpa: "GPA: 10.0",
      icon: <School className="text-primary-500" size={24} />
    }
  ];

  const achievements = [
    {
      title: "Core Member",
      organization: "GDSC, Anurag University",
      period: "2023-24",
      description: [
        "Demonstrated ownership by leading cross-functional teams to deliver 10+ successful tech events, driving 40% increase in engagement",
        "Raised the bar by mentoring 50+ students in web development, achieving 85% project completion rate"
      ],
      icon: <Briefcase className="text-primary-500" size={24} />
    },
    {
      title: "Hackathon Winner",
      organization: "VIVITSU 2024: Best Agri-Tech Web Solution",
      period: "2024",
      description: [
        "Delivered results by leading team to first place among 100+ teams, developing agricultural solution",
        "Implemented full-stack application using Django and PostgreSQL, achieving 95% user satisfaction"
      ],
      icon: <Award className="text-primary-500" size={24} />
    }
  ];

  const certifications = [
    "Salesforce – Agentforce Specialist Certification",
    "CCNA – Introduction to Networks",
    "AWS Cloud Foundations",
    "MathWorks ML Onramp",
    "Cisco Cybersecurity Essentials",
    "Introduction to MongoDB",
    "NPTEL – Programming in Java"
  ];

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
             <span className="text-white">About</span> <span className="text-primary-500">Me</span>
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Full Stack Developer & AI Integration Specialist with hands-on experience in building scalable, automated, and cloud-native software systems.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="section-spacing bg-neutral-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="PROFESSIONAL SUMMARY"
                title="Full Stack Developer & AI Integration Specialist"
              />
              <div className="space-y-6 text-neutral-300">
                <p>Final-year B.Tech IT student with strong computer science fundamentals and hands-on experience in building scalable, automated, and cloud-native software systems. Skilled in full-stack development, workflow orchestration, and AI-driven integrations.</p>
                <p>Passionate about creating reliable, distributed systems that improve connectivity, automation, and operational efficiency at scale. Experienced in developing production-grade applications using React, TypeScript, Node.js, and Django, with expertise in LLM integration, NLP, and workflow automation tools like n8n and LangGraph.</p>
                <p>My technical expertise spans the full software development lifecycle—from architecting microservices and RESTful APIs to implementing workflow orchestration and AI-powered features. I specialize in building systems that handle high concurrency, ensure fault tolerance, and leverage cloud infrastructure for scalable deployments.</p>
                <p>Beyond technical skills, I value leadership and collaboration. As a core member of GDSC at Anurag University and through freelance work, I've delivered impactful solutions that demonstrate my commitment to using technology to make a meaningful difference.</p>
              </div>
              <div className="mt-8 flex gap-4">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link to="/projects" className="btn-outline">
                  View Projects
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden relative bg-gradient-to-br from-primary-900/20 to-secondary-900/20 border border-neutral-800">
              <div className="absolute inset-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-4">
                    <img
                      src={profile}
                      alt="Personalized"
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-neutral-300">This is your personalized about section</p>
                </div>
              </div>
            </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-5 right-10 bg-primary-900/80 backdrop-blur-sm p-4 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              >
                <span className="text-4xl">🚀</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-5 -left-5 bg-secondary-900/80 backdrop-blur-sm p-4 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <span className="text-4xl">🌟</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Achievements Section */}
      <section className="section-spacing bg-neutral-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education Timeline */}
            <div>
              <SectionTitle
                subtitle="EDUCATION"
                title="Academic Background"
              />
              
              <div className="space-y-8 relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-neutral-700"></div>
                
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-16"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center border-4 border-neutral-900">
                      {item.icon}
                    </div>
                    
                    <div className="bg-neutral-800 rounded-lg p-6 hover:shadow-lg hover:shadow-primary-900/10 transition-all duration-300">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                        <div className="flex items-center text-neutral-400 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {item.period}
                        </div>
                      </div>
                      <p className="text-neutral-300 mb-1">{item.institution}</p>
                      {item.location && <p className="text-neutral-400 text-sm mb-1">{item.location}</p>}
                      <p className="text-primary-400 font-medium">{item.gpa}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Achievements */}
            <div>
              <SectionTitle
                subtitle="ACHIEVEMENTS"
                title="Professional Milestones"
              />
              
              <div className="space-y-8 relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-neutral-700"></div>
                
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-16"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center border-4 border-neutral-900">
                      {item.icon}
                    </div>
                    
                    <div className="bg-neutral-800 rounded-lg p-6 hover:shadow-lg hover:shadow-primary-900/10 transition-all duration-300">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <div className="flex items-center text-neutral-400 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {item.period}
                        </div>
                      </div>
                      <p className="text-neutral-300 mb-3">{item.organization}</p>
                      <ul className="space-y-2">
                        {item.description.map((desc, i) => (
                          <li key={i} className="text-neutral-400 flex">
                            <span className="text-primary-500 mr-2">•</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="section-spacing bg-neutral-950">
        <div className="container-custom">
          <SectionTitle
            subtitle="CERTIFICATIONS & ACTIVITIES"
            title="Professional Development"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-6 border border-neutral-700 hover:border-primary-500 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-4">🏅</div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert}</h3>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Extracurricular Activities</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-neutral-800 rounded-full text-neutral-300">Badminton</span>
              <span className="px-4 py-2 bg-neutral-800 rounded-full text-neutral-300">Amateur Artist</span>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-secondary-900">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-white mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-lg text-white/80 mb-8">
              Ready to collaborate on your next project? I'm excited to bring my skills and expertise to the table.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-900 hover:bg-neutral-100">
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;