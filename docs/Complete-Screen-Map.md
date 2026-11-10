# Lumi — Complete Screen Map & UX Flow Specification

**Document:** `06-Lumi-Complete-Screen-Map.md`
**Version:** 1.0
**Status:** Foundational / Pre-UI
**Purpose:** Define every major screen and state Lumi needs before visual design and implementation begin.

> **Important:** This is the master screen inventory. We should not start designing individual screens until this map is accepted, because every later UI screen should trace back to one of these IDs.

---

# 1. Screen Architecture

Lumi has seven major experiences:

```text
PUBLIC
│
├── Marketing
├── Discovery
└── Authentication

LEARNER
│
├── Onboarding
├── Home
├── Learn
├── Goals
├── Build
├── Explore
├── Progress
└── Me

LEARNING EXPERIENCE
│
├── Lessons
├── Activities
├── Practice
├── Assessments
├── Review
└── AI Mentor

SUPPORTING USERS
│
├── Parent
├── Teacher
├── Mentor
└── Institution

CONTENT
│
└── Creator

PLATFORM
│
└── Administration

SYSTEM
│
├── Errors
├── Empty States
├── Loading
├── Offline
├── Permissions
└── SecLumity
```

---

# 2. Screen ID Convention

Use this convention:

```text
PUB-xxx     Public
AUTH-xxx    Authentication
ONB-xxx     Onboarding
HOME-xxx    Home
LRN-xxx     Learning
GOAL-xxx    Goals
BLD-xxx     Build
EXP-xxx     Explore
PRG-xxx     Progress
ME-xxx      Learner profile
DNA-xxx     Learning DNA
AI-xxx      AI Mentor
ASM-xxx     Assessment
REV-xxx     Review
SET-xxx     Settings
PAR-xxx     Parent
TCH-xxx     Teacher
MNT-xxx     Mentor
INS-xxx     Institution
CRT-xxx     Creator
ADM-xxx     Admin
SYS-xxx     System states
```

This gives us a permanent reference system.

---

# 3. PUBLIC EXPERIENCE

## PUB-001 — Landing Page

Purpose:

Introduce Lumi.

Sections:

* hero
* what Lumi is
* adaptive learning explanation
* lifelong learning
* neuroinclusive philosophy
* how it works
* examples
* learner stories
* CTA
* footer

Primary CTA:

**Start Learning**

Secondary CTA:

**Explore Lumi**

---

## PUB-002 — How Lumi Works

Explains:

```text
Goal
 ↓
Understand
 ↓
Practice
 ↓
Adapt
 ↓
Apply
 ↓
Grow
```

---

## PUB-003 — Adaptive Learning Explanation

Explains how Lumi adapts.

---

## PUB-004 — For Learners

Explains the individual learner experience.

---

## PUB-005 — For Educators

Teacher/mentor value proposition.

---

## PUB-006 — For Institutions

Institution offering.

---

## PUB-007 — Accessibility & Inclusion

Explains Lumi's inclusive philosophy.

---

## PUB-008 — Explore Learning

Public discovery experience.

---

## PUB-009 — Pricing

If Lumi uses paid plans.

---

## PUB-010 — About Lumi

Mission, philosophy and story.

---

## PUB-011 — Contact

Contact information/form.

---

## PUB-012 — Help Center

Public help center.

---

## PUB-013 — Privacy

Privacy policy.

---

## PUB-014 — Terms

Terms of service.

---

## PUB-015 — Accessibility Statement

Accessibility commitments.

---

# 4. AUTHENTICATION

## AUTH-001 — Sign Up

Fields:

* name
* email
* password

Optional:

* date of birth/age flow where necessary
* role

---

## AUTH-002 — Login

Email/password or supported authentication methods.

---

## AUTH-003 — Forgot Password

---

## AUTH-004 — Reset Password

---

## AUTH-005 — Email Verification

---

## AUTH-006 — Account Recovery

---

## AUTH-007 — Passkey Setup

Future-ready authentication.

---

## AUTH-008 — Authentication Error

---

## AUTH-009 — Session Expired

---

# 5. AGE / SAFETY ENTRY

Because Lumi is for all ages:

## AUTH-010 — Age Experience Selection

Lumi determines the appropriate experience and applicable controls.

This should be designed carefully rather than simply asking children for unnecessary personal information.

---

# 6. ONBOARDING

## ONB-001 — Welcome

The first Lumi experience.

