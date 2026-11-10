# Lumi — DATA ARCHITECTURE & DATABASE SCHEMA

**Document:** `25-Lumi-DATA-ARCHITECTURE-AND-DATABASE-SCHEMA.md`
**Version:** 1.0
**Status:** Foundational Data Architecture
**Product:** Lumi

---

# 1. Purpose

This document defines the data foundation of Lumi.

Lumi is not simply storing:

> users + courses + grades.

It must represent a person's **entire learning life**.

The database therefore needs to understand:

```text
Who is this person?
        ↓
What matters to them?
        ↓
What do they want to achieve?
        ↓
What do they already know?
        ↓
How do they learn?
        ↓
What have they experienced?
        ↓
What evidence have they produced?
        ↓
What are they struggling with?
        ↓
What should they do next?
```

---

# 2. Core Data Principle

> **The learner is the center of the data model.**

Not:

> the course.

A course is something a learner experiences.

---

# 3. High-Level Data Architecture

```text
                           Lumi DATA
                              │
       ┌──────────────────────┼──────────────────────┐
       ↓                      ↓                      ↓
    IDENTITY              LEARNING               CONTEXT
       │                      │                      │
       ↓                      ↓                      ↓
   User/Profile        Goals/Journeys          Organizations
       │               Experiences             Communities
       │               Activities               Relationships
       │                      │
       └──────────────┬───────┘
                      ↓
                  EVIDENCE
                      │
                      ↓
              LEARNER STATE
                      │
          ┌───────────┼───────────┐
          ↓           ↓           ↓
       Mastery     Confidence   Retention
          │           │           │
          └───────────┼───────────┘
                      ↓
               ADAPTIVE ENGINE
                      ↓
                NEXT ACTION
```

---

# 4. Database Technology

Primary database:

> **PostgreSQL**

Supporting systems:

```text
PostgreSQL → transactional data
Redis → cache + temporary state
Object Storage → files/media
Search Index → discovery
Analytics Warehouse → large-scale analytics
```

---

# 5. Database Naming Convention

Use:

```text
snake_case
```

Tables:

```text
users
learner_profiles
learning_goals
learning_journeys
```

Primary keys:

```text
UUID
```

---

# 6. Why UUIDs

UUIDs provide:

* globally unique identifiers
* safer distributed architecture
* easier future service extraction
* less predictable resource IDs

---

# 7. Standard Entity Fields

Most entities should contain:

```text
id
created_at
updated_at
```

Where appropriate:

```text
created_by
updated_by
deleted_at
status
```

---

# 8. Soft Deletion

Important records should generally use:

```text
deleted_at
```

instead of immediately destroying the row.

But sensitive personal-data deletion must still support actual deletion/anonymization where required.

---

# 9. Domain Structure

The database is divided conceptually into:

```text
01 Identity
02 Learner
03 Organization
04 Knowledge
05 Content
06 Learning
07 Goals
08 Assessment
09 Evidence
10 Adaptive Intelligence
11 Social
12 Safety
13 AI
14 Notifications
15 Credentials
16 Billing
17 Analytics
18 Audit
```

---

# 10. IDENTITY DOMAIN

## `users`

The central account.

```text
id
email
phone
username
password_hash
account_type
status
date_joined
last_login
created_at
updated_at
```

---

# 11. `user_identities`

External identity providers.

```text
id
user_id
provider
provider_user_id
verified_at
created_at
```

Examples:

```text
Google
Apple
Institutional SSO
Passkey
```

---

# 12. `user_sessions`

```text
id
user_id
session_token_hash
device_id
ip_metadata
expires_at
created_at
revoked_at
```

---

# 13. `profiles`

Basic personal profile.

```text
id
user_id
display_name
first_name
last_name
avatar
bio
country
timezone
preferred_language
date_of_birth
created_at
updated_at
```

Sensitive fields must have stricter access controls.

---

# 14. `user_preferences`

```text
id
user_id
theme
notification_preferences
communication_preferences
privacy_preferences
content_preferences
```

---

# 15. `accessibility_preferences`

```text
id
user_id
font_scale
reduced_motion
high_contrast
captions
audio_preference
reading_support
interaction_preferences
```

---

# 16. LEARNER DOMAIN

## `learner_profiles`

```text
id
user_id
learner_type
life_stage
learning_status
learning_orientation
created_at
updated_at
```

