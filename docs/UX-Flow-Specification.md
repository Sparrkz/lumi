# Lumi — UX Flow Specification

**Document:** `08-Lumi-UX-Flow-Specification.md`
**Version:** 1.0
**Status:** Foundational
**Purpose:** Define how people move through Lumi, including normal, adaptive, interrupted, exploratory, and accessibility-focused journeys.

---

# 1. Core UX Principle

Lumi should never feel like:

> “Here is a course. Complete these pages.”

It should feel like:

> **“Tell me where you want to go. I'll help you figure out the best way to get there.”**

The learner owns the destination.

Lumi helps determine the route.

---

# 2. The Lumi Core Loop

Everything revolves around:

```text
Intent
  ↓
Understand
  ↓
Assess
  ↓
Plan
  ↓
Learn
  ↓
Practice
  ↓
Apply
  ↓
Observe
  ↓
Adapt
  ↓
Reflect
  ↓
Continue
```

This is the central UX loop.

---

# 3. Global Navigation Model

The primary learner navigation is:

```text
Home
Learn
Goals
Explore
Progress
Me
```

AI Mentor is globally accessible but should not necessarily occupy permanent navigation space.

---

# 4. HOME

Home answers four questions immediately:

### 1. Where am I?

Current learning context.

### 2. What should I do?

Recommended next action.

### 3. Why?

Short explanation.

### 4. What else can I do?

Optional alternatives.

---

# 5. First Visit Flow

```text
Landing
 ↓
Start Lumi
 ↓
Create Account
 ↓
Welcome
 ↓
What brings you here?
 ↓
What do you want to accomplish?
 ↓
Interests / Context
 ↓
Learning preferences
 ↓
Accessibility preferences
 ↓
Optional diagnostic
 ↓
Starting point
 ↓
Personalized plan
 ↓
Home
```

---

# 6. Onboarding Principle

Onboarding should **not** feel like filling out a government form.

Ask only what Lumi needs.

Progressively learn the rest through interaction.

---

# 7. Onboarding — Step 1

### Welcome

Message:

> **Welcome to Lumi.**

> Learning doesn't have to follow one path.

CTA:

**Let's begin**

Secondary:

**Explore first**

---

# 8. Onboarding — Step 2

### What brings you here?

Possible choices:

```text
I'm studying
I'm building something
I'm developing a skill
I'm preparing for work
I'm cLumious
I'm solving a real problem
I'm here to grow
I'm not sure yet
```

Multiple selections allowed.

---

# 9. "I'm Not Sure" Path

This is extremely important.

If the learner doesn't know what they want:

```text
Not sure
 ↓
Conversation with Lumi
 ↓
Interests
 ↓
Problems they care about
 ↓
Things they enjoy
 ↓
Possible directions
 ↓
Explore
```

Lumi should never force a goal prematurely.

---

# 10. Onboarding — Goal

Ask:

> **What would you like to be able to do?**

This wording is deliberate.

Not:

> What course do you want?

Lumi focuses on **capability**, not content consumption.

---

# 11. Goal Examples

A learner might say:

> I want to build websites.

Or:

> I want to understand investing.

Or:

> I want to pass my mathematics exam.

Or:

> I want to learn how to cook.

Or:

> I want to communicate better at work.

Lumi should accept natural language.

---

# 12. Goal Interpretation

Lumi converts:

```text
Natural language
       ↓
Goal
       ↓
Capabilities
       ↓
Skills
       ↓
Concepts
       ↓
Learning path
```

---

# 13. Goal Confirmation

Lumi should show:

> **Here's what I understood.**

Then:

```text
Goal:
Build my first web application.

Likely skills:
• HTML
• CSS
• JavaScript
• Web fundamentals

Suggested outcome:
Build and publish a small working website.
```

The learner can:

**Looks right**

or

**Change it**

---

# 14. Diagnostic

The diagnostic should not feel like an exam.

Lumi should explain:

> **We can check what you already know so you don't waste time relearning it.**

