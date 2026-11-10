
**Product:** Lumi
**Document:** Product Requirements Document
**Version:** 1.0
**Status:** Foundational / Pre-Development
**Platform:** Web + Progressive Web App (PWA)
**Primary Product:** Lifelong Adaptive Learning Platform

---

# 1. Product Definition

Lumi is a lifelong adaptive learning platform designed for **everyone**.

It combines:

* adaptive learning
* personalized learning paths
* AI-assisted learning
* knowledge mapping
* skill development
* practical application
* assessments
* projects
* spaced review
* accessibility
* neuroinclusive personalization
* lifelong progress tracking

Lumi is not limited to:

* schools
* students
* academic subjects
* children
* courses
* examinations

It must support both:

> **"I need to learn this."**

and:

> **"I want to become capable of doing this."**

---

# 2. Product Vision

Lumi should become a person's **lifelong learning companion**.

A learner should be able to join Lumi with:

* no formal education
* extensive education
* a specific academic goal
* a career goal
* a hobby
* a practical problem
* pure cLumiosity

and receive an experience appropriate to their current situation.

---

# 3. Target Users

Lumi must support multiple learner categories.

## 3.1 Children

Examples:

* foundational literacy
* mathematics
* science
* cLumiosity
* creative exploration

The experience must be age-appropriate and safe.

---

## 3.2 Teenagers

Examples:

* school subjects
* examination preparation
* personal interests
* career exploration
* projects
* skill development

---

## 3.3 University Students

Examples:

* academic subjects
* difficult concepts
* exam preparation
* research
* projects
* professional skills

---

## 3.4 Working Professionals

Examples:

* upskilling
* reskilling
* career transitions
* technical learning
* leadership
* communication
* certifications

---

## 3.5 Independent Learners

People learning without institutions.

Examples:

* programming
* photography
* cooking
* music
* business
* investing education
* languages
* history

---

## 3.6 Lifelong Learners

People learning because they are cLumious.

Lumi should not require a career or academic justification for learning.

---

# 4. Core User Types

Lumi should initially recognize:

### Learner

Primary user.

### Parent / Guardian

Optional supporting role for younger learners.

### Teacher / Mentor

Supports learners.

### Institution Administrator

Manages an educational organization.

### Content Creator

Creates learning materials.

### Lumi Administrator

Manages the platform.

### AI Mentor

Not a human account, but a core product agent.

---

# 5. Core Product Modules

Lumi should eventually contain the following major modules:

```text
01. Identity & Accounts
02. Onboarding
03. Learner Profile
04. Learning DNA
05. Goals
06. Knowledge Graph
07. Learning Paths
08. Adaptive Learning
09. AI Mentor
10. Lessons
11. Practice
12. Assessments
13. Projects
14. Skills
15. Competencies
16. Progress
17. Retention & Review
18. Skill Passport
19. Search & Discovery
20. Explore
21. Accessibility
22. Neuroinclusive Personalization
23. Notifications
24. Social / Collaborative Learning
25. Teacher Tools
26. Parent Tools
27. Institution Tools
28. Content Management
29. Analytics
30. Administration
31. Privacy & Data Controls
32. Billing
```

Not all modules need to be built in the first release.

---

# 6. Product Architecture Philosophy

Lumi should be designed as a **platform**, not a single learning experience.

The architecture should allow new learning domains to be added without redesigning the core system.

For example:

```text
Lumi
│
├── Mathematics
├── Programming
├── Languages
├── Business
├── Science
├── Arts
├── Music
├── Personal Development
├── Professional Skills
└── Future Domains
```

---

# 7. Account Creation

Lumi should support a simple onboarding process.

Possible authentication methods:

* email
* password
* passkeys
* social authentication where appropriate

For younger learners, account creation and parental controls must follow applicable child-safety requirements.

---

# 8. Onboarding

Onboarding should **not feel like a registration form**.

The experience should feel like Lumi is beginning to understand the learner.

---

# 9. Onboarding Goals

Lumi should learn:

* who the learner is
* what they want
* what they already know
* what they want to explore
* how much time they have
* how they prefer to interact
* what accessibility settings they want

But onboarding must remain lightweight.

---

# 10. Initial Onboarding Flow

Conceptually:

```text
Welcome
 ↓
What brings you to Lumi?
 ↓
Choose goals
 ↓
Choose interests
 ↓
Optional experience level
 ↓
Available learning time
 ↓
Learning preferences
 ↓
Accessibility preferences
 ↓
Optional diagnostic
 ↓
Lumi creates initial Learning DNA
 ↓
Personalized Home
```

