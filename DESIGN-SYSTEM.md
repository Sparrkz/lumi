# Lumi — Experience Design System (v1.0)

This document serves as the master specification and structural constitution for the **Lumi** learning platform. It defines the visual styles, design tokens, layout parameters, interaction rules, cognitive load methods, and component standards for all Lumi environments. 

Adherence to this document ensures absolute cohesion between Lumi's marketing landing pages and the interactive product application (dashboards, path maps, and workspaces), preventing visual and behavior drift.

---

## 01. Philosophy & Universal Design

### 1.1 Core Metaphor & Brand Statement
Lumi is **"an adaptive learning environment for life"** — a personalized space built for learning anything, from academic subjects to creative crafts, practical DIY skills, and professional leadership. Its visual interface is built around the central metaphor: **"a quiet study surrounded by a living world."** The interface feels warm, spacious, human-crafted, and editorial, prioritizing reflection over distraction.

### 1.2 Hierarchy of Intent
The interface must communicate five statements immediately upon interaction:
1.  *I belong here.*
2.  *I understand where I am.*
3.  *I know what to do next.*
4.  *I can learn in my own way.*
5.  *I am making progress.*

To enforce this, Lumi operates under a strict priority hierarchy:
$$\text{Human First} \longrightarrow \text{Learning Second} \longrightarrow \text{Technology Third}$$

The technology should disappear into the experience, serving as a silent, helpful catalyst rather than a constant interruption.

### 1.3 Dignity in Adaptation & Neuroinclusion
> [!IMPORTANT]
> **Adaptation must never reduce dignity.** Lumi may simplify, scaffold, slow down, increase support, or change presentation modes based on learner needs, but it must **never** visually communicate that a learner is "less capable," "under-performing," or belongs to a "remedial" class. There are no visual labels. All paths are represented with equal visual weight and beauty.
>
> We follow these neuroinclusion rules:
> *   **Alternative Presentations**: Offer visual (diagrams), auditory (spoken explanations), reading (text summaries), or practice-first (interactive sandbox) nodes.
> *   **No Identity Labeling**: Do not label users as "visual learners" or "auditory learners." The path adapts to what works for them, without boxes.
> *   **Context Before Detail**: Provide top-level concept maps before dropping into detailed nodes.
> *   **Pacing & Compression**: Speed up or slow down presentation based on retention metrics, without notification popups or grading indicators.

### 1.4 Journey Archetypes
Instead of locking users into static user personas (like "The Student" or "The Developer"), Lumi maps pathways around six fluid **Journey Archetypes**:
1.  **The Explorer**: Learning driven by pure curiosity (e.g. astronomy, history, languages).
2.  **The Scholar**: Learning for academic structure (e.g. math, biology, economics).
3.  **The Builder**: Learning to construct or execute (e.g. woodworking, programming, electronics).
4.  **The Professional**: Learning to scale career capability (e.g. leadership, public speaking, data analysis).
5.  **The Navigator**: Learning driven by everyday life requirements (e.g. personal finance, digital skills, critical thinking).
6.  **The Creator**: Learning to express something (e.g. music, art, photography, writing).

*Users are never locked into one category. They can embody multiple archetypes simultaneously.*

### 1.5 Accessibility Baseline
Lumi targets **WCAG 2.2 AA** as its minimum accessibility baseline, with AAA-level contrast and interaction practices adopted where reasonably achievable (such as in text sizing, focus states, and canvas contrast).

### 1.6 Anti-SaaS-Slop Rules
To retain its premium identity, Lumi rejects visual clutter:
*   **No Purple AI Gradients**: Avoid glowing violet/pink neon overlays.
*   **No Card Overload**: Do not wrap every paragraph in rounded card borders with drop shadows.
*   **No Neon Colors**: Use desaturated, organic supporting colors.
*   **No Decorative AI Sparkles**: Do not place magic sparkles on every button or card.
*   **No Gamified Noise**: Avoid flashing confetti, forced daily metrics, or heavy gamified badge overlays.

---

## 02. Color System Architecture

Lumi structures its color system to decouple raw brand colors from UI behaviors. Components must *only* consume semantic tokens.

```
LUMI COLOR SYSTEM
│
├── Primitive Tones (Earthy Brand Swatches)
│   ├── Paper & Ink (Canvas Neutral Base)
│   ├── Living Green & Ochre (Core Branding)
│   └── Sky, Clay & Sage (Supporting Accents)
│
└── Semantic Tokens (Functional Layer)
    ├── Canvas & Surfaces (Background panels)
    ├── Text & Borders (Hierarchical structural strokes)
    └── Actions, Progress & Status (Feedback and interactive triggers)
```