---

# 17. `learner_interests`

```text
id
learner_id
interest
interest_type
strength
created_at
updated_at
```

---

# 18. `learner_preferences`

```text
id
learner_id
preferred_pace
preferred_content_types
preferred_session_length
preferred_feedback_style
preferred_learning_environment
```

---

# 19. Important Rule

Preferences are **signals**, not permanent labels.

Lumi should be able to learn:

> "You currently prefer visual explanations."

without concluding:

> "You can only learn visually."

---

# 20. LEARNER CONTEXT

## `learner_contexts`

Represents the environment in which learning is occurring.

```text
id
learner_id
context_type
organization_id
program_id
metadata
active_from
active_until
```

Examples:

```text
Personal
School
University
Work
Community
Professional
```

---

# 21. ORGANIZATION DOMAIN

## `organizations`

```text
id
name
organization_type
description
logo
website
status
created_at
updated_at
```

---

# 22. `organization_units`

Flexible hierarchy.

```text
id
organization_id
parent_unit_id
name
unit_type
description
```

This allows:

```text
University
 └── Faculty
      └── Department
```

or:

```text
Company
 └── Engineering
      └── Backend Team
```

---

# 23. `organization_memberships`

```text
id
user_id
organization_id
unit_id
membership_type
status
joined_at
left_at
```

---

# 24. `roles`

```text
id
name
description
scope
```

---

# 25. `permissions`

```text
id
name
resource
action
description
```

Example:

```text
learner.view
learner.edit
assessment.create
assessment.review
```

---

# 26. `role_permissions`

```text
role_id
permission_id
```

---

# 27. `membership_roles`

```text
membership_id
role_id
```

---

# 28. `invitations`

```text
id
organization_id
email
role_id
invited_by
token_hash
expires_at
accepted_at
status
```

---

# 29. KNOWLEDGE DOMAIN

This is one of Lumi's most important data systems.

---

# 30. `knowledge_domains`

```text
id
name
description
parent_domain_id
```

Examples:

```text
Science
Technology
Arts
Languages
Finance
Health
Life Skills
```

---

# 31. `concepts`

```text
id
domain_id
name
description
concept_type
difficulty
status
```

---

# 32. `concept_relationships`

```text
id
source_concept_id
target_concept_id
relationship_type
strength
```

Relationship types:

```text
PREREQUISITE
RELATED
PART_OF
SIMILAR
CONTRASTS
APPLIED_IN
```

---

# 33. `skills`

```text
id
name
description
domain_id
skill_type
```

---

# 34. `skill_relationships`

```text
id
source_skill_id
target_skill_id
relationship_type
strength
```

---

# 35. `concept_skills`

Connect knowledge to capability.

```text
concept_id
skill_id
relationship_strength
```

---

# 36. `prerequisites`

```text
id
concept_id
prerequisite_concept_id
minimum_mastery
importance
```

---

# 37. Why This Matters

Lumi can understand:

> "You are struggling with algebra."

and trace backward:

```text
Algebra
 ↓
Fractions
 ↓
Basic arithmetic
```

rather than simply assigning another algebra lesson.

---

# 38. CONTENT DOMAIN

## `content_items`

```text
id
title
description
content_type
author_id
status
visibility
created_at
updated_at
```

---

# 39. `content_versions`

```text
id
content_id
version_number
content
change_summary
created_by
created_at
published_at
```

---

# 40. `lessons`

```text
id
content_id
learning_objective
estimated_duration
difficulty
```

---

# 41. `learning_resources`

```text
id
content_id
resource_type
url
storage_key
metadata
```

---

# 42. `media_assets`

```text
id
owner_id
file_type
storage_key
file_size
duration
metadata
processing_status
```

---

# 43. `learning_experiences`

A higher-level learning unit.

```text
id
title
description
experience_type
difficulty
estimated_duration
status
```

---

# 44. `learning_experience_items`

```text
id
experience_id
item_type
item_id
sequence
required
```

---

# 45. LEARNING DOMAIN

## `learning_goals`

```text
id
learner_id
title
description
goal_type
priority
status
target_date
created_at
updated_at
```

---

# 46. `goal_targets`

```text
id
goal_id
concept_id
skill_id
competency_level
```

---

# 47. `learning_journeys`

```text
id
learner_id
goal_id
title
status
started_at
completed_at
```