---

## ONB-002 — What Brings You Here?

Options:

* school
* career
* personal growth
* cLumiosity
* practical skill
* hobby
* project
* other

Multiple selections allowed.

---

## ONB-003 — What Do You Want to Learn?

Search/input + suggestions.

---

## ONB-004 — Choose Interests

---

## ONB-005 — Current Experience

Learner can describe:

* new
* some experience
* comfortable
* advanced

This is only an initial estimate.

---

## ONB-006 — Your Goal

Define what success looks like.

---

## ONB-007 — Time Available

Examples:

* 5 minutes
* 15 minutes
* 30 minutes
* 1 hour
* flexible

---

## ONB-008 — Learning Preferences

Possible preferences:

* explanations
* examples
* visuals
* audio
* interaction
* practice

---

## ONB-009 — Accessibility Preferences

Controls for:

* text
* motion
* contrast
* focus
* audio
* captions
* interface density

---

## ONB-010 — Diagnostic Introduction

Explain:

> Lumi can optionally check what you already know.

---

## ONB-011 — Diagnostic Assessment

Adaptive questions.

---

## ONB-012 — Diagnostic Processing

Lumi analyzes results.

---

## ONB-013 — Your Starting Point

Show:

* what Lumi already understands
* suggested starting point
* areas to strengthen

---

## ONB-014 — Personalized Learning Plan

Generated initial plan.

---

## ONB-015 — Enter Lumi

Transitions to Home.

---

# 7. HOME

## HOME-001 — Main Home

Primary learner dashboard.

---

## HOME-002 — Current Focus

Expanded focus view.

---

## HOME-003 — Today's Plan

Daily adaptive plan.

---

## HOME-004 — Continue Learning

---

## HOME-005 — Recommended Next Steps

---

## HOME-006 — Active Goals

---

## HOME-007 — Review Ready

---

## HOME-008 — Recent Progress

---

## HOME-009 — Home Customization

Allow users to configure selected dashboard preferences.

---

# 8. LEARN

## LRN-001 — Learn Overview

---

## LRN-002 — Continue Learning

---

## LRN-003 — My Learning

---

## LRN-004 — Active Learning Paths

---

## LRN-005 — Paused Learning

---

## LRN-006 — Completed Learning

---

## LRN-007 — Saved Learning

---

# 9. LEARNING PATHS

## LRN-010 — Learning Path Overview

Shows:

* goal
* current position
* progress
* milestones
* estimated effort

---

## LRN-011 — Learning Path Map

Visual representation of the adaptive journey.

---

## LRN-012 — Milestone Detail

---

## LRN-013 — Skills in Path

---

## LRN-014 — Concepts in Path

---

## LRN-015 — Path Activity History

---

## LRN-016 — Path Adaptation History

Shows when Lumi changed the learner's route.

---

# 10. LESSON EXPERIENCE

## LRN-020 — Lesson Introduction

---

## LRN-021 — Lesson Content

---

## LRN-022 — Interactive Explanation

---

## LRN-023 — Example

---

## LRN-024 — Visual Explanation

---

## LRN-025 — Audio Explanation

---

## LRN-026 — Quick Check

---

## LRN-027 — Lesson Reflection

---

## LRN-028 — Lesson Completion

---

# 11. ADAPTIVE LEARNING ACTIVITY

## LRN-030 — Activity Introduction

---

## LRN-031 — Question

---

## LRN-032 — Short Answer

---

## LRN-033 — Free Response

---

## LRN-034 — Matching

---

## LRN-035 — Ordering

---

## LRN-036 — Interactive Activity

---

## LRN-037 — Simulation

---

## LRN-038 — Practical Activity

---

## LRN-039 — Confidence Check

Optional.

---

## LRN-040 — Hint

Contextual assistance.

---

## LRN-041 — Feedback

Explain:

* what happened
* why
* what to do next

---

## LRN-042 — Adaptive Intervention

Lumi changes the learning experience based on evidence.

---

## LRN-043 — Concept Mastery Check

---

## LRN-044 — Next Best Action

Lumi explicitly explains the next recommended action.

---

# 12. PRACTICE

## LRN-050 — Practice Hub

---

## LRN-051 — Targeted Practice

---

## LRN-052 — Weak Area Practice

---

## LRN-053 — Mixed Practice

---

## LRN-054 — Retrieval Practice

---

## LRN-055 — Practice Session

---

