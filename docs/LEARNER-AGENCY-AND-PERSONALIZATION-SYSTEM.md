# Lumi — Learner Agency & Personalization System

**Document:** `18-LEARNER-AGENCY-AND-PERSONALIZATION-SYSTEM.md`
**Version:** 1.0
**Status:** Foundational Architecture
**Product:** Lumi

---

# 1. Purpose

Lumi is adaptive, but **adaptation must never mean control**.

The system should continuously personalize learning while preserving the learner's:

* choice
* autonomy
* privacy
* identity
* pace
* preferences
* cLumiosity
* ability to disagree with the system

The fundamental principle is:

> **Lumi adapts to the learner. The learner does not have to become someone the algorithm expects.**

---

# 2. Core Principle

Lumi should behave like:

> **A highly intelligent guide.**

Not:

> **A system that dictates what the learner must do.**

The adaptive engine recommends.

The learner ultimately controls their learning wherever safety, institutional requirements, or other legitimate constraints do not require otherwise.

---

# 3. The Agency Spectrum

Different situations require different levels of system guidance.

```text
LOW GUIDANCE
     │
     ↓
Explore freely
     ↓
Suggested next step
     ↓
Guided journey
     ↓
Structured plan
     ↓
Required pathway
     │
     ↓
HIGH GUIDANCE
```

Lumi should dynamically determine appropriate guidance while allowing the learner to understand and modify it.

---

# 4. Personalization

Personalization means adapting the experience to the learner.

It can include:

```text
Goal
Knowledge
Skill
Mastery
Confidence
Retention
Pace
Accessibility
Interests
Context
Available time
Preferred interaction
```

---

# 5. Personalization Must Not Become Profiling

Lumi should avoid making unnecessary assumptions such as:

> "You are this type of person."

Instead:

> "This approach appears to be helping you."

Preferences should remain changeable.

---

# 6. No Permanent Learning Labels

Lumi should not permanently label someone:

* visual learner
* auditory learner
* slow learner
* weak learner
* gifted learner

Instead, it should track evidence such as:

```text
"Examples have recently produced better performance."
```

---

# 7. Preference vs Evidence

Lumi should distinguish between:

### Learner preference

> "I like videos."

and:

### Learning evidence

> "Short explanations followed by practice currently produce stronger performance."

Both are useful.

Neither should completely override the other.

---

# 8. Learner Preferences

Possible preferences:

```text
Explanation depth
Practice frequency
Session length
Challenge level
Feedback style
AI interaction style
Media preferences
Interface density
Notification frequency
```

---

# 9. Preference Categories

### Content preferences

* examples
* stories
* diagrams
* text
* video
* audio
* simulations

### Interaction preferences

* guided
* independent
* conversational
* challenge-based

### Feedback preferences

* immediate
* after attempt
* detailed
* concise

---

# 10. Preferences Are Soft Constraints

If a learner says:

> "I prefer short explanations."

Lumi should generally respect that.

But if evidence shows that a deeper explanation is necessary:

> "This one needs a little more detail. Want the short version first?"

The learner remains in control.

---

# 11. Hard Constraints

Some settings should be treated as stronger requirements.

Examples:

```text
Accessibility requirements
Safety constraints
Institutional requirements
Age-related protections
Privacy settings
```

---

# 12. Learner Controls

The learner should be able to control:

```text
Pace
Difficulty
Session length
Learning mode
AI behavior
Notifications
Accessibility
Privacy
Goals
Recommendations
```

---

# 13. Pace Control

Learners can select:

```text
Relaxed
Balanced
Fast
Intensive
Adaptive
```

---

# 14. Adaptive Pace

Lumi can recommend:

> "Your current pace appears sustainable."

or:

> "You're progressing quickly through this topic."

But it should not create anxiety around speed.

---

# 15. No Speed Competition

Lumi should not encourage unhealthy comparisons between learners based on:

* speed
* hours
* streaks
* number of lessons

