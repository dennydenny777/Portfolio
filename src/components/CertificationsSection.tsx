import React from 'react';
import { Award, BookOpen, Camera, Users } from 'lucide-react';

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: 'CEH Preparation',
      issuer: 'EC-Council',
      status: 'In Progress',
      icon: Award,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      title: 'Python Programming',
      issuer: 'NPTEL',
      status: 'Certified',
      icon: BookOpen,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'NCC & NSS',
      issuer: 'Government of India',
      status: 'Completed',
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      title: 'Cinematography & Editing',
      issuer: 'Professional Training',
      status: 'Certified',
      icon: Camera,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 font-mono">
          <span className="text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">
            $ ls certifications/
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`${cert.bgColor} border ${cert.borderColor} rounded-lg p-6 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(0,255,65,0.1)] transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:rotate-1`}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Hologram effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              
              {/* ID Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <cert.icon className={`h-6 w-6 ${cert.color} group-hover:animate-spin`} />
              </div>
              
              {/* Certificate Info */}
              <div className="text-center">
                <h3 className={`text-lg font-bold font-mono ${cert.color} mb-2 group-hover:text-white transition-colors`}>
                  {cert.title}
                </h3>
                <p className="text-gray-400 font-mono text-sm mb-2">
                  {cert.issuer}
                </p>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono ${cert.color} border border-current`}>
                  {cert.status}
                </div>
              </div>
              
              {/* Scan effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;