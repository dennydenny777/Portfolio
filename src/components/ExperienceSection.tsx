import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'CDIT',
      location: 'Thiruvananthapuram, Kerala',
      period: 'January 2025 - March 2025',
      description:
        'Developed mobile and web applications with security-first approach and implemented secure authentication systems.',
      color: 'text-blue-400',
    },
    {
      title: 'Graphic Designer',
      company: 'Pure English Academy',
      location: 'Remote',
      period: 'February 2024 - June 2024',
      description:
        'Created visual designs and user interfaces with emphasis on cybersecurity themes and user experience.',
      color: 'text-purple-400',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12 font-mono"
        >
          <span className="text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">
            $ cat experience.log
          </span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 origin-top"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col sm:flex-row items-start mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.4 }}
                className={`w-4 h-4 rounded-full bg-current ${exp.color} shadow-[0_0_20px_currentColor] 
                            border-2 border-current z-10 relative`}
              >
                <div className="absolute -inset-2 border border-current rounded-full animate-ping opacity-30"></div>
              </motion.div>

              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 250 }}
                className="ml-0 sm:ml-16 w-full"
              >
                <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-6 backdrop-blur-sm 
                                hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.1)] 
                                group relative cursor-pointer overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3
                      className={`text-xl font-bold font-mono ${exp.color} group-hover:text-green-400 transition-colors`}
                    >
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-gray-400 text-sm font-mono mt-2 sm:mt-0 group-hover:text-green-400 transition-colors">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex items-center mb-4 text-gray-300">
                    <Building className="h-4 w-4 mr-2" />
                    <span className="font-mono text-sm mr-4">{exp.company}</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="font-mono text-sm">{exp.location}</span>
                  </div>

                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>

                  <div className="mt-4 flex items-center">
                    <div
                      className={`w-2 h-2 rounded-full bg-current ${exp.color} mr-2 animate-pulse group-hover:animate-ping`}
                    ></div>
                    <span className="font-mono text-xs text-gray-500 group-hover:text-green-400 transition-colors">
                      EXPERIENCE_LOADED
                    </span>
                  </div>

                  {/* Scan effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent 
                                  -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg pointer-events-none" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
