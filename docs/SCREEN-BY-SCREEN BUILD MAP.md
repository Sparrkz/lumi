# Lumi — SCREEN-BY-SCREEN BUILD MAP

**Document:** `28-SCREEN-BY-SCREEN-BUILD-MAP.md`
**Version:** 1.0
**Status:** Implementation Blueprint
**Product:** Lumi

---

# 1. Purpose

This document turns Lumi's architecture and design system into an **actual screen construction plan**.

From this point forward, every screen should be buildable without asking:

> "What are we supposed to put here?"

Every screen has:

* a purpose
* a user
* an entry point
* exit points
* layout
* components
* interactions
* states
* accessibility requirements
* responsive behavior
* data dependencies
* API dependencies

---

# 2. The Rule for Building Lumi

Build the **user journey**, not isolated screens.

The first complete journey is:

```text
WELCOME
   ↓
SIGN UP
   ↓
ONBOARDING
   ↓
GOAL
   ↓
DIAGNOSTIC
   ↓
STARTING POINT
   ↓
HOME
   ↓
JOURNEY
   ↓
LEARNING
   ↓
PRACTICE
   ↓
EVIDENCE
   ↓
PROGRESS
   ↓
NEXT RECOMMENDATION
```

---

# 3. Screen Inventory

## Phase A — Entry

```text
AUTH-01 Welcome
AUTH-02 Sign Up
AUTH-03 Sign In
AUTH-04 Verify Account
AUTH-05 Forgot Password
AUTH-06 Reset Password
```

## Phase B — Onboarding

```text
ONB-01 Introduction
ONB-02 About You
ONB-03 Learning Intent
ONB-04 Goal Selection
ONB-05 Goal Details
ONB-06 Learning Preferences
ONB-07 Accessibility Preferences
ONB-08 Assessment Introduction
ONB-09 Diagnostic Assessment
ONB-10 Starting Point
```

## Phase C — Core Learning

```text
APP-01 Home
APP-02 Learn
APP-03 Journey
APP-04 Lesson
APP-05 Practice
APP-06 Assessment
APP-07 Assessment Result
APP-08 Goals
APP-09 Goal Detail
APP-10 Progress
APP-11 Skills
APP-12 Evidence
APP-13 Portfolio
APP-14 Projects
APP-15 AI Tutor
APP-16 Profile
APP-17 Settings
```

## Phase D — Supporting

```text
SYS-01 Loading
SYS-02 Error
SYS-03 Offline
SYS-04 Not Found
SYS-05 Permission Denied
SYS-06 Maintenance
```

---

# 4. BUILD ORDER

Do **not** build the screens in numerical order.

Build them in this order:

```text
01 Design System
02 App Shell
03 Welcome
04 Authentication
05 Onboarding
06 Goal
07 Assessment
08 Starting Point
09 Home
10 Journey
11 Lesson
12 Practice
13 Assessment Result
14 Progress
15 Adaptive Recommendation
16 AI Tutor
17 Goals
18 Evidence
19 Portfolio
20 Profile
21 Settings
22 System States
```

---

# 5. APP SHELL

Before individual application screens, build:

```text
AppShell
├── DesktopSidebar
├── MobileBottomNav
├── TopBar
├── PageContainer
├── ContentArea
├── NotificationArea
└── GlobalModalLayer
```

---

# 6. APP SHELL RESPONSIBILITIES

The shell handles:

* navigation
* authentication state
* responsive layout
* theme
* accessibility
* notifications
* global dialogs
* route transitions

Individual screens should **not** recreate these.

---

# 7. AUTH-01 — WELCOME

### Purpose

Introduce Lumi.

### User

New visitor.

### Entry

Root `/`

### Layout

```text
Logo
Navigation
Hero
Primary CTA
Secondary CTA
Trust statement
```

### Hero

> **Learning should fit you.**

Supporting text:

> Lumi adapts learning around who you are, what you want to achieve, and how you learn best.

Primary:

**Get Started**

Secondary:

**Sign In**

---

# 8. Welcome Interactions

```text
Get Started → AUTH-02
Sign In → AUTH-03
```

---

