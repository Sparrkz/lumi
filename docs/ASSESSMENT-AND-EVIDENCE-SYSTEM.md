# Lumi — Assessment & Evidence System

**Document:** `12-ASSESSMENT-AND-EVIDENCE-SYSTEM.md`
**Version:** 1.0
**Status:** Foundational Architecture
**Product:** Lumi
**Purpose:** Define how Lumi determines what a learner understands, what they can do, what they remember, where misconceptions exist, and what evidence should influence the adaptive engine.

---

# 1. Purpose

Lumi should never reduce learning to:

> **"You got 8/10, therefore you know it."**

A score is only one piece of evidence.

Lumi must determine learning through a broader evidence system that can observe:

* knowledge
* understanding
* reasoning
* application
* transfer
* retention
* confidence
* practical ability
* creativity
* problem solving
* communication
* consistency

The objective is not to **test people more**.

The objective is to **understand learning better**.

---

# 2. Core Principle

Lumi should distinguish:

```text
ASSESSMENT
    ↓
An activity designed to gather evidence

EVIDENCE
    ↓
Information about what the learner can currently do

INFERENCE
    ↓
What Lumi believes that evidence means

DECISION
    ↓
What Lumi should do next
```

---

# 3. The Assessment Loop

```text
Learning Experience
        ↓
Assessment / Observation
        ↓
Evidence
        ↓
Evidence Interpretation
        ↓
Learner Model Update
        ↓
Adaptive Decision
        ↓
Next Learning Experience
```

This loop is continuous.

Assessment should not only happen at the end of a course.

---

# 4. Lumi Assessment Philosophy

Lumi assessments should be:

**Purposeful**

Only collect evidence that can inform learning.

**Adaptive**

Difficulty and format can change.

**Multimodal**

Use more than traditional questions.

**Accessible**

Different learners can demonstrate understanding in different ways.

**Low-pressure where possible**

Not every assessment should feel like an exam.

**Evidence-based**

One response should rarely determine mastery.

**Transparent**

Learners should understand what they are demonstrating.

---

# 5. Types of Assessment

Lumi should support:

```text
Diagnostic
Formative
Practice
Mastery
Summative
Retention
Transfer
Performance
Project
Portfolio
Self-assessment
Peer assessment
Teacher assessment
Conversational assessment
Practical assessment
```

---

# 6. Diagnostic Assessment

Purpose:

> Determine what the learner already knows before teaching.

Lumi should avoid forcing learners through material they already understand.

Example:

Learner wants to learn:

> Algebra.

Lumi may quickly evaluate:

```text
Arithmetic
Fractions
Variables
Basic equations
```

Then construct the appropriate starting point.

---

# 7. Diagnostic Assessment Should Be Efficient

Do not give someone:

> 100 questions.

if Lumi can establish the same understanding with:

> 10 carefully selected questions.

---

# 8. Adaptive Diagnostic Testing

Lumi can dynamically choose the next question based on previous answers.

```text
Question
   ↓
Correct
   ↓
Harder question

Incorrect
   ↓
Related prerequisite
```

This allows Lumi to rapidly estimate the learner's current state.

---

# 9. Formative Assessment

Formative assessment happens dLuming learning.

Its purpose is:

> **Improve learning while it is happening.**

Examples:

* quick question
* prediction
* explanation
* practice problem
* mini challenge
* reflection
* interactive simulation

---

# 10. Formative Assessment Should Not Interrupt Constantly

Lumi should avoid:

```text
Learn
 ↓
Quiz
 ↓
Learn
 ↓
Quiz
 ↓
Quiz
 ↓
Quiz
```

That creates assessment fatigue.

Evidence can be gathered naturally through learning activities.

---

# 11. Embedded Assessment

A learning activity can itself generate evidence.

Example:

Instead of asking:

> "Do you understand fractions?"

Lumi gives:

> "Divide these objects equally between four people."

The learner demonstrates understanding naturally.

---

# 12. Practice vs Assessment

Not every mistake should become a formal assessment result.

Lumi must distinguish:

```text
Practice mistake
```

from:

```text
Reliable evidence of misunderstanding
```

Practice is a safe space to make mistakes.

---

# 13. Mastery Assessment

Mastery assessment asks:

> **Has the learner demonstrated sufficient understanding or ability?**

Mastery should require multiple pieces of evidence where appropriate.

---

# 14. Mastery Is Concept-Specific

A learner can have:

```text
Mathematics → strong
Fractions → strong
Algebra → developing
Geometry → emerging
```

