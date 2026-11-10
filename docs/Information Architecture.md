# Lumi — Information Architecture & Product Structure

**Document:** 05-Lumi-Information-Architecture.md
**Version:** 1.0
**Status:** Foundational
**Purpose:** Define the complete structural organization of Lumi before UI design begins.

---

# 1. Why This Document Exists

Lumi is going to become a very large platform.

If we start designing screens without first defining the information architecture, we risk creating:

* duplicated features
* confusing navigation
* dead-end screens
* inconsistent terminology
* unnecessary dashboards
* poor mobile navigation
* features that don't connect to the adaptive engine

This document defines **where everything belongs and how everything connects.**

---

# 2. Lumi's Core Mental Model

Lumi should be understood through six layers:

```text
ME
│
├── Who am I?
├── How do I learn?
└── What have I achieved?

GOALS
│
├── What am I trying to accomplish?
└── Why am I learning?

LEARN
│
├── What should I learn?
├── What should I do next?
└── How should I learn it?

BUILD
│
├── What can I create?
├── What can I apply?
└── What can I demonstrate?

EXPLORE
│
├── What am I cLumious about?
└── What else could I discover?

PROGRESS
│
├── How am I developing?
├── What do I know?
└── Where am I going?
```

These concepts form the foundation of Lumi's information architecture.

---

# 3. Primary Application Areas

The learner-facing Lumi application should have six primary areas:

```text
Home
Learn
Goals
Build
Explore
Me
```

However, **Progress should remain highly visible** even if it is not a primary bottom-navigation item on smaller screens.

---

# 4. Primary Navigation

## Desktop

Recommended structure:

```text
Lumi
────────────────────

Home

Learn
  ├── Continue
  ├── My Learning
  ├── Reviews
  └── Assessments

Goals
  ├── Active Goals
  ├── Completed
  └── Explore Goals

Build
  ├── Projects
  ├── My Work
  └── Portfolio

Explore
  ├── Discover
  ├── Subjects
  ├── Skills
  └── CLumiosities

────────────────────

Progress

────────────────────

Me
```

---

# 5. Mobile Navigation

Mobile should not simply shrink the desktop sidebar.

Recommended bottom navigation:

```text
Home
Learn
Goals
Explore
Me
```

The system can expose:

* Build
* Progress
* Search
* AI Mentor

contextually or through secondary navigation.

---

# 6. Universal AI Mentor

The AI Mentor should be accessible from almost anywhere.

It should **not** necessarily be a primary navigation tab.

Instead, it can appear as a persistent Lumi interaction layer.

Example:

```text
          Lumi Mentor
              ↓
Home ───── Learn ───── Project
  │          │            │
  └──────────┼────────────┘
             ↓
        Context-aware AI
```

The mentor should know the context from which it was opened.

---

# 7. Universal Search

Search should be accessible globally.

Search should understand:

* questions
* concepts
* subjects
* skills
* courses
* projects
* people where applicable
* resources

Example:

> "How do APIs work?"

Lumi should interpret this semantically rather than merely matching keywords.

---

# 8. Home

Home is the learner's **current-state dashboard**.

It answers:

> **"What should I do now?"**

---

# 9. Home Structure

```text
Home
│
├── Greeting
├── Current Focus
├── Continue Learning
├── Today's Plan
├── Active Goals
├── Recommended Next Steps
├── Review Due
├── Recent Progress
├── Projects
└── Explore
```

Home should be dynamic.

Different learners should see different content.

---

# 10. Home Is Not a Static Dashboard

Lumi should not show every feature at once.

The home page should prioritize what matters **right now**.

For example:

```text
Learner A

Continue Python
Review Functions
Project Deadline
```

while:

```text
Learner B

Review Fractions
Practice Algebra
Explore Biology
```

---

# 11. Learn

Learn is the primary learning environment.

```text
Learn
│
├── Continue
├── My Learning
├── Learning Paths
├── Reviews
├── Assessments
└── Learning History
```

---

# 12. Continue

Shows the most relevant current learning activity.

Potential structure:

```text
Continue
│
├── Current Goal
├── Current Lesson
├── Current Project
└── Recommended Next Action
```

There should normally be one obvious next action.

---

# 13. My Learning

