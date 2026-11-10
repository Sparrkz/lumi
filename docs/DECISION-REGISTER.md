# LUMI — DECISION REGISTER

**Version:** 0.3.1 (v0.3 as accepted; status recording of the I13 investigation)
**Date:** 2026-11-10
**Basis:** read-only engineering audit of `docs/` (35 files, 59,161 lines) and `frontend/` (12,941 lines, 49 source files); owner direction of 2026-11-10; owner reviews of v0.1 and v0.2 of 2026-11-10.
**Status:** governing. **Accepted by the owner on 2026-11-10 as the working baseline**, subject to closing I8, I9 and I10, and to I13 before D5.2 is implemented. v0.3 is the accepted version, including the amended D2.4 (architectural acceptance vs. learning outcome) and P1.7. v0.3.1 records the I13 investigation outcome and adds I13-a–I13-e; no decision changed. Accepted decisions are not reopened for brevity. Where a document in `docs/` conflicts with an entry here, this register wins until amended in writing.

---

## 0. How to use this register

| State | Meaning |
|---|---|
| **ESTABLISHED** | Already true in the code or already decided by the owner. Do not re-litigate; compliance is testable. |
| **DECIDED** | Settled in this register. Awaiting owner sign-off on the register as a whole. |
| **INVESTIGATE** | A named question with an owner, a timebox, a deliverable and dependencies. Work that depends on it is blocked. |
| **DEFERRED** | Explicitly out of scope for v1. Not forgotten, not to be built. |

Rules:

1. No application code is written for a decision in **INVESTIGATE**.
2. A **DEFERRED** item may not be reintroduced by a feature request without amending this register.
3. Every adaptive behaviour must be traceable to a reason code defined under D6.
4. Nothing here asserts legal, regulatory or clinical compliance. Data-protection and safeguarding entries describe engineering intent only and require qualified review before any child uses the product (D8.0).
5. An unresolved matter is never promoted to a fact by silence. If it is not marked DECIDED, it is not decided.
6. **Growth boundary.** This is a register, not a specification. Amendments may add implementation-level detail only where it changes a decision. If an addition would not change what someone builds, tests or reports, it belongs in `BUILD-PLAN.md`, `EXPERIENCE.md` or code — not here. Brevity is not a reason to reopen a decision; detail is not a reason to grow the register.

### Change summary, v0.1 → v0.2

| Area | Change |
|---|---|
| §2 D2 | Ages 4–7 become a content-development target, explicitly not eligibility. Placement is evidence-based. C1, C4, C6 measurement definitions corrected. Anti-memorisation conditions added to the slice criterion. |
| §4 D4 | Uncertainty becomes a mandatory estimator obligation with defined properties, its mathematics marked unresolved (I8). Explanation of a failed probe becomes a weighted set of hypotheses, never one label (D4.4). Latency demoted to supporting evidence (D4.8). |
| §5 D5 | New first-class entity: `LearningObjective` with stable IDs (D5.2). `Concept` loses the unstructured `successCriteria[]` string array. Probes bind to objectives and carry `probeVersion` and a response-leakage rating. |
| §6 D6 | Evidence gains `supportLevel`, `instructionMode`, `instructionComprehension`, `presentationContext`, `probeVersion`, `endedReason`. Independent, prompted and demonstrated evidence are distinguished and weighted differently (D6.6). The three-version model replaces a single `estimatorVersion` on evidence (D6.7). Historical reprocessing is defined (D6.7). |
| §7 §8 | Jurisdiction becomes an assessment beginning with Nigerian requirements, not a UK/EU assumption (D7.2, I10). Guardian authentication, consent and child-profile access are separated (D7.8). Spoken-response handling and recognition-failure semantics specified (D8.7). |
| §9 D9 | Child-specific interaction requirements added (D9.8). Typography and contrast floors unchanged. |
| §10 D10 | Three measurement horizons separated: immediate, ~7 days, ~6 weeks (D10.3, D10.6). |
| §11 D11.6 | AI boundary restated: permitted as an explanation mechanism over approved content; prohibited as assessor, diagnoser or evidence source (D11.6). |
| §13 | Five new investigations: I8–I12. |
| §16 | New: conflicts between this register and the audit findings. |

### Change summary, v0.2 → v0.3

| Area | Change |
|---|---|
| §0 | Rule 6 added: a growth boundary, so the register cannot drift into implementation detail. |
| §1 P1.6 | New founding principle: Lumi discovers *how* a learner understands, not merely whether an answer is correct. |
| §2 D2.5 | Split into two evidential tiers — exploratory interaction (no rigour gate) and mastery/transfer claim (all seven conditions). |
| §4 D4.4 | Hypotheses are competing, not independent facts; abstention added as a first-class outcome (D4.4a). |
| §4 D4.7 | Ordinal bands redefined as statements about the evidence store, with prohibited readings listed. |
| §12 §13 | I13 added: entity-relationship validation as a gate before D5.2 is implemented. |
| §1 P1.7 | New founding principle: Lumi must never manufacture a successful learning outcome to satisfy a successful software demonstration. |
| §2 D2.4 | Slice acceptance split into two dimensions — architectural acceptance (required) and learning outcome (observed, not required). |

### Change summary, v0.3 → v0.3.1

Status recording only. No decision, band, tier or acceptance criterion was changed.

| Area | Change |
|---|---|
| §13 I13 | Investigation complete: **FAIL as specified.** Five blocking findings. I13 remains open and D5.2 stays gated. Report: `docs/I13-ENTITY-RELATIONSHIP-VALIDATION.md`. |
| §13 I13-a–I13-e | Five new investigations, each a decision the validation proved is required (learner-relative novelty, C4 exposure, belief state and `confidence`, signature→estimate binding, objective/probe lifecycle). |

---

## 1. Product identity and audience

**P1.1 — ESTABLISHED.** Lumi is an adaptive learning environment for children: knowledge, understanding, reasoning and practical capability. Not a programming tutor, not a school portal, not a chatbot with lessons attached.

**P1.2 — DECIDED.** First audience: children across developmental stages, explicitly including children who cannot yet read. Pre-reader support is a v1 requirement, not a later mode.

**P1.3 — ESTABLISHED.** Age informs safeguarding, presentation and pacing. It must never be treated as a measure of capability.

> **Known conflict (do not fix yet):** `frontend/src/lib/onboarding-storage.ts:551-558` derives `maturityTier` (`scaffolded` / `guided` / `autonomous`) directly from `ageRange`. Contradicts P1.3. Defect **K-01**.

**P1.4 — DECIDED.** The product promise being validated: *understand a learner independently of their ability to read or to express themselves in a conventional way.*