There should be no single:

> "Math score."

---

# 15. Summative Assessment

Summative assessment evaluates achievement at a larger boundary.

Examples:

* end of unit
* certification
* course completion
* professional competency
* project completion

However, Lumi should not make summative assessments the primary learning mechanism.

---

# 16. Retention Assessment

Lumi must determine whether learning persists.

Example:

```text
Day 1 → Learn
Day 3 → Recall
Day 14 → Recall
Day 45 → Recall
```

This creates evidence about retention.

---

# 17. Retrieval Practice

Lumi should use appropriately spaced retrieval.

For example:

> "Can you solve this without looking at the explanation?"

This provides stronger evidence than rereading alone.

---

# 18. Transfer Assessment

Transfer is one of Lumi's most important assessment capabilities.

The learner should demonstrate:

> Can I use what I learned in a new situation?

Example:

They learn percentages using:

> school grades.

Later Lumi gives:

> shopping discounts.

If they succeed, Lumi gains transfer evidence.

---

# 19. Why Transfer Matters

A learner can memorize a procedure without understanding the underlying idea.

Transfer helps distinguish:

```text
Memorization
```

from:

```text
Understanding
```

---

# 20. Performance Assessment

Performance assessment asks the learner to **do something**.

Examples:

```text
Write code
Play an instrument
Give a presentation
Analyze data
Build something
Prepare food
Solve a practical problem
Perform an experiment
```

---

# 21. Project Assessment

Projects can provide rich evidence.

A project can demonstrate:

```text
Planning
Knowledge
Skill
Problem solving
Persistence
Application
Creativity
Reflection
```

---

# 22. Portfolio Evidence

Lumi should eventually maintain a learner portfolio.

Examples:

```text
Projects
Documents
Code
Artwork
Presentations
Experiments
Achievements
Reflections
Practical demonstrations
```

This becomes a richer representation of capability than test scores.

---

# 23. Conversational Assessment

Lumi can sometimes assess understanding through conversation.

Example:

> "Explain why you chose that approach."

The answer can provide evidence about:

* reasoning
* conceptual understanding
* misconceptions
* confidence

However, conversational assessment should be carefully validated and should not assume that language fluency equals conceptual ability.

---

# 24. Practical Assessment

For practical skills:

```text
Cooking
Programming
Woodworking
Music
Art
Public speaking
Repair
Engineering
```

Lumi should prioritize demonstration over written tests where appropriate.

---

# 25. Multiple Ways to Demonstrate Knowledge

If the objective is:

> Understand the water cycle.

Possible evidence:

```text
Explain it
Draw it
Arrange stages
Build a model
Answer questions
Explain it verbally
Apply it to weather
```

Lumi should choose appropriate forms.

---

# 26. Accessibility Principle

The assessment should measure:

> **The intended competency**

rather than unrelated barriers.

For example, if the objective is mathematical reasoning, unnecessary reading complexity should not distort the result.

---

# 27. Neuroinclusive Assessment

Lumi should support:

* flexible pacing
* reduced distractions
* clear instructions
* chunked tasks
* optional breaks
* alternate representations
* adjustable presentation
* text/audio options
* predictable structure
* multiple demonstration methods

These are accessibility features, not separate "special" assessment modes.

---

# 28. No Forced "Normal" Learning Behavior

Lumi should not penalize a learner simply because they:

* need more processing time
* prefer a different representation
* take breaks
* revise answers
* use accessibility tools

unless the specific competency being assessed genuinely requires that behavior.

---

# 29. Assessment Context

Every assessment should record its context.

For example:

```text
Time available
Device
Environment
Accessibility settings
Hints enabled
Number of attempts
Prior exposure
```

This helps Lumi interpret evidence appropriately.

---

# 30. Evidence Model

Every meaningful assessment produces evidence.

Conceptually:

```text
Evidence
──────────────
Learner
Concept
Skill
Objective
Activity
Result
Difficulty
Context
Timestamp
Confidence
Evidence Type
Quality
```

---

# 31. Evidence Strength

Not all evidence should have equal weight.

For example:

```text
Guess
```

is weaker evidence than:

```text
Correct answer + explanation + successful transfer
```

---

# 32. Evidence Quality

Lumi can assign an internal evidence-quality estimate.

Example:

```text
Low
Medium
High
Very High
```

This should be determined from multiple signals.

---

# 33. Example Evidence

```text
Concept:
Fractions

Evidence:
Correct answer

Confidence:
Moderate

Explanation:
Correct

Transfer:
Not yet tested

Evidence strength:
Moderate
```