Contains active learning journeys.

```text
My Learning
│
├── Active
├── Paused
├── Completed
└── Saved
```

---

# 14. Learning Path

A Learning Path represents a journey toward a goal.

Structure:

```text
Learning Path
│
├── Overview
├── Why This Matters
├── Current Position
├── Milestones
├── Skills
├── Concepts
├── Assessments
├── Projects
└── Activity History
```

The path should visually communicate that Lumi can adapt it.

---

# 15. Adaptive Path

The learner should be able to see:

> "Lumi changed your path."

For example:

```text
Original Path
A → B → C → D

After assessment

A ✓
B ✓
C → prerequisite detected
C1 → C2
C → D
```

This makes adaptation visible and understandable.

---

# 16. Goals

Goals are one of Lumi's most important structural concepts.

```text
Goals
│
├── Active
├── Completed
├── Paused
├── Archived
└── Discover
```

---

# 17. Goal Detail

A Goal page should contain:

```text
Goal
│
├── Goal Overview
├── Why
├── Target
├── Timeline
├── Learning Path
├── Milestones
├── Skills
├── Projects
├── Progress
└── Settings
```

---

# 18. Goal Creation

Goal creation should be conversational where possible.

Instead of a long form:

> What do you want to accomplish?

Then Lumi can progressively clarify:

> Why?

> By when?

> What do you already know?

> How much time do you have?

---

# 19. Goal Discovery

Learners who don't know what they want can browse:

```text
Explore Goals
│
├── Career
├── Academic
├── Creative
├── Practical
├── Personal
└── CLumiosity
```

---

# 20. Build

Build represents **application and creation**.

This is intentionally separate from Learn.

```text
Build
│
├── Projects
├── My Work
├── Portfolio
├── Challenges
└── Collaborations
```

---

# 21. Why Build Exists

Learning shouldn't end at:

> "I answered the question correctly."

It should eventually reach:

> "I can use this."

Build is where Lumi verifies that capability.

---

# 22. Projects

Projects can be:

* guided
* partially guided
* independent
* goal-linked
* collaborative

---

# 23. Project Detail

```text
Project
│
├── Overview
├── Objective
├── Requirements
├── Skills
├── Concepts
├── Resources
├── Workspace
├── Progress
├── Feedback
└── Submission
```

---

# 24. Portfolio

The portfolio is the learner's evidence of capability.

```text
Portfolio
│
├── Projects
├── Skills
├── Competencies
├── Certifications
└── Achievements
```

---

# 25. Explore

Explore is for discovery.

```text
Explore
│
├── Discover
├── Subjects
├── Skills
├── Projects
├── Learning Paths
├── Popular
└── CLumiosity
```

The experience should not feel like an e-commerce catalog.

It should feel like:

> **"What would you like to discover?"**

---

# 26. Subject Architecture

Lumi should organize knowledge into a flexible hierarchy.

```text
Domain
 ↓
Field
 ↓
Subject
 ↓
Topic
 ↓
Concept
 ↓
Skill
 ↓
Capability
```

Example:

```text
Technology
 ↓
Computer Science
 ↓
Programming
 ↓
Web Development
 ↓
JavaScript
 ↓
Functions
 ↓
Building reusable program logic
```

---

# 27. Knowledge Graph

The Knowledge Graph sits beneath the user-facing product.

It should connect:

```text
Concept
 ↕
Prerequisite
 ↕
Concept
 ↕
Skill
 ↕
Competency
 ↕
Goal
 ↕
Project
```

This is one of Lumi's most important backend structures.

---

# 28. Concept Page

A concept page should eventually show:

```text
Concept
│
├── Explanation
├── Examples
├── Related Concepts
├── Prerequisites
├── Applications
├── Practice
└── Projects
```

---

# 29. Skills

Skills should be discoverable independently from courses.

```text
Skills
│
├── Technical
├── Creative
├── Academic
├── Professional
├── Practical
└── Interpersonal
```

---

# 30. Progress

Progress should answer:

> **"How am I changing?"**

Not:

> "How many lessons did I click?"

---

# 31. Progress Architecture

```text
Progress
│
├── Overview
├── Goals
├── Skills
├── Knowledge
├── Projects
├── Assessments
├── Retention
└── Timeline
```

