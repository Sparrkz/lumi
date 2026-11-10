# Lumi — UI BUILD ORDER & IMPLEMENTATION SEQUENCE

**Document:** `29-Lumi-UI-BUILD-ORDER.md`
**Version:** 1.0
**Status:** Ready for Implementation
**Product:** Lumi

---

# 1. Purpose

This document answers one question:

> **What exactly do we build first, second, third, and so on?**

The objective is to prevent Lumi from becoming a giant unfinished codebase.

We will build Lumi as a series of **vertical slices**.

Each slice should produce something visible and usable.

---

# 2. The Golden Rule

Do not build:

```text
all backend → all frontend → AI → database → testing
```

Instead build:

```text
small feature
    ↓
UI
    ↓
API
    ↓
database
    ↓
behavior
    ↓
test
    ↓
next feature
```

---

# 3. Technology Baseline

For the first implementation:

### Frontend

```text
Next.js
React
JavaScript
Tailwind CSS
```

### Backend

```text
Python
Django
Django REST Framework
```

### Database

```text
PostgreSQL
```

### Infrastructure

```text
Docker
Nginx
Cloudflare
```

### AI

Use a provider abstraction.

Do **not** tightly couple the entire application to one AI provider.

---

# 4. Repository

Recommended:

```text
Lumi/
│
├── frontend/
├── backend/
├── docs/
├── infrastructure/
└── README.md
```

---

# 5. Development Environment

Before UI work:

```text
Node.js
Python
PostgreSQL
Git
Docker
```

must be working.

---

# 6. PHASE 0 — REPOSITORY FOUNDATION

Build:

```text
Lumi/
├── frontend/
├── backend/
├── docs/
└── README.md
```

Create:

```text
.gitignore
.env.example
README.md
```

---

# 7. Environment Variables

Never commit secrets.

Use:

```text
.env
```

and provide:

```text
.env.example
```

---

# 8. PHASE 1 — FRONTEND FOUNDATION

Create the Next.js application.

Then establish:

```text
app/
components/
features/
lib/
hooks/
public/
```

---

# 9. Frontend Feature Structure

Use:

```text
features/
├── auth/
├── onboarding/
├── goals/
├── assessment/
├── learning/
├── progress/
├── evidence/
├── tutor/
└── profile/
```

---

# 10. PHASE 2 — DESIGN TOKENS

Before designing screens, establish:

```text
Colors
Typography
Spacing
Radius
Shadows
Motion
Breakpoints
```

---

# 11. Create Global Tokens

Example conceptual structure:

```text
tokens/
├── colors
├── typography
├── spacing
├── radius
└── motion
```

These may ultimately live in your Tailwind/theme configuration rather than separate files.

---

# 12. Typography First

Define:

```text
Display
Heading 1
Heading 2
Heading 3
Body Large
Body
Body Small
Caption
Label
```

Test:

* long paragraphs
* large text
* small screens
* dark mode

---

# 13. Color System

Define semantic colors:

```text
background
surface
surface-raised
text
text-muted
primary
success
warning
error
info
focus
```

Do not scatter raw hex values throughout components.

---

# 14. PHASE 3 — BASE COMPONENTS

Build:

```text
Button
Input
Textarea
Select
Checkbox
Radio
Switch
Card
Badge
Avatar
Progress
Dialog
Drawer
Tabs
Toast
Tooltip
Skeleton
```

---

# 15. Button System

Create variants:

```text
primary
secondary
ghost
destructive
link
```

and sizes:

```text
small
medium
large
```

---

# 16. Input System

Every input should support:

```text
label
placeholder
help text
error
disabled
loading
required
```

---

# 17. Card System

Create:

```text
Card
CardHeader
CardContent
CardFooter
```

Then create specialized cards from it.

---

# 18. PHASE 4 — APPLICATION SHELL

Build:

```text
AppShell
Sidebar
TopBar
MobileNavigation
PageContainer
```

---

# 19. Desktop Navigation

```text
Home
Learn
Goals
Progress
Profile
```

---

# 20. Mobile Navigation

Use:

```text
Home
Learn
Goals
Progress
Profile
```