# 9. Welcome States

```text
Default
Loading
Navigation failure
```

---

# 10. AUTH-02 — SIGN UP

### Purpose

Create account.

### Fields

```text
First name
Email
Password
Confirm password
```

Potentially:

```text
Date of birth / age information
```

should be handled according to the appropriate account/guardian flow rather than unnecessarily exposing sensitive information.

---

# 11. Sign-Up Layout

```text
Lumi logo

Create your Lumi account

[First name]
[Email]
[Password]
[Confirm password]

[Create account]

Already have an account?
Sign in
```

---

# 12. Sign-Up Validation

Validate:

* required fields
* valid email
* password requirements
* matching passwords
* duplicate account

Errors must appear beside the relevant field.

---

# 13. AUTH-03 — SIGN IN

```text
Email
Password
Remember me
Forgot password?

[Sign in]
```

---

# 14. AUTH-04 — VERIFY ACCOUNT

Explain:

> We've sent a verification message to your email.

Actions:

```text
Open email
Resend
Change email
```

---

# 15. AUTH-05 — FORGOT PASSWORD

Minimal:

```text
Email

[Send recovery link]
```

---

# 16. AUTH-06 — RESET PASSWORD

```text
New password
Confirm password

[Reset password]
```

---

# 17. ONB-01 — INTRODUCTION

### Purpose

Explain what Lumi will do.

Example:

> **Let's make learning fit you.**

> Lumi will learn about your goal, your starting point, and how you prefer to learn.

CTA:

**Let's begin**

---

# 18. ONB-02 — ABOUT YOU

Do not make this feel like a government form.

Possible:

```text
What should Lumi call you?

[Name]

What best describes you right now?

Student
Working
Exploring
Building
Retired
Other
```

These are contextual rather than restrictive.

---

# 19. ONB-03 — LEARNING INTENT

Primary question:

> **What brings you to Lumi?**

Options:

```text
I want to learn something new
I need help with school
I want to build a skill
I want to advance my career
I want to complete a project
I want to improve myself
I'm exploring
Something else
```

Multiple selections can be supported.

---

# 20. ONB-04 — GOAL SELECTION

Question:

> **What would you like to be able to do?**

Search:

```text
[What do you want to accomplish?]
```

Suggestions appear below.

---

# 21. Goal Suggestions

Examples:

```text
Learn Python
Improve mathematics
Learn photography
Prepare for an exam
Learn public speaking
Build a website
Learn music
```

---

# 22. ONB-05 — GOAL DETAILS

Collect:

```text
Goal
Why
Desired outcome
Timeline
Available time
```

Optional fields should remain optional.

---

# 23. Goal Timeline

Use meaningful language:

```text
No deadline
Within a month
Within 3 months
Within 6 months
Within a year
Specific date
```

---

# 24. Time Availability

```text
10 minutes
20 minutes
30 minutes
1 hour
A few hours
Flexible
```

This directly influences Lumi's journey design.

---

# 25. ONB-06 — LEARNING PREFERENCES

Do not ask:

> "What learning style are you?"

Learning-style labels are too simplistic.

Instead ask:

> **What helps you learn best?**

Possible preferences:

```text
Examples
Practice
Visual explanations
Reading
Listening
Conversation
Projects
Step-by-step guidance
Independent exploration
```

Multiple choices.

---

# 26. ONB-07 — ACCESSIBILITY

Question:

> **Would you like Lumi to work differently for you?**

Options:

```text
Larger text
Reduced motion
Less visual clutter
More spacing
Audio support
Captions
Step-by-step tasks
Extra time
Simplified interface
No changes
```

This is optional.

---

# 27. Important Accessibility Rule

Do not ask:

> "Do you have a disability?"

as the primary mechanism for personalization.

Ask:

> **"What would make learning easier for you?"**

---

# 28. ONB-08 — ASSESSMENT INTRO

Explain:

> **Before we begin, let's find your starting point.**

> There are no grades here. Your answers help Lumi decide where to begin.

CTA:

**Find my starting point**

---

# 29. ONB-09 — DIAGNOSTIC ASSESSMENT

### Layout

