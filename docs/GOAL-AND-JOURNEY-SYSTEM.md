# Lumi — Goal & Journey System

**Document:** `16-GOAL-AND-JOURNEY-SYSTEM.md`
**Version:** 1.0
**Status:** Foundational Architecture
**Product:** Lumi
**Purpose:** Define how Lumi transforms a learner's intentions, ambitions, problems, and cLumiosities into adaptive learning journeys that continuously evolve with the learner.

---

# 1. Purpose

Lumi should not ask learners:

> **"Which course do you want to enroll in?"**

It should be able to ask:

> **"What do you want to accomplish?"**

A learner might say:

* "I want to learn Python."
* "I want to pass my mathematics exam."
* "I want to become a doctor."
* "I want to start a business."
* "I want to learn guitar."
* "I want to understand my finances."
* "I want to build an app."
* "I want to get better at communicating."
* "I just want to explore astronomy."

Lumi transforms that intention into a **Goal**.

The Goal becomes a **Journey**.

The Journey becomes a sequence of **adaptive learning experiences**.

---

# 2. Core Principle

Lumi should optimize for:

> **Where the learner wants to go.**

Not:

> What content Lumi happens to have.

---

# 3. Goal → Journey → Experience

The fundamental architecture is:

```text
LEARNER INTENTION
       ↓
     GOAL
       ↓
   DIAGNOSTIC
       ↓
CURRENT STATE
       ↓
TARGET STATE
       ↓
  JOURNEY PLAN
       ↓
ADAPTIVE ENGINE
       ↓
LEARNING EXPERIENCES
       ↓
EVIDENCE
       ↓
UPDATED LEARNER STATE
       ↓
JOURNEY ADAPTS
```

---

# 4. What Is a Goal?

A Goal represents something the learner wants to:

* know
* understand
* do
* create
* improve
* achieve
* experience

---

# 5. Goal Types

Lumi should support multiple goal categories.

```text
Knowledge
Skill
Competency
Project
Academic
Career
Professional
Personal
Life Skill
Creative
Hobby
Certification
Exam
Exploration
```

---

# 6. Knowledge Goal

Example:

> "I want to understand quantum physics."

The journey focuses on conceptual understanding.

---

# 7. Skill Goal

Example:

> "I want to learn Python."

The journey focuses on usable programming ability.

---

# 8. Competency Goal

Example:

> "I want to become good at public speaking."

The journey must involve:

```text
Knowledge
+
Practice
+
Performance
+
Feedback
```

---

# 9. Project Goal

Example:

> "I want to build a mobile app."

Lumi should create a project-centered journey.

---

# 10. Academic Goal

Example:

> "I want to pass WAEC mathematics."

The system maps required knowledge and skills to the learner's current state.

---

# 11. Career Goal

Example:

> "I want to become a cybersecLumity professional."

Lumi can construct a long-term competency journey.

---

# 12. Life Goal

Example:

> "I want to become better at managing money."

Lumi can combine:

```text
Financial concepts
+
Budgeting
+
Practical exercises
+
Real-world application
```

---

# 13. Hobby Goal

Example:

> "I want to learn photography."

No certification is required.

The learner simply wants to become better.

---

# 14. Exploration Goal

Some goals are intentionally vague.

Example:

> "I want to learn something about space."

Lumi should support cLumiosity without requiring a rigid destination.

---

# 15. Goal Creation

A learner should be able to express a goal naturally.

Example:

> **"I want to learn programming so I can build websites."**

Lumi extracts:

```text
Domain:
Programming

Desired capability:
Build websites

Purpose:
Creation

Potential prerequisite:
Programming fundamentals
```

---

# 16. Natural Language Goals

The learner should not need to understand educational terminology.

They should be able to say:

> "I want to get better at math."

Lumi handles the complexity.

---

# 17. Goal Clarification

If the goal is ambiguous, Lumi asks a small number of useful questions.

Example:

> "I want to learn Spanish."

Lumi:

> "What would you mainly like to use Spanish for?"

Options:

```text
Conversation
Travel
School
Work
Reading
Writing
General fluency
```

---

# 18. Avoid Interrogation

Goal creation should not feel like filling out a 30-question form.

Lumi should learn progressively.

Start with:

