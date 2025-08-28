import React from 'react';
import { Shield, Terminal, Network, Lock, Code, Database, Smartphone, Figma } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const cyberSkills = [
    { name: 'Linux Administration', icon: Terminal, level: 90 },
    { name: 'Network Security', icon: Network, level: 85 },
    { name: 'Penetration Testing', icon: Shield, level: 80 },
    { name: 'Ethical Hacking', icon: Lock, level: 85 },
    { name: 'CEH Preparation', icon: Shield, level: 75 }
  ];

  const devSkills = [
    { name: 'Full Stack Development', icon: Code, level: 90 },
    { name: 'Database Design', icon: Database, level: 85 },
    { name: 'Mobile Development', icon: Smartphone, level: 80 },
    { name: 'UI/UX Design', icon: Figma, level: 85 }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 font-mono">
          <span className="text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">
            $ cat skills.json
          </span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Cybersecurity Skills */}
          <div className="bg-gray-900/80 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 font-mono text-green-400 flex items-center">
              <Shield className="mr-3 h-6 w-6" />
              Cybersecurity Arsenal
            </h3>
            
            <div className="space-y-4">
              {cyberSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <skill.icon className="h-5 w-5 text-green-400 mr-3" />
                      <span className="font-mono text-gray-300">{skill.name}</span>
                    </div>
                    <span className="font-mono text-green-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(0,255,65,0.5)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Development Skills */}
          <div className="bg-gray-900/80 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 font-mono text-blue-400 flex items-center">
              <Code className="mr-3 h-6 w-6" />
              Development Stack
            </h3>
            
            <div className="space-y-4">
              {devSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <skill.icon className="h-5 w-5 text-blue-400 mr-3" />
                      <span className="font-mono text-gray-300">{skill.name}</span>
                    </div>
                    <span className="font-mono text-blue-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(0,212,255,0.5)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;