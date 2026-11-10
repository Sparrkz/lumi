# Lumi — DESIGN SYSTEM & UI BUILD SPECIFICATION

**Document:** `27-Lumi-DESIGN-SYSTEM-AND-UI-BUILD-SPECIFICATION.md`
**Version:** 1.0
**Status:** UI Foundation / Build Specification
**Product:** Lumi

---

# 1. Purpose

This document defines how Lumi should **look, feel, behave, and scale visually** across every age and life stage.

Lumi should not feel like:

* a school portal
* a corporate LMS
* a children's game
* an AI chatbot
* a productivity dashboard

It should feel like:

> **A calm, intelligent place where anyone can grow.**

---

# 2. Lumi Design Philosophy

The interface must communicate five things immediately:

```text
I belong here.
I understand where I am.
I know what to do next.
I can learn in my own way.
I am making progress.
```

---

# 3. Design Principles

## 3.1 Human Before System

Never make the learner feel like a database record.

Avoid:

> `Learner ID: 928381`

Prefer:

> **Welcome back, Sparkz.**

---

## 3.2 Clarity Before Decoration

Every screen should have one obvious primary action.

---

## 3.3 Calm Over Noise

Lumi should feel spacious.

Avoid:

* excessive cards
* unnecessary badges
* constant animations
* dense dashboards
* competing colors
* notification overload

---

# 4. Universal Design

Lumi should be usable by:

```text
Children
Teenagers
Young adults
Adults
Older adults
Neurodivergent learners
Learners with disabilities
Learners with limited digital experience
Advanced learners
```

---

# 5. Progressive MatLumity

Lumi uses the same underlying system but adapts presentation.

```text
Lumi
│
├── Early Learner Experience
├── Developing Learner Experience
├── Teen Experience
├── Adult Experience
└── Professional Experience
```

These are **experience modes**, not separate applications.

---

# 6. Visual Personality

Lumi should feel:

### Calm

The learner should not feel rushed.

### Intelligent

The interface should feel purposeful.

### Warm

It should feel human.

### Modern

It should feel technologically advanced.

### Trustworthy

Parents, professionals, educators, and institutions should feel comfortable using it.

---

# 7. Brand Personality

Lumi's visual language:

```text
Quiet confidence
+
Warm intelligence
+
Human cLumiosity
+
Clarity
+
Growth
```

---

# 8. Avoid

Lumi should not look:

```text
❌ childish
❌ overly corporate
❌ sterile
❌ overly gamified
❌ cyberpunk
❌ excessively futLumistic
❌ cluttered
❌ academic-only
```

---

# 9. Color System

Use semantic colors rather than arbitrary colors.

Core categories:

```text
Primary
Secondary
Accent
Surface
Background
Text
Muted
Success
Warning
Error
Info
Focus
```

---

# 10. Color Architecture

Example token structure:

```text
--color-primary
--color-primary-hover
--color-primary-active

--color-background
--color-surface
--color-surface-raised
--color-surface-subtle

--color-text
--color-text-secondary
--color-text-muted

--color-success
--color-warning
--color-error
--color-info
```

Do not hard-code colors throughout components.

---

# 11. Light and Dark Mode

Lumi should support both.

```text
Light
Dark
System
```

Dark mode should not simply invert colors.

It needs its own contrast hierarchy.

---

# 12. Typography

Typography should prioritize:

```text
Readability
Hierarchy
Legibility
Accessibility
```

Recommended hierarchy:

```text
Display
H1
H2
H3
H4
Body Large
Body
Body Small
Caption
Label
```

---

# 13. Typography Rules

Avoid excessive font-weight changes.

Use hierarchy primarily through:

* size
* spacing
* position
* limited weight variation

---

# 14. Reading Width

Long-form educational content should have a controlled reading width.

Recommended:

```text
600–760px
```

depending on content type.

---

# 15. Spacing System

Use a consistent spacing scale.

Example:

```text
4
8
12
16
20
24
32
40
48
64
80
96
```

---

# 16. Border Radius

Lumi should use soft but controlled corners.

Suggested tokens:

```text
sm
md
lg
xl
pill
```

Avoid making every element excessively rounded.

---

# 17. Elevation

Use subtle elevation.

```text
Level 0 → flat
Level 1 → subtle
Level 2 → floating
Level 3 → modal
```

Avoid heavy shadows.

---

# 18. ICONOGRAPHY

Icons should:

* be simple
* be recognizable
* have consistent stroke weight
* never replace important text unnecessarily