```text
What?
Why?
When?
```

Then gather more information only when necessary.

---

# 19. Goal Structure

Conceptually:

```text
Goal
{
    id
    learner
    title
    description

    type
    domain

    motivation
    target_capability

    priority
    urgency

    deadline
    time_budget

    preferred_pace

    status

    created_at
    updated_at
}
```

The exact database implementation belongs in the technical architecture.

---

# 20. Goal Motivation

Lumi should understand why the learner wants the goal.

Example:

> "I want to learn Python."

Why?

```text
Career
School
Hobby
Build a project
CLumiosity
Work
```

The "why" affects journey design.

---

# 21. Goal Outcome

Lumi should translate vague goals into observable outcomes.

Instead of:

> "Learn Python."

Lumi may clarify:

> **"Be able to build small Python applications independently."**

---

# 22. Outcome-Oriented Goals

A good goal should answer:

> **What will the learner be able to do?**

---

# 23. Goal Success Criteria

Lumi should define measurable or observable evidence.

Example:

### Goal

> Build a website.

### Success criteria

The learner can:

```text
Create HTML structure
Style with CSS
Use JavaScript
Use APIs
Deploy a website
Debug common issues
```

---

# 24. Goal Decomposition

Large goals must be decomposed.

```text
Goal
 ↓
Competencies
 ↓
Skills
 ↓
Concepts
 ↓
Learning Experiences
```

---

# 25. Example

Goal:

> Become a web developer.

```text
Web Development
├── Web fundamentals
├── HTML
├── CSS
├── JavaScript
├── Git
├── APIs
├── Backend
├── Databases
└── Projects
```

The learner doesn't necessarily follow this exact order.

Lumi determines sequencing based on prerequisites and evidence.

---

# 26. Journey

A Journey is the evolving path toward a goal.

It contains:

```text
Current state
Target state
Milestones
Competencies
Experiences
Evidence
Progress
Adaptations
```

---

# 27. Journey Is Not a Course

A course is usually:

```text
Lesson 1
 ↓
Lesson 2
 ↓
Lesson 3
```

A Lumi Journey is:

```text
Goal
 ↓
Current capability
 ↓
Missing capabilities
 ↓
Best next experience
 ↓
Evidence
 ↓
Recalculate
 ↓
Next experience
```

---

# 28. Journey Is a Living System

Lumi should continuously recalculate the journey.

Example:

```text
Original plan
 ↓
Learner demonstrates mastery
 ↓
Lumi skips redundant material
 ↓
Journey becomes shorter
```

Or:

```text
Original plan
 ↓
Learner struggles
 ↓
Missing prerequisite discovered
 ↓
Journey expands
```

---

# 29. Journey States

A journey can be:

```text
DRAFT
ACTIVE
PAUSED
COMPLETED
ABANDONED
ARCHIVED
```

---

# 30. Goal States

Goals can be:

```text
IDEA
PLANNED
ACTIVE
ON_HOLD
COMPLETED
CANCELLED
```

---

# 31. Multiple Goals

Lumi must support multiple simultaneous goals.

Example:

```text
Goal A:
Learn Python

Goal B:
Prepare for mathematics exam

Goal C:
Learn guitar
```

---

# 32. Goal Priority

Each goal can have a priority.

```text
Critical
High
Normal
Low
```

But Lumi should avoid creating unnecessary pressure.

---

# 33. Goal Scheduling

The learner may say:

> "I want to spend 30 minutes on Python every weekday."

Lumi can use that as a planning constraint.

---

# 34. Time Budget

A goal may have:

```text
5 min/day
15 min/day
30 min/day
1 hour/day
Weekend only
Flexible
```

---

# 35. Deadline

Some goals have deadlines.

Example:

> "Exam in 6 weeks."

Lumi should work backwards from the deadline.

---

# 36. Deadline Planning

```text
Deadline
 ↓
Required competencies
 ↓
Current mastery
 ↓
Knowledge gaps
 ↓
Available time
 ↓
Learning schedule
```

---

# 37. No Deadline

Many goals should not have deadlines.

Example:

> "I want to learn history."

Lumi should support relaxed exploration.

---

# 38. Journey Planning Modes

Lumi should support:

```text
Adaptive
Structured
Deadline-driven
Exploratory
Project-driven
Exam preparation
Habit-based
```

---

# 39. Adaptive Mode

Lumi dynamically determines what comes next.

This should be the default.

---

# 40. Structured Mode

Learners who prefer a clear plan can see:

```text
Week 1
Week 2
Week 3
...
```

But the underlying system can still adapt.

---

# 41. Deadline Mode

The system prioritizes the minimum necessary competencies and allocates time intelligently.

---

# 42. Exploratory Mode

The learner navigates related topics freely.

---

# 43. Project Mode

The project becomes the organizing structure.

Example:

> Build a game.

Lumi teaches concepts when they become necessary.

---

# 44. Just-in-Time Learning

This is one of Lumi's strongest ideas.

Instead of:

> "Learn all programming theory before building."

Lumi can say:

> "You need functions for this next part. Let's learn functions now."

---

# 45. Learning Through Need

```text
Project
 ↓
Problem encountered
 ↓
Missing concept identified
 ↓
Learn concept
 ↓
Apply immediately
```

This improves relevance.

---

# 46. Journey Milestones

Large journeys should have milestones.

Example:

```text
Web Development
 │
 ├── Milestone 1: Web Foundations
 │
 ├── Milestone 2: Frontend Fundamentals
 │
 ├── Milestone 3: Interactive Applications
 │
 ├── Milestone 4: Backend
 │
 └── Milestone 5: Full Project
```

---

# 47. Milestone Completion

A milestone should require evidence, not merely:

> Viewed all lessons.

---

# 48. Milestone Evidence

Examples:

```text
Assessment
Project
Demonstration
Explanation
Practical task
Portfolio artifact
Teacher verification
```

---

# 49. Journey Progress

Lumi should avoid a misleading:

> 63% complete.

unless the percentage has a meaningful definition.

Instead show:

```text
Foundations → Strong
Problem solving → Developing
Projects → 2 completed
```

---

# 50. Competency Progress

Progress should map to actual capability.

Example:

```text
HTML                  ██████████ Strong
CSS                   ███████░░░ Developing
JavaScript             ████░░░░░░ Emerging
APIs                   ██░░░░░░░░ Beginning
```

---

# 51. Learner-Visible Adaptation

Lumi should sometimes explain why it changed the journey.

Example:

> "You already demonstrate strong understanding of fractions, so we're moving ahead."

This builds trust.

---

# 52. Journey Changes

Lumi should record major changes.

Example:

```text
Journey changed:

Reason:
Strong mastery detected

Action:
Skipped introductory fractions practice
```

---

# 53. Learner Control

The learner should be able to:

```text
Pause goal
Change priority
Change deadline
Change pace
Skip recommended activity
Add a new goal
Remove a goal
Explore another topic
```

---

# 54. Goal Editing

A goal can evolve.

Example:

Original:

> "Learn programming."

Later:

> "Build a SaaS product using Python and JavaScript."

Lumi should update the journey.

---

# 55. Goal Expansion

```text
Existing goal
 ↓
New ambition
 ↓
Journey expands
```

---

# 56. Goal Reduction

The opposite should also work.

Example:

> "I don't want to become a professional developer anymore. I just want to build websites for myself."

Lumi should reduce unnecessary learning requirements.

---

# 57. Goal Branching

A learner can create branches.

```text
Main Goal:
Learn programming

Branch:
Build a game

Branch:
Build websites
```

Knowledge can be shared between them.

---

# 58. Shared Knowledge

If JavaScript is mastered through one journey, another journey can recognize it.

No duplicate learning.

---

# 59. Cross-Goal Intelligence

Lumi should identify overlaps.

Example:

```text
Goal A:
Business

Goal B:
Public speaking

Shared competency:
Communication
```

One learning experience can contribute to both.

---

# 60. Goal Conflicts

Some goals may compete for time.

Example:

```text
Goal A:
Exam preparation

Goal B:
Learn guitar

Available time:
30 min/day
```

Lumi should help prioritize without deciding everything for the learner.

---

# 61. Goal Tradeoffs

Lumi can say:

> "You have 30 minutes today. Your exam goal has a deadline in 5 days. Would you like to prioritize it?"

The learner decides.

---

# 62. Goal Urgency

