# Lumi — TECHNICAL ARCHITECTURE & SYSTEM DESIGN

**Document:** `24-Lumi-TECHNICAL-ARCHITECTURE-AND-SYSTEM-DESIGN.md`
**Version:** 1.0
**Status:** Foundational Technical Architecture
**Product:** Lumi

---

# 1. Purpose

This document translates Lumi from a product concept into a buildable technical system.

It defines:

* application architecture
* frontend architecture
* backend architecture
* database architecture
* API architecture
* adaptive-learning infrastructure
* AI architecture
* knowledge graph
* assessment infrastructure
* content infrastructure
* identity
* permissions
* multi-tenancy
* notifications
* search
* analytics
* background processing
* storage
* secLumity
* observability
* deployment
* scalability

---

# 2. Core Technical Principle

> **Start as a modular monolith. Architect it so that individual modules can become independent services later.**

Do **not** begin Lumi as 25 microservices.

That creates unnecessary:

* deployment complexity
* debugging complexity
* infrastructure cost
* networking problems
* data consistency problems

---

# 3. Initial Architecture

```text
                         Lumi
                          │
                    ┌─────┴─────┐
                    ↓           ↓
                Web App      Mobile/PWA
                    │           │
                    └─────┬─────┘
                          ↓
                      API Layer
                          ↓
                  Lumi Application
                     Backend
                          │
       ┌──────────────────┼──────────────────┐
       ↓                  ↓                  ↓
   PostgreSQL           Redis             Object Storage
       │                  │                  │
       ↓                  ↓                  ↓
 Learning Data       Queues/Cache       Media/Files
```

---

# 4. Recommended Stack

Given Lumi's complexity, a strong initial stack is:

### Frontend

* Next.js
* React
* JavaScript
* Tailwind CSS
* accessible component system

### Backend

* Django
* Django REST Framework
* Python

### Database

* PostgreSQL

### Cache / Queue

* Redis

### Background Jobs

* Celery

### Storage

* S3-compatible object storage

Potentially:

* Cloudflare R2

### Search

Start with:

* PostgreSQL full-text search

Later:

* OpenSearch / Elasticsearch

### AI

Provider-agnostic AI service layer.

---

# 5. Why PostgreSQL

PostgreSQL is suitable because Lumi needs:

* relational data
* transactions
* complex relationships
* JSON fields
* full-text search
* strong consistency
* analytics queries

---

# 6. Database Architecture

Core domains should be separated logically.

```text
Identity
Organizations
Learning
Knowledge
Assessment
Adaptive Intelligence
Content
Goals
Social
Safety
Analytics
Billing
```

---

# 7. Do Not Create One Giant Table

Lumi should use domain-oriented models.

---

# 8. Core Identity Models

Potential models:

```text id="1b1npg"
User
Profile
Identity
Session
AuthenticationMethod
UserPreference
AccessibilityPreference
LanguagePreference
```

---

# 9. Learner Models

```text id="1u7m8f"
LearnerProfile
LearningPreference
LearningState
LearningInterest
LearningHistory
LearningContext
```

---

# 10. Organization Models

```text id="q6f5vp"
Organization
OrganizationUnit
Membership
Role
Permission
Invitation
Enrollment
```

---

# 11. Learning Models

```text id="l9e7ka"
LearningGoal
LearningJourney
LearningPath
LearningExperience
LearningActivity
LearningSession
```

---

# 12. Knowledge Models

```text id="3z3x5x"
KnowledgeDomain
Concept
ConceptRelationship
Prerequisite
Skill
SkillRelationship
KnowledgeResource
```

---

# 13. Assessment Models

```text id="d2c5v7"
Assessment
AssessmentItem
Question
Response
Attempt
Rubric
Criterion
Evidence
```

---

# 14. Adaptive Models

```text id="2t6p2f"
MasteryState
ConfidenceSignal
RetentionModel
ConceptELO
BehaviorLog
AdaptiveRecommendation
DifficultyEstimate
```

---

# 15. Content Models

```text id="8q5x1j"
Content
ContentVersion
Lesson
Exercise
Project
MediaAsset
Resource
```

