# Lumi — Pedagogical Engine Specification

**Document:** `09-Lumi-PEDAGOGICAL-ENGINE-SPECIFICATION.md`
**Version:** 1.0
**Status:** Foundational
**Purpose:** Define how Lumi teaches a learner, not merely what Lumi teaches them.

---

# 1. The Core Principle

Lumi must separate two questions:

> **What does this person need to learn?**

and:

> **How is this person most likely to understand it right now?**

The **Adaptive Engine** answers the first.

The **Pedagogical Engine** answers the second.

They work together.

```text
Learner
   ↓
What do they need?
   ↓
Adaptive Engine
   ↓
How should we teach it?
   ↓
Pedagogical Engine
   ↓
Learning Experience
```

---

# 2. Lumi's Educational Philosophy

Lumi is based on the belief that:

> **There is no single correct way to learn.**

But this does **not** mean Lumi assigns people permanent "learning styles."

Instead, Lumi adapts based on:

* the concept
* learner knowledge
* learner goal
* developmental context
* previous performance
* confidence
* cognitive load
* accessibility preferences
* available time
* environment
* interaction history

---

# 3. Pedagogical Engine Responsibilities

The engine decides:

### Representation

How should the concept be presented?

### Scaffolding

How much support should be provided?

### Difficulty

How challenging should the task be?

### Sequencing

What should happen first?

### Practice

What kind of practice is useful?

### Feedback

What kind of feedback should be given?

### Transfer

Can the learner use the idea somewhere else?

### Reflection

Should the learner explain or reflect?

### Pacing

How much should happen in this session?

---

# 4. The Pedagogical Decision

Every learning interaction should conceptually answer:

```text
What is the learner trying to accomplish?

What do they already understand?

What are they currently struggling with?

What representation could make this clearer?

What amount of support is appropriate?

What evidence should we collect?

What should happen next?
```

---

# 5. The Learning Experience Model

Lumi should construct learning experiences from reusable primitives.

```text
Explain
Demonstrate
Explore
Predict
Manipulate
Practice
Compare
Create
Apply
Explain-back
Reflect
Review
```

A lesson is therefore not necessarily a fixed sequence.

It is a **generated experience**.

---

# 6. Example: Multiplication

Lumi's knowledge graph contains:

> Multiplication

The pedagogical engine could generate:

```text
Concrete objects
      ↓
Grouping
      ↓
Repeated addition
      ↓
Symbolic multiplication
      ↓
Practice
      ↓
Application
```

But another learner might begin much further along.

---

# 7. The Concrete → Abstract Principle

For many foundational concepts, Lumi should move through:

```text
Concrete
   ↓
Visual
   ↓
Representational
   ↓
Symbolic
   ↓
Abstract
   ↓
Application
```

However, this is not an absolute rule.

Advanced learners may begin directly at abstraction.

---

# 8. Example: Fractions

### Younger learner

```text
Pizza / objects
 ↓
Parts
 ↓
Equal parts
 ↓
Fraction notation
```

### Older learner

```text
Fraction notation
 ↓
Equivalent fractions
 ↓
Operations
 ↓
Application
```

### Advanced learner

```text
Fractions
 ↓
Ratios
 ↓
Algebraic representation
 ↓
Real-world modeling
```

Same knowledge graph.

Different pedagogical route.

---

# 9. Age Is Context, Not Destiny

Lumi may use age to establish a developmentally appropriate starting hypothesis.

But:

```text
Age ≠ ability
```

A seven-year-old can be advanced in one domain.

A thirty-year-old can be a beginner.

An adult may need foundational support without being treated like a child.

---

# 10. Developmental Bands

Lumi can maintain broad developmental bands internally.

Example:

```text
Early Explorer
Developing Learner
Independent Learner
Emerging Specialist
Advanced Practitioner
```

These should not appear as labels telling users what they "are."

They are pedagogical context.

---

# 11. Early Explorer

Typical characteristics:

* more concrete learning
* shorter activity cycles
* stronger visual guidance
* simple language
* immediate feedback
* guided exploration
* physical/interactive representations

Typical users may include younger children.

---

# 12. Developing Learner

More emphasis on:

* structured reasoning
* explanation
* experimentation
* increasingly abstract concepts
* projects
* independent decisions

