# Lumi — Learning Experience Architecture

**Document:** `15-LEARNING-EXPERIENCE-ARCHITECTURE.md`
**Version:** 1.0
**Status:** Foundational Architecture
**Product:** Lumi
**Purpose:** Define how learning actually happens inside Lumi—from the moment a learner arrives with a goal to the point where knowledge becomes usable capability.

---

# 1. Purpose

Lumi should not feel like:

> Open course → watch lesson → answer quiz → get score → next lesson.

That is a traditional content-delivery model.

Lumi should instead feel like:

> **"I want to accomplish something. Lumi understands where I am, helps me learn what I need, lets me practice, adapts when I struggle, and helps me use what I learned in the real world."**

The Learning Experience Architecture defines that system.

---

# 2. Core Lumi Learning Loop

The fundamental Lumi loop is:

```text
GOAL
 ↓
UNDERSTAND
 ↓
EXPLORE
 ↓
PRACTICE
 ↓
APPLY
 ↓
DEMONSTRATE
 ↓
REFLECT
 ↓
ADAPT
 ↓
NEXT
```

This loop should exist whether the learner is:

* learning fractions
* studying biology
* learning Python
* preparing for an exam
* learning photography
* learning financial literacy
* learning a language
* developing a professional skill
* building a real-world project

---

# 3. Lumi Does Not Start With Content

Traditional systems often begin:

> "Here is Lesson 1."

Lumi should begin with:

> **"What are you trying to achieve?"**

---

# 4. Learning Entry Points

A learner can enter Lumi through multiple paths.

### Goal

> "I want to learn Python."

### Question

> "Why does inflation happen?"

### Skill

> "I want to become better at public speaking."

### Project

> "I want to build a website."

### Course

> "I want to take this course."

### Assessment

> "I want to see what I know."

### Exploration

> "Show me something interesting."

### Real-life problem

> "I don't understand my electricity bill."

---

# 5. Universal Learning Entry

Regardless of entry point, Lumi should eventually determine:

```text
What does the learner want?
What do they already know?
What do they need?
Why does it matter?
What is the best next step?
```

---

# 6. Learning Intent

Every learning journey should have an intent.

Example:

```text
Intent:
Learn Python

Purpose:
Build web applications

Deadline:
None

Current knowledge:
Beginner

Available time:
30 minutes/day
```

---

# 7. Intent Types

Lumi should support:

```text
Explore
Learn
Practice
Prepare
Build
Solve
Improve
Review
Master
Teach
Create
```

---

# 8. Learning Journey

A journey is the path from:

> Current state

to:

> Desired capability.

Example:

```text
Goal:
Build websites

Current:
No programming experience

Journey:
Digital foundations
 ↓
HTML
 ↓
CSS
 ↓
JavaScript
 ↓
Web development
 ↓
Projects
 ↓
Portfolio
```

---

# 9. Journeys Are Dynamic

A journey is **not a fixed playlist**.

If the learner already understands HTML:

```text
HTML
 ↓
Diagnostic
 ↓
Evidence shows mastery
 ↓
Skip/reduce repetition
 ↓
Move forward
```

---

# 10. The Learning Experience Unit

Lumi should use a flexible concept called a:

> **Learning Experience**

rather than forcing everything into "lessons."

A Learning Experience could be:

* explanation
* conversation
* simulation
* experiment
* problem
* game
* reading
* video
* project
* real-world task
* reflection
* assessment
* collaboration

---

# 11. Learning Experience Structure

A typical experience may contain:

```text
Context
 ↓
Objective
 ↓
Engagement
 ↓
Instruction
 ↓
Interaction
 ↓
Practice
 ↓
Evidence
 ↓
Feedback
 ↓
Reflection
 ↓
Next step
```

Not every experience requires every stage.

---

# 12. Context

Lumi should explain:

> Why are we doing this?

Example:

> "You'll use percentages to calculate discounts and understand real prices."

This establishes relevance.

