# Lumi — Design System & Visual Identity Specification

**Document:** `07-Lumi-Design-System.md`
**Version:** 1.0
**Status:** Foundational / Pre-UI
**Purpose:** Define the visual language, interaction principles, accessibility standards, and design rules for Lumi before screen design begins.

---

# 1. Design Philosophy

Lumi should feel like:

> **A calm, intelligent place where anyone can grow.**

Not:

* a school LMS
* a children's learning app
* a corporate SaaS dashboard
* an AI chatbot
* a gamified productivity app
* a social media platform

Lumi should feel **human first, intelligent second, technological third.**

The technology should disappear into the experience.

---

# 2. The Lumi Visual Personality

Lumi should communicate five qualities:

### 1. Warm

People should feel welcome immediately.

### 2. Intelligent

The product should feel thoughtful and capable without feeling cold.

### 3. Calm

Learning should not feel stressful.

### 4. CLumious

The interface should encourage exploration.

### 5. Timeless

Lumi should not look tied to a particular UI trend.

---

# 3. The Anti-Design-Slop Rules

Lumi must explicitly avoid:

### ❌ Purple AI gradients everywhere

### ❌ Excessive glassmorphism

### ❌ Giant rounded cards for everything

### ❌ Every feature being a "card"

### ❌ Excessive shadows

### ❌ Neon colors

### ❌ Generic dashboard templates

### ❌ Excessive badges

### ❌ Fake 3D illustrations

### ❌ Random blobs

### ❌ AI-generated abstract people

### ❌ Excessive emoji

### ❌ "Magic AI" sparkles everywhere

### ❌ Gamification for the sake of gamification

### ❌ Childish interfaces for younger learners

### ❌ Corporate interfaces for everyone else

---

# 4. The Central Visual Idea

Lumi's visual system should be inspired by:

> **A quiet study surrounded by a living world.**

Think:

* paper
* ink
* natural materials
* subtle texture
* daylight
* books
* maps
* pathways
* growth
* craftsmanship

But do **not** turn Lumi into a literal vintage or rustic design.

The inspiration should be subtle.

---

# 5. Brand Mark Philosophy

Lumi's logo should be extremely simple.

The mark should communicate:

```text
Connection
Path
Growth
Understanding
Continuity
```

Avoid:

* graduation caps
* books as the primary logo
* brains
* robots
* lightbulbs
* generic AI spark icons

Lumi is bigger than education.

---

# 6. Color Philosophy

Lumi should use a restrained palette.

The colors should feel **earthy, intelligent and contemporary**.

Avoid the typical:

```text
#7C3AED
#8B5CF6
#A855F7
```

purple-heavy AI palette.

Instead, build around:

### Primary

**Deep Ink**

A near-black blue/green neutral.

Purpose:

* primary text
* navigation
* important UI

---

### Secondary

**Living Green**

A natural green used sparingly for:

* progress
* growth
* positive states
* active learning

---

### Accent

**Warm Ochre**

Used for:

* discovery
* highlights
* attention
* selected moments

---

### Supporting

A restrained set of:

* clay
* sky
* muted coral
* soft sage

These should never become rainbow UI.

---

# 7. Suggested Color Tokens

These are starting tokens, not final brand colors.

```text
--Lumi-ink
--Lumi-ink-soft

--Lumi-paper
--Lumi-paper-warm

--Lumi-green
--Lumi-green-soft

--Lumi-ochre
--Lumi-ochre-soft

--Lumi-sky
--Lumi-sky-soft

--Lumi-clay
--Lumi-clay-soft

--Lumi-border
--Lumi-muted

--Lumi-success
--Lumi-warning
--Lumi-danger
```

The exact values should be finalized after visual testing.

---

# 8. Color Usage Ratio

A screen should generally feel:

```text
70% Neutral
20% Primary/structural
10% Accent
```

Do not allow accent colors to dominate the interface.

---

# 9. Semantic Colors

Color must never be the only way information is communicated.

For example:

❌ Red = wrong

Instead:

```text
Icon + text + visual treatment
```

This is important for accessibility.

---

# 10. Dark Mode

Dark mode should not simply invert the colors.

Lumi dark mode should feel like:

> **Evening learning.**

Use:

* deep ink surfaces
* softened text
* restrained accent colors
* reduced contrast glare