---

# 19. Motion

Motion should communicate meaning.

Use animation for:

```text
Navigation
State changes
Progress
Feedback
Loading
Context transitions
```

Do not animate simply because animation is possible.

---

# 20. Reduced Motion

If the learner enables reduced motion:

```text
Transitions become minimal
Parallax disappears
Decorative animation stops
Progress animations become instant
```

---

# 21. Core Component Library

Lumi should have reusable:

```text
Button
Input
Textarea
Select
Checkbox
Radio
Switch
Tabs
Dialog
Drawer
Toast
Tooltip
Dropdown
Card
Badge
Avatar
Progress
Skeleton
Breadcrumb
Pagination
Accordion
Navigation
```

---

# 22. Learning Components

Create dedicated learning components:

```text
LearningObjective
ConceptCard
LessonBlock
ExampleBlock
PracticeBlock
HintPanel
FeedbackPanel
ReflectionBlock
AssessmentQuestion
MasteryIndicator
RecommendationCard
EvidenceCard
```

---

# 23. Adaptive Components

Special Lumi components:

```text
AdaptiveRecommendation
WhyThisNext
DifficultyIndicator
ConfidenceIndicator
LearningState
SuggestedReview
PrerequisiteAlert
ChallengePrompt
```

---

# 24. `WhyThisNext`

This is one of Lumi's signature components.

Example:

> **Why this next?**

> Your recent answers show that you understand functions well, but you're still making mistakes when working with parameters. Let's strengthen that before moving on.

This builds trust in the adaptive engine.

---

# 25. Mastery Visualization

Do not rely exclusively on progress bars.

Possible representations:

```text
Emerging
Developing
Strong
Mastered
```

Use language alongside visuals.

---

# 26. Avoid "Red = Bad"

Especially for neurodivergent learners, don't make every mistake visually alarming.

Errors are:

> **information.**

---

# 27. Error Presentation

Instead of:

> ❌ WRONG!

Prefer:

> **Not quite yet.**

Then:

> Let's look at what happened.

---

# 28. Feedback Philosophy

Feedback should answer:

```text
What happened?
Why?
What should I try?
```

---

# 29. Buttons

Primary action:

```text
Continue
Start
Submit
Practice
Try again
```

Secondary:

```text
Review
Save
Explore
Ask Lumi
```

---

# 30. Button Hierarchy

Each screen should generally have:

```text
1 primary action
1–2 secondary actions
```

Avoid ten competing buttons.

---

# 31. Navigation

Lumi should have responsive navigation.

### Desktop

```text
Sidebar
```

### Tablet

```text
Compact Sidebar
```

### Mobile

```text
Bottom Navigation
```

---

# 32. Primary Navigation

Recommended:

```text
Home
Learn
Goals
Progress
Profile
```

---

# 33. Secondary Navigation

Inside learning:

```text
Journey
Lessons
Practice
Projects
Evidence
```

---

# 34. Mobile Bottom Navigation

Use approximately:

```text
Home
Learn
Goals
Progress
Profile
```

---

# 35. Global Search

Eventually:

```text
Search Lumi
```

should search:

```text
Lessons
Concepts
Skills
Projects
Communities
People
```

But advanced search does not need to be part of the first MVP.

---

# 36. Screen Architecture

Lumi screens should generally follow:

```text
Context
 ↓
Page title
 ↓
Primary action
 ↓
Main content
 ↓
Supporting information
```

---

# 37. Screen States

Every major screen must have:

```text
Loading
Empty
Error
Success
Offline
Permission denied
Not available
```

---

# 38. Loading State

Use skeletons for content-heavy areas.

Avoid indefinite spinners where possible.

---

# 39. Empty State

Never simply say:

> No data.

Instead:

```text
No learning goals yet.

Choose something you'd like to accomplish
and Lumi will help you build a path toward it.

[Create a goal]
```

---

# 40. Error State

Errors should be:

```text
Human
Specific
Recoverable
```

Example:

> We couldn't load your journey.

> Check your connection and try again.

---

# 41. Authentication

Screens:

```text
Welcome
Sign up
Sign in
Password recovery
Email verification
Account recovery
```

---

# 42. Welcome Screen

Do not immediately bombard the user with features.

Message:

> **Learning should fit you.**

Supporting text:

> Tell Lumi what you're trying to accomplish, and we'll help you figure out where to begin.

Primary:

**Get Started**

Secondary:

**I already have an account**

---

# 43. Onboarding

