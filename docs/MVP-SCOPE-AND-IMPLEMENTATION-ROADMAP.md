# Lumi — MVP SCOPE & IMPLEMENTATION ROADMAP

**Document:** `26-Lumi-MVP-SCOPE-AND-IMPLEMENTATION-ROADMAP.md`
**Version:** 1.0
**Status:** Build Planning
**Product:** Lumi

---

# 1. Purpose

Everything before this document defined **what Lumi is**.

This document defines:

> **What we actually build, in what order, and what we deliberately do not build yet.**

The goal is to prevent Lumi from becoming an enormous unfinished project.

---

# 2. The Core Rule

> **Build the smallest version that proves Lumi's central promise:**

> **Lumi understands the learner, adapts the learning experience, and helps the learner make meaningful progress toward a real goal.**

Everything else supports that.

---

# 3. Lumi MVP

The first version should allow a person to:

```text
Create Identity
      ↓
Create Learning Goal
      ↓
Understand Current Level
      ↓
Receive Adaptive Journey
      ↓
Learn
      ↓
Practice
      ↓
Get Assessed
      ↓
Build Evidence
      ↓
Update Learner State
      ↓
Receive Next Recommendation
      ↓
See Progress
```

That is the MVP.

---

# 4. MVP Users

Do not launch with every institutional role.

Start with:

### Primary

**Learner**

### Secondary

**Guardian**

### Internal/testing

**Admin**

Teacher functionality can be introduced shortly after the core learner loop works.

---

# 5. MVP Age Range

Lumi's architecture supports all ages.

But the first implementation should validate the adaptive engine with a controlled range.

Recommended:

```text
Children
Teens
Adults
```

The experience should adapt based on life stage rather than simply changing a number.

---

# 6. Do Not Build Separate Products

Do not create:

```text
Lumi Kids
Lumi Student
Lumi Adult
Lumi Professional
```

Instead:

```text
Lumi
 │
 └── Adaptive Context
        ├── Age
        ├── Life Stage
        ├── Goal
        ├── Ability
        ├── Preferences
        └── Environment
```

---

# 7. MVP Core Modules

Build these first:

```text
01 Identity
02 Learner Profile
03 Goal System
04 Knowledge System
05 Learning Experience
06 Assessment
07 Evidence
08 Adaptive Engine
09 Progress
10 AI Tutor
11 Accessibility
12 Safety
```

---

# 8. MVP Module Priority

### Tier 1 — Absolutely Required

```text
Identity
Learner
Goals
Knowledge
Learning
Assessment
Evidence
Adaptive Engine
Progress
```

### Tier 2 — Required for a usable product

```text
AI Tutor
Accessibility
Notifications
Content Management
```

### Tier 3 — Early supporting systems

```text
Guardian
Basic Admin
Basic Analytics
```

---

# 9. Do NOT Build Yet

Do not begin with:

```text
Marketplace
Social network
Complex communities
Corporate LMS
University administration
Creator economy
Advanced credentials
Full mobile apps
Microservices
Advanced recommendation marketplace
```

These come later.

---

# 10. The First Lumi User Journey

The first user should experience:

```text
Landing Page
 ↓
Create Account
 ↓
Welcome
 ↓
Tell Lumi About Yourself
 ↓
Choose What You Want to Learn
 ↓
Define Goal
 ↓
Initial Assessment
 ↓
Lumi Builds Learning Profile
 ↓
Adaptive Journey
 ↓
First Learning Experience
 ↓
Practice
 ↓
Assessment
 ↓
Progress Update
 ↓
Next Recommendation
```

---

# 11. First-Time Onboarding

Ask only what is useful.

Potential questions:

```text
What would you like to accomplish?
Why does it matter?
What is your current experience?
How do you prefer to learn?
What is your available time?
```

---

# 12. Do Not Over-Onboard

Avoid:

> 30-question registration forms.

Lumi should learn about the learner progressively.

---

# 13. Progressive Profiling

Initially collect:

```text
Goal
Basic context
Age/life-stage information where appropriate
Accessibility needs
Learning preferences
```

Later learn:

```text
Pace
Behavior
Confidence
Strengths
Weaknesses
```

through actual interaction.

---

# 14. Initial Assessment

The initial assessment should determine:

```text
What the learner likely knows
What they don't know
Where uncertainty exists
What prerequisites may be missing
```

---

# 15. Do Not Treat the Assessment as an Exam

