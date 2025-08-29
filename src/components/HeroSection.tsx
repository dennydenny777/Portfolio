import React from 'react';
import { ChevronDown, Lock, Unlock, Terminal, Shield, FileArrowDown } from 'lucide-react';
import GlitchText from './GlitchText';

const HeroSection: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsUnlocked(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Scanlines effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent animate-pulse pointer-events-none" />
      
      {/* Floating cyber elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Shield className="h-8 w-8 text-green-400/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Terminal className="h-6 w-6 text-blue-400/30" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <Lock className="h-10 w-10 text-purple-400/30" />
        </div>
      </div>
      
      <div className="text-center z-10 px-4 sm:px-6 lg:px-8">
        {/* Animated lock/unlock icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {isUnlocked ? (
              <Unlock className="h-16 w-16 text-green-400 animate-pulse drop-shadow-[0_0_20px_rgba(0,255,65,0.8)]" />
            ) : (
              <Lock className="h-16 w-16 text-red-400 animate-pulse drop-shadow-[0_0_20px_rgba(255,0,65,0.8)]" />
            )}
            <div className="absolute -inset-4 border-2 border-green-400/30 rounded-full animate-ping" />
          </div>
        </div>
        
        <div className="mb-6">
          {/* Identity verification */}
          <div className="mb-6 p-4 bg-gray-900/80 border border-green-500/50 rounded-lg backdrop-blur-sm max-w-md mx-auto">
            <div className="flex items-center justify-center mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
              <span className="font-mono text-sm text-green-400">IDENTITY_VERIFIED</span>
            </div>
            <p className="font-mono text-xs text-gray-300">
{'>'} Access Granted: Denny Jobin Daniel ✅
            </p>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 font-mono">
            <span className="text-white">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Denny Jobin Daniel
            </span>
          </h1>
          
          <div className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <GlitchText 
              text="Cybersecurity Enthusiast"
              className="text-green-400 font-mono drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]"
            />
          </div>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 font-mono">
            <span className="text-blue-400">Full Stack Developer</span> | 
            <span className="text-purple-400"> App Developer</span> | 
            <span className="text-pink-400"> UI/UX Designer</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] font-mono group">
              <span className="mr-2">&gt;</span>
              <a href="#about">explore --portfolio</a>
              <Terminal className="inline-block ml-2 h-4 w-4 group-hover:animate-pulse" />
            </button>
            <button className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-bold rounded-lg hover:bg-blue-500 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] font-mono group">
              <span className="mr-2">&gt;</span>
              <a href="#contact">init contact</a>
              <Shield className="inline-block ml-2 h-4 w-4 group-hover:animate-spin" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="h-8 w-8 text-green-400" />
      </div>
    </section>
  );
};

export default HeroSection;