import React from 'react';
import { Shield, Code, Palette, Terminal } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 font-mono">
          <span className="text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">
            $ whoami
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gray-900/80 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,65,0.1)] hover:border-green-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] group">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="font-mono text-sm text-gray-300 mb-4">
                <span className="text-green-400 group-hover:animate-pulse">root@denny:~$</span> cat about.txt
                <span className="animate-pulse">_</span>
              </div>
              
              <div className="text-gray-300 leading-relaxed font-mono text-sm space-y-2">
                <p className="mb-4">
                  <span className="text-blue-400 animate-pulse">[INFO]</span> MCA Graduate turned Cybersecurity Enthusiast
                </p>
                <p className="mb-4">
                  <span className="text-yellow-400 animate-pulse">[STATUS]</span> Currently preparing for CEH certification
                </p>
                <p className="mb-4">
                  <span className="text-green-400 animate-pulse">[MISSION]</span> Passionate about ethical hacking, penetration testing, and building secure systems
                </p>
                <p className="mb-4">
                  <span className="text-purple-400 animate-pulse">[SKILLS]</span> Full-stack development expertise with a security-first mindset
                </p>
                <p>
                  <span className="text-pink-400 animate-pulse">[GOAL]</span> Bridging the gap between security and development
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            {[
              { icon: Shield, title: 'Security First', color: 'text-green-400', bg: 'bg-green-500/10' },
              { icon: Code, title: 'Full Stack', color: 'text-blue-400', bg: 'bg-blue-500/10' },
              { icon: Terminal, title: 'Ethical Hacking', color: 'text-purple-400', bg: 'bg-purple-500/10' },
              { icon: Palette, title: 'UI/UX Design', color: 'text-pink-400', bg: 'bg-pink-500/10' }
            ].map((item, index) => (
              <div key={index} className={`${item.bg} border border-gray-700 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] group cursor-pointer transform hover:scale-105`}>
                <item.icon className={`h-8 w-8 mx-auto mb-3 ${item.color} group-hover:animate-pulse`} />
                <h3 className={`font-bold font-mono text-sm ${item.color} group-hover:text-green-400 transition-colors`}>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;