---

# 13. Independent Learner

More emphasis on:

* self-direction
* abstraction
* research
* problem solving
* projects
* reflection
* choice

---

# 14. Advanced Practitioner

More emphasis on:

* complexity
* ambiguity
* real-world problems
* specialization
* competing explanations
* independent research
* creation

---

# 15. The Engine Should Be Domain-Aware

Learning mathematics is different from learning:

* music
* programming
* history
* cooking
* communication
* photography
* financial literacy
* carpentry

The pedagogical engine must therefore support **domain-specific strategies**.

---

# 16. Mathematics

Potential sequence:

```text
Understand
 ↓
Represent
 ↓
Calculate
 ↓
Reason
 ↓
Apply
 ↓
Explain
```

---

# 17. Science

Potential sequence:

```text
Observe
 ↓
Question
 ↓
Predict
 ↓
Experiment
 ↓
Observe results
 ↓
Explain
 ↓
Revise
```

---

# 18. Programming

Potential sequence:

```text
Understand
 ↓
Read
 ↓
Modify
 ↓
Predict
 ↓
Write
 ↓
Debug
 ↓
Build
```

---

# 19. Language Learning

Potential sequence:

```text
Understand
 ↓
Recognize
 ↓
Recall
 ↓
Use
 ↓
Communicate
 ↓
Interact
```

---

# 20. Creative Skills

For art, music, design and similar domains:

```text
Observe
 ↓
Explore
 ↓
Imitate
 ↓
Experiment
 ↓
Create
 ↓
Critique
 ↓
Refine
```

---

# 21. Life Skills

For practical learning:

```text
Understand
 ↓
Watch
 ↓
Guided attempt
 ↓
Independent attempt
 ↓
Real-world application
 ↓
Reflection
```

---

# 22. Learning Through Projects

Lumi should support:

> **Project-first learning.**

A learner could say:

> "I want to build a game."

Lumi identifies what the project requires.

Then learning happens when the learner reaches a problem.

```text
Project
 ↓
Problem
 ↓
Missing knowledge
 ↓
Targeted learning
 ↓
Return to project
```

This creates **just-in-time learning**.

---

# 23. The Project Is the Classroom

For advanced learners, Lumi should increasingly allow:

```text
Build something
 ↓
Encounter problem
 ↓
Learn what is needed
 ↓
Apply it
```

rather than forcing a predefined curriculum.

---

# 24. Scaffolding

Scaffolding means giving enough support to help someone succeed without doing the thinking for them.

Lumi should have levels.

```text
Level 0
No help

Level 1
Small hint

Level 2
Guiding question

Level 3
Partial example

Level 4
Worked example

Level 5
Step-by-step guidance
```

---

# 25. Scaffolding Rule

Lumi should attempt to provide the **minimum effective support**.

If a learner can solve something independently:

Don't intervene.

If they struggle:

Increase support.

If they demonstrate independence:

Reduce support.

---

# 26. Fading

Support should gradually disappear.

```text
Guided
 ↓
Partially guided
 ↓
Independent
```

This prevents permanent dependence on Lumi.

---

# 27. Example

Instead of:

> Here's the answer.

Lumi might ask:

> What information do we already know?

Then:

> Which operation could connect those numbers?

Then:

> Try setting up the equation.

The learner performs the reasoning.

---

# 28. Feedback Philosophy

Feedback should answer:

```text
What happened?
Why?
What should I try next?
```

Not merely:

> Correct.

or:

> Wrong.

---

# 29. Immediate Feedback

Useful for:

* foundational skills
* safety-critical procedures
* early practice
* simple factual recall

---

# 30. Delayed Feedback

Sometimes immediate correction isn't desirable.

For complex problem solving, Lumi may allow the learner to:

* finish their attempt
* inspect their reasoning
* compare approaches

before giving detailed feedback.

---

# 31. Error Classification

Lumi should distinguish between different kinds of errors.

```text
Knowledge gap
Prerequisite gap
Misconception
Procedural mistake
Careless mistake
Misread question
Language difficulty
Confidence issue
Representation issue
```

---

# 32. Misconception Handling

If a learner consistently believes:

> heavier objects fall faster

Lumi shouldn't simply mark answers wrong.

It should create an opportunity to confront the misconception.

