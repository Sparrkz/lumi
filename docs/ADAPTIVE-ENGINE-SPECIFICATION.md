# Lumi — Adaptive Engine Specification

**Document:** `10-Lumi-ADAPTIVE-ENGINE-SPECIFICATION.md`
**Version:** 1.0
**Status:** Core Architecture / Foundational
**Purpose:** Define the intelligence that allows Lumi to understand a learner, estimate what they know, detect what they need, and continuously determine the most useful next learning experience.

---

# 1. The Core Idea

Lumi should not operate like:

```text
Course
 ↓
Lesson 1
 ↓
Lesson 2
 ↓
Lesson 3
 ↓
Lesson 4
```

Instead:

```text
Learner
   ↓
Evidence
   ↓
Learner Model
   ↓
Current State
   ↓
Adaptive Decision
   ↓
Learning Experience
   ↓
New Evidence
   ↓
Updated Learner Model
   ↓
Next Decision
```

Lumi is therefore a **closed-loop adaptive system**.

---

# 2. The Lumi Intelligence Stack

The complete architecture should eventually look like:

```text
                    ┌───────────────────┐
                    │      LEARNER      │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │  Interaction Data │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │  Learner Model    │
                    └─────────┬─────────┘
                              ↓
              ┌───────────────┼────────────────┐
              ↓               ↓                ↓
          Knowledge        Confidence       Retention
            State            State            State
              ↓               ↓                ↓
              └───────────────┼────────────────┘
                              ↓
                    ┌───────────────────┐
                    │  Evidence Engine  │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │ Adaptive Decision  │
                    │      Engine        │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │ Pedagogical Engine │
                    └─────────┬─────────┘
                              ↓
                    ┌───────────────────┐
                    │ Learning Activity  │
                    └─────────┬─────────┘
                              ↓
                         New Evidence
                              │
                              └──────────→
```

---

# 3. The Learner Model

The learner model is Lumi's continuously updated representation of the learner.

It should contain:

```text
Identity
Goals
Interests
Knowledge
Skills
Confidence
Retention
Preferences
Accessibility preferences
Learning history
Projects
Evidence
Behavior patterns
Context
```

---

# 4. Important Principle

The learner model is **probabilistic**, not absolute.

Lumi should never think:

> "This person is bad at mathematics."

Instead:

> "Current evidence suggests they may need support with fractions."

This distinction is extremely important.

---

# 5. Knowledge Graph

Lumi requires a large structured representation of knowledge.

Example:

```text
Mathematics
   │
   ├── Arithmetic
   │     ├── Addition
   │     ├── Subtraction
   │     ├── Multiplication
   │     └── Division
   │
   ├── Fractions
   │     ├── Parts of a whole
   │     ├── Equivalent fractions
   │     ├── Operations
   │     └── Applications
   │
   └── Algebra
```

Each concept becomes a node.

---

# 6. Concept Relationships

Concepts can have relationships such as:

```text
prerequisite_of
depends_on
related_to
part_of
extends
contrasts_with
applied_in
```

Example:

```text
Multiplication
      ↓
Prerequisite for
      ↓
Division
```

---

# 7. Concept Metadata

Every concept should eventually have metadata such as:

```text
id
name
description
domain
difficulty
prerequisites
related_concepts
learning_objectives
representations
activities
assessment_methods
real_world_applications
```

---

# 8. Mastery

Lumi needs an internal estimate of mastery for each relevant concept.

Example:

```text
Multiplication
Mastery estimate: 0.78
```

But this number should generally **not be shown directly to the learner**.

The learner-facing state might be:

> **Strong understanding**

---

# 9. Mastery Is Not Binary

Avoid:

```text
Mastered = true
Mastered = false
```

Learning is continuous.

Use a probability or confidence range internally.

For example:

```text
0.00–0.20  Emerging
0.20–0.40  Developing
0.40–0.60  Partial
0.60–0.80  Strong
0.80–1.00  Demonstrated
```

These thresholds are configurable and should be validated experimentally.

---

# 10. Evidence-Based Mastery

Mastery should be influenced by multiple forms of evidence.

```text
Correct response
+
Explanation
+
Application
+
Transfer
+
Repeated performance
+
Retention
```

One successful question should rarely establish mastery by itself.

---

# 11. Evidence Types

Lumi should collect evidence from:

### Recall

Can they remember it?

