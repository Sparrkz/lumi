# Lumi — Adaptive Intelligence Specification v1.0

**Product:** Lumi
**Document:** Adaptive Intelligence Specification
**Version:** 1.0
**Status:** Foundational
**Purpose:** Define the intelligence layer that makes Lumi adaptive rather than static.

---

# 1. Purpose

The Adaptive Intelligence Engine is the core intelligence system behind Lumi.

Its responsibility is to continuously answer:

> **Given everything Lumi currently knows about this learner, what should happen next?**

The engine should transform learner evidence into adaptive decisions.

```text
Learner Activity
      ↓
Evidence Collection
      ↓
Signal Processing
      ↓
Learner State
      ↓
Adaptive Reasoning
      ↓
Next Best Action
      ↓
Learning Experience
      ↓
New Evidence
      ↺
```

The system must continuously update itself as the learner learns.

---

# 2. What Makes Lumi Adaptive?

A static learning platform says:

> Lesson 1 → Lesson 2 → Lesson 3 → Test

Lumi says:

> "Let's determine what this learner needs next."

Two people pursuing the same goal may therefore receive completely different experiences.

Example:

```text
Learner A
Already understands algebra
→ Skip foundational algebra
→ Move into advanced application

Learner B
Weak algebra prerequisites
→ Repair prerequisite
→ Practice
→ Return to original goal
```

Same goal.

Different path.

---

# 3. Adaptive Intelligence Principles

The engine must follow these principles:

### 1. Evidence over assumption

Adapt based on observed evidence.

### 2. Dynamic over permanent

Learner models must change.

### 3. Probabilistic over absolute

The system estimates rather than pretending to know everything.

### 4. Context-aware

Performance must be interpreted in context.

### 5. Goal-aware

Adaptation should serve the learner's objective.

### 6. Human-controlled

Learners can override recommendations.

### 7. Transparent

Important recommendations should be explainable.

### 8. Inclusive

Adaptive decisions must not discriminate against learners.

### 9. Growth-oriented

Past struggles must never become permanent ceilings.

### 10. Capability-focused

The engine optimizes for meaningful learning, not engagement alone.

---

# 4. Lumi Intelligence Architecture

The initial architecture:

```text
                    Lumi LEARNER
                         │
                         ↓
                LEARNING DNA
                         │
        ┌────────────────┼────────────────┐
        ↓                ↓                ↓
   Knowledge         Behaviour        Preferences
        │                │                │
        └────────────────┼────────────────┘
                         ↓
                EVIDENCE LAYER
                         │
                         ↓
              ADAPTIVE SIGNALS
                         │
        ┌────────────────┼─────────────────┐
        ↓        ↓       ↓       ↓         ↓
     Mastery Confidence Retention Errors  ELO
        │        │       │       │         │
        └────────┴───────┴───────┴─────────┘
                         ↓
                 LEARNER STATE
                         ↓
                ADAPTIVE ENGINE
                         ↓
                DECISION ENGINE
                         ↓
                NEXT BEST ACTION
                         ↓
                LEARNING EXPERIENCE
                         ↓
                    NEW DATA
```

---

# 5. The Evidence Layer

Lumi should never modify a learner model directly from raw assumptions.

Instead, learner interactions create **evidence**.

Examples:

* answered question
* confidence rating
* time taken
* hint requested
* explanation requested
* concept revisited
* project completed
* assessment passed
* assessment failed
* learner skipped content
* learner changed format
* learner reported confusion
* learner successfully applied concept

Evidence becomes input into the intelligence system.

---

# 6. Evidence Events

Every meaningful learning interaction should generate an event.

Conceptually:

```text
LearningEvent
├── learner_id
├── session_id
├── timestamp
├── activity_id
├── concept_id
├── skill_id
├── event_type
├── response
├── correctness
├── confidence
├── response_latency
├── difficulty
├── hints_used
├── format
└── contextual_metadata
```

The exact database implementation belongs in the Data Architecture document.

---

# 7. Seven Core Adaptive Signals

Lumi's first adaptive engine should use seven primary signals:

1. **Mastery Score**
2. **Confidence Estimate**
3. **Retention Curve**
4. **Response Latency**
5. **Error Pattern Analysis**
6. **Behavioural Patterns**
7. **Concept ELO**