---

# 32. Progress Overview

The learner should see:

* active goals
* recent growth
* mastered concepts
* developing skills
* completed projects
* areas requiring attention

---

# 33. Knowledge View

Shows conceptual understanding.

Example:

```text
Mathematics
│
├── Fractions       Strong
├── Algebra         Developing
├── Geometry        Strong
└── Statistics      Emerging
```

---

# 34. Skill View

Shows demonstrated capability.

This is different from knowledge.

```text
Knowledge:
"I understand JavaScript functions."

Skill:
"I can use JavaScript functions to build something."
```

---

# 35. Retention View

Shows concepts that may need review.

The interface should avoid alarming language.

Avoid:

> "You are forgetting!"

Prefer:

> **Ready for a quick refresh**

---

# 36. Learning Timeline

The learner should have a chronological learning history.

```text
Timeline
│
├── Today
├── Yesterday
├── This Week
├── This Month
└── Earlier
```

---

# 37. Me

"Me" is the learner's identity and personalization center.

```text
Me
│
├── Profile
├── Learning DNA
├── Preferences
├── Accessibility
├── Skill Passport
├── Achievements
├── Saved
├── Activity
└── Settings
```

---

# 38. Profile

Contains:

* name
* profile image
* bio
* interests
* public information if applicable

Not everything about a learner should be public.

---

# 39. Learning DNA

This is a signature Lumi feature.

It should show the learner:

* learning patterns
* strengths
* preferences
* current focus
* demonstrated capabilities
* evolving areas

But it must avoid rigid labels.

---

# 40. Learning DNA Language

Avoid:

> "You are a visual learner."

Prefer:

> **"Visual explanations have helped you understand concepts effectively."**

This keeps the model flexible.

---

# 41. Preferences

```text
Preferences
│
├── Learning Pace
├── Explanation Style
├── Content Format
├── Session Length
├── Difficulty
├── Notifications
└── AI Mentor
```

---

# 42. Accessibility

Accessibility should have its own prominent area.

```text
Accessibility
│
├── Text Size
├── Contrast
├── Motion
├── Audio
├── Captions
├── Focus Mode
├── Interface Density
└── Interaction Preferences
```

These should be normal product controls—not hidden away.

---

# 43. Skill Passport

The Skill Passport is the learner's portable capability record.

```text
Skill Passport
│
├── Skills
├── Competencies
├── Projects
├── Evidence
├── Assessments
└── Credentials
```

---

# 44. AI Mentor Architecture

The mentor can be opened globally.

When opened from a lesson:

```text
AI Mentor
Context:
Current Lesson
Current Concept
Current Question
Learner State
```

When opened from a project:

```text
AI Mentor
Context:
Current Project
Current Requirements
Current Skills
```

Same AI.

Different context.

---

# 45. AI Conversation History

Learners should be able to access previous AI conversations.

But conversations should be organized around:

* learning context
* goal
* project
* subject

rather than becoming one giant chat history.

---

# 46. AI Mentor Actions

Within a learning activity:

```text
Ask
Explain
Simplify
Hint
Challenge Me
Give Example
Show Another Way
Quiz Me
```

This makes the AI more useful than a generic chat box.

---

# 47. Assessments Architecture

```text
Assessments
│
├── Diagnostic
├── Formative
├── Mastery
├── Retention
└── Practical
```

---

# 48. Assessment Results

Results should show:

* what was demonstrated
* areas of uncertainty
* likely gaps
* recommended next action

Not simply:

> Score: 74%

---

# 49. Review Architecture

```text
Review
│
├── Due Now
├── Upcoming
├── Weak Areas
├── Recent Mistakes
└── Previously Mastered
```

---

# 50. Search Architecture

Universal search should produce categorized results:

```text
Search
│
├── Concepts
├── Skills
├── Learning Paths
├── Projects
├── Lessons
└── Questions
```

AI search may additionally answer the question directly.

---

# 51. Settings Architecture

Settings should be separated into:

```text
Settings
│
├── Account
├── SecLumity
├── Privacy
├── Notifications
├── Accessibility
├── Learning Preferences
├── AI Preferences
├── Data
├── Billing
└── Danger Zone
```

---

# 52. Teacher Area