---

# 16. Difficulty Control

The learner can request:

> "Make this harder."

or:

> "I need something simpler."

The system should adapt accordingly.

---

# 17. Difficulty Is Multi-Dimensional

Difficulty can mean:

```text
More concepts
More steps
Less scaffolding
More unfamiliar context
Greater ambiguity
More complex problems
Less assistance
```

Lumi should adjust the relevant dimension instead of simply making questions "harder."

---

# 18. Challenge Mode

Learners can request:

> **Challenge me.**

Lumi increases difficulty and reduces unnecessary scaffolding.

---

# 19. Support Mode

Learners can request:

> **Help me through this.**

Lumi increases:

* hints
* examples
* explanations
* intermediate steps

---

# 20. Learner Override

If Lumi recommends:

> "Review fractions."

The learner should be able to say:

> "I already understand this."

Lumi can:

1. ask for evidence
2. provide a short diagnostic
3. update the learner model

---

# 21. Skip

Learners should be able to skip certain experiences where appropriate.

But Lumi should communicate consequences when relevant.

Example:

> "You can skip this. It covers a prerequisite used later."

---

# 22. Try Anyway

The learner should be allowed to attempt advanced material.

Example:

> "This is normally recommended later, but you can try it now."

---

# 23. Learner CLumiosity Overrides

If someone suddenly asks:

> "Can we learn black holes?"

Lumi should be able to temporarily branch away from the current journey.

---

# 24. Side Journeys

A side journey can exist without destroying the main journey.

```text
MAIN JOURNEY
     │
     ├── SIDE JOURNEY
     │
     └── MAIN JOURNEY
```

---

# 25. Returning to a Journey

Lumi should preserve:

* original position
* context
* unfinished work
* next action

---

# 26. Learning Queue

Learners can maintain:

```text
Now
Next
Later
Someday
```

for learning goals and ideas.

---

# 27. Learning Inbox

Questions and ideas can be captured quickly.

Example:

> "How do airplanes stay in the air?"

Save it.

Lumi can later turn it into an exploration.

---

# 28. Personal Learning Map

The learner should eventually have a visual representation of:

```text
Goals
Skills
Knowledge
Projects
Interests
Achievements
```

---

# 29. Personalization Dashboard

Lumi should eventually provide a place where learners can see:

> **How Lumi adapts to me.**

For example:

```text
Your preferences
Your active goals
Your accessibility settings
Your learning pace
Your AI preferences
```

---

# 30. Explain My Adaptation

A learner can ask:

> **"Why are you recommending this?"**

Lumi should explain in understandable language.

Example:

> "You made several errors with fractions involving denominators, so we're practicing that specific area."

---

# 31. Explain My Progress

The learner can ask:

> "Why does Lumi say I'm developing in this skill?"

Lumi should point to evidence.

---

# 32. Evidence Transparency

Avoid:

> "Our AI says you're weak at algebra."

Prefer:

> "In your last five algebra problems, you correctly solved the first step but often made errors when simplifying expressions."

---

# 33. No Shame Labels

Lumi should use neutral language.

Prefer:

```text
Beginning
Developing
Functional
Proficient
Strong
```

instead of:

```text
Bad
Weak
Poor
Failed
```

---

# 34. Failure Is Data

A failed attempt should mean:

> **We learned something about the current state.**

Not:

> **The learner is a failure.**

---

# 35. Learner Identity

Lumi should not define a person by their academic performance.

A learner can be:

* strong in one area
* developing in another
* cLumious about something else

without the system reducing them to a score.

---

# 36. Personalization Across Age

The interface should adapt to life stage.

But the learner's agency should remain.

---

# 37. Child Agency

Children may receive more structure.

For example:

```text
Clear instructions
Smaller choices
Visual options
Guided activities
```

But they should still have meaningful choices.

---

# 38. Teen Agency

Teens should progressively receive more:

```text
Choice
Goal ownership
Project freedom
Self-directed exploration
```

---

# 39. Adult Agency

Adults should generally have extensive control over:

```text
Goals
Pace
Schedule
Learning mode
Depth
Projects
```

---

# 40. Neurodivergent Agency

Lumi should allow learners to customize their experience without requiring them to justify themselves.

Examples:

```text
Reduce visual motion
Reduce interface clutter
Increase predictability
Use shorter chunks
Change presentation format
Control notifications
```

---

# 41. Accessibility Is Not a Separate Experience

Accessibility should be built into the same learning engine.

The learner should not feel like they entered a "special mode."

---

# 42. Personalized Representation

The same concept can be presented as:

```text
Text
Diagram
Example
Story
Simulation
Conversation
Step-by-step explanation
```

Lumi chooses based on context and learner preference.

---

# 43. Representation Choice

The learner can always say:

> "Show me another way."

---

# 44. AI Personality

Lumi should eventually let learners choose how the AI interacts.

Examples:

```text
Calm
Concise
Encouraging
Socratic
Detailed
Direct
Playful
Professional
```

These should change communication style—not the quality or safety of reasoning.

---

# 45. AI Should Not Manipulate

Lumi should never intentionally use:

* guilt
* fear
* shame
* emotional dependency
* artificial urgency

to increase engagement.

---

# 46. AI Relationship Boundary

The AI is:

> **A learning companion and tool.**

It should not encourage emotional dependency or pretend to be a human relationship.

---

# 47. "Don't Tell Me Yet"

Learners can request:

> "Don't give me the answer."

The AI should switch to coaching.

---

# 48. "Just Explain"

The learner may simply want information.

Lumi should not force a quiz.

---

# 49. "Quiz Me"

Lumi can switch to retrieval practice.

---

# 50. "Challenge Me"

Lumi can increase difficulty.

---

# 51. "Let's Build"

Lumi switches into project mode.

---

# 52. "Teach Me"

Lumi enters structured instruction.

---

# 53. "Let Me Explore"

Lumi removes unnecessary structure.

---

# 54. Personalization Based on Context

The same learner may need different experiences depending on:

```text
Goal
Time
Location
Device
Energy
Prior knowledge
Deadline
```

Lumi should treat these as contextual signals where available and appropriate.

---

# 55. Time-Aware Learning

If the learner says:

> "I only have five minutes."

Lumi should produce a meaningful micro-experience.

---

# 56. Deep Work

If the learner has an hour:

Lumi can construct:

```text
Concept
Practice
Project work
Reflection
```

instead of filling the hour with more videos.

---

# 57. Energy-Aware Interaction

Eventually learners may optionally indicate:

> "I'm tired."

Lumi can reduce unnecessary cognitive load.

This should be a learner-controlled input, not an inferred diagnosis.

---

# 58. No Psychological Diagnosis

Lumi can respond to stated preferences and behavior signals.

It should not diagnose:

* ADHD
* autism
* dyslexia
* depression
* anxiety
* other conditions

---

# 59. Personalization Signals

Potential signals include:

```text
Explicit preferences
Interaction history
Performance
Response patterns
Time availability
Goal requirements
Accessibility settings
Learner feedback
```

---

# 60. Signal Confidence

Lumi should not treat every signal as fact.

For example:

> Learner skipped two videos.

This does not automatically mean:

> "Learner dislikes video."

It might mean:

* they were busy
* they already knew the material
* they preferred the text
* they wanted to move faster

---

# 61. Personalization Confidence

Every inferred preference should have a confidence level.

Conceptually:

```text
Preference:
Short explanations

Confidence:
Medium

Evidence:
Repeated learner selections
```

---

# 62. Learner Feedback

Lumi should directly ask occasionally:

> "Was this helpful?"

Possible answers:

```text
Yes
Somewhat
No
```

Then:

> "What should we change?"

---

# 63. Feedback Is Evidence