These signals collectively describe the learner's current state.

---

# 8. Signal 1 — Mastery Score

Mastery estimates how well a learner understands or can perform a concept.

Mastery should be continuous.

Example:

```text
0–20    Unfamiliar
21–40   Emerging
41–60   Developing
61–75   Functional
76–90   Strong
91–100  Highly Reliable
```

These ranges are conceptual and may change after testing.

---

# 9. Mastery Evidence

Mastery may incorporate:

* correctness
* difficulty
* repeated success
* consistency
* independence
* application
* transfer
* time
* recency

A single correct answer should have limited influence.

Repeated evidence should carry greater weight.

---

# 10. Mastery Decay

Mastery should not automatically remain static forever.

If a learner does not interact with a concept for a long period, Lumi should reduce certainty about current mastery.

This does not mean Lumi assumes the learner forgot everything.

Instead:

> **Confidence in the mastery estimate decreases.**

This distinction is important.

---

# 11. Signal 2 — Confidence

Confidence estimates the learner's perceived certainty.

Lumi can collect confidence explicitly when useful.

Example:

```text
Answer: Correct
Confidence: Low

Answer: Correct
Confidence: High
```

These represent different learning states.

---

# 12. Confidence Calibration

Lumi should monitor the relationship between:

**Perceived confidence**

and

**Observed performance.**

Possible patterns:

### Calibrated

Confidence roughly matches performance.

### Overconfident

High confidence + frequent errors.

### Underconfident

Low confidence + consistent success.

### Uncertain

Insufficient evidence.

Lumi can then adapt accordingly.

---

# 13. Signal 3 — Retention Curve

Lumi should estimate how knowledge behaves over time.

Conceptually:

```text
Learning
   ↓
Strong memory
   ↓
Time passes
   ↓
Recall probability decreases
   ↓
Retrieval practice
   ↓
Memory strengthened
```

Lumi should use this to schedule review intelligently.

---

# 14. Retrieval Scheduling

A concept may be scheduled for:

* immediate review
* later today
* tomorrow
* several days later
* several weeks later
* long-term maintenance

The actual scheduling algorithm should evolve based on evidence.

---

# 15. Signal 4 — Response Latency

Response latency is the time between presenting a task and receiving the learner's response.

Latency can provide useful evidence.

For example:

```text
Correct + Fast
→ likely strong retrieval

Correct + Very Slow
→ possible weak retrieval

Incorrect + Fast
→ possible misconception

Incorrect + Slow
→ possible uncertainty or knowledge gap
```

Latency must never be treated as intelligence.

---

# 16. Context Matters

A slow answer might be caused by:

* difficult concept
* unfamiliar interface
* distraction
* poor connectivity
* reading difficulty
* complex question
* multitasking

Therefore latency must be interpreted alongside other signals.

---

# 17. Signal 5 — Error Pattern Analysis

Lumi should maintain an evolving model of mistakes.

Errors can be classified into patterns.

```text
Repeated same error
→ Possible misconception

Errors only on difficult questions
→ Difficulty threshold

Errors after long gaps
→ Retrieval problem

Errors on prerequisite-dependent tasks
→ Prerequisite gap

Correct answers with frequent hints
→ Weak independent mastery
```

The goal is not to punish mistakes.

The goal is to understand them.

---

# 18. Misconception Detection

Lumi should eventually maintain misconception models.

Example:

```text
Concept:
Fractions

Observed pattern:
Learner repeatedly adds denominators.

Possible misconception:
Numerator/denominator operations misunderstood.

Adaptive response:
Return to visual fraction representation.
```

The engine should then test whether the intervention actually improves performance.

---

# 19. Signal 6 — Behavioural Patterns

Lumi should observe how learners interact with learning.

Examples:

* frequent hints
* repeated retries
* skipping
* abandoning tasks
* requesting explanations
* switching formats
* revisiting concepts
* session duration
* pacing
* exploration
* preferred difficulty

Behaviour is evidence.

But behaviour must never be treated as a diagnosis.

---

# 20. Behavioural Interpretation

Example:

```text
Repeatedly requesting simpler explanations
+
Improved performance afterward
=
Simplified explanation may be useful.
```

Not:

> "This learner cannot understand complex material."

The system should adapt the experience without assigning limiting identities.