```text
Progress
Question
Context
Answer options
Optional hint
Back
Continue
```

---

# 30. Assessment Interaction

After each response:

```text
Record response
Evaluate evidence
Determine next question
```

Eventually the assessment becomes adaptive.

---

# 31. Assessment Modes

Support:

```text
Multiple choice
Short answer
Matching
Ordering
Practical task
Code task
Reflection
```

Only use formats appropriate to the learning domain.

---

# 32. ONB-10 — STARTING POINT

This screen closes onboarding.

Example:

> **We've found your starting point.**

Then:

```text
Your strengths
Areas to develop
Starting concepts
First recommended activity
```

Primary:

**Start learning**

---

# 33. APP-01 — HOME

This is Lumi's most important screen.

The home screen must immediately answer:

> **What should I do next?**

---

# 34. Home Layout

```text
Greeting
↓
Current Goal
↓
Next Step
↓
Why This Next
↓
Progress
↓
Recent Evidence
↓
Upcoming
```

---

# 35. Home Hero

Example:

> **Good morning.**

> You're working toward:

> **Build my first Python application**

---

# 36. Next Step Card

```text
Continue learning

Functions & Parameters

12 min

You understand basic functions.
Let's strengthen parameter handling
before moving forward.

[Continue]
```

---

# 37. Home Progress

Show:

```text
Goal progress
Concept mastery
Current milestone
```

Don't overwhelm with 20 metrics.

---

# 38. APP-02 — LEARN

This is the learning hub.

Sections:

```text
Current Journey
Practice
Projects
Explore
```

---

# 39. APP-03 — JOURNEY

Show the adaptive path.

Example:

```text
Python Foundations

✓ Variables
✓ Data Types
✓ Conditions

→ Functions
   Current

○ Data Structures
○ APIs
○ Project
```

---

# 40. Journey Must Be Dynamic

Do not make it a static course outline.

Lumi may insert:

```text
Review
Practice
Prerequisite
Challenge
Reflection
Project
```

between existing concepts.

---

# 41. APP-04 — LESSON

### Structure

```text
Lesson title
Objective

Explanation

Example

Try it

Feedback

Apply it

Next step
```

---

# 42. Lesson Header

Show:

```text
Goal
Journey position
Estimated time
```

Example:

> Python Foundations · Step 4

> Functions

> ~12 minutes

---

# 43. Lesson Objective

Use outcome language:

> **By the end of this activity, you'll be able to create a function that accepts input and returns a result.**

---

# 44. Lesson Content Blocks

Supported blocks:

```text
Text
Image
Video
Audio
Example
Code
Interactive
Question
Simulation
Reflection
```

---

# 45. APP-05 — PRACTICE

Practice should focus on doing.

Example:

```text
Write a function that accepts
two numbers and returns their sum.

[Code editor]

[Run]

[Submit]
```

---

# 46. Practice Feedback

After submission:

```text
What worked
What needs attention
Hint
Retry
Continue
```

---

# 47. APP-06 — ASSESSMENT

Used after sufficient evidence has accumulated.

Structure:

```text
Assessment title
Purpose
Estimated time
Questions
Progress
Submit
```

---

# 48. Assessment Rules

Lumi should avoid testing something before there is enough learning evidence unless the assessment is explicitly diagnostic.

---

# 49. APP-07 — ASSESSMENT RESULT

Don't just display:

> 72%

Instead:

```text
What you demonstrated
What is strong
What needs more practice
What Lumi recommends next
```

---

# 50. Example

> **You're making good progress.**

> You can confidently create and call functions.

> Let's spend a little more time on parameters before moving to data structures.

---

# 51. APP-08 — GOALS

Sections:

```text
Active
Completed
Paused
Archived
```

---

# 52. APP-09 — GOAL DETAIL

Show:

```text
Goal
Why
Timeline
Progress
Current milestone
Learning journey
Evidence
Next step
```

---

# 53. APP-10 — PROGRESS

This is the learner's growth center.

Sections:

```text
Overview
Skills
Concepts
Evidence
History
Milestones
```

---

# 54. Progress Overview

Example:

```text
Your progress

Python Foundations
████████░░

Strong areas
Functions
Variables

Developing
Parameters
Data Structures
```

---

# 55. APP-11 — SKILLS

Show skills by:

```text
Emerging
Developing
Strong
Mastered
```

---

# 56. Skill Detail

When opened:

```text
Skill
Current state
Evidence
Related concepts
Recent activity
What would strengthen it
```

---

# 57. APP-12 — EVIDENCE

Show actual learning outputs.

Example:

```text
Calculator Project
Completed Aug 25

Skills demonstrated:
Functions
Conditions
Input handling

[View]
```

---

# 58. APP-13 — PORTFOLIO

The portfolio is the learner's collection of demonstrated capability.

Sections:

```text
Projects
Evidence
Skills
Achievements
Credentials
```

---

# 59. APP-14 — PROJECTS

Projects should represent real application.

Example:

> **Build a CLI Calculator**

Requirements:

```text
Use functions
Accept input
Handle invalid input
Explain implementation
```

---

# 60. APP-15 — AI TUTOR

The AI tutor is contextual.

Do not make it simply:

> ChatGPT inside Lumi.

It should understand:

```text
Current goal
Current concept
Current activity
Mastery
Previous attempts
```

---

# 61. Tutor Screen

```text
Context header

Conversation

Suggested prompts

[Ask Lumi...]
```

Suggested prompts:

```text
Explain this differently
Give me a hint
Show me an example
Test my understanding
Why did I get this wrong?
```

---

# 62. APP-16 — PROFILE

```text
Profile
Learning preferences
Goals
Evidence
Portfolio
Accessibility
```

---

# 63. APP-17 — SETTINGS

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

# 64. SYSTEM STATES

Every screen needs consistent system handling.

---

## SYS-01 — Loading

Use skeletons matching the eventual layout.

---

## SYS-02 — Error

Example:

> **Something went wrong.**

> We couldn't load your learning journey.

**Try again**

---

## SYS-03 — Offline

Example:

> **You're offline.**

> Some learning content may still be available.

---

## SYS-04 — Not Found

> We couldn't find that learning experience.

---

## SYS-05 — Permission Denied

> You don't have access to this area.

---

## SYS-06 — Maintenance

> Lumi is temporarily unavailable while we make improvements.

---

# 65. AGE ADAPTATION

The screen structure remains conceptually consistent, but presentation changes.

---

# 66. Child Home

```text
Greeting
Today's activity
Visual journey
Things I made
Help
```

Less text.

More visual communication.

---

# 67. Teen Home

```text
Goal
Next activity
Progress
Skills
Projects
Challenges
```

---

# 68. Adult Home

```text
Goal
Next step
Time estimate
Progress
Projects
Evidence
```

---

# 69. Professional Home

```text
Career goal
Competencies
Recommended development
Projects
Credentials
```

---

# 70. Accessibility Adaptation

The learner can modify:

```text
Density
Text size
Motion
Contrast
Audio
Captions
Task segmentation
Focus mode
```

These settings affect the entire application.

---

# 71. Child Safety

Child accounts require additional protections around:

* communication
* AI interaction
* sharing
* personal information
* guardian visibility
* external links
* content access

---

# 72. Guardian Boundary

Guardians should see meaningful progress without turning Lumi into a surveillance dashboard.

---

# 73. Data Required by Home

The home API eventually needs something like:

```text
learner
active_goal
current_journey
next_activity
recommendation_reason
mastery_summary
recent_evidence
upcoming_items
```

---

# 74. API Boundary

Frontend should never calculate core adaptive decisions.

Bad:

```text
frontend decides next lesson
```

Good:

```text
frontend requests next recommendation
backend adaptive engine decides
frontend renders result
```

---

# 75. API Example

```text
GET /api/v1/learning/next
```

Response conceptually:

```json
{
  "activity": {},
  "reason": {},
  "estimated_minutes": 12,
  "concept": {},
  "goal": {}
}
```

---

# 76. Evidence API

```text
POST /api/v1/evidence
GET /api/v1/evidence
GET /api/v1/evidence/:id
```

---