### Recognition

Can they identify it?

### Application

Can they use it?

### Explanation

Can they explain it?

### Transfer

Can they use it in another context?

### Creation

Can they create something using it?

---

# 12. Confidence Model

Lumi maintains a separate confidence estimate.

Example:

```text
Mastery: 0.82
Confidence: 0.41
```

This tells Lumi:

> The learner is probably capable, but they aren't confident.

That can influence the next experience.

---

# 13. Confidence Should Not Become Anxiety Tracking

Lumi should not constantly ask:

> "Are you confident?"

Confidence is inferred from:

* optional self-report
* answer patterns
* hesitation
* revision behavior
* consistency

Self-report is only one signal.

---

# 14. Retention Model

Knowing something today does not mean knowing it next month.

Lumi should model retention over time.

Conceptually:

```text
Learning
 ↓
Time passes
 ↓
Recall probability changes
 ↓
Review
 ↓
Retention strengthened
```

---

# 15. Forgetting

Lumi should expect forgetting.

Forgetting is not failure.

It is part of learning.

Therefore:

> A learner forgetting something does not erase their history.

Instead, Lumi updates the current estimate.

---

# 16. Review Scheduling

Lumi can schedule reviews based on:

```text
Mastery
Confidence
Previous review performance
Time since exposure
Importance
Goal relevance
Retention estimate
```

---

# 17. Response Latency

Lumi may record:

```text
time_to_first_action
time_to_answer
number_of_revisions
```

But latency must be interpreted carefully.

It should never automatically mean:

> slow = weak

---

# 18. Error Pattern Analysis

Lumi should look for recurring patterns.

Example:

A learner repeatedly:

```text
Adds denominators incorrectly
```

That suggests a potential misconception.

Lumi can then investigate the underlying concept.

---

# 19. Prerequisite Backtracking

Suppose:

```text
Algebra
 ↓
Struggle
 ↓
Check prerequisite
 ↓
Fractions
 ↓
Weak understanding
```

Lumi can temporarily move backwards.

But it should explain the reason:

> **Let's strengthen one piece underneath this before continuing.**

---

# 20. Adaptive Difficulty

Difficulty should be continuously adjustable.

```text
Too easy
 ↓
Increase challenge

Appropriate
 ↓
Continue

Too difficult
 ↓
Reduce complexity / add support
```

---

# 21. Difficulty Is Multi-Dimensional

"Difficulty" is not just question complexity.

Lumi can adjust:

```text
Concept complexity
Number of steps
Amount of scaffolding
Time pressure
Information density
Novelty
Context complexity
```

---

# 22. No Forced Time Pressure

Lumi should generally avoid unnecessary timers.

Some learners need additional processing time.

Time pressure should only exist when genuinely relevant to the learning goal.

---

# 23. The Seven Core Adaptive Signals

Lumi's first major adaptive model should incorporate:

```text
1. Mastery
2. Confidence
3. Retention
4. Response patterns
5. Error patterns
6. Behavioral patterns
7. Skill/ELO estimate
```

---

# 24. Signal 1 — Mastery

Answers:

> **How well does the learner currently understand this concept?**

---

# 25. Signal 2 — Confidence

Answers:

> **How certain does the learner appear to be about their understanding?**

---

# 26. Signal 3 — Retention

Answers:

> **How likely are they to remember this later?**

---

# 27. Signal 4 — Response Pattern

Looks at:

```text
accuracy
latency
attempts
revisions
hint usage
```

---

# 28. Signal 5 — Error Pattern

Looks for:

```text
repeated mistakes
misconceptions
procedure errors
prerequisite failures
```

---

# 29. Signal 6 — Behavioral Pattern

Examples:

```text
frequent skipping
repeated review
rapid guessing
long pauses
preferred content types
session length
```

These signals must be interpreted cautiously.

Behavior should never be treated as a diagnosis.

---

# 30. Signal 7 — Skill Rating

Lumi can maintain a hidden skill rating inspired by rating systems such as ELO.

Example:

```text
JavaScript Functions
Skill rating: 1210
```

This is useful internally for estimating relative difficulty.

It should not become a public leaderboard.

---

# 31. Why ELO Can Help

Suppose:

```text
Learner skill = 1200
Activity difficulty = 1180
```

Lumi expects a reasonable probability of success.

If the learner repeatedly succeeds:

```text
Skill ↑
```

If they struggle:

```text
Skill ↓
```

This can help Lumi select appropriate challenges.

---

# 32. ELO Is Not Mastery

Do not confuse:

```text
Skill rating
```

with:

```text
Mastery
```

A learner can have strong overall skill but still have a gap in one concept.

---

# 33. Goal Context

Adaptive decisions must consider the learner's goal.

Example:

Someone learning:

> Mathematics for cLumiosity

and someone learning:

> Mathematics for an exam tomorrow

may receive different priorities.

---

# 34. Goal Urgency

Lumi can consider:

```text
deadline
importance
goal progress
available time
```

But should not create unnecessary pressure.

---

# 35. Learning Context

The decision engine should consider:

```text
device
connection
time available
session length
environment
accessibility settings
```

---

# 36. The Next Best Action

This is Lumi's central decision.

Potential actions:

```text
NEW_LEARNING
REVIEW
PRACTICE
REASSESS
PREREQUISITE
DEEPEN
APPLY
PROJECT
EXPLORE
REFLECT
REST
```

---

# 37. Candidate Generation

Lumi first generates possible actions.

Example:

```text
Candidate A → Review fractions
Candidate B → Continue algebra
Candidate C → Practice word problems
Candidate D → Try a project
```

---

# 38. Candidate Scoring

Each candidate receives an internal score based on factors such as:

```text
Goal relevance
Learning value
Expected success
Retention need
Mastery gap
Prerequisite importance
Time fit
Learner preference
Accessibility
Difficulty
```

Conceptually:

```text
Utility =
Learning Value
× Goal Relevance
× Appropriate Difficulty
× Context Fit
```

The exact production formula should be empirically tuned.

---

# 39. Hard Constraints

Before selecting the highest-scoring action, Lumi applies constraints.

Examples:

```text
Cannot access prerequisite
Content unavailable offline
Accessibility conflict
Age-inappropriate material
Goal no longer relevant
```

---

# 40. Final Decision

The system chooses:

> **The highest-value feasible action.**

Not:

> Whatever generates the most engagement.

This distinction should remain a core product principle.

---

# 41. Example: 7-Year-Old

Learner:

```text
Age: 7
Goal: Understand multiplication
```

Evidence:

```text
Addition: strong
Grouping: strong
Multiplication: emerging
Confidence: moderate
```

Lumi might choose:

```text
Concrete grouping activity
```

rather than:

```text
Multiplication worksheet
```

---

# 42. Example: Advanced Learner

Learner:

```text
Age: 16
Goal: Learn programming
Functions: strong
Variables: strong
Loops: strong
```

Lumi might skip:

```text
"What is a variable?"
```

and provide:

> **Build a small program that uses functions and loops to solve a real problem.**

---

# 43. Example: Adult Beginner

Learner:

```text
Age: 35
Goal: Build a website
HTML: beginner
CSS: beginner
JavaScript: unknown
```

Lumi might choose:

```text
Build a simple page
 ↓
Learn HTML as needed
 ↓
Style it
 ↓
Introduce CSS
```

Rather than forcing a 30-hour HTML course first.

---

# 44. Example: Learner Returning After Two Months

Lumi detects:

```text
Previous mastery: strong
Retention: uncertain
```

It might choose:

> **Let's quickly see what still feels familiar.**

Then a short retrieval session.

---

# 45. Example: Correct but Low Confidence

```text
Correct
High hesitation
Low confidence
```

Lumi might choose:

> A slightly varied practice task

rather than teaching the concept again.

---

# 46. Example: Wrong but High Confidence

```text
Incorrect
High confidence
Repeated same misconception
```

Lumi should investigate the misconception.

This is a high-value adaptive state.

---

# 47. Example: Repeated Failure

If a learner repeatedly struggles:

Lumi should not endlessly increase difficulty or repeat the same explanation.

Instead:

```text
Stop
 ↓
Investigate prerequisite
 ↓
Change representation
 ↓
Reduce complexity
 ↓
Provide scaffold
 ↓
Rebuild
```

---

# 48. The Adaptation Loop

After every meaningful interaction:

```text id="x4r8cw"
Observe
 ↓
Interpret
 ↓
Update learner model
 ↓
Generate candidates
 ↓
Apply constraints
 ↓
Score candidates
 ↓
Select next action
 ↓
Deliver experience
```

