// Decorative, content-free SVGs. All inherit theme colours and stay
// minimalistic — thin lines, lots of negative space, a single orange accent.

// Large abstract composition used in the hero: faint rings, slowly orbiting
// dots, a floating "product card" and two floating chips.
export function HeroArt() {
  return (
    <svg
      className="hero-art"
      viewBox="0 0 520 520"
      role="img"
      aria-label="Abstract illustration of building software"
    >
      <defs>
        <linearGradient id="ha-orange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff7a4d" />
          <stop offset="1" stopColor="#f53103" />
        </linearGradient>
      </defs>

      {/* faint guide rings */}
      <circle cx="260" cy="260" r="232" className="ha-ring" />
      <circle cx="260" cy="260" r="176" className="ha-ring ha-ring--dash" />

      {/* orbiting dots */}
      <g className="ha-spin">
        <circle cx="260" cy="28" r="7" className="ha-dot-accent" />
        <circle cx="492" cy="260" r="5" className="ha-dot" />
        <circle cx="260" cy="492" r="6" className="ha-dot" />
        <circle cx="84" cy="84" r="4" className="ha-dot" />
      </g>
      <g className="ha-spin-rev">
        <circle cx="436" cy="260" r="5" className="ha-dot-accent" />
        <circle cx="84" cy="260" r="4" className="ha-dot" />
      </g>

      {/* central product card */}
      <g className="ha-float">
        <rect x="150" y="175" width="220" height="150" rx="16" className="ha-card" />
        <circle cx="174" cy="202" r="6" className="ha-fill-accent" />
        <line x1="192" y1="202" x2="300" y2="202" className="ha-line" />
        <line x1="174" y1="234" x2="346" y2="234" className="ha-line ha-line--soft" />
        <line x1="174" y1="258" x2="322" y2="258" className="ha-line ha-line--soft" />
        <line x1="174" y1="282" x2="292" y2="282" className="ha-line ha-line--soft" />
        <rect x="174" y="298" width="74" height="16" rx="8" className="ha-pill" />
      </g>

      {/* floating chip — top left */}
      <g className="ha-float ha-float--slow">
        <rect x="64" y="120" width="126" height="46" rx="12" className="ha-chip" />
        <circle cx="88" cy="143" r="6" className="ha-fill-accent" />
        <line x1="104" y1="143" x2="172" y2="143" className="ha-line" />
      </g>

      {/* floating chip — bottom right */}
      <g className="ha-float ha-float--alt">
        <rect x="330" y="362" width="134" height="50" rx="12" className="ha-chip" />
        <rect x="348" y="380" width="15" height="15" rx="4" className="ha-square" />
        <line x1="376" y1="388" x2="446" y2="388" className="ha-line" />
      </g>
    </svg>
  )
}

// Quiet background decoration that lives in section whitespace.
export function Decor({ variant = 'rings' }) {
  if (variant === 'dots') {
    return (
      <svg className="deco deco--bl" viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <pattern id="deco-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2.5" cy="2.5" r="2.5" fill="currentColor" fillOpacity="0.16" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#deco-dots)" />
      </svg>
    )
  }

  if (variant === 'plus') {
    return (
      <svg className="deco deco--tr" viewBox="0 0 220 220" aria-hidden="true">
        <defs>
          <pattern id="deco-plus" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M20 13v14M13 20h14"
              stroke="currentColor"
              strokeOpacity="0.18"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </pattern>
        </defs>
        <rect width="220" height="220" fill="url(#deco-plus)" />
      </svg>
    )
  }

  // default: concentric rings
  return (
    <svg className="deco deco--tr" viewBox="0 0 340 340" aria-hidden="true">
      {[60, 110, 160].map((r) => (
        <circle
          key={r}
          cx="170"
          cy="170"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.1"
          strokeWidth="1.4"
        />
      ))}
      <circle cx="170" cy="10" r="5" fill="var(--primary)" />
    </svg>
  )
}

// Thin full-width line separator with a centred orange node.
export function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <svg viewBox="0 0 1200 12" preserveAspectRatio="none">
        <line x1="0" y1="6" x2="560" y2="6" className="divider__line" />
        <line x1="640" y1="6" x2="1200" y2="6" className="divider__line" />
      </svg>
      <span className="divider__node" />
    </div>
  )
}
