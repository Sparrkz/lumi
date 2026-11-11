import "./landing.css";
import AdaptiveDemo from "./AdaptiveDemo";

function Brand({ light = false }) {
  return (
    <a className={`lm-brand ${light ? "lm-brand-light" : ""}`} href="/landing" aria-label="Lumi home">
      <svg className="lm-brand-mark" viewBox="0 0 36 36" aria-hidden="true">
        <path d="M18 2.5C20.1 11.1 24.9 15.9 33.5 18C24.9 20.1 20.1 24.9 18 33.5C15.9 24.9 11.1 20.1 2.5 18C11.1 15.9 15.9 11.1 18 2.5Z" fill="currentColor" />
        <circle cx="27.5" cy="8.5" r="2.2" fill="#B98249" />
      </svg>
      <span>Lumi</span>
    </a>
  );
}

const moments = [
  {
    number: "01 / BEGIN",
    title: "I'm starting from zero.",
    copy: "You deserve a first step that makes sense, without being expected to know what came before.",
  },
  {
    number: "02 / REFRAME",
    title: "I've tried before. It never clicked.",
    copy: "Needing another explanation does not mean you cannot learn it. It may mean you need another way in.",
  },
  {
    number: "03 / EXTEND",
    title: "I'm ready to take this further.",
    copy: "When the foundations are there, learning should open up—not keep you repeating what you already know.",
  },
];

const principles = [
  {
    number: "01",
    title: "Understand the starting point",
    copy: "A learner's goals, existing knowledge and questions matter more than an assumed age or level.",
  },
  {
    number: "02",
    title: "Respond to what happens",
    copy: "When an idea is unclear, the next step should help make it clearer. When understanding grows, the journey can move with it.",
  },
  {
    number: "03",
    title: "Keep learning connected",
    copy: "Knowledge should lead somewhere: to new questions, useful skills, deeper understanding and real-life application.",
  },
];