Onboarding should be progressive.

Flow:

```text
Welcome
 ↓
About You
 ↓
What brings you here?
 ↓
Goal
 ↓
Learning preferences
 ↓
Accessibility
 ↓
Initial assessment
```

---

# 44. About You

For adults:

```text
Name
Life stage
Optional background
```

For children:

Use guardian-managed information where required.

---

# 45. Goal Selection

Do not ask:

> "Which course do you want?"

Ask:

> **What would you like to be able to do?**

---

# 46. Goal Examples

```text
Pass my mathematics exam

Build my first website

Learn photography

Prepare for a job interview

Understand personal finance

Learn to play guitar

Become better at public speaking
```

---

# 47. Goal Creation Screen

Structure:

```text
What do you want to accomplish?

[Goal]

Why does this matter to you?

[Optional]

When would you like to reach it?

[Timeline]

How much time can you usually spend?

[Availability]

[Continue]
```

---

# 48. Assessment Screen

The assessment should feel calm.

Header:

```text
Let's find your starting point.
```

Not:

> EXAMINATION

---

# 49. Assessment Layout

```text
Progress
Question
Context
Answer
Optional hint
Continue
```

---

# 50. Assessment Accessibility

Allow:

```text
Text-to-speech
Larger text
Keyboard input
Extended time where appropriate
Alternative formats
```

---

# 51. Assessment Feedback

Avoid showing unnecessary scores immediately if they don't help learning.

Instead:

> Lumi has a good idea of where to begin.

---

# 52. Learner Home

The most important screen.

---

# 53. Home Layout

```text
Greeting

Your current goal
────────────────────
Goal title
Progress
Milestone

Continue learning
────────────────────
Recommended activity

Why this next?
────────────────────
Adaptive explanation

Your progress
────────────────────
Skills / concepts

Recent evidence
────────────────────

Upcoming
────────────────────
```

---

# 54. The Primary Home Question

Every time a learner opens Lumi:

> **"What should I do now?"**

should be answered.

---

# 55. Learning Journey Screen

Structure:

```text
Goal
 ↓
Current position
 ↓
Completed
 ↓
Current
 ↓
Upcoming
```

Example:

```text
Python Foundations

✓ Variables
✓ Data Types
✓ Conditions

→ Functions        CURRENT

○ Data Structures
○ APIs
○ Final Project
```

---

# 56. Adaptive Path

Do not make the journey look like a rigid course syllabus.

It should communicate:

> **This path is being shaped around you.**

---

# 57. Lesson Screen

Recommended structure:

```text
Lesson title
Objective

Learn
─────

Example
─────

Try it
─────

Feedback
─────

Apply it
─────

Continue
```

---

# 58. Focus Mode

Lumi should provide an optional distraction-minimized mode.

Hide:

```text
Sidebar
Notifications
Unnecessary navigation
Secondary content
```

---

# 59. Focus Mode Layout

```text
← Exit

Concept
Progress

Main learning content

[Continue]
```

---

# 60. Practice Screen

Practice should feel interactive.

```text
Question
 ↓
Attempt
 ↓
Feedback
 ↓
Retry / Continue
```

---

# 61. Hint System

Instead of giving the answer immediately:

```text
Hint 1 → Small nudge
Hint 2 → More guidance
Hint 3 → Worked example
```

---

# 62. AI Tutor

The tutor should not dominate the interface.

Use:

```text
Ask Lumi
```

as a contextual action.

---

# 63. Tutor Panel

Could open as:

```text
Desktop → side panel
Mobile → bottom sheet/full screen
```

---

# 64. Tutor Context

Display:

> **I'm helping you with Functions**

so the learner understands what the AI knows.

---

# 65. Progress Screen

Progress should answer:

```text
What have I learned?
What can I do?
Where am I improving?
What needs attention?
What comes next?
```

---

# 66. Progress Sections

```text
Current Goal
Skills
Concepts
Evidence
Milestones
Learning History
```

---

# 67. Skill Map

Eventually Lumi can visualize:

```text
Programming
│
├── Fundamentals       Strong
├── Problem Solving    Developing
├── Functions          Strong
├── Data Structures    Emerging
└── APIs               Not started
```

---

# 68. Evidence Screen

Show actual work.

```text
Project
What you did
Skills demonstrated
Feedback
Date
Evidence quality
```

---

# 69. Portfolio

The learner should eventually be able to turn evidence into a portfolio.

```text
My Portfolio

Projects
Skills
Achievements
Credentials
```

