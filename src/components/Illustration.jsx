// AI-authored vector illustrations (one themed scene per page).
// SVG => transparent background by nature. Themed with ink line-art + a
// single Kinetic-Orange accent, with a subtle float on the accent element.

const VB = '0 0 460 340'

function Services() {
  return (
    <svg className="il" viewBox={VB} role="img" aria-label="Layered engineering disciplines">
      <rect x="150" y="58" width="230" height="150" rx="16" className="il-fill-soft" />
      <rect x="120" y="92" width="230" height="150" rx="16" className="il-white il-stroke" />
      <rect x="90" y="126" width="230" height="150" rx="16" className="il-white il-stroke" />
      <circle cx="120" cy="158" r="10" className="il-accent" />
      <line x1="142" y1="158" x2="262" y2="158" className="il-stroke" />
      <line x1="112" y1="194" x2="298" y2="194" className="il-line-soft" />
      <line x1="112" y1="218" x2="272" y2="218" className="il-line-soft" />
      <rect x="112" y="238" width="86" height="22" rx="11" className="il-fill-tint" />
      <g className="il-float">
        <path d="M356 64 l9 20 20 9 -20 9 -9 20 -9 -20 -20 -9 20 -9z" className="il-accent" />
      </g>
    </svg>
  )
}

function Solutions() {
  return (
    <svg className="il" viewBox={VB} role="img" aria-label="AI assistant product window">
      <rect x="46" y="58" width="300" height="200" rx="16" className="il-white il-stroke" />
      <line x1="46" y1="94" x2="346" y2="94" className="il-stroke" />
      <circle cx="68" cy="76" r="5" className="il-dot" />
      <circle cx="86" cy="76" r="5" className="il-dot" />
      <circle cx="104" cy="76" r="5" className="il-dot" />
      <line x1="68" y1="124" x2="208" y2="124" className="il-line-soft" />
      <line x1="68" y1="148" x2="250" y2="148" className="il-line-soft" />
      <line x1="68" y1="172" x2="178" y2="172" className="il-line-soft" />
      <rect x="68" y="200" width="98" height="26" rx="13" className="il-accent" />
      <g className="il-float">
        <rect x="250" y="186" width="156" height="96" rx="22" className="il-fill-tint il-accent-stroke" />
        <circle cx="292" cy="234" r="7" className="il-accent" />
        <circle cx="324" cy="234" r="7" className="il-accent" />
        <circle cx="356" cy="234" r="7" className="il-accent" />
      </g>
    </svg>
  )
}

function Industries() {
  return (
    <svg className="il" viewBox={VB} role="img" aria-label="Industry sectors skyline">
      <line x1="40" y1="278" x2="420" y2="278" className="il-stroke" />
      <rect x="70" y="192" width="56" height="86" rx="6" className="il-white il-stroke" />
      <rect x="138" y="150" width="60" height="128" rx="6" className="il-white il-stroke" />
      <rect x="210" y="118" width="64" height="160" rx="6" className="il-fill-soft" />
      <rect x="210" y="118" width="64" height="160" rx="6" className="il-stroke" />
      <rect x="286" y="172" width="58" height="106" rx="6" className="il-white il-stroke" />
      <line x1="86" y1="212" x2="110" y2="212" className="il-line-soft" />
      <line x1="86" y1="234" x2="110" y2="234" className="il-line-soft" />
      <line x1="154" y1="174" x2="182" y2="174" className="il-line-soft" />
      <line x1="154" y1="198" x2="182" y2="198" className="il-line-soft" />
      <line x1="154" y1="222" x2="182" y2="222" className="il-line-soft" />
      <line x1="302" y1="196" x2="328" y2="196" className="il-line-soft" />
      <line x1="302" y1="220" x2="328" y2="220" className="il-line-soft" />
      <g className="il-float">
        <path
          d="M242 64 c-16 0 -28 12 -28 28 c0 20 28 46 28 46 c0 0 28 -26 28 -46 c0 -16 -12 -28 -28 -28z"
          className="il-accent"
        />
        <circle cx="242" cy="92" r="9" className="il-white" />
      </g>
    </svg>
  )
}