---

# 11. Skip Everything

Learners must be able to skip optional onboarding questions.

Lumi should not block access because a learner doesn't want to answer personal questions.

The system can learn through interaction over time.

---

# 12. Learner Home

The Home experience should not simply be a course dashboard.

It should be a **personal learning command center**.

Potential sections:

```text
Good morning.

Continue
Today's Focus
Your Goals
Review
Recommended for You
Projects
Recent Progress
Explore
```

The exact UI will be defined later.

---

# 13. Continue Learning

Lumi should provide an obvious continuation point.

Example:

> Continue "JavaScript Fundamentals"

But the continuation may change based on the adaptive engine.

---

# 14. Today's Focus

Lumi may generate a dynamic plan.

Example:

```text
Today's Focus

5 min — Review
15 min — New concept
10 min — Practice
```

The plan should adapt to:

* goals
* retention
* available time
* learner state

---

# 15. Goals

Learners should be able to create goals.

Examples:

> Learn Python.

> Pass WAEC Mathematics.

> Become a frontend developer.

> Learn photography.

> Understand economics.

> Improve public speaking.

---

# 16. Goal Creation

Goal creation should collect:

* goal title
* description
* reason
* desired outcome
* timeframe
* current experience
* available time

The system may optionally suggest a goal structure.

---

# 17. Goal Decomposition

Lumi should convert goals into:

```text
Goal
 ↓
Milestones
 ↓
Capabilities
 ↓
Skills
 ↓
Concepts
 ↓
Learning Activities
```

This should be powered by the knowledge graph and adaptive engine.

---

# 18. Multiple Goals

Learners may have multiple active goals.

Example:

```text
Career
→ Become a software engineer

Academic
→ Pass mathematics

Personal
→ Learn photography
```

Lumi must help prioritize without making the learner feel overwhelmed.

---

# 19. Goal Priority

Learners should be able to assign:

* primary goal
* secondary goals
* exploratory goals

The adaptive engine can use these priorities when generating recommendations.

---

# 20. Learning Path

A Learning Path is Lumi's adaptive journey toward a goal.

It should contain:

* milestones
* concepts
* skills
* assessments
* projects
* reviews
* progress

But it must remain dynamic.

---

# 21. No Fixed Path Requirement

Lumi should never assume:

> Everyone starts at Lesson 1.

Instead:

```text
Diagnostic
 ↓
Knowledge assessment
 ↓
Identify known concepts
 ↓
Identify gaps
 ↓
Generate personalized starting point
```

---

# 22. Learning Experience

A Lumi learning experience may contain:

### Introduction

Why this matters.

### Explanation

Core teaching.

### Examples

Concrete representations.

### Interaction

Questions or exploration.

### Practice

Apply the idea.

### Retrieval

Recall.

### Reflection

Think about understanding.

### Assessment

Verify learning.

### Application

Use it in a meaningful context.

---

# 23. Adaptive Content

Content should support multiple levels.

For example:

```text
Quick
Standard
Deep
```

And multiple representations:

```text
Text
Visual
Audio
Interactive
Example
Analogy
Simulation
```

The engine can choose the appropriate representation.

---

# 24. AI Mentor

The AI Mentor is Lumi's conversational learning companion.

It should be able to:

* explain
* answer questions
* ask questions
* provide hints
* generate examples
* provide feedback
* challenge the learner
* adapt explanations
* summarize
* help plan learning
* support projects

---

# 25. AI Mentor Must Understand Context

The AI Mentor should know, where permitted:

* current goal
* current concept
* recent performance
* learner level
* relevant preferences
* current learning activity

This prevents conversations from feeling disconnected.

---

# 26. AI Mentor Modes

Potential modes:

### Explain

"Teach me this."

### Practice

"Give me questions."

### Socratic

"Guide me without giving the answer."

### Simplify

"Explain it simply."

### Deep Dive

"Take me further."

### Apply

"Show me how this works in real life."

### Review

"Help me remember."

---

# 27. AI Should Not Always Give Answers

The AI Mentor should encourage independent thinking.

Depending on the situation it should:

* ask a question
* give a hint
* provide partial guidance
* ask the learner to explain
* reveal the answer after an attempt

The system should avoid creating unnecessary dependency.

---

# 28. Practice

Lumi should generate targeted practice.

