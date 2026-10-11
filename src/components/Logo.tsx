import React from 'react';

interface LogoProps {
  className?: string;
  height?: number;
  variant?: 'default' | 'badge' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ className = '', height = 50, variant = 'default' }) => {
  if (variant === 'badge') {
    return (
      <div
        className={`logo-badge-wrap ${className}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          padding: '8px 16px',
          borderRadius: '12px',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
        }}
      >
        <img
          src="./images/road2care-logo-hd.png"
          srcSet="./images/road2care-logo-hd.png 1x, ./images/road2care-logo-4k.png 2x"
          alt="Road 2 Care Pty Ltd - Empowering Abilities. Enriching Lives"
          style={{
            height: `${height}px`,
            width: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.includes('road2care-logo-hd.png')) {
              target.src = './images/road2care-logo.png';
            }
          }}
        />
      </div>
    );
  }

  if (variant === 'white') {
    return (
      <div className={`logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
        <img
          src="./images/road2care-logo-white-hd.png"
          alt="Road 2 Care Pty Ltd - Empowering Abilities. Enriching Lives"
          style={{
            height: `${height}px`,
            width: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>
    );
  }

  return (
    <div className={`logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <img
        src="./images/road2care-logo-transparent.png"
        alt="Road 2 Care Pty Ltd - Empowering Abilities. Enriching Lives"
        style={{
          height: `${height}px`,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          if (target.src.includes('road2care-logo-transparent.png')) {
            target.src = './images/road2care-logo.png';
          }
        }}
      />
    </div>
  );
};