---

# 49. Adaptation Events

The system should generate events such as:

```text
MASTERY_UPDATED
CONFIDENCE_UPDATED
RETENTION_UPDATED
MISCONCEPTION_DETECTED
PREREQUISITE_GAP_DETECTED
SKILL_RATING_UPDATED
GOAL_UPDATED
PREFERENCE_UPDATED
REVIEW_DUE
PATH_CHANGED
```

---

# 50. Every Adaptation Should Be Explainable

Internally:

```text
Decision:
Review prerequisite X
```

Reason:

```text
Three recent activities indicate difficulty
with prerequisite concept X.
```

Learner-facing:

> **Let's revisit one idea before moving forward.**

---

# 51. Learner Override

Lumi should allow:

```text
Continue anyway
Review
Try harder
Try easier
Change format
Ask Lumi
```

The learner can influence the system.

---

# 52. Human Override

Teachers/mentors with appropriate permissions should be able to influence recommendations.

For example:

> "Prioritize fractions this week."

Lumi adapts while retaining its evidence model.

---

# 53. Never Erase Evidence

If a teacher overrides a recommendation, Lumi should record:

```text
Teacher intervention
```

It should not overwrite the learner's historical evidence.

---

# 54. Learning State Versioning

Important learner state should be versioned.

This allows Lumi to understand:

```text
What did we believe before?
What changed?
Why did it change?
```

---

# 55. Avoid Over-Adaptation

Lumi should not change direction after every tiny event.

Adaptation should have appropriate stability.

Otherwise the learner experiences:

> "Why does Lumi keep changing its mind?"

---

# 56. Stability

Use confidence thresholds and evidence accumulation.

For example:

```text
One mistake
→ small adjustment

Repeated pattern
→ meaningful adjustment

Strong evidence
→ major path change
```

---

# 57. Exploration vs Exploitation

Lumi must balance:

### Exploitation

Do what is most likely to help.

### Exploration

Try another approach to learn more about the learner.

Example:

If a learner normally reads explanations but suddenly struggles, Lumi might test a visual explanation.

This creates new evidence.

---

# 58. Personalization Should Not Become a Prison

Lumi must avoid saying:

> "You prefer visual learning, therefore we will only show visuals."

Preferences should be flexible.

---

# 59. Content Selection

Once the pedagogical strategy is selected, Lumi needs appropriate content.

The Content Engine should find:

```text
concept
representation
difficulty
age suitability
language
accessibility
quality
context
```

---

# 60. Content Quality

Content should be evaluated for:

* correctness
* clarity
* accessibility
* age appropriateness
* cultural neutrality
* pedagogical value

---

# 61. AI-Generated Content

AI can generate or transform content, but Lumi should not blindly trust generated material.

Content should pass appropriate validation.

---

# 62. Content Provenance

Lumi should eventually track:

```text
Source
Author
Version
Generated/curated status
Review status
Last updated
```

---

# 63. Safety Layer

Before content reaches a child or learner, Lumi should apply appropriate safety and age controls.

This becomes particularly important because Lumi is intended for all ages.

---

# 64. Child Protection Architecture

For younger learners, the system should enforce stronger protections around:

* communication
* recommendations
* external links
* social interactions
* user-generated content
* AI conversations
* data collection

These requirements need a dedicated safety/privacy specification later.

---

# 65. Privacy by Design

The adaptive engine should collect only what is needed.

Do not collect a signal merely because:

> "Maybe AI could use it someday."

---

# 66. Sensitive Inference Boundary

Lumi should not attempt to diagnose conditions from behavior.

For example:

```text
Slow response
≠
ADHD
```

or:

```text
Preference for repetition
≠
diagnosis
```

The engine adapts to observable needs rather than assigning medical labels.

---

# 67. The Learner Model Should Be Human-Readable

A learner should eventually be able to see:

> **What Lumi understands about how I learn**

and correct inaccurate information.

---

# 68. Data Ownership

The architecture should be designed so learners can:

* view important data
* export appropriate data
* correct information
* delete information where legally/technically appropriate

For children, this must work within applicable parental and privacy requirements.

---

# 69. Recommended Initial Data Models

The first implementation can eventually include models/entities such as:

```text
Learner
LearnerGoal
LearnerPreference
AccessibilityPreference

Concept
ConceptRelationship
LearningObjective

MasteryState
ConfidenceSignal
RetentionModel
ConceptELO

LearningActivity
ActivityAttempt
AssessmentAttempt
Evidence

BehaviorEvent
ErrorPattern
Misconception

LearningSession
LearningPath
PathNode

Recommendation
AdaptiveDecision
AdaptiveEvent

Project
ProjectEvidence
Skill
SkillEvidence
```

---

# 70. Example Mastery State

Conceptually:

```text
MasteryState
────────────
learner
concept
mastery_probability
confidence
retention_probability
evidence_count
last_evidence_at
last_reviewed_at
status
version
```

---

# 71. Example Evidence

```text
Evidence
────────
learner
concept
activity
type
result
difficulty
response_time
confidence
context
timestamp
```

---

# 72. Example Adaptive Decision

```text
AdaptiveDecision
────────────────
learner
context
candidate_actions
selected_action
reason
signals_used
confidence
timestamp
```

---

# 73. Why Store the Reason?

Because Lumi must eventually answer:

> **Why did you recommend this?**

This is critical for:

* learners
* parents
* teachers
* researchers
* developers
* debugging
* trust

---

# 74. The Adaptive Engine Must Be Testable

Every recommendation should be testable against scenarios.

Example:

```text
Given:
Strong prerequisite knowledge
Low target mastery

Expected:
Teach target concept
```

Another:

```text
Given:
Strong mastery
High retention

Expected:
Increase challenge
```

---

# 75. Simulation

Before deploying real adaptive behavior, Lumi should have simulated learners.

Example:

```text
Fast learner
Struggling learner
Inconsistent learner
Confident-but-wrong learner
Low-confidence learner
Returning learner
CLumiosity learner
Project learner
```

Then test whether Lumi behaves appropriately.

---

# 76. Evaluation Metrics

Lumi should measure whether adaptation actually works.

Potential metrics:

```text
Learning gain
Retention
Transfer
Time to competency
Learner confidence
Goal completion
Drop-off
Unnecessary repetition
Adaptation accuracy
```

Do **not** optimize solely for:

```text
Time spent
Daily active users
Number of lessons completed
```

---

# 77. The Ultimate Metric

The most important question is:

> **Did the learner become more capable?**

---

# 78. Lumi's Intelligence Hierarchy

The final system should conceptually operate like:

```text
                GOAL
                  ↓
          WHAT CAPABILITY?
                  ↓
             KNOWLEDGE
                  ↓
           WHAT IS MISSING?
                  ↓
             EVIDENCE
                  ↓
           WHAT IS TRUE NOW?
                  ↓
           PEDAGOGY
                  ↓
           HOW TO TEACH?
                  ↓
            EXPERIENCE
                  ↓
             OBSERVE
                  ↓
              ADAPT
                  ↓
           WHAT NEXT?
```

---

# 79. The Lumi Adaptive Philosophy

Lumi should be:

**Adaptive, not unpredictable.**

**Personalized, not isolating.**

**Supportive, not patronizing.**

**Challenging, not punishing.**

**Intelligent, not opaque.**

**Flexible, not chaotic.**

**Inclusive, not segregated.**

**Human-centered, not engagement-centered.**

---

# 80. The Final Principle

The engine should never ask:

> **"How do we keep this person using Lumi?"**

It should ask:

> **"What would genuinely help this person grow right now?"**

That question should sit at the center of the entire architecture.

---

# 81. What We Have Now

At this point, Lumi's foundational intellectual architecture is becoming quite strong:

```text
01 — Product Vision
02 — Product Requirements
03 — Learner Model
04 — Knowledge Architecture
05 — Functional Architecture
06 — Information Architecture
07 — Design System
08 — UX Flow
09 — Pedagogical Engine
10 — Adaptive Engine
```

The next major document should **not** be another abstract AI document.

We should start defining **what Lumi actually contains**.

# Next: `11-Lumi-CONTENT-AND-KNOWLEDGE-ARCHITECTURE.md`

That document will define:

* domains
* subjects
* topics
* concepts
* skills
* competencies
* prerequisites
* learning objectives
* activities
* assessments
* projects
* real-world applications
* content types
* content metadata
* how content connects to the knowledge graph
* how AI generates/uses content
* how content is versioned
* how content works for a 7-year-old vs an adult
* how Lumi can eventually expand from mathematics and programming into **essentially any area of human learning**.
