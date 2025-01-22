import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cursor } from './components/Cursor';
import { Section } from './components/Section';
import TypewriterComponent from 'typewriter-effect';
import { CertificationSwiper } from './components/CertificationSwiper';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white cursor-none">
      <Cursor />
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-light"
          >
            Aryaman Singh
          </motion.h1>
          <nav className="hidden md:flex gap-8">
            {['about', 'education', 'experience', 'projects', 'contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-wider"
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 bg-black z-30 md:hidden flex items-center justify-center"
          >
            <nav className="flex flex-col gap-8 text-center">
              {['about', 'education', 'experience', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-xl mb-4 font-light"
            >
              Hi, I am Aryaman Singh
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-light mb-8"
            >
              <TypewriterComponent
                options={{
                  strings: [
                    'Data Scientist',
                    'Data Analyst',
                    'Machine Learning Engineer',
                    'Business Intelligence Analyst'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-6"
            >
              {[
                { icon: Github, href: 'https://github.com/aryamansingh01' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/aryaman-singh-21498620a/' },
                { icon: Mail, href: 'mailto:arsi9905@colorado.edu' }
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" className="bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {[
              {
                degree: "Master of Science in Data Science",
                school: "University of Colorado, Boulder",
                location: "Boulder, CO",
                date: "2023 - 2025",
                details: [
                  "Specialization in Data Science and Machine Learning",
                  "Relevant Coursework: Data Analysis, Database Management, Algorithms",
                  "Hands-on Projects in ETL Pipelines and Data Visualization"
                ]
              },
              {
                degree: "Bachelor of Computer Applications",
                school: "BIT Mesra",
                location: "Mesra, Jharkhand",
                date: "2020 - 2023",
                details: [
                  "First Class with Distinction",
                  "Relevant Coursework: Algorithms, Data Structures, Software Engineering",
                  "Skills Gained: Python, SQL, Statistical Analysis"
                ]
              }
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-8 border-l border-gray-800"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-blue-400" />
                <h3 className="text-xl mb-2">{edu.degree}</h3>
                <p className="text-gray-400 mb-2">{edu.school}</p>
                <p className="text-gray-400 mb-4">{edu.date} | {edu.location}</p>
                <ul className="text-gray-300 space-y-2">
                  {edu.details.map((detail, j) => (
                    <li key={j}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {[
              {
                title: "Data Scientist Intern",
                company: "Hermes Infotech",
                date: "January 2022 – July 2023 ",
                location: "Remote",
                description: [
                  "Constructed time-series forecasting and classification models with scikit-learn, increasing operational efficiency by approximately 15% across multiple projects.",
                  "Applied advanced statistical analyses to evaluate platform optimizations, projecting a 10% increase in user engagement.",
                  "Implemented personalized recommendation engines, enhancing customer experience and driving higher conversion rates.",
                  "Presented key findings to cross-functional teams, enabling data-driven strategies that improved ROI by 10%."
                ]}[
                title: "Data Analyst Intern",
                company: "Hermes Infotech",
                date: "May 2022 – December 2022 ",
                location: "Remote",
                description: [
                  "Aggregated and refined large e-commerce datasets using Python and SQL, resolving data irregularities and cutting manual data management by 20%.",
                  "Designed interactive dashboards with Tableau and Power BI, streamlining real-time reporting and facilitating quicker decision-making for stakeholders.",
                  "Executed A/B testing to pinpoint user engagement factors, steering product refinements and raising user satisfaction."
                ]}[
                title: "Data Analyst Intern",
                company: "NeoDocto",
                date: "Febuary 2022 – April 2022 ",
                location: "Remote",
                description: [
                  "Managed full-cycle data analysis projects, using Python and SQL to successfully deliver insights supporting acquisition and retention strategy improvements",
                  "Collaborated with product and marketing teams to deploy data-driven solutions, improving cross-team communication and project execution"
                ]}
              },
              
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-8 border-l border-gray-800"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-blue-400" />
                <h3 className="text-xl mb-2">{exp.title}</h3>
                <p className="text-gray-400 mb-2">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.date} | {exp.location}</p>
                <ul className="text-gray-300 space-y-2">
                  {exp.description.map((desc, j) => (
                    <li key={j}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Customer Churn Prediction Using Apache Spark on Databricks",
                description: "Developed and deployed a scalable data pipeline using Apache Spark on Databricks",
                link: "https://github.com/aryamansingh01?tab=repositories"
              },
              {
                title: "House Price Prediction Using Machine Learning",
                description: "Developed a predictive model using machine learning algorithms to estimate future house prices,",
                link: "https://github.com/aryamansingh01/A-B-Testing-Analysis-for-Measuring-E-Commerce-Website-Redesign-Effectiveness"
              },
              {
                title: "Globall-trade-analytics",
                description: "Conducted comprehensive analysis of global trade data using R",
                link: "https://github.com/aryamansingh01/Globall-trade-analytics-tableau"
              },
              {
                title: "Exploratory Data Analysis of Spotify Top Hits (2010-2022)",
                description: "Analyzed Spotify’s top songs data from 2010 to 2022 to uncover trends in music popularity and listener preference",
                link: "https://github.com/aryamansingh01?tab=repositories"
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-gray-900/50 p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl mb-2 relative z-10">{project.title}</h3>
                <p className="text-gray-400 mb-4 relative z-10">{project.description}</p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition-colors relative z-10"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications" className="bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">Certifications</h2>
          <CertificationSwiper />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-8">Get In Touch</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Currently open to new opportunities. Feel free to reach out!
          </p>
          <motion.a
            href="mailto:arsi9905@colorado.edu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-transparent border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-black transition-all"
          >
            Say Hello
          </motion.a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; Aryaman Singh. All rights reserved </p>
      </footer>
    </div>
  );
}

export default App;