Options:

**Check my starting point**

**Skip for now**

---

# 15. Adaptive Diagnostic

The diagnostic itself adapts.

```text
Question
 ↓
Answer
 ↓
Estimate
 ↓
Next question selected
 ↓
New evidence
 ↓
Update estimate
```

Easy questions should not continue unnecessarily if mastery is already demonstrated.

---

# 16. Diagnostic Results

Avoid:

> Score: 63%

Instead:

```text
You already understand:
✓ Variables
✓ Basic HTML
✓ Functions

Let's strengthen:
→ DOM manipulation

You're ready to explore:
→ Building interactive pages
```

---

# 17. Starting Point

Lumi creates a starting point.

Example:

> **You're not starting from the beginning.**

> You already have a foundation in HTML and JavaScript.

CTA:

**See my path**

---

# 18. Personalized Path

The path should communicate:

```text
Where you're going
What you already know
What comes next
Why it matters
```

---

# 19. First Learning Session

Path:

```text
Home
 ↓
Continue
 ↓
Lesson introduction
 ↓
Learning content
 ↓
Interaction
 ↓
Practice
 ↓
Feedback
 ↓
Reflection
 ↓
Next recommendation
```

---

# 20. Learning Session Principle

A session should not always be:

```text
Read
 ↓
Question
 ↓
Question
 ↓
Question
 ↓
Done
```

It can be:

```text
Observe
 ↓
Explain
 ↓
Try
 ↓
Make mistake
 ↓
Understand
 ↓
Retry
 ↓
Apply
```

---

# 21. Adaptive Branching

Suppose a learner gets something wrong.

Lumi determines:

```text
Was this:
├── Knowledge gap?
├── Prerequisite gap?
├── Misunderstanding?
├── Careless error?
├── Ambiguous question?
├── Low confidence?
└── Unfamiliar format?
```

The response should depend on the cause.

---

# 22. Example

Learner struggles with fractions.

Lumi should not immediately say:

> Review fractions.

Instead, it investigates.

Potential branch:

```text
Fraction question
 ↓
Incorrect
 ↓
Check prerequisite
 ↓
Numerical comparison
 ↓
Correct
 ↓
Try visual fraction representation
 ↓
Correct
 ↓
Return to original concept
```

---

# 23. Adaptive Intervention

Possible interventions:

```text
Simplify
Explain differently
Show example
Give hint
Review prerequisite
Change representation
Provide guided practice
Slow down
Increase challenge
```

---

# 24. Multiple Representations

A concept can be represented as:

```text
Text
Diagram
Example
Simulation
Conversation
Question
Real-world scenario
```

Lumi chooses based on context and evidence, while allowing learner choice.

---

# 25. Confidence

Lumi can occasionally ask:

> **How confident are you?**

But this should not happen after every question.

Confidence is an additional signal, not the entire learning model.

---

# 26. Fast Learner Flow

If evidence indicates strong understanding:

```text
Basic explanation
 ↓
Quick check
 ↓
Strong evidence
 ↓
Skip repetition
 ↓
Increase challenge
```

Lumi should respect existing knowledge.

---

# 27. Struggling Learner Flow

```text
Difficulty detected
 ↓
Reduce complexity
 ↓
Change representation
 ↓
Provide guidance
 ↓
Practice prerequisite
 ↓
Retry
 ↓
Reassess
```

The system should not punish the learner for needing support.

---

# 28. Deep Learner Flow

Some learners want depth.

Lumi should support:

```text
Core explanation
 ↓
Optional deeper explanation
 ↓
Related concepts
 ↓
Advanced examples
 ↓
Research
 ↓
Application
```

---

# 29. Five-Minute Learner

If someone only has five minutes:

```text
Home
 ↓
Lumi detects limited time
 ↓
"5-minute session"
 ↓
One focused activity
 ↓
Quick review
 ↓
Save progress
```

The learner should still feel their time mattered.

---

# 30. One-Hour Learner