---

# 16. Social Models

```text id="6x4n5v"
Community
Group
Membership
Discussion
Message
Comment
ProjectTeam
Collaboration
Feedback
```

---

# 17. Safety Models

```text id="j9c7k1"
SafetyReport
ModerationCase
Block
Restriction
Consent
GuardianRelationship
SafetyEvent
AuditLog
```

---

# 18. Analytics Models

Do not put all analytics directly into the transactional database forever.

Eventually:

```text id="s2qk4f"
Application Database
       ↓
Event Stream
       ↓
Analytics Storage
       ↓
Analytics Engine
```

---

# 19. Lumi Event Architecture

Almost everything important should produce an event.

Example:

```text id="v4u7qj"
LearnerCompletedActivity
LearnerStartedJourney
AssessmentSubmitted
MasteryUpdated
GoalCreated
ProjectCompleted
CredentialIssued
```

---

# 20. Event Structure

Example:

```text id="j0l2d5"
event_id
event_type
actor_id
organization_id
timestamp
entity_type
entity_id
metadata
```

---

# 21. Event Sourcing vs Event Tracking

Lumi does **not** need full event sourcing initially.

Use events primarily for:

* analytics
* background processing
* notifications
* adaptive updates
* integrations

---

# 22. API Architecture

Use REST initially.

Example:

```text id="r9k5fj"
/api/v1/auth/
/api/v1/users/
/api/v1/learners/
/api/v1/goals/
/api/v1/journeys/
/api/v1/content/
/api/v1/assessments/
/api/v1/progress/
/api/v1/communities/
```

---

# 23. API Versioning

Start with:

```text id="7v0a8h"
/api/v1/
```

Future breaking changes can use:

```text id="b9h3xw"
/api/v2/
```

---

# 24. API Design

Endpoints should represent resources rather than UI screens.

Bad:

```text id="b9j8a0"
/get-my-dashboard-data
```

Better:

```text id="uw0s9e"
/learners/me
/goals
/journeys
/progress
```

---

# 25. Authentication

Lumi should support:

* email/password
* passkeys
* social login where appropriate
* institutional SSO
* magic links where appropriate

---

# 26. Authentication vs Authorization

Authentication answers:

> Who are you?

Authorization answers:

> What are you allowed to do?

They must remain separate.

---

# 27. Session Architecture

Use secure sessions/tokens.

Recommended:

* short-lived access tokens
* refresh tokens
* secure cookie strategy where appropriate
* token rotation

---

# 28. Password SecLumity

Never store plaintext passwords.

Use strong password hashing.

---

# 29. Multi-Factor Authentication

MFA should be available for:

* administrators
* teachers
* organization owners
* high-privilege accounts

---

# 30. Child Accounts

Child accounts require special architecture.

Potentially:

```text id="b5j0v2"
Guardian
 ↓
Child Account
 ↓
Permissions
 ↓
Learning Environment
```

---

# 31. Guardian Consent

Where legally required, guardian consent should be represented as a formal system state.

---

# 32. Authorization Architecture

Use:

```text id="7b7c8f"
RBAC
+
Contextual Access Control
+
Age/Safety Policies
```

---

# 33. Example

A teacher can view:

> learners assigned to their class.

But cannot automatically view:

> every learner in the school.

---

# 34. Tenant Isolation

Every organization-owned resource should carry a tenant context.

Example:

```text id="x6l7nq"
organization_id
```

---

# 35. Defense in Depth

Tenant isolation should exist at:

```text id="h5q4v6"
API
 ↓
Service
 ↓
Database Query
 ↓
Authorization
```

---

# 36. Database Constraints

Where practical, enforce organizational boundaries through:

* foreign keys
* constraints
* indexes
* row-level secLumity where appropriate

---

# 37. Frontend Architecture

Recommended:

```text id="q6d3cm"
Next.js
│
├── App Shell
├── Authentication
├── Learner Experience
├── Learning
├── Goals
├── Progress
├── Projects
├── Community
├── Portfolio
├── Settings
└── Admin/Institution
```

---

