const valueProps = [
  {
    title: 'Adaptive guidance',
    text: 'Lumi adjusts the learning journey to match context, confidence, and what the learner needs next.',
  },
  {
    title: 'Clear next steps',
    text: 'Every moment is framed around progress, clarity, and the next best action instead of abstract scores.',
  },
  {
    title: 'Real-world capability',
    text: 'Learners are supported to practice, apply, and retain knowledge in ways that transfer to real situations.',
  },
];

const steps = [
  'Tell Lumi what you want to build or understand',
  'Lumi identifies the strongest next move using evidence and context',
  'You practice, apply, and continue with confidence',
];

const highlights = [
  { label: 'Goals', value: '14 active' },
  { label: 'Momentum', value: '91%' },
  { label: 'Confidence', value: 'Rising' },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-mark" aria-label="Lumi home">
          <span className="brand-dot" />
          Lumi
        </div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#why-lumi">Why Lumi</a>
          <a href="#journey">Journey</a>
        </nav>
        <a className="button button-secondary" href="/onboarding">
          Start with Lumi
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Adaptive learning, without the noise</p>
          <h1>Understand where you are. Find the best next step.</h1>
          <p className="lede">
            Lumi helps learners build understanding, confidence, and real capability through calm,
            context-aware guidance.
          </p>
          <div className="cta-row">
            <a className="button button-primary" href="/onboarding">
              Begin your journey
            </a>
            <a className="button button-ghost" href="#how-it-works">
              See how it works
            </a>
          </div>
          <ul className="trust-row" aria-label="Key product attributes">
            <li>Personalized</li>
            <li>Accessible</li>
            <li>Evidence-based</li>
          </ul>
        </div>

        <div className="hero-panel" aria-label="Lumi progress overview">
          <div className="panel-card panel-main">
            <div className="small-label">Current focus</div>
            <h2>Build confidence with functions</h2>
            <div className="progress-block">
              <div className="progress-meta">
                <span>Progress</span>
                <strong>74%</strong>
              </div>
              <div className="progress-bar" aria-label="74 percent progress">
                <span style={{ width: '74%' }} />
              </div>
            </div>
          </div>

          <div className="panel-grid">
            {highlights.map((item) => (
              <div className="mini-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="value-section" id="why-lumi">
        <div className="section-heading">
          <p className="eyebrow">Why Lumi</p>
          <h2>Learning that feels clear, human, and motivating.</h2>
        </div>
        <div className="card-grid">
          {valueProps.map((item) => (
            <article className="info-card" key={item.title}>
              <div className="badge">L</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Every step is designed to help the learner act with confidence.</h2>
        </div>

        <div className="steps-wrap">
          {steps.map((step, index) => (
            <div className="step-card" key={step}>
              <div className="step-number">0{index + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="journey-panel" id="journey">
        <div>
          <p className="eyebrow">Next best action</p>
          <h2>Try another explanation or move to application.</h2>
        </div>
        <a className="button button-primary" href="/onboarding">
          Continue learning
        </a>
      </section>
    </main>
  );
}