Practice should be selected based on:

* current mastery
* weaknesses
* difficulty
* retention
* goals
* prerequisites

---

# 29. Practice Types

Lumi should support:

* multiple choice
* short answer
* free response
* matching
* ordering
* coding
* simulation
* practical task
* project
* oral response where supported

The content system should allow new assessment types later.

---

# 30. Confidence Capture

Where useful, Lumi may ask:

> How confident are you?

This should be optional or context-dependent.

The response contributes to the confidence model.

---

# 31. Assessments

Lumi should support several assessment types.

### Diagnostic

Determine starting knowledge.

### Formative

Measure learning dLuming a journey.

### Summative

Measure overall mastery.

### Retention

Measure long-term recall.

### Practical

Measure application.

---

# 32. Projects

Projects are essential for Lumi's long-term vision.

A project should allow learners to **make something**.

Examples:

* build an application
* write an article
* conduct research
* create artwork
* design a business
* produce music
* solve a real problem

---

# 33. Project-Based Learning

Projects should connect multiple concepts.

Example:

```text
Build a website
│
├── HTML
├── CSS
├── JavaScript
├── UX
├── Git
└── Deployment
```

Lumi can evaluate the capabilities demonstrated by the project.

---

# 34. Skill System

Every learner should have a Skill profile.

Example:

```text
Skills

JavaScript
████████░░ 82%

Python
███████░░░ 71%

Git
█████████░ 91%
```

However, skill visualization should avoid implying false precision.

---

# 35. Competency System

Competencies aggregate multiple skills.

Example:

```text
Frontend Development
├── HTML
├── CSS
├── JavaScript
├── Accessibility
├── Git
└── Deployment
```

---

# 36. Progress

Progress should not be represented only by percentage completion.

Lumi should show:

* concepts learned
* mastery
* skills
* capabilities
* projects
* retention
* milestones
* growth over time

---

# 37. Learning Timeline

Lumi should maintain a learner timeline.

Example:

```text
August 2026
✓ Learned JavaScript functions
✓ Built calculator
✓ Passed functions assessment

September 2026
✓ Learned async programming
```

The timeline should communicate growth.

---

# 38. Review System

Lumi should automatically identify concepts that need review.

The learner can also manually request review.

---

# 39. Smart Review

Review should consider:

* forgetting probability
* importance
* recent errors
* confidence
* goal relevance

---

# 40. Skill Passport

Lumi should eventually provide a lifelong record of demonstrated capability.

It may include:

* skills
* competencies
* projects
* evidence
* assessments
* achievements

The emphasis should be on **evidence**, not badges alone.

---

# 41. Explore

Lumi should allow cLumiosity-driven discovery.

A learner should be able to explore without having a goal.

Examples:

> "Why do oceans have tides?"

> "Teach me about ancient civilizations."

> "What is quantum computing?"

Exploration should not necessarily create a formal course.

---

# 42. Search

Search should support:

* concepts
* subjects
* skills
* courses
* projects
* questions
* resources

Search should understand natural language.

Example:

> "I want to learn how websites talk to servers."

Lumi could map that to:

* HTTP
* APIs
* client-server architecture
* networking basics

---

# 43. Accessibility

Accessibility is a core product requirement.

Lumi should support:

* keyboard navigation
* screen readers
* adjustable text
* captions
* transcripts
* audio
* reduced motion
* contrast controls
* focus modes
* alternative representations
* flexible interaction methods

---

# 44. Neuroinclusive Experience

Lumi should provide flexible controls without requiring diagnosis.

Potential preferences:

### Focus

Reduce visual distractions.

### Pace

Slow down or increase speed.

### Presentation

Choose preferred formats.

### Interaction

Reduce unnecessary interaction.

### Session

Set shorter learning blocks.

### Environment

Reduce animation and motion.

### Explanation

Request simpler or deeper explanations.

---

# 45. No Stigma

Accessibility controls should not appear as:

> "Special needs mode."

Instead they should be:

> **Your Learning Preferences**

Everyone can use them.

---

# 46. Customization

Learners should eventually be able to customize:

* interface density
* text size
* motion
* sound
* content format
* session length
* difficulty
* reminder frequency

---

# 47. Notifications

Notifications should be useful rather than manipulative.

Potential notifications:

> Your review is ready.

> You have a project waiting.

> You reached a milestone.

Avoid excessive:

> "Don't break your streak!"

messaging.

---

