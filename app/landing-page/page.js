const goals = [
  'Build confidence in maths',
  'Learn coding fundamentals',
  'Practice problem solving',
  'Improve reading and comprehension',
];

const pacing = ['Gentle start', 'Balanced rhythm', 'Challenge me'];

const support = ['Short lessons', 'Worked examples', 'Real application'];

export default function OnboardingPage() {
  return (
    <main className="onboarding-shell">
      <div className="onboarding-card">
        <div className="onboarding-header">
          <p className="eyebrow">Welcome to Lumi</p>
          <h1>What do you want to focus on today?</h1>
        </div>

        <div className="selector-block">
          <h2>Choose a goal</h2>
          <div className="pill-list">
            {goals.map((goal) => (
              <button key={goal} type="button" className="pill active">
                {goal}
              </button>
            ))}
          </div>
        </div>

        <div className="two-column">
          <div className="selector-block">
            <h2>Pacing</h2>
            <div className="option-list">
              {pacing.map((item) => (
                <button key={item} type="button" className="choice-card">
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="selector-block">
            <h2>Support style</h2>
            <div className="option-list">
              {support.map((item) => (
                <button key={item} type="button" className="choice-card">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-actions">
          <a className="button button-ghost" href="/">
            Back
          </a>
          <a className="button button-primary" href="/">
            Continue
          </a>
        </div>
      </div>
    </main>
  );
}