## LRN-056 — Practice Results

---

# 13. ASSESSMENTS

## ASM-001 — Assessment Hub

---

## ASM-002 — Diagnostic Assessment

---

## ASM-003 — Formative Assessment

---

## ASM-004 — Mastery Assessment

---

## ASM-005 — Retention Assessment

---

## ASM-006 — Practical Assessment

---

## ASM-007 — Assessment Instructions

---

## ASM-008 — Assessment Experience

---

## ASM-009 — Assessment Pause

---

## ASM-010 — Assessment Results

---

## ASM-011 — Assessment Breakdown

---

## ASM-012 — Recommended Next Step

---

# 14. REVIEW

## REV-001 — Review Hub

---

## REV-002 — Review Due Now

---

## REV-003 — Weak Concepts

---

## REV-004 — Recent Mistakes

---

## REV-005 — Previously Learned

---

## REV-006 — Review Session

---

## REV-007 — Review Results

---

# 15. AI MENTOR

## AI-001 — AI Mentor Home

---

## AI-002 — New Conversation

---

## AI-003 — Conversation

---

## AI-004 — Explain Mode

---

## AI-005 — Simplify Mode

---

## AI-006 — Deep Dive Mode

---

## AI-007 — Practice Mode

---

## AI-008 — Socratic Mode

---

## AI-009 — Example Mode

---

## AI-010 — Review Mode

---

## AI-011 — Contextual Mentor

Opened from learning content.

---

## AI-012 — Project Mentor

Opened from Build.

---

## AI-013 — Goal Mentor

Opened from a Goal.

---

## AI-014 — Conversation History

---

## AI-015 — AI Response Feedback

Allow:

* helpful
* not helpful
* incorrect
* report

---

# 16. GOALS

## GOAL-001 — Goals Overview

---

## GOAL-002 — Active Goals

---

## GOAL-003 — Completed Goals

---

## GOAL-004 — Paused Goals

---

## GOAL-005 — Create Goal

---

## GOAL-006 — Goal Conversation

Conversational goal creation.

---

## GOAL-007 — Goal Details

---

## GOAL-008 — Goal Progress

---

## GOAL-009 — Goal Milestones

---

## GOAL-010 — Goal Skills

---

## GOAL-011 — Goal Learning Path

---

## GOAL-012 — Goal Projects

---

## GOAL-013 — Goal Settings

---

# 17. BUILD

## BLD-001 — Build Overview

---

## BLD-002 — Projects

---

## BLD-003 — Create Project

---

## BLD-004 — Project Details

---

## BLD-005 — Project Brief

---

## BLD-006 — Project Workspace

---

## BLD-007 — Project Tasks

---

## BLD-008 — Project Resources

---

## BLD-009 — Project Feedback

---

## BLD-010 — Project Assessment

---

## BLD-011 — Project Submission

---

## BLD-012 — Project Results

---

## BLD-013 — My Work

---

## BLD-014 — Portfolio

---

## BLD-015 — Portfolio Project Detail

---

# 18. EXPLORE

## EXP-001 — Explore Home

---

## EXP-002 — Discover

---

## EXP-003 — Subjects

---

## EXP-004 — Subject Detail

---

## EXP-005 — Topics

---

## EXP-006 — Concept Detail

---

## EXP-007 — Skills

---

## EXP-008 — Skill Detail

---

## EXP-009 — Competency Detail

---

## EXP-010 — Learning Paths

---

## EXP-011 — Projects

---

## EXP-012 — CLumiosity Explorer

Natural-language exploration.

---

## EXP-013 — Search Results

---

# 19. PROGRESS

## PRG-001 — Progress Overview

---

## PRG-002 — Knowledge

---

## PRG-003 — Skills

---

## PRG-004 — Competencies

---

## PRG-005 — Goals

---

## PRG-006 — Projects

---

## PRG-007 — Assessments

---

## PRG-008 — Retention

---

## PRG-009 — Learning Timeline

---

## PRG-010 — Growth Insights

---

## PRG-011 — Evidence

Shows evidence supporting demonstrated capabilities.

---

# 20. LEARNING DNA

## DNA-001 — Learning DNA Overview

---

## DNA-002 — Learning Patterns

---

## DNA-003 — Effective Formats

---

## DNA-004 — Learning Pace

---

## DNA-005 — Confidence Patterns

---

## DNA-006 — Strengths

---

## DNA-007 — Developing Areas