**P1.5 — DECIDED (v0.2).** A child is not a score awaiting calculation. No surface may present a learner as a single number, rank, band or label. Understandings, discoveries, communication and next steps are the only permitted representations.

**P1.6 — ESTABLISHED (v0.3). Founding principle: Lumi discovers *how* a learner understands, not merely whether an answer is correct.**

- A correct answer is an observation.
- An incorrect answer is an observation.
- An unrecognised response is an observation about communication.
- No single observation, and no number of observations of one kind, defines what a learner knows.

This principle binds the assessment engine (D4, D6), the learning experience, the adaptive pathway, guardian reporting (D8.5) and AI integration (D11.6). Any component that treats an answer as a verdict violates P1.6 and is defective regardless of its accuracy.

**P1.7 — ESTABLISHED (v0.3). Lumi must never manufacture a successful learning outcome to satisfy a successful software demonstration.**

- The slice, and every later milestone, is judged on the honesty of the reasoning it exhibits, not on the attainment it produces.
- Where evidence is insufficient, `undetermined` is the correct output and a valid demonstration of the architecture (D4.4a).
- Any pressure — schedule, demonstration, reporting, commercial — that would promote a band, a probe result or an explanation beyond what the evidence supports is a defect, not a shortcut.
- This principle outranks every acceptance criterion in this register. Where a criterion and P1.7 conflict, the criterion is amended.

---

## 2. First proving domain — counting and cardinality

**D2.1 — DECIDED (amended v0.2).** v1 domain is counting and cardinality, in English.

Ages 4–7 describe the **initial content-development target** for developmental appropriateness. They are **not** an eligibility rule, an entry requirement or a capability ceiling:

- No age-based gate, filter or rejection anywhere in the product.
- A child outside the range may use the same content.
- Two children of the same age may require different entry points, and both are legitimate.
- Presentation may be adjusted for developmental accessibility; the adjustment must never encode an assumption of intellectual ability.
- **Placement is determined by observed evidence** (D5, D6), never by age, never by self-report alone.

**D2.2 — DECIDED (amended v0.2). In-scope concepts (6).** Each is separately observable; none may be inferred from another.

| ID | Concept | Measurement definition (amended) |
|---|---|---|
| C1 | Verbal count sequence to 10 | Capability of *producing* a stable, conventional sequence. **Prohibited inference:** failure here says nothing about quantity understanding. C1 is a communication/production capability first and a knowledge signal only in combination with other evidence. |
| C2 | One-to-one correspondence | One count word per object, stable order, no double counting, no skipped objects. Observed by tracking which object receives which word. |
| C3 | Cardinality principle | "How many?" answered with the *last* count word, without re-counting. See D2.6 — must be distinguishable from numeral recognition. |
| C4 | Subitizing 1–3, extending to 5 | Immediate quantity recognition. **Latency is supporting evidence only** (D4.8). Requires accuracy, consistency across presentations, controlled presentation conditions (brief exposure, no opportunity to count), and the chance to show the behaviour again. |
| C5 | Numeral ↔ quantity, 0–10 | Symbol recognition and symbol→quantity matching. Does not imply C3. |
| C6 | Comparison, ordering, conservation | **Provisional single entry; decomposition required (I9).** Comparison (more/fewer/same), ordering (1–10), and conservation under rearrangement are related but separable abilities and must not be scored as one. |

**D2.3 — DECIDED. Out of scope for v1.** Addition and subtraction; composition/decomposition beyond 5; place value; written arithmetic; numerals above 10; money, time, measurement; shape and space; literacy; any programming domain.

**D2.4 — DECIDED (amended v0.3). Slice acceptance has two dimensions, which must not be conflated.**

*The slice validates the system's ability to reason responsibly about learning evidence, not its ability to guarantee a predetermined learning outcome within a fixed period.* (P1.7)

**Dimension 1 — architectural acceptance (required).** The slice passes when, with one child entering cold, the system can demonstrate that:

1. A learner can explore C3 without a Tier 2 assessment prerequisite (D2.5).
2. Evidence is captured with its support and presentation context — `supportLevel`, `probeVersion`, `instructionMode` (D6.1).
3. Teaching can happen immediately after an observation.
4. A subsequent probe can test understanding in an unfamiliar context.
5. Competing explanations are maintained as competing, not as independent facts (D4.4).
6. The engine can return `undetermined` where the evidence does not support a stronger band, without manufacturing certainty (D4.4a).
7. The next probe is selected to distinguish between surviving explanations, not to repeat the previous failure.
8. The ~7-day re-probe can be recorded and evaluated without overwriting earlier evidence (D6.7).

Also retained from v0.2: at least two channels are exercised, at least one non-verbal; at least one teaching move is driven by a reason code; and the anchor is reached without a reading-dependent placement test.

**Dimension 2 — learning outcome (observed, not required for slice acceptance).** The child may end at `emerging`, `consistent`, `robust` or `undetermined`. None of these independently determines whether the architectural slice passes, and no acceptance artefact may present attainment as evidence of architectural success. An `undetermined` result is **not** a failed slice. An engine that cannot correctly represent, explain or act on that uncertainty **is** a failed slice.

**D2.5 — DECIDED (amended v0.3). Two evidential tiers.** Scientific rigour must not tax a child before Lumi can help them. The rigour conditions apply to a **claim**, not to an interaction.

**Tier 1 — exploratory interaction (the default).** No rigour gate. A child may meet a concept through one presentation, one channel, with support, and receive teaching immediately. Exploration yields low-weight evidence: it may raise an objective to `emerging` at most (D4.7), and may **never** produce a mastery or transfer claim. It must still record `supportLevel`, `probeVersion`, `instructionMode` and `outcome` (D6.1). Authoring gates (leakage review, alternative-channel twin — D5.8) still apply at design time, because they cost nothing at runtime.

**Tier 2 — mastery or transfer claim.** Requires all of the following:

- Success across **at least two distinct object sets** and **two distinct arrangements**, not one familiar layout.
- Response position not predictive: correct answers survive randomised option placement and varied distractor counts.
- At least one condition makes counting impractical for C4-type probes, so a count-and-answer strategy cannot mimic the target behaviour.
- At least one probe cannot be answered by reading a numeral alone (guards C3 against C5).
- A **delayed** probe (~7 days) agrees with the immediate result; disagreement is recorded as memorisation or decay, not averaged away.
- The probe set has passed a **response-leakage review**: a named naive strategy must fail it.
- No probe is passable by a position, magnitude or shape heuristic (D5.8).