with the active state clearly visible.

---

# 21. PHASE 5 — AUTHENTICATION UI

Build:

```text
AUTH-01 Welcome
AUTH-02 Sign Up
AUTH-03 Sign In
AUTH-04 Verify
AUTH-05 Forgot Password
AUTH-06 Reset Password
```

Initially:

> **Use mocked authentication.**

Do not connect backend yet.

---

# 22. AUTH-01 — BUILD FIRST

This is the first actual Lumi screen.

Build:

```text
Header
Hero
Primary CTA
Secondary CTA
Trust statement
```

---

# 23. Welcome Screen Quality Target

The screen should immediately communicate:

> Lumi is for me.

> Lumi is intelligent.

> Lumi is calm.

> Lumi is not just another school platform.

---

# 24. AUTH-02 — SIGN UP

Build the complete form.

Test:

```text
empty
invalid
valid
loading
error
success
```

---

# 25. AUTH-03 — SIGN IN

Build:

```text
Email
Password
Forgot password
Sign in
Create account
```

---

# 26. PHASE 6 — ONBOARDING

Build:

```text
ONB-01
ONB-02
ONB-03
ONB-04
ONB-05
ONB-06
ONB-07
ONB-08
ONB-09
ONB-10
```

---

# 27. Onboarding Navigation

Every onboarding screen needs:

```text
Back
Continue
Progress indicator
```

But don't force back navigation where going backward could cause data loss.

---

# 28. Onboarding Progress

Use:

```text
Step 2 of 7
```

or a subtle progress indicator.

Avoid overwhelming learners with:

> 13% complete.

---

# 29. PHASE 7 — GOAL SYSTEM UI

Build:

```text
GoalSelector
GoalInput
GoalTimeline
TimeAvailability
GoalSummary
```

---

# 30. Goal Creation

The goal should become an actual object in application state.

Initially:

```text
mockGoal
```

Later:

```text
POST /api/v1/goals
```

---

# 31. PHASE 8 — DIAGNOSTIC ASSESSMENT UI

Build:

```text
AssessmentShell
QuestionCard
AnswerOption
ShortAnswer
AssessmentProgress
AssessmentNavigation
```

---

# 32. Assessment Must Feel Different

It should not resemble:

* school exam software
* standardized testing software
* intimidating certification portals

It should feel like:

> **Lumi is trying to understand where I should begin.**

---

# 33. Assessment Mock Engine

Initially create:

```text
questions.js
```

containing test questions.

The UI consumes them exactly as if they came from the API.

---

# 34. PHASE 9 — STARTING POINT

Build:

```text
StartingPointSummary
StrengthCard
DevelopmentCard
RecommendationCard
```

---

# 35. Starting Point Example

```text
Your starting point

Strong
Variables
Basic syntax

Developing
Functions

We'll begin with:
Functions & Parameters

[Start learning]
```

---

# 36. PHASE 10 — LEARNER HOME

Now build the most important screen.

# APP-01

---

# 37. Home Component Tree

Conceptually:

```text
Home
├── Greeting
├── CurrentGoal
├── NextStepCard
│   ├── Activity
│   ├── Time
│   ├── Reason
│   └── Action
├── ProgressOverview
├── SkillSnapshot
├── RecentEvidence
└── Upcoming
```

---

# 38. Home Mock Data

Use realistic data.

Do not use:

```text
Lorem ipsum
Test User
Course 1
Lesson 1
```

Use real Lumi-like content.

---

# 39. PHASE 11 — LEARNING JOURNEY

Build:

```text
JourneyHeader
JourneyTimeline
JourneyNode
CurrentNode
CompletedNode
UpcomingNode
InsertedAdaptiveNode
```

---

# 40. Adaptive Journey Visual

The learner should see that Lumi can modify the path.

Example:

```text
Functions
   ↓
Parameters
   ↓
Practice Review ← Lumi inserted
   ↓
Data Structures
```

---

# 41. PHASE 12 — LESSON EXPERIENCE

Build:

```text
LessonShell
LessonHeader
Objective
ContentBlock
ExampleBlock
InteractiveBlock
ReflectionBlock
LessonFooter
```

---