---

# 13. Objective

The learner should know what they are trying to accomplish.

Example:

> **By the end, you'll be able to calculate a percentage discount.**

---

# 14. Engagement

The learner should interact with the concept as early as practical.

Instead of:

> 15-minute explanation.

Lumi might start with:

> "A ₦20,000 item is 25% off. How much would you pay?"

Then use the learner's answer to guide instruction.

---

# 15. Teach After Evidence When Appropriate

Lumi does not always need to explain everything first.

It can:

```text
Ask
 ↓
Observe
 ↓
Identify gap
 ↓
Teach targeted concept
 ↓
Practice
```

This makes learning more efficient.

---

# 16. The Socratic Layer

Lumi's AI can ask useful questions rather than always giving answers.

Example:

> "What do you think happens if we double the numerator but keep the denominator the same?"

This encourages reasoning.

---

# 17. Explanation Modes

Lumi should support different explanations.

```text
Quick explanation
Detailed explanation
Example
Analogy
Visual explanation
Step-by-step
Technical explanation
Real-world explanation
```

---

# 18. "Explain Another Way"

Every major explanation should ideally have:

> **Explain another way**

Possible options:

```text
Simpler
More detailed
Example
Analogy
Visual
Step-by-step
Real-world
Formal
```

---

# 19. Representation Adaptation

Lumi's adaptive engine can select representations based on evidence.

But the learner can override it:

> "Show me another way."

---

# 20. Practice

Practice should not simply mean:

> Answer 20 questions.

Practice should develop the actual skill.

---

# 21. Practice Types

Lumi should support:

```text
Recall
Recognition
Application
Problem solving
Simulation
Creation
Explanation
Prediction
Comparison
Debugging
Decision making
```

---

# 22. Difficulty Adaptation

Lumi should dynamically adjust:

```text
Complexity
Scaffolding
Hints
Number of steps
Novelty
Time pressure
Context
```

while maintaining the intended learning objective.

---

# 23. Difficulty Should Be Evidence-Based

If the learner succeeds consistently:

```text
Increase challenge
```

If the learner struggles:

```text
Diagnose
 ↓
Identify cause
 ↓
Adjust support
```

Not simply:

> Make everything easier.

---

# 24. Error-Driven Learning

Errors are valuable evidence.

Lumi should ask:

> **Why did this happen?**

Possible causes:

```text
Conceptual misunderstanding
Missing prerequisite
Careless execution
Misread instruction
Memory failure
Incorrect strategy
Interface issue
```

---

# 25. Adaptive Recovery

Example:

```text
Learner gets problem wrong
 ↓
Lumi analyzes error
 ↓
Identifies missing prerequisite
 ↓
Provides targeted explanation
 ↓
Small practice
 ↓
Returns to original problem
```

---

# 26. Hints

Hints should be progressive.

```text
Hint 1:
Small directional clue

Hint 2:
More specific clue

Hint 3:
Relevant concept

Hint 4:
Worked step
```

This prevents Lumi from immediately giving away the answer.

---

# 27. Hint Cost

Hints should not necessarily reduce grades.

Using a hint can simply provide evidence:

> The learner needed support here.

Mastery should be determined from the broader evidence.

---

# 28. Practice → Application

Lumi should move learners beyond isolated exercises.

Example:

```text
Learn fractions
 ↓
Practice fractions
 ↓
Use fractions in a recipe
```

The learner discovers:

> "I can actually use this."

---

# 29. Application

Application is where knowledge becomes capability.

Examples:

### Programming

Build something.

### Mathematics

Solve a real problem.

### Writing

Produce an actual piece of writing.

### Business

Create a business plan.

### Photography

Complete a photography assignment.

---

# 30. Projects

Lumi should treat projects as first-class learning experiences.

A project may include:

```text
Goal
Constraints
Resources
Milestones
Tasks
Evidence
Feedback
Reflection
Final artifact
```

---

# 31. Project Adaptation

