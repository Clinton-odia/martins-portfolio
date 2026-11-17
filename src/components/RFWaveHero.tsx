import React from 'react';

export const RFWaveHero: React.FC = () => {
  return (
    <div className="scope-box select-none" aria-hidden="true">
      {/* Scope Header Bar */}
      <div className="scope-header">
        <div className="scope-badge">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'inline-block' }} />
          <span>RF → DC SIGNAL SCOPE</span>
        </div>
        <div className="scope-channels font-mono text-[11px]">
          <span>CH1: <strong style={{ color: 'var(--accent-2)' }}>5.8 GHz RF</strong></span>
          <span style={{ color: 'var(--border)' }}>·</span>
          <span>RECTIFIER: <strong style={{ color: 'var(--accent)' }}>SCHOTTKY</strong></span>
          <span style={{ color: 'var(--border)' }}>·</span>
          <span>DC: <strong style={{ color: 'var(--accent)' }}>&gt;60% PCE</strong></span>
        </div>
      </div>

      <svg
        viewBox="0 0 900 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="scope-canvas"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="rfGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-2)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="rectGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-2)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="dcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="1" />
          </linearGradient>

          <filter id="glowTeal" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <style>{`
          @keyframes waveShift {
            0% { transform: translateX(0); }
            100% { transform: translateX(-80px); }
          }
          @keyframes pulseDiode {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; filter: drop-shadow(0 0 4px var(--accent-2)); }
          }
          .anim-wave {
            animation: waveShift 2.5s linear infinite;
          }
          .anim-diode {
            animation: pulseDiode 2s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .anim-wave, .anim-diode {
              animation: none !important;
            }
          }
        `}</style>

        {/* Background Grid Lines within SVG */}
        <line x1="20" y1="80" x2="880" y2="80" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
        <line x1="300" y1="20" x2="300" y2="140" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="600" y1="20" x2="600" y2="140" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

        {/* Section 1: Pure RF Sine Wave (Amber) */}
        <g clipPath="url(#clipRF)">
          <clipPath id="clipRF">
            <rect x="20" y="20" width="280" height="120" />
          </clipPath>
          <g className="anim-wave">
            <path
              d="M -60 80 Q -40 30 -20 80 T 20 80 T 60 80 T 100 80 T 140 80 T 180 80 T 220 80 T 260 80 T 300 80 T 340 80 T 380 80"
              stroke="url(#rfGrad)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </g>
        <text x="140" y="145" textAnchor="middle" fill="var(--muted)" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="0.08em">
          INPUT RF WAVE (f₀)
        </text>

        {/* Center Node 1: Diode Junction / Rectifier */}
        <g transform="translate(300, 80)" className="anim-diode">
          <circle cx="0" cy="0" r="16" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
          {/* Diode Symbol */}
          <polygon points="-7,-8 -7,8 6,0" fill="var(--accent-2)" />
          <line x1="6" y1="-8" x2="6" y2="8" stroke="var(--accent-2)" strokeWidth="2" strokeLinecap="round" />
        </g>
        <text x="300" y="112" textAnchor="middle" fill="var(--accent-2)" fontSize="10" fontFamily="var(--font-mono)" fontWeight="600">
          DIODE (REPRESENTATIVE)
        </text>

        {/* Section 2: Rectified Waveform (Pulsed Amber) */}
        <path
          d="M 316 80 Q 330 35 345 80 Q 360 35 375 80 Q 390 35 405 80 Q 420 35 435 80 Q 450 35 465 80 Q 480 35 495 80 Q 510 35 525 80 Q 540 35 555 80 Q 570 35 584 80"
          stroke="url(#rectGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <text x="450" y="145" textAnchor="middle" fill="var(--muted)" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="0.08em">
          RECTIFIED HARMONICS
        </text>

        {/* Center Node 2: Low-pass Smoothing Filter */}
        <g transform="translate(600, 80)">
          <circle cx="0" cy="0" r="16" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
          {/* Capacitor / Inductor Symbol */}
          <line x1="-8" y1="-7" x2="-8" y2="7" stroke="var(--accent)" strokeWidth="2" />
          <line x1="-3" y1="-7" x2="-3" y2="7" stroke="var(--accent)" strokeWidth="2" />
          <path d="M 2 4 Q 5 -6 8 4" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
        </g>
        <text x="600" y="112" textAnchor="middle" fill="var(--accent)" fontSize="10" fontFamily="var(--font-mono)" fontWeight="600">
          FILTER / STORAGE
        </text>

        {/* Section 3: Clean Steady DC Output (Phosphor Teal) */}
        <line
          x1="616"
          y1="80"
          x2="870"
          y2="80"
          stroke="url(#dcGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#glowTeal)"
        />
        {/* Voltage Readout Monospace Callout */}
        <g transform="translate(740, 52)">
          <rect x="-42" y="-14" width="84" height="22" rx="4" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="1" />
          <text x="0" y="2" textAnchor="middle" fill="var(--accent)" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
            V_out (DC)
          </text>
        </g>
        <text x="740" y="145" textAnchor="middle" fill="var(--accent)" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="0.08em">
          SMOOTHED DC POWER
        </text>

        {/* Arrowhead Terminator */}
        <polygon points="870,76 878,80 870,84" fill="var(--accent)" />
      </svg>
    </div>
  );
};