# 38. Feature-Based Frontend Structure

Prefer:

```text id="s7q8vy"
features/
  learning/
  goals/
  assessments/
  community/
  portfolio/
```

rather than:

```text id="9i7fpl"
components/
  button/
  page/
  random/
```

---

# 39. Shared UI

Create reusable:

* buttons
* inputs
* dialogs
* cards
* navigation
* progress indicators
* charts
* feedback components

---

# 40. Design System

Lumi's design system should enforce:

* accessibility
* spacing
* typography
* responsive behavior
* motion preferences
* color contrast

---

# 41. Responsive Architecture

Lumi should support:

```text id="6m3s9r"
Mobile
Tablet
Desktop
Large Screens
```

---

# 42. Mobile-First

Learning often happens on phones.

Therefore mobile should not be an afterthought.

---

# 43. PWA

Lumi can eventually support PWA capabilities:

* installability
* offline content
* cached lessons
* background synchronization

---

# 44. Offline Learning

Offline learning should support selected activities.

```text id="c4d7wq"
Download
 ↓
Learn Offline
 ↓
Store Progress
 ↓
Reconnect
 ↓
Sync
```

---

# 45. Sync Conflicts

Offline synchronization requires conflict resolution.

Example:

```text id="4q4o7p"
Local State
+
Server State
↓
Conflict Resolver
↓
Merged State
```

---

# 46. Backend Architecture

Django should be organized by domain.

Example:

```text id="j3r1ps"
apps/
  identity/
  organizations/
  learners/
  learning/
  knowledge/
  assessments/
  adaptive/
  content/
  goals/
  social/
  safety/
  analytics/
  billing/
```

---

# 47. Domain Boundaries

Each domain should contain:

```text id="8e9j0x"
models
services
serializers
views
permissions
tasks
tests
```

where appropriate.

---

# 48. Business Logic

Do not put complex business logic directly inside API views.

Use service/domain layers.

---

# 49. Example

Instead of:

```text id="4x0p6h"
View
 → 500 lines of logic
```

Use:

```text id="e5t9m8"
API
 ↓
Service
 ↓
Domain Logic
 ↓
Repository/ORM
```

---

# 50. Adaptive Engine

The adaptive engine is one of Lumi's most important systems.

It should not be bLumied inside normal CRUD code.

---

# 51. Adaptive Architecture

```text id="5t2xj4"
Learner Activity
       ↓
Evidence
       ↓
Signal Extraction
       ↓
Learner State
       ↓
Adaptive Engine
       ↓
Recommendation
       ↓
Learning Experience
```

---

# 52. Adaptive Engine Inputs

Potential inputs:

```text id="d7z5z8"
Mastery
Confidence
Retention
Response Time
Error Patterns
Behavior
ELO
Goals
Preferences
Context
Accessibility
```

---

# 53. Adaptive Engine Output

Possible:

```text id="2q2g3r"
Next Concept
Next Activity
Difficulty
Scaffolding
Review
Challenge
Explanation
Break
```

---

# 54. Adaptive Engine Should Be Explainable

Lumi should be able to answer:

> "Why am I seeing this?"

Example:

> "You demonstrated strong understanding of X, so Lumi is introducing Y."

---

# 55. Recommendation Object

Conceptually:

```text id="k0w8pv"
Recommendation
{
  learner
  reason
  target
  confidence
  expected_benefit
  alternatives
}
```

---

# 56. Recommendation Confidence

The engine should know when it is uncertain.

---

# 57. Uncertainty

Instead of pretending:

> "This is definitely what you need."

Lumi can internally represent:

> confidence = 0.61

and consider multiple possibilities.

---

# 58. Adaptive Decision Engine

```text id="f3s1w2"
Evidence
 ↓
State Estimation
 ↓
Candidate Actions
 ↓
Expected Learning Value
 ↓
Safety Constraints
 ↓
Accessibility Constraints
 ↓
Choose Action
```

---

# 59. Safety Before Optimization

The adaptive engine must never optimize learning at the expense of:

* safety
* wellbeing
* privacy
* accessibility

---

# 60. Knowledge Graph