# 42. Content Blocks

Create a flexible renderer:

```text
ContentRenderer
```

that can display:

```text
paragraph
heading
image
video
audio
code
example
question
interactive
reflection
```

---

# 43. PHASE 13 — PRACTICE

Build:

```text
PracticeShell
Task
AnswerArea
HintSystem
Feedback
Retry
Continue
```

---

# 44. Practice Should Capture Evidence

When the learner completes something meaningful:

```text
Activity
 ↓
Evidence
```

should eventually happen automatically.

---

# 45. PHASE 14 — ASSESSMENT RESULT

Build:

```text
ResultSummary
Strengths
DevelopmentAreas
EvidenceSummary
NextRecommendation
```

---

# 46. PHASE 15 — PROGRESS

Build:

```text
ProgressOverview
MasterySummary
SkillMap
EvidenceTimeline
Milestones
LearningHistory
```

---

# 47. Progress Should Not Be Just Charts

Use actual evidence.

Example:

> **You can now build a function that accepts multiple inputs.**

---

# 48. PHASE 16 — ADAPTIVE RECOMMENDATION

Now build:

```text
AdaptiveRecommendation
WhyThisNext
LearningState
```

This becomes Lumi's signature UX.

---

# 49. Recommendation States

Support:

```text
Continue
Review
Practice
Challenge
Backtrack
Explore
Complete
```

---

# 50. PHASE 17 — AI TUTOR

Only now.

Build:

```text
TutorButton
TutorPanel
Conversation
Message
SuggestedPrompt
ContextIndicator
```

---

# 51. AI Tutor Context

Pass:

```text
goal
journey
concept
current activity
learner state
recent evidence
```

not the entire database.

---

# 52. PHASE 18 — EVIDENCE

Build:

```text
EvidenceCard
EvidenceDetail
EvidenceTimeline
EvidenceTag
SkillEvidence
```

---

# 53. PHASE 19 — PROJECTS

Build:

```text
ProjectCard
ProjectDetail
ProjectRequirements
ProjectSubmission
ProjectEvidence
```

---

# 54. PHASE 20 — PORTFOLIO

Build:

```text
PortfolioHeader
ProjectGrid
SkillSummary
EvidenceCollection
```

---

# 55. PHASE 21 — PROFILE

Build:

```text
ProfileHeader
LearningPreferences
GoalsSummary
PortfolioSummary
AccessibilitySummary
```

---

# 56. PHASE 22 — SETTINGS

Build:

```text
AccountSettings
AppearanceSettings
AccessibilitySettings
LearningSettings
NotificationSettings
PrivacySettings
SecLumitySettings
AISettings
DataSettings
```

---

# 57. PHASE 23 — ACCESSIBILITY

Now perform a dedicated accessibility pass.

But remember:

> Accessibility was already included dLuming component development.

This phase verifies the system.

---

# 58. Accessibility Test

Test:

```text
Keyboard only
Screen reader
200% zoom
Large text
Reduced motion
High contrast
Mobile touch
```

---

# 59. PHASE 24 — AGE ADAPTATION

Build presentation adaptations.

Do not duplicate application logic.

Example:

```text
<LearningExperience
    ageContext={learner.ageContext}
/>
```

The same learning system can render different experiences.

---

# 60. Child UI

Prioritize:

```text
Visual clarity
Simple language
Short tasks
Encouragement
Safe interaction
```

---

# 61. Teen UI

Prioritize:

```text
Autonomy
Identity
Projects
Goals
Progress
```

---

# 62. Adult UI

Prioritize:

```text
Efficiency
Practical outcomes
Flexibility
Career/project context
```

---

# 63. PHASE 25 — BACKEND CONNECTION

Only after the clickable prototype is coherent.

Replace:

```text
mock data
```

with:

```text
API
```

---

# 64. Backend Connection Order

```text
Authentication
 ↓
Learner Profile
 ↓
Goals
 ↓
Assessment
 ↓
Learning Journey
 ↓
Activities
 ↓
Evidence
 ↓
Progress
 ↓
Recommendations
```

---

# 65. PHASE 26 — DATABASE

Create migrations incrementally.

