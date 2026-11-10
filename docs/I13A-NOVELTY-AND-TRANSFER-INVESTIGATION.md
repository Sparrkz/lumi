# I13-a — LEARNER-RELATIVE NOVELTY AND TRANSFER

**Investigation:** I13-a (raised by `I13-ENTITY-RELATIONSHIP-VALIDATION.md`, finding F-01).
**Date:** 2026-11-10.
**Owner of the decision:** owner + content lead (unchanged).
**Standard:** the same as I13 — validate against three worked examples, preserve P1.7, invent no decisions.
**Status:** investigation complete. **No decision taken. The Decision Register is unchanged by this document.**

---

## 1. Scope, and what changed during the investigation

I13-a was raised as a narrow question: `contextNovelty` is an authored field copied onto every event, so repetition is recorded as novelty and `robust` is reachable without transfer. The proposed remedy was "compute novelty per learner, or restate Tier 2 over distinct probe families".

That framing turned out to be too small. Two further facts were established while investigating:

1. **The band ladder has no rung for transfer.** D4.7 defines four bands — `none_observed`, `emerging`, `consistent`, `robust`. `consistent` means "independent, repeated across at least two presentations, *not yet tested in a novel context*"; `robust` bundles transfer, repetition and delayed agreement into one rung. There is no band that means *"this child has demonstrated the understanding in a new situation, but we have not yet confirmed it holds a week later"* — a real and common state. A learner in that state is currently reported as `consistent`, which understates them, or `robust`, which overstates them. Neither is honest.
2. **"Presentation" is not defined anywhere.** `consistent` rests on "at least two presentations"; D2.5 rests on "two distinct object sets and two distinct arrangements". But `presentation` in D6.1 is a compound of five fields (`objectSetId, quantity, arrangement, distractorCount, responseLayout`), and no rule says which of those changing makes something a *different presentation*. Two activities that differ only in quantity are currently as "different" as two that differ in object set.

So the finding is not that one field is authored in the wrong place. It is that **Lumi has no definition of "the same situation" and no rung on the ladder for transfer**, and every claim from `consistent` upward depends on both. That is why this report answers the five questions in §4 before proposing any rule.

### 1.1 What this investigation does not touch

- It does not decide where the current belief lives, or what `confidence` means. That is I13-c.
- It does not decide whether evidence reaches the right estimate. That is I13-d.
- It does not decide objective lifecycle. That is I13-e.
- It does not propose numeric uncertainty. D4.7b and I8 stand.

Where a question unavoidably crosses into those, §10 records it as open rather than deciding it.

---

## 2. Verdict

**RULE ESTABLISHED — DECISION PENDING.** I13-a is **not closed**.

A rule now exists that (§5) determines novelty per learner from fields Lumi already records, and (§6) can be falsified by replaying an event log. That is the deliverable I13-a asked for: "a rule for how novelty is determined and where it is computed, with the resulting Tier 2 test."

What remains is not analysis. It is five decisions the owner must take (§9), of which two — whether channel and response mode are context dimensions — change the rule's output. This report makes those decisions *answerable*, with counterexamples and expected outcomes. It does not take them.

One consequence of §1 must be recorded plainly: **I13-a cannot be closed without amending D4.7**, because a band named `transfer` does not exist and the honest reporting of a transferred-but-not-yet-delayed-confirmed learner requires one. That is a change to a DECIDED entry, so it needs owner approval in writing. It is proposed in §9, not applied.

---

## 3. The four distinctions, and where the current model can and cannot hold them

The owner's framing, tested against the register:

| Distinction | Definition (owner's terms) | Current model | Holds? |
|---|---|---|---|
| **Familiarity** | Succeeds with an activity encountered before | `emerging` at best, or folded into `consistent` | **No.** `emerging` is defined as *supported, single-channel or single-presentation* (Tier 1) — that is a statement about support, not familiarity. A child's fifth independent success at one activity is `consistent`; a child's first supported success is `emerging`. The two axes are conflated. |
| **Consistency** | Demonstrates the ability repeatedly | `consistent` | **Partly.** "At least two presentations" is undefined (§1), and repetition of one activity satisfies it by any reading. |
| **Transfer** | Demonstrates the underlying understanding in a meaningfully different situation | No band; a component of `robust` | **No.** No band can report it, and "meaningfully different" is undefined. |
| **Robust** | Remains demonstrable across sufficiently varied conditions | `robust` | **Not as specified.** Reachable by four replays of one activity (F-01). |

The owner's four distinctions are therefore all present in intent and none fully representable in the model. Two are missing as concepts (familiarity, transfer), two are present but undefined at their load-bearing word (repetition, meaningful difference).

### 3.1 Why this is not cosmetic

Three consumers read the band: the guardian view (D8.5), pathway selection, and the next-probe chooser. Each needs a different thing from it.

- The **guardian view** must not overstate. Reporting a repeated-activity learner as `robust` tells a parent their child has generalised an understanding they have only practised.
- The **pathway** must not advance a child who has only practised. Advancing on repetition moves the child past the concept before transfer is tested, and the opportunity is spent.
- The **chooser** must know whether the next useful observation is *another presentation of the same kind* (consistency) or *a different kind* (transfer). With one scalar that conflates them, it cannot choose.

Under P1.7 the first of these is the serious one: a band that overstates is a manufactured successful outcome produced by a schema artefact, not by the child.

---

## 4. The five questions

### 4.1 What makes an observation novel?

An observation is novel *for a learner* when, at the moment it was recorded, that learner had never been exposed to that situation before.

The definition has three parts, and all three are required:

1. **Situation must be defined by declaration, not by appearance.** Two activities can look completely different and be the same situation (same behaviour, different characters), and can look identical and be different situations (same dots, "which is more" vs "how many"). Appearance is not evidence of anything, because an author — or a randomiser — controls appearance and cannot be trusted to control meaning.
2. **Occupancy must be per learner.** Whether *this child* has met this situation is a fact about the child's history, not about the content.
3. **Exposure, not success, occupies.** A child who was shown a situation and failed has still met it. Their later success there is remediation, not transfer. (This is a correction to the natural reading of "novel", and it is what makes the rule honest — see CX-10.)

### 4.2 Novel relative to the learner's history, or the activity's design?

**Both, in different roles, and neither alone is sufficient.**

- The **design** declares *what could count as a difference* — a finite coordinate space per objective. Without this, any two activities differ (font, colour, character, order) and everything is novel. That is the coordinate-inflation failure (CX-02).
- The **learner's ledger** declares *which differences this child has already met*. Without this, novelty is a property of the artefact and repetition is transfer. That is F-01.

Novelty is therefore the intersection: **a difference that the objective declares relevant, in a region of that space the learner has not occupied.** This is why the answer is not "choose one" — the two are the axes of a single test, and I13-a's original framing ("compute per learner *or* rewrite Tier 2") presented a false choice.

### 4.3 Which changes constitute meaningful transfer?

Four kinds of change must be separated, because only one of them is transfer:

| Kind of change | Example | Transfer? | Why |
|---|---|---|---|
| **Incidental** | different character, colour, voice, ordering of items on screen | **No** | Invisible to the rule by construction (§5.1). An author must not be able to manufacture novelty, accidentally or otherwise. |
| **Difficulty** | 3 objects → 9 objects; more distractors; shorter exposure | **No** | This tests the same behaviour harder. It is *scope extension* within D2.2's 0–10 range, and it has its own meaning. Calling it transfer would let a child's band rise by being given harder sums. |
| **Context** | different object set, different spatial arrangement, different task framing | **Yes** — this is transfer | Same behaviour, new situation. It is the claim D2.5 is trying to make. |
| **Behaviour / construct** | "which is more" (comparison) → "how many" (cardinality); tap → point | **Not transfer — a different claim** | If the required behaviour changes, the observation is evidence for a different objective, or for a different channel of expression (D4.9), not evidence that the first behaviour generalised. |

The line between the third and fourth row is the whole difficulty, and it is where two of the five open decisions sit (§9, O1 and O2). The rule in §5 draws the line explicitly rather than leaving it to judgement.

**Transfer, defined:** same behavioural signature, different context coordinate, learner had not occupied it, independent success. Four conditions, all necessary, none sufficient alone.

### 4.4 Can two activities look different but measure the same underlying behaviour?

**Yes — and the dangerous direction is the reverse.** Two activities can look *similar* and measure *different* behaviour (identical dot arrays; one asks for the count, one for the comparison). Content that looks varied is not therefore measuring varied things, and content that looks identical is not therefore measuring the same thing.

Because this cannot be established from the artefact, it must be **declared**: each probe carries a **behavioural signature** — the observable relation it requires and the success criterion that decides it. Two probes are in the same behavioural family iff their signatures match: same relation required of the child, same kind of correctness.

Signatures must be *declared at authoring and checked by counterexample*, not inferred:

- **Same-signature check (positive):** change the object set and arrangement; the required relation and the pass rule are unchanged → same family, so events can pool.
- **Different-signature check (negative):** the stimulus is identical but the question differs → different family, events must not pool even though everything visible is the same (CX-06).
- **Discrimination check (empirical, post hoc):** if evidence from probe B moves the estimate for probe A's objective in the same direction and to the same band, they behaved as one family; if not, the declaration was wrong and must be corrected. This check can only run after the fact, which is why it audits the declaration rather than replacing it.

D5.8 already requires each probe to have a written naive strategy that must fail it. That is a *leakage* test. A signature-family declaration is a different artefact: it says what the probe is evidence *of*, not what it resists.

### 4.5 How does Lumi distinguish a new presentation from a new learning context?

By declaration, on one list, with no third category left implicit:

- **New presentation** = a change in incidental fields only. Not recorded as a difference; contributes nothing.
- **New context** = a change on ≥1 declared context coordinate. Recorded as a different situation; may support transfer.
- **New construct** = a change of behavioural signature. Recorded against a different objective (or a different channel); never transfer.

The words "presentation" and "context" are currently used interchangeably in D2.5 and D6.1 ("repeated across presentations", "distinct object sets", "unfamiliar context"). One of the register amendments in §9 is to fix the vocabulary, because a rule cannot be evaluated over terms that shift.

---

## 5. The proposed rule

Not applied. Proposed for decision.

### 5.1 The declared coordinate space

Each objective declares a **context coordinate space** `S(o)` — a fixed subset of probe fields drawn from a register-level whitelist. Nothing outside `S(o)` can confer novelty.

Classification of the fields Lumi already records (D5.4, D6.1):

| Field | Class | Reason |
|---|---|---|
| `objectSetId` | **context coordinate** | The materials the child reasons about. Changing them is the canonical transfer test in D2.5. |
| `arrangement` | **context coordinate** | Explicitly named in D2.5 ("two distinct arrangements"). |
| `quantity` | **difficulty / scope** | Within D2.2's 0–10 range this is the same behaviour at a different magnitude. It is *not* novelty (CX-03). |
| `distractorCount` | **difficulty** | Changes error probability, not situation. |
| `responseLayout` | **open (O2)** | Response mode. If treated as context, a motor-skill difference could raise a concept band. See §9. |
| `channel` | **open (O1)** | Presentation medium. D8.7 forbids privileging a channel, and D4.9 already handles channel-specific expression. See §9. |
| `modality` | **open (O1)** | Currently undefined against `channel`; both appear on the event. A gap, not a choice. |
| `instructionMode` | **support / access** | Narrated vs iconic vs demonstrated is how the task was given, not where. Belongs with `supportLevel`. |
| `supportLevel`, `hintCount`, `ttsReplays`, `instructionRepeats` | **support** | Affect independence, never novelty. |
| `latencyMs` | **excluded** | D4.8 forbids latency from establishing anything. |
| `attemptIndex` | **excluded** | Repetition is exactly what must not confer novelty. |
| `startedAt` (elapsed days) | **excluded** | Time is not a situation. Delayed probes test *retention*, a separate claim (CX-04). |
| `observedSignatures`, `expectedResponse`, `passRule` | **behavioural signature** | Determines whether events may pool at all (§4.4). |

The whitelist being register-level matters: an author chooses *which* coordinates from the list apply to an objective, but cannot add a coordinate. This is what makes CX-02 impossible rather than merely discouraged.

### 5.2 The four rule statements

**NV-1 — Identity.** Novelty is defined only with respect to `S(o)`, the objective's declared coordinate space. An event's context coordinate is the tuple of its values on `S(o)`, resolved at record time.

**NV-2 — Novelty.** An observation is *novel* for learner L iff no earlier evidence-bearing event for L shares its context coordinate. An event occupies its coordinate when it was an actual exposure — `endedReason` not in `{external_interruption, technical_failure}` — **regardless of outcome**. Failure consumes the situation (CX-10).

**NV-3 — Independence.** *Transfer credit* additionally requires `supportLevel: independent`, `instructionComprehension: understood` (not `unclear`), no hint above the recorded limit, and `outcome: correct`. Novelty alone is not transfer credit (CX-09).

**NV-4 — Derivation.** Bands are derived from the learner's event log, not asserted by content:

| Band | Derived condition |
|---|---|
| `none_observed` | no event meeting the recording conditions |
| `emerging` | Tier 1 evidence only: supported, single-channel, or single-presentation |
| **`familiar`** *(proposed)* | ≥1 independent success at a coordinate the learner had already occupied |
| `consistent` | ≥2 independent successes at one coordinate, or ≥1 at each of ≥2 non-novel coordinates — still no novel-coordinate success |
| **`transfer`** *(proposed)* | `consistent` **and** ≥1 NV-2/NV-3 success (novel coordinate, independent, correct) |
| `robust` | `transfer` **and** every remaining Tier 2 condition (D2.5) satisfied over *this learner's* events: ≥2 distinct object sets and arrangements, delayed probe agrees, leakage review passed for the probe set used |

Three properties are worth naming, because they are deliberate:

- `transfer` sits **above** `consistent` and **below** `robust`. A child who has generalised once, but has not yet been checked a week later, is reported honestly rather than rounded up or down.
- `familiar` makes the owner's first distinction reportable, and it is derived from occupancy — which is why it can only exist once a ledger exists.
- `robust` no longer says "survives an unfamiliar context" in prose; it says "has at least one transfer-credited success". A prose condition was what allowed F-01.

### 5.3 What must be recorded

Novelty is computed from history, so the history must exist.

**New: the exposure ledger.** Per learner, append-only, one entry per evidence-bearing exposure: `{learnerId, eventId, objectiveId, contextCoordinate, firstExposureAt, independentSucceeded, signature}`. It is not a second source of truth for evidence — every ledger row derives from an event — but it must be queryable at record time, because NV-2 is a question about the past.

**Event change (`D6.1`):** remove `contextNovelty`. Add:

```
contextCoordinate: { ...resolved S(o) values... },
behaviouralSignatureId,
novelty: { novel, ruleVersion, priorOccupancy, coordinateHash }
```

`novelty` is derived and stored because it is *time-dependent*: recomputing it later gives a different answer once the ledger has grown, and an event that was novel when recorded must not silently become non-novel. The stored value carries `ruleVersion`, following F-02's lesson — a band must be re-derivable and must show which rule derived it. Reconciling a stored and recomputed value is a discrepancy to record, never an overwrite (append-only, D6.1).

**Probe change (`D5.4`):** remove `contextNovelty`; add `coordinateSpace: (field)[]` and `behaviouralSignature` (or a reference to a declared signature). Authoring gains a signature-family declaration per probe (D5.8).

---

## 6. Testable invariants

Each is falsifiable by replaying an event log. These are the tests I13-a asked for.

| ID | Invariant | Test |
|---|---|---|
| **INV-T1** | **Repetition ceiling.** No multiset of events sharing one context coordinate raises an objective above `consistent`. | Feed the same probe 20× over 20 days. Expected: `consistent`, never `transfer` or `robust`. **This is F-01, and the rule makes it unreachable rather than discouraged.** |
| **INV-T2** | **Traceability.** Every `transfer` or `robust` band cites ≥1 event with `novelty.novel = true` for its `ruleVersion`, and a ledger showing zero prior occupancy. | Any band claim without such an event is a defect. |
| **INV-T3** | **Incidental invisibility.** Two event sets differing only in non-`S(o)` fields produce identical novelty outcomes. | Vary characters, colour, item order; bands must not move. |
| **INV-T4** | **Learner scoping.** Novelty is never shared across learners. | Two learners, one coordinate: each is novel for the other. |
| **INV-T5** | **Support blocks transfer.** No supported, hinted, or comprehension-unclear success contributes transfer credit. | Prompted success at a novel coordinate → no band change beyond `emerging`. |
| **INV-T6** | **Determinism.** Recomputing bands from the log under one `ruleVersion` yields exactly one result. | Replay twice; identical output. (Compare I13-c: that investigation decides where the *aggregate* lives, not whether a single observation can be classified.) |

---

## 7. Counterexamples

Eleven, chosen to attack the rule rather than illustrate it.

**CX-01 — Repetition (F-01 reproduced).** One probe, four days, four successes. *Old model:* four novel-context observations → `robust`. *Proposed:* first is novel, next three are not; band ≤ `consistent`. Caught by INV-T1.

**CX-02 — Coordinate inflation.** An author declares colour, character and item order as coordinates. Every session is then "novel" and the child reaches `robust` on cosmetics. *Proposed:* the coordinate space is drawn from a register-level whitelist; incidental fields are not eligible. Caught by INV-T3. This is the failure mode most likely to happen by accident, in good faith, because variety feels like quality.

**CX-03 — Quantity drift.** Child succeeds with 3 objects, then 9. Tempting to record transfer. *Proposed:* quantity is difficulty; this is scope extension within D2.2's range, and it is neither novelty nor transfer. If Lumi wants to credit it, it needs its own name and its own decision — do not borrow `transfer` for it.

**CX-04 — Time laundering.** The same activity after 30 days. *Proposed:* not novel; elapsed time never confers novelty. The delayed probe (D2.5) is a **retention** claim, not a transfer claim, and conflating them lets one success serve two evidential purposes — which is precisely how a band gets ahead of its evidence.

**CX-05 — Accommodation novelty.** A child for whom speech is the only workable channel. Every visual presentation is technically unoccupied, so the child accumulates transfer credit for accessing the task. *Proposed:* accommodation-driven differences are recorded as accommodation, excluded from `S(o)`; and where a channel is unusable, cross-channel claims are reported `undetermined` (D4.4a) rather than awarded. A rule that converts accessibility need into transfer credit would systematically overstate — and would do so most for the children Lumi most needs to serve accurately.

**CX-06 — Same stimulus, different construct.** Two probes show the same 5-dot and 3-dot arrays; one asks "which is more" (C6), one "how many" (C3). *Proposed:* different behavioural signature → different objective, never pooled. This is the case a stimulus-similarity rule would get exactly backwards.

**CX-07 — Cosmetically varied, behaviourally identical.** Four probes, different characters, same layout, same "tap the bigger group". Differ only incidentally. *Proposed:* one coordinate, one novel event, no transfer. Caught by INV-T3 and INV-T1 together.

**CX-08 — Single fluke transfer.** One success at a novel coordinate, nothing else. *Proposed:* `consistent` precondition fails, so no `transfer` band. Without this, one lucky event plus one repetition could produce `robust`.

**CX-09 — Supported novelty.** Child is demonstrated the task at a novel coordinate, then does it alone. *Proposed:* the coordinate is already occupied (NV-2), so the independent success is `familiar`-plus-consistency, not transfer. This case is why NV-2 must key on **exposure**, not on **independent success**: if only independent success occupied, a child could be taught a situation and then "transfer" into it immediately (a false positive); if exposure did not occupy but success did, the same hole appears. Occupancy is set by exposure; independence is required separately by NV-3.

**CX-10 — Failure consumes the situation.** Child fails at a novel coordinate, is taught, succeeds there next week. *Proposed:* not transfer — the situation was met. This is a deliberate cost: it means transfer credit cannot be earned by failing first. The alternative (failure does not occupy) would let a child reach `robust` by failing everywhere once and succeeding everywhere second.

**CX-11 — The depletion ceiling.** A child who practises enthusiastically exhausts the available coordinates and can no longer demonstrate transfer, however well they understand. *Not a defect of the rule — a defect of content supply it exposes.* Transfer opportunities are a **depletable resource per learner**, so authoring must supply more coordinates per objective than any single child is likely to consume. This is a real constraint on D5.8 and is recorded as open item O3, not solved here.

---

## 8. Validation cases

Specification-level cases: Lumi has no implementation, so these are assertions over an event log, not yet executable tests. Each states the expected band from §5.2 and the invariant that decides it.

| ID | Sequence | Expected | Decided by |
|---|---|---|---|
| **VC-01** | 4× same probe, independent correct | `consistent` | INV-T1 |
| **VC-02** | 4× same probe, cosmetically varied only | `consistent` | INV-T3 |
| **VC-03** | 2× same coordinate, then 1 independent success at new object set | `transfer` | NV-2, NV-3 |
| **VC-04** | VC-03 plus delayed probe agreeing at ~7 days | `robust` | NV-4, D2.5 |
| **VC-05** | VC-03 but the new-coordinate success was prompted | `consistent` | INV-T5 |
| **VC-06** | 1 independent success at a novel coordinate, nothing else | `emerging` (single presentation; not yet consistent) | CX-08, NV-4 |
| **VC-07** | Success at 3 objects, then at 9 objects, same set/arrangement | `consistent` (no transfer) | CX-03 |
| **VC-08** | Failure at a novel coordinate, teaching, success there next week | `familiar` (no transfer) | CX-10, NV-2 |
| **VC-09** | Two learners, identical sequences, one has prior exposure | bands differ | INV-T4 |
| **VC-10** | Fairness: a plausible good learner — 4 sessions, 3 coordinates available — reaches... | must be able to reach `transfer`; `robust` only with a delayed probe | **Design constraint, not a test.** If `robust` requires more sessions than a real child will do, the rule is correct and unimplementable. |
| **VC-11** | Determinism: replay VC-01–VC-09 twice | identical | INV-T6 |

VC-10 is the case that must be checked before adoption. A rule that is honest and unreachable produces a product where no child is ever reported as having generalised anything — which is a different way of failing to describe the child truthfully, and would push implementers back toward the inflated band.

---

## 9. Open decisions

Recorded as open. Each is a question for the owner; none is answered here.

**O1 — Are `channel` and `modality` context coordinates?** Recommendation: **no**, and the current duplicate is a defect. D4.9 already routes channel-specific failure to *expression* rather than knowledge, and D8.7 forbids privileging a channel. If a channel change were a transfer dimension, a child's motor or sensory profile would raise their concept band. Recommendation is to record channel differences as channel comparisons under D4.9/D4.2, not as novelty. *Deciding this changes the rule's output.*

**O2 — Is `responseLayout` (response mode) a context coordinate?** Recommendation: **no**, same reasoning; the pointing-vs-tapping case in the owner's example is a channel comparison, not transfer. But this is genuinely arguable — "expresses the relation by pointing" and "by building" may be meaningfully different demonstrations. If the owner rules yes, the rule stands unchanged; only the space grows, and CX-05's accommodation exclusion must cover response mode too.

**O3 — Transfer-stock depletion (CX-11).** What is the minimum number of coordinates per objective, and does authoring have to guarantee it? This has a direct cost in content volume, which is why it cannot be waved through.

**O4 — Is `transfer` a band, or a flag on the snapshot?** Recommendation: a band, because it is the honest report for a real state (§3). The alternative — keep four bands and add a `transferObserved` boolean — preserves D4.7 untouched but leaves the guardian view to combine a band and a flag into one sentence, which is where overstatement happens.

**O5 — Who declares relevance, and is the signature per probe or per family?** Recommendation: the objective declares the space; the probe declares its signature and family membership; D5.8's authoring gate gains a signature-family check. This is authoring workflow, not rule semantics — but if it lands in the wrong place it becomes unenforceable.

---

## 10. Proposed amendments to the register

**None applied.** Listed so the owner can decide in one pass.

| Entry | Proposed change | Decision class |
|---|---|---|
| **P1.8** *(new)* | "An observation is not mastery. Repetition is not transfer. A successful activity is not evidence of independent understanding. No claim may be stronger than the evidence recorded for it, and no artefact of the system may strengthen a claim by accident." | New principle — owner |
| **D2.5** Tier 2 | Replace "at least two distinct object sets and two distinct arrangements" with a learner-relative condition: the learner's own events span ≥2 coordinates on each declared dimension, ≥1 of which was unoccupied before the success. | **Amends DECIDED** — owner |
| **D4.7** | Add `familiar` and `transfer`; restate `consistent` and `robust` over the ledger (NV-4). | **Amends DECIDED** — owner |
| **D5.4** | Remove `contextNovelty`; add `coordinateSpace[]` and `behaviouralSignature`. | Amends DECIDED (attribute) |
| **D6.1** | Remove `contextNovelty`; add `contextCoordinate`, `behaviouralSignatureId`, `novelty{novel, ruleVersion, priorOccupancy, coordinateHash}`. | Amends DECIDED (attribute) |
| **New D5.9** | Coordinate space and behavioural-signature declaration; whitelist defined at register level; SPA: incidental fields ineligible by construction. | New decision |
| **New D6.9** | The exposure ledger: append-only, derived from events, queryable at record time, occupancy includes failure. | New decision |
| **D5.8** | Add signature-family declaration and the discrimination check (§4.4) to the authoring gate. | Amends DECIDED |
| **§13** | I13-a stays open until O1–O5 are decided. Add I13-f (transfer-stock minimum, depends on O3) if O3 cannot be settled inside I13-a. | Status |

---

## 11. What this report establishes and what it does not

**Establishes:**

- Novelty cannot be an authored field; it is a relation between a declared coordinate space and a learner's exposure history. Both are required (§4.2), and I13-a's original either/or was a false choice.
- A rule exists over fields Lumi already records, with one new record (the ledger) and one classification table (§5).
- The rule is falsifiable by log replay, with F-01 made unreachable by INV-T1 rather than merely discouraged.
- The band ladder as decided cannot express transfer, so I13-a cannot close without a D4.7 amendment (O4).
- Eleven counterexamples, three of which (CX-05, CX-10, CX-11) changed the rule's design rather than merely testing it: accommodation exclusion, exposure-based occupancy, and the depletion constraint.

**Does not establish:**

- That the coordinate space is complete. It is drawn from D6.1's present fields; if authoring needs a dimension Lumi does not record, the space is wrong and this rule would understate transfer.
- That D2.5's other Tier 2 conditions are satisfiable per learner. "Response position not predictive" and "no probe passable by a shape heuristic" are probe-set properties; NV-4's restatement of them over a learner's events is proposed, not tested.
- Anything about uncertainty, belief, or `confidence` (I13-c), the evidence→estimate hop (I13-d), C4 measurability (I13-b), or lifecycle (I13-e).
- Anything about implementation. No code, schema, migration or dependency was written.

**Closure condition for I13-a:** O1–O5 decided, the P1.8 / D2.5 / D4.7 / D5.4 / D6.1 / D5.8 / D5.9 / D6.9 amendments accepted or rejected in writing, and VC-01–VC-11 restated as executable log assertions in the build plan. Until then the register stands as v0.3.1 and D5.2 remains gated.