Example:

```text
Prediction
 ↓
Experiment
 ↓
Observation
 ↓
Compare prediction
 ↓
Rebuild understanding
```

---

# 33. Multiple Explanations

If an explanation fails, Lumi should not simply repeat it louder.

It can switch:

```text
Technical explanation
 ↓
Simple explanation
 ↓
Analogy
 ↓
Visual
 ↓
Example
 ↓
Interactive demonstration
```

---

# 34. But Avoid Misleading Analogies

Analogies can introduce misconceptions.

Lumi should eventually distinguish:

> "This analogy is useful for understanding X, but it isn't literally the same thing."

---

# 35. Retrieval Practice

Lumi should regularly ask learners to recall information rather than constantly showing it.

Example:

Instead of:

> Here's the formula again.

Ask:

> What do you remember about the formula?

Then provide support if needed.

---

# 36. Spacing

Learning should continue beyond the first successful attempt.

Lumi schedules appropriate reviews based on retention evidence.

---

# 37. Interleaving

Where useful, Lumi should mix related skills.

Instead of:

```text
20 identical multiplication problems
```

it might use:

```text
Multiplication
Addition
Division
Multiplication
Word problem
Multiplication
```

This encourages discrimination and transfer.

---

# 38. Transfer

Lumi must test whether knowledge works outside the original context.

If someone learned:

> percentages

Lumi might later ask them to:

* calculate a discount
* interpret a chart
* understand interest
* analyze a real dataset

---

# 39. Explanation as Evidence

Sometimes Lumi should ask:

> **Explain how you got that answer.**

The learner's explanation can reveal understanding that a multiple-choice answer cannot.

---

# 40. Creation as Evidence

For appropriate domains:

> Build something.

Creation can demonstrate deeper understanding.

---

# 41. The Evidence Ladder

Lumi can think about evidence as:

```text
Recognition
 ↓
Recall
 ↓
Application
 ↓
Explanation
 ↓
Transfer
 ↓
Creation
```

Not every skill requires every level.

---

# 42. Confidence

Lumi should compare:

```text
Performance
+
Confidence
```

Examples:

### Correct + confident

Likely strong understanding.

### Correct + uncertain

Possible fragile understanding.

### Wrong + confident

Potential misconception.

### Wrong + uncertain

Possible knowledge gap or unfamiliarity.

This becomes powerful adaptive evidence.

---

# 43. Response Time

Response latency can provide additional evidence.

But Lumi should **never assume**:

> Slow = doesn't understand.

A learner might simply:

* think carefully
* type slowly
* need more processing time
* be distracted
* use assistive technology

Response time must therefore be contextual.

---

# 44. Neuroinclusive Adaptation

Lumi should detect patterns cautiously.

Example:

If a learner repeatedly performs better when instructions are broken into steps, Lumi can offer:

> **Would you like me to break this into smaller steps?**

It should not silently conclude a diagnosis.

---

# 45. Learner Choice

Lumi can ask:

> **How would you like to approach this?**

Options:

```text
Show me
Let me try
Give me a hint
Explain first
```

This gives learners control.

---

# 46. Focused Learning

Some learners benefit from a low-distraction environment.

Lumi can provide:

```text
Focus Mode
```

which removes:

* unnecessary navigation
* notifications
* decorative animation
* unrelated recommendations

---

# 47. Chunking

Large tasks should be broken into meaningful chunks.

Instead of:

> Build a complete website.

Lumi might create:

```text
1. Define the purpose
2. Plan the structure
3. Create the first page
4. Add styling
5. Add interaction
6. Test
7. Publish
```

---

# 48. Chunk Size Should Adapt

A beginner may need:

```text
Create navigation
```

broken into smaller steps.

An experienced developer may simply receive:

> Build the navigation.

---

# 49. Time-Aware Pedagogy

Lumi should consider available time.

If the learner has:

### 5 minutes

One focused activity.

### 20 minutes

Concept + practice.

### 60 minutes

Concept + practice + application.

### Multiple hours

Deep project work.

---

# 50. Energy-Aware Learning

Where appropriate, Lumi can ask:

> **How much energy do you have right now?**

Options:

```text
Low
Normal
High
```

Low-energy mode might emphasize:

* review
* listening
* simpler tasks
* reflection