---

# 21. Signal 7 — Concept ELO

Lumi can maintain a hidden ELO-like rating system.

The purpose is to estimate:

* learner ability relative to challenge
* concept difficulty
* task difficulty

Conceptually:

```text
Learner Ability Rating
        vs
Challenge Rating
        ↓
Expected Performance
        ↓
Actual Performance
        ↓
Update Ratings
```

This allows Lumi to dynamically select appropriate challenges.

---

# 22. Why ELO Is Useful

A learner may perform differently across domains.

Example:

```text
Mathematics ELO: 1450
Programming ELO: 1200
Writing ELO: 1600
Physics ELO: 1100
```

These values should remain internal unless there is a compelling reason to expose them.

They are tools for adaptation, not measures of human worth.

---

# 23. Challenge Matching

Lumi should attempt to select tasks that are neither:

**Too easy**

nor

**Unreasonably difficult.**

Conceptually:

```text
Too Easy
   ↓
Low learning value

Appropriate Challenge
   ↓
High learning value

Too Difficult
   ↓
Frustration / overload
```

The optimal zone varies by learner and context.

---

# 24. The Learner State

The Adaptive Engine should maintain a continuously updated learner state.

Conceptually:

```text
LearnerState
├── goals
├── current_context
├── knowledge_state
├── mastery_state
├── confidence_state
├── retention_state
├── skill_state
├── competency_state
├── behavioural_state
├── preference_state
├── difficulty_state
├── engagement_state
└── recent_learning_history
```

This becomes the current snapshot of the learner.

---

# 25. Learning DNA

Learning DNA is the long-term representation of the learner.

Learner State is the **current state**.

Learning DNA is the **evolving history and model**.

```text
Learning DNA
      ↓
Long-term patterns
      +
Current Learner State
      ↓
Adaptive Decision
```

---

# 26. Learning DNA Must Be Probabilistic

Lumi should never say:

> "You are a visual learner."

Instead:

```text
Visual explanations:
Observed effectiveness = High
Confidence in estimate = 72%
```

This means the system can change its mind.

---

# 27. Contextual Preferences

A learner may prefer different formats for different subjects.

Example:

```text
Programming
→ Interactive examples

History
→ Narrative explanations

Mathematics
→ Visual + worked examples

Languages
→ Audio + conversation
```

Therefore Lumi should model preferences at multiple levels:

* global
* domain
* subject
* concept
* task type
* current context

---

# 28. Adaptive Decision Engine

The Decision Engine converts learner state into an action.

Conceptually:

```text
Learner State
+
Goal
+
Knowledge Graph
+
Available Content
+
Context
        ↓
Candidate Actions
        ↓
Rank Actions
        ↓
Select Best Action
        ↓
Explain Recommendation
```

---

# 29. Candidate Actions

The engine may consider:

```text
Continue
Review
Practice
Teach
Explain differently
Increase difficulty
Decrease difficulty
Backtrack
Test
Apply
Explore
Reflect
Take a break
End session
```

The next action is not always "show another lesson."

---

# 30. Goal Relevance

Every adaptive decision should consider the learner's current goal.

Example:

A learner may know 90% of a topic but need only 70% mastery to accomplish their immediate goal.

Lumi should avoid unnecessary learning purely for the sake of completion.

---

# 31. Time-Aware Adaptation

Lumi should consider the learner's available time.

If someone says:

> "I have 10 minutes."

The engine should adapt.

It might choose:

```text
Quick retrieval
+
One focused concept
+
Short practice
```

rather than beginning a 45-minute lesson.

---

# 32. Energy-Aware Adaptation

Where appropriate, Lumi may allow learners to communicate their current state:

* focused
* tired
* distracted
* cLumious
* rushed

This should be optional.

Lumi should not attempt to infer sensitive psychological or medical states without appropriate safeguards.

---

# 33. Session Planning

Before a session, Lumi may generate:

```text
Today's Focus

1. Review: Fractions
2. Learn: Ratios
3. Practice: 3 problems
4. Apply: Real-world scenario
```

But the plan remains flexible.

The system can change it based on new evidence.

---

# 34. Real-Time Adaptation

Lumi should be capable of adapting within a session.

Example:

```text
Question 1
Correct

Question 2
Correct

Question 3
Incorrect

Question 4
Incorrect

↓
Detect pattern

↓
Possible prerequisite gap

↓
Provide targeted explanation

↓
Give simpler diagnostic question

↓
Evaluate

↓
Continue or backtrack
```

The system should not blindly continue the original sequence.

---

# 35. Adaptive Explanation Engine

Lumi should be able to generate multiple representations of the same concept.

For example:

```text
Concept
├── Simple explanation
├── Standard explanation
├── Deep explanation
├── Analogy
├── Example
├── Visual
├── Step-by-step
├── Interactive
└── Real-world application
```

The Adaptive Engine chooses among these based on evidence.

---

# 36. Adaptive Practice Engine

Practice should not simply generate random questions.

It should select tasks based on:

* mastery
* difficulty
* misconceptions
* retention
* goal
* prerequisite state
* recent performance

The goal is **informative practice**.

Every question should ideally tell Lumi something useful.

---

# 37. Adaptive Assessment

Assessments should measure the learner's actual state efficiently.

Lumi should eventually support:

* diagnostic assessment
* formative assessment
* mastery assessment
* retention assessment
* practical assessment
* project assessment

Assessment should feed back into the learner model.

---

# 38. Diagnostic Assessment

When entering a new domain, Lumi should avoid forcing learners to start from zero.

Instead it may perform a lightweight diagnostic.

Example:

```text
Goal:
Learn calculus

Diagnostic:
Algebra ✓
Functions ✓
Graphs ✓
Trigonometry ~
Limits ?
```

Lumi can then construct a starting point.

---

# 39. Knowledge Gap Detection

Lumi should distinguish:

```text
Unknown
```

from:

```text
Known but weak
```

from:

```text
Previously mastered but currently weak
```

from:

```text
Misunderstood
```

from:

```text
Never assessed
```

This distinction is essential for intelligent adaptation.

---

# 40. Prerequisite Graph Traversal

When a learner struggles:

```text
Current Concept
      ↓
Check dependencies
      ↓
Find weak prerequisite
      ↓
Assess prerequisite
      ↓
Repair if necessary
      ↓
Return to original concept
```

Lumi should avoid unnecessary backtracking.

---

# 41. Adaptive Difficulty

Difficulty should be continuously adjusted.

Signals may include:

* success rate
* ELO
* mastery
* confidence
* latency
* hint usage
* recent errors

Possible actions:

```text
Increase complexity
Decrease complexity
Add scaffolding
Remove scaffolding
Change question type
Change context
```

---

# 42. Adaptive Challenge

Difficulty is not only numerical.

Lumi can increase difficulty by:

* reducing hints
* increasing abstraction
* changing context
* adding constraints
* requiring explanation
* requiring transfer
* combining concepts

This allows more sophisticated progression.

---

# 43. Adaptive Mastery Verification

Before declaring strong mastery, Lumi should seek multiple forms of evidence.

For example:

```text
Recall
+
Application
+
Variation
+
Delayed retrieval
```

A learner should not achieve high confidence solely because they answered several nearly identical questions correctly.

---

# 44. The Mastery Evidence Stack

Conceptually:

```text
Single response
       ↓
Repeated responses
       ↓
Different question forms
       ↓
Different contexts
       ↓
Delayed retrieval
       ↓
Application
       ↓
Strong mastery evidence
```

---

# 45. Adaptive Review

Review should be selective.

Lumi should not make learners repeatedly review everything.

Instead:

```text
Strong + Recently Used
→ No review needed

Strong + Long Gap
→ Light retrieval

Weak + Important
→ Priority review

Weak + Prerequisite
→ Repair
```

---

# 46. Importance Weighting

Not every concept deserves equal review priority.

Lumi should consider:

* goal relevance
* prerequisite importance
* learner weakness
* retention risk
* future dependency

This creates intelligent review.

---

# 47. Forgetting vs Learning Failure

Lumi must distinguish:

> "The learner never understood this."

from:

> "The learner understood this but hasn't retrieved it recently."

These require different interventions.

---

# 48. Adaptive Intervention

Possible intervention hierarchy:

```text
1. Try again
2. Give hint
3. Give example
4. Change explanation
5. Simplify
6. Diagnose prerequisite
7. Review prerequisite
8. Practice
9. Reassess
```