Avoid pure black backgrounds everywhere.

---

# 11. Typography

Typography should feel:

* human
* readable
* mature
* warm
* highly legible

Avoid overly futLumistic fonts.

Avoid typography that makes Lumi look like a crypto product.

---

# 12. Font Architecture

Use two primary type roles:

```text
Display
Body
```

Optionally:

```text
Monospace
```

for technical content.

---

# 13. Display Typography

Used for:

* page titles
* major statements
* onboarding
* goal statements

Display typography can have slightly more personality.

---

# 14. Body Typography

Body typography must prioritize:

* readability
* spacing
* comfortable line length
* clear hierarchy

This is especially important for neurodivergent learners.

---

# 15. Typography Scale

Use a predictable scale.

Example:

```text
Display XL
Display L
Display M

Heading XL
Heading L
Heading M
Heading S

Body L
Body M
Body S

Caption
Label
```

Avoid having 25 different font sizes.

---

# 16. Reading Width

Long-form learning content should have a constrained reading width.

Recommended target:

```text
60–75 characters per line
```

Do not stretch paragraphs across the entire screen.

---

# 17. Line Height

Learning content should have generous line height.

Especially for:

* explanations
* instructions
* long-form content
* reading-heavy lessons

---

# 18. Spacing Philosophy

Lumi should breathe.

Avoid:

```text
[Card][Card][Card][Card]
```

with everything packed together.

Use meaningful whitespace.

---

# 19. Spacing Tokens

Example:

```text
4
8
12
16
24
32
40
48
64
80
96
128
```

The system should consistently use spacing tokens.

---

# 20. Grid

Desktop:

```text
12-column grid
```

Tablet:

```text
8-column grid
```

Mobile:

```text
4-column grid
```

---

# 21. Layout Principle

The interface should have a strong visual hierarchy:

```text
Context
 ↓
Primary action
 ↓
Supporting information
 ↓
Optional information
```

Not:

```text
Everything is equally important.
```

---

# 22. Surfaces

Lumi should use fewer surfaces than a typical SaaS application.

Instead of:

```text
Card
Card
Card
Card
Card
```

use:

```text
Content
────────────────────────
Section
────────────────────────
Section
────────────────────────
```

Cards should exist when they provide a meaningful grouping.

---

# 23. Cards

Cards are appropriate for:

* learning paths
* projects
* goals
* recommendations
* content previews

Cards are not appropriate for every paragraph.

---

# 24. Borders

Use borders as a primary structural tool.

Prefer:

```text
subtle border
```

over:

```text
large shadow
```

---

# 25. Shadows

Shadows should be rare.

Use them for:

* floating menus
* dialogs
* sheets
* important overlays

Avoid shadows on every card.

---

# 26. Corner Radius

Lumi should use moderate rounding.

Avoid:

```text
everything = pill
```

Buttons may have modest rounding.

Cards may have slightly larger rounding.

Large containers should not feel inflated.

---

# 27. Buttons

Lumi should have clear button hierarchy.

### Primary

One dominant action.

### Secondary

Supporting action.

### Tertiary

Low-emphasis action.

### Destructive

Dangerous action.

---

# 28. Button Language

Avoid:

> Start Your Amazing Learning Journey!!!

Prefer:

> Start learning

Avoid:

> Unlock your potential

Prefer:

> Continue

Lumi should speak naturally.

---

# 29. Inputs

Forms should feel conversational whenever possible.

Instead of:

```text
Goal
[________________]
Description
[________________]
Deadline
[________]
```

Lumi can progressively ask:

> What would you like to accomplish?

Then:

> When would you like to get there?

---

# 30. Forms

Forms should:

* explain why information is needed
* avoid unnecessary fields
* allow correction
* save progress where appropriate
* clearly show errors

---

# 31. Navigation

Navigation should be quiet.

It should not compete with learning.

Desktop:

```text
Lumi
Home
Learn
Goals
Build
Explore
Progress
Me
```

Mobile:

```text
Home
Learn
Goals
Explore
Me
```

---

# 32. Active Navigation

Avoid giant highlighted pills.

Use subtle indicators such as:

* typography
* small accent marker
* understated background
* icon state

---

# 33. Icons

Icons should be:

* simple
* consistent
* recognizable
* stroke-based or similarly coherent

Avoid mixing multiple icon styles.

---

# 34. Icon Rules

Icons should support meaning.

They should not decorate every sentence.

---

# 35. Illustrations

Lumi illustrations should feel:

* editorial
* human
* expressive
* slightly imperfect

Avoid generic AI illustrations.

---

# 36. Photography

Photography can be used for:

* stories
* community
* real-world learning
* project showcases

Prefer authentic photography over generic stock images.

---

# 37. Motion Philosophy

Motion should communicate:

* change
* progress
* feedback
* navigation

Never motion for decoration alone.

---

# 38. Motion Rules

Animations should generally be:

* short
* subtle
* interruptible
* predictable

Avoid:

* bouncing everything
* excessive parallax
* constant movement
* distracting transitions

---

# 39. Reduced Motion

Lumi must respect:

```text
prefers-reduced-motion
```

Users should be able to disable non-essential animation.

---

# 40. Neuroinclusive Design

This is a foundational requirement.

Lumi should not assume that every learner:

* reads quickly
* focuses continuously
* processes information visually
* prefers the same amount of stimulation
* understands instructions the same way
* learns at the same pace

---

# 41. Cognitive Load

Lumi should avoid presenting too many simultaneous choices.

When appropriate:

```text
One important action
```

rather than:

```text
17 competing buttons
```

---

# 42. Predictability

Navigation should remain consistent.

A learner should not have to relearn the interface on every screen.

---

# 43. Clear Language

Prefer:

> Review this concept

over:

> Reinforce your cognitive mastery through retrieval.

Lumi can be intelligent without sounding academic.

---

# 44. Instructions

Instructions should be:

* short
* specific
* actionable

Example:

> **Choose the answer that best explains photosynthesis.**

Not:

> Please carefully consider the following conceptual representations and select the response that most appropriately aligns with the underlying mechanism.

---

# 45. Multiple Ways to Learn

When possible, the same concept should be available through different representations:

```text
Read
Listen
See
Interact
Practice
Apply
Explain
```

This is not because people must be assigned a permanent "learning style."

It is because different contexts and needs benefit from different representations.

---

# 46. Focus Mode

Focus Mode should remove unnecessary interface elements.

Example:

```text
┌─────────────────────────────┐
│                             │
│        Learn                │
│                             │
│     [Focused Content]       │
│                             │
│                             │
│        Continue →           │
│                             │
└─────────────────────────────┘
```

---

# 47. Distraction Control

Users should be able to reduce:

* notifications
* animations
* decorative elements
* AI interruptions

---

# 48. Sensory Control

Accessibility should include controls for:

* motion
* contrast
* sound
* animation
* interface density

---

# 49. Reading Mode

Long-form content should support a dedicated reading experience.

Possible controls:

```text
Text size
Line spacing
Content width
Background
Reading progress
Audio
```

---

# 50. Audio

Audio should never automatically start.

Controls should include:

* play
* pause
* speed
* captions/transcript

---

# 51. Captions & Transcripts

All important audio/video learning content should have accessible text alternatives.

---

# 52. Keyboard Navigation

Everything important should be keyboard accessible.

Focus states must be clearly visible.

---

# 53. Screen Readers

Semantic HTML should be prioritized.

Buttons should be buttons.

Links should be links.

Headings should form a meaningful hierarchy.

---

# 54. Touch Targets

Interactive controls should be comfortably tappable.

Do not create tiny controls just to fit more content.

---

# 55. Error Design

Errors should explain:

```text
What happened
Why it matters
What the learner can do
```

Example:

> We couldn't save your progress.

> Your internet connection appears to be unavailable.

> **Try again**

---

# 56. Empty States

Empty states should feel useful.

Example:

> **Your learning space is quiet.**

> Choose something you're cLumious about and Lumi will help you build a path.

**Explore**

---

# 57. Success States

Avoid excessive celebration.

Not every completed lesson needs:

```text
🎉🎉🎉 YOU DID IT!!! 🎉🎉🎉
```

Instead:

> **Concept understood**

> You can now explain how functions receive and return values.

This is much more mature.

---

# 58. Progress Visualization

Lumi should avoid turning everything into percentages.

Useful representations include:

* progress paths
* milestones
* confidence ranges
* skill maps
* evidence
* timelines

