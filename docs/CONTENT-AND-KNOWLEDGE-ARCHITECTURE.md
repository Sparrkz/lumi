# Lumi — Content & Knowledge Architecture

**Document:** `11-CONTENT-AND-KNOWLEDGE-ARCHITECTURE.md`
**Version:** 1.0
**Status:** Foundational Architecture
**Product:** Lumi
**Purpose:** Define how Lumi represents human knowledge, organizes learning content, connects concepts, and transforms knowledge into adaptive learning experiences for people of any age, ability, background, or learning goal.

---

# 1. Purpose

Lumi is intended to support learning across:

* childhood
* adolescence
* adulthood
* older adulthood
* formal education
* professional development
* hobbies
* practical life skills
* creative disciplines
* technical disciplines
* cLumiosity-driven exploration
* project-based learning

Therefore, Lumi cannot be built around a traditional:

> **School → Subject → Chapter → Lesson → Quiz**

architecture.

That structure is too rigid.

Lumi requires a **knowledge-centered architecture**.

---

# 2. Core Principle

Lumi should separate:

> **Knowledge**

from:

> **Content**

from:

> **Learning Experiences**

These are related, but they are not the same thing.

```text
KNOWLEDGE
   ↓
What exists to be understood
   ↓
CONTENT
   ↓
How knowledge is represented
   ↓
LEARNING EXPERIENCE
   ↓
How a particular learner encounters it
```

---

# 3. Example

The underlying knowledge might be:

> Multiplication represents repeated equal groups.

Lumi could represent that knowledge through:

* an animation
* physical objects
* a story
* a diagram
* an explanation
* a game
* a coding exercise
* a real-world shopping problem

The **knowledge remains the same**.

The **representation changes**.

---

# 4. Lumi's Knowledge Model

The fundamental hierarchy should be:

```text
Domain
  ↓
Discipline
  ↓
Area
  ↓
Concept
  ↓
Subconcept
  ↓
Skill
  ↓
Competency
  ↓
Application
```

However, this is not a strict tree.

The real structure is a **graph**.

---

# 5. Why a Graph?

Knowledge is interconnected.

For example:

```text
Fractions
   ↓
Ratios
   ↓
Percentages
   ↓
Interest
   ↓
Finance
```

But:

```text
Fractions
   ↓
Measurement
```

and:

```text
Percentages
   ↓
Statistics
```

also exist.

A tree struggles with this.

A graph handles it naturally.

---

# 6. Lumi Knowledge Graph

Conceptually:

```text
                    MATHEMATICS
                         │
              ┌──────────┼──────────┐
              ↓          ↓          ↓
          Arithmetic   Geometry   Algebra
              │                      │
              ↓                      ↓
        Multiplication             Variables
              │                      │
              ↓                      ↓
           Division              Equations
              │                      │
              └──────────┬───────────┘
                         ↓
                   Problem Solving
                         ↓
                  Real-world use
```

---

# 7. Domain

A **Domain** represents a broad area of human knowledge or practice.

Examples:

```text
Mathematics
Science
Technology
Languages
Arts
Music
History
Business
Health & Wellbeing
Finance
Communication
Engineering
Craft
Cooking
Agriculture
Personal Development
```

The domain system must remain extensible.

---

# 8. Discipline

A discipline represents a more specific branch.

Example:

```text
Technology
 ├── Computer Science
 ├── Software Engineering
 ├── CybersecLumity
 ├── Data Science
 └── Artificial Intelligence
```

---

# 9. Area

An area groups related concepts.

Example:

```text
Computer Science
       ↓
Programming
       ↓
Web Development
```

---

# 10. Concept

A concept represents something a learner can understand.

Examples:

```text
Variables
Functions
Gravity
Fractions
Democracy
Photosynthesis
Supply and demand
Rhythm
Perspective
```

---

# 11. Concept vs Fact

A fact might be:

> Water freezes at 0°C under standard atmospheric pressure.

A concept might be:

> Phase changes occur when matter transitions between states.

Lumi should support both.

---

# 12. Knowledge Types

Lumi should distinguish different types of knowledge.

### Declarative

Knowing **what**.

Example:

> The Earth orbits the Sun.

### Procedural

Knowing **how**.

Example:

> How to solve a quadratic equation.

### Conceptual

Understanding **why/how ideas relate**.

Example:

> Why changing one variable affects another.

### Conditional

Knowing **when to use something**.

Example:

> When should you use a particular statistical method?