Learner feedback should influence personalization.

---

# 64. Correction of the Learner Model

The learner should be able to say:

> "That's not me."

Lumi should update the model.

---

# 65. Personalization Memory

Lumi should separate:

### Stable preferences

> "I prefer captions."

### Temporary context

> "I only have 10 minutes today."

### Learning evidence

> "Learner demonstrates strong fraction mastery."

These must not be confused.

---

# 66. Privacy Controls

Learners should eventually be able to control:

```text
What is remembered
What is shared
What is used for personalization
What is deleted
```

---

# 67. Data Minimization

Lumi should collect only information necessary to provide the service.

---

# 68. Personalization Without Surveillance

The system should not need to constantly monitor the learner's:

* camera
* microphone
* location
* environment
* emotions

to be adaptive.

---

# 69. Optional Signals

Some advanced signals can be opt-in.

The learner should understand their purpose.

---

# 70. Family Context

For children, guardians may manage certain settings.

However, the child should still have appropriate age-based agency.

---

# 71. Guardian Controls

Possible controls:

```text
Learning goals
Time boundaries
Content permissions
Privacy
Progress visibility
Communication settings
```

---

# 72. Guardian Visibility

Guardians should generally see meaningful progress rather than every individual interaction.

For example:

> "Reading comprehension is developing."

rather than:

> "Your child spent 14 minutes on question 37."

---

# 73. Teacher Controls

Teachers may define:

```text
Required outcomes
Deadlines
Assignments
Available resources
Assessment requirements
```

Lumi adapts the learner's path within those constraints.

---

# 74. Teacher vs Algorithm

The teacher can override or annotate recommendations.

Lumi should preserve an audit trail where appropriate.

---

# 75. Institutional Constraints

A school may require:

> "Every student must demonstrate competency X."

Lumi can still personalize:

```text
How they learn X
How much support they receive
Which examples they see
How they practice
```

---

# 76. Agency Under Constraints

The principle becomes:

> **Same destination, flexible route.**

---

# 77. Recommendation System

Lumi should provide recommendations such as:

```text
Continue
Review
Practice
Explore
Challenge
Apply
Rest
```

---

# 78. Recommendation Ranking

Recommendations can consider:

```text
Goal relevance
Learning gap
Retention
Deadline
Learner preference
Difficulty
Available time
Recent activity
```

---

# 79. Recommendation Explanation

Every important recommendation should have:

> **Why this?**

---

# 80. Recommendation Override

Learner can choose another option.

---

# 81. Recommendation Learning

Lumi should learn from choices.

If a learner frequently chooses:

> "Explore"

Lumi should understand that exploration is meaningful to them.

But it should not assume they never want structure.

---

# 82. Choice Architecture

Lumi should provide enough options for agency without creating decision paralysis.

Instead of:

> 50 choices.

show:

```text
Recommended
Alternative
Explore
```

with:

> See more.

---

# 83. Personalization Levels

Lumi can conceptually have:

```text
Level 0 — Standard
Level 1 — Preference-aware
Level 2 — Performance-aware
Level 3 — Fully adaptive
```

The learner can control how much personalization is used where appropriate.

---

# 84. Standard Mode

Minimal personalization.

Useful for users who want a predictable experience.

---

# 85. Preference-Aware

Uses explicit settings.

---

# 86. Performance-Aware

Uses evidence to adapt difficulty and sequencing.

---

# 87. Fully Adaptive

Uses the full learner model within privacy and safety constraints.

---

# 88. Reset Personalization

The learner should be able to say:

> **Reset my learning preferences.**

---

# 89. Reset Journey

A learner may also restart a journey without deleting their historical evidence.

---

# 90. Historical Evidence

Previous evidence can remain available even if the current journey changes.

---

# 91. Personalization Audit

Eventually Lumi could provide:

> **How Lumi personalizes your learning**

showing:

```text
Preferences
Evidence
Adaptations
Recommendations
```