### 2.1 Design Tokens (CSS Variables)
Defined inside the `:root` level in the project's global stylesheet `src/app/globals.css`:

```css
:root {
  /* --- Primitive Tones --- */
  --color-brand-paper: #F5F0E8;
  --color-brand-paper-warm: #EDE8DD;
  --color-brand-surface: #FDFCF9;
  --color-brand-surface-raised: #FFFFFF;
  --color-brand-inset: #EBE5D8;
  --color-brand-ink: #1A1F2E;
  --color-brand-ink-secondary: #3D4455;
  --color-brand-ink-muted: #6B7280;
  --color-brand-ink-subtle: #9CA3AF;
  
  --color-brand-green: #2D6A4F;
  --color-brand-green-light: #52B788;
  --color-brand-green-pale: #D8F3DC;
  --color-brand-green-muted: #B7DEC8;
  
  --color-brand-ochre: #C27D38;
  --color-brand-ochre-light: #E8A563;
  --color-brand-ochre-pale: #FFF1E2;
  
  --color-brand-sky: #4A7FA5;
  --color-brand-sky-pale: #E1EEF6;
  --color-brand-clay: #B5644B;
  --color-brand-clay-pale: #FAE8E2;
  --color-brand-sage: #6B8F71;
  --color-brand-sage-pale: #EDF3EE;

  /* --- Semantic Colors --- */
  --bg-canvas: var(--color-brand-paper);
  --bg-surface: var(--color-brand-surface);
  --bg-surface-raised: var(--color-brand-surface-raised);
  --bg-inset: var(--color-brand-inset);
  
  --text-primary: var(--color-brand-ink);
  --text-secondary: var(--color-brand-ink-secondary);
  --text-muted: var(--color-brand-ink-muted);
  
  --border-default: #DDD8CC;
  --border-subtle: #EBE7DF;
  
  --action-primary: var(--color-brand-green);
  --action-primary-hover: #1B4D36;
  --action-primary-text: var(--color-brand-paper);
  --action-focus: var(--color-brand-green);
  
  --status-success: var(--color-brand-green);
  --status-warning: #B45309;
  --status-error: #B91C1C;
}
```

### 2.2 Color Usage Ratio
Surfaces must feel calm and editorial. Brand and accent colors are reserved exclusively for meaning and interaction.
*   **70% Canvas**: Background paper variables.
*   **20% Structure**: Text ink, dividers, lines.
*   **10% Accents**: Active paths, core buttons, focus status.

---

## 03. Typography

### 3.1 Font Families
*   **Display Serif**: `'DM Serif Display', Georgia, serif;`
    *   *Role*: Onboarding statements, titles, and structural climax headings.
*   **Body Sans**: `'Inter', system-ui, -apple-system, sans-serif;`
    *   *Role*: Standard layouts, lesson copies, navigation inputs, and labels.
*   **Code Monospace**: `'Fira Code', 'Consolas', monospace;`
    *   *Role*: Coding panels, terminal interfaces, and file output strings. *Do not use for standard UI numbers (like progress percentages).*

### 3.2 Typographic Scale
*   **Display XL**: `72px` (desktop) / `44px` (mobile). Line-height: `1.05`. (Hero headlines).
*   **Display L**: `48px` (desktop) / `32px` (mobile). Line-height: `1.1`. (Section titles).
*   **Display M**: `36px` (desktop) / `24px` (mobile). Line-height: `1.15`. (Topic headings).
*   **Heading L**: `20px` (desktop) / `18px` (mobile). Line-height: `1.3`. (Card/task headers).
*   **Body M (Base)**: `16px` (desktop) / `14px` (mobile). Line-height: `1.65`. (Lesson copy).
*   **Body S**: `14px` (desktop) / `12px` (mobile). Line-height: `1.6`. (Metadata, terminal lines).
*   **Label/Caption**: `12px` (desktop) / `10px` (mobile). Line-height: `1.4`. (Placeholders, status chips).

### 3.3 Cognitive Reading Width (The 65ch Rule)
To prevent tracking fatigue and accommodate learners with ADHD or dyslexia, blocks of reading content must be capped at a maximum width of **55 to 75 characters per line** (approximately `65ch` or `680px`). Never stretch lesson blocks across the screen.

---

## 04. Layout, Spacing & Containers

