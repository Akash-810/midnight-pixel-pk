import {
  ArrowDown,
  ArrowRight,
  Clock3,
  Gamepad2,
  MapPin,
  Music2,
  Palette,
  Sparkles,
  Ticket,
  Trophy,
} from 'lucide-react'

const highlights = [
  {
    number: '01',
    icon: Trophy,
    title: 'Gaming competitions',
    description: 'Bring your game face for an exciting night of gaming competition.',
    color: 'violet',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Digital art showcases',
    description: 'Explore creative work from across the digital art world.',
    color: 'blue',
  },
  {
    number: '03',
    icon: Gamepad2,
    title: 'Retro arcade games',
    description: 'Take a trip through pixel-perfect arcade classics.',
    color: 'pink',
  },
  {
    number: '04',
    icon: Music2,
    title: 'Live music',
    description: 'Keep the energy up with live music throughout the night.',
    color: 'cyan',
  },
]

function PixelMark() {
  return (
    <div className="pixel-mark" aria-hidden="true">
      <span className="pixel pixel-a" />
      <span className="pixel pixel-b" />
      <span className="pixel pixel-c" />
      <span className="pixel pixel-d" />
      <span className="pixel pixel-e" />
      <span className="pixel pixel-f" />
      <span className="pixel pixel-g" />
      <span className="pixel pixel-h" />
      <span className="pixel pixel-i" />
    </div>
  )
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Midnight Pixel Fest home">
        <PixelMark />
        <span>MIDNIGHT<span className="wordmark-light">PIXEL FEST</span></span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#experience">The experience</a>
        <a href="#register">Tickets</a>
      </nav>
      <a className="header-cta" href="#register">
        Get your free ticket <ArrowRight aria-hidden="true" />
      </a>
    </header>
  )
}

function PixelWorld() {
  return (
    <div className="pixel-world" aria-hidden="true">
      <div className="world-orbit orbit-one" />
      <div className="world-orbit orbit-two" />
      <div className="world-sun" />
      <div className="world-grid" />
      <div className="world-building building-left"><i /><i /><i /><i /></div>
      <div className="world-building building-center"><i /><i /><i /><i /><i /><i /></div>
      <div className="world-building building-right"><i /><i /><i /><i /></div>
      <div className="world-platform" />
      <div className="world-spark spark-one" />
      <div className="world-spark spark-two" />
      <div className="world-spark spark-three" />
      <span className="world-label label-one">PIXEL_01</span>
      <span className="world-label label-two">NIGHT MODE</span>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="live-dot" /> ONE NIGHT. INFINITE WORLDS.</p>
        <h1 id="hero-title">ENTER THE<br /><span>PIXEL</span> AFTER<br />DARK<span className="title-period">.</span></h1>
        <p className="hero-description">
          Gaming, digital art, retro arcade, and live music collide for one unforgettable night in Neon City.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#register">Reserve your spot <ArrowRight aria-hidden="true" /></a>
          <a className="button-quiet" href="#experience"><span className="play-icon"><ArrowDown aria-hidden="true" /></span> Explore the fest</a>
        </div>
        <div className="hero-facts" aria-label="Event details">
          <div className="hero-fact"><Clock3 aria-hidden="true" /><span><strong>Nov 14, 2026</strong><small>Saturday · 6 PM–11 PM</small></span></div>
          <span className="fact-divider" aria-hidden="true" />
          <div className="hero-fact"><MapPin aria-hidden="true" /><span><strong>Neon City</strong><small>One night, all pixels</small></span></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="visual-topline"><span>MPF / 2026</span><span>14·11·26</span></div>
        <PixelWorld />
        <div className="visual-bottomline"><span>THE NIGHT IS YOURS</span><span>SCROLL TO EXPLORE ↓</span></div>
      </div>
      <div className="hero-index" aria-hidden="true">01 <span>/</span> 03</div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="experience section-wrap" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> THE EXPERIENCE</p>
          <h2 id="experience-title">A night built<br />for <span>play.</span></h2>
        </div>
        <p className="section-intro">Step into futuristic digital worlds, meet fellow gamers, and make room for a little creative chaos.</p>
      </div>
      <div className="highlight-grid">
        {highlights.map(({ number, icon: Icon, title, description, color }) => (
          <article className={`highlight-card ${color}`} key={number}>
            <div className="card-topline"><span>{number} / 04</span><Icon aria-hidden="true" /></div>
            <div className="card-icon"><Icon aria-hidden="true" /></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="card-corner" aria-hidden="true" />
          </article>
        ))}
      </div>
      <div className="challenge-strip">
        <span className="challenge-icon"><Sparkles aria-hidden="true" /></span>
        <p><strong>Make something unexpected.</strong> Creative challenges await.</p>
        <span className="challenge-aside">YOUR MOVE <span aria-hidden="true">↗</span></span>
      </div>
    </section>
  )
}

function RegistrationSection() {
  return (
    <section className="register-section" id="register" aria-labelledby="register-title">
      <div className="register-inner">
        <div className="register-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT LEVEL STARTS HERE</p>
          <h2 id="register-title">Save your<br /><span>spot.</span></h2>
          <p>Register online to reserve your spot. Tickets are free.</p>
        </div>
        <div className="ticket-card">
          <div className="ticket-card-head"><span><Ticket aria-hidden="true" /> ENTRY PASS</span><span>MPF—26</span></div>
          <div className="ticket-card-body">
            <p className="ticket-label">MIDNIGHT PIXEL FEST</p>
            <p className="ticket-price">FREE<span> / TICKET</span></p>
            <div className="ticket-details"><span>Saturday, November 14, 2026</span><span>6 PM – 11 PM · Neon City</span></div>
          </div>
          <div className="ticket-notch notch-left" aria-hidden="true" />
          <div className="ticket-notch notch-right" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export function MidnightPixelFest() {
  return (
    <main className="event-site">
      <div className="site-shell">
        <SiteHeader />
        <HeroSection />
        <ExperienceSection />
        <RegistrationSection />
        <footer className="site-footer">
          <a className="wordmark footer-wordmark" href="#top"><PixelMark /><span>MIDNIGHT<span className="wordmark-light">PIXEL FEST</span></span></a>
          <p>Saturday, November 14, 2026 <span>·</span> Neon City</p>
          <a href="#top">BACK TO TOP ↑</a>
        </footer>
      </div>
    </main>
  )
}
