# Lumi — Learning Model & Adaptive Learning Framework v1.0

**Product:** Lumi
**Document:** Learning Model & Adaptive Learning Framework
**Version:** 1.0
**Status:** Foundational
**Purpose:** Define how Lumi understands, models, measures, and adapts to human learning.

---

# 1. Purpose

Lumi is built around a fundamental belief:

> **Learning is not the completion of content. Learning is the development of understanding, capability, and the ability to apply knowledge.**

This document defines the conceptual framework Lumi will use to understand learning across:

* childhood
* adolescence
* university
* professional development
* adulthood
* lifelong learning
* formal education
* informal education
* hobbies
* practical skills
* personal development

The framework must support learners with different:

* ages
* backgrounds
* abilities
* experiences
* learning preferences
* goals
* communication styles
* learning speeds
* cognitive profiles

Lumi must never assume that one learning model works for everyone.

---

# 2. Lumi's Definition of Learning

Lumi defines learning as:

> **A measurable and evolving change in a person's knowledge, understanding, skill, capability, or ability to apply something over time.**

Learning can occur through:

* instruction
* practice
* observation
* conversation
* experimentation
* reading
* listening
* projects
* problem solving
* real-world experiences
* reflection
* teaching others

Lumi therefore treats learning as a continuous process rather than a single event.

---

# 3. Lumi's Learning Hierarchy

Lumi models learning through multiple levels.

```text
Exposure
    ↓
Recognition
    ↓
Understanding
    ↓
Recall
    ↓
Practice
    ↓
Application
    ↓
Transfer
    ↓
Mastery
    ↓
Retention
    ↓
Capability
```

These levels are related but are not interchangeable.

A learner can recognize a concept without understanding it.

A learner can understand something without recalling it later.

A learner can recall something without being able to apply it.

A learner can perform a task without deeply understanding the underlying concept.

Lumi therefore evaluates learning across multiple dimensions.

---

# 4. Knowledge

Knowledge represents information, facts, concepts, relationships, principles, procedures, and mental models that a learner has encountered.

Knowledge may include:

* factual knowledge
* conceptual knowledge
* procedural knowledge
* contextual knowledge
* relational knowledge
* experiential knowledge

Lumi should not assume that knowledge acquired outside Lumi is nonexistent.

Learners may already know something before joining the platform.

The system must therefore distinguish:

> **Not yet assessed**

from:

> **Not yet learned**

---

# 5. Concepts

A **Concept** is a discrete unit of knowledge or understanding that Lumi can track.

Examples:

* Fractions
* Photosynthesis
* Variables
* HTTP
* Supply and demand
* Public speaking
* Color theory

Concepts form the building blocks of Lumi's knowledge model.

Every concept should eventually have:

* unique identifier
* name
* description
* domain
* subject
* prerequisites
* related concepts
* difficulty estimate
* age/context suitability
* associated skills
* learning resources
* assessment methods
* mastery criteria

---

# 6. Skills

A skill represents the ability to perform an action or process.

Examples:

* solve quadratic equations
* write Python functions
* analyze data
* deliver a presentation
* cook a meal
* edit a photograph
* communicate an argument

Skills may depend on multiple concepts.

Example:

```text
Python API Development
        ↓
HTTP
        +
Python
        +
Data Structures
        +
JSON
        +
Authentication
```

Lumi should model these dependencies.

---

# 7. Competencies

A competency represents a broader ability that combines multiple skills, knowledge areas, and behaviours.

Example:

```text
Software Engineering
    ├── Programming
    ├── Algorithms
    ├── Databases
    ├── APIs
    ├── Testing
    ├── Architecture
    └── Problem Solving
```

Competencies should provide a higher-level view of learner development.

---

# 8. Capability

Capability represents the learner's demonstrated ability to use knowledge and skills effectively in meaningful situations.

Lumi should distinguish:

> "Learner knows how authentication works."

from:

> "Learner can implement authentication in a real application."

The second represents capability.

Capability should be demonstrated through evidence such as:

* projects
* practical tasks
* simulations
* assessments
* repeated successful performance
* real-world application