Urgency may be calculated from:

```text
Deadline
Importance
Learner priority
Remaining work
Available time
```

---

# 63. Goal Health

A journey can have a health indicator:

```text
On track
Needs attention
At risk
Paused
```

This should be informational, not punitive.

---

# 64. Goal Recommendations

Lumi can suggest:

> "You may want to create a project goal based on what you've learned."

But should not flood the learner with recommendations.

---

# 65. Goal Discovery

Lumi can infer possible goals from learner activity, but should ask before creating them.

Example:

> "You've been exploring photography. Would you like to create a photography learning journey?"

---

# 66. No Hidden Goals

Lumi should never silently assign goals to the learner.

---

# 67. Goal Decomposition Engine

The goal system should connect to the knowledge graph.

```text
Goal
 ↓
Target competency
 ↓
Required competencies
 ↓
Prerequisites
 ↓
Concepts
 ↓
Experiences
```

---

# 68. Target State

Every journey should have a target state.

Example:

```text
Current:
Can write simple Python scripts

Target:
Can build a small backend application
```

---

# 69. Current State

The learner model provides:

```text
Mastery
Confidence
Retention
Experience
Evidence
```

---

# 70. Gap Analysis

Lumi calculates:

```text
TARGET STATE
     -
CURRENT STATE
     =
LEARNING GAP
```

---

# 71. Learning Gap

The gap should not simply be:

> "You haven't watched Lesson 7."

It should be:

> "You haven't demonstrated understanding of asynchronous programming."

---

# 72. Gap Prioritization

Not every missing concept matters equally.

Lumi should prioritize based on:

```text
Prerequisite importance
Goal relevance
Difficulty
Learner weakness
Deadline
Transfer value
```

---

# 73. Critical Path

Lumi should identify the most important dependencies.

Example:

```text
Backend project
 ↓
HTTP
 ↓
APIs
 ↓
Authentication
 ↓
Database
```

If authentication depends on HTTP concepts, those become part of the critical path.

---

# 74. Optional Knowledge

Not everything needs to be mastered.

Lumi can distinguish:

```text
Required
Recommended
Optional
Advanced
```

---

# 75. Journey Personalization

Two learners with the same goal can have different journeys.

### Learner A

Strong fundamentals.

### Learner B

No prior experience.

Lumi should produce:

```text
A → Advanced route

B → Foundation route
```

---

# 76. Learning Pace

The learner can choose:

```text
Relaxed
Normal
Accelerated
Intensive
```

The adaptive engine still monitors learning quality.

---

# 77. Pace ≠ Difficulty

A fast learner doesn't necessarily need harder content.

A learner can move quickly through easy concepts and slowly through difficult ones.

---

# 78. Journey Rhythm

Lumi should eventually support:

```text
Learn
Practice
Rest
Review
Apply
Reflect
```

rather than endless content.

---

# 79. Rest

Rest can be part of the journey.

Lumi should not treat every idle period as failure.

---

# 80. Review Scheduling

Review can be triggered by:

```text
Forgetting prediction
Low confidence
Recent errors
Upcoming assessment
Learner request
```

---

# 81. Journey Recovery

If a learner disappears for months, Lumi should not say:

> "You failed your streak."

Instead:

> **"Welcome back. Here's where you left off."**

Then reassess what remains fresh.

---

# 82. Re-Diagnostic

After a long gap:

```text
Old learner state
 ↓
Short diagnostic
 ↓
Updated state
 ↓
Journey recalculated
```

This prevents unnecessary repetition.

---

# 83. Journey Completion

A journey completes when the learner has sufficient evidence for its defined outcome.

Not simply when content is exhausted.

---

# 84. Completion Types

```text
Goal achieved
Competency demonstrated
Project completed
Exam passed
Certification earned
Learner-defined completion
```

---

# 85. Learner-Defined Completion

Some journeys are subjective.

Example:

> "I want to learn enough guitar to play three songs for my family."

That can be a legitimate completion criterion.

---

# 86. Post-Goal State

After completion, Lumi should offer:

```text
Maintain
Advance
Apply
Teach
Explore
Create new goal
```

---

# 87. Mastery Maintenance

For skills that decay, Lumi can offer maintenance.

Example:

> "You haven't practiced Spanish conversation recently. Want a 10-minute refresher?"

---

# 88. Goal Celebration

Completion should be acknowledged.

But celebration should not become childish or excessive for adult learners.

It should adapt to preference.

---

# 89. Evidence Portfolio

Completing a goal can add:

```text
Competencies
Projects
Artifacts
Achievements
Evidence
```

to the learner's portfolio.

---

# 90. Goal Privacy

Goals can be:

```text
Private
Shared with teacher
Shared with guardian
Shared with mentor
Shared with organization
```

depending on permissions.

---

# 91. Sensitive Goals

Some personal goals may be sensitive.

Lumi should minimize exposure and avoid unnecessary inference.

---

# 92. Organizational Goals

Schools and organizations may assign goals.

Example:

> "Complete Grade 8 mathematics."

Lumi must distinguish:

```text
Learner-created goal
```

from:

```text
Institution-assigned goal
```

---

# 93. Assigned Goals

An assigned goal should still produce an adaptive experience.

The organization defines the outcome.

Lumi determines how the learner reaches it.

---

# 94. Teacher Goals

Teachers may create goals for groups.

Example:

> "Class should understand fractions."

Each learner can receive a different route toward the same outcome.

---

# 95. Group Goal

```text
Class Goal
      ↓
Shared competency
      ↓
Individual learner states
      ↓
Individual adaptive journeys
```

---

# 96. Parent Goals

Guardians may support goals for children.

Example:

> "Improve reading confidence."

But Lumi should avoid turning every parental preference into a rigid learning requirement.

---

# 97. Collaborative Goals

Eventually:

> "Build this project together."

Multiple learners can share a project goal.

---

# 98. Journey Roles

Possible roles:

```text
Owner
Learner
Teacher
Mentor
Guardian
Collaborator
Reviewer
```

Permissions must be defined separately.

---

# 99. AI Goal Coach

Lumi's AI can help formulate goals.

Example:

Learner:

> "I want to get better at computers."

AI:

> "Would you like to focus on using computers confidently, programming, cybersecLumity, design, or something else?"

---

# 100. AI Should Not Choose the Learner's Life

The AI should help clarify possibilities.

It should not say:

> "You should become a software engineer."

based on weak assumptions.

---

# 101. Goal Quality

Lumi can help make goals:

```text
Clear
Relevant
Achievable
Meaningful
Observable
```

without forcing every goal into a rigid SMART-goal format.

---

# 102. Goal Decomposition Example

User:

> "I want to become a game developer."

Lumi might derive:

```text
Game Development
├── Programming
├── Game engine
├── Game design
├── Mathematics
├── Graphics
├── Audio
├── Version control
└── Project development
```

Then diagnostic evidence determines where to begin.

---

# 103. Goal → Project

A journey should eventually connect learning to real artifacts.

```text
Goal:
Game development

Project:
Build a 2D game

Learning:
Programming
Physics
Game mechanics
UI
```

---

# 104. Goal → Real Life

Goal:

> "Become better with money."

Journey:

```text
Income
 ↓
Expenses
 ↓
Budget
 ↓
Saving
 ↓
Debt concepts
 ↓
Risk
 ↓
Long-term planning
```

Then real-world application.

---

# 105. Goal → Exploration

Goal:

> "Learn about space."

Journey:

```text
Solar system
 ↓
Stars
 ↓
Galaxies
 ↓
Cosmology
```

But the learner can branch freely.

---

# 106. Goal Graph

Goals themselves can form relationships.

```text
Career Goal
     │
     ├── Skill Goal
     ├── Knowledge Goal
     └── Project Goal
```

---

# 107. Example

```text
Career:
Become a cybersecLumity professional

Skill:
Linux

Knowledge:
Networking

Project:
Build a secure network lab
```

Lumi connects them.

---

# 108. Journey Graph

The journey can therefore become:

```text
                    CAREER
                      │
                CYBERSECLumiTY
                      │
        ┌─────────────┼─────────────┐
        ↓             ↓             ↓
     Linux        Networking     Programming
        │             │             │
        └─────────────┼─────────────┘
                      ↓
                 SecLumity Lab
                      ↓
                  Portfolio
```

---

# 109. Journey Adaptation