---

## DNA-008 — Adaptive History

---

## DNA-009 — DNA Preferences

---

# 21. SKILL PASSPORT

## ME-010 — Skill Passport Overview

---

## ME-011 — Skills

---

## ME-012 — Competencies

---

## ME-013 — Evidence

---

## ME-014 — Projects

---

## ME-015 — Credentials

---

## ME-016 — Share Passport

---

# 22. PROFILE

## ME-001 — Profile

---

## ME-002 — Edit Profile

---

## ME-003 — Interests

---

## ME-004 — Public Profile

Optional.

---

# 23. SETTINGS

## SET-001 — Settings Overview

---

## SET-002 — Account

---

## SET-003 — SecLumity

---

## SET-004 — Privacy

---

## SET-005 — Notifications

---

## SET-006 — Learning Preferences

---

## SET-007 — Accessibility

---

## SET-008 — AI Preferences

---

## SET-009 — Language

---

## SET-010 — Data

---

## SET-011 — Export Data

---

## SET-012 — Delete Account

---

## SET-013 — Billing

---

# 24. NOTIFICATIONS

## SYS-001 — Notifications Center

---

## SYS-002 — Notification Detail

---

## SYS-003 — Notification Preferences

---

# 25. SEARCH

## SYS-010 — Global Search

---

## SYS-011 — Search Results

---

## SYS-012 — Search Filters

---

## SYS-013 — AI Search Answer

---

# 26. PARENT EXPERIENCE

Only for applicable accounts.

## PAR-001 — Parent Overview

---

## PAR-002 — Children

---

## PAR-003 — Child Profile

---

## PAR-004 — Child Progress

---

## PAR-005 — Child Goals

---

## PAR-006 — Child Learning Activity

---

## PAR-007 — Parent Reports

---

## PAR-008 — Parent Controls

---

# 27. TEACHER EXPERIENCE

## TCH-001 — Teacher Dashboard

---

## TCH-002 — Learners

---

## TCH-003 — Learner Detail

---

## TCH-004 — Class List

---

## TCH-005 — Class Detail

---

## TCH-006 — Create Class

---

## TCH-007 — Assignments

---

## TCH-008 — Create Assignment

---

## TCH-009 — Assignment Detail

---

## TCH-010 — Assessment Management

---

## TCH-011 — Create Assessment

---

## TCH-012 — Learning Insights

---

## TCH-013 — Learning Gaps

---

## TCH-014 — Recommended Interventions

---

## TCH-015 — Teacher Content

---

## TCH-016 — Teacher Settings

---

# 28. MENTOR EXPERIENCE

## MNT-001 — Mentor Dashboard

---

## MNT-002 — Assigned Learners

---

## MNT-003 — Learner Detail

---

## MNT-004 — Sessions

---

## MNT-005 — Session Detail

---

## MNT-006 — Notes

---

## MNT-007 — Mentor Insights

---

# 29. INSTITUTION EXPERIENCE

## INS-001 — Institution Dashboard

---

## INS-002 — Learners

---

## INS-003 — Teachers

---

## INS-004 — Classes

---

## INS-005 — Programs

---

## INS-006 — Curriculum

---

## INS-007 — Content

---

## INS-008 — Assessments

---

## INS-009 — Analytics

---

## INS-010 — Reports

---

## INS-011 — Institution Settings

---

# 30. CREATOR EXPERIENCE

## CRT-001 — Creator Dashboard

---

## CRT-002 — Content Library

---

## CRT-003 — Create Content

---

## CRT-004 — Content Editor

---

## CRT-005 — Activity Builder

---

## CRT-006 — Question Builder

---

## CRT-007 — Assessment Builder

---

## CRT-008 — Project Builder

---

## CRT-009 — Drafts

---

## CRT-010 — Review

---

## CRT-011 — Published Content

---

## CRT-012 — Content Analytics

---

# 31. ADMIN EXPERIENCE

## ADM-001 — Admin Dashboard

---

## ADM-002 — User Management

---

## ADM-003 — User Detail

---

## ADM-004 — Role Management

---

## ADM-005 — Organizations

---

## ADM-006 — Organization Detail

---

## ADM-007 — Content Management

---

## ADM-008 — Knowledge Graph

---

## ADM-009 — Concept Management

---

## ADM-010 — Skill Management

---

## ADM-011 — Adaptive Engine

---

## ADM-012 — Adaptive Signals