---

# 48. `journey_steps`

```text
id
journey_id
step_type
reference_id
sequence
status
completed_at
```

---

# 49. `learning_paths`

```text
id
name
description
target_skill
target_level
created_by
```

---

# 50. `learner_learning_paths`

```text
id
learner_id
learning_path_id
status
started_at
completed_at
```

---

# 51. `learning_sessions`

Represents an actual learning session.

```text
id
learner_id
journey_id
started_at
ended_at
session_type
device_type
```

---

# 52. `learning_activities`

```text
id
session_id
activity_type
content_id
concept_id
started_at
completed_at
duration
```

---

# 53. ACTIVITY TYPES

Examples:

```text
Read
Watch
Listen
Practice
Quiz
Project
Discussion
Reflection
Simulation
Real-World Task
```

---

# 54. ACTIVITY EVENTS

```text
id
activity_id
event_type
timestamp
metadata
```

Examples:

```text
started
paused
resumed
completed
abandoned
hint_requested
```

---

# 55. ASSESSMENT DOMAIN

## `assessments`

```text
id
title
description
assessment_type
purpose
status
```

---

# 56. `assessment_items`

```text
id
assessment_id
question_id
sequence
points
required
```

---

# 57. `questions`

```text
id
question_type
prompt
difficulty
concept_id
skill_id
content
```

---

# 58. `question_options`

```text
id
question_id
option_text
is_correct
sequence
```

---

# 59. `assessment_attempts`

```text
id
assessment_id
learner_id
started_at
submitted_at
status
score
```

---

# 60. `responses`

```text
id
attempt_id
question_id
response
is_correct
score
response_time
submitted_at
```

---

# 61. `rubrics`

```text
id
name
description
```

---

# 62. `rubric_criteria`

```text
id
rubric_id
name
description
weight
```

---

# 63. `rubric_levels`

```text
id
criterion_id
level
description
score
```

---

# 64. EVIDENCE DOMAIN

## `evidence`

This is extremely important.

Evidence represents:

> **What has demonstrated that the learner knows or can do something?**

```text
id
learner_id
evidence_type
source_type
source_id
concept_id
skill_id
quality
created_at
```

---

# 65. Evidence Types

```text
Assessment
Project
Observation
Performance
Reflection
Portfolio
Peer Feedback
Teacher Feedback
Real-World Application
```

---

# 66. Evidence Quality

Lumi should distinguish:

```text
Weak
Moderate
Strong
Verified
```

---

# 67. `evidence_reviews`

```text
id
evidence_id
reviewer_id
review_type
decision
feedback
created_at
```

---

# 68. ADAPTIVE INTELLIGENCE DOMAIN

This is the heart of Lumi.

---

# 69. `mastery_states`

```text
id
learner_id
concept_id
mastery_score
mastery_level
confidence
last_evaluated_at
```

---

# 70. Mastery Score

Conceptually:

```text
0.00 → No evidence
0.25 → Emerging
0.50 → Developing
0.75 → Strong
1.00 → Mastered
```

The actual implementation should allow more nuanced modeling.

---

# 71. `confidence_signals`

```text
id
learner_id
concept_id
confidence_score
source
observed_at
```

---

# 72. `retention_models`

```text
id
learner_id
concept_id
retention_estimate
decay_rate
last_reviewed
next_review
```

---

# 73. `concept_elo`

```text
id
learner_id
concept_id
rating
uncertainty
updated_at
```

---

# 74. `behavior_logs`

```text
id
learner_id
activity_id
behavior_type
value
timestamp
metadata
```

---

# 75. `response_latency`

```text
id
learner_id
activity_id
response_time
expected_time
deviation
```

---

# 76. `error_patterns`

```text
id
learner_id
concept_id
error_type
frequency
severity
first_seen
last_seen
```

---

# 77. `adaptive_recommendations`

```text
id
learner_id
recommendation_type
target_type
target_id
reason
confidence
priority
status
created_at
```

---

# 78. `adaptive_decisions`

Store important adaptive decisions.

```text
id
learner_id
decision_type
inputs
decision
confidence
created_at
```

---

# 79. Why Store Decisions?

So Lumi can eventually answer:

> "Why did the system choose this learning activity?"

---

# 80. Adaptive Auditability

The system should retain enough information to reconstruct important decisions.

---

# 81. SOCIAL DOMAIN