Lumi should not automatically complete projects for learners.

AI can:

* explain
* suggest
* critique
* debug
* ask questions
* provide resources

while preserving learner agency.

---

# 32. Real-World Tasks

Lumi should support tasks outside the application.

Example:

> "Go outside and photograph three examples of symmetry."

Then:

```text
Learner completes task
 ↓
Uploads evidence
 ↓
Lumi evaluates
 ↓
Learner reflects
 ↓
Knowledge graph updates
```

---

# 33. Learning Beyond the Screen

This is essential to Lumi's vision.

Lumi should not become:

> A website where people consume information.

It should help people:

> **learn by doing.**

---

# 34. Evidence of Learning

Evidence can include:

```text
Quiz response
Project
Conversation
Explanation
Code
Photo
Video
Document
Simulation performance
Real-world task
Reflection
Teacher evaluation
```

---

# 35. Assessment Is Continuous

Assessment should not only happen at the end.

Lumi continuously gathers evidence.

```text
Interaction
 ↓
Practice
 ↓
Application
 ↓
Assessment
 ↓
Project
```

All contribute to the learner model.

---

# 36. Demonstration

At appropriate points Lumi should ask:

> **"Show me what you can do."**

This is stronger than asking:

> "Did you memorize this?"

---

# 37. Competency Demonstration

If the goal is:

> "Can build a basic website?"

The learner should build one.

A multiple-choice quiz alone should not be the primary evidence.

---

# 38. Reflection

After meaningful learning experiences, Lumi can ask:

> What did you discover?

or:

> What was difficult?

or:

> What would you do differently?

Reflection develops metacognition.

---

# 39. Metacognition

Lumi should help learners understand:

```text
What I know
What I don't know
How I learn
Where I struggle
What strategies work
What I should do next
```

---

# 40. Confidence

Lumi should occasionally ask:

> **"How confident are you?"**

This allows comparison between:

```text
Confidence
vs
Actual performance
```

which improves the learner model.

---

# 41. Confidence Calibration

Example:

```text
Confidence: 90%
Performance: 50%
```

Lumi may need to help the learner recognize gaps.

Or:

```text
Confidence: 30%
Performance: 90%
```

Lumi may need to reinforce confidence.

---

# 42. Retention

Learning should not end when a learner succeeds once.

Lumi should estimate retention and schedule appropriate review.

```text
Learn
 ↓
Practice
 ↓
Later retrieval
 ↓
Review if needed
```

---

# 43. Spaced Review

Review should be adaptive.

A concept mastered strongly may appear less frequently.

A fragile concept may return sooner.

---

# 44. Forgetting Is Normal

Lumi should not frame forgetting as failure.

Instead:

> **"Let's bring this back."**

---

# 45. Learning Session

A session should be flexible.

Possible structure:

```text
Check-in
 ↓
Choose objective
 ↓
Learning experience
 ↓
Practice
 ↓
Application
 ↓
Reflection
 ↓
Next step
```

---

# 46. Session Length

Lumi should support:

```text
5 minutes
15 minutes
30 minutes
60 minutes
Deep session
```

The learner can choose when appropriate.

---

# 47. Adaptive Session Length

If Lumi knows:

> "I only have 10 minutes."

it should construct a meaningful 10-minute experience.

---

# 48. Pause Anytime

Learners should be able to:

> Pause.

Lumi saves:

* current position
* progress
* responses
* context
* pending work

---

# 49. Resume

Returning to Lumi should produce:

> **Continue where you left off**

rather than forcing the learner to restart.

---

# 50. Session Recovery

If a learner exits unexpectedly:

```text
Save automatically
 ↓
Sync when possible
 ↓
Restore session
```

---

# 51. Learning Momentum

Lumi should remember:

> What the learner was working toward.

Example:

> "You were building your portfolio website. Your next step was creating the contact section."

---

# 52. Learning Home

The Lumi home screen should not simply be:

> Course catalog.