Lumi should use the least disruptive intervention that is likely to help.

---

# 49. Friction Detection

Lumi should identify when a learner is experiencing unnecessary learning friction.

Signals may include:

* repeated abandonment
* excessive retries
* repeated requests for clarification
* rapid skipping
* unusually long inactivity
* repeated interface changes

But the system must distinguish learning difficulty from interface difficulty.

---

# 50. Learner Feedback

The learner should be able to directly tell Lumi:

> "I don't understand."

> "This is too easy."

> "This is too difficult."

> "Explain it differently."

> "I already know this."

> "I want more practice."

> "I want to move faster."

These explicit signals should be highly valuable.

---

# 51. Human Feedback Has Priority

When appropriate:

```text
Observed evidence
+
Learner feedback
```

should be combined.

Lumi should not stubbornly continue a recommendation when the learner explicitly says:

> "This isn't helping."

---

# 52. Recommendation Confidence

Every adaptive recommendation should internally have a confidence estimate.

Example:

```text
Recommendation:
Review fractions

Confidence:
87%

Reason:
Retention risk + recent retrieval errors
```

If confidence is low, Lumi should prefer safer actions such as:

* diagnostic question
* learner choice
* exploratory activity

---

# 53. Exploration vs Exploitation

Lumi must balance:

### Exploitation

Use what the system already knows works.

### Exploration

Try something new to learn more about the learner.

Example:

If Lumi knows visual explanations work well, it can use them frequently.

But occasionally it may test an interactive explanation to determine whether it works even better.

---

# 54. Personalization Should Improve Over Time

The first Lumi session will have limited knowledge about the learner.

Therefore:

```text
Cold Start
    ↓
Collect Evidence
    ↓
Initial Model
    ↓
Adapt
    ↓
Collect More Evidence
    ↓
Better Model
    ↓
Better Adaptation
```

Lumi should become increasingly useful through evidence.

---

# 55. Cold Start

For a new learner, Lumi should not pretend to understand them.

Instead, it can use:

* goals
* self-reported experience
* optional preferences
* diagnostic assessments
* initial behaviour

The learner model begins uncertain.

---

# 56. Uncertainty

Lumi should explicitly represent uncertainty.

For example:

```text
Concept:
Algebra

Mastery estimate:
68%

Confidence in estimate:
41%
```

This means:

> Lumi thinks mastery may be around 68%, but needs more evidence.

This is much safer than pretending the number is exact.

---

# 57. Avoiding False Precision

Lumi should not display overly precise values simply because the backend can calculate them.

For example:

> Mastery: 73.28491%

is misleading.

Internally, Lumi may use precise calculations.

Externally, it should present understandable information.

---

# 58. Adaptive Engine Layers

The final system should eventually separate:

```text
Layer 1 — Event Collection

Layer 2 — Evidence Processing

Layer 3 — Signal Calculation

Layer 4 — Learner Modeling

Layer 5 — Knowledge Graph

Layer 6 — Decision Engine

Layer 7 — Content Selection

Layer 8 — Experience Generation

Layer 9 — Evaluation

Layer 10 — Continuous Improvement
```

This separation will make the architecture easier to evolve.

---

# 59. AI vs Adaptive Engine

This distinction is extremely important.

### AI

Generates:

* explanations
* examples
* questions
* conversations
* feedback
* summaries

### Adaptive Engine

Determines:

* what should happen
* why it should happen
* when it should happen
* how difficult it should be
* what the learner needs

The AI should **not be the entire adaptive engine**.

---

# 60. AI Should Be a Component

Conceptually:

```text
              Lumi ADAPTIVE ENGINE
                       │
       ┌───────────────┼────────────────┐
       ↓               ↓                ↓
 Knowledge Graph   Learner Model   Decision Engine
       │               │                │
       └───────────────┼────────────────┘
                       ↓
                  AI SERVICES
                       │
       ┌───────────────┼────────────────┐
       ↓               ↓                ↓
 Explanation       Assessment       Feedback
 Generation        Generation       Generation
```

This separation prevents Lumi from becoming simply:

> "ChatGPT with courses."

---

# 61. Decision Engine Output

The Decision Engine should produce a structured recommendation.

Conceptually:

```text
AdaptiveDecision

action:
review

concept:
fractions

reason:
retention_risk

confidence:
0.87

difficulty:
low

format:
interactive

estimated_duration:
5 minutes

fallback:
diagnostic_question
```

The final schema belongs in the technical architecture.

---

# 62. Explainable Recommendations

The learner should be able to understand recommendations.

Example:

> **Why review this?**
>
> You learned this concept recently, but your last two attempts suggest recall is becoming less reliable.

This builds trust.

---

# 63. Adaptive Engine Guardrails

The engine must never:

* diagnose
* discriminate
* shame
* intentionally manipulate
* create dependency
* limit opportunity permanently
* treat historical weakness as fixed ability
* infer sensitive traits unnecessarily
* expose sensitive learner data casually

---

# 64. Privacy

Adaptive intelligence requires significant learner data.

Therefore Lumi should follow:

> **Collect only what is useful.**

Data should have:

* purpose
* retention policy
* access control
* transparency
* deletion mechanisms
* secLumity controls

The full privacy architecture belongs in a later document.

---

# 65. Learner Data Ownership

Lumi should treat learner data as belonging to the learner.

The platform should eventually support:

* data access
* data export
* deletion
* privacy controls
* understandable explanations of data usage

---

# 66. Model Evolution

Lumi's adaptive algorithms should evolve over time.

However, changes should not silently destroy learner state.

The system should support:

* model versions
* signal versions
* recommendation versions
* experiment tracking
* rollback

---

# 67. Evaluation

The Adaptive Engine should be evaluated based on learning outcomes.

Important metrics include:

### Learning gain

Did understanding improve?

### Retention

Did learning persist?

### Transfer

Could the learner apply it?

### Mastery reliability

Does the mastery estimate predict future performance?

### Recommendation quality

Did the recommended action help?

### Calibration

Does confidence match reality?

---

# 68. What Lumi Should Not Optimize For

Lumi should not optimize solely for:

* time spent
* number of sessions
* streak length
* clicks
* notifications
* content consumption
* lesson completion

These are engagement signals, not learning outcomes.

---

# 69. The North Star Adaptive Metric

The most important long-term question is:

> **Did Lumi choose an action that meaningfully improved the learner's capability?**

This should guide the evolution of the engine.

---

# 70. Lumi Adaptive Intelligence — Final Architecture

The conceptual architecture is:

```text
                         LEARNER
                            │
                            ↓
                     LEARNING EVENTS
                            │
                            ↓
                     EVIDENCE LAYER
                            │
                            ↓
                 ┌─────────────────────┐
                 │   ADAPTIVE SIGNALS  │
                 ├─────────────────────┤
                 │ Mastery             │
                 │ Confidence          │
                 │ Retention           │
                 │ Response Latency    │
                 │ Error Patterns      │
                 │ Behaviour           │
                 │ Concept ELO         │
                 └──────────┬──────────┘
                            ↓
                     LEARNER STATE
                            │
                 ┌──────────┴──────────┐
                 ↓                     ↓
           LEARNING DNA          KNOWLEDGE GRAPH
                 │                     │
                 └──────────┬──────────┘
                            ↓
                    GOAL CONTEXT
                            │
                            ↓
                   ADAPTIVE ENGINE
                            │
                            ↓
                   DECISION ENGINE
                            │
                            ↓
                  NEXT BEST ACTION
                            │
             ┌──────────────┼──────────────┐
             ↓              ↓              ↓
          Explain         Practice       Assess
             │              │              │
             └──────────────┼──────────────┘
                            ↓
                     LEARNING EVENT
                            │
                            ↺
```

---

# 71. The Lumi Intelligence Principle

The Adaptive Engine should never ask:

> **"What content should we show next?"**

It should ask:

> **"What action would most meaningfully move this learner toward their goal, given what we currently know about them?"**

That distinction is the core of Lumi.

---

# 72. Final Principle

Lumi's intelligence should ultimately behave less like a playlist algorithm and more like a continuously learning educational system.

It should know:

**what the learner knows,**

**what they probably understand,**

**what they may be forgetting,**

**where their gaps are,**

**how confidently they know something,**

**what challenges they can handle,**

**what approaches appear effective,**

**what they are trying to accomplish,**

and most importantly:

> **what meaningful next step will help them grow.**