function Technologies() {
  const topX = [185, 215, 245, 275]
  const sideY = [125, 155, 185, 215]
  return (
    <svg className="il" viewBox={VB} role="img" aria-label="Technology stack chip">
      {topX.map((x) => (
        <g key={`t${x}`}>
          <line x1={x} y1="95" x2={x} y2="72" className="il-line-soft" />
          <rect x={x - 7} y="56" width="14" height="14" rx="3" className="il-fill-soft" />
          <line x1={x} y1="245" x2={x} y2="268" className="il-line-soft" />
          <rect x={x - 7} y="270" width="14" height="14" rx="3" className="il-fill-soft" />
        </g>
      ))}
      {sideY.map((y) => (
        <g key={`s${y}`}>
          <line x1="155" y1={y} x2="132" y2={y} className="il-line-soft" />
          <rect x="116" y={y - 7} width="14" height="14" rx="3" className="il-fill-soft" />
          <line x1="305" y1={y} x2="328" y2={y} className="il-line-soft" />
          <rect x="330" y={y - 7} width="14" height="14" rx="3" className="il-fill-soft" />
        </g>
      ))}
      <rect x="155" y="95" width="150" height="150" rx="16" className="il-white il-stroke" />
      <rect x="185" y="125" width="90" height="90" rx="10" className="il-fill-soft" />
      <g className="il-float">
        <rect x="205" y="145" width="50" height="50" rx="8" className="il-accent" />
      </g>
    </svg>
  )
}

function Work() {
  const pts = '117,196 167,174 217,150 267,126'
  return (
    <svg className="il" viewBox={VB} role="img" aria-label="Analytics dashboard">
      <rect x="55" y="56" width="320" height="214" rx="16" className="il-white il-stroke" />
      <line x1="55" y1="92" x2="375" y2="92" className="il-stroke" />
      <circle cx="77" cy="74" r="5" className="il-dot" />
      <line x1="100" y1="74" x2="180" y2="74" className="il-line-soft" />
      <line x1="90" y1="240" x2="350" y2="240" className="il-line-soft" />
      <rect x="100" y="200" width="34" height="40" rx="4" className="il-fill-soft" />
      <rect x="150" y="178" width="34" height="62" rx="4" className="il-fill-soft" />
      <rect x="200" y="156" width="34" height="84" rx="4" className="il-fill-soft" />
      <rect x="250" y="132" width="34" height="108" rx="4" className="il-accent" />
      <polyline points={pts} className="il-accent-stroke" />
      {pts.split(' ').map((p) => {
        const [x, y] = p.split(',')
        return <circle key={p} cx={x} cy={y} r="4" className="il-accent" />
      })}
      <g className="il-float">
        <circle cx="332" cy="120" r="22" className="il-fill-tint" />
        <path d="M332 132 v-24 M322 118 l10 -10 10 10" className="il-accent-stroke" />
      </g>
    </svg>
  )
}

function Avatar({ x, y, accent }) {
  return (
    <g>
      <circle cx={x} cy={y} r="28" className={accent ? 'il-fill-tint il-accent-stroke' : 'il-white il-stroke'} />
      <circle cx={x} cy={y - 6} r="9" className={accent ? 'il-accent' : 'il-stroke'} />
      <path
        d={`M${x - 14} ${y + 18} a14 12 0 0 1 28 0`}
        className={accent ? 'il-accent-stroke' : 'il-stroke'}
      />
    </g>
  )
}

function About() {
  const nodes = [
    [120, 116],
    [336, 108],
    [110, 250],
    [344, 250],
  ]
  return (
    <svg className="il" viewBox={VB} role="img" aria-label="Connected team">
      {nodes.map(([x, y]) => (
        <line key={`l${x}${y}`} x1="230" y1="184" x2={x} y2={y} className="il-line-soft" />
      ))}
      {nodes.map(([x, y], i) => (
        <Avatar key={`a${x}${y}`} x={x} y={y} accent={i === 1} />
      ))}
      <g className="il-float">
        <circle cx="230" cy="184" r="16" className="il-accent" />
      </g>
    </svg>
  )
}