It is a **diagnostic conversation with evidence**.

---

# 16. Adaptive Assessment

Instead of:

```text
20 fixed questions
```

Lumi should eventually do:

```text
Question
 ↓
Response
 ↓
Update belief
 ↓
Choose next question
 ↓
Response
 ↓
Update belief
```

---

# 17. MVP Adaptive Assessment

The first implementation can be simpler:

```text
Question Bank
+
Difficulty levels
+
Concept mapping
+
Basic branching
```

Later introduce sophisticated probabilistic models.

---

# 18. Knowledge Graph MVP

Start small.

For each learning domain:

```text
Domain
 ↓
Concepts
 ↓
Prerequisites
 ↓
Skills
```

---

# 19. Example

For programming:

```text
Programming
 ├── Variables
 ├── Data Types
 ├── Conditions
 ├── Loops
 ├── Functions
 ├── Data Structures
 └── APIs
```

with prerequisite relationships.

---

# 20. Learning Experience MVP

Each experience should have:

```text
Objective
Explanation
Example
Practice
Feedback
Reflection
Assessment
```

---

# 21. Lumi Lesson Structure

```text
CONTEXT
 ↓
EXPLAIN
 ↓
DEMONSTRATE
 ↓
TRY
 ↓
FEEDBACK
 ↓
APPLY
 ↓
REFLECT
```

---

# 22. Adaptive Lesson

Lumi can dynamically choose:

```text
More explanation
More examples
Simpler activity
Different representation
Extra practice
Challenge
Review
```

---

# 23. Accessibility Must Exist From Day One

Do not build accessibility later.

MVP must include:

* keyboard navigation
* screen-reader support
* captions/transcripts where relevant
* adjustable text
* reduced motion
* strong contrast
* clear focus states
* readable layouts
* alternative representations

---

# 24. Neuroinclusive Defaults

The interface should avoid unnecessary:

* animation
* visual clutter
* unpredictable transitions
* excessive notifications
* cognitive overload

---

# 25. Learner Control

Allow users to control:

```text
Pace
Difficulty
Audio
Text size
Motion
Notifications
Explanation style
Session length
```

---

# 26. Adaptive Engine MVP

Implement the first version around the core signals:

```text
Mastery
Confidence
Response Accuracy
Response Time
Error Pattern
Retention
```

---

# 27. Do Not Build Every Signal Immediately

Advanced:

```text
ELO
Complex behavioral modeling
Sophisticated forgetting models
Deep personalization
```

can follow.

---

# 28. MVP Mastery Model

A concept can have:

```text
mastery_score
confidence
attempt_count
success_rate
last_seen
```

---

# 29. Basic Mastery Update

Conceptually:

```text
New Evidence
      ↓
Evaluate Quality
      ↓
Update Mastery
      ↓
Update Confidence
      ↓
Determine Next Action
```

---

# 30. Adaptive Decision Types

Initially support:

```text
Continue
Review
Practice
Challenge
Prerequisite Review
Complete
```

---

# 31. Recommendation Engine MVP

Example:

```text
IF mastery < threshold
    → Review

IF mastery moderate
    → Practice

IF mastery high AND confidence high
    → Challenge

IF repeated prerequisite errors
    → Backtrack
```

Later replace these rules with more sophisticated models.

---

# 32. Why Rules First?

Because Lumi needs:

* explainability
* predictable behavior
* testability
* measurable outcomes

before introducing complex AI optimization.

---

# 33. AI Tutor MVP

The AI tutor should help with:

```text
Explain
Give hints
Ask questions
Provide examples
Give feedback
Summarize
```

---

# 34. AI Tutor Context

The tutor should receive relevant context:

```text
Current goal
Current concept
Known mastery
Recent mistakes
Learning preference
Current activity
```

---

# 35. AI Should Not See Everything

Never pass the learner's entire database into every AI request.

Use contextual retrieval.

---

# 36. AI Tutor Flow

```text
Learner asks question
        ↓
Determine context
        ↓
Retrieve relevant knowledge
        ↓
Apply learner state
        ↓
Generate response
        ↓
Safety check
        ↓
Return response
```

---

# 37. AI Age Adaptation

The tutor's behavior must change according to the learner's age/life stage.

For younger learners:

* simpler language
* stronger safeguards
* guided reasoning
* appropriate examples

For adults:

* more autonomy
* deeper explanations
* professional context

---

