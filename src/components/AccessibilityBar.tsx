import React, { useState, useEffect } from 'react';
import { Eye, Type, RotateCcw } from 'lucide-react';

export const AccessibilityBar: React.FC = () => {
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(1);
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    // Apply font size scale
    const scales = [1, 1.15, 1.3];
    document.documentElement.style.setProperty('--font-scale', scales[fontSizeLevel].toString());
  }, [fontSizeLevel]);

  useEffect(() => {
    // Apply high contrast class
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  const resetAccessibility = () => {
    setFontSizeLevel(0);
    setIsHighContrast(false);
  };

  return (
    <div className="accessibility-bar-wrap">
      <div className="container accessibility-bar-inner">
        <button
          type="button"
          className="accessibility-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle accessibility tools: text size and high contrast"
        >
          <Eye size={16} aria-hidden="true" />
          <span>Accessibility Tools {isOpen ? '▲' : '▼'}</span>
        </button>

        {isOpen && (
          <div className="accessibility-panel" role="region" aria-label="Accessibility options">
            <div className="access-control-group">
              <span className="access-label">
                <Type size={15} aria-hidden="true" /> Text Size:
              </span>
              <button
                type="button"
                className={`access-btn ${fontSizeLevel === 0 ? 'active' : ''}`}
                onClick={() => setFontSizeLevel(0)}
                aria-pressed={fontSizeLevel === 0}
              >
                Default
              </button>
              <button
                type="button"
                className={`access-btn ${fontSizeLevel === 1 ? 'active' : ''}`}
                onClick={() => setFontSizeLevel(1)}
                aria-pressed={fontSizeLevel === 1}
              >
                Large
              </button>
              <button
                type="button"
                className={`access-btn ${fontSizeLevel === 2 ? 'active' : ''}`}
                onClick={() => setFontSizeLevel(2)}
                aria-pressed={fontSizeLevel === 2}
              >
                X-Large
              </button>
            </div>

            <div className="access-control-group">
              <button
                type="button"
                className={`access-btn ${isHighContrast ? 'active' : ''}`}
                onClick={() => setIsHighContrast(!isHighContrast)}
                aria-pressed={isHighContrast}
              >
                High Contrast: {isHighContrast ? 'ON' : 'OFF'}
              </button>
              <button
                type="button"
                className="access-btn access-btn-reset"
                onClick={resetAccessibility}
                title="Reset accessibility settings"
              >
                <RotateCcw size={14} aria-hidden="true" /> Reset
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .accessibility-bar-wrap {
          background-color: #072336;
          color: #E2E8F0;
          font-size: 0.8rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .accessibility-bar-inner {
          display: flex;
          flex-direction: column;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        .accessibility-toggle-btn {
          background: none;
          border: none;
          color: #F8FAFC;
          font-size: 0.8rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          align-self: flex-end;
        }
        .accessibility-toggle-btn:hover {
          color: var(--color-accent);
        }
        .accessibility-panel {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-end;
          gap: 16px;
          padding: 8px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .access-control-group {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .access-label {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #94A3B8;
        }
        .access-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .access-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .access-btn.active {
          background: var(--color-accent);
          color: #000;
          font-weight: 700;
          border-color: var(--color-accent);
        }
        .access-btn-reset {
          background: transparent;
          border-color: rgba(255, 255, 255, 0.15);
          color: #CBD5E1;
        }
        @media (max-width: 640px) {
          .accessibility-panel {
            justify-content: flex-start;
          }
          .accessibility-toggle-btn {
            align-self: flex-start;
          }
        }
      `}</style>
    </div>
  );
};