It should answer:

```text
What am I learning?
What should I do next?
What have I accomplished?
What can I explore?
```

---

# 53. Core Home Sections

Potentially:

```text
Continue
Goals
Learning Journey
Projects
Explore
Progress
```

The exact UI will be finalized in the design architecture.

---

# 54. Explore

Lumi should support discovery.

Example:

> "Give me something interesting about space."

This can create a lightweight learning experience.

---

# 55. CLumiosity Mode

Lumi should allow:

> **"I don't have a goal. I just want to learn."**

The system can recommend based on:

* interests
* previous learning
* cLumiosity
* current context

---

# 56. Learning Graph Navigation

Every experience should ideally connect to Lumi's knowledge graph.

```text
Current concept
 ↓
Prerequisites
 ↓
Related concepts
 ↓
Applications
 ↓
Advanced concepts
```

---

# 57. Learning Paths

Lumi can offer suggested paths.

Example:

```text
Web Development
 ├── HTML
 ├── CSS
 ├── JavaScript
 ├── Git
 ├── APIs
 └── Projects
```

But the adaptive engine controls the actual sequence.

---

# 58. No Rigid Course Prison

A learner should be able to leave a path temporarily.

Example:

```text
Web development
 ↓
"I want to learn design."
 ↓
Explore UI design
 ↓
Return to web development
```

Learning remains connected.

---

# 59. Cross-Domain Connections

Lumi should make useful connections.

Example:

```text
Photography
        ↓
Light
        ↓
Physics
        ↓
Optics
```

This makes the knowledge graph meaningful.

---

# 60. Learning as a Network

Lumi should not treat knowledge as:

```text
Lesson 1 → Lesson 2 → Lesson 3
```

but more like:

```text
Concept A
 ↙     ↓     ↘
B      C      D
       ↓
       E
```

The learner's journey navigates this network.

---

# 61. AI Tutor

Lumi's AI tutor should exist throughout the learning experience.

It can:

* explain
* ask questions
* give hints
* provide examples
* challenge
* encourage reflection
* diagnose learning gaps
* suggest next steps

---

# 62. AI Should Not Always Answer

The tutor should sometimes say:

> "What do you think?"

instead of immediately providing the answer.

---

# 63. AI Teaching Modes

Potential modes:

```text
Coach
Tutor
Socratic Guide
Explainer
Reviewer
Practice Partner
Project Mentor
Exam Coach
```

The learner can request a mode where appropriate.

---

# 64. AI Context

The tutor should understand:

```text
Current goal
Current activity
Known concepts
Recent mistakes
Preferences
Accessibility settings
Age context
Learning history
```

so the conversation feels connected to the learning journey.

---

# 65. AI Memory

Lumi's AI should distinguish:

```text
Long-term learner knowledge
Session context
Current task
Temporary conversation
```

This prevents uncontrolled memory accumulation.

---

# 66. AI Boundaries

The AI should not:

* fabricate evidence
* claim mastery without evidence
* secretly change learner records
* make medical diagnoses
* make sensitive assumptions
* complete assessed work dishonestly
* manipulate learners emotionally

---

# 67. Adaptive Teaching

The AI can change:

```text
Explanation length
Vocabulary
Examples
Question style
Hint level
Challenge
Pacing
```

based on evidence.

---

# 68. The Learner Can Control the AI

Useful controls:

```text
Explain
Quiz me
Give me a hint
Don't give me the answer
Challenge me
Simplify
Go deeper
Give an example
Let me try first
```

---

# 69. Feedback

Feedback should be:

```text
Immediate when useful
Specific
Actionable
Respectful
Evidence-based
```

Avoid:

> "Wrong."

Prefer:

> "Your approach is close. The issue is in step 2..."

---

# 70. Feedback Levels

```text
Confirmation
 ↓
Correction
 ↓
Explanation
 ↓
Strategy
 ↓
Transfer
```

---

# 71. Example

Learner:

> 15% of 200 = 25