For longer availability:

```text
Review
 ↓
New concept
 ↓
Practice
 ↓
Application
 ↓
Reflection
```

Lumi can dynamically construct the session.

---

# 31. Returning Learner

If someone returns after several days:

Lumi checks:

```text
Previous state
+
Retention estimate
+
Goal status
+
Recent activity
```

Then determines whether to:

```text
Continue
Review
Reassess
Adapt
```

---

# 32. Long Absence

After a long absence:

Do not say:

> You're 12 days behind.

Instead:

> **Welcome back.**

> A quick review will help us find the best place to continue.

---

# 33. Review Flow

```text
Review ready
 ↓
Review hub
 ↓
Concept
 ↓
Recall
 ↓
Feedback
 ↓
Retry if needed
 ↓
Retention updated
 ↓
Next review scheduled
```

---

# 34. Mastery Flow

Mastery should require evidence across appropriate contexts.

Potential evidence:

```text
Practice
+
Explanation
+
Application
+
Assessment
+
Time
```

Not simply:

> answered one question correctly.

---

# 35. Real-World Application

This is one of Lumi's defining differences.

Instead of stopping at:

> You learned percentages.

Lumi can continue:

> **Let's use percentages somewhere real.**

Examples:

* calculate a discount
* understand interest
* analyze a dataset
* plan a budget
* interpret statistics

---

# 36. Build Flow

Learning becomes doing.

```text
Concept
 ↓
Skill
 ↓
Project
 ↓
Build
 ↓
Feedback
 ↓
Improve
 ↓
Evidence
```

---

# 37. Project Creation

User:

> I want to build a website for my church.

Lumi identifies potential requirements:

```text
HTML
CSS
JavaScript
UI structure
Responsive design
Accessibility
Deployment
```

Then creates a project pathway.

---

# 38. Project Adaptation

If the learner already knows HTML:

Lumi should not force HTML lessons.

If they struggle with responsive design:

Lumi can recommend targeted learning.

---

# 39. Project Evidence

Lumi records meaningful evidence:

```text
Created project
Completed task
Solved problem
Explained concept
Applied skill
Received feedback
Improved implementation
```

This feeds the Skill Passport.

---

# 40. Skill Passport Flow

```text
Learning
 ↓
Practice
 ↓
Projects
 ↓
Evidence
 ↓
Competency
 ↓
Skill Passport
```

The passport should represent demonstrated ability.

---

# 41. AI Mentor Flow

The mentor can be accessed from:

* Home
* Learning
* Goals
* Projects
* Explore
* Progress

But its context should change accordingly.

---

# 42. Contextual AI

From a lesson:

> Why is this answer wrong?

Lumi knows what the learner is working on.

From a project:

> Why isn't my layout working?

Lumi knows the project context.

---

# 43. AI Action Model

AI should not only answer.

It can:

```text
Explain
Ask
Guide
Practice
Summarize
Generate examples
Review
Plan
Reflect
```

---

# 44. AI Safety & Accuracy

The AI should clearly distinguish:

```text
Known
Estimated
Suggested
Uncertain
```

It should not confidently invent facts.

For important educational content, the underlying system should prioritize verified content where available.

---

# 45. Explore Flow

A learner can enter Explore without a goal.

```text
Explore
 ↓
Interest
 ↓
Topic
 ↓
Concept
 ↓
"Go deeper"
 ↓
Learning
```

---

# 46. CLumiosity Mode

Example:

User searches:

> Why does the sky change color?

Lumi can provide:

```text
Quick answer
 ↓
Want to understand the science?
 ↓
Related concepts
 ↓
Optional learning path
```

The learner is never forced into a course.

---

# 47. Goal Discovery

Explore can turn cLumiosity into goals.

```text
CLumiosity
 ↓
Conversation
 ↓
Potential goal
 ↓
Confirm
 ↓
Path
```

---

# 48. Accessibility Journey

DLuming onboarding:

```text
Accessibility
 ↓
Choose preferences
 ↓
Preview interface
 ↓
Adjust
 ↓
Save
```

But accessibility settings must remain editable later.

---

# 49. Accessibility Quick Controls

DLuming learning, relevant controls should be accessible without leaving the session.

Potential:

```text
Text
Audio
Display
Motion
Focus
```

---

# 50. Neurodivergent-Friendly Flow

Lumi should support different interaction needs without forcing users to disclose a diagnosis.

Possible preferences:

```text
Less visual stimulation
More explicit instructions
Reduced choices
More time
Chunk content
Show examples first
Allow audio
Reduce motion
Focus mode
```

The system adapts to **needs**, not labels.

---

# 51. No Forced Labels

Lumi should not require someone to select:

> ADHD

or

> Autism

in order to access supportive features.

A learner should simply be able to say:

> I prefer less visual stimulation.

---

# 52. Social Learning

If social features are introduced later:

They should be optional.

Possible:

```text
Study group
Collaborative project
Peer feedback
Mentor
Teacher
Community
```

Learning should never require social participation.

---

# 53. Parent Flow

For applicable younger learners:

```text
Parent Dashboard
 ↓
Child
 ↓
Progress
 ↓
Insights
```

Parents should receive useful information without turning learning into surveillance.

---

# 54. Teacher Flow

```text
Teacher Dashboard
 ↓
Learner
 ↓
Evidence
 ↓
Learning gaps
 ↓
Suggested intervention
```

Teachers should see **why** Lumi recommends something.

---

# 55. Mentor Flow

```text
Mentor
 ↓
Learner
 ↓
Context
 ↓
Conversation/session
 ↓
Notes
 ↓
Follow-up
```

---

# 56. Privacy Principle

Different users should see only what they need.

```text
Learner
Teacher
Parent
Mentor
Institution
Admin
```

Each gets a different view.

---

# 57. Progress Flow

Progress should move from:

```text
Activity
 ↓
Evidence
 ↓
Concept
 ↓
Skill
 ↓
Goal
 ↓
Growth
```

Not simply:

```text
Lesson 4/10
```

---

# 58. Learning Timeline

The learner should eventually be able to look back and see:

```text
What I learned
What I built
What I struggled with
What I improved
What I can now do
```

This creates a meaningful sense of growth.

---

# 59. Reflection

After meaningful milestones, Lumi can ask:

> What feels easier now?

or:

> What can you do now that you couldn't do before?

Reflection should be optional.

---

# 60. Completion

Lumi should avoid treating every learning journey as:

> DONE.

Many skills remain continuously developable.

Instead:

```text
You've demonstrated this capability.
 ↓
Apply it
 ↓
Continue growing
```

---

# 61. The "Next Best Action"

Lumi's most important recommendation engine should answer:

> **What is the most useful thing this person can do next?**

It could be:

* learn
* review
* practice
* build
* explore
* rest
* reflect

---

# 62. Important: Rest

Lumi should not optimize for maximum screen time.

Sometimes the recommendation can effectively be:

> You've done enough for now. Come back when you're ready.

This differentiates Lumi from engagement-optimized platforms.

---

# 63. Adaptive Pace

Lumi should adapt to:

```text
Knowledge
Confidence
Retention
Response patterns
Time available
Goal urgency
Learner preference
```

But the learner remains able to override recommendations.

---

# 64. Manual Override

The learner should be able to say:

> I want to review this again.

or:

> Skip this.

or:

> Show me the harder version.

Lumi can warn when appropriate but should respect learner agency.

---

# 65. When Lumi Disagrees

Example:

Learner:

> Skip this.

Lumi:

> You can skip it. Based on your recent answers, this concept may be useful later. We'll keep it available for review.

**Skip**

**Stay**

No coercion.

---

# 66. Error Recovery

If something goes wrong:

```text
Error
 ↓
Preserve progress
 ↓
Explain
 ↓
Retry
 ↓
Continue
```