rather than introducing a difficult new concept.

---

# 51. This Should Be Optional

Lumi should never constantly interrogate learners about their emotional state.

The system should remain lightweight.

---

# 52. CLumiosity-Driven Learning

Lumi must support learning without a predefined goal.

User:

> Why do airplanes fly?

Lumi can answer immediately.

Then:

> Want to explore the science behind it?

Possible path:

```text
Forces
 ↓
Lift
 ↓
Pressure
 ↓
Airflow
 ↓
Flight
```

---

# 53. Serendipitous Learning

Lumi should occasionally surface related ideas.

But recommendations should remain relevant.

Avoid endless algorithmic feeds.

---

# 54. Learning Beyond Formal Education

Lumi should support:

### School

> Pass mathematics.

### Career

> Become a data analyst.

### Hobby

> Learn photography.

### Life

> Understand personal finance.

### Creation

> Build an app.

### CLumiosity

> Understand black holes.

### Personal growth

> Improve public speaking.

---

# 55. Adult Learning

Adults should not be treated like oversized schoolchildren.

Adult learning should emphasize:

* relevance
* autonomy
* practical application
* prior experience
* immediate usefulness
* problem solving

---

# 56. Older Adults

Lumi should support:

* adjustable text
* clear navigation
* slower pacing
* strong contrast
* straightforward language
* audio
* repetition
* confidence-building practice

But without making the interface patronizing.

---

# 57. Children

For younger learners:

```text
Explore
 ↓
Interact
 ↓
Discover
 ↓
Explain
 ↓
Practice
 ↓
Create
```

The experience should be playful without turning everything into a game.

---

# 58. Adolescents

Lumi should increasingly encourage:

* independence
* questioning
* debate
* projects
* real-world applications
* identity and interests
* deeper specialization

---

# 59. Learning With Other People

Where appropriate:

```text
Individual
 ↓
Pair
 ↓
Group
 ↓
Community
```

But social learning should always remain optional where possible.

---

# 60. Teacher-Led Learning

Lumi should support teachers rather than replacing them.

Teacher:

> "Everyone needs to understand fractions."

Lumi can help determine:

```text
Who understands?
Who needs support?
What misconceptions exist?
What should each learner practice?
```

---

# 61. Teacher Intervention

Lumi might tell a teacher:

> **Several learners can calculate fractions but struggle to explain what the denominator represents.**

That's actionable.

---

# 62. Parent Support

Parents should receive:

> **Here are some things you can try at home.**

Rather than:

> **Your child's score is 62%.**

---

# 63. Home Learning

Lumi can connect concepts to ordinary life.

Example:

### Mathematics

Cooking.

Shopping.

Time.

Distance.

### Science

Plants.

Weather.

Household experiments.

### Language

Stories.

Conversations.

Writing.

---

# 64. Real-World Learning Engine

Lumi should eventually map learning objectives to real-world activities.

```text
Concept
 ↓
Possible real-world contexts
 ↓
Available environment
 ↓
Activity
```

---

# 65. Environment Awareness

If the learner says:

> "I'm at home."

Lumi can recommend activities that require household materials.

It should never assume expensive equipment.

---

# 66. Resource Constraints

Learning experiences should account for:

```text
Internet availability
Device capability
Time
Money
Location
Available materials
```

The system should not make high-cost assumptions.

---

# 67. Offline Pedagogy

Learning content should be structured so appropriate experiences can work offline.

When offline:

```text
Practice
Review
Read
Listen
Interact
Draft
```

Then synchronize evidence later.

---

# 68. Language

Lumi should eventually support multilingual learning.

The pedagogical engine should distinguish:

```text
Language difficulty
```

from:

```text
Concept difficulty
```

A learner struggling with English should not automatically be considered weak in mathematics.

---

# 69. Translation

Where appropriate:

```text
Explain in another language
```

should be available.

But translated content should preserve conceptual accuracy.

---

# 70. Cultural Context

Examples should be adaptable.

A learner should not constantly encounter examples that assume:

* one country
* one culture
* one family structure
* one economic situation
* one lifestyle

---

# 71. Avoid Stereotypes

Do not assign learning preferences based on:

* gender
* nationality
* ethnicity
* socioeconomic assumptions

Adapt from actual learner evidence and explicit preferences.