### Metacognitive

Understanding one's own learning and reasoning.

Example:

> Knowing when you need to verify an assumption.

---

# 13. Skill

A skill represents something a learner can **do**.

Examples:

```text
Calculate percentages
Write a function
Analyze a graph
Play a chord
Prepare a meal
Communicate an argument
Debug code
```

---

# 14. Concept vs Skill

A learner may:

> understand a concept

without being able to:

> apply the skill.

Therefore Lumi must track them separately.

---

# 15. Competency

A competency represents the ability to combine multiple concepts and skills in meaningful contexts.

Example:

### Financial literacy

Requires:

```text
Percentages
+
Interest
+
Budgeting
+
Decision-making
+
Risk understanding
```

That is broader than a single skill.

---

# 16. Learning Objective

Every meaningful learning experience should have one or more objectives.

An objective describes what the learner should be able to do.

Bad:

> Understand fractions.

Better:

> Explain what the numerator and denominator represent.

Even better:

> Given a visual representation, identify and explain the numerator and denominator.

---

# 17. Lumi Objective Structure

Each objective should contain:

```text
id
description
concepts
skills
competency
difficulty
evidence_requirements
assessment_methods
```

---

# 18. Prerequisites

Concepts can depend on other concepts.

Example:

```text
Addition
   ↓
Multiplication
   ↓
Division
   ↓
Fractions
   ↓
Algebra
```

But prerequisites should be **probabilistic and contextual**, not absolute.

A learner may already understand a concept through another route.

---

# 19. Prerequisite Types

Lumi should support:

### Required

Without it, the learner is very unlikely to succeed.

### Helpful

It makes learning easier.

### Alternative

Another concept can serve the same purpose.

### Advanced prerequisite

Useful for deeper understanding.

---

# 20. Concept Relationships

Lumi should support relationships including:

```text
PREREQUISITE_OF
DEPENDS_ON
RELATED_TO
PART_OF
INSTANCE_OF
EXTENDS
CONTRASTS_WITH
CAUSES
APPLIED_TO
EXAMPLE_OF
GENERALIZES
SPECIALIZES
```

---

# 21. Example Knowledge Graph

```text
Percentage
    │
    ├── prerequisite → Fraction
    ├── related → Ratio
    ├── applied_to → Discounts
    ├── applied_to → Statistics
    └── applied_to → Finance
```

This makes Lumi capable of connecting school knowledge to real life.

---

# 22. Real-World Applications

Every suitable concept should eventually have application relationships.

Example:

```text
Percentages
   ├── Shopping discounts
   ├── Taxes
   ├── Interest
   ├── Statistics
   ├── Sports statistics
   └── Business
```

This allows Lumi to answer:

> "Why am I learning this?"

---

# 23. Content

Content is a representation of knowledge.

Lumi should support:

```text
Text
Images
Diagrams
Audio
Video
Animation
Interactive simulations
Games
Stories
Code
Projects
Exercises
Questions
Real-world activities
```

---

# 24. Content Is Not the Curriculum

A content item might be reused in many learning paths.

For example:

> A simulation showing gravity

could support:

* elementary science
* physics
* engineering
* astronomy
* game development

---

# 25. Content Atomization

Lumi content should be modular.

Instead of creating massive:

> 45-minute lesson

Lumi should support smaller reusable content units.

Example:

```text
Concept Explanation
Example
Demonstration
Practice
Challenge
Reflection
```

These can be assembled dynamically.

---

# 26. Content Atom

A content atom should contain:

```text
id
type
title
content
concepts
skills
objectives
difficulty
age_context
language
accessibility
estimated_duration
prerequisites
metadata
version
```

---

# 27. Content Representation

A concept may have multiple representations.

Example:

```text
Concept:
Fractions

Representations:
├── Visual
├── Text
├── Audio
├── Interactive
├── Story
├── Real-world
└── Symbolic
```

Lumi selects the representation based on context.

---

# 28. Representation Independence

The knowledge graph should not depend on one representation.

This means:

```text
Concept ≠ Video
Concept ≠ Lesson
Concept ≠ Quiz
```

The concept exists independently.

---

# 29. Learning Activity

A learning activity is an interaction designed to generate learning evidence.

Examples:

```text
Explain
Predict
Solve
Build
Compare
Sort
Draw
Code
Discuss
Experiment
Reflect
Apply
```

---

# 30. Assessment

Assessment should not mean only:

> Multiple-choice test.