### 4.1 Spacing Scale (4px Multiples)
Marginal gaps, gutters, and layout paddings must match the spacing scale. Do not introduce arbitrary pixel sizes:

$$\text{Spacing Tokens (px): } [4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128]$$

### 4.2 Responsive paddings
Sections must avoid fixed height or fixed padding values, scaling instead using relative viewport clamps:
```css
.section {
  padding-top: clamp(56px, 7vw, 96px);
  padding-bottom: clamp(56px, 7vw, 96px);
}
```

### 4.3 Standard Containers
Standard containers are named `.lumi-container`:
```css
.lumi-container {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}
@media (min-width: 768px) {
  .lumi-container {
    padding-left: 24px;
    padding-right: 24px;
  }
}
```

---

## 05. Motion & Interaction

### 5.1 Hover States (No Hover Scale Default)
Hovering over standard elements, buttons, and cards must **never** change their visual scale. Constantly shifting shapes create cognitive clutter. Hover changes must prioritize:
1.  **Color Shift**: Background or text opacity changes.
2.  **Border Contrast**: Transitioning from a subtle border to a solid ink line.
3.  **Underlines**: Displaying a clean underline indicator.
4.  **Elevation**: Elevating interactive elements with a very light shadow overlay.

*Exception*: Interactive climax CTAs or main buttons may scale up by `1.01` max.

### 5.2 Transition Easing & Timing
Lumi transitions are calm, short, and interruptible. Bouncy overshoot spring curves are prohibited for UI elements.
*   **UI Easing**: `cubic-bezier(0.4, 0, 0.2, 1)`. Duration: `200ms`.
*   **Companion Easing**: `cubic-bezier(0.25, 1, 0.5, 1)`. Duration: `300ms`.
*   **Reduced Motion**: Respect `prefers-reduced-motion` strictly. When active, all floating particles, SVG animations, and ambient companion movements must be disabled.

---

## 06. Code Workspace System

Lumi's coding interface must align text, compilers, line numbers, and gutters to a strict baseline grid to ensure a highly polished workspace.

```css
:root {
  --font-size-code: 14px;
  --line-height-code: 22px;
  --code-tab-size: 4;
  --code-gutter-width: 48px;
  --code-indent-size: 24px;
  --code-line-number-width: 32px;
}
```

### 6.1 Baseline Alignment Rule
All editor gutter structures, line numbers, syntax blocks, inline error indicators, and active cursors must share the same vertical baseline as the code text. Inline warnings and wave highlights must never shift text layout lines.

---

## 07. Lumi Spark Companion

The companion (**Lumi Spark**) is the visual embodiment of the learning journey, not an independent mascot that breaks reading flow.

### 7.1 Behavioral Modes
*   **Ambient Mode (Marketing & Onboarding)**: Large companion floats, glowing trails, active text bubbles.
*   **Contextual Mode (Lesson Page)**: Sits quietly at the side margin, observing without speech bubbles. Transitions to `thinking` during updates.
*   **Docked Mode (Coding Workspace)**: Collapses into a small, silent `24px` glowing status glyph in the editor header.
*   **Focus Mode**: Completely hidden to remove visual distraction.
*   **Expanded Mode**: Activates when the learner clicks the companion to ask for an alternative explanation or contextual hints.

### 7.2 Companion States
*   **Neutral**: Floating gently, blinking. Used during general reading.
*   **Thinking**: Elongated morph, slow warm ochre pulse. Used during processing.
*   **Exploring**: Tilted 15 degrees, trail particles. Used during path updates.
*   **Celebrating**: Soft upward shift, gentle glow expand. Used on masteries.
*   **Reading**: Eyes looking down. Used during active editing.
*   **Focus**: Quiet, low-contrast pulse. Used in focus mode.
*   **Encouraging**: Low-glare, calm resting state. Activates during learning friction.
*   **Waiting**: Inactive breathing animation. Waiting for input.

### 7.3 Non-Judgmental Error Rule
The companion must **never** communicate error or failure through sad, disappointed, frustrated, embarrassed, or judgmental animations. If the learner inputs incorrect code, the companion remains calm and grounded. Errors are treated as diagnostic information, not personal failure.

---

## 08. Adaptive Experience System

Lumi's layout and content density adapt dynamically to the learner's active context.

### 8.1 Adaptation Dimensions
*   **Difficulty**: Dynamically shifting vocabulary complexity, syntax structures, or problem constraints.
*   **Pacing**: Unlocking review cards early or accelerating to next units.
*   **Density**: Changing layout from detailed lists to simple single-card steps.
*   **Presentation Modality**: Toggling between "Read" (text), "See" (visual diagrams), or "Interact" (code/puzzles).