---

# 9. Mastery

Mastery represents the degree to which a learner has developed reliable understanding or ability regarding a concept or skill.

Mastery is not binary.

It should be represented as a continuous estimate.

Example:

```text
Concept: Fractions

Mastery: 78%
Confidence: 72%
Retention: 84%
Difficulty handled: Medium
Evidence: 14 interactions
```

The exact numerical model will be defined in the Adaptive Intelligence Specification.

---

# 10. Mastery Is Multi-Dimensional

Lumi should avoid determining mastery using a single test score.

Mastery may consider:

* accuracy
* consistency
* difficulty
* independence
* response latency
* repeated performance
* confidence
* retention
* application
* transfer

The weighting of these signals must be determined by the adaptive engine.

---

# 11. Confidence

Confidence represents how certain a learner believes they are about their answer or understanding.

Lumi should explicitly collect confidence when useful.

Example:

> "What is your answer?"

Then:

> "How confident are you?"

Possible responses:

* Very unsure
* Unsure
* Somewhat confident
* Confident
* Very confident

This allows Lumi to identify discrepancies.

---

# 12. Confidence Calibration

One of Lumi's goals should be helping learners develop accurate self-assessment.

Consider:

```text
High confidence + Correct
→ Strong understanding

High confidence + Incorrect
→ Possible misconception or overconfidence

Low confidence + Correct
→ Knowledge may exist but confidence is weak

Low confidence + Incorrect
→ Likely genuine learning gap
```

These states should influence the adaptive engine differently.

---

# 13. Retention

Retention represents the likelihood that a learner can retrieve or apply knowledge after time has passed.

Lumi should track learning beyond the immediate session.

The system should eventually estimate:

> **"How likely is this learner to remember this concept later?"**

Retention should influence:

* review scheduling
* recommendations
* practice
* mastery confidence

---

# 14. Forgetting

Lumi treats forgetting as a normal part of human learning.

Forgetting is not automatically failure.

Instead, forgetting provides information about:

* memory strength
* review timing
* concept complexity
* prior mastery
* frequency of use

Lumi should therefore use forgetting as part of its adaptive system.

---

# 15. Retrieval

Lumi should prioritize active retrieval where appropriate.

Instead of always showing the answer again, Lumi may ask the learner to recall:

> "What do you remember about this?"

This helps Lumi measure actual retrieval ability.

---

# 16. Transfer

Transfer represents the ability to use knowledge in a new or different context.

Example:

A learner understands percentages in a textbook.

Lumi should eventually determine whether they can apply percentages to:

* shopping
* business
* finance
* statistics
* real-world decisions

Transfer is an important indicator of meaningful learning.

---

# 17. Learning Context

Lumi should understand that performance depends partly on context.

A learner may perform differently based on:

* task difficulty
* time available
* content format
* device
* environment
* familiarity
* fatigue
* interruptions
* previous learning

Lumi must avoid making overly strong conclusions from isolated interactions.

---

# 18. Learning Preferences

Lumi may identify patterns in preferred learning formats.

Possible formats include:

* text
* audio
* visual
* video
* interactive
* examples
* conversation
* simulation
* project-based
* step-by-step
* exploratory

However:

> **Lumi must treat preferences as contextual signals, not permanent labels.**

Lumi should never permanently classify someone as:

> "A visual learner."

Instead:

> "Visual explanations have recently produced better learning outcomes for this learner in this context."

---

# 19. Learning Pace

Lumi should recognize that learning speed varies.

Pace may be influenced by:

* learner experience
* concept complexity
* prerequisite gaps
* confidence
* familiarity
* learning environment
* personal preference

Lumi should therefore allow:

* shorter sessions
* longer sessions
* breaks
* flexible pacing
* revisiting material
* acceleration when appropriate

Speed must never be treated as a direct measurement of intelligence.

---

# 20. Learning Difficulty

Lumi should dynamically estimate appropriate difficulty.

The goal is not:

> Make everything easy.

The goal is:

> **Provide an appropriate challenge that promotes learning.**