Lumi should support:

```text
Recall
Recognition
Problem solving
Explanation
Demonstration
Creation
Project
Simulation
Conversation
Practical task
```

---

# 31. Assessment Evidence

An assessment produces evidence.

Example:

```text
Activity:
Solve percentage problem

Evidence:
Correct

Additional evidence:
Fast response
No hints
Explained reasoning
```

This can update the learner model.

---

# 32. Projects

Projects are first-class knowledge structures.

A project can contain:

```text
Goal
Required concepts
Required skills
Milestones
Tasks
Evidence
Artifacts
Reflection
Evaluation
```

---

# 33. Example Project

> **Build a personal budget**

Knowledge requirements:

```text
Percentages
Arithmetic
Income
Expenses
Interest
Decision-making
```

Skills:

```text
Calculate
Compare
Plan
Analyze
```

Lumi can teach missing concepts **inside the project**.

---

# 34. Project-Based Knowledge

This allows:

```text
Project
 ↓
Required competency
 ↓
Missing concept
 ↓
Learning experience
 ↓
Return to project
```

---

# 35. Knowledge Across Domains

Lumi should intentionally create cross-domain relationships.

Example:

```text
Music
 ↓
Frequency
 ↓
Physics
```

or:

```text
Programming
 ↓
Logic
 ↓
Mathematics
```

or:

```text
Cooking
 ↓
Ratios
 ↓
Mathematics
```

---

# 36. Interdisciplinary Learning

Lumi should support interdisciplinary objectives.

Example:

> **Build a small greenhouse.**

Could involve:

```text
Biology
Engineering
Measurement
Mathematics
Programming
Project management
```

---

# 37. Life Knowledge

Lumi should not treat "school subjects" as the center of the universe.

It should support:

```text
Cooking
Communication
Financial literacy
Digital literacy
Critical thinking
Time management
Navigation
Research
Problem solving
Creative skills
Practical skills
```

---

# 38. Real-Life Knowledge Graph

Eventually Lumi can connect:

```text
Knowledge
 ↓
Skill
 ↓
Life situation
 ↓
Practical task
```

Example:

```text
Percentages
 ↓
Discount calculation
 ↓
Shopping
```

---

# 39. CLumiosity Graph

Lumi should also support exploration.

A learner asks:

> Why is the sky blue?

Lumi can create:

```text
Light
 ↓
Wavelength
 ↓
Scattering
 ↓
Atmosphere
 ↓
Color perception
```

The learner can follow the graph naturally.

---

# 40. No Fixed Starting Point

Lumi should allow learners to enter knowledge from anywhere.

```text
Search
Question
Course
Project
Recommendation
Real-world activity
Conversation
```

All paths eventually connect back to the knowledge graph.

---

# 41. Learning Path

A learning path is a **temporary sequence generated for a learner**.

It should not necessarily be stored as a permanent curriculum.

Example:

```text
Goal
 ↓
Current knowledge
 ↓
Prerequisites
 ↓
Selected concepts
 ↓
Activities
 ↓
Practice
 ↓
Application
```

---

# 42. Curriculum

Lumi can still support formal curricula.

Example:

```text
School Curriculum
 ↓
Required competencies
 ↓
Concept graph
 ↓
Adaptive learner paths
```

The curriculum becomes a **constraint layer**, not the entire architecture.

---

# 43. Curriculum Mapping

A concept can map to:

* national curriculum
* school curriculum
* professional certification
* university curriculum
* internal organizational training

This allows Lumi to serve many contexts.

---

# 44. Standards

Lumi should eventually support mappings to external educational standards.

Example:

```text
Lumi Concept
   ↓
Curriculum Standard
   ↓
Learning Objective
```

This should be configurable rather than hardcoded.

---

# 45. Content Difficulty

Content difficulty should be multidimensional.

Metadata can include:

```text
Concept difficulty
Language complexity
Number of steps
Abstraction
Prerequisite burden
Information density
```

---

# 46. Age Appropriateness

Content should support age/developmental metadata.

But:

> Age should be a filter and contextual signal, not the definition of difficulty.

---

# 47. Accessibility Metadata

Every content item should eventually declare available adaptations.

Examples:

```text
Text alternative
Audio alternative
Captions
Transcript
Reduced motion
High contrast
Simplified layout
Keyboard support
Screen-reader support
Adjustable timing
```

---

# 48. Neuroinclusive Content Architecture

Instead of:

> "This is ADHD content."