# 77. Mastery API

The frontend should primarily consume:

```text
GET /api/v1/mastery
```

rather than modifying mastery directly.

---

# 78. Recommendation API

```text
GET /api/v1/recommendations
POST /api/v1/recommendations/:id/feedback
```

---

# 79. Learning API

```text
GET /api/v1/journeys/:id
GET /api/v1/lessons/:id
POST /api/v1/activities/:id/start
POST /api/v1/activities/:id/complete
```

---

# 80. Assessment API

```text
GET /api/v1/assessments/:id
POST /api/v1/assessments/:id/attempts
POST /api/v1/attempts/:id/responses
POST /api/v1/attempts/:id/submit
```

---

# 81. Frontend State

Separate:

```text
Server State
UI State
Learner State
Session State
```

Do not mix them together.

---

# 82. Important Architecture Rule

Lumi's UI should be a **representation of learner state**, not the owner of learner state.

---

# 83. First Screen to Actually Design

After the design system is implemented:

# **AUTH-01 — Welcome**

Then:

```text
AUTH-02
AUTH-03
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
APP-01
```

---

# 84. First Prototype Goal

Do not connect APIs initially.

Build the clickable experience:

```text
Welcome
 ↓
Sign Up
 ↓
Onboarding
 ↓
Goal
 ↓
Assessment
 ↓
Starting Point
 ↓
Home
 ↓
Journey
 ↓
Lesson
 ↓
Practice
 ↓
Progress
```

Use realistic mock data.

---

# 85. Then Connect Backend

Once the visual flow feels right:

```text
Mock Data
   ↓
API Contracts
   ↓
Real API
   ↓
Database
   ↓
Adaptive Engine
```

---

# 86. Design QA Checklist

Before calling a screen complete:

```text
□ Correct hierarchy
□ Mobile layout
□ Tablet layout
□ Desktop layout
□ Keyboard navigation
□ Focus states
□ Screen-reader labels
□ Reduced motion
□ Dark mode
□ Loading state
□ Empty state
□ Error state
□ Long content
□ Short content
□ Large text
□ Slow connection
```

---

# 87. Product QA Checklist

Also verify:

```text
□ User knows what to do
□ Goal is visible
□ Primary action is obvious
□ No unnecessary information
□ Recommendation is explainable
□ Feedback is constructive
□ User can recover from errors
□ User can navigate backward
□ User never loses learning progress
```

---

# 88. The First End-to-End Lumi Prototype

The prototype should feel like this:

```text
                    Lumi
                     │
                     ▼
              "What do you
               want to do?"
                     │
                     ▼
                   GOAL
                     │
                     ▼
              "Where are you
               starting from?"
                     │
                     ▼
                DIAGNOSTIC
                     │
                     ▼
               STARTING POINT
                     │
                     ▼
               "Here's your
                 next step."
                     │
                     ▼
                  LEARN
                     │
                     ▼
                 PRACTICE
                     │
                     ▼
                 EVIDENCE
                     │
                     ▼
                 MASTERY
                     │
                     ▼
              "Here's what's
                next and why."
                     │
                     └──────────► repeat
```

---

# 89. The Most Important Screen

If you only perfect one screen initially, perfect:

# **APP-01 — Home**

Because it represents the core Lumi promise.

The learner opens Lumi and immediately understands:

> **Where I am → where I'm going → what I should do → why → how I'm progressing.**

---

# 90. What Happens After This Document

We now have enough specification to stop producing broad planning documents.

The next step is **actual visual design**.

The correct sequence is:

```text
27 Design System
        ↓
28 Screen Map
        ↓
29 BUILD THE ACTUAL UI
        ↓
30 Connect Backend
        ↓
31 Adaptive Engine
        ↓
32 AI
        ↓
33 Testing
```

So the next document should **not** be another architecture document.

The next artifact should be:

# `29-Lumi-UI-BUILD-ORDER.md`

It will contain the **exact screen-by-screen coding order**, beginning with the design system and **AUTH-01**, including what component to create first, what to mock, what to connect later, and when to move to the next screen.

After that, we should actually start building **Lumi**, not keep documenting it.