### 8.2 Learner State Matrix
*   **New**: Low density, maximum scaffolding.
*   **Confident**: High pacing, reduced contextual hints, high density.
*   **Struggling**: High scaffolding, modal options unlocked, companion in `encouraging` state.

---

## 09. Cognitive Load & Neuroinclusive Design

*   **Progressive Disclosure**: Show only the primary instructions first. Reveal supporting tools and diagnostic workspaces as the learner activates sections.
*   **One Action at a time**: A screen should have exactly one obvious next step (e.g. `[ Continue ]` button in green), with other actions styled as tertiary borders or text buttons.
*   **Recovery and Undo**: Learners must always be able to pause a task, reset code text inputs, and revisit skipped modules without penalty.
*   **No Forced Speed**: Avoid countdown timers or forced speed challenges unless speed is the core capability being learned. Learners study at their own pace.

---

## 10. Learner Control & Adaptive Transparency

Adaptive behavior should never feel arbitrary or hidden. When Lumi alters the pacing, difficulty, or modality, the interface must inform the learner and allow them to override it:
> *"Lumi adjusted your practice pacing. [ Keep current ] or [ Go back to original ]"*

The learner remains in complete control of their cognitive environment.

---

## 11. Responsive & Device Experience

Lumi adapts its entire interaction model across device classes:

*   **Mobile Viewports (up to 640px)**:
    *   *Navigation*: Bottom navigation bar (Home, Learn, Goals, Explore, Me).
    *   *Companion*: Rendered inline above content cards or minimized to a header avatar.
    *   *Workspace*: Single-panel progressive view (Tab 1: Description, Tab 2: Code Editor, Tab 3: Console output).
*   **Tablet Viewports (641px - 1024px)**:
    *   *Navigation*: Left condensed navigation rail (icons only).
    *   *Companion*: Floating contextual overlay on side margins.
    *   *Workspace*: Two-panel split view (Left: Description/Console, Right: Editor).
*   **Laptop/Desktop Viewports (1025px+)**:
    *   *Navigation*: Left persistent navigation sidebar (logo, links, user settings).
    *   *Companion*: Expanded side-panel floats.
    *   *Workspace*: Three-column layout (Left: Description, Center: Code Editor, Right: Diagnostics/Console).
*   **Accessibility Inputs**:
    *   *Touch*: Minimum touch target size of `44px x 44px`.
    *   *Keyboard*: Strict focus rings on all active elements; focus trap prevention inside workspaces.

---

## 12. Learning Content Patterns

Content structures must prioritize clean, semantic grids over blocks of solid text.
*   **Step Cards**: Break instructions into bite-sized units with step headers.
*   **Inline Diagnostics**: Display error indicators exactly below the line of code that triggered it.
*   **Multi-Modal Toggles**: Every lesson displays a quick tab switcher: `[ Text ]` `[ Visual ]` `[ Interactive ]` to let the user select their preferred format.

---

## 13. Feedback & Error Philosophy

Errors are neutral system feedback, not personal failure markers.
*   **Actionable Corrections**: Never output generic errors (e.g., "Invalid input"). Output the reason and the fix (e.g., "Missing a closing parenthesis on line 3").
*   **Visual Balance**: Warnings use the Supporting Clay color (`--color-brand-clay`), which is warmer and less stressful than stark semantic red.
*   **Celebration Restraint**: Highlight success with quiet, clean verification rather than flashing neon badges or loud popups.

---

## 14. Content & Voice System

### 14.1 Lumi's Voice (The Companion & System copy)
*   **Lumi Sounds**: Warm, mature, calm, respectful, encouraging, and curious.
*   **Lumi Never Sounds**: Childish, patronizing, overly enthusiastic, judgmental, robotic, or condescending.

### 14.2 Phrasing Examples
*   *Incorrect (Forced Motivation)*: ❌ "AWESOME WORK!!! You're absolute killing it! Here is a gold star! Let's smash the next one!!!"
*   *Correct (Mature, Calm)*:  "Functions completed. You're ready to explore parameters."
*   *Incorrect (Punitive Error)*: ❌ "Wrong! That code crashed. Correct your mistakes before continuing."
*   *Correct (Informative Error)*:  "Not quite. It looks like the double_number function returned None instead of a value. Let's look at the return statement."

---

## 15. Data Visualization & Learning Visualization