Lumi:

> "You're close. Try finding 10% first, then 5%."

This preserves productive struggle.

---

# 72. Productive Struggle

Lumi should not remove every difficulty.

Some struggle is part of learning.

The adaptive engine should distinguish:

```text
Useful struggle
vs
Unproductive frustration
```

---

# 73. Frustration Signals

Potential indicators:

```text
Repeated failures
Rapid guessing
Repeated help requests
Long inactivity
Abandonment
Negative learner feedback
```

These are signals, not diagnoses.

---

# 74. Intervention

Lumi can respond:

> "Want to try a smaller step?"

or:

> "Let's look at the idea another way."

---

# 75. Never Shame

Avoid:

> "You're struggling with this."

Prefer:

> **"Let's find a different route."**

---

# 76. Mastery

Lumi should define mastery at the **concept/competency level**, not simply:

> Course completed.

---

# 77. Mastery Evidence

Mastery may require evidence across:

```text
Recall
Understanding
Application
Transfer
Retention
```

depending on the competency.

---

# 78. Transfer

A powerful question is:

> Can the learner use this somewhere new?

Example:

Learner learned percentages using shopping.

Can they apply percentages to:

> business pricing?

That is stronger evidence of transfer.

---

# 79. Learning Completion

A learner does not necessarily need to achieve perfect mastery before moving forward.

Lumi can use states such as:

```text
Introduced
Developing
Functional
Proficient
Mastered
```

---

# 80. Revisitability

Every concept remains revisit-able.

The learner can always say:

> "I want to review this."

---

# 81. Learning Portfolio

Lumi should eventually maintain a portfolio of meaningful evidence.

Examples:

```text
Projects
Certificates
Skills
Artifacts
Assessments
Achievements
Reflections
```

---

# 82. Portfolio vs Score

Lumi should prioritize:

> **What can you do?**

over:

> **What score did you get?**

Scores remain useful where appropriate, but they are not the entire learner identity.

---

# 83. Real-World Capability

The ultimate learning progression is:

```text
Know
 ↓
Understand
 ↓
Practice
 ↓
Apply
 ↓
Create
 ↓
Transfer
 ↓
Teach
```

---

# 84. Learning Experience State Machine

Each learning experience can have a state:

```text
AVAILABLE
   ↓
STARTED
   ↓
IN_PROGRESS
   ↓
PRACTICING
   ↓
APPLYING
   ↓
DEMONSTRATING
   ↓
REFLECTING
   ↓
COMPLETED
```

With possible alternate states:

```text
PAUSED
SKIPPED
REVISIT
RETRY
ADAPTED
ABANDONED
```

---

# 85. Adaptive State

The system can change experience state when evidence indicates a different intervention is required.

Example:

```text
PRACTICING
   ↓
Repeated errors
   ↓
ADAPTED
   ↓
Targeted support
   ↓
PRACTICING
```

---

# 86. Learning Experience Object

Conceptually:

```text
LearningExperience
{
    id
    learner
    goal
    concept
    objective

    type
    difficulty
    representation

    state

    content
    activities
    assessment

    evidence
    feedback

    started_at
    completed_at
}
```

The exact schema belongs in the database architecture.

---

# 87. Experience Selection

Lumi's adaptive engine selects the next experience using:

```text
Goal
+
Knowledge state
+
Mastery
+
Retention
+
Confidence
+
Errors
+
Preferences
+
Accessibility
+
Age context
+
Time available
+
Environment
```

---

# 88. Experience Generation

Lumi should support both:

### Curated experiences

Created and reviewed by humans.

### AI-generated experiences

Generated dynamically within controlled boundaries.

---

# 89. Hybrid Content

The best system is likely:

```text
Trusted core content
+
AI personalization
+
Adaptive activities
```

rather than generating everything from scratch.

---

# 90. Content Quality

AI-generated learning experiences should be checked for:

* factual accuracy
* age appropriateness
* accessibility
* pedagogical quality
* safety
* cultural appropriateness

---

# 91. Human Oversight

High-stakes educational content should have stronger human review.

Especially:

* assessments
* certifications
* safety-sensitive learning
* child-facing content
* professional education

---

# 92. Learning Experience Templates

Lumi should support reusable templates.

Examples:

```text
Concept Introduction
Guided Practice
Independent Practice
Simulation
Project
Case Study
Debate
Reflection
Assessment
Review
```

---

# 93. Template + Adaptive Data

A template provides structure.

The adaptive engine fills it with:

```text
Appropriate concept
Difficulty
Examples
Questions
Support
```

---

# 94. Example Template

```text
CASE STUDY

Context
 ↓
Problem
 ↓
Learner decision
 ↓
Feedback
 ↓
Explanation
 ↓
Second decision
 ↓
Reflection
```

This can teach:

* business
* ethics
* medicine-related educational concepts
* leadership
* history
* cybersecLumity
* many other domains

with appropriate safety controls.

---

# 95. Accessibility Integration

Every learning experience must respect the accessibility architecture.

For example:

```text
Video
→ captions
→ transcript
→ playback controls

Animation
→ reduced-motion alternative

Long explanation
→ chunked version
```

---

# 96. Age Integration

Every experience must also respect age context.

```text
Same objective
+
different language
+
different examples
+
different autonomy
```

---

# 97. Goal Integration

A learner's purpose changes the experience.

Example:

> Learn percentages for an exam.

versus:

> Learn percentages for running a business.

The underlying knowledge may overlap, but the practice and application should differ.

---

# 98. Environment

Eventually Lumi should understand context such as:

```text
At home
At school
At work
On mobile
Offline
In a classroom
With a mentor
```

---

# 99. Device-Aware Experience

A coding project on desktop may have a different interaction model from the same concept on mobile.

Lumi should preserve learning intent while adapting the interface.

---

# 100. Notifications

Learning reminders should be supportive rather than manipulative.

Example:

> "Your Python project is ready to continue."

rather than:

> "You're losing your streak!"

---

# 101. Streaks

Lumi may optionally use streaks, but streaks should never become the primary definition of progress.

Missing a day should not erase meaningful learning history.

---

# 102. Progress

Progress should show:

```text
What you've learned
What you're practicing
What you've built
What you're improving
What comes next
```

---

# 103. Progress Is Multi-Dimensional

A learner could have:

```text
Concept mastery
Project progress
Skill development
Retention
Confidence
Application ability
```

not one arbitrary percentage.

---

# 104. The Learner Dashboard

The learner should be able to see:

```text
Current goals
Current journey
Recent learning
Skills
Projects
Evidence
Recommendations
```

---

# 105. No Information Overload

The dashboard should prioritize:

> **What matters now.**

Deep analytics can exist behind progressive disclosure.

---

# 106. The "Next Best Action"

One of Lumi's most important outputs should be:

> **Next Best Learning Action**

Examples:

```text
Review fractions
Continue Python project
Practice vocabulary
Take diagnostic assessment
Try a harder problem
Complete real-world task
```

---

# 107. Learner Choice

Lumi can recommend:

> "We recommend reviewing fractions."

but the learner can say:

> "Not now."

and choose another legitimate activity.

---

# 108. Agency

The adaptive engine should **recommend**, not unnecessarily dominate.

The learner remains an active participant.

---

# 109. Learning Modes

Lumi could provide:

```text
Guided
Independent
Challenge
Explore
Project
Review
Exam Prep
Real-World
```

---

# 110. Guided Mode

Lumi provides:

* instructions
* hints
* explanations
* structured progression

---

# 111. Independent Mode

Lumi provides:

* goal
* resources
* evidence requirements

and gives the learner more freedom.

---

# 112. Challenge Mode

The learner requests:

> "Don't help me unless I ask."

Lumi minimizes scaffolding.

---

# 113. Explore Mode