Lumi's knowledge system should model relationships between concepts.

Example:

```text id="x8g2gk"
Algebra
  ↓
Equations
  ↓
Linear Equations
  ↓
Systems
```

---

# 61. Knowledge Graph Relationships

Examples:

```text id="5q5v6x"
PREREQUISITE_OF
RELATED_TO
PART_OF
APPLIED_IN
SIMILAR_TO
CONTRASTS_WITH
```

---

# 62. Knowledge Graph Storage

Initially, PostgreSQL can store graph relationships.

Example:

```text id="m2u7f1"
concept_relationships
```

Later, if scale requires it:

* graph database
* graph processing layer

can be introduced.

---

# 63. Do Not Start With Neo4j

A dedicated graph database is not necessary for the first Lumi version.

---

# 64. Search

Search should eventually cover:

```text id="d4j0sg"
Concepts
Courses
Lessons
Projects
Communities
Resources
People
```

---

# 65. Search Architecture

Start:

```text id="a7k3nf"
PostgreSQL Search
```

Later:

```text id="5k4l0a"
Application DB
 ↓
Search Index
 ↓
OpenSearch
```

---

# 66. Semantic Search

Eventually Lumi should support:

> "I want something that teaches me how APIs work."

rather than requiring exact keywords.

---

# 67. AI Retrieval

AI should use retrieval from trusted Lumi knowledge sources.

```text id="5a2c8z"
User Question
 ↓
Retrieval
 ↓
Relevant Knowledge
 ↓
AI
 ↓
Answer
```

---

# 68. AI Should Not Invent Curriculum

Generated content should be grounded where appropriate.

---

# 69. AI Architecture

Use a provider abstraction.

```text id="8b5j2x"
Lumi AI Service
      │
 ┌────┼─────┐
 ↓    ↓     ↓
Provider A
Provider B
Local Model
```

---

# 70. Why Provider Abstraction

Lumi should not become dependent on a single AI provider.

---

# 71. AI Capabilities

Potential AI services:

```text id="f4y8z0"
Tutor
Explainer
Question Generator
Assessment Generator
Feedback Assistant
Content Generator
Translator
Accessibility Assistant
Learning Coach
```

---

# 72. AI Tutor

The AI tutor should know:

* what the learner is studying
* what they already understand
* their goals
* their preferences
* relevant knowledge

---

# 73. AI Tutor Boundary

The tutor should not simply provide answers.

It should choose between:

```text id="4p2m2e"
Hint
Question
Explanation
Example
Scaffold
Direct Answer
```

based on context.

---

# 74. Socratic Mode

Lumi can encourage learners to reason themselves.

---

# 75. Accessibility AI

AI can assist with:

* simplifying language
* generating summaries
* translation
* alternative explanations
* captions
* text-to-speech preparation
* visual descriptions

---

# 76. AI Safety

AI output should be subject to:

* moderation
* policy checks
* age-aware behavior
* domain restrictions
* hallucination mitigation

---

# 77. Assessment Engine

Assessment should be independent from the UI.

```text id="u8t4k7"
Assessment Definition
 ↓
Delivery
 ↓
Response
 ↓
Evaluation
 ↓
Evidence
 ↓
Mastery Update
```

---

# 78. Question Types

Support:

```text id="t3n8v4"
Multiple Choice
Multiple Select
True/False
Short Answer
Essay
Matching
Ordering
Problem Solving
Code
Project
Oral
Practical
```

---

# 79. Evaluation

Evaluation can be:

```text id="8h0c6m"
Automatic
Human
AI-Assisted
Hybrid
```

---

# 80. Rubrics

Rubrics should be structured.

```text id="s1q3s6"
Criterion
 ↓
Performance Level
 ↓
Evidence
 ↓
Score
```

---

# 81. Mastery Update

Assessment results should feed the adaptive engine.

---

# 82. Content System

Lumi needs a content pipeline.

```text id="w0u9e8"
Author
 ↓
Draft
 ↓
Review
 ↓
Publish
 ↓
Version
 ↓
Update
```

---

# 83. Content Versioning