# 38. Guardian MVP

For child accounts:

```text
Guardian
 ↓
Child
 ↓
Progress Overview
```

Guardian should not need to manage every learning action.

---

# 39. Guardian Dashboard MVP

Show:

```text
Current goals
Progress
Recent learning
Upcoming activities
General support signals
```

---

# 40. Avoid Surveillance

Do not expose every click, pause, or behavior event to guardians by default.

---

# 41. Admin MVP

Admin needs only:

```text
Users
Content
Knowledge
Assessments
Safety Reports
System Health
```

---

# 42. Content Management MVP

Admin can:

```text
Create Concept
Create Lesson
Create Exercise
Create Assessment
Map Concept
Set Prerequisites
Publish
```

---

# 43. Content Pipeline

```text
Draft
 ↓
Review
 ↓
Publish
 ↓
Measure
 ↓
Improve
```

---

# 44. MVP Content

Do not create thousands of lessons.

Create a **small, high-quality domain** first.

For example:

> Python fundamentals.

---

# 45. Why One Domain?

You need to prove:

> Lumi can adapt.

You don't need to prove:

> Lumi has every subject.

---

# 46. Suggested First Demonstration Domain

A strong technical domain would be:

**Python Programming**

because it allows:

* conceptual knowledge
* exercises
* code tasks
* debugging
* projects
* measurable outcomes

---

# 47. MVP Data Flow

```text
User
 ↓
Learner Profile
 ↓
Goal
 ↓
Initial Assessment
 ↓
Evidence
 ↓
Mastery State
 ↓
Adaptive Engine
 ↓
Learning Experience
 ↓
Activity
 ↓
Evidence
 ↓
Mastery Update
 ↓
Recommendation
```

---

# 48. MVP Backend Build Order

Build backend in this order:

```text
01 Authentication
02 Users
03 Learners
04 Knowledge
05 Goals
06 Content
07 Learning Activities
08 Assessment
09 Evidence
10 Mastery
11 Adaptive Engine
12 Recommendations
13 AI Tutor
14 Notifications
15 Guardian
16 Admin
```

---

# 49. Database Build Order

```text
01 users
02 profiles
03 learner_profiles
04 organizations
05 concepts
06 skills
07 concept_relationships
08 content_items
09 lessons
10 goals
11 journeys
12 activities
13 assessments
14 questions
15 attempts
16 responses
17 evidence
18 mastery_states
19 adaptive_recommendations
20 safety
```

---

# 50. Frontend Build Order

First:

```text
01 Design System
02 App Shell
03 Authentication
04 Onboarding
05 Learner Home
06 Goal Creation
07 Assessment
08 Learning Experience
09 Practice
10 Progress
11 AI Tutor
12 Settings
```

---

# 51. Do Not Build Every Dashboard First

The learner experience comes first.

---

# 52. First UI

The first meaningful screen should be:

> **Lumi Home / Learning Journey**

It should answer:

```text
Where am I?
What am I working toward?
What should I do next?
Why?
```

---

# 53. Learner Home

Potential structure:

```text
Good morning.

Your goal
──────────────
Become a Python Developer

Current Journey
──────────────
Python Foundations

Continue
──────────────
Functions

Your Progress
──────────────
Concept mastery

Coming up
──────────────
Practice + Project
```

---

# 54. Adaptive Explanation

Every recommendation should potentially include:

> **Why Lumi chose this**

Example:

> "You're doing well with functions, but your recent errors suggest you need more practice with parameters."

---

# 55. Progress

Do not focus only on percentages.

Show:

```text
What you learned
What you can do
What improved
What you're working on
What's next
```

---

# 56. Evidence-Based Progress

Example:

> **You can now build a function that accepts multiple inputs and returns a result.**

That's more meaningful than:

> **72% complete.**

---

# 57. MVP Portfolio

Allow learners to save meaningful outputs.

For example:

```text
Project
 ↓
Evidence
 ↓
Skill
```

---

# 58. Real-Life Learning MVP

Every learning journey should eventually include application.

Example:

```text
Learn Python Functions
 ↓
Practice
 ↓
Build Calculator
 ↓
Explain Your Code
 ↓
Portfolio Evidence
```

---

# 59. Real-Life Goal Types

Support:

```text
Academic
Career
Personal
Creative
Professional
Life Skill
Hobby
Project
```

---

# 60. Example Goals