# 48. Streaks

Streaks should not be a core motivation system.

If implemented, they must not imply:

> Missing a day means failure.

Learning should be resilient.

---

# 49. Gamification

Gamification may exist, but it should support learning.

Potential elements:

* milestones
* achievements
* progress indicators
* challenges
* personal goals

Avoid:

* unhealthy competition
* public ranking
* shame
* manipulative reward loops

---

# 50. Social Learning

Future Lumi versions may support:

* study groups
* collaborative projects
* peer feedback
* discussions
* mentorship

Social features should remain optional.

---

# 51. Teacher Experience

Teachers should eventually have:

### Classroom dashboard

See learner progress.

### Learning gaps

Identify common difficulties.

### Intervention suggestions

Lumi recommends areas requiring attention.

### Assignment creation

Create learning tasks.

### Assessment

Evaluate student understanding.

### Content management

Build learning experiences.

---

# 52. Teacher + Lumi

Lumi should not replace teacher judgment.

Teacher insights should complement adaptive intelligence.

Teachers should be able to override recommendations when appropriate.

---

# 53. Parent Experience

For younger learners, parents may receive:

* progress summaries
* learning milestones
* areas needing support
* activity summaries

The system should avoid excessive surveillance.

---

# 54. Institution Experience

Schools and organizations may eventually manage:

* users
* classes
* curriculum
* learning paths
* teachers
* assessments
* analytics

Institution functionality should be modular so Lumi remains useful to independent learners.

---

# 55. Content System

Lumi requires a structured content system.

Content types should include:

* lessons
* explanations
* questions
* examples
* activities
* assessments
* projects
* simulations
* media
* references

Every piece of content should be associated with relevant concepts and skills.

---

# 56. Content Metadata

Content should support metadata such as:

* concept
* skill
* difficulty
* prerequisites
* format
* age suitability
* domain
* language
* accessibility
* estimated duration

---

# 57. AI-Generated Content

AI may assist with content creation.

However:

> **AI-generated content must not automatically be considered trustworthy.**

Content should have appropriate:

* validation
* review
* provenance
* quality controls

---

# 58. Content Quality

Lumi should eventually maintain content quality signals.

Examples:

* learner outcomes
* error rates
* completion
* confusion signals
* teacher review
* factual verification

Poor-performing content should be identified and improved.

---

# 59. Analytics

Analytics should measure:

### Product health

* active learners
* retention
* system performance

### Learning health

* mastery improvement
* retention
* capability development
* transfer

The second category should matter more.

---

# 60. Adaptive Engine Analytics

Lumi should monitor:

* recommendation success
* prediction accuracy
* mastery calibration
* confidence calibration
* retention prediction
* difficulty estimation
* intervention effectiveness

---

# 61. Administration

Lumi administrators should eventually manage:

* users
* content
* domains
* learning models
* AI configuration
* system settings
* reports
* safety
* moderation
* permissions

---

# 62. SecLumity

Lumi must implement secLumity as a foundational requirement.

At minimum:

* secure authentication
* authorization
* encrypted communication
* secure password storage
* session management
* rate limiting
* audit logging
* secure file handling
* data protection

The complete secLumity architecture belongs in a later document.

---

# 63. Privacy

Lumi should minimize unnecessary data collection.

Users should understand:

* what data is collected
* why it is collected
* how it affects personalization
* how long it is retained
* who can access it

---

# 64. Child Safety

Because Lumi is designed for all ages, child safety must be foundational rather than added later.

The platform must account for:

* age-appropriate experiences
* parental controls where required
* privacy protections
* safe communication
* content safety
* appropriate data handling
* applicable legal requirements

---

# 65. PWA Requirements

Lumi should be designed as a **Progressive Web App** from the beginning.

The experience should support:

* responsive layouts
* installability
* mobile devices
* desktop
* tablets
* offline-friendly experiences where possible
* push notifications where appropriate
* fast loading
* graceful network degradation

The product should not feel like a website awkwardly squeezed into a phone.

---

# 66. Device Adaptation

Lumi should work across:

* smartphones
* tablets
* laptops
* desktops

The experience should adapt to screen size without destroying functionality.

---

# 67. Performance

Lumi should prioritize:

* fast initial load
* fast navigation
* low unnecessary network usage
* efficient media
* responsive interactions
* graceful handling of slow networks

This is especially important for global accessibility.

---

# 68. Internationalization

Lumi should eventually support:

* multiple languages
* localization
* regional formatting
* culturally appropriate examples
* localized educational structures

Language should not be treated as a later cosmetic feature.

---

# 69. Offline Learning

Where technically appropriate, Lumi should support offline experiences.

Possible offline functionality:

* downloaded lessons
* cached content
* local progress
* offline practice
* synchronization when connectivity returns

---

# 70. MVP Philosophy

Lumi's first release should **not attempt to build everything**.

The MVP should prove one thing:

> **Can Lumi genuinely adapt learning to an individual better than a static learning platform?**

Everything in the MVP should support proving that hypothesis.

---

# 71. Recommended MVP

The initial Lumi MVP should contain:

### Identity

* account creation
* login
* profile

### Onboarding

* goals
* interests
* experience
* preferences

### Learning DNA

* initial learner model
* adaptive signals

### Knowledge

* concepts
* prerequisites
* mastery

### Learning

* adaptive lessons
* adaptive practice
* assessments

### AI Mentor

* contextual explanations
* hints
* questions
* feedback

### Adaptive Engine

* mastery
* confidence
* retention
* error patterns
* difficulty adaptation

### Progress

* goals
* mastery
* learning history

### Accessibility

* core neuroinclusive preferences
* text
* motion
* audio
* focus controls

---

# 72. MVP Should Not Initially Include

Avoid building these in the first iteration unless required:

* full social network
* complex marketplace
* large institution management system
* advanced parent ecosystem
* massive creator marketplace
* complicated gamification
* employment marketplace
* excessive badges
* unnecessary AI agents
* complex billing system

These can come later.

---

# 73. MVP Success Criteria

Lumi MVP succeeds if a new learner can:

```text
Create account
      ↓
Tell Lumi a goal
      ↓
Complete lightweight diagnostic
      ↓
Receive personalized starting point
      ↓
Learn
      ↓
Practice
      ↓
Make mistakes
      ↓
Lumi identifies what went wrong
      ↓
Lumi adapts
      ↓
Learner improves
      ↓
Lumi updates learner model
      ↓
Next experience becomes more personalized
```

That is the fundamental proof.

---

# 74. The First Lumi Moment

The first major product "wow" should happen when Lumi demonstrates:

> **"You already know this, so I'm not going to waste your time teaching it again."**

Or:

> **"You're struggling here because there's a prerequisite you haven't fully mastered. Let's fix that first."**

Or:

> **"You understood this before, but it's been a while. Let's quickly bring it back."**

That is where Lumi starts feeling intelligent.

---

# 75. Second Lumi Moment

The second major "wow" should be:

> **"This explanation isn't working for you. Let me try another way."**

Without the learner having to fight the platform.

---

# 76. Third Lumi Moment

The third:

> **"You've demonstrated that you can actually use this—not just answer questions about it."**

This moves Lumi from content consumption toward capability.

---

# 77. Fourth Lumi Moment

The fourth:

> **"Lumi remembers."**

The learner returns weeks later and Lumi understands:

* what they were learning
* what they mastered
* what they may have forgotten
* where they were going
* what makes sense to do next

---

# 78. Product Quality Standard

Every major Lumi feature should pass four questions:

### Does it improve learning?

### Does it respect the learner?

### Does it increase accessibility?

### Does it move Lumi toward adaptive lifelong learning?

If the answer is no, the feature should be questioned.

---

# 79. Lumi Feature Decision Framework

Before adding a feature, ask:

```text
Does this help the learner?
        ↓
Does it support their goal?
        ↓
Does it produce useful evidence?
        ↓
Can Lumi adapt from that evidence?
        ↓
Does it respect learner agency?
        ↓
Does it work inclusively?
```

If not, it should not automatically enter the product.

---

# 80. Product North Star

Lumi's ultimate product metric is:

> **Meaningful capability gained per learner over time.**

Supporting metrics may include:

* mastery growth
* retention
* transfer
* goal completion
* skill development
* project completion
* confidence calibration

But these are subordinate to meaningful learning.

---

# 81. Lumi Product Philosophy

Lumi is not trying to build:

> **The world's biggest library of learning content.**

It is trying to build:

> **The world's most adaptive learning experience.**

Content is the material.

**Adaptive intelligence is the product.**

---

# 82. Final Product Principle

Lumi should always ask:

> **"What does this particular person need right now?"**

Not:

> "What does everyone normally do next?"

That is the product distinction that should guide every future decision.

---

# 83. End of Document