## `communities`

```text
id
name
description
community_type
visibility
age_policy
owner_id
status
```

---

# 82. `community_memberships`

```text
id
community_id
user_id
role
status
joined_at
```

---

# 83. `discussions`

```text
id
community_id
author_id
title
body
status
created_at
updated_at
```

---

# 84. `comments`

```text
id
discussion_id
author_id
parent_comment_id
body
created_at
updated_at
```

---

# 85. `projects`

```text
id
owner_id
title
description
status
visibility
created_at
updated_at
```

---

# 86. `project_members`

```text
project_id
user_id
role
joined_at
```

---

# 87. `feedback`

```text
id
target_type
target_id
author_id
feedback_type
content
created_at
```

---

# 88. COMMUNICATION

## `conversations`

```text
id
conversation_type
created_at
```

---

# 89. `conversation_members`

```text
conversation_id
user_id
joined_at
left_at
```

---

# 90. `messages`

```text
id
conversation_id
sender_id
content
message_type
created_at
deleted_at
```

For minors, communication permissions must be enforced before message creation.

---

# 91. SAFETY DOMAIN

## `safety_reports`

```text
id
reporter_id
target_type
target_id
reason
description
status
created_at
resolved_at
```

---

# 92. `moderation_cases`

```text
id
report_id
assigned_to
severity
status
resolution
created_at
resolved_at
```

---

# 93. `blocks`

```text
id
blocker_id
blocked_id
created_at
```

---

# 94. `restrictions`

```text
id
user_id
restriction_type
reason
starts_at
expires_at
created_by
```

---

# 95. `guardian_relationships`

```text
id
guardian_id
child_id
relationship_type
status
verified_at
```

---

# 96. `consents`

```text
id
user_id
consent_type
version
status
given_at
withdrawn_at
```

---

# 97. AI DOMAIN

## `ai_interactions`

```text
id
user_id
session_id
interaction_type
model_provider
model_name
input_reference
output_reference
created_at
```

---

# 98. Do Not Store Everything

AI interactions may contain sensitive information.

Retention must be intentional.

---

# 99. `ai_feedback`

```text
id
interaction_id
user_id
feedback_type
rating
reason
created_at
```

---

# 100. `ai_generated_content`

```text
id
content_type
source_model
source_reference
review_status
approved_by
created_at
```

---

# 101. CREDENTIAL DOMAIN

## `credentials`

```text
id
learner_id
credential_type
title
issuer_id
issued_at
expires_at
status
verification_code
```

---

# 102. `credential_requirements`

```text
id
credential_id
requirement_type
requirement_reference
```

---

# 103. Credential Logic

Example:

```text
Credential
 ↓
Requires Skill A
Requires Skill B
Requires Assessment X
Requires Project Y
```

---

# 104. PORTFOLIO DOMAIN

## `portfolio_items`

```text
id
learner_id
title
description
item_type
source_type
source_id
visibility
created_at
```

---

# 105. Portfolio Evidence

A portfolio item should ideally reference actual evidence.

```text
Portfolio
 ↓
Project
 ↓
Evidence
 ↓
Skill
```

---

# 106. NOTIFICATION DOMAIN

## `notifications`

```text
id
user_id
notification_type
title
body
priority
read_at
created_at
```

---

# 107. `notification_preferences`

```text
id
user_id
channel
notification_type
enabled
```

---

# 108. BILLING DOMAIN

Future-facing.

## `subscriptions`

```text
id
user_id
organization_id
plan_id
status
started_at
expires_at
```

---

# 109. `plans`

```text
id
name
description
billing_interval
price
currency
status
```

---

# 110. `payments`

```text
id
user_id
organization_id
amount
currency
provider
provider_reference
status
created_at
```

---

# 111. AUDIT DOMAIN

## `audit_logs`

```text
id
actor_id
organization_id
action
resource_type
resource_id
metadata
ip_metadata
created_at
```

---

# 112. SYSTEM EVENTS

## `events`

```text
id
event_type
actor_id
organization_id
entity_type
entity_id
metadata
created_at
```

---

# 113. Important Events

Examples:

```text
USER_CREATED
LEARNER_CREATED
GOAL_CREATED
JOURNEY_STARTED
ACTIVITY_STARTED
ACTIVITY_COMPLETED
ASSESSMENT_SUBMITTED
EVIDENCE_CREATED
MASTERY_UPDATED
RECOMMENDATION_CREATED
PROJECT_COMPLETED
CREDENTIAL_ISSUED
```