Start with:

```text
users
profiles
learner_profiles
goals
concepts
skills
content_items
lessons
activities
assessments
questions
attempts
responses
evidence
mastery_states
recommendations
```

---

# 66. PHASE 27 — ADAPTIVE ENGINE

Start with deterministic rules.

Example:

```text
IF mastery < 0.40
→ Review

IF mastery 0.40–0.70
→ Practice

IF mastery 0.70–0.90
→ Apply

IF mastery > 0.90 AND confidence high
→ Challenge
```

The exact thresholds should be configurable rather than scattered through code.

---

# 67. PHASE 28 — ADAPTIVE ENGINE V2

Introduce:

```text
Confidence
Response latency
Error patterns
Retention
Prerequisites
```

---

# 68. PHASE 29 — AI

AI should assist the adaptive system.

AI should **not** replace the adaptive engine.

---

# 69. Separation of Responsibilities

```text
Adaptive Engine
= decides learning state

AI
= communicates, explains, tutors, generates assistance
```

This distinction is extremely important.

---

# 70. PHASE 30 — SAFETY

Implement:

```text
Age-aware controls
AI safety
Content moderation
Reporting
Privacy
Guardian controls
Data retention
```

---

# 71. PHASE 31 — PERFORMANCE

Measure:

```text
Page load
Interaction latency
API latency
Image loading
AI response time
Database performance
```

---

# 72. PHASE 32 — OFFLINE / RESILIENCE

Eventually allow learners to:

```text
Read cached content
Continue certain activities
Queue evidence
Sync when connected
```

This is especially valuable for users with unreliable connectivity.

---

# 73. PHASE 33 — ANALYTICS

Track product health.

Core events:

```text
account_created
onboarding_completed
goal_created
assessment_started
assessment_completed
activity_started
activity_completed
evidence_created
goal_progressed
recommendation_accepted
recommendation_skipped
lesson_completed
```

---

# 74. Do Not Track Everything

Only collect information that has a legitimate product purpose.

---

# 75. PHASE 34 — TESTING

Testing layers:

```text
Unit
Integration
API
Component
Accessibility
End-to-end
Adaptive engine
AI
SecLumity
Performance
```

---

# 76. Adaptive Engine Testing

This deserves special attention.

Test scenarios such as:

```text
Strong learner
Struggling learner
Inconsistent learner
Fast learner
Slow learner
High confidence / low mastery
Low confidence / high mastery
Repeated prerequisite errors
Returning after long absence
```

---

# 77. AI Testing

Test:

```text
Correctness
Age appropriateness
Hallucination
Safety
Context retention
Prompt injection
Privacy leakage
Overconfidence
```

---

# 78. PHASE 35 — FIRST PILOT

Do not immediately launch to thousands of people.

Start with a small controlled group.

Observe:

```text
Where users stop
Where they become confused
What recommendations they ignore
What explanations help
What accessibility settings matter
```

---

# 79. PRODUCT ITERATION

After every pilot:

```text
Observe
 ↓
Measure
 ↓
Identify problem
 ↓
Hypothesize
 ↓
Change
 ↓
Test
```

---

# 80. Lumi DEVELOPMENT LOOP

```text
Design
 ↓
Prototype
 ↓
Build
 ↓
Measure
 ↓
Learn
 ↓
Adapt
```

The product itself should embody its own philosophy.

---

# 81. What NOT to Do

Do not:

```text
❌ Build every screen before testing
❌ Build every backend module first
❌ Build AI first
❌ Build social features first
❌ Build a huge gamification system
❌ Create separate apps for every age
❌ Hard-code adaptive decisions into React
❌ Hard-code learner data into UI
```

---

# 82. What You Should Do

Build one complete path:

```text
Sign up
 ↓
Goal
 ↓
Assessment
 ↓
Recommendation
 ↓
Learning
 ↓
Practice
 ↓
Evidence
 ↓
Progress
 ↓
Next recommendation
```

Then make it excellent.

---

# 83. Definition of First Vertical Slice

The first slice is complete when a real user can:

> **Create an account → choose a goal → complete a diagnostic → receive a recommended activity → complete it → generate evidence → see progress → receive another recommendation.**