---

# 34. Evidence Categories

Lumi should track:

### Direct Evidence

The learner explicitly demonstrates the skill.

### Indirect Evidence

Behavior suggests understanding.

### Self-Reported Evidence

The learner reports their own understanding.

### External Evidence

Teacher, mentor, assessment, or imported credential.

---

# 35. Direct Evidence Should Usually Dominate

For competency claims:

```text
Demonstration
>
Repeated performance
>
Assessment result
>
Self-report
```

But the exact weighting should depend on the objective.

---

# 36. Confidence

Lumi should track both:

```text
Performance confidence
```

and:

```text
System confidence in its inference
```

These are different.

---

# 37. Example

```text
Learner confidence:
High

Actual performance:
Weak

System confidence:
High
```

Lumi may detect a misconception.

---

# 38. The Opposite

```text
Learner confidence:
Low

Actual performance:
Strong

System confidence:
High
```

Lumi may need to provide more reassurance and opportunities for successful application rather than reteaching everything.

---

# 39. Misconception Detection

Lumi should identify recurring incorrect reasoning.

Example:

Learner repeatedly believes:

> Multiplication always makes numbers larger.

Lumi should recognize this as a conceptual misconception rather than three unrelated wrong answers.

---

# 40. Misconception Model

Conceptually:

```text
Misconception
──────────────
learner
concept
pattern
evidence_count
confidence
first_detected
last_detected
status
```

---

# 41. Misconception Intervention

When confidence is high enough:

```text
Detect
 ↓
Explain contradiction
 ↓
Provide alternative representation
 ↓
Practice
 ↓
Reassess
```

---

# 42. Guess Detection

Lumi should distinguish:

```text
Known
```

from:

```text
Lucky guess
```

Signals can include:

* inconsistent performance
* response patterns
* explanation quality
* repeated attempts

But Lumi should avoid claiming certainty when evidence is weak.

---

# 43. Rapid Guessing

Repeated extremely rapid responses may indicate guessing.

Lumi can respond with:

> "Take your time and think through this one."

rather than immediately declaring failure.

---

# 44. Hint Usage

Hints should be treated carefully.

Using a hint does **not** necessarily mean:

> "They don't know it."

It can indicate:

```text
Scaffolding need
```

or simply:

```text
Strategy preference
```

---

# 45. Attempts

Multiple attempts provide useful evidence.

For example:

```text
Attempt 1 → incorrect
Attempt 2 → corrected
Attempt 3 → independent success
```

This is different from:

```text
Attempt 1 → correct immediately
```

Both are valuable, but they represent different states.

---

# 46. Explanation Evidence

For appropriate objectives, Lumi should sometimes ask:

> "How did you get that answer?"

This can expose:

* reasoning
* misconceptions
* shortcuts
* genuine understanding

---

# 47. But Do Not Overuse Explanations

Requiring written explanations for everything creates unnecessary friction.

Lumi should only request them when they provide meaningful evidence.

---

# 48. Confidence Check

Lumi can occasionally ask:

> "How sure are you?"

Use sparingly.

Possible scale:

```text
Not sure
Somewhat sure
Very sure
```

---

# 49. Self-Assessment

Learners should have opportunities to reflect:

> "What feels easy?"

> "What still feels confusing?"

This is useful evidence but should not override performance evidence.

---

# 50. Teacher Evidence

Teachers can provide structured evidence.

Example:

```text
Observed skill:
Explains ideas clearly

Evidence:
Class presentation

Teacher confidence:
High
```

---

# 51. Mentor Evidence

For professional or practical learning, mentors can validate competencies.

Example:

> "Successfully configured the system independently."

---

# 52. External Evidence

Lumi can optionally import verified achievements.

Examples:

```text
Certificate
Course completion
Exam result
Professional credential
Portfolio artifact
```

Imported evidence should be marked as external.

---

# 53. Evidence Expiration

Some skills change over time.

For example:

```text
Knowledge:
May decay

Professional competency:
May become outdated

Certification:
May expire
```

Lumi should support evidence freshness.

---

# 54. Evidence Recency

Every evidence record has:

```text
timestamp
```

and potentially:

```text
freshness
```

This feeds the retention model.

---

# 55. Mastery Calculation

Lumi should not use:

```text
Correct answers / total answers
```

as its complete mastery calculation.

Instead, mastery should incorporate:

```text
Accuracy
Difficulty
Recency
Consistency
Transfer
Explanation
Retention
Evidence quality
```