---

# 114. Core Relationships

The most important relationship is:

```text
USER
 ↓
LEARNER
 ↓
GOAL
 ↓
JOURNEY
 ↓
EXPERIENCE
 ↓
ACTIVITY
 ↓
EVIDENCE
 ↓
MASTERY
 ↓
ADAPTIVE DECISION
 ↓
NEXT ACTIVITY
```

---

# 115. Knowledge Relationship

```text
ACTIVITY
 ↓
CONCEPT
 ↓
SKILL
 ↓
COMPETENCY
```

---

# 116. Institutional Relationship

```text
USER
 ↓
ORGANIZATION MEMBERSHIP
 ↓
ORGANIZATION
 ↓
PROGRAM
 ↓
CLASS
 ↓
LEARNING EXPERIENCE
```

---

# 117. Social Relationship

```text
USER
 ↓
COMMUNITY
 ↓
DISCUSSION
 ↓
COLLABORATION
 ↓
PROJECT
 ↓
EVIDENCE
```

---

# 118. Unified Lumi Model

```text
                         USER
                          │
                     LEARNER PROFILE
                          │
       ┌──────────────────┼──────────────────┐
       ↓                  ↓                  ↓
     GOALS            ORGANIZATIONS       COMMUNITIES
       │                  │                  │
       ↓                  ↓                  ↓
   JOURNEYS             PROGRAMS         DISCUSSIONS
       │                  │                  │
       └────────────┬─────┴──────────────────┘
                    ↓
              LEARNING ACTIVITY
                    │
                    ↓
                  EVIDENCE
                    │
          ┌─────────┼─────────┐
          ↓         ↓         ↓
       MASTERY   CONFIDENCE  RETENTION
          │         │         │
          └─────────┼─────────┘
                    ↓
             ADAPTIVE ENGINE
                    ↓
             NEXT EXPERIENCE
```

---

# 119. The Learner State

Lumi should maintain a dynamic learner state.

Conceptually:

```text
LearnerState
{
    knowledge_state
    skill_state
    mastery_state
    confidence_state
    retention_state
    behavioral_state
    goal_state
    preference_state
    accessibility_state
    context_state
}
```

This should be assembled from underlying records rather than necessarily stored as one giant table.

---

# 120. Important Distinction

Do not confuse:

**Data**

with:

**Current learner state.**

Raw evidence remains historical.

Learner state is the system's current interpretation of that evidence.

---

# 121. Example

Raw evidence:

```text
Quiz 1 → 60%
Quiz 2 → 80%
Project → Strong
Teacher → Positive
```

Current state:

```text
Mastery → 0.78
Confidence → 0.72
Retention → 0.61
```

---

# 122. Historical Integrity

Lumi should never rewrite historical evidence merely because the learner's current state changed.

---

# 123. Temporal Data

Many Lumi entities are time-dependent.

Examples:

```text
Mastery
Membership
Enrollment
Goal
Credential
Consent
Restrictions
```

Track their history.

---

# 124. Data Versioning

Important algorithms should have versions.

Example:

```text
mastery_model_version
recommendation_model_version
assessment_model_version
```

---

# 125. Why?

If Lumi changes its adaptive algorithm, we need to know:

> which model generated this recommendation?

---

# 126. Model Registry

Future table:

```text
ai_models
adaptive_models
assessment_models
```

containing:

```text
name
version
provider
configuration
status
```

---

# 127. Data Privacy Classification

Every data category should have a classification.

Example:

```text
PUBLIC
INTERNAL
PRIVATE
SENSITIVE
HIGHLY_SENSITIVE
```

---

# 128. Example

Public:

```text
Published course
```

Private:

```text
Learning goal
```

Sensitive:

```text
Learner behavioral signals
```

Highly restricted:

```text
Child safety records
```

---

# 129. Data Access Layer

Every sensitive query should respect:

```text
User
 ↓
Role
 ↓
Relationship
 ↓
Organization
 ↓
Age/Safety
 ↓
Data Classification
 ↓
Permission
```

---

# 130. Database Indexing Strategy

High-value indexes should exist on:

```text
user_id
learner_id
organization_id
concept_id
skill_id
goal_id
journey_id
created_at
status
```