Difficulty may be adjusted through:

* complexity
* number of steps
* ambiguity
* required prior knowledge
* time constraints
* scaffolding
* hints
* problem variation

---

# 21. Scaffolding

Lumi should provide temporary support when a learner needs it.

Scaffolding can include:

* hints
* examples
* partial solutions
* definitions
* visual aids
* guided questions
* smaller subtasks

As mastery improves, Lumi should gradually remove unnecessary support.

This prevents permanent dependence on assistance.

---

# 22. Error Model

A wrong answer is not sufficient information.

Lumi should attempt to identify the underlying error.

Possible categories include:

### Knowledge gap

The learner lacks required knowledge.

### Prerequisite gap

The learner lacks an earlier concept.

### Misconception

The learner holds an incorrect mental model.

### Procedural error

The learner understands the concept but made an execution mistake.

### Attention error

The learner appears to understand but made an isolated mistake.

### Interpretation error

The question or instruction was misunderstood.

### Retrieval failure

The learner previously demonstrated knowledge but cannot retrieve it now.

### Transfer failure

The learner understands the concept in one context but cannot apply it elsewhere.

### Confidence issue

The learner knows the answer but lacks confidence.

The adaptive engine should respond differently to each case.

---

# 23. The Knowledge Graph

Lumi's learning system should be represented as a connected knowledge graph.

```text
Domain
  ↓
Subject
  ↓
Topic
  ↓
Concept
  ↓
Skill
  ↓
Competency
  ↓
Capability
```

Relationships may include:

* prerequisite
* depends on
* related to
* reinforces
* applies to
* extends
* contrasts with
* commonly confused with

This graph becomes one of Lumi's foundational data structures.

---

# 24. Prerequisite Backtracking

When a learner struggles with a concept, Lumi should not automatically repeat the same lesson.

It should inspect prerequisite relationships.

Example:

```text
Learner struggles with:
       ↓
Quadratic equations
       ↓
Check prerequisites
       ↓
Algebraic manipulation
       ↓
Check prerequisite
       ↓
Basic equations
```

Lumi may discover that the actual problem is an earlier missing concept.

The system can then temporarily backtrack.

---

# 25. Forward Progress

Backtracking should not become endless.

Once the missing prerequisite is sufficiently strengthened, Lumi should return the learner to their original goal.

The system should balance:

**Repairing gaps**

with:

**Moving forward**

---

# 26. Adaptive Learning Loop

Lumi's core learning loop:

```text
1. Observe learner
        ↓
2. Gather evidence
        ↓
3. Estimate current state
        ↓
4. Identify learning need
        ↓
5. Select next action
        ↓
6. Deliver learning experience
        ↓
7. Measure response
        ↓
8. Update learner model
        ↓
9. Recalculate recommendations
        ↓
10. Repeat
```

This is the foundation of Lumi's adaptive intelligence.

---

# 27. What Lumi Can Adapt

Lumi should eventually adapt:

### Content

What the learner sees.

### Sequence

What comes next.

### Difficulty

How challenging it is.

### Explanation

How the concept is presented.

### Format

Text, visual, audio, interactive, etc.

### Pacing

How quickly the system progresses.

### Practice

Which exercises are selected.

### Review

When previously learned material returns.

### Assessment

How understanding is measured.

### Support

How much scaffolding is provided.

### Goals

How learning paths connect to the learner's objectives.

---

# 28. The Seven Core Adaptive Signals

Lumi's initial adaptive engine should be built around seven core signals.

## 1. Mastery Score

Estimated understanding of a concept or skill.

## 2. Confidence Estimate

Estimated certainty relative to performance.

## 3. Retention Curve

Estimated probability of future retrieval.

## 4. Response Latency

How long the learner takes to respond.

## 5. Error Pattern Analysis

Patterns in mistakes.

## 6. Behavioural Patterns

How the learner interacts with learning.

## 7. Concept ELO

A hidden difficulty/ability rating that helps estimate which challenge level is appropriate.

These signals should not operate independently.

They should feed into a unified learner model.

---

# 29. Learning DNA

