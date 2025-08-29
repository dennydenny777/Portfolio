import React from 'react';
import {
  Shield,
  Terminal,
  Network,
  Lock,
  Code,
  Database,
  Smartphone,
  Figma,
  type LucideIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  icon: LucideIcon;
  level: number;
};

const SkillsSection: React.FC = () => {
  const cyberSkills: Skill[] = [
    { name: 'Linux Administration', icon: Terminal, level: 90 },
    { name: 'Network Security', icon: Network, level: 85 },
    { name: 'Penetration Testing', icon: Shield, level: 80 },
    { name: 'Ethical Hacking', icon: Lock, level: 85 },
    { name: 'CEH Preparation', icon: Shield, level: 75 }
  ];

  const devSkills: Skill[] = [
    { name: 'Full Stack Development', icon: Code, level: 90 },
    { name: 'Database Design', icon: Database, level: 85 },
    { name: 'Mobile Development', icon: Smartphone, level: 80 },
    { name: 'UI/UX Design', icon: Figma, level: 85 }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative overflow-hidden">
      {/* subtle background glow behind content */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -left-32 -top-24 w-[600px] h-[600px] rounded-full bg-green-500/6 blur-3xl animate-[pulse_6s_infinite]" />
        <div className="absolute -right-32 -bottom-24 w-[500px] h-[500px] rounded-full bg-blue-500/6 blur-3xl animate-[pulse_6s_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 font-mono">
          <motion.span
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)] inline-block"
          >
            $ cat skills.json
          </motion.span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Cybersecurity */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            whileHover={{ translateY: -4 }}
            className="bg-gray-900/80 border border-green-500/30 rounded-lg p-8 backdrop-blur-sm shadow-[0_0_25px_rgba(0,255,65,0.12)] hover:shadow-[0_0_40px_rgba(0,255,65,0.2)] transition-shadow duration-400"
          >
            <h3 className="text-2xl font-bold mb-6 font-mono text-green-400 flex items-center">
              <Shield className="mr-3 h-6 w-6 animate-pulse" />
              Cybersecurity Arsenal
            </h3>

            <div className="space-y-6">
              {cyberSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.12, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group"
                    aria-label={`${skill.name} ${skill.level}%`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Icon className="h-5 w-5 text-green-400 mr-3 group-hover:scale-110 transition-transform" />
                        <span className="font-mono text-gray-300">{skill.name}</span>
                      </div>
                      <span className="font-mono text-green-400 text-sm">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full shadow-[0_0_15px_rgba(0,255,65,0.6)] group-hover:shadow-[0_0_25px_rgba(0,255,65,0.9)] transition-shadow duration-300"
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Development */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            whileHover={{ translateY: -4 }}
            className="bg-gray-900/80 border border-blue-500/30 rounded-lg p-8 backdrop-blur-sm shadow-[0_0_25px_rgba(0,212,255,0.12)] hover:shadow-[0_0_40px_rgba(0,212,255,0.2)] transition-shadow duration-400"
          >
            <h3 className="text-2xl font-bold mb-6 font-mono text-blue-400 flex items-center">
              <Code className="mr-3 h-6 w-6 animate-pulse" />
              Development Stack
            </h3>

            <div className="space-y-6">
              {devSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.12, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group"
                    aria-label={`${skill.name} ${skill.level}%`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Icon className="h-5 w-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                        <span className="font-mono text-gray-300">{skill.name}</span>
                      </div>
                      <span className="font-mono text-blue-400 text-sm">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full shadow-[0_0_15px_rgba(0,212,255,0.6)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.9)] transition-shadow duration-300"
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