Teacher functionality should be a separate workspace.

```text
Teacher
│
├── Overview
├── Learners
├── Classes
├── Assignments
├── Assessments
├── Content
├── Insights
└── Settings
```

---

# 53. Teacher Learner View

A teacher should see useful signals without seeing unnecessary private information.

Potential:

```text
Learner
│
├── Progress
├── Skills
├── Knowledge
├── Assignments
├── Strengths
├── Learning Gaps
└── Recent Activity
```

---

# 54. Parent Area

For applicable accounts:

```text
Parent
│
├── Children
├── Progress
├── Goals
├── Activity
├── Reports
└── Controls
```

The child's privacy and autonomy should be considered throughout the design.

---

# 55. Institution Area

```text
Institution
│
├── Overview
├── Learners
├── Teachers
├── Classes
├── Curriculum
├── Content
├── Assessments
├── Analytics
├── Reports
└── Settings
```

---

# 56. Content Creator Area

```text
Creator
│
├── Dashboard
├── Content
├── Drafts
├── Published
├── Analytics
└── Profile
```

---

# 57. Admin Area

The platform administration system should be completely separate from the learner experience.

```text
Admin
│
├── Dashboard
├── Users
├── Organizations
├── Content
├── Knowledge Graph
├── Adaptive Engine
├── AI
├── Moderation
├── Analytics
├── Billing
├── SecLumity
└── System
```

---

# 58. Role-Based Architecture

Lumi should use role-based access control.

Potential roles:

```text
Learner
Parent
Teacher
Mentor
Content Creator
Institution Admin
Lumi Admin
Super Admin
```

A user may eventually have multiple roles.

---

# 59. Context Switching

For users with multiple roles:

```text
Learner
      ↓
Switch Workspace
      ↓
Teacher
      ↓
Institution
```

Each workspace should maintain its own navigation.

---

# 60. Global Components

Some components exist throughout Lumi:

```text
Global
│
├── Lumi Logo
├── Search
├── AI Mentor
├── Notifications
├── Profile
├── Help
└── Workspace Switcher
```

---

# 61. Navigation Rules

Lumi should follow these rules:

### Rule 1

Never make users wonder where a feature lives.

### Rule 2

A primary task should normally be reachable within a few interactions.

### Rule 3

Don't duplicate the same feature across multiple navigation locations.

### Rule 4

Mobile navigation must prioritize actions, not hierarchy.

### Rule 5

Secondary functionality belongs in contextual menus.

---

# 62. URL / Route Architecture

A conceptual route system:

```text
/
├── /home
├── /learn
│   ├── /continue
│   ├── /paths
│   ├── /reviews
│   └── /assessments
│
├── /goals
│   ├── /active
│   ├── /completed
│   └── /[goal]
│
├── /build
│   ├── /projects
│   ├── /portfolio
│   └── /[project]
│
├── /explore
│   ├── /subjects
│   ├── /skills
│   └── /[topic]
│
├── /progress
│
├── /me
│   ├── /profile
│   ├── /learning-dna
│   ├── /skills
│   ├── /passport
│   └── /settings
│
└── /mentor
```

These are conceptual routes, not yet the final frontend implementation.

---

# 63. Deep Linking

Lumi should allow links directly to meaningful resources.

Examples:

```text
/learn/python/functions
/goals/frontend-development
/projects/build-a-website
/skills/javascript
/concepts/recursion
```

This will matter for:

* sharing
* search engines
* notifications
* internal navigation
* bookmarks

---

# 64. Information Hierarchy

Lumi's hierarchy should generally follow:

```text
Lumi
 ↓
Workspace
 ↓
Goal / Subject / Project
 ↓
Learning Path
 ↓
Milestone
 ↓
Concept / Skill
 ↓
Activity
```

---

# 65. The Most Important Relationship

The entire product revolves around:

```text
GOAL
 ↓
CAPABILITIES
 ↓
SKILLS
 ↓
CONCEPTS
 ↓
LEARNING ACTIVITIES
 ↓
EVIDENCE
 ↓
ADAPTATION
 ↓
NEXT ACTION
```

This should be reflected throughout the UX.

---

# 66. Lumi Should Not Be Course-Centric

This is critical.

A conventional LMS might organize everything like:

```text
Course
 → Module
 → Lesson
 → Quiz
```

Lumi should instead think:

```text
Goal
 → Capability
 → Knowledge
 → Practice
 → Application
 → Evidence
```

Courses can exist, but they are not the fundamental unit.

---

# 67. The Learning Activity as the Core Unit

The atomic user-facing learning unit should be a **Learning Activity**.

It could be:

* explanation
* question
* simulation
* discussion
* project task
* reflection
* experiment
* practical exercise

The adaptive engine chooses which activity comes next.

---

# 68. The Adaptive Loop

Every learning experience should ultimately follow:

```text
Current State
     ↓
Choose Activity
     ↓
Learner Acts
     ↓
Collect Evidence
     ↓
Update State
     ↓
Evaluate
     ↓
Choose Next Activity
```

This is the heartbeat of Lumi.

---

# 69. Information Architecture Principle

Lumi's interface should expose **enough structure to give learners control** without exposing the complexity of the adaptive engine.

The learner should experience:

> "Lumi knows what I'm doing."

not:

> "I'm navigating a complicated database."

---

# 70. Final Lumi Product Map

The complete high-level structure is:

```text
                              Lumi
                               │
        ┌──────────────┬───────┼────────┬─────────────┐
        ↓              ↓       ↓        ↓             ↓
      HOME           LEARN   GOALS    BUILD         EXPLORE
        │              │       │        │             │
        │              │       │        │             │
        └──────────────┴───────┴────────┴─────────────┘
                               │
                               ↓
                            PROGRESS
                               │
                               ↓
                               ME
                               │
        ┌──────────────────────┼──────────────────────┐
        ↓                      ↓                      ↓
   Learning DNA          Accessibility           Skill Passport
        │
        ↓
  Adaptive Engine
        │
        ↓
  Knowledge Graph
        │
        ↓
  Learner State
```

---

# 71. The Complete Lumi Ecosystem

Eventually:

```text
                           Lumi
                            │
       ┌────────────────────┼────────────────────┐
       ↓                    ↓                    ↓
    LEARNERS            EDUCATORS           CREATORS
       │                    │                    │
       ↓                    ↓                    ↓
   AI MENTOR           TEACHER TOOLS       CONTENT SYSTEM
       │                    │                    │
       └────────────────────┼────────────────────┘
                            ↓
                    ADAPTIVE ENGINE
                            │
             ┌──────────────┼──────────────┐
             ↓              ↓              ↓
       KNOWLEDGE GRAPH  LEARNER MODEL   CONTENT GRAPH
             │              │              │
             └──────────────┼──────────────┘
                            ↓
                       Lumi PLATFORM
                            │
             ┌──────────────┼──────────────┐
             ↓              ↓              ↓
        WEB / PWA       MOBILE WEB       DESKTOP
```

---

# 72. Information Architecture Decision

At this point, Lumi has three foundational layers:

### Document 01

**Lumi Vision & Product Philosophy**

Defines **why Lumi exists**.

### Document 02

**Lumi Adaptive Intelligence Specification**

Defines **how Lumi thinks**.

### Document 03/04

**Lumi Product Requirements**

Defines **what Lumi does**.

### Document 05

**Lumi Information Architecture**

Defines **where everything lives and how everything connects**.

---

# 73. What Comes Next

The next document should be:

## `06-Lumi-Complete-Screen-Map.md`

This is the document I recommend we do **before touching Stitch/Figma/Antigravity/UI code**.

It will enumerate **every screen**, including:

* public/marketing screens
* authentication
* onboarding
* learner home
* goals
* learning paths
* lessons
* adaptive activities
* AI Mentor
* assessments
* review
* projects
* portfolio
* skills
* progress
* Learning DNA
* accessibility
* settings
* notifications
* search
* explore
* teacher screens
* mentor screens
* parent screens
* institution screens
* creator screens
* admin screens
* empty states
* loading states
* error states
* permission states
* first-time states
* mobile-specific states
* responsive behavior
* modal/drawer flows
* navigation relationships

And, most importantly, it will give every screen a **screen ID** so we can later turn the entire architecture into a UI implementation checklist without accidentally missing something.

**That screen map should become the master checklist for Lumi's UI.**