---

# 84. First Domain

Use one domain for the first vertical slice.

Recommended:

# **Python Fundamentals**

It provides enough complexity to prove Lumi's adaptive behavior.

---

# 85. Example First Journey

```text
Goal:
"Learn Python programming"

Diagnostic:
Variables
Conditions
Loops
Functions

Starting point:
Variables — Strong
Conditions — Strong
Loops — Developing
Functions — Emerging

Lumi recommends:
Functions

Learner completes lesson.

Practice:
Create a function.

Evidence:
Function implementation.

Mastery updates.

Lumi recommends:
Function parameters practice.

```

That is a **real adaptive loop**.

---

# 86. The First Code You Should Write

Not the adaptive algorithm.

Not the AI.

Not the database.

Start with:

```text
Design Tokens
```

Then:

```text
Button
Input
Card
Typography
Layout
```

Then:

```text
AppShell
```

Then:

```text
AUTH-01
```

---

# 87. Exact First Coding Sequence

```text
01 Create repository
02 Create Next.js frontend
03 Configure Tailwind
04 Establish design tokens
05 Establish typography
06 Establish accessibility foundations
07 Build Button
08 Build Input
09 Build Card
10 Build layout primitives
11 Build AppShell
12 Build AUTH-01
13 Build AUTH-02
14 Build AUTH-03
15 Build onboarding
16 Build goal flow
17 Build assessment
18 Build home
19 Build journey
20 Build lesson
21 Build practice
22 Build progress
23 Build recommendation
```

---

# 88. Then Backend

```text
24 Django project
25 PostgreSQL
26 Identity
27 Learners
28 Goals
29 Knowledge
30 Content
31 Assessments
32 Evidence
33 Mastery
34 Recommendations
```

---

# 89. Then Connect

```text
35 Authentication
36 Goals
37 Assessment
38 Journey
39 Learning
40 Evidence
41 Progress
42 Recommendations
```

---

# 90. Then Intelligence

```text
43 Adaptive rules
44 Confidence
45 Error analysis
46 Retention
47 AI Tutor
```

---

# 91. Then Expansion

```text
48 Accessibility refinement
49 Child experience
50 Teen experience
51 Guardian
52 Projects
53 Portfolio
54 Communities
55 Institutions
```

---

# 92. Definition of Done

A phase isn't finished because:

> "The page renders."

It is finished when:

```text
✓ UI works
✓ Data works
✓ Navigation works
✓ Error handling works
✓ Accessibility works
✓ Responsive behavior works
✓ State persists
✓ Tests pass
```

---

# 93. The Most Important Rule for Lumi

Whenever you are tempted to add another feature, ask:

> **Does this make Lumi better at helping someone learn and grow?**

If not:

**Not now.**

---

# 94. The Lumi Build Pyramid

```text
                 ┌──────────────┐
                 │   ADVANCED   │
                 │ AI / ML      │
                 ├──────────────┤
                 │  ADAPTATION  │
                 ├──────────────┤
                 │   LEARNING   │
                 ├──────────────┤
                 │   EVIDENCE   │
                 ├──────────────┤
                 │ ASSESSMENT   │
                 ├──────────────┤
                 │    GOALS     │
                 ├──────────────┤
                 │   IDENTITY   │
                 └──────────────┘
```

Build from bottom to top.

---

# 95. Final Implementation Principle

Lumi is not built by creating **hundreds of screens**.

Lumi is built by creating a **small number of deeply connected experiences**.

The first experience must prove:

> **Lumi can understand a person, help them pursue something meaningful, adapt to them, and show them that they are growing.**

---

# 96. We Have Reached the Build Stage

The documentation phase is now sufficient for the **first implementation**.

The next action should be **code**, not another architecture document.

## Start here:

```text
Lumi
 ↓
Next.js project
 ↓
Design tokens
 ↓
Base components
 ↓
App shell
 ↓
AUTH-01 — Welcome
```

After AUTH-01 is built, move directly into:

```text
AUTH-02 → AUTH-03 → ONB-01 → ...
```

**Do not create another planning layer before beginning the actual UI.**