---

# 70. Goals Screen

```text
Active
Completed
Paused
Archived
```

Each goal shows:

```text
Goal
Progress
Next milestone
Next action
```

---

# 71. Profile

Profile should focus on identity and learning preferences.

```text
About
Learning preferences
Accessibility
Goals
Achievements
Portfolio
Privacy
```

---

# 72. Settings

Categories:

```text
Account
Appearance
Accessibility
Learning
Notifications
Privacy
SecLumity
AI
Data
```

---

# 73. Accessibility Center

Make accessibility discoverable.

Include:

```text
Text size
Contrast
Motion
Captions
Audio
Reading assistance
Interaction preferences
```

---

# 74. Neurodivergent Experience

Lumi should support different cognitive needs without requiring a learner to disclose a diagnosis.

Possible controls:

```text
Reduce distractions
Simplify screen
Break tasks into steps
Increase spacing
Reduce animation
Show one task at a time
Provide predictable layouts
Enable reminders
Change feedback style
```

---

# 75. Important Principle

Do not label users:

> "ADHD Mode"

or:

> "Autism Mode"

as a default product architecture.

Instead offer **specific preferences and supports**.

---

# 76. Child Experience

A seven-year-old should not see the adult dashboard.

The underlying system remains Lumi.

The presentation changes.

---

# 77. Child Home

Possible structure:

```text
Hello!

Today
⭐ One thing to do

[Start]

My Journey
🌱 → 🌿 → 🌳

Things I made
🧩 Projects

Need help?
Ask Lumi
```

---

# 78. Child Language

Use:

```text
short sentences
clear verbs
friendly labels
visual cues
```

Avoid unnecessary technical language.

---

# 79. Child Learning

Learning can use:

```text
Stories
Pictures
Audio
Manipulation
Games
Practice
Conversation
Creation
```

---

# 80. Child Feedback

Instead of:

> Your mastery score increased by 8%.

Use:

> **You're getting better at this!**

Detailed analytics remain available to authorized adults.

---

# 81. Teen Experience

Teens should receive more autonomy.

```text
Goals
Projects
Skills
Progress
Challenges
Portfolio
```

The interface should increasingly resemble the adult experience as matLumity develops.

---

# 82. Adult Experience

Adults should have:

```text
Goal-driven navigation
Time-aware learning
Practical application
Career/project context
Flexible scheduling
```

---

# 83. Professional Experience

Professionals may prioritize:

```text
Skills
Credentials
Projects
Career goals
Competency evidence
Professional development
```

---

# 84. Older Adult Experience

Do not assume low technical ability.

Instead provide:

* excellent readability
* clear navigation
* predictable interactions
* adjustable text
* voice support where available

---

# 85. Responsive Design

Breakpoints should be based on layout needs rather than device names.

At minimum:

```text
Mobile
Tablet
Desktop
Wide Desktop
```

---

# 86. Mobile First

Every major Lumi experience must work on a phone.

---

# 87. Touch Targets

Interactive controls should have sufficiently large touch areas.

Do not place tiny controls next to each other.

---

# 88. Keyboard Accessibility

Everything essential must be keyboard accessible.

---

# 89. Focus States

Every interactive element needs a clearly visible focus state.

---

# 90. Screen Readers

Use semantic HTML.

Prefer:

```text
button
nav
main
section
article
header
footer
```

over generic `div` structures.

---

# 91. Forms

Every field needs:

```text
Label
Input
Help text where necessary
Error state
Accessible error message
```

---

# 92. Tables

Complex tables should provide alternative mobile layouts.

---

# 93. Charts

Charts must have text alternatives.

Never communicate important information through color alone.

---

# 94. Gamification UI

Lumi should use motivation carefully.

Possible:

```text
Milestones
Progress
Streaks
Achievements
Challenges
```

But never make learning feel like an endless competition.

---

# 95. No Punitive Streaks

If a learner misses several days:

Don't say:

> **You lost your 45-day streak!**

Prefer:

> **Welcome back. Ready to continue?**

---

# 96. Motivation

Lumi should reinforce:

```text
Progress
Effort
CLumiosity
Persistence
Capability
Reflection
```

not perfection.

---

# 97. Notifications

Use notifications sparingly.

---

# 98. Adaptive Notifications

If the learner repeatedly ignores reminders, Lumi should reduce them rather than increasing them.

---

# 99. Trust UI

Lumi should clearly communicate when AI is involved.

Example:

> **Lumi AI**