Until Tier 2 is satisfiable for an objective, Lumi teaches and observes freely but reports `undetermined` rather than mastery (D4.4a). No feature may require Tier 2 evidence before offering a learning experience.

**D2.6 — DECIDED (v0.2). C3 operational definition.** The learner answers "how many?" for a set of 0–10 objects with the count word corresponding to the set size, when the count was performed by that learner in that moment, without being given the answer, and without the numeral being visible. C3 is not demonstrated by numeral recognition alone (C5), by matching two identical sets, or by a response produced after an adult's demonstration (that is supported evidence — D6.6).

**D2.7 — DECIDED (v0.2).** Cardinality validates the architecture; it does not define the product's identity or roadmap.

---

## 3. Authoritative documents

**D3.1 — DECIDED. Six documents, one responsibility each, total budget ≈1,800 lines.**

| Document | Sole responsibility | Must contain | Must not contain | Existing material (verified lines) |
|---|---|---|---|---|
| `CONSTITUTION.md` | Non-negotiables, tie-breaks, refusals | 8–12 principles, each with a tie-break rule and a refusal | Pedagogy detail, UI, schemas | `Product Constitution.md` (1,198), `master/master-product-specification.md` (1,766) |
| `EXPERIENCE.md` | Phases × modalities, session shape, child interaction rules | Phase definitions, modality matrix, pre-reader interaction contract, component + state inventory, child accessibility rules (D9.8) | Learner-model maths, content lists | `LEARNING-EXPERIENCE-ARCHITECTURE.md` (2,259), `PEDAGOGICAL-ENGINE-SPECIFICATION.md` (1,694), `AGE-AND-LIFE-STAGE-ADAPTATION-SYSTEM.md` (1,896), `INCLUSIVE-…` (2,142) |
| `LEARNER-MODEL.md` | The four estimates, evidence semantics, reason codes | Definitions, invariants, hypothesis model, uncertainty handling, reason-code list, worked examples | Content, UI | `ASSESSMENT-AND-EVIDENCE-SYSTEM.md` (2,053), `ADAPTIVE-ENGINE-SPECIFICATION.md` (1,594), `Adaptive-Intelligence.md` (1,712), `Learning-Model.md` (1,304) |
| `DOMAIN-V1.md` | Cardinality content | 6 concepts, objectives with stable IDs, misconception catalogue, 25–35 probes with channels and versions, bindings, anti-memorisation review | Engine internals | **No cardinality or pre-reader content exists** (`CONTENT-AND-KNOWLEDGE-ARCHITECTURE.md` is generic, 1,727) |
| `DESIGN-SYSTEM.md` (root, rewritten) | Tokens, type floor, contrast, components, states | One token namespace, `@theme` mapping, type floor, a11y rules including D9.8, state matrix | Product philosophy | Root `DESIGN-SYSTEM.md` (468) + `frontend/src/app/globals.css` (432) |
| `BUILD-PLAN.md` | Sequence, acceptance criteria, measurement | Numbered steps with exit gates, acceptance tests, the three measurement horizons (D10.3) | Architecture essays | `MVP-SCOPE-AND-IMPLEMENTATION-ROADMAP.md` (1,731), `UI-BUILD-ORDER.md` (1,707), `SCREEN-BY-SCREEN BUILD MAP.md` (1,678) |

**D3.2 — DECIDED.** No seventh document. Schemas live in code (`content/`, `lib/`), not in prose.

**D3.3 — DECIDED. Migration is additive and reversible.** Write the six; owner accepts them; only then add one header line to each legacy doc (`> SUPERSEDED BY <doc> (<date>). Kept for reference.`); no deletion, renaming, moving or directory restructuring in v1.

**D3.4 — DECIDED.** Archiving requires an inbound-reference map first. No index, table of contents or cross-reference register exists among the 35 documents (verified). That map is prerequisite work (I6).

**D3.5 — DECIDED (owner directive).** Do not archive the 59,161 lines before D3.3–D3.4 are satisfied.

**D3.6 — INVESTIGATE (I6).** `docs/INTELLIGENCE-AND-AI-ARCHITECTURE.md` is 0 bytes. Delete after approval, or repurpose as the AI-boundary note (D11.6).

**D3.7 — DECIDED (v0.2).** `DOMAIN-V1.md` now carries an objectives layer (D5.2). The document budget rises by ~100 lines; the ~1,800 ceiling is unchanged overall.

---

## 4. Learner-model contract

**D4.1 — DECIDED. Four separate estimates per (learner, objective).** No single "mastery" scalar may exist in the model or the database.

- `knowledge[o]` — what the learner understands, independent of how they showed it.
- `expression[o][channel]` — how well they can express it through a given channel.
- `transfer[o]` — whether it survives an unfamiliar context.
- `retention[o]` — whether it survives time.

Estimates are keyed to **learning objectives** (D5.2), not to broad concepts, so that C6's components cannot collapse into one value.

**D4.2 — DECIDED (amended v0.2). Uncertainty is mandatory and must be defined, not decorative.** Every estimate carries an uncertainty quantity, an evidence count, `lastObservedAt`, and an explicit `insufficient_evidence` state. An estimate with no observations must be capable of expressing "unknown" — it may not default to a midpoint, zero, or any number.

**D4.3 — DECIDED. No fabrication.** Absence of evidence means `not yet observed`. Synthesising a concept map from onboarding answers is prohibited.

> **Known conflict (do not fix yet):** `onboarding-storage.ts:549-670` fabricates a four-node path and never writes `observedMasteries` (type declared at `onboarding-types.ts:181-189`, never populated). Defect **K-02**.

**D4.4 — DECIDED (amended v0.2). A failed probe yields a set of weighted hypotheses, not one label.** The engine maintains a normalised distribution over explanations:

`not_understood` · `understood_but_unexpressed` · `instruction_not_comprehended` · `probe_defect` · `attention_or_state` · `vocabulary_or_language` · `accessibility_or_channel_limit` · `response_unrecognised` · `memorised_or_strategy_matched`

Rules:

- No failed probe may resolve to a single explanation.
- The engine must be able to retain two or more competing explanations above a materiality threshold, and say so in `humanReadable`.
- A hypothesis set is never collapsed to one label for display to a guardian; "we are unsure between A and B, so the next probe tests B" is a valid and preferred output.
- Weights are inputs to the next probe choice, not verdicts about the child.
- `response_unrecognised` exists specifically so that a technical failure has a non-conceptual home (D8.7).
- **Competing, not independent.** Hypotheses are mutually exclusive explanations of the *same* observation, held as competing weights — never accumulated as separate facts. Adding evidence replaces weight, it does not add certainty to several explanations at once.