---

## ADM-013 — AI Configuration

---

## ADM-014 — AI Usage

---

## ADM-015 — Moderation

---

## ADM-016 — Reports

---

## ADM-017 — Platform Analytics

---

## ADM-018 — System Health

---

## ADM-019 — SecLumity

---

## ADM-020 — Audit Logs

---

## ADM-021 — Billing

---

## ADM-022 — Feature Flags

---

## ADM-023 — System Settings

---

# 32. SYSTEM STATES

This category is extremely important.

Every major feature must have states for:

### SYS-100 — Loading

---

### SYS-101 — Skeleton Loading

---

### SYS-102 — Empty

Example:

> You haven't created a goal yet.

---

### SYS-103 — Error

---

### SYS-104 — Offline

---

### SYS-105 — Network Reconnecting

---

### SYS-106 — Permission Denied

---

### SYS-107 — Unauthorized

---

### SYS-108 — Not Found

---

### SYS-109 — Maintenance

---

### SYS-110 — Rate Limited

---

### SYS-111 — Session Expired

---

### SYS-112 — Unsaved Changes

---

### SYS-113 — Success

---

### SYS-114 — Confirmation

---

# 33. RESPONSIVE STATES

Every important screen needs three design considerations:

```text
Desktop
Tablet
Mobile
```

But the layouts should not necessarily be identical.

---

# 34. Mobile-Specific Patterns

Mobile may use:

* bottom navigation
* bottom sheets
* drawers
* full-screen activities
* sticky action buttons
* swipe gestures where appropriate

---

# 35. Desktop-Specific Patterns

Desktop may use:

* sidebar
* split view
* multi-column learning interface
* persistent AI Mentor panel
* larger knowledge graph views

---

# 36. Learning Screen Special Layout

The actual learning activity should prioritize concentration.

Potential structure:

```text
┌──────────────────────────────────┐
│ Lumi             Progress   Exit  │
├──────────────────────────────────┤
│                                  │
│           CONTENT                │
│                                  │
│                                  │
├──────────────────────────────────┤
│ Hint    Ask Lumi    Continue      │
└──────────────────────────────────┘
```

Avoid dashboard clutter while learning.

---

# 37. Focus Mode

Lumi should support a dedicated learning focus mode.

It should reduce:

* navigation
* notifications
* visual clutter
* unnecessary information

The learner should be able to exit easily.

---

# 38. AI Mentor Overlay

The mentor can appear as:

### Desktop

Side panel.

### Tablet

Drawer.

### Mobile

Full-screen or bottom sheet.

The learner should never lose their learning context.

---

# 39. Screen Relationships

The most important user journey:

```text id="4oj4yr"
ONB-001
 ↓
ONB-002
 ↓
ONB-003
 ↓
ONB-004
 ↓
ONB-005
 ↓
ONB-006
 ↓
ONB-007
 ↓
ONB-008
 ↓
ONB-009
 ↓
ONB-010
 ↓
ONB-011
 ↓
ONB-012
 ↓
ONB-013
 ↓
ONB-014
 ↓
HOME-001
```

---

# 40. First Learning Journey

```text id="9h9q0g"
HOME-001
 ↓
HOME-002
 ↓
LRN-020
 ↓
LRN-021
 ↓
LRN-026
 ↓
LRN-031
 ↓
LRN-041
 ↓
LRN-043
 ↓
LRN-044
 ↓
PRG-001
```

But Lumi can branch dynamically at any point.

---

# 41. Adaptive Branching

Example:

```text id="s9ph51"
Activity
 ↓
Incorrect
 ↓
Error Analysis
 ↓
┌───────────────┬───────────────┐
↓               ↓               ↓
Hint         Prerequisite     Simpler
              Gap              Example
↓               ↓               ↓
Retry        Review           Retry
```

---

# 42. Goal Journey

```text id="0o4t0w"
GOAL-005
 ↓
GOAL-006
 ↓
GOAL-007
 ↓
GOAL-011
 ↓
LRN-010
 ↓
LRN-011
 ↓
Learning
 ↓
Progress
```

---

# 43. Project Journey

```text id="y0q3p5"
GOAL
 ↓
BLD-003
 ↓
BLD-004
 ↓
BLD-006
 ↓
BLD-007
 ↓
BLD-009
 ↓
BLD-010
 ↓
BLD-011
 ↓
BLD-012
 ↓
ME-014
```

