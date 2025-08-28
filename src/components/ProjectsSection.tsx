import React from 'react';
import { ExternalLink, Github, Shield, Globe, Smartphone, Users } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Insight - Police Case Tracking',
      category: 'cybersecurity',
      description: 'Comprehensive police case management system with secure authentication and real-time tracking capabilities',
      tech: ['MERN Stack', 'JWT Auth', 'MongoDB', 'Security'],
      icon: Shield,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      title: 'Rescue Wings App',
      category: 'mobile',
      description: 'Disaster response mobile application with GPS tracking, emergency alerts and real-time communication',
      tech: ['Java', 'Android', 'Firebase', 'Maps API'],
      icon: Smartphone,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      title: 'Online Auction System',
      category: 'fullstack',
      description: 'Complete auction platform with real-time bidding, secure user authentication, and payment integration',
      tech: ['PHP', 'MySQL', 'JavaScript', 'PayPal API'],
      icon: Globe,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },

  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 font-mono">
          <span className="text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">
            $ ls projects/
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${project.bgColor} border ${project.borderColor} rounded-lg p-6 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(0,255,65,0.1)] transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:rotate-1`}
            >
              {/* Terminal header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <project.icon className={`h-5 w-5 ${project.color}`} />
              </div>
              
              <div className="font-mono text-xs text-gray-400 mb-2 group-hover:text-green-400 transition-colors">
                root@denny:~$ project run {project.category}
              </div>
              
              <h3 className={`text-xl font-bold mb-3 font-mono ${project.color} group-hover:text-white transition-colors`}>
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-gray-800 text-xs rounded font-mono text-gray-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <button className={`flex items-center px-3 py-2 text-xs font-mono ${project.color} border border-current rounded hover:bg-current hover:text-black transition-all duration-300`}>
                  <Github className="h-4 w-4 mr-1" />
                  Source
                </button>
                <button className={`flex items-center px-3 py-2 text-xs font-mono ${project.color} border border-current rounded hover:bg-current hover:text-black transition-all duration-300 group-hover:animate-pulse`}>
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Launch
                </button>
              </div>
              
              {/* Glitch effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-lg pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;