```text
"I want to pass mathematics."

"I want to become a developer."

"I want to learn photography."

"I want to understand investing."

"I want to learn how to cook."

"I want to improve my public speaking."
```

---

# 61. Lumi Should Not Assume "Learning = School"

This is fundamental.

---

# 62. MVP Social

Do **not** build the full social ecosystem yet.

For MVP:

```text
Basic discussion
Basic feedback
Basic project sharing
```

is enough.

---

# 63. MVP Gamification

Keep it lightweight.

Use:

* progress
* milestones
* achievements

Avoid complex economies.

---

# 64. MVP Notifications

Support:

```text
Learning reminder
Goal milestone
Feedback received
Assessment result
Journey update
```

---

# 65. MVP Analytics

Track:

```text
Activation
Goal creation
Assessment completion
Learning activity completion
Mastery improvement
Retention
Goal completion
```

---

# 66. Most Important KPI

Not:

> Daily Active Users.

The core Lumi metric should eventually be:

> **Meaningful Learning Progress**

---

# 67. Lumi Learning Outcome Metric

Conceptually:

```text
Learning Progress =
Evidence of increased capability
over time
```

---

# 68. MVP Success Criteria

Lumi MVP is successful if:

### A learner can

```text
Create a goal
 ↓
Be assessed
 ↓
Receive an adaptive journey
 ↓
Learn
 ↓
Practice
 ↓
Demonstrate understanding
 ↓
Receive updated recommendations
```

and the system can explain why.

---

# 69. Technical MVP Success

The system must demonstrate:

```text
Reliable identity
Correct learner state
Correct evidence recording
Correct mastery updates
Predictable adaptive decisions
Safe AI interaction
Accessible UI
```

---

# 70. Phase 1 — Foundation

Build:

```text
Authentication
Learner Profile
Design System
Database
API Foundation
Knowledge Model
Content Model
```

---

# 71. Phase 2 — Learning Core

Build:

```text
Goals
Journeys
Learning Experiences
Activities
Assessment
Evidence
Progress
```

---

# 72. Phase 3 — Adaptive Core

Build:

```text
Mastery
Confidence
Error Patterns
Retention
Adaptive Decisions
Recommendations
```

---

# 73. Phase 4 — AI

Build:

```text
AI Tutor
AI Explanations
AI Hints
AI Feedback
AI Content Assistance
```

---

# 74. Phase 5 — Inclusion & Safety

Build:

```text
Accessibility
Age adaptation
Guardian controls
Child safety
Moderation
Privacy
```

---

# 75. Phase 6 — Real-Life Learning

Build:

```text
Projects
Portfolio
Real-world tasks
Skill evidence
Reflection
```

---

# 76. Phase 7 — Social

Build:

```text
Communities
Study groups
Peer feedback
Collaboration
Mentorship
```

---

# 77. Phase 8 — Institutions

Build:

```text
Schools
Universities
Organizations
Teachers
Classes
Programs
Institutional analytics
```

---

# 78. Phase 9 — Scale

Build:

```text
Advanced analytics
Search infrastructure
Credentialing
Marketplace
Enterprise APIs
SSO
Advanced integrations
```

---

# 79. Phase 10 — Intelligence

Eventually:

```text
Advanced learner modeling
Probabilistic mastery
Advanced retention models
Deep knowledge graph
Advanced recommendation systems
Multi-agent learning assistance
```

---

# 80. Development Milestones

## Milestone 1

**Lumi can understand a learner.**

---

## Milestone 2

**Lumi can understand what a learner wants.**

---

## Milestone 3

**Lumi can determine what the learner currently knows.**

---

## Milestone 4

**Lumi can teach the learner.**

---

## Milestone 5

**Lumi can measure learning.**

---

## Milestone 6

**Lumi can adapt.**

---

## Milestone 7

**Lumi can explain its adaptation.**

---

## Milestone 8

**Lumi can help the learner apply knowledge in real life.**

---

## Milestone 9

**Lumi can connect the learner with other people.**

---

## Milestone 10

**Lumi can operate across institutions and life stages.**

---

# 81. What We Build First

If you were starting the repository **today**, I would build exactly this:

```text
Lumi/
│
├── frontend/
│   └── Next.js
│
├── backend/
│   └── Django
│
├── infrastructure/
│   ├── docker/
│   └── deployment/
│
├── docs/
│
└── README.md
```

---

# 82. Backend Structure