The learner should never fear losing work.

---

# 67. Offline Flow

```text
Connection lost
 ↓
Continue where possible
 ↓
Local progress saved
 ↓
Connection restored
 ↓
Sync
 ↓
Confirmation
```

---

# 68. Notification Flow

Notifications should bring learners back for a reason.

```text
Review ready
 ↓
Open notification
 ↓
Review
 ↓
Return to normal flow
```

---

# 69. Search Flow

Search should support:

```text
Exact query
Natural language
Concept discovery
Skill discovery
Learning path discovery
```

---

# 70. Global Search Example

User:

> "How does compound interest work?"

Lumi can return:

```text
Quick explanation
Relevant concepts
Learning activities
Projects
Related questions
```

---

# 71. Search → Learning

Search result:

> Compound Interest

CTA:

**Learn this**

Lumi can create or recommend an appropriate learning path.

---

# 72. Search → AI

User can ask:

> Explain this to me simply.

AI Mentor opens with the searched concept already in context.

---

# 73. Universal Return Principle

Whenever Lumi opens a secondary experience:

```text
Original context
 ↓
Secondary experience
 ↓
Action
 ↓
Return to original context
```

Examples:

```text
Lesson → AI → Lesson

Project → Help → Project

Goal → Skill detail → Goal
```

Never unnecessarily reset the journey.

---

# 74. Cross-Platform Consistency

The same conceptual flow must work across:

```text
Phone
Tablet
Desktop
Installed PWA
Browser
```

The layout changes.

The mental model does not.

---

# 75. The Complete Learner Journey

```text
                Lumi
                 │
                 ↓
             DISCOVER
                 │
                 ↓
              INTENT
                 │
                 ↓
               GOAL
                 │
                 ↓
             DIAGNOSTIC
                 │
                 ↓
          LEARNER MODEL
                 │
                 ↓
        PERSONALIZED PATH
                 │
                 ↓
              LEARN
                 │
          ┌──────┴──────┐
          ↓             ↓
       PRACTICE       APPLY
          │             │
          └──────┬──────┘
                 ↓
              EVIDENCE
                 │
                 ↓
              ADAPT
                 │
        ┌────────┼────────┐
        ↓        ↓        ↓
      REVIEW   ADVANCE   EXPLORE
        │        │        │
        └────────┼────────┘
                 ↓
              REFLECT
                 │
                 ↓
               GROW
                 │
                 ↓
        NEXT BEST ACTION
                 │
                 └──────────────→
```

---

# 76. The Most Important UX Rule

Lumi should **never make the learner ask:**

> "What am I supposed to do now?"

At every important moment, the interface should provide a clear next step.

But it should also provide:

> **"Or choose your own direction."**

---

# 77. What This Document Defines

We now have the complete behavioral model for:

* onboarding
* goal creation
* diagnostics
* adaptive learning
* practice
* review
* assessments
* projects
* exploration
* AI
* accessibility
* neuroinclusive interaction
* parents
* teachers
* mentors
* progress
* skill evidence
* returning learners
* short sessions
* deep sessions
* offline states
* search
* notifications
* learner agency

---

# 78. Next Document

The next document should be:

# `09-Lumi-ADAPTIVE-ENGINE-SPECIFICATION.md`

This is a **very important one**.

We'll define the actual intelligence underneath Lumi:

```text
Learner Model
      ↓
Knowledge Graph
      ↓
Mastery
      ↓
Confidence
      ↓
Retention
      ↓
Response Latency
      ↓
Error Patterns
      ↓
Behavior
      ↓
Skill ELO
      ↓
Context
      ↓
Goal
      ↓
Adaptive Decision Engine
      ↓
NEXT BEST ACTION
```

We'll specify **exactly how Lumi decides** whether someone should:

* move forward
* review
* go backwards to a prerequisite
* receive a different explanation
* get easier/harder content
* practice
* build something
* be reassessed
* explore something else

That document is essentially the **brain of Lumi**.