Never overwrite important learning content without retaining history.

---

# 84. Content Lifecycle

```text id="7k3q0j"
Draft
 ↓
Review
 ↓
Published
 ↓
Updated
 ↓
Deprecated
 ↓
Archived
```

---

# 85. Media Storage

Store large files outside PostgreSQL.

Use object storage for:

* videos
* audio
* PDFs
* images
* project files

---

# 86. Object Storage

Potential:

> Cloudflare R2

or another S3-compatible provider.

---

# 87. CDN

Static and media content should be delivered through a CDN.

---

# 88. Image Processing

Use background workers for:

* thumbnails
* resizing
* optimization
* metadata extraction

---

# 89. Video Processing

Eventually:

```text id="g4r5r9"
Upload
 ↓
Transcode
 ↓
Multiple Resolutions
 ↓
Streaming
```

---

# 90. Background Jobs

Celery + Redis can process:

```text id="p8m3a1"
Notifications
AI jobs
Media processing
Analytics
Adaptive calculations
Email
Report generation
Search indexing
```

---

# 91. Job Reliability

Jobs should support:

* retries
* idempotency
* dead-letter handling
* monitoring

---

# 92. Idempotency

Important operations should be safe to repeat.

Example:

> issuing a credential twice should not create two credentials accidentally.

---

# 93. Caching

Cache expensive operations such as:

* frequently accessed content
* configuration
* public knowledge
* recommendations where appropriate

---

# 94. Do Not Cache Everything

Personalized data must have careful cache policies.

---

# 95. Database Indexing

Important indexes:

```text id="k3g9ph"
user_id
organization_id
concept_id
learner_id
created_at
updated_at
status
```

plus domain-specific composite indexes.

---

# 96. Read Optimization

As Lumi grows:

```text id="kq3f8r"
Transactional DB
 ↓
Read replicas
```

may be introduced.

---

# 97. Analytics Architecture

Eventually:

```text id="t0g6gq"
Events
 ↓
Event Queue
 ↓
Analytics Warehouse
 ↓
Dashboards
```

---

# 98. Observability

Lumi must monitor:

```text id="w2l7n9"
Errors
Latency
Availability
Queue health
Database health
AI failures
Search failures
SecLumity events
```

---

# 99. Logging

Use structured logs.

Example:

```text id="8n4g2k"
timestamp
service
request_id
user_id
organization_id
event
severity
metadata
```

---

# 100. Request Tracing

Use distributed tracing when Lumi eventually becomes distributed.

---

# 101. Error Monitoring

Use a dedicated error-monitoring system.

---

# 102. SecLumity Architecture

SecLumity should be built into every layer.

```text id="s7r8u2"
Client
 ↓
TLS
 ↓
API Gateway
 ↓
Authentication
 ↓
Authorization
 ↓
Application
 ↓
Database
```

---

# 103. Encryption

Use encryption:

* in transit
* at rest
* for sensitive secrets

---

# 104. Secrets

Never put:

* API keys
* database passwords
* signing keys

inside source code.

---

# 105. Secret Management

Use environment variables initially.

At scale:

* dedicated secrets manager

---

# 106. Audit Logs

Record sensitive actions:

```text id="4z1m4j"
Permission changed
User suspended
Grade changed
Credential issued
Data exported
Organization modified
```

---

# 107. Data Retention

Lumi needs explicit retention policies.

Not all data should be retained forever.

---

# 108. Data Deletion

Users should have appropriate deletion mechanisms.

---

# 109. Backup Architecture

Database backups should include:

```text id="b3j9m2"
Automated backups
Point-in-time recovery
Off-site copies
Restore testing
```

---

# 110. Disaster Recovery

Define:

```text id="q4d1v8"
RPO
RTO
Backup frequency
Recovery procedure
```

---

# 111. Deployment

Initial deployment:

```text id="4y8s4w"
Cloudflare
   ↓
Nginx
   ↓
Next.js
   ↓
Django
   ↓
PostgreSQL
```

---

# 112. Docker

Use Docker for consistent environments.

Potential containers:

```text id="g8f2h6"
frontend
backend
worker
scheduler
redis
```