```text
backend/
│
├── config/
│
├── apps/
│   ├── identity/
│   ├── learners/
│   ├── knowledge/
│   ├── content/
│   ├── goals/
│   ├── learning/
│   ├── assessments/
│   ├── evidence/
│   ├── adaptive/
│   ├── ai/
│   ├── safety/
│   └── notifications/
│
├── manage.py
└── requirements.txt
```

---

# 83. Frontend Structure

```text
frontend/
│
├── app/
│
├── components/
│
├── features/
│   ├── onboarding/
│   ├── learning/
│   ├── goals/
│   ├── assessment/
│   ├── progress/
│   └── tutor/
│
├── lib/
│
├── hooks/
│
└── public/
```

---

# 84. First Database Migration

Do **not** create every table from Document 25 immediately.

Start with:

```text
users
profiles
learner_profiles
concepts
skills
concept_relationships
learning_goals
learning_journeys
content_items
lessons
learning_activities
assessments
questions
assessment_attempts
responses
evidence
mastery_states
adaptive_recommendations
```

Then expand.

---

# 85. First API

The first API should support:

```text
POST /auth/register
POST /auth/login

GET /learners/me
PATCH /learners/me

GET /goals
POST /goals

GET /journeys
GET /journeys/:id

GET /learning/next

POST /activities/:id/start
POST /activities/:id/complete

POST /assessments/:id/submit

GET /progress
GET /recommendations
```

---

# 86. First Frontend Flow

```text
/register
     ↓
/onboarding
     ↓
/goals/new
     ↓
/assessment
     ↓
/journey
     ↓
/learn
     ↓
/practice
     ↓
/progress
```

---

# 87. First Adaptive Loop

This is the **most important piece of code in early Lumi**.

```text
Learner answers
      ↓
Evaluate response
      ↓
Update evidence
      ↓
Update mastery
      ↓
Check prerequisites
      ↓
Choose next activity
      ↓
Explain recommendation
```

---

# 88. First Version Should Be Boring

That is intentional.

Do not begin with:

> "Let's build an AGI teacher."

Begin with:

> "Can Lumi reliably determine what this learner should do next?"

---

# 89. Build Complexity Gradually

```text
Rules
 ↓
Weighted Rules
 ↓
Statistical Models
 ↓
Probabilistic Models
 ↓
ML
 ↓
Advanced AI
```

---

# 90. The Lumi Development Principle

> **Every new layer of intelligence must earn its complexity through measurable improvement.**

---

# 91. MVP Definition

Lumi MVP is **not**:

> "A platform containing everything."

Lumi MVP is:

> **A functioning adaptive learning loop.**

---

# 92. The Loop

```text
             ┌───────────────────┐
             │                   ↓
         LEARNER → GOAL → ASSESS
             ↑              │
             │              ↓
             │           LEARN
             │              │
             │              ↓
             │           PRACTICE
             │              │
             │              ↓
             │          EVIDENCE
             │              │
             │              ↓
             │           MASTERY
             │              │
             │              ↓
             └──── ADAPT ←──┘
```

If this loop works beautifully, **Lumi has a real foundation.**

---

# 93. Final Roadmap

```text
ARCHITECTURE
     ↓
MVP SCOPE
     ↓
DESIGN SYSTEM
     ↓
DATABASE
     ↓
BACKEND FOUNDATION
     ↓
FRONTEND FOUNDATION
     ↓
LEARNER EXPERIENCE
     ↓
ASSESSMENT
     ↓
EVIDENCE
     ↓
ADAPTIVE ENGINE
     ↓
AI
     ↓
SAFETY + ACCESSIBILITY
     ↓
REAL-WORLD LEARNING
     ↓
SOCIAL
     ↓
INSTITUTIONS
     ↓
SCALE
```

---

# 94. We Are Ready to Build

At this point, **stop writing architecture documents for a moment**.

You have enough architecture to start implementation.

The next document should therefore change format:

# `27-Lumi-DESIGN-SYSTEM-AND-UI-BUILD-SPECIFICATION.md`

This will be the **actual UI construction blueprint**.

It should define every core visual primitive, typography, spacing, responsive behavior, navigation, learner dashboard, onboarding, goal creation, diagnostic assessment, learning screen, adaptive recommendation cards, progress views, accessibility controls, child experience, adult experience, empty/loading/error states, and the exact screen hierarchy.

**After that document, we should stop documenting and start designing the actual Lumi screens.**