**D4.4a — DECIDED (v0.3). Abstention is a first-class outcome.** The engine must be able to hold no conclusion. When no hypothesis exceeds the materiality threshold, or when two or more remain close, the output is:

- `state: undetermined`, with the surviving hypotheses and their rough weights;
- `humanReadable: "We do not yet have enough evidence to tell whether … — the next step is to try …"`;
- a next probe chosen specifically to discriminate between the surviving explanations, not one that merely repeats the failure.

Forcing a conclusion is prohibited. `undetermined` is a valid, expected and frequently correct result, and must be representable in the learner model, the decision record and the guardian view.

**D4.5 — DECIDED (amended v0.2). The estimator is pure, deterministic and version-identified.** Purity is unchanged. The estimator version does **not** live on evidence rows; it lives on estimate snapshots (D6.7). Given the same events and the same estimator version, output is identical.

**D4.6 — DECIDED.** Learner model and content schema stay separate; they join on `objectiveId` / `conceptId` only.

**D4.7 — DECIDED (amended v0.3). Interim ordinal bands describe the evidence store, never the child.**

| Band | Means | Explicitly does not mean |
|---|---|---|
| `none_observed` | No evidence meeting the minimum recording conditions exists for this objective. | That the child cannot perform the task, has not encountered it elsewhere, or lacks the capability. |
| `emerging` | Some evidence exists, but it is supported, single-channel or single-presentation (Tier 1, D2.5). | Partial ability, a percentage, or progress toward a score. |
| `consistent` | Independent, repeated across at least two presentations, not yet tested in a novel context. | Mastery. |
| `robust` | Independent, repeated across presentations, survives an unfamiliar context, and agrees with at least one delayed probe (Tier 2, D2.5). | A permanent property of the child, or a rank against other children. |

Prohibited renderings: grades, percentages, progress bars toward a score, letters, stars, traffic lights, or any visual encoding that implies a fixed quantity of ability or a comparison between learners. A guardian view must phrase a band as what has been observed — *"we have not yet seen this without help"* — never as what the child is. `none_observed` must be shown as silence, not as zero.

**D4.7b — INVESTIGATE (I8). Uncertainty semantics are not yet defined.**

- **Question:** what quantity does the uncertainty represent, how is it computed, and how is it validated?
- **Required properties, whatever the mathematics:** monotonically narrows with independent evidence; widens on contradiction; expresses `insufficient_evidence` explicitly; is comparable across objectives; is calibrated against held-out observations; never displays a precision the evidence cannot support.
- **Explicitly not assumed:** that a "confidence interval" or "credible interval" is the right form. Selecting a statistical framework before a calibration dataset exists risks producing numbers that look scientific and are not.
- **Owner:** owner + implementer, jointly. **Timebox:** 2 days, after D5.2 objectives exist. **Deliverable:** one page defining the quantity, its update rule and its calibration test. **Dependencies:** D5.2, D6.7. Blocks: step 3 estimator implementation.
- **Interim rule (DECIDED):** until I8 closes, estimates are stored as **ordinal bands** (`none_observed`, `emerging`, `consistent`, `robust`) plus evidence counts, never as percentages.

**D4.8 — DECIDED (v0.2). Latency is supporting evidence only.** Response time may never independently establish or deny understanding, for any concept including C4. It is recorded, reported with the conditions under which it was measured, and may only shift weight between hypotheses that are already plausible. A quick answer may be a guess; a slow answer may be thought.

**D4.9 — DECIDED (v0.2). Channel failure updates expression before knowledge.** The default prior when a single channel fails is `understood_but_unexpressed` or `accessibility_or_channel_limit`. Knowledge moves only when evidence is independent of that channel, repeated, and consistent with a misconception signature. This is a prior, not an absolute rule — D4.4's distribution may override it, and the override must be recorded in the decision record.

**D4.10 — DECIDED (v0.2). Knowledge and channel performance are separately reportable.** A guardian view may say "consistently shows this when pointing; not yet shown when speaking" — and may not say "knows 70% of cardinality".

---

## 5. Content schema

**D5.1 — DECIDED (amended v0.2).**
`Concept { id, strand, title, childFacingStatement, objectives[], prerequisites[] }`
`successCriteria: string[]` is removed. Success criteria become objectives with stable IDs (D5.2).

**D5.2 — DECIDED (v0.2). Learning objectives are first-class and independently observable.**
`LearningObjective { id, conceptId, statement, observableBehaviour, channelOptions[], evidenceThreshold, counterExamples[], violatesIf[] }`

- A concept is not an ability; an objective is the unit of observation, estimation (D4.1) and evidence.
- IDs are stable and never reused; renaming a statement keeps the ID.
- Cardinality (C3) is a concept; "answers how-many with the last count word after counting 4–10 objects" is an objective under it.
- **I9** determines the objective decomposition of C1–C6, in particular whether C6 splits into comparison, ordering and conservation, and whether conservation belongs under C3 or C6.

**D5.3 — DECIDED.** `Misconception { id, conceptId, objectiveId?, description, observableSignatures[], contrastProbeId }`

**D5.4 — DECIDED (amended v0.2).**
`Probe { id, probeVersion, conceptId, objectiveId, channel, modality, instructionMode: narrated | iconic | demonstrated, contextNovelty: 0 | 1 | 2, presentation: { objectSetId, quantity, arrangement, distractorCount, responseLayout }, expectedResponse, passRule, errorMapping: Record<signature, misconceptionId>, supportLevelAllowed: independent | prompted | demonstrated, requiresTts, responseLeakageRisk: low | medium | high, accessibilityConstraints[] }`

**D5.5 — DECIDED. Enumerated channels, none privileged.** `tap_select`, `drag_place`, `arrange_sequence`, `mark_or_draw`, `speak`, `point_at_screen`, `build_or_stack`.
Every objective must be demonstrable through at least two channels, at least one non-verbal. Speaking is never required (D8.7).

**D5.6 — DECIDED (amended v0.2).** `Binding { phase, candidateProbeIds[], teachingMoveId, reflectionPrompt }`
`teachingMove` becomes a reference to an approved move, not free prose. A move may be rendered through approved AI assistance under D11.6; it may not be invented at runtime as fact.

**D5.7 — DECIDED.** Content is data (typed TS/JSON), validated at build time. No content literals in page components.

> **Known conflict (do not fix yet):** `frontend/src/data/studyMock.js` (140 lines, 5 scenarios) and page-level lesson literals. Defect **K-03**.

