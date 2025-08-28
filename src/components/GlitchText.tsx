import React, { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        // Start glitch effect occasionally
        const glitchInterval = setInterval(() => {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 200);
        }, 3000);
        return () => clearInterval(glitchInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [text]);

  return (
    <div className={`relative ${className}`}>
      <span className={`${isGlitching ? 'animate-pulse' : ''}`}>
        {displayText}
      </span>
      {isGlitching && (
        <span className="absolute top-0 left-0 text-red-500 opacity-70 -translate-x-0.5">
          {displayText}
        </span>
      )}
    </div>
  );
};

export default GlitchText;