---

# 92. Example

```text id="tquc4s"
You prefer:
Short explanations

Lumi observed:
Examples improve your performance

Current adaptation:
Short explanation → example → practice
```

---

# 93. No Hidden Psychological Model

Lumi should not create opaque personality scores that learners cannot understand or challenge.

---

# 94. Adaptation Rules

Conceptually:

```text
IF
learner demonstrates mastery

THEN
reduce redundant practice

UNLESS
retention evidence indicates review is needed
```

---

# 95. Another Rule

```text
IF
learner repeatedly struggles

THEN
diagnose likely cause

THEN
provide targeted support

NOT
simply lower everything
```

---

# 96. Another Rule

```text
IF
learner explicitly requests challenge

THEN
increase challenge

WHILE
preserving the intended competency
```

---

# 97. Another Rule

```text
IF
learner rejects a recommendation

THEN
respect choice

AND
use feedback as evidence

NOT
punish the learner
```

---

# 98. Another Rule

```text
IF
learner's goal changes

THEN
recalculate journey

NOT
force completion of the old path
```

---

# 99. Personalization Architecture

```text id="qv6w7b"
                 LEARNER
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
   Preferences   Evidence    Context
        │           │           │
        └───────────┼───────────┘
                    ↓
             LEARNER MODEL
                    ↓
            ADAPTIVE ENGINE
                    ↓
          PERSONALIZED EXPERIENCE
                    ↓
                FEEDBACK
                    ↓
              MODEL UPDATE
                    ↺
```

---

# 100. Learner Agency Architecture

```text id="5l3xg9"
             LEARNER INTENT
                   │
                   ↓
              GOAL ENGINE
                   │
                   ↓
           ADAPTIVE ENGINE
                   │
             RECOMMENDATION
                   │
        ┌──────────┴──────────┐
        ↓                     ↓
    ACCEPT                  OVERRIDE
        │                     │
        └──────────┬──────────┘
                   ↓
             EXPERIENCE
                   ↓
                EVIDENCE
                   ↓
             LEARNER MODEL
                   ↓
              NEXT ACTION
```

---

# 101. The Central Rule

The adaptive engine should answer:

> **"What would probably help this learner most?"**

The learner should be able to answer:

> **"Yes."**

or:

> **"No. I'd rather do this."**

Both are legitimate inputs.

---

# 102. Lumi Should Never Become a Cage

The system must never create:

> "Your AI-generated learning path says you can't learn that yet."

Instead:

> "This may be challenging based on your current evidence. Would you like to try it?"

---

# 103. Freedom to Fail

Learners should be allowed to attempt difficult things.

Trying something beyond their current demonstrated level is itself useful evidence.

---

# 104. Freedom to Explore

Not every activity needs to contribute directly to a goal.

CLumiosity is valuable.

---

# 105. Freedom to Change

Learners can change:

* goals
* interests
* pace
* preferences
* direction

without feeling like they "failed."

---

# 106. Freedom to Stop

A learner can pause or abandon a journey.

Lumi should preserve the work without guilt.

---

# 107. Freedom to Return

They can return months or years later.

---

# 108. Personalization Philosophy

The deepest principle is:

> **Personalization should remove unnecessary friction, not remove meaningful challenge.**

---

# 109. Adaptive Learning Philosophy

And:

> **Adapt the path, not the learner's worth.**

---

# 110. Final Lumi Principle

Lumi should know enough about the learner to help them.

But never so much that the learner loses control.

```

## Next important document

# `19-Lumi-INTELLIGENCE-AND-AI-ARCHITECTURE.md`

This is the next major document because we now need to define **the actual intelligence behind Lumi**: the AI tutor, adaptive decision engine, learner-model reasoning, recommendation engine, diagnostic intelligence, content generation, safety layer, memory, tool use, human escalation, and—most importantly—**how all these AI systems work together without turning Lumi into an uncontrolled chatbot.**