Use:

> "This content supports reduced distraction, chunking and flexible pacing."

This makes accessibility broadly useful.

---

# 49. Multiple Routes to the Same Objective

Lumi should be able to represent:

```text
Objective
   │
   ├── Route A → visual
   ├── Route B → practical
   ├── Route C → textual
   ├── Route D → project
   └── Route E → conversational
```

---

# 50. No Permanent Learning Style

Lumi must **not** permanently label learners:

> "Visual learner."

Instead:

> "Visual representation appears useful for this concept/context."

Preferences can change.

---

# 51. Content Localization

Content should support localization beyond translation.

This may include:

* examples
* units
* currencies
* cultural context
* terminology
* local references

---

# 52. Example

A financial lesson can adapt examples for:

```text
Nigeria
United States
United Kingdom
India
```

while preserving the underlying concept.

---

# 53. Language Architecture

A content item should separate:

```text
Underlying meaning
+
Language representation
```

This allows Lumi to provide multiple languages without duplicating the entire knowledge structure.

---

# 54. AI Content Generation

AI can help create:

* examples
* explanations
* practice questions
* scenarios
* hints
* alternate explanations
* summaries
* project ideas

But generated content must remain connected to the knowledge graph.

---

# 55. AI Generation Pipeline

```text
Concept
 ↓
Objective
 ↓
Pedagogical requirements
 ↓
Generation
 ↓
Validation
 ↓
Safety checks
 ↓
Quality checks
 ↓
Human review where appropriate
 ↓
Published content
```

---

# 56. AI Should Not Invent Knowledge Relationships Freely

The AI should not arbitrarily decide:

> "Concept A is a prerequisite for Concept B."

Knowledge relationships should be curated, validated, or confidence-scored.

---

# 57. Content Versioning

Every content item needs versions.

```text
Content v1
 ↓
Content v2
 ↓
Content v3
```

Lumi must know which version a learner encountered.

---

# 58. Why Versioning Matters

If an explanation changes and learner performance changes afterward, Lumi needs to know:

> Was the learner interacting with the old or new version?

---

# 59. Content Quality Signals

Lumi can track:

```text
Accuracy
Completion
Learning gain
Error rate
Confusion rate
Accessibility feedback
Teacher feedback
Learner feedback
```

This can help identify weak content.

---

# 60. Content Experimentation

Lumi should eventually support controlled experimentation.

For example:

```text
Explanation A
vs
Explanation B
```

Measure:

> Which produces better learning outcomes?

Not simply:

> Which gets more clicks?

---

# 61. Knowledge Graph Governance

The knowledge graph needs governance.

Every concept should have:

```text
Owner
Version
Status
Source
Review history
Confidence
```

---

# 62. Concept Lifecycle

```text
Proposed
 ↓
Draft
 ↓
Reviewed
 ↓
Published
 ↓
Updated
 ↓
Deprecated
```

---

# 63. Deprecated Concepts

Old content should not necessarily disappear.

Lumi may need historical references.

Therefore:

> Deprecate rather than destructively delete.

---

# 64. Duplicate Concepts

Lumi should eventually detect possible duplicates.

Example:

```text
"Basic percentages"
"Understanding percentages"
```

These might refer to the same underlying concept.

---

# 65. Concept Identity

Each concept should have a stable unique ID.

Names can change.

IDs should remain stable.

---

# 66. Knowledge Graph Example

```text
CONCEPT: percentage

Prerequisites:
- fractions
- division

Related:
- ratio
- proportion

Applications:
- discounts
- tax
- interest
- statistics

Skills:
- calculate percentage
- compare percentages
- interpret percentage change

Objectives:
- explain percentage
- calculate percentage
- apply percentage
```

---

# 67. Content Example

```text
CONTENT: percentage-shopping-example

Type:
Interactive Scenario

Concept:
percentage

Objective:
Calculate percentage discount

Difficulty:
Beginner

Representation:
Real-world simulation

Accessibility:
Reduced motion
Text alternative

Estimated duration:
7 minutes
```

---

# 68. Learning Activity Example

```text
ACTIVITY:
Calculate the discounted price.

Input:
Original price
Discount percentage

Expected evidence:
Correct calculation
Explanation
```

---

# 69. The Relationship

All three connect:

```text
CONCEPT
   ↓
OBJECTIVE
   ↓
CONTENT
   ↓
ACTIVITY
   ↓
EVIDENCE
   ↓
LEARNER MODEL
```

