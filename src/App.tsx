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
          date: "May 2022 – July 2023",
          location: "Remote",
          description: [
            "Processed and optimized e-commerce datasets using Python and SQL, automating data validations, and reducing offline data correction efforts by 20%, improving operational efficiency.",
            "Designed real-time interactive dashboard in Tableau/Power BI, reducing stakeholder reporting time by 30% through automated visualization and dynamic filtering.", 
            "Conducted A/B testing using statistical significance analysis (Pandas, SciPy), identifying impactful changes in user engagement, improving click-through rates by 10%.",
            "Analyzed purchase patterns and implemented collaborative filtering-based recommendation mechanism, increasing up selling opportunity by 12%.",
            "Developed data-driven strategies using predictive analytics and machine learning(Scikit-learn), enabling a 10% increase ROI"
          ]
        },
        {
          title: "Data Analyst Intern",
          company: "WNS Global Service Private Limited",
          date: "November 2021 – April 2022",
          location: "Remote",
          description: [
            "Data Cleaning & Anomaly Detection: Conducted extensive data cleaning and outlier analysis on 50K+ customer records using Python (Pandas, NumPy), improving overall data quality and reducing reporting inconsistencies",
            "Automation of A/B Testing: Automated the A/B testing workflow using Statsmodels, reducing manual work, improving reproducibility, and enabling faster iterations on marketing experiments.",
            "Engagement Analytics Dashboard: Created interactive dashboards in Tableau to visualize engagement and churn metrics,insights led to a 25% improvement in customer retention strategy effectiveness.",
            "Exploratory Data Analysis (EDA): Performed detailed exploratory analysis on customer demographics and transaction patterns, uncovering usage trends that effectively guided marketing segmentation strategies.",
            "Collaborative Insight Sharing: Partnered with cross-functional business teams to present findings on behavioral drivers, supporting improved customer journey optimization initiatives.",
            "Documentation & Knowledge Transfer: Documented all critical data wrangling steps and dashboard logic in Confluence, enhancing team-wide accessibility and technical knowledge sharing."
          ]
        }
              
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
            {[{
                title: "AI-Powered Option Pricing & Delta-Hedged Backtesting",
                description: "Neural option pricer (MLP/LSTM/GRU) on minute-level US options (~4K underlyings, since 2012) with leakage-safe training, Black–Scholes benchmarking, and a delta-neutral backtester for execution-aware mispricing trades under realistic frictions.",
                link: "https://github.com/aryamansingh01?tab=repositories"
              },
              {
                title: "Sentiment-Driven Algorithmic Trading System",
                description: "Sentiment-driven algorithmic trading system (Databricks + Delta Lake + FinBERT) on 800+ financial articles and 3 tech stocks, generating 250+ AI-powered trading signals with confidence scores, correlation-based ticker discovery over 7,000+ US equities, and a production-grade backtesting and risk framework for signal validation and portfolio decision support.",
                link: "https://github.com/aryamansingh01?tab=repositories"
              },
              {
                title: "IntelliWealth: AI Powered Portfolio Manager",
                description: "Reinforcement learning-based portfolio optimization engine (PPO + custom Gym + Streamlit) executing 500k+ timestep backtests across 10+ asset portfolios, delivering 21.52% returns with 1.15 Sharpe ratio, 56% alpha over baselines, and real-time risk and allocation analytics for data-driven investment decision support",
                link: "intelliwealth.streamlit.app"
              },
              {
                title: "Customer Segmentation & RFM Analytics Suite",
                description: "Advanced customer segmentation and RFM analysis (Python + clustering) on 300K+ customers with actionable insights, cluster-specific business recommendations, and revenue optimization dashboards.",
                link: "https://github.com/aryamansingh01?tab=repositories"
              },
              {
                title: "MarketLens, a comprehensive S&P 500 intelligence platform",
                description: "End-to-end S&P 500 market intelligence platform (ETL + Power BI) analyzing 501 stocks across 11 sectors with real-time dashboards and risk profiling.",
                link: "https://github.com/aryamansingh01?tab=repositories"
              },
              {
                title: "Portfolio Risk Assessment & Optimization Engine",
                description: "Built a Python-powered analytics engine to optimize portfolio weights, simulate VaR/ES risk metrics, and visualize efficient frontiers for data-driven investment decisions.",
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