Lumi visualizes knowledge, mastery, and progress using accessible visual indicators.

### 15.1 Multi-Signal Mastery
Never rely on color alone to communicate understanding. A progress node or status indicator must combine:
$$\text{Color } (Green) + \text{Shape } (Circle) + \text{Icon } (Checkmark) + \text{Text } (Mastered)$$

```
  [✓] Mastered   (Living Green border & checkmark)
  [→] Active     (Ochre border & arrow indicator)
  [ ] Locked     (Grey border, dashed lines)
```

### 15.2 Knowledge Graphs
*   **Rendering**: Node sizes represent concept scale. Connected lines represent prerequisite paths.
*   **Mobile adaptation**: In small viewports, the knowledge graph collapses from a 2D network view into a 1D expandable checklist grouped by categories.

---

## 16. System States

Every page or primary panel must define layouts for the following eleven states:

1.  **Loading**: Quiet, non-flashing spinner centered in container.
2.  **Empty**: Warm paper backdrop containing a resting companion and a single action button.
3.  **First-use**: Step-by-step contextual tooltips.
4.  **Populated**: Normal, active layout.
5.  **Partial data**: Clean placeholders indicating content in progress.
6.  **Error**: clay/red alert warning banner.
7.  **Offline**: Subtle banner alert showing "Offline mode. Progress will sync when connected."
8.  **Permission denied**: Explanation of why permission is needed and a button to request access.
9.  **Completed**: Mastery indicator visual overlay.
10. **Locked**: Dashed borders and a grey lock icon.
11. **Unavailable**: Explanation of prerequisite concepts needed to unlock.

---

## 17. Components & Component Inventory

Standardized component specifications used in both landing pages and product dashboards:
*   **LumiButton**: Modest rounding (lg/12px), primary (Ink/Green), secondary (Outline).
*   **LumiInput**: Focus state outlines, conversational labels.
*   **LumiCard**: 1px subtle borders, flat background, no drop shadows by default.
*   **LumiTag**: Pill-shape (9999px), color stroke, light desaturated background.

---

## 18. Page / Screen Patterns

*   **Structure**: Top horizontal header with the SVG Spark logo, left navigation rail on desktop, bottom navigation on mobile.
*   **Rhythm**: Maintain consistent padding margins using the spacing scale. Prevent layouts from feeling packed.

---

## 19. Accessibility Standards & Checklist

*   **Keyboard Navigation**: All interactive elements are fully focusable. Focus trap prevention is enforced.
*   **Screen Readers**: Every interactive SVG or icon button contains descriptive `aria-label` properties.
*   **Contrast Audit**: Contrast ratio must exceed **4.5:1** for standard body copy, and **3:1** for large titles.

---

## 20. Internationalization & Localization

*   **Text Expansion**: Component containers must allow up to 30% horizontal text length expansion to accommodate translated text (e.g. German, French).
*   **RTL Orientation**: Layout blocks flip dynamically when `dir="rtl"` is declared.
*   **Localization formats**: Numbers, dates, and metrics adjust to regional formats.
*   **Fallback Font Stack**: If local language characters are not supported in DM Serif Display or Inter, layouts fallback gracefully to standard system serif/sans blocks.

---

## 21. Tailwind & Implementation Architecture

To ensure consistency, Tailwind config files map styling classes directly to CSS custom properties.

```css
@theme {
  --color-brand-ink: var(--color-ink);
  --color-brand-paper: var(--color-paper);
  --color-brand-green: var(--color-green);
  --color-brand-ochre: var(--color-ochre);

  --font-display: var(--font-display);
  --font-sans: var(--font-body);
  --font-mono: var(--font-mono);
}
```

---

## 22. Design QA Checklist

*   Verify that typography matches DM Serif Display and Inter.
*   Verify that contrast ratios conform to WCAG 2.2 AA.
*   Verify that margins and paddings match the spacing scale (multiples of 4px).
*   Verify that prefers-reduced-motion disables all background companion floating.

---

## 23. Design Governance & Versioning

### 23.1 Source of Truth
The single source of truth for all styling tokens is the `src/app/globals.css` file. No component may declare raw HEX colors or custom inline paddings.

### 23.2 Component Naming Convention
To prevent namespace collisions:
*   All global React components are prefixed with `Lumi` (e.g. `LumiButton`, `LumiCompanion`).

### 23.3 Change Control Procedure
No developer may change primitive tokens, spacing units, or component variables without editing this design system document and obtaining approval.