export default function LandingPage() {
  return (
    <main className="lm-site">
      <header className="lm-header">
        <div className="lm-wrap lm-header-inner">
          <Brand />
          <nav className="lm-nav" aria-label="Main navigation">
            <a href="#why-lumi">Why Lumi</a>
            <a href="#experience">The experience</a>
            <a href="#approach">Our approach</a>
          </nav>
          <a className="lm-header-cta" href="#start">Explore Lumi <span className="lm-arrow">↗</span></a>
        </div>
      </header>

      <section className="lm-hero">
        <div className="lm-wrap lm-hero-grid">
          <div className="lm-hero-copy">
            <p className="lm-hero-kicker"><i /> A different kind of learning space</p>
            <h1>Learning should never make you feel like <em>you're the problem.</em></h1>
            <p className="lm-hero-lede">Maybe you're starting from zero. Maybe it never clicked before. Maybe you're ready to go further. Wherever you begin, learning should make room for you.</p>
            <div className="lm-hero-actions">
              <a className="lm-button" href="#experience">See how learning can adapt <span className="lm-arrow">↗</span></a>
              <a className="lm-text-link" href="#why-lumi">Why Lumi exists <span>↓</span></a>
            </div>
            <p className="lm-hero-note">No assumed starting point. No single way to understand.</p>
          </div>
          <div className="lm-hero-art" role="img" aria-label="An abstract illustration of different learning paths meeting around one learner">
            <div className="lm-art-sheet">
              <span className="lm-art-index">FIG. 01 — THE LEARNER, NOT THE SYSTEM</span>
              <div className="lm-art-core">
                <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 3C22 12 28 18 37 20C28 22 22 28 20 37C18 28 12 22 3 20C12 18 18 12 20 3Z" fill="currentColor"/></svg>
                <strong>Lumi</strong><small>your learning space</small>
              </div>
              <div className="lm-art-path lm-path-one"><b>Aa</b><span>Understand</span></div>
              <div className="lm-art-path lm-path-two"><b>◌</b><span>Explore</span></div>
              <div className="lm-art-path lm-path-three"><b>↗</b><span>Apply</span></div>
              <div className="lm-art-path lm-path-four"><b>✳</b><span>Grow</span></div>
              <span className="lm-art-caption">A path that moves with you.</span>
            </div>
          </div>
        </div>
        <div className="lm-wrap lm-hero-bottom"><span>LEARNING IS NOT A MEASURE OF WORTH</span><i /><span>IT IS A WAY TO GROW</span></div>
      </section>

      <section className="lm-section lm-opening" id="why-lumi">
        <div className="lm-wrap">
          <div className="lm-section-grid">
            <span className="lm-section-marker">01 / THE BELIEF</span>
            <div>
              <span className="lm-kicker">A more human starting point</span>
              <h2 className="lm-section-title">You are not behind. You are <em>somewhere on your way.</em></h2>
              <p className="lm-opening-lede">Being a learner should not mean keeping up with somebody else's pace, pretending to understand, or feeling that you have missed your chance.</p>
              <p className="lm-opening-copy">People arrive with different experiences, strengths, questions and ways of making sense of the world. Lumi is being built around the belief that learning should respond to those differences—not erase them.</p>
            </div>
          </div>
          <div className="lm-moments">
            {moments.map((moment) => (
              <article className="lm-moment" key={moment.number}>
                <small>{moment.number}</small>
                <h3>{moment.title}</h3>
                <p>{moment.copy}</p>
              </article>
            ))}
          </div>
          <div className="lm-domain-line">
            <span>ROOM FOR WHAT YOU WANT TO LEARN</span>
            <b>Foundations</b><b>Languages</b><b>Science & ideas</b><b>Practical skills</b><b>Professional growth</b>
          </div>
        </div>
      </section>

      <section className="lm-section lm-demo-section" id="experience">
        <div className="lm-wrap">
          <div className="lm-demo-intro">
            <div>
              <span className="lm-section-marker">02 / SEE THE DIFFERENCE</span>
              <h2 className="lm-section-title">The next step should depend on <em>where you are.</em></h2>
            </div>
            <p>Adaptivity is not just a choice of format. It is noticing what a learner needs and responding in a meaningful way.</p>
          </div>
          <AdaptiveDemo />
        </div>
      </section>

      <section className="lm-section lm-how" id="approach">
        <div className="lm-wrap">
          <div className="lm-how-heading">
            <div>
              <span className="lm-section-marker">03 / THE APPROACH</span>
              <h2 className="lm-section-title">A learning journey that can <em>move with you.</em></h2>
            </div>
            <p>Lumi's design starts with the learner—not a fixed grade, a predetermined pace, or an assumption about what someone should already know.</p>
          </div>
          <div className="lm-how-grid">
            {principles.map((principle) => (
              <article className="lm-how-item" key={principle.number}>
                <span className="lm-how-number">{principle.number} /</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
          <div className="lm-guardrail">
            <b>✳</b>
            <p><strong>Not a race. Not a ranking.</strong> Progress is about what becomes clearer, what you can do, and where your curiosity takes you next—not how quickly you move through a checklist.</p>
          </div>
        </div>
      </section>

      <section className="lm-closing" id="start">
        <div className="lm-wrap lm-closing-inner">
          <div>
            <span className="lm-kicker">YOUR NEXT CHAPTER CAN START ANYWHERE</span>
            <h2>There is room for the way <em>you learn.</em></h2>
            <p className="lm-closing-copy">Start with a question, a goal, or something you've always wanted to understand. Lumi is being built to make learning more personal, more flexible, and more human.</p>
          </div>
          <div className="lm-closing-action">
            <a className="lm-button lm-button-light" href="#experience">Explore the experience <span className="lm-arrow">↗</span></a>
            <small>Free at launch · Open to every starting point</small>
          </div>
        </div>
      </section>

      <footer className="lm-footer">
        <div className="lm-wrap">
          <div className="lm-footer-main">
            <div className="lm-footer-brand">
              <Brand light />
              <p>Learning that makes room for you.</p>
            </div>
            <div className="lm-footer-links">
              <div><b>DISCOVER</b><a href="#why-lumi">Why Lumi</a><a href="#experience">The experience</a><a href="#approach">Our approach</a></div>
              <div><b>THE BELIEF</b><span>Human first</span><span>Adapt, don't force</span><span>Understanding over speed</span></div>
            </div>
          </div>
          <div className="lm-footer-bottom"><span>© {new Date().getFullYear()} Lumi. Learning for every starting point.</span><span>Different minds. Room to grow. ✳</span></div>
        </div>
      </footer>
    </main>
  );
}
