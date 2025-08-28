import React from 'react';

const ScanlineEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Scanlines */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            #00ff41 2px,
            #00ff41 4px
          )`
        }}
      />
      
      {/* Moving scanline */}
      <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-20 animate-pulse" 
           style={{ 
             animation: 'scanline 3s linear infinite',
             background: 'linear-gradient(90deg, transparent, #00ff41, transparent)'
           }} 
      />
      
      <style jsx>{`
        @keyframes scanline {
          0% { top: -2px; }
          100% { top: 100vh; }
        }
      `}</style>
    </div>
  );
};

export default ScanlineEffect;