rather than pretending AI output is human-authored.

---

# 100. AI Uncertainty

When appropriate:

> "I'm not completely certain. Let's check this together."

This is better than false confidence.

---

# 101. Data Transparency

The learner should eventually be able to see:

```text
What Lumi knows
Why Lumi recommends something
What data influences recommendations
What can be changed
```

---

# 102. Adaptive Transparency

The `Why this next?` component becomes central to Lumi's trust model.

---

# 103. Navigation Architecture

```text
Lumi
│
├── Home
│
├── Learn
│   ├── Journey
│   ├── Lessons
│   ├── Practice
│   └── Projects
│
├── Goals
│
├── Progress
│   ├── Skills
│   ├── Evidence
│   └── History
│
└── Profile
    ├── Preferences
    ├── Accessibility
    ├── Notifications
    └── Privacy
```

---

# 104. Core Screen Inventory

## Authentication

```text
AUTH-01 Welcome
AUTH-02 Sign Up
AUTH-03 Sign In
AUTH-04 Verify Account
AUTH-05 Recover Account
```

---

## Onboarding

```text
ONB-01 Introduction
ONB-02 About You
ONB-03 Learning Intent
ONB-04 Goal Selection
ONB-05 Goal Details
ONB-06 Preferences
ONB-07 Accessibility
ONB-08 Assessment Introduction
ONB-09 Diagnostic Assessment
ONB-10 Starting Point
```

---

## Main Application

```text
APP-01 Home
APP-02 Learn
APP-03 Journey
APP-04 Lesson
APP-05 Practice
APP-06 Assessment
APP-07 Results
APP-08 Goals
APP-09 Goal Detail
APP-10 Progress
APP-11 Skills
APP-12 Evidence
APP-13 Portfolio
APP-14 Projects
APP-15 Tutor
APP-16 Profile
APP-17 Settings
```

---

# 105. System Screens

```text
SYS-01 Loading
SYS-02 Offline
SYS-03 Error
SYS-04 Not Found
SYS-05 Permission Denied
SYS-06 Maintenance
```

---

# 106. Admin Screens

Later:

```text
ADM-01 Dashboard
ADM-02 Users
ADM-03 Content
ADM-04 Concepts
ADM-05 Skills
ADM-06 Assessments
ADM-07 Evidence
ADM-08 Safety
ADM-09 Analytics
```

---

# 107. Guardian Screens

Later:

```text
GUA-01 Overview
GUA-02 Learner Progress
GUA-03 Goals
GUA-04 Learning Activity
GUA-05 Safety
GUA-06 Controls
```

---

# 108. Screen Naming

Use stable identifiers:

```text
APP-01
APP-02
APP-03
```

This will become extremely useful dLuming development.

---

# 109. Screen Mapping

The first major flow:

```text
AUTH-01
   ↓
AUTH-02
   ↓
ONB-01
   ↓
ONB-02
   ↓
ONB-03
   ↓
ONB-04
   ↓
ONB-05
   ↓
ONB-06
   ↓
ONB-07
   ↓
ONB-08
   ↓
ONB-09
   ↓
ONB-10
   ↓
APP-01
```

---

# 110. Core Learning Flow

```text
APP-01
 ↓
APP-03
 ↓
APP-04
 ↓
APP-05
 ↓
APP-06
 ↓
APP-07
 ↓
APP-03
 ↓
APP-01
```

---

# 111. Goal Flow

```text
APP-01
 ↓
APP-08
 ↓
APP-09
 ↓
Goal setup
 ↓
Learning Journey
```

---

# 112. Evidence Flow

```text
APP-05
 ↓
Project / Activity
 ↓
Evidence Created
 ↓
APP-12
 ↓
APP-13
```

---

# 113. AI Flow

```text
APP-04
 ↓
Ask Lumi
 ↓
APP-15
 ↓
Contextual response
 ↓
Return to lesson
```

---

# 114. Design-to-Code Rule

Every designed component should have a corresponding reusable implementation.

Example:

```text
Design:
Recommendation Card

Code:
<AdaptiveRecommendation />
```

---

# 115. Avoid Page-Specific Styling

Do not create:

```text
home-card.css
lesson-card.css
progress-card.css
```

when they are fundamentally the same component.

Create:

```text
Card
```

with variants.

---

# 116. Component Architecture

```text
components/
│
├── ui/
│
├── layout/
│
├── navigation/
│
├── learning/
│
├── assessment/
│
├── progress/
│
├── goals/
│
├── adaptive/
│
├── tutor/
│
└── accessibility/
```