---

# 56. Concept Mastery State

Conceptually:

```text
Mastery Probability
Confidence
Retention Probability
Evidence Count
Last Demonstrated
Transfer Status
```

---

# 57. Mastery Thresholds

Lumi can define configurable thresholds.

Example:

```text
0.00–0.29 → Emerging
0.30–0.49 → Developing
0.50–0.69 → Functional
0.70–0.84 → Strong
0.85–1.00 → Demonstrated
```

These numbers are starting points, not universal truths.

They must eventually be validated through real learner data.

---

# 58. Mastery Must Be Contextual

A learner can demonstrate:

> "Can solve simple fractions."

without necessarily demonstrating:

> "Can apply fractions to complex real-world situations."

Therefore mastery can exist at different levels.

---

# 59. Mastery Levels

Possible structure:

```text
Recognition
 ↓
Recall
 ↓
Application
 ↓
Independent Application
 ↓
Transfer
 ↓
Creation
```

---

# 60. Competency Verification

For a competency to be considered demonstrated, Lumi can require evidence across multiple dimensions.

Example:

```text
Knowledge
+
Skill
+
Application
+
Transfer
```

---

# 61. Example: Programming Competency

Lumi should not certify:

> "You know JavaScript"

because someone passed 20 multiple-choice questions.

Instead:

```text
Explain concepts
+
Write code
+
Debug code
+
Build something
+
Apply concepts in a new problem
```

---

# 62. Assessment Difficulty

Difficulty should adapt dynamically.

If the learner answers correctly:

```text
Increase difficulty
```

If repeatedly incorrect:

```text
Reduce complexity
or
investigate prerequisite
```

---

# 63. Assessment Item Metadata

Every assessment item should contain:

```text
id
objective
concepts
skills
difficulty
question_type
expected_evidence
answer_model
scoring_model
accessibility
time_estimate
version
```

---

# 64. Question Types

Lumi should support:

```text
Multiple choice
Multiple response
True/false
Ordering
Matching
Fill-in
Short answer
Long answer
Numerical
Code
Drawing
Simulation
Drag-and-drop
Audio response
Video response
Practical demonstration
Project
Conversation
```

---

# 65. Question Selection

The assessment engine should select items based on:

```text
Concept
Objective
Current mastery
Difficulty
Evidence gap
Previous attempts
Accessibility
Context
```

---

# 66. Item Banks

Lumi should maintain reusable item banks.

```text
Concept
 ↓
Objective
 ↓
Assessment items
```

Multiple items should assess the same objective differently.

---

# 67. Avoid Repetition

If a learner already answered an exact question, Lumi should not repeatedly reuse it as though it were new evidence.

It can use a different representation.

---

# 68. Assessment Generation

AI may generate new assessment items.

But generated assessments should be validated against:

```text
Objective
Correctness
Difficulty
Expected answer
Bias
Accessibility
Safety
```

---

# 69. AI Grading

AI can assist with:

* explanations
* essays
* code
* projects
* open-ended answers

But AI-generated scores should include:

```text
confidence
rubric
evidence
```

---

# 70. No Black-Box Grading

Lumi should not simply say:

> Score: 72%

without an explanation of the assessment criteria.

---

# 71. Rubrics

For open-ended work, Lumi should support structured rubrics.

Example:

```text
Conceptual accuracy
Reasoning
Application
Completeness
Communication
```

---

# 72. Rubric-Based Evaluation

Each criterion can produce evidence independently.

Example:

```text
Reasoning → Strong
Accuracy → Strong
Application → Developing
```

This gives Lumi more useful information than one score.

---

# 73. Project Evaluation

Projects should be evaluated across:

```text
Process
Artifact
Reasoning
Application
Reflection
```

---

# 74. Portfolio Assessment

Lumi can periodically review accumulated evidence.

Example:

```text
Project
 ↓
Artifact
 ↓
Reflection
 ↓
Competencies demonstrated
```

---

# 75. Long-Term Evidence

Lumi should build a longitudinal picture:

```text
Day 1
 ↓
Month 1
 ↓
Month 3
 ↓
Month 6
 ↓
Year 1
```

This allows Lumi to understand genuine growth.

---

# 76. Evidence Timeline

Learners should eventually be able to see:

> **Your Learning Journey**

showing meaningful milestones rather than hundreds of raw scores.

---

# 77. Learner-Facing Language

Avoid:

> "Your mastery probability is 0.73."

Prefer:

> **You're becoming confident with this.**

or:

> **You've demonstrated this skill several times.**

---

# 78. Assessment Feedback

Feedback should answer:

### What happened?

> Your answer is incorrect.

### Why?

> The denominator represents the total number of equal parts.

### What next?

> Try representing the fraction visually.

---

# 79. Feedback Should Be Adaptive

Different learners may need:

```text
Short hint
Detailed explanation
Example
Visual
Worked solution
Challenge
```

Lumi chooses appropriately.

---

# 80. Avoid Over-Explaining

If a learner clearly understands something, Lumi should not force a giant explanation.

---

# 81. Error Recovery

After a mistake:

```text
Mistake
 ↓
Interpret
 ↓
Determine severity
 ↓
Choose response
```

Possible responses:

```text
Hint
Retry
Alternate explanation
Prerequisite review
New example
Challenge
```

---

# 82. Error Is Data

A mistake should not simply be:

```text
Wrong = 0
```

It should potentially reveal:

```text
Misconception
Knowledge gap
Careless error
Guess
Ambiguity
Instruction issue
```

---

# 83. Assessment Quality Monitoring

Lumi should monitor its own assessments.

For example:

If many learners consistently fail one question but perform well elsewhere:

> The question may be poorly designed.

---

# 84. Detecting Bad Questions

Signals:

```text
Unexpected failure rate
Ambiguous answers
Very high disagreement
Poor learning correlation
Accessibility complaints
```

---

# 85. Content vs Learner Problem

Lumi should avoid assuming:

> "The learner failed, therefore the learner doesn't understand."

It should also ask:

> "Could the assessment itself be the problem?"

---

# 86. Assessment Fairness

Lumi should monitor whether assessment performance is affected by irrelevant factors such as:

* language complexity
* unnecessary timing
* interface complexity
* accessibility barriers
* cultural assumptions

---

# 87. Child Assessment

For young learners, assessment should often appear as:

```text
Play
Exploration
Story
Puzzle
Building
Drawing
Conversation
```

rather than constant formal testing.

---

# 88. Example: Seven-Year-Old

Goal:

> Understand addition.

Instead of:

> 20-question worksheet

Lumi could present:

> "You have 5 apples. You find 3 more. How many do you have?"

Then:

> "Can you show me another way to make 8?"

Evidence is gathered through play.

---

# 89. Adult Assessment

For an adult learning budgeting:

Lumi could provide:

> "You earn X and have these monthly expenses. Create a realistic budget."

That demonstrates practical competency.

---

# 90. Neuroinclusive Assessment

Lumi should allow learners to demonstrate knowledge without unnecessary barriers.

Example:

If the goal is:

> Explain a scientific process.

Possible modes:

```text
Write
Speak
Draw
Arrange diagrams
Build a model
```

provided the chosen mode still captures the intended competency.

---

# 91. No Forced Competition

Assessment should not inherently involve:

```text
Leaderboards
Rankings
Public scores
```

Learning is not a competition unless the learner explicitly enters a competitive context.

---

# 92. No Shame

Avoid language such as:

> "You failed."

Prefer:

> **"This part isn't solid yet."**

or:

> **"Let's try another approach."**

---

# 93. Adaptive Assessment State Machine

```text
NOT_ASSESSED
      ↓
INITIAL_ESTIMATE
      ↓
DEVELOPING
      ↓
FUNCTIONAL
      ↓
STRONG
      ↓
DEMONSTRATED
      ↓
REVALIDATION
```

The state can move backward when evidence indicates forgetting or changed competency.

---

# 94. But Never Erase Achievement

If mastery decreases:

Lumi should preserve:

> **Previously demonstrated**

and separately show:

> **Current evidence suggests review may help.**

This protects the learner's sense of progress.

---

# 95. Reassessment

Reassessment should happen when:

```text
Retention declines
New context appears
Higher competency is required
Evidence conflicts
Learner requests it
```

---

# 96. Assessment Scheduling

Lumi should schedule assessment based on:

```text
Learning importance
Retention
Mastery uncertainty
Goal deadline
Recent evidence
```

---

# 97. Evidence Confidence

Lumi should know when it does **not know enough**.

Example:

```text
Mastery estimate: 0.70
System confidence: Low
```

This means:

> More evidence is needed.

---

# 98. Uncertainty Is Valuable

Lumi should not force every learner into a definitive category.

Sometimes the correct internal state is:

> **Uncertain.**

---

# 99. Evidence Fusion

Lumi should combine evidence.

Example:

```text
Quiz:
Strong

Project:
Strong

Transfer:
Weak

Retention:
Unknown
```

Lumi should conclude:

> Strong current understanding, but transfer and retention need more evidence.

---

# 100. Evidence → Adaptive Engine

The final pipeline is:

```text
Assessment
     ↓
Evidence
     ↓
Evidence Quality
     ↓
Mastery Update
     ↓
Confidence Update
     ↓
Retention Update
     ↓
Misconception Detection
     ↓
Skill Update
     ↓
Learner Model
     ↓
Adaptive Engine
```

---

# 101. Example Full Scenario

Learner:

> Wants to learn percentages.

### Step 1

Diagnostic assessment.

```text
Fractions → Strong
Division → Strong
Percentages → Emerging
```

### Step 2

Lumi teaches percentages.

### Step 3

Learner solves:

```text
8/10 correct
```

### Step 4

Lumi observes:

```text
Correct
Low hesitation
No hints
```

### Step 5

Mastery increases.

### Step 6

Lumi introduces:

> Shopping discounts.

### Step 7

Learner struggles.

### Step 8

Lumi detects:

> Can calculate percentages abstractly but struggles with real-world application.

### Step 9

Lumi changes strategy.

```text
Real-world examples
+
visual representation
+
guided practice
```

### Step 10

Learner succeeds.

### Step 11

Lumi records:

> Transfer demonstrated.

That is true adaptive learning.

---

# 102. What Lumi Should Ultimately Know

For each important concept, Lumi should be able to estimate:

```text
What does the learner know?
How well do they know it?
How confidently do they know it?
Can they apply it?
Can they transfer it?
Will they remember it?
What misconceptions exist?
How much evidence supports this conclusion?
When was it last demonstrated?
```

---

# 103. What Lumi Should Ultimately Be Able to Say

Not:

> "You scored 82%."

But:

> **"You've demonstrated a strong understanding of percentages in familiar problems. You've also successfully applied them to shopping scenarios. Let's revisit them briefly later to make sure the knowledge sticks."**

That is substantially more useful.

---

# 104. Assessment System Architecture

```text
                    ASSESSMENT SYSTEM
                           │
        ┌──────────────────┼──────────────────┐
        ↓                  ↓                  ↓
   Assessment           Activities         Projects
        │                  │                  │
        └──────────────────┼──────────────────┘
                           ↓
                        Evidence
                           │
        ┌──────────────────┼──────────────────┐
        ↓                  ↓                  ↓
    Performance        Confidence       Context
        │                  │                  │
        └──────────────────┼──────────────────┘
                           ↓
                  Evidence Interpretation
                           │
        ┌──────────────────┼──────────────────┐
        ↓                  ↓                  ↓
      Mastery          Retention        Misconceptions
        │                  │                  │
        └──────────────────┼──────────────────┘
                           ↓
                     Learner Model
                           ↓
                    Adaptive Engine
```

---

# 105. Core Design Rule

Lumi should **measure learning without making learning feel like measurement**.

The learner should primarily experience:

> exploring → practicing → creating → solving → discovering → improving

while the system quietly gathers meaningful evidence underneath.

---

# 106. Final Principle

The purpose of Lumi's assessment system is not to answer:

> **"What score did this person get?"**

It is to answer:

> **"What can this person genuinely do now, what are they ready to learn next, and what evidence makes us believe that?"**

That becomes the bridge between Lumi's **Content Architecture** and its **Adaptive Engine**.

---

## Documents completed

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
11 — Content & Knowledge Architecture
12 — Assessment & Evidence System
```

### Next document

The next foundational document should be:

# `13-Lumi-INCLUSIVE-LEARNING-AND-ACCESSIBILITY-SYSTEM.md`

This one deserves special attention because you made a very important decision for Lumi: **it must genuinely work for everybody, including neurodivergent learners, rather than having a token "accessibility mode."**

It should define the actual architecture for:

* neurodiversity
* ADHD-friendly experiences
* autism-inclusive design
* dyslexia-friendly learning
* different processing speeds
* sensory preferences
* visual/audio/text alternatives
* cognitive load
* executive-function support
* flexible pacing
* breaks and session management
* motor accessibility
* visual accessibility
* hearing accessibility
* language differences
* age differences
* children vs adults
* personalization without labeling or diagnosing people
* accessibility profiles
* adaptive accessibility
* assistive technologies
* WCAG
* inclusive assessment
* inclusive content
* and how accessibility signals interact with the adaptive engine **without Lumi ever trying to diagnose a learner**.