---

# 70. The Full Lumi Knowledge Architecture

```text
                       Lumi KNOWLEDGE
                              │
          ┌───────────────────┼───────────────────┐
          ↓                   ↓                   ↓
       Domains            Concepts             Skills
          │                   │                   │
      Disciplines        Relationships       Competencies
          │                   │                   │
          └───────────────────┼───────────────────┘
                              ↓
                       Learning Objectives
                              ↓
                       Content Library
                              ↓
                       Learning Activities
                              ↓
                      Assessments / Projects
                              ↓
                           Evidence
                              ↓
                        Learner Model
                              ↓
                       Adaptive Engine
```

---

# 71. Lumi's Content Philosophy

Content should be:

**Modular**

Reusable across contexts.

**Composable**

Able to combine into experiences.

**Adaptive**

Able to change representation and difficulty.

**Accessible**

Usable by different people.

**Interdisciplinary**

Connected across domains.

**Real-world**

Connected to practical applications.

**Evidence-driven**

Evaluated by learning outcomes.

**Versioned**

Continuously maintainable.

**Human-reviewed where necessary**

Not blindly generated.

---

# 72. What Lumi Should NOT Become

Lumi should not become:

> A giant library of videos.

It should not become:

> A collection of PDFs.

It should not become:

> An AI chatbot with quizzes.

It should not become:

> A traditional LMS with personalization added.

It should become:

> **A living knowledge system capable of constructing appropriate learning experiences around a learner's current state.**

---

# 73. The Fundamental Lumi Abstraction

The most important object is not the:

> Course.

It is the:

> **Capability.**

A learner should ultimately be able to say:

> "I want to be able to do X."

Lumi works backward.

```text
Desired capability
        ↓
Competencies
        ↓
Skills
        ↓
Concepts
        ↓
Prerequisites
        ↓
Learning experiences
        ↓
Evidence
        ↓
Capability achieved
```

---

# 74. Example

Learner:

> **I want to build a mobile app.**

Lumi determines possible competency areas:

```text
Programming
UI/UX
Data
APIs
Debugging
Deployment
SecLumity
Project planning
```

It then examines what the learner already knows.

Then it constructs an individualized route.

---

# 75. Another Example

Learner:

> **I want to cook dinner for my family.**

Lumi can teach through the actual task:

```text
Recipe reading
Measurement
Ratios
Food preparation
Timing
Safety
Planning
Budgeting
```

Learning becomes connected to life.

---

# 76. This Is Why Lumi Can Serve Everyone

A seven-year-old can say:

> "I want to understand dinosaurs."

A university student can say:

> "I need to understand calculus."

A developer can say:

> "I want to learn Rust."

A parent can say:

> "I want to learn how mortgages work."

An older adult can say:

> "I want to learn how to use a smartphone."

The underlying architecture remains the same.

Only the:

> **goal + knowledge state + pedagogical experience**

changes.

---

# 77. Final Architectural Principle

Lumi should treat human knowledge as a **connected landscape**, not a collection of courses.

And it should treat learning as:

> **navigation through that landscape according to the learner's goals, current understanding, context, and needs.**

---

# 78. Documents Completed So Far

We now have:

```text
01 — Lumi Product Vision
02 — Lumi Product Requirements
03 — Lumi Learner Model
04 — Lumi Knowledge Architecture
05 — Lumi Functional Architecture
06 — Lumi Information Architecture
07 — Lumi Design System
08 — Lumi UX Flow
09 — Lumi Pedagogical Engine
10 — Lumi Adaptive Engine
11 — Lumi Content & Knowledge Architecture
```

## Next document

The next thing I'd define is:

# `12-Lumi-ASSESSMENT-AND-EVIDENCE-SYSTEM.md`

This is **very important** before we touch implementation.

It will define exactly how Lumi determines whether someone actually learned something without turning Lumi into an endless exam platform.

We'll cover:

* diagnostic assessment
* formative assessment
* summative assessment
* informal evidence
* projects
* conversations
* practical demonstrations
* confidence
* misconceptions
* mastery evidence
* retention evidence
* transfer evidence
* assessment for 7-year-olds
* assessment for adults
* neuroinclusive assessment
* non-test-based evaluation
* scoring
* mastery thresholds
* evidence weighting
* cheating/guessing detection
* AI-assisted assessment
* teacher assessment
* portfolio evidence
* competency verification
* certificates
* and how all of this feeds directly back into the Adaptive Engine.