---

# 117. Design Tokens

Keep tokens centrally defined.

```text
colors
typography
spacing
radius
shadows
motion
breakpoints
z-index
```

---

# 118. The Lumi Signature Component

Lumi needs one unmistakable component:

# **The Next Step Card**

It should answer:

```text
What should I do?
Why?
How long will it take?
What will it help me achieve?
```

Example:

> **Continue with Functions**

> 12 min

> You understand basic functions. One recent exercise showed difficulty with parameters, so we'll practice that next.

**[Continue]**

---

# 119. The Second Signature Component

# **Learning State**

Example:

```text
Functions

Strong
████████░░

You can:
✓ Create functions
✓ Return values
✓ Use arguments

Keep developing:
→ Multiple parameters
```

---

# 120. The Third Signature Component

# **Evidence Card**

Example:

> **Calculator Project**

> Demonstrated:
> Functions · Conditions · Input Handling

> Evidence: Strong

> **View project**

---

# 121. Lumi Visual Hierarchy

On almost every learner screen:

```text
1. Goal
2. Current task
3. Action
4. Context
5. Progress
```

---

# 122. The Emotional Goal

When a learner finishes a Lumi session, they should feel:

> **"I know more than I did before, and I know what to do next."**

Not:

> "I completed another page."

---

# 123. Definition of Done for UI

A screen is not finished until:

```text
✓ Desktop works
✓ Mobile works
✓ Keyboard works
✓ Screen reader semantics exist
✓ Loading state exists
✓ Empty state exists
✓ Error state exists
✓ Dark mode works
✓ Reduced motion works
✓ Touch targets work
✓ Typography scales
✓ API states are handled
```

---

# 124. The Actual Build Order

Now we stop designing abstractly.

Build in this exact order:

### STEP 1

**Lumi Design Tokens**

### STEP 2

**Typography + Colors**

### STEP 3

**Base Components**

### STEP 4

**Application Shell**

### STEP 5

**Authentication**

### STEP 6

**Onboarding**

### STEP 7

**Learner Home**

### STEP 8

**Goal Creation**

### STEP 9

**Diagnostic Assessment**

### STEP 10

**Learning Journey**

### STEP 11

**Lesson Experience**

### STEP 12

**Practice**

### STEP 13

**Progress**

### STEP 14

**Adaptive Recommendation**

### STEP 15

**AI Tutor**

### STEP 16

**Accessibility**

### STEP 17

**Child / Teen / Adult adaptations**

### STEP 18

**Guardian**

### STEP 19

**Admin**

---

# 125. IMPORTANT

**Do not start coding the AI tutor first.**

Do not start with:

> "Let's build the adaptive algorithm."

Do not start with:

> "Let's build the dashboard."

Start with:

# **The Lumi Design System.**

Then build the application shell.

Then build the first complete learner journey.

---

# 126. First UI Prototype

The first clickable prototype should contain only:

```text
Welcome
 ↓
Onboarding
 ↓
Goal
 ↓
Assessment
 ↓
Home
 ↓
Learning
 ↓
Practice
 ↓
Progress
```

If this flow feels incredible, the foundation is right.

---

# 127. First Real Product Loop

The first working software should be able to do this:

```text
USER
 ↓
Creates Goal
 ↓
Takes Assessment
 ↓
Gets Starting Level
 ↓
Receives First Activity
 ↓
Completes Activity
 ↓
System Records Evidence
 ↓
Mastery Changes
 ↓
Next Activity Changes
```

That is where **Lumi stops being a concept and becomes a product.**

---

# 128. Final UI Principle

Lumi should never make a learner think:

> **"What does this app want me to do?"**

It should make them think:

> **"I know exactly what I'm doing, why I'm doing it, and I can do it my way."**

---

## NEXT

The architecture phase is now effectively complete.

The next document should **not** be another giant architecture document.

The next one should be:

# `28-Lumi-SCREEN-BY-SCREEN-BUILD-MAP.md`

That will be the **actual construction map**.

For every screen, it will specify:

```text
Screen ID
Purpose
User
Entry point
Exit points
Layout
Sections
Components
Interactions
States
Responsive behavior
Accessibility behavior
Age adaptations
Data required
API endpoints
Database dependencies
Navigation links
```

Then we can literally go:

**Screen 01 → design it → code it → connect it → test it → move to Screen 02.**

That is the point where we should start turning Lumi into the actual UI.
