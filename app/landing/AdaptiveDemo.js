"use client";

import { useState } from "react";

const paths = [
  {
    id: "begin",
    label: "I'm starting from zero",
    signal: "There is no foundation to assume.",
    response: "Begin with what already feels familiar.",
    detail: "Build the first idea in small, connected steps. Introduce new language only when it has somewhere to land.",
    next: "A clear first step, without the pressure to know more than you do.",
    marker: "START WITH THE FOUNDATIONS",
  },
  {
    id: "again",
    label: "I've tried this before. It never clicked.",
    signal: "The previous explanation did not create understanding.",
    response: "Change the way the idea is approached.",
    detail: "Use a different example, make the connections visible, or approach the same idea from another direction instead of simply repeating the same explanation.",
    next: "A new way into the same idea, with room to pause and make sense of it.",
    marker: "TRY ANOTHER WAY IN",
  },
  {
    id: "further",
    label: "I understand the basics. What's next?",
    signal: "The learner may be ready to transfer or extend what they know.",
    response: "Put that understanding to work.",
    detail: "Move beyond repetition: connect the idea to a new situation, solve a less familiar problem, or explore a deeper layer.",
    next: "A meaningful next challenge, not another lap around what is already understood.",
    marker: "BUILD ON WHAT YOU KNOW",
  },
];

export default function AdaptiveDemo() {
  const [active, setActive] = useState("again");
  const current = paths.find((path) => path.id === active) ?? paths[1];

  return (
    <div className="lm-demo" aria-labelledby="lm-demo-title">
      <div className="lm-demo-top">
        <span className="lm-kicker">A SMALL LOOK AT THE IDEA</span>
        <span className="lm-demo-status"><i /> LEARNING IS PERSONAL</span>
      </div>
      <div className="lm-demo-heading">
        <p className="lm-demo-overline">Imagine you're learning something new.</p>
        <h3 id="lm-demo-title">Where are you <em>right now?</em></h3>
        <p>Choose the situation that feels closest. Notice how the next step changes.</p>
      </div>
      <div className="lm-demo-options" role="group" aria-label="Choose your learning situation">
        {paths.map((path, index) => (
          <button
            className={`lm-demo-option ${active === path.id ? "is-active" : ""}`}
            type="button"
            key={path.id}
            aria-pressed={active === path.id}
            onClick={() => setActive(path.id)}
          >
            <span className="lm-option-number">0{index + 1}</span>
            <span>{path.label}</span>
            <span className="lm-option-arrow" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <div className="lm-response" aria-live="polite">
        <div className="lm-response-label"><span /> WHAT CHANGES</div>
        <div className="lm-response-grid">
          <div className="lm-response-main">
            <span className="lm-response-marker">{current.marker}</span>
            <h4>{current.response}</h4>
            <p>{current.detail}</p>
          </div>
          <div className="lm-response-aside">
            <span>WHAT THIS TELLS US</span>
            <p>{current.signal}</p>
            <div className="lm-response-next"><b>THE NEXT STEP</b><p>{current.next}</p></div>
          </div>
        </div>
      </div>
      <p className="lm-demo-footnote">An illustration of Lumi's design philosophy, not a demonstration of a live adaptive engine.</p>
    </div>
  );
}
