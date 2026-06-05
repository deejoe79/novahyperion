// Lightweight inline line-icon set (currentColor stroke).
const paths = {
  ai: (
    <>
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
      <path d="M18 14l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z" />
    </>
  ),
  code: (
    <>
      <polyline points="8 8 4 12 8 16" />
      <polyline points="16 8 20 12 16 16" />
      <line x1="13" y1="6" x2="11" y2="18" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </>
  ),
  cloud: <path d="M7 18h9a4 4 0 0 0 .7-7.9 5.5 5.5 0 0 0-10.6-1.2A3.8 3.8 0 0 0 7 18z" />,
  web3: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M4 7.5l8 4.5 8-4.5" />
      <line x1="12" y1="12" x2="12" y2="21" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" />
      <polyline points="9 12 11 14 15 10" />
    </>
  ),
  qa: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="8.5 12 11 14.5 15.5 9.5" />
    </>
  ),
  consulting: (
    <>
      <path d="M9.5 18h5" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.2V16h6v-.3c0-.8.4-1.6 1-2.2A6 6 0 0 0 12 3z" />
    </>
  ),
  fintech: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="7" y1="15" x2="11" y2="15" />
    </>
  ),
  health: (
    <>
      <path d="M12 20S5 15.5 5 10.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5C19 15.5 12 20 12 20z" />
      <path d="M9.5 11h5M12 8.5v5" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h1M14 7h1M9 11h1M14 11h1" />
      <path d="M10 21v-4h4v4" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.2" />
      <circle cx="18" cy="20" r="1.2" />
      <path d="M3 4h2l2.4 11.4a1 1 0 0 0 1 .6h8.2a1 1 0 0 0 1-.8L21 8H6" />
    </>
  ),
  truck: (
    <>
      <rect x="2" y="7" width="12" height="9" rx="1" />
      <path d="M14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.5" />
      <circle cx="17" cy="18" r="1.5" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V10l6 4V10l6 4V7h3v14z" />
      <line x1="3" y1="21" x2="21" y2="21" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1 1-1 4-1 4s3 0 4-1" />
      <path d="M12 3c3 1 6 4 6 9 0 0-2 4-6 6-4-2-6-6-6-6 0-5 3-8 6-9z" />
      <circle cx="12" cy="10" r="1.5" />
    </>
  ),
}

export const serviceIcons = {
  'ai-ml': 'ai',
  'software-development': 'code',
  'data-engineering': 'data',
  'cloud-devops': 'cloud',
  'web3-blockchain': 'web3',
  cybersecurity: 'shield',
  'qa-testing': 'qa',
  'it-consulting': 'consulting',
}

export const industryIcons = {
  fintech: 'fintech',
  healthcare: 'health',
  proptech: 'building',
  retail: 'cart',
  logistics: 'truck',
  manufacturing: 'factory',
  startups: 'rocket',
}

// Renders a monochromatic pictogram in the framing that matches a card variant:
//   outline -> rounded-square badge, accent -> outlined circle, tinted -> faded watermark.
export function Pictogram({ name, variant = 'outline' }) {
  if (!name) return null
  if (variant === 'tinted') {
    return (
      <span className="card__watermark" aria-hidden="true">
        <Icon name={name} />
      </span>
    )
  }
  if (variant === 'accent') {
    return (
      <div className="card__pic--circle">
        <Icon name={name} />
      </div>
    )
  }
  return (
    <div className="icon-badge">
      <Icon name={name} />
    </div>
  )
}

export default function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.code}
    </svg>
  )
}