function Insights() {
  return (
    <svg className="il" viewBox={VB} role="img" aria-label="Article and notes">
      <rect x="74" y="56" width="210" height="224" rx="14" className="il-white il-stroke" />
      <rect x="98" y="86" width="120" height="20" rx="6" className="il-accent" />
      <line x1="98" y1="128" x2="258" y2="128" className="il-line-soft" />
      <line x1="98" y1="150" x2="258" y2="150" className="il-line-soft" />
      <line x1="98" y1="172" x2="222" y2="172" className="il-line-soft" />
      <line x1="98" y1="194" x2="258" y2="194" className="il-line-soft" />
      <rect x="98" y="228" width="92" height="18" rx="9" className="il-fill-tint" />
      <g className="il-float--alt">
        <rect x="256" y="150" width="128" height="86" rx="14" className="il-white il-stroke" />
        <line x1="276" y1="178" x2="364" y2="178" className="il-line-soft" />
        <line x1="276" y1="200" x2="340" y2="200" className="il-line-soft" />
      </g>
      <g className="il-float">
        <path d="M286 268 l64 -64 20 20 -64 64 -26 6z" className="il-accent" />
      </g>
    </svg>
  )
}

function Careers() {
  return (
    <svg className="il" viewBox={VB} role="img" aria-label="Career growth path">
      <line x1="48" y1="282" x2="412" y2="282" className="il-line-soft" />
      <path
        d="M70 262 C 150 252, 178 176, 248 154 S 352 96, 388 70"
        className="il-accent-stroke"
        strokeDasharray="2 11"
      />
      {[
        [70, 262],
        [180, 196],
        [300, 138],
      ].map(([x, y]) => (
        <g key={`m${x}`}>
          <circle cx={x} cy={y} r="9" className="il-white il-stroke" />
          <circle cx={x} cy={y} r="3.5" className="il-accent" />
        </g>
      ))}
      <g transform="translate(354 34)">
        <g className="il-float">
          <path
            d="M34 2 c16 2 28 22 28 44 c0 18 -12 36 -28 48 c-16 -12 -28 -30 -28 -48 c0 -22 12 -42 28 -44z"
            className="il-accent"
          />
          <circle cx="34" cy="42" r="9" className="il-white" />
          <path d="M12 78 l-10 20 18 -6z" className="il-accent" />
          <path d="M56 78 l10 20 -18 -6z" className="il-accent" />
        </g>
      </g>
    </svg>
  )
}

function Contact() {
  return (
    <svg className="il" viewBox={VB} role="img" aria-label="Contact: message and location">
      <rect x="64" y="104" width="244" height="160" rx="14" className="il-white il-stroke" />
      <path d="M70 116 L186 198 L302 116" className="il-stroke" />
      <g className="il-float">
        <path d="M352 66 L300 176 L322 150 L356 166 L352 66z" className="il-accent" />
        <path d="M352 66 L322 150 L342 138 Z" className="il-accent" opacity="0.65" />
      </g>
      <g className="il-float--alt">
        <path
          d="M360 206 c-13 0 -23 10 -23 23 c0 16 23 37 23 37 c0 0 23 -21 23 -37 c0 -13 -10 -23 -23 -23z"
          className="il-accent-stroke"
        />
        <circle cx="360" cy="229" r="7" className="il-accent" />
      </g>
    </svg>
  )
}

const MAP = {
  services: Services,
  solutions: Solutions,
  industries: Industries,
  technologies: Technologies,
  work: Work,
  about: About,
  insights: Insights,
  careers: Careers,
  contact: Contact,
}

export default function Illustration({ name }) {
  const Comp = MAP[name]
  return Comp ? <Comp /> : null
}