The learner follows cLumiosity.

There may be no predefined final objective.

---

# 114. Project Mode

The learner builds something substantial.

---

# 115. Review Mode

Lumi retrieves knowledge based on retention needs.

---

# 116. Exam Prep Mode

Lumi emphasizes:

```text
Known requirements
Diagnostic
Weak areas
Practice
Timed practice where appropriate
Review
```

---

# 117. Real-World Mode

Lumi emphasizes:

```text
Scenario
Decision
Action
Artifact
Reflection
Transfer
```

---

# 118. Learning Experience Example — Child

Goal:

> Learn addition.

```text
Lumi:
"Let's build a robot!"

Activity:
Choose 3 batteries.

Then:
"Your robot needs 5. How many more?"

Learner:
2

Lumi:
"Exactly!"

Next:
More complex scenario.

Evidence:
Addition competency improving.
```

---

# 119. Learning Experience Example — Teen

Goal:

> Learn JavaScript.

```text
Goal
 ↓
Diagnostic
 ↓
Variables
 ↓
Small coding challenge
 ↓
Error analysis
 ↓
Functions
 ↓
Mini project
 ↓
Reflection
 ↓
Next concept
```

---

# 120. Learning Experience Example — Adult

Goal:

> Start a business.

```text
Goal definition
 ↓
Market fundamentals
 ↓
Customer research
 ↓
Pricing
 ↓
Budgeting
 ↓
Business model
 ↓
Real-world research
 ↓
Business plan
 ↓
Feedback
 ↓
Iteration
```

---

# 121. Learning Experience Example — Lifelong Learning

Goal:

> Learn photography.

```text
Camera basics
 ↓
Light
 ↓
Composition
 ↓
Practice task
 ↓
Upload photographs
 ↓
AI feedback
 ↓
Human/peer feedback where desired
 ↓
Portfolio
 ↓
Advanced challenge
```

---

# 122. The Complete Lumi Learning Loop

```text
                 LEARNER GOAL
                      │
                      ↓
                 DIAGNOSTIC
                      │
                      ↓
               LEARNER MODEL
                      │
                      ↓
             ADAPTIVE ENGINE
                      │
                      ↓
          NEXT LEARNING EXPERIENCE
                      │
          ┌───────────┼───────────┐
          ↓           ↓           ↓
       LEARN       PRACTICE     EXPLORE
          │           │           │
          └───────────┼───────────┘
                      ↓
                    APPLY
                      ↓
                 DEMONSTRATE
                      ↓
                   REFLECT
                      ↓
                   EVIDENCE
                      ↓
               UPDATE MODEL
                      ↓
                RETENTION
                      ↓
              NEXT BEST ACTION
                      │
                      └──────────→ LOOP
```

---

# 123. The Golden Rule

Lumi should always optimize for:

> **Learning, not consumption.**

A learner watching 100 videos is not necessarily learning.

A learner who builds, explains, applies, remembers, and transfers knowledge is.

---

# 124. What Lumi Should Feel Like

When someone uses Lumi, they should feel:

> **"This was made for me."**

Not because Lumi guessed their identity.

But because it continuously adapts to:

* what they know
* what they want
* how they prefer to learn
* what they struggle with
* what they are capable of
* what they are trying to accomplish
* where they are in life

---

# 125. Final Architecture Principle

Lumi is not a:

> **Content Delivery System.**

It is a:

> **Learning Experience Orchestration System.**

Its job is to continuously coordinate:

```text
Knowledge
+
Pedagogy
+
Assessment
+
Adaptation
+
Accessibility
+
AI
+
Human agency
+
Real-world application
```

into the **best next learning experience** for each learner.

---


**Next essential document:**

# `16-GOAL-AND-JOURNEY-SYSTEM.md`

This will define one of Lumi's most important capabilities:

> A person says **"I want to learn/build/achieve X"**, and Lumi turns that intention into an adaptive, living journey rather than simply assigning them a course.