---

# 44. Discovery Journey

```text id="z3bqwj"
EXP-001
 ↓
EXP-003
 ↓
EXP-004
 ↓
EXP-005
 ↓
EXP-006
 ↓
Start Learning
 ↓
GOAL-005
```

This means exploration can naturally become structured learning.

---

# 45. AI Journey

```text id="a2r8xm"
Any Screen
 ↓
AI Mentor
 ↓
Context Detection
 ↓
Conversation
 ↓
Action
 ↓
Return to Original Context
```

---

# 46. Important Design Rule

The AI should never trap the learner in a separate world.

If they ask Lumi a question while learning:

```text
Lesson
 ↓
Ask Lumi
 ↓
AI Mentor
 ↓
Answer
 ↓
Return to Lesson
```

The learner should not lose their place.

---

# 47. Screen Inventory Summary

Lumi's complete system now includes approximately:

```text
Public                15+
Authentication         10+
Onboarding             15+
Home                   9+
Learning               40+
Assessment             12+
Review                  7+
AI Mentor              15+
Goals                  13+
Build                  15+
Explore                13+
Progress               11+
Learning DNA            9+
Profile/Passport       12+
Settings               13+
Parent                  8+
Teacher                16+
Mentor                  7+
Institution            11+
Creator                12+
Admin                  23+
System                 15+
```

This is a **platform-level screen inventory**, not an MVP commitment.

---

# 48. MVP Screen Set

The first build should be much smaller.

The initial Lumi learner MVP should primarily include:

```text
AUTH
├── Sign Up
├── Login
└── Verification

ONBOARDING
├── Welcome
├── Goal
├── Interests
├── Preferences
├── Accessibility
├── Diagnostic
├── Starting Point
└── Personalized Plan

CORE
├── Home
├── Learn
├── Learning Path
├── Lesson
├── Adaptive Activity
├── Practice
├── Assessment
├── Review
└── Progress

AI
├── Mentor
├── Conversation
└── Contextual Mentor

GOALS
├── Goals
├── Create Goal
└── Goal Detail

ME
├── Profile
├── Learning DNA
├── Preferences
├── Accessibility
└── Settings
```

---

# 49. What We Do NOT Design Yet

Do not start designing:

* 300+ screens individually
* admin screens
* institution screens
* creator screens
* complex social features

yet.

The screen map gives us the **future architecture**.

We should now design the **MVP experience** deeply and correctly.

---

# 50. The MVP Core Loop

The first Lumi version revolves around:

```text
             ┌───────────────┐
             │     GOAL      │
             └───────┬───────┘
                     ↓
             ┌───────────────┐
             │  DIAGNOSTIC  │
             └───────┬───────┘
                     ↓
             ┌───────────────┐
             │ LEARNER MODEL│
             └───────┬───────┘
                     ↓
             ┌───────────────┐
             │    LEARN     │
             └───────┬───────┘
                     ↓
             ┌───────────────┐
             │    PRACTICE  │
             └───────┬───────┘
                     ↓
             ┌───────────────┐
             │    EVIDENCE  │
             └───────┬───────┘
                     ↓
             ┌───────────────┐
             │    ADAPT     │
             └───────┬───────┘
                     │
                     └──────────────→ NEXT
```

**This loop is Lumi.**

Everything else is built around it.

---

# 51. Master Screen Principle

Every screen we eventually create should answer:

> **What does the learner need to accomplish here?**

And every action should answer:

> **What will Lumi learn from this?**

That second question is particularly important.

A beautiful interface that produces no useful learning evidence is not necessarily a good Lumi interface.

---

# 52. Next Document

The next document should be:

# `07-Lumi-Design-System.md`

This is where we finally start defining **how Lumi should look and feel**.

And because you specifically wanted Lumi to avoid the generic **AI-slop / purple-gradient / SaaS-template aesthetic**, this document should be extremely deliberate.

It will define:

* Lumi's visual identity
* color philosophy
* typography
* spacing
* grid
* shapes
* borders
* surfaces
* shadows
* iconography
* illustrations
* motion
* data visualization
* accessibility
* dark/light themes
* responsive design
* component philosophy
* interaction language
* emotional tone
* what Lumi must **never** look like
* visual rules for children vs adults
* how to remain one product across different ages
* neuroinclusive visual principles
* Stitch/Figma implementation rules

**That document is the bridge between the architecture we've created and the actual UI design.**