---

# 72. Motivation

Lumi should help learners understand **why something matters**.

Example:

> You're learning percentages because they will help you understand discounts, interest and statistics.

Meaning increases engagement better than artificial rewards.

---

# 73. Gamification

Gamification can exist, but it should represent genuine progress.

Examples:

* milestones
* challenges
* collections
* projects
* achievements

Avoid manipulative engagement loops.

---

# 74. Reward Philosophy

The strongest reward should be:

> **I can do something now that I couldn't do before.**

---

# 75. The Pedagogical Engine Output

For every learning moment, the engine should conceptually produce something like:

```text id="3s0z1k"
Learning Objective

Representation

Difficulty

Scaffolding Level

Activity Type

Feedback Strategy

Expected Evidence

Estimated Duration

Accessibility Adjustments

Next Decision
```

---

# 76. Example Engine Output

```text id="t1y7cq"
Objective:
Understand multiplication as equal groups.

Learner:
7 years old.

Current evidence:
Understands addition.
Limited evidence for multiplication.

Representation:
Concrete visual groups.

Activity:
Interactive grouping.

Scaffolding:
Moderate.

Feedback:
Descriptive.

Duration:
5–7 minutes.

Accessibility:
Reduced visual clutter.

Evidence:
Can construct and explain equal groups.

Next:
Move toward repeated addition if demonstrated.
```

---

# 77. Another Example

```text id="x7klwq"
Objective:
Understand JavaScript functions.

Learner:
Adult beginner.

Evidence:
Understands variables.
Has difficulty with parameters.

Representation:
Code + visual flow.

Activity:
Modify an existing function.

Scaffolding:
Low.

Feedback:
Debugging hints.

Duration:
15 minutes.

Next:
Independent function creation.
```

---

# 78. Pedagogical Engine vs Adaptive Engine

This distinction is now fundamental.

### Adaptive Engine

**What should happen next?**

### Pedagogical Engine

**How should it happen?**

### Content Engine

**What material should be used?**

### Learner Model

**What do we currently know about this learner?**

Together:

```text
                 LEARNER MODEL
                       │
                       ↓
              ADAPTIVE ENGINE
                       │
                 WHAT NEXT?
                       │
                       ↓
             PEDAGOGICAL ENGINE
                       │
                  HOW TO TEACH
                       │
                       ↓
               CONTENT ENGINE
                       │
                 WHAT MATERIAL
                       │
                       ↓
              LEARNING EXPERIENCE
                       │
                       ↓
                    EVIDENCE
                       │
                       └────────→ Learner Model
```

---

# 79. This Is the Educational Core of Lumi

Lumi is therefore not fundamentally:

> an LMS

or:

> an AI tutor.

It is:

> **An adaptive learning environment that continuously chooses an appropriate learning experience for the individual.**

---

# 80. The Golden Rule

Lumi should always attempt to find the intersection between:

```text
What the learner needs
        +
What the learner can handle
        +
What the learner wants
        +
What will actually help
```

That intersection is the **next learning experience**.

---

# 81. What This Document Gives Us

We now have the pedagogical foundation for:

* children
* teenagers
* adults
* older learners
* beginners
* advanced learners
* neurodivergent learners
* disabled learners
* different domains
* different learning goals
* project-based learning
* cLumiosity-driven learning
* school learning
* career learning
* life learning
* low-time sessions
* deep sessions
* offline learning
* multilingual learning
* teacher-supported learning
* parent-supported learning

---

# 82. Next Document

Now we can finally move into the technical brain:

# `10-Lumi-ADAPTIVE-ENGINE-SPECIFICATION.md`

That document will define the **actual adaptive intelligence** in engineering terms:

```text
Learner Model
      ↓
Knowledge Graph
      ↓
Mastery Model
      ↓
Confidence Model
      ↓
Retention Model
      ↓
Error Analysis
      ↓
Behavior Signals
      ↓
Skill/ELO Model
      ↓
Goal Context
      ↓
Pedagogical Constraints
      ↓
Decision Engine
      ↓
Next Best Action
```

We'll also define the **actual data structures, signals, decision rules, scoring models, adaptation events, and feedback loops** so that when you eventually build Lumi, the intelligence isn't just a vague "AI tutor" concept.