---

# 59. Avoid Fake Precision

Do not tell learners:

> You have mastered this concept 87.43%.

The adaptive engine may calculate complex internal values, but the learner-facing interface should communicate meaningful states.

Example:

> **Strong understanding**

or:

> **Ready to apply**

---

# 60. Learning Progress Language

Preferred:

* Beginning
* Developing
* Comfortable
* Strong
* Demonstrated

Avoid:

* Failed
* Bad
* Weak
* Dumb
* Behind

---

# 61. Adaptive Feedback

When Lumi changes a path:

> **We adjusted your path.**

> You already demonstrated this skill, so we're moving forward.

Or:

> **Let's take one step back.**

> Your recent answers suggest this prerequisite could use another look.

This builds trust.

---

# 62. Trust & Transparency

Lumi should explain important adaptive decisions.

Learners should be able to ask:

> Why am I seeing this?

And receive a simple explanation.

---

# 63. AI Visual Language

Lumi's AI should **not** dominate the interface.

Avoid:

```text
✨ AI MAGIC
```

everywhere.

The mentor should feel like a natural part of Lumi.

---

# 64. AI Identity

The AI should be recognizable through:

* consistent icon
* subtle visual treatment
* language

Not giant glowing gradients.

---

# 65. Age-Inclusive Design

Lumi should not have:

```text
Kids Lumi
Adults Lumi
Teen Lumi
```

as completely different products.

Instead:

> **Same identity. Adaptive expression.**

---

# 66. Younger Learners

The interface can use:

* larger touch targets
* clearer language
* stronger visual guidance
* more direct navigation
* richer interactive elements

But it should not become childish.

---

# 67. Older Learners

The interface can use:

* denser information
* more advanced controls
* deeper explanations
* professional workflows

But it should remain recognizable as Lumi.

---

# 68. The Adaptive Interface

Eventually Lumi itself can adapt.

For example:

```text
Learner prefers low stimulation
        ↓
Reduced motion
Reduced density
Fewer simultaneous choices
```

Another learner:

```text
Learner prefers exploration
        ↓
More discovery
Related concepts
Optional deeper paths
```

The interface adapts **without changing its identity.**

---

# 69. Personalization Boundaries

Lumi must never create a strange interface that users no longer recognize.

Personalization should change:

* density
* pacing
* content format
* recommendations
* interaction support

Not fundamentally change:

* navigation
* brand
* core interaction patterns

---

# 70. Data Visualization

Data should communicate insight, not impress.

Avoid dashboards filled with:

* random line charts
* pie charts
* percentages
* meaningless metrics

Every visualization should answer:

> **What should I understand from this?**

---

# 71. Progress Example

Instead of:

```text
Knowledge: 74%
Retention: 61%
Confidence: 83%
ELO: 1294
```

show:

```text
You're comfortable with the foundations.

You may benefit from reviewing:
• Quadratic equations

You're ready to practice:
• Graphing
```

The complex model stays underneath.

---

# 72. Design Tokens

The final implementation should have centralized tokens for:

```text
Colors
Typography
Spacing
Radius
Borders
Shadows
Motion
Breakpoints
Z-index
```

No random values scattered through the codebase.

---

# 73. Component Philosophy

Components should be composable.

Core component groups:

```text
Navigation
Buttons
Inputs
Cards
Lists
Tabs
Dialogs
Sheets
Progress
Feedback
Learning
Assessment
AI
Data
Accessibility
```

---

# 74. Core Components

The initial design system should define:

```text
Button
IconButton
Input
Textarea
Select
Checkbox
Radio
Switch
Tabs
Badge
Tooltip
Dropdown
Dialog
Drawer
BottomSheet
Toast
Progress
Avatar
Card
List
Divider
Breadcrumb
```

---

# 75. Lumi-Specific Components

These are more important.

```text
LearningPath
GoalCard
SkillMap
ConceptCard
Activity
Question
ConfidenceCheck
LearningProgress
AdaptiveMessage
ReviewItem
ProjectCard
EvidenceCard
MentorPanel
LearningDNA
SkillPassport
```

---

# 76. Component States

Every interactive component should define:

```text
Default
Hover
Focus
Active
Disabled
Loading
Error
Success
Selected
```

