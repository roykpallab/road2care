import React from 'react';

interface LogoProps {
  className?: string;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', height = 50 }) => {
  return (
    <div className={`logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <img
        src="./images/road2care-logo-transparent.png"
        alt="Road2Care - Empowering Abilities. Enriching Lives"
        style={{
          height: `${height}px`,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
        }}
        onError={(e) => {
          // Fallback to non-transparent version if needed
          const target = e.target as HTMLImageElement;
          if (target.src.includes('road2care-logo-transparent.png')) {
            target.src = './images/road2care-logo.png';
          }
        }}
      />
    </div>
  );
};