**D5.8 — DECIDED (v0.2). Authoring quality gate.** A probe is not accepted until: its objective and misconception mapping are documented; its alternative-channel twin exists; its response-leakage risk is rated; and a naive strategy has been written down that must *fail* to pass it. Any content change that alters behaviour bumps `probeVersion`; evidence from older versions remains valid but is tagged (D6.7).

---

## 6. Evidence and adaptive decisions

**D6.1 — DECIDED (amended v0.2). Evidence events are append-only, immutable, and carry their conditions.**

```
eventId, learnerId, sessionId,
probeId, probeVersion, objectiveId, conceptId,
channel, modality, contextNovelty,
instructionMode: narrated | iconic | demonstrated,
supportLevel: independent | prompted | demonstrated,
instructionComprehension: understood | unclear | unknown,
presentation: { objectSetId, quantity, arrangement, distractorCount, responseLayout },
startedAt, latencyMs, attemptIndex,
outcome: correct | partial | no_response,
endedReason: child_abandoned | external_interruption | technical_failure | guardian_stopped | completed,
observedSignatures[], hintCount, ttsReplays, instructionRepeats,
deviceClass, schemaVersion
```

`abandoned` is removed as an outcome: it conflates a child's choice, an interruption and a crash. It becomes `endedReason`. An `external_interruption` or `technical_failure` event carries no evidence about understanding and must be excluded from estimation (D6.8).

**D6.2 — DECIDED. No raw audio or video in v1.** Structured outcomes only (D8.7).

**D6.3 — DECIDED (amended v0.2). Every adaptation emits a decision record.**

```
decisionId, learnerId, inputEventIds[], action,
reasonCode, hypothesisSet[], confidence,
humanReadable, decisionEngineVersion, createdAt
```

Reason codes remain finite and enumerated (`K1_confirmed_across_channels`, `E2_expression_limited_single_channel`, `I1_instruction_not_comprehended`, `M3_misconception_signature_match`, `X1_transfer_failed_known_concept`, `R2_retention_decayed`, `P1_inconclusive_reprobe`, `U1_response_unrecognised`, `S1_supported_only_evidence`). `hypothesisSet` is required whenever the action rests on an unsuccessful probe.

**D6.4 — DECIDED.** Every decision answers four questions in `humanReadable`: what was observed, what was inferred (including competing explanations), what is being done, and what would change the inference.

> **Known conflict (do not fix yet):** `onboarding-storage.ts:594-601` generates "adaptive" copy from `correctCount` with no decision record. Defect **K-04**.

**D6.5 — DECIDED.** Estimator and decision engine are pure, I/O-free, and covered by golden fixtures before any UI consumes them.

**D6.6 — DECIDED (v0.2). Independent evidence is not supported evidence.**

- `independent` — the learner produced the behaviour with no demonstration, no hint, no answer reveal.
- `prompted` — a hint, cue or narrowing was given; recorded with `hintCount`.
- `demonstrated` — an example or model answer was shown first.

A demonstrated success is real learning evidence but may not, alone, raise `knowledge`. It raises "can do with support" and schedules an independent re-probe. Independent success may never be inferred from supported evidence, and `supportLevel` is required on every event — an event without it is invalid.

**D6.7 — DECIDED (v0.2). Three versions, three owners.**

| Version | Lives on | Bumps when |
|---|---|---|
| `schemaVersion` | evidence event | the event shape changes |
| `probeVersion` | evidence event (copied from the probe) | the activity's behaviour changes |
| `estimatorVersion` | estimate snapshot | the interpretation logic changes |
| `decisionEngineVersion` | decision record | the policy changes |

**Reprocessing rule:** evidence is immutable. A new estimator version produces new estimate snapshots carrying `computedFromEventIds[]` and `estimatorVersion`; earlier snapshots are retained, never overwritten. Decisions remain recomputable from events. Lumi must always be able to answer "what did we believe then, on what grounds, under which version, and what do we believe now".

**D6.8 — DECIDED (v0.2). Interruption is not abandonment.** `external_interruption`, `technical_failure` and `guardian_stopped` events are recorded, excluded from estimation, and reported as environment problems. Only `child_abandoned` and `no_response` may carry meaning about the learner, and `child_abandoned` must be interpreted jointly with `attention_or_state` (D4.4).

---

## 7. Backend, database, authentication

**D7.1 — ESTABLISHED.** Stay on Next.js App Router (16.3.2) with server route handlers and one ORM. No API layer, middleware, server action or database call exists today (verified: zero occurrences).

**D7.2 — DECIDED (shape). INVESTIGATE (I10) (amended v0.2).** Relational store, Postgres preferred. **Jurisdiction is not assumed.** UK/EU hosting is no longer a settled requirement; the starting point is a documented assessment of Nigerian obligations, because the initial audience includes Nigerian children.

Assessment dimensions, in order: Nigerian data-protection obligations for children's data; guardian consent validity; international transfer rules if data leaves the region; deletion and export rights; encryption at rest and in transit; access control and audit; incident response; latency for the actual user population; cost and recovery at pilot scale.

Provider selection follows the assessment. Criteria unchanged otherwise: point-in-time recovery, per-row ownership enforcement, exportable, minimal operations, under ~£30/month at pilot scale.

**D7.3 — INVESTIGATE (I2).** ORM choice follows the schema freeze (D4/D5), judged on migration ergonomics and row-level-security support.

**D7.4 — DECIDED (model). INVESTIGATE (implementation, I2).** In v1 the child has **no credentials**: no child email, password or social login. A child profile is reached through a guardian session plus a device PIN. Guardian identity uses email OTP or a managed identity provider.

**D7.5 — DECIDED.** Every query is scoped by guardian/learner ownership server-side. Client-supplied identifiers never select rows.

**D7.6 — DECIDED.** No behavioural analytics, advertising or third-party tracking SDK on any child-facing surface.

**D7.7 — INVESTIGATE (I7).** Deployment host: `.vercel/` exists and `next.config.ts:5-8` whitelists `*.trycloudflare.com`. Confirm before choosing a data region.