Every meaningful piece of evidence can cause:

```text
No change
 ↓
Reorder
 ↓
Skip
 ↓
Add support
 ↓
Add prerequisite
 ↓
Increase challenge
 ↓
Change representation
```

---

# 110. Journey Transparency

Learners should be able to ask:

> **"Why am I learning this?"**

Lumi should explain the connection.

Example:

> "You're learning HTTP because your goal involves building APIs."

---

# 111. Trust

The learner should understand:

> What Lumi recommends.

> Why Lumi recommends it.

> What evidence influenced the recommendation.

---

# 112. No Black Box Progress

Avoid:

> "The AI decided."

Instead:

> "You demonstrated strong HTML skills, so we're moving to JavaScript."

---

# 113. Journey Customization

Learners can request:

> "Make this more practical."

or:

> "I want more theory."

Lumi should adapt.

---

# 114. Learning Style Caution

Lumi should not lock people into questionable fixed categories like:

> "You are a visual learner."

Instead it should use actual preferences:

> "You seem to benefit from examples and visual explanations."

and continue testing what works.

---

# 115. Goal Feedback Loop

The system should ask periodically:

> **"Is this still what you want?"**

Because goals change.

---

# 116. Goal Drift

A learner may start:

> "Learn programming."

and eventually discover:

> "Actually, I enjoy data analysis more."

Lumi should allow the journey to branch.

---

# 117. Goal Evolution

```text
Original goal
      ↓
Learning
      ↓
Discovery
      ↓
New interest
      ↓
Updated goal
      ↓
New journey
```

This is a feature, not a failure.

---

# 118. Goal Recommendations From Evidence

If the learner repeatedly demonstrates interest in a domain, Lumi can suggest:

> "You seem to enjoy astronomy. Would you like to explore astrophysics?"

Again:

**suggest, never silently assign.**

---

# 119. Goal Library

Lumi can offer templates for common goals:

```text
Learn a language
Prepare for an exam
Build a project
Change careers
Develop a skill
Learn a hobby
Improve a life skill
Explore a subject
```

Templates accelerate goal creation.

---

# 120. Custom Goals

Users can always create something outside the predefined templates.

---

# 121. Goal Search

Learners should be able to discover:

```text
"Learn Python"
"Learn guitar"
"Improve writing"
"Prepare for mathematics"
```

but search results should lead to **adaptive journeys**, not just content catalogs.

---

# 122. Goal Import

Eventually Lumi could allow:

* curriculum import
* course import
* competency framework import
* professional certification requirements

These become constraints for journey generation.

---

# 123. Curriculum Alignment

For schools:

```text
School Curriculum
       ↓
Lumi Knowledge Graph
       ↓
Required Competencies
       ↓
Individual Learner Journeys
```

Every learner can follow the same destination through different routes.

---

# 124. Example: Same Class

Twenty students.

One curriculum.

Different states.

Lumi could produce:

```text
Student A → foundational support
Student B → normal route
Student C → advanced challenge
Student D → accessibility adaptation
Student E → prerequisite recovery
```

while all work toward the same learning objective.

---

# 125. This Is Lumi's Differentiator

The platform should be able to support:

> **Standardized outcomes without standardized learning paths.**

That principle is extremely important.

---

# 126. Goal System Architecture

```text id="x4bj1v"
                 LEARNER INTENTION
                        │
                        ↓
                   GOAL ENGINE
                        │
              ┌─────────┴─────────┐
              ↓                   ↓
         Goal Clarifier      Goal Metadata
              │                   │
              └─────────┬─────────┘
                        ↓
                  TARGET STATE
                        │
                        ↓
                  GAP ANALYSIS
                        │
                        ↓
                 JOURNEY ENGINE
                        │
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
     Milestones    Competencies    Projects
          │             │             │
          └─────────────┼─────────────┘
                        ↓
                 ADAPTIVE ENGINE
                        ↓
              LEARNING EXPERIENCES
                        ↓
                    EVIDENCE
                        ↓
                UPDATED STATE
                        ↓
                 JOURNEY ENGINE
                        ↺
```

---

# 127. Core Goal Object

Conceptually:

```text
Goal
{
    id,
    learner_id,

    title,
    description,
    type,
    domain,

    motivation,
    target_outcome,

    priority,
    urgency,
    deadline,

    time_budget,
    preferred_pace,
    mode,

    status,

    created_at,
    updated_at
}
```

---

# 128. Core Journey Object

```text
Journey
{
    id,
    goal_id,
    learner_id,

    current_state,
    target_state,

    strategy,
    pace,

    progress,
    status,

    started_at,
    updated_at
}
```

---

# 129. Milestone Object

```text
Milestone
{
    id,
    journey_id,

    title,
    description,

    required_competencies,
    evidence_requirements,

    status,
    sequence
}
```

---

# 130. Goal Event

Lumi should maintain a history of important goal events.

```text
Goal created
Goal edited
Goal paused
Goal resumed
Goal reprioritized
Journey adapted
Milestone completed
Goal completed
```

This is useful for transparency and analytics.

---

# 131. Adaptive Journey Engine

The journey engine should answer:

> **What should happen next?**

Inputs:

```text
Goal
Current learner state
Knowledge graph
Evidence
Time
Preferences
Accessibility
Age context
Deadline
```

Output:

```text
Next best learning action
```

---

# 132. Next Best Action

Possible outputs:

```text
Teach concept
Practice concept
Review concept
Attempt challenge
Complete project step
Take assessment
Reflect
Explore
Rest
```

---

# 133. Why "Next Best Action" Matters

This prevents Lumi from becoming:

> A giant library where learners don't know what to do.

Instead:

> **Lumi always has a reasoned next step.**

---

# 134. But the Learner Can Choose

The learner can always say:

> "Show me other options."

Lumi might provide:

```text
Recommended
Review
Explore
Challenge
Project
```

---

# 135. Goal System + Accessibility

Goal journeys must adapt to accessibility needs.

Example:

A learner may prefer:

* shorter sessions
* text instead of audio
* audio instead of long text
* reduced motion
* predictable routines

The goal remains the same.

The path changes.

---

# 136. Goal System + Neurodiversity

Lumi should avoid assuming that every learner should:

* focus for the same duration
* use the same interaction style
* process information the same way
* demonstrate knowledge in exactly the same format

Where the competency allows multiple forms of evidence, Lumi should support meaningful alternatives.

---

# 137. Goal System + Children

For children, Lumi can transform:

> "I want to learn dinosaurs."

into:

```text
CLumiosity
 ↓
Reading
 ↓
Classification
 ↓
Timeline
 ↓
Research
 ↓
Creative project
```

without forcing the child into an academic-looking course.

---

# 138. Goal System + Adults

For adults:

> "I want to learn Excel."

might become:

```text
Spreadsheet fundamentals
 ↓
Formulas
 ↓
Data organization
 ↓
Charts
 ↓
Real-world project
```

based on what the learner actually needs.

---

# 139. Goal System + Real Life

This system is ultimately what makes Lumi different from a normal LMS.

The learner can bring a real-world ambition into Lumi.

Lumi turns that ambition into learning.

---

# 140. Lumi Goal Philosophy

Lumi should never ask only:

> **"What do you want to study?"**

It should also ask:

> **"What do you want to be able to do?"**

---

# 141. The Deeper Model

The complete relationship is:

```text
INTENTION
   ↓
GOAL
   ↓
OUTCOME
   ↓
COMPETENCIES
   ↓
KNOWLEDGE
   ↓
EXPERIENCE
   ↓
PRACTICE
   ↓
APPLICATION
   ↓
EVIDENCE
   ↓
CAPABILITY
```

---

# 142. Final Principle

Lumi should make learning feel like a **journey toward something meaningful**, not an endless consumption of educational content.

The learner provides the destination.

Lumi understands the terrain.

The adaptive engine chooses the next useful step.

The learner remains in control of the journey.

> **Lumi doesn't decide who you should become.
> Lumi helps you become capable of becoming who you choose to be.**

```

### Next document

# `17-REAL-LIFE-LEARNING-ARCHITECTURE.md`

This is the next major piece because Lumi's defining promise is **not just learning school subjects**. This document will define how Lumi teaches things like money, cooking, communication, careers, entrepreneurship, technology, hobbies, practical problem-solving, projects, and other real-world capabilities—and how it turns everyday life itself into a learning environment.