The seven signals contribute to Lumi's broader Learning DNA.

Conceptually:

```text
                    LEARNER
                       │
                 LEARNING DNA
                       │
       ┌───────────────┼───────────────┐
       ↓               ↓               ↓
    Knowledge       Behaviour       Preferences
       │               │               │
       └───────────────┼───────────────┘
                       ↓
                Adaptive Signals
                       │
       ┌───────────────┼───────────────┐
       ↓               ↓               ↓
    Mastery        Confidence      Retention
       ↓               ↓               ↓
    Errors         Latency          ELO
       └───────────────┼───────────────┘
                       ↓
                ADAPTIVE ENGINE
```

---

# 30. Goals

Learning should be connected to goals wherever possible.

A goal can be:

* academic
* professional
* personal
* creative
* practical
* exploratory

Example:

> "Become a web developer."

Lumi should translate this into capabilities.

```text
Goal
 ↓
Capabilities
 ↓
Skills
 ↓
Concepts
 ↓
Prerequisites
 ↓
Learning Path
```

---

# 31. Goal Decomposition

Lumi should eventually be able to transform a broad goal into smaller milestones.

Example:

```text
Become a Web Developer
│
├── Programming Fundamentals
├── HTML
├── CSS
├── JavaScript
├── HTTP
├── Git
├── Databases
├── APIs
└── Deployment
```

The exact path should adapt based on what the learner already knows.

---

# 32. Learning Paths

A learning path is not necessarily a fixed course.

It is a dynamic sequence generated from:

* learner state
* goal
* knowledge graph
* mastery
* prerequisites
* difficulty
* retention
* available time
* preferences

Therefore two learners pursuing the same goal may receive different paths.

---

# 33. Sessions

Lumi should model learning sessions independently.

A session may include:

```text
Session
 ├── Goal
 ├── Concepts
 ├── Activities
 ├── Practice
 ├── Assessment
 ├── Behaviour
 ├── Performance
 └── Reflection
```

Sessions should be flexible.

A learner may have:

* 5-minute sessions
* 15-minute sessions
* 45-minute sessions
* long project sessions

The system should adapt rather than force a universal duration.

---

# 34. Reflection

Reflection should be part of meaningful learning.

Lumi may occasionally ask:

* What felt difficult?
* What made sense?
* What are you still unsure about?
* How confident are you?
* Where would you use this?

Reflection data may help Lumi understand the learner's state.

---

# 35. Real-World Application

Lumi should distinguish between:

> Learning about something

and:

> Being able to use it.

Therefore, learning paths should eventually include:

* projects
* practical tasks
* simulations
* scenarios
* challenges
* real-world applications

---

# 36. Capability Evidence

A learner's capability should be supported by evidence.

Evidence may include:

* assessment results
* project completion
* practical demonstrations
* repeated performance
* application tasks
* portfolio items

This evidence can eventually contribute to the Lumi Skill Passport.

---

# 37. Adaptive Recommendation

Lumi's recommendation engine should answer:

> **What should this learner do next?**

Possible actions include:

* learn a new concept
* review an old concept
* practice
* take an assessment
* explore a prerequisite
* attempt a project
* change explanation style
* increase difficulty
* decrease difficulty
* take a break
* continue a goal

The "next action" does not always have to be another lesson.

---

# 38. Breaks Are Valid Learning Actions

Lumi should recognize that continuing is not always the best choice.

The adaptive engine may recommend:

> Continue

> Review

> Change approach

> Take a short break

> End session

This should be especially important for learners who benefit from flexible pacing.

Lumi should never treat taking a break as failure.

---

# 39. Personalization Without Diagnosis

Lumi should personalize based on evidence without attempting to diagnose learners.

The system should use language such as:

> "This format seems to be helping."

rather than:

> "You learn this way because you have X."

Personalization should remain:

* respectful
* probabilistic
* reversible
* transparent
* user-controlled

---

# 40. Explainability

Whenever possible, Lumi should explain why it recommends something.

Example:

> **Why am I seeing this?**
>
> You practiced fractions 12 days ago. Your recent responses suggest your recall is weakening, so Lumi recommends a short retrieval exercise before continuing.

This creates trust.

---

# 41. Learner Control

Learners should be able to override recommendations.

For example:

> **Lumi recommends reviewing fractions.**

Actions:

**Review**

**Skip**

**Change approach**

**Explore something else**

The learner remains the final decision-maker.

---

# 42. Adaptive Engine Safety

The adaptive engine must not make harmful assumptions.

It must avoid:

* diagnosing conditions
* ranking human worth
* defining intelligence
* permanently labeling learners
* limiting opportunities based on historical performance
* assuming low performance means low ability
* assuming speed equals intelligence
* using demographic characteristics to determine ability
* creating discriminatory learning pathways

Historical performance should inform adaptation, not become a permanent ceiling.

---

# 43. Growth and Change

Learning DNA must be dynamic.

A learner who struggles with mathematics today may become excellent at it later.

A learner who prefers visual explanations today may prefer technical documentation later.

A learner's goals can change.

Therefore all adaptive models should be capable of updating.

Lumi should always leave room for:

> **"The learner has changed."**

---

# 44. Lumi's Learning State

At any point, Lumi should be able to estimate:

```text
Who is the learner?
        +
What is their goal?
        +
What do they know?
        +
What do they understand?
        +
What are they forgetting?
        +
What are they struggling with?
        +
What works for them?
        +
What challenge can they handle?
        +
What should happen next?
```

This is the learner state.

---

# 45. The Lumi Decision Model

The adaptive engine should eventually determine:

```text
NEXT ACTION =
Goal relevance
+
Knowledge state
+
Mastery
+
Confidence
+
Retention
+
Error patterns
+
Difficulty
+
Behaviour
+
Preferences
+
Context
+
Available time
```

The precise mathematical implementation belongs in the **Adaptive Intelligence Specification**.

This document defines the conceptual model, not the final algorithms.

---

# 46. Learning Should Be Measured Over Time

Lumi should care about trajectories rather than isolated events.

Instead of:

> Score today: 72%

Lumi should understand:

```text
Week 1 → 42%
Week 2 → 51%
Week 3 → 63%
Week 4 → 72%
```

The trajectory communicates much more about learning.

---

# 47. Lumi's Learning Metrics

Eventually Lumi should measure:

### Understanding

Does the learner understand?

### Mastery

Can they reliably perform?

### Retention

Can they remember later?

### Transfer

Can they apply it elsewhere?

### Confidence calibration

Does confidence correspond to actual ability?

### Capability

Can they use it meaningfully?

These should be more important than superficial engagement metrics.

---

# 48. The Fundamental Lumi Equation

Conceptually:

```text
Learning Progress
=
Understanding
+
Practice
+
Application
+
Retention
+
Transfer
```

Engagement helps enable learning, but engagement itself is not learning.

---

# 49. What This Framework Enables

This learning model allows Lumi to eventually become:

* adaptive
* lifelong
* neuroinclusive
* goal-oriented
* personalized
* evidence-driven
* competency-based
* project-oriented
* accessible
* AI-assisted

without reducing learning to a simple recommendation algorithm.

---

# 50. Final Lumi Learning Principle

Everything in Lumi's learning architecture should ultimately serve one objective:

> **Help every learner become more capable without forcing them into a single definition of how learning should happen.**

Lumi should not ask:

> "How do we make everyone learn the same way?"

Lumi should ask:

> **"Given who this person is, what they're trying to accomplish, what they already know, and what they've demonstrated so far—what learning experience will help them take the next meaningful step?"**

That question is the foundation of the Lumi Adaptive Learning Engine.

---

# End of Document

**Next document:** `03-Lumi-Adaptive-Intelligence.md`

This document will convert the conceptual learning model into the actual **Lumi brain**: the seven adaptive signals, Learning DNA architecture, knowledge graph, mastery calculations, confidence estimation, forgetting/retention models, Concept ELO, behavioural analysis, recommendation engine, decision-making pipeline, and how all of these interact in real time.