**D7.8 — DECIDED (v0.2). Three separable security concepts.** Guardian **authentication** (who the adult is), guardian **consent** (what they have agreed to, versioned, revocable), and **child-profile access** (how a device opens a specific child's session) are distinct. None may be implemented as a field on another:

- Revoking consent does not delete the guardian's account.
- Ending child-profile access does not revoke consent.
- A valid guardian session does not automatically grant access to every child profile.
- Consent state is checked server-side on every write that touches learner data, not only at sign-up.

---

## 8. Consent and safeguarding

**D8.0 — DECIDED (v0.2).** This register asserts no legal compliance. Entries below describe engineering intent and must be reviewed by qualified counsel in the relevant jurisdiction before a child uses the product.

**D8.1 — DECIDED.** Consent is an event, not a checkbox: `{guardianId, learnerId, scope[], version, grantedAt, revokedAt}`. Scopes are explicit and separately revocable.

**D8.2 — DECIDED.** Data minimisation: no child photographs, no raw audio, no free-text written by a child in v1.

**D8.3 — DECIDED.** Retention window defined before the pilot; export and delete must work end-to-end before the first child session.

**D8.4 — DECIDED.** A safeguarding escalation path exists in writing, even if manual and email-based, before any child session.

**D8.5 — DECIDED.** No ability labels. A guardian sees what was explored, what was observed, what Lumi will try next, and what remains unknown — never a single score or a comparison to other children.

**D8.6 — DECIDED (owner directive).** Only the parent experience required for consent, learner setup, safeguarding and an understandable progress view. No parent platform in v1.

**D8.7 — DECIDED (v0.2). Spoken responses are processed ephemerally and never stored as audio.**

Pipeline, fixed:

1. Child speaks; audio is captured in memory for the duration of classification only.
2. Recognition runs (on-device or in a transient service — vendor is I4).
3. The response is classified against the probe's expected response and error signatures.
4. Only the structured result is written: `outcome`, `observedSignatures[]`, `latencyMs`, `recognitionConfidence`.
5. Raw audio is discarded; no buffer, cache, log or crash report may retain it.

Failure semantics:

- Recognition failure produces `outcome: no_response` with `observedSignatures: ["response_unrecognised"]` and a decision hypothesis of `response_unrecognised` (D4.4). It is **never** treated as conceptual failure, and never counts toward a knowledge decrease.
- Two consecutive unrecognised responses must cause the system to offer an alternative channel automatically, without asking the child to try again verbally.
- Child speech patterns, accent and developmental pronunciation are expected to degrade recognition; a low `recognitionConfidence` reduces the evidential weight to near zero rather than producing a negative signal.
- Speaking is **never mandatory**: every objective has a non-verbal channel (D5.5), and the interface must offer it before the child attempts speech, not as an error recovery.

---

## 9. Design-system source of truth

**D9.1 — ESTABLISHED.** `frontend/src/app/globals.css` and the root `DESIGN-SYSTEM.md` agree on 27 palette values. No other design document agrees with them or with each other (four naming schemes, five documents, 9,026 lines).

**D9.2 — DECIDED.** Those two are the only design sources for v1. `docs/master/brand-guidelines.md` uses a different palette and is out of scope until deliberately reconciled.

**D9.3 — DECIDED.** One semantic token namespace, wired through Tailwind `@theme`; primitives private; components consume semantic tokens only; the dark theme overrides semantics, never primitives.

> **Known conflict (do not fix yet):** no `@theme`; 1,873 arbitrary `[var(--…)]` utilities over 63 tokens; `html.dark` redefines primitives at `globals.css:114-160`. Defect **K-05**.

**D9.4 — DECIDED. Type floor.** 16px minimum for reading text; 14px minimum for any learner-facing control label; 12px reserved for non-essential chrome; nothing below 12px. 264 of the current 268 hardcoded sizes are ≤11px.

**D9.5 — DECIDED. Contrast floor.** WCAG AA 4.5:1 for all text. Verified failures with measured replacements: muted 4.26 → `#5C6370` (5.33); subtle 2.24; ochre 2.95 → `#9A5B24` (4.75); clay 3.79 → `#9E4E37` (5.14); sky 3.80 → `#38678A` (5.33); clay-on-clay-pale 3.62 → 4.92; ochre-on-ochre-pale 3.01 → 4.86.

**D9.6 — DECIDED.** The child surface does not inherit the marketing aesthetic (10px uppercase captions, 9px labels). It gets its own density and target-size rules, implemented against the same tokens.

**D9.7 — DECIDED.** Undefined tokens are defects: `--bg-surface-elevated` (`components/study/AskLumiCommand.jsx:65`), malformed `text(--text-muted)` (`app/adaptive-engine/page.tsx:177`). Defect **K-06**.

**D9.8 — DECIDED (v0.2). Child interaction requirements.** Mandatory for every child-facing surface, and testable in review:

- **Touch targets** ≥ 44 × 44 CSS px, with spacing that prevents adjacent-target error; drag targets are forgiving (near-miss accepted, no penalty for imprecision).
- **No instruction conveyed by colour alone.** Correct/incorrect, selected/unselected and progress all carry shape, motion or symbol in addition to colour.
- **Narration** on every task, with an explicit repeat control that is reachable without reading, and no auto-hiding of the control.
- **Reduced motion** honoured (`prefers-reduced-motion`) across all animation, including celebration states.
- **Screen-reader compatibility** for every interactive element: accessible name, role, state; live regions for feedback; logical focus order. Where an activity is inherently visual, an equivalent route must exist.
- **Unambiguous feedback** after every interaction: what happened, what it meant, what comes next — no silent failure.
- **No time pressure by default.** No countdown, no auto-advance, no timer-based scoring in v1. Latency is measured (D4.8), not enforced.

---

## 10. Testing and measurement

**D10.1 — DECIDED. Five verification layers.** (1) golden-fixture tests for estimator and decision engine; (2) build-time content schema validation; (3) one end-to-end Playwright path for the slice; (4) automated accessibility checks on child and parent surfaces; (5) instrumented pilot measurement.

**D10.2 — DECIDED.** CI runs layers 1–2 on every change and 3–4 on every PR, before the intelligence work merges. None exists today (no `.github`, no runner, no test file — verified).

**D10.3 — DECIDED (amended v0.2). Three measurement horizons, three purposes.**

| Horizon | Question | Status |
|---|---|---|
| Immediate (same session) | Did the child understand this teaching experience? | Required for the slice |
| ~7 days | Is understanding still demonstrable? | The **re-probe mechanism** is required for the slice (D2.4, dimension 1 item 8); the child's result is not |
| ~6 weeks | Is there evidence of longer-term retention? | Required in the pilot plan; **not** a slice gate |

The horizons are reported separately. A performance that survives 7 days and fails at 6 weeks is a finding, not a contradiction to be averaged.

**D10.4 — DECIDED.** Pilot instrumentation: session start/end, per-probe attempts, `supportLevel`, decision reason codes, hypothesis sets, abandonment point, time to first response, TTS replay rate, channel used, and the retention re-probes at both horizons.

**D10.5 — DECIDED.** No fabricated progress, XP, levels or streaks in any pilot surface.

> **Known conflict (do not fix yet):** hardcoded "14 Day Streak" (`app/workspace/page.tsx:135`) and "+15 XP / Concept Mastered" (`:76-80`). Defect **K-07**.

**D10.6 — DECIDED (v0.2).** The analysis plan is written before data collection and states, per horizon, what would count as a finding. With n ≈ 8–12 the pilot answers only feasibility questions: can children use it unaided; does the system distinguish knowledge from expression; are probes reliable across channels; do guardians understand the report. No efficacy claim is permitted at any horizon with this sample.

---

## 11. Deferred (explicitly not v1)

- **D11.1** Parent platform beyond consent, setup and a progress view.
- **D11.2** Python, literacy, science, or any second domain.
- **D11.3** Social features, gamification, streaks, leaderboards, badges.
- **D11.4** Localisation. English only — but new code routes strings through a dictionary from day one.
- **D11.5** Character art pipeline, 3D, brand imagery.
- **D11.6** AI boundaries — see below; not deferred as a mechanism, deferred as an assessor.
- **D11.7** Migration of the marketing site's visual language into the child product.

**D11.6 — DECIDED (rewritten v0.2). What AI may and may not do.**

Permitted:

- Render, rephrase or adapt an **already-approved** explanation for a given objective, within age-appropriate constraints.
- Offer a hint drawn from the approved teaching-move set for that objective.
- Phrase a guardian-facing summary from structured decision records (never from raw events).

Prohibited, without exception:

- Determining whether a child understands a concept.
- Producing, altering or inferring learner evidence.
- Writing to the learner model or the evidence store.
- Introducing factual content that no human approved for that objective.
- Acting as the source of a `reasonCode`.

Consequence: assessment flows only through validated probes (D5) and the decision process (D6). The AI is an output channel for approved pedagogy, never a judge. Mechanism and review queue are **I11**.

---

## 12. Dependency map

### Blocking order

```
D3 (documents accepted)
   └─> D2 (domain sign-off)
          └─> I9 objectives ──> D5.2 objectives ──> D5 content authoring
D4 (model contract) ──> I8 uncertainty ──> D6 estimator implementation
I9 ──> D5.2 objectives ──> I13 entity validation (FAIL) ──> I13-a..e decisions ──> D5 content authoring
D5 (schema) ──> D6 (evidence) ──> step 3: intelligence, tested headless
I10 jurisdiction ──> D7.2 provider ──> D8 (consent enforced) ──> step 5
D9 (tokens, type, contrast, D9.8) ──> step 4: child UI
D10 (CI + fixtures) ──> gates every merge from step 3
D11.6 + I11 ──> any AI-rendered explanation in step 4
```

### What each decision blocks

| Decision | Blocks | Parallel with |
|---|---|---|
| D3 docs | all writing, D2 sign-off | I10, I5, I7 |
| D2 + I9 | D5.2 objectives, then all content | D4 wording |
| D4.1–D4.6 | D6 estimator, D7.3 ORM | D5 schema |
| D4.7b (I8) | estimator implementation — **hard gate** | content authoring |
| D5.2 | content authoring, evidence `objectiveId` | D4 |
| D6.1/D6.7 | step 3 code, D10 fixtures, reprocessing | D9 |
| I10 | D7.2 provider, then D8 enforcement | D5, D9 |
| D8.7 | any speech channel in step 4 | D9.8 |
| D9.4/D9.5/D9.8 | step 4 UI only | everything else |
| D10.6 | pilot conclusions | step 3 code |
| I13 | D5.2 implementation, all content authoring, step 3 | D9 |
| I13-a..e | D5.2 implementation, every mastery/transfer claim, C4 authoring, historical interpretability | I13 |

**Critical path to the first child session:** I10 → D7 → D8 → I9 → D5.2 → I13 (investigated, FAIL) → I13-a/b/c/d/e → D5 → D4 → I8 → D6 → D9 → step 4.

---

## 13. Open investigations

| ID | Question | Owner | Timebox | Deliverable | Depends on | Blocks |
|---|---|---|---|---|---|---|
| I1 | Which managed Postgres, which region, what cost, what recovery? | implementer | 1 day | comparison against D7.2 criteria | I10 | D7.2 |
| I2 | Guardian auth mechanism; child-profile access without child credentials; ORM choice | implementer | 1 day | decision note + rejected options | D5 schema | D7.3, D7.4 |
| I3 | Consent wording, retention window, deletion behaviour, reviewer | owner + counsel | 3 days | guardian-facing text + data map | I10 | D8, pilot |
| I4 | Speech recognition and TTS: on-device or service, cost per session, recognition failure rates for young children | implementer | 1 day | feasibility note with failure-rate estimate | D8.7 | D5.5 `speak` channel |
| I5 | Repository boundary: `frontend/` is the git root; `docs/` and `assets/` are untracked | owner | 2 hours | repo decision + migration | — | D3, all writing |
| I6 | Fate of the 0-byte `docs/INTELLIGENCE-AND-AI-ARCHITECTURE.md`; inbound-reference map | owner | 1 day | delete/repurpose note + reference map | — | D3.4 |
| I7 | Deployment host (`.vercel/`, `*.trycloudflare.com`) | owner | 2 hours | host decision | — | D7.2 |
| **I8** | **Uncertainty semantics: what the quantity is, how it updates, how it is calibrated** | owner + implementer | 2 days | one-page definition + calibration test | D5.2, D6.7 | estimator implementation |
| **I9** | **Objective decomposition of C1–C6; whether C6 splits into comparison, ordering, conservation; where conservation belongs** | owner + pedagogy reviewer | 3 days | objective tree with stable IDs and counter-examples | D2 | D5.2, all content |
| **I10** | **Jurisdiction assessment, Nigeria first: obligations, consent validity, transfers, deletion, encryption, incident response, latency, cost** | owner + counsel | 5 days | assessment document with a recommendation | — | D7.2, D8, pilot |
| **I11** | **AI explanation mechanism: retrieval from approved moves, review queue, guardrails, failure mode when unapproved content would be needed** | implementer | 2 days | mechanism note + refusal behaviour | D5.6, D11.6 | AI-rendered explanations in step 4 |
| **I12** | **Guardian comprehension of the progress view: can an adult understand a hypothesis-set report without training?** | owner | after step 5 | 3–5 guardian interviews | D8.5, step 5 | pilot design |
| **I13** | **Entity-relationship validation before D5.2 is implemented: `Concept 1..n LearningObjective 1..n Probe 1..n Evidence n..1 EstimateSnapshot`, with `Decision` referencing events and snapshots. Validate cardinalities, ownership, and the invariants that make each entity non-redundant** — **investigated 2026-11-10: FAIL.** Four-estimate and C6 independence hold by key; five blocking contradictions do not. See `docs/I13-ENTITY-RELATIONSHIP-VALIDATION.md` | owner + implementer | 1 day (used) | ER validation against three worked examples (C3 mastery, C6 comparison, C4 subitizing) plus the invariant list — delivered, verdict FAIL | I9, D5.2 draft | D5.2 implementation, content authoring, step 3 |
| **I13-a** | **Transfer novelty is learner-relative, not a probe field.** D2.5/D4.7 require an *unfamiliar* context; D5.4/D6.1 record a static `contextNovelty` copied from the probe, so repeating one activity four times is recorded as four independent novel-context observations and reaches `robust`. Choose: compute novelty per learner from exposure history, or rewrite Tier 2's transfer condition over distinct probe families | owner + content lead | 1 day | rule for how novelty is determined and where it is computed, with the resulting Tier 2 test | D5.2, D5.4, D2.5 | every `transfer`/`robust` claim; D5.8 authoring; D5.2 implementation |
| **I13-b** | **C4 is not measurable as modelled.** D2.2 requires brief exposure with no opportunity to count; D5.4 has no exposure or response-window field and D4.8 forbids latency from establishing anything, so a subitizing result cannot be distinguished from a counted one. Choose: add timing to the probe/evidence model, or redefine C4's observable behaviour without time pressure | owner + pedagogy reviewer | 1 day | C4 measurement definition that the probe schema can express and falsify | I9, D4.8 | C4 authoring; any C4 claim |
| **I13-c** | **Belief state, and the status of `confidence`.** D6.3 mandates a `confidence` value on every decision record while D4.7b prohibits numerical uncertainty before I8. No canonical current belief exists — distributions live only inside point-in-time decision records, so conflicting decisions have no reconciliation rule. Decide: recompute-on-read from events, or a stored belief record; and define `confidence` or remove it pending I8 | owner + implementer | 1 day | one page: where belief lives, its determinism, and the record field's type | D4.4, D4.4a, D6.3, I8 | guardian view; next-probe chooser; D6.3 record shape |
| **I13-d** | **Signature and hypothesis → estimate binding.** `errorMapping` targets misconceptions, and `Misconception.objectiveId` is optional, so a recognised signature may update no estimate or be attributed to the probe's own objective. `outcome: partial` is also undefined. Bind every signature and hypothesis to an explicit estimate target; resolve conservation's home (C3 vs C6) within I9 | owner + implementer | 1 day | inference-target rule + `partial` definition, tested against the conservation case | D4.4, D5.3, I9 | evidence→estimate link; I9; C3/C6 independence |
| **I13-e** | **Objective and probe lifecycle.** `LearningObjective` has no retired/split state, so after I9 splits C6 the historical snapshots reference objectives absent from content; `probeVersion` pins a number but not the definition that was shown. Give objectives split lineage and decide whether probe definitions are snapshotted or immutable | owner | 1 day | lifecycle states in D5.2/D5.8, with the historical-integrity test | I9, D6.7 | historical interpretability after I9; D5.8 tagging |

---

## 14. Known defects carried forward

| ID | Defect | Location |
|---|---|---|
| K-01 | Age derives capability tier | `onboarding-storage.ts:551-558` |
| K-02 | Learner model fabricated from strings; `observedMasteries` never written | `onboarding-storage.ts:549-670`, `onboarding-types.ts:181-189` |
| K-03 | Content hardcoded in pages; 5 static scenarios | `data/studyMock.js`, page-level literals |
| K-04 | "Adaptive" prose without a decision record | `onboarding-storage.ts:594-601` |
| K-05 | Tokens not wired; 1,873 arbitrary utilities; dark theme overrides primitives | `globals.css:114-160` |
| K-06 | Undefined and malformed tokens | `AskLumiCommand.jsx:65`, `adaptive-engine/page.tsx:177` |
| K-07 | Fabricated streak/XP/progress | `workspace/page.tsx:76-80,135` |
| K-08 | Simulated auth; every product route public | `auth/*/page.tsx`, no middleware |
| K-09 | Onboarding is 13 steps with text input only | `onboarding/page.tsx:153-169` |
| K-10 | Baseline "no wrong answer" questions scored right/wrong | `onboarding-storage.ts:519-534`, `:592` |
| K-11 | Zero tests, zero CI | repository-wide |
| K-12 | 264 of 268 type sizes ≤ 11px; five contrast failures | `src/**` per audit §4 |

**K-13 (new, v0.2).** Evidence events, as designed in v0.1, could not distinguish independent from supported success, and conflated abandonment with interruption. Corrected in D6.1/D6.6/D6.8; no code exists yet, so this is a design correction, not a migration.

---

## 15. What this register does not do

It does not modify application code, archive or restructure documentation, install dependencies, or replace the six documents. It fixes what those documents must obey and names the investigations that must close before implementation.

It is also not the place for implementation detail (rule 6). Test procedure belongs in `BUILD-PLAN.md`; interaction rules in `EXPERIENCE.md`; schemas in code. Growth of this document is a signal that a decision is being smuggled in as description.

---

## 16. Conflicts with the audit findings

The audit (read-only review of 2026-11-10) remains factually accurate about the codebase. Six of its *recommendations* are now superseded or qualified by owner review:

| Audit position | Revised position | Reason |
|---|---|---|
| "A failed probe lowers `expression[channel]` and never knowledge unless two channels fail with the same error class" | D4.9 + D4.4: a prior, overridable by a weighted hypothesis distribution | Two channels can share an accessibility or instruction problem; a rule cannot decide what evidence means |
| Contrast/type/colour findings | Unchanged (D9.4, D9.5) | Measured from source; no owner dispute |
| "Archive 59,000 lines into six documents" | D3.3–D3.5: additive, reversible, no archiving before the reference map | Preserve decisions before removing material |
| "Voice as the primary non-text channel" (implied) | D5.5 + D8.7: seven channels, none privileged, speech never mandatory | Children may not speak, may not be understood, or may prefer otherwise |
| UK/EU hosting assumed | I10: Nigeria-first jurisdiction assessment | Initial audience includes Nigerian children |
| "Six documents, ~1,800 lines" | Unchanged, plus an objectives layer in `DOMAIN-V1` (~100 lines) | Objectives are the unit of evidence |

One audit *finding* is now more serious than reported: because `ObservedMastery` is keyed to concepts rather than objectives, and C6 bundles three abilities, the existing type would have collapsed separable evidence even if it had been populated. See D4.1, D5.2, I9.