Database may be managed separately.

---

# 113. Environment Separation

Have:

```text id="5j7b3q"
Development
Staging
Production
```

---

# 114. CI/CD

Pipeline:

```text id="d8k5e2"
Git Push
 ↓
Tests
 ↓
Lint
 ↓
Build
 ↓
SecLumity Checks
 ↓
Deploy Staging
 ↓
Verification
 ↓
Production
```

---

# 115. Testing Architecture

Lumi needs:

```text id="9q2j6e"
Unit Tests
Integration Tests
API Tests
Frontend Tests
End-to-End Tests
SecLumity Tests
Accessibility Tests
```

---

# 116. Adaptive Engine Testing

Especially important.

Test:

* correct recommendations
* edge cases
* insufficient evidence
* conflicting evidence
* learner changes
* accessibility preferences

---

# 117. AI Testing

Test for:

* hallucinations
* unsafe output
* age-inappropriate content
* incorrect explanations
* bias
* prompt injection
* data leakage

---

# 118. Accessibility Testing

Automate:

* keyboard navigation
* contrast
* ARIA
* focus behavior

and conduct human accessibility testing.

---

# 119. Performance Targets

Lumi should aim for:

```text id="k6t0qn"
Fast initial load
Fast navigation
Low interaction latency
Efficient mobile usage
```

Exact targets should be established dLuming implementation.

---

# 120. Scalability Strategy

Scale in stages.

### Stage 1

Single application + PostgreSQL + Redis.

### Stage 2

Separate workers + CDN + optimized database.

### Stage 3

Read replicas + search infrastructure + analytics warehouse.

### Stage 4

Extract genuinely necessary services.

---

# 121. Future Services

Potential independent services:

```text id="t0d5cf"
Adaptive Engine
AI Platform
Search
Media Processing
Notifications
Analytics
Credentialing
```

Only extract them when justified.

---

# 122. Service Boundary Rule

> **Extract a service because there is a real scaling or ownership reason—not because microservices look impressive.**

---

# 123. Lumi Infrastructure

Long-term:

```text id="d7w2z3"
                 Cloud / Edge
                      │
                   CDN/WAF
                      │
                  API Layer
                      │
             Application Platform
                      │
       ┌──────────────┼──────────────┐
       ↓              ↓              ↓
   PostgreSQL       Redis         Object Store
       │              │              │
       ↓              ↓              ↓
 Knowledge       Background      Media
 Learning        Processing
       │
       ↓
Adaptive Intelligence
       │
       ↓
AI / Search / Analytics
```

---

# 124. Core Technical Principle

Lumi's architecture should allow:

> **One learner to move between every learning environment without losing the continuity of their learning journey.**

---

# 125. The Lumi Technical Loop

```text id="f9c2n4"
IDENTITY
   ↓
CONTEXT
   ↓
GOAL
   ↓
LEARNING
   ↓
EVIDENCE
   ↓
ADAPTIVE ENGINE
   ↓
NEXT EXPERIENCE
   ↓
PROGRESS
   ↓
REAL-WORLD APPLICATION
   ↓
NEW EVIDENCE
   ↓
ADAPT AGAIN
```

---

# 126. Final Technical Philosophy

Lumi should be:

**Modular**

so it can evolve.

**Learner-centered**

so institutions don't control the architecture.

**Adaptive**

so every learner gets an appropriate experience.

**Inclusive**

so different minds and abilities are supported.

**Safe**

especially for children.

**Interoperable**

so Lumi can connect with the wider world.

**Observable**

so we know when things break.

**Scalable**

so the architecture can grow from thousands to millions of learners.

---

## Next document

**`25-Lumi-DATA-ARCHITECTURE-AND-DATABASE-SCHEMA.md`**

This one should be the **last major architecture document before we move into actual implementation planning**. It will translate the architecture into the concrete data model: **every major entity, relationship, database table, field, foreign key, indexes, learner state, mastery records, knowledge graph relationships, organizations, permissions, assessments, evidence, goals, journeys, content, AI interactions, social data, safety records, and audit data.**