---

# 131. Composite Index Examples

Potential:

```text
(learner_id, concept_id)
(organization_id, status)
(learner_id, created_at)
(community_id, created_at)
```

---

# 132. Unique Constraints

Examples:

```text
user.email
organization.slug
concept.slug
```

where appropriate.

---

# 133. Foreign Keys

All important relationships should use foreign keys.

Avoid unmanaged IDs wherever possible.

---

# 134. Cascading Deletes

Do not blindly use:

```text
ON DELETE CASCADE
```

for everything.

Lumi contains important historical data.

---

# 135. Data Integrity

The database should prevent impossible states wherever practical.

For example:

> an assessment response cannot belong to a nonexistent attempt.

---

# 136. Transaction Boundaries

Important operations should be transactional.

Example:

```text
Assessment submission
 ↓
Save response
 ↓
Evaluate
 ↓
Create evidence
 ↓
Update mastery
```

Where appropriate, these should be coordinated safely.

---

# 137. Asynchronous Processing

Heavy operations should not block the user.

Example:

```text
Submit Project
 ↓
Immediate confirmation
 ↓
Background evaluation
 ↓
Evidence generated
 ↓
Mastery updated
 ↓
Notification
```

---

# 138. Data Lifecycle

```text
Created
 ↓
Active
 ↓
Updated
 ↓
Archived
 ↓
Deleted / Anonymized
```

---

# 139. Backup Priority

Highest priority:

```text
Identity
Learning records
Evidence
Credentials
Organization records
Safety records
```

---

# 140. Data Export

Users should eventually be able to export appropriate personal learning data.

Potential format:

```text
JSON
CSV
PDF
Portable credential format
```

---

# 141. Data Import

Lumi should eventually accept:

```text
Learning records
Certificates
Course history
Skills
Portfolio evidence
```

subject to verification.

---

# 142. The Portable Learning Record

Long-term Lumi should be able to produce something conceptually like:

```text
Learner
 ├── Goals
 ├── Skills
 ├── Experiences
 ├── Evidence
 ├── Credentials
 └── Projects
```

---

# 143. The Most Important Database Principle

> **Lumi should preserve the story of learning, not merely the final score.**

A score says:

> "You got 82%."

Lumi should know:

> what the learner attempted, what they understood, where they struggled, how they improved, what they applied, and what evidence supports the current state.

---

# 144. Final Lumi Data Architecture

```text
                         Lumi
                          │
                       IDENTITY
                          │
                      LEARNER
                          │
       ┌──────────────────┼───────────────────┐
       ↓                  ↓                   ↓
     GOALS           ORGANIZATIONS        COMMUNITIES
       │                  │                   │
       ↓                  ↓                   ↓
   JOURNEYS           PROGRAMS            PROJECTS
       │                  │                   │
       └──────────────────┼───────────────────┘
                          ↓
                    EXPERIENCES
                          ↓
                     ACTIVITIES
                          ↓
                       EVIDENCE
                          ↓
                   LEARNER STATE
                          ↓
                 ADAPTIVE INTELLIGENCE
                          ↓
                   NEXT EXPERIENCE
                          ↓
                       GROWTH
```

---

# 145. Final Principle

Lumi's database should answer six fundamental questions:

### 1. Who are you?

**Identity**

### 2. Where are you?

**Context**

### 3. Where do you want to go?

**Goals**

### 4. What do you currently know and do?

**Learner State**

### 5. What proves it?

**Evidence**

### 6. What should happen next?

**Adaptive Intelligence**

That is the foundation of Lumi.

---



## What comes next

We have now reached the point where I **would not create dozens more architecture documents just for the sake of documentation**.

The next phase should be **BUILD PREPARATION**.

The next document should be:

# `26-Lumi-MVP-SCOPE-AND-IMPLEMENTATION-ROADMAP.md`

That document will take everything we've designed and answer the practical question:

> **"What exactly do we build first, what do we leave for later, and in what order do we code Lumi?"**

It will define:

```text
MVP boundary
↓
Phase 1
↓
Phase 2
↓
Phase 3
↓
Database implementation order
↓
Backend implementation order
↓
Frontend implementation order
↓
Adaptive engine implementation order
↓
AI implementation order
↓
Testing order
↓
Deployment order
↓
What NOT to build yet
```

**That is the document I recommend we do next.**