Where applicable.

---

# 77. Design System Documentation

Every component should document:

* purpose
* anatomy
* variants
* states
* accessibility
* responsive behavior
* usage rules
* anti-patterns

---

# 78. Responsive Philosophy

Do not design desktop first and simply shrink it.

Design:

```text
Mobile-first behavior
+
Tablet adaptation
+
Desktop expansion
```

---

# 79. PWA Considerations

Lumi should be designed as a **web-first PWA**.

The interface must support:

* responsive layouts
* touch
* keyboard
* installability
* offline states
* unreliable connections
* mobile browsers

The design system must never assume a native mobile application.

---

# 80. Offline UX

If a learner loses connection:

Lumi should preserve where possible:

* current activity
* progress
* drafts
* completed interactions

Then synchronize when connectivity returns.

---

# 81. PWA Installation

The install experience should be subtle.

Avoid aggressive:

> DOWNLOAD OUR APP!!!

Instead:

> **Make Lumi easier to reach**

> Install Lumi on this device.

---

# 82. Notifications

Notifications should be meaningful.

Examples:

> Your review is ready.

> You made progress toward your goal.

> Your project feedback is available.

Avoid:

> 🔥🔥 YOU'RE ON FIRE!!! COME BACK NOW!!!

---

# 83. Gamification

Lumi should not use addictive engagement mechanics as its primary strategy.

Avoid:

* manipulative streaks
* fear of losing progress
* excessive leaderboards
* meaningless points

Achievement systems should represent **real growth**.

---

# 84. Achievement Philosophy

Good:

> Built your first working web application.

Less meaningful:

> +100 XP for opening Lumi three days in a row.

---

# 85. Learning Environment

Lumi should feel like:

```text
Explore → Understand → Practice → Create
```

rather than:

```text
Click → Reward → Click → Reward
```

---

# 86. Design Language

Lumi's copy should be:

* warm
* concise
* respectful
* intelligent
* non-judgmental

---

# 87. Lumi Voice

Lumi should sound like:

> "Let's figure this out."

Not:

> "You have failed this assessment."

---

# 88. Lumi Should Never Shame

Never use language that implies:

* laziness
* stupidity
* failure as identity
* falling behind as personal worth

Learning difficulty is information, not character judgment.

---

# 89. Lumi Should Encourage Agency

Instead of:

> Lumi knows what you need.

Prefer:

> **Here's what Lumi recommends.**

The learner remains in control.

---

# 90. Adaptive Transparency

Learners should be able to understand:

```text
Why this?
Why now?
What changed?
What's next?
```

without exposing internal technical complexity.

---

# 91. The Lumi Design Principle

The entire design system can be summarized as:

> **Quiet interface. Deep intelligence. Human control.**

---

# 92. Visual North Star

If someone sees Lumi for the first time, the reaction we want is:

> "This feels different."

Then:

> "This feels calm."

Then:

> "This understands what I'm trying to do."

And finally:

> **"I want to learn here."**

---

# 93. What This Document Locks In

We now have the initial rules for:

* brand personality
* color
* typography
* spacing
* layout
* components
* accessibility
* neuroinclusive design
* motion
* AI presentation
* age-inclusive design
* PWA behavior
* responsive design
* gamification philosophy
* language
* progress visualization
* adaptive transparency

---

# 94. Next Document

The next document should be:

# `08-Lumi-UX-Flow-Specification.md`

This is where we stop talking about individual screens in isolation and define **exactly how a person moves through Lumi**.

We'll map the critical journeys step-by-step:

```text
First Visit
     ↓
Sign Up
     ↓
Onboarding
     ↓
Goal Creation
     ↓
Diagnostic
     ↓
Personalized Path
     ↓
First Learning Session
     ↓
Adaptive Branching
     ↓
Practice
     ↓
Assessment
     ↓
Progress
     ↓
Review
     ↓
Project
     ↓
Demonstrated Skill
```

We'll also define the alternative journeys for:

* someone who doesn't know what they want to learn
* someone who already knows a subject
* someone who wants to learn for school
* someone learning for work
* someone learning a life skill
* someone who only has five minutes
* someone who wants deep study
* someone who needs accessibility accommodations
* someone returning after a long absence

**That flow specification is the next major document before we move into actual UI screen composition.**
