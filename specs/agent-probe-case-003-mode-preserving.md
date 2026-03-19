# Agent Probe / Signal Cabinet / 003 — Mode-Preserving Spec

## Core intent
Rebuild probe **003** as a **marketing / entry expression layer** for the Signal Cabinet concept.

It is **not**:
- a homepage
- a product overview
- a documentation screen
- a resource manager
- a dashboard
- a filing UI

It is a **front-door poster surface**: a single authored sheet that gives the concept a memorable first impression and invites entry through mood, typography, and sparse tags.

The source mode to preserve is the original `case-003-julie-doucet` demo: one dominant poster/card, oversized condensed names, supporting note fragments, hand-drawn loops, and soft pointer-reactive inspection.

---

## Product role
Signal Cabinet 003 should behave like:
- a campaign poster
- a launch card
- an authored title surface
- an expressive entry state before the system becomes functional

It should communicate only:
1. the name / concept (`Signal Cabinet`)
2. a very short supporting statement
3. a few tag-like keywords or routing markers

It must **not** attempt to explain the full product. The user should feel **invited in**, not **briefed**.

---

## Locked mode
**One poster-object only.**

The page must read as a single vertical printed surface floating in a dark field.
If it starts reading as a web layout, it has failed.

Allowed outer framing:
- dark quiet surround
- centered poster
- soft spotlight / glow / depth response

Not allowed:
- hero section + supporting sections
- navigation bar
- feature rows
- footer
- side panels
- card grid
- stacked content areas
- comparison-shell behavior

---

## Content budget
Content must stay extremely small.

### Allowed
- **1 main title cluster**: `Signal Cabinet`
- **1 short support statement**: max about 8–16 words total, split over a few short lines if needed
- **1 small probe/index marker cluster**
- **3–6 short keyword tags**
- **0–2 micro note fragments**

### Forbidden
- paragraphs longer than a small note
- multi-sentence product explanation
- feature descriptions
- CTA copy blocks
- multiple editorial text sections
- onboarding copy
- FAQ or capability language

If the page feels “content rich”, it is wrong.

---

## Composition rule: anchor to the original demo
The layout logic must remain visibly anchored to `case-003-julie-doucet.tsx`.
The agent is **not allowed** to freely redesign or reshuffle the poster into a new composition.

This means:
- preserve the single tall poster ratio
- preserve the feeling of large stacked title blocks occupying different poster bands
- preserve the asymmetrical left/right alternation logic
- preserve the relationship between big red condensed text and small note text
- preserve the use of pink collage shapes sitting behind or beside the text clusters
- preserve the hand-drawn loop / scribble network as the connective tissue

### Important anti-drift rule
Do **not** reinterpret the source into a centered clean editorial poster.
Do **not** rebalance everything into neat symmetry.
Do **not** replace the demo’s staggered name-placement logic with a generic hero heading at the top and content below.

The original composition behaves like several oversized title events distributed down the sheet. The Signal Cabinet version should keep that logic, but substitute product-language fragments for the original people names.

---

## Title and keyword placement constraints
The big condensed words should be placed as **fixed poster events**, not as flexible content modules.

Preferred structure:
- **Top-left event**: first major title word/block
- **Upper-right event**: second major title word/block or paired cabinet phrase
- **Mid-left event**: another large keyword/title event
- **Mid-right event**: another large keyword/title event
- **Lower-left event**: another large keyword/title event
- **Bottom broad event**: final large title block near the lower third/bottom band

These blocks can use words such as:
- SIGNAL
- CABINET
- INDEX
- DRIFT
- ROUTING
- FRAGMENTS
- ARCHIVE
- TRACE
- HOLD
- RELEASE

But they must still behave like the original poster’s large typographic islands.

### Forbidden title behavior
- one single giant centered “Signal Cabinet” replacing the whole composition
- evenly spaced rows of labels
- free rearrangement into a normal landing page headline/subheadline format

---

## Graphic system
The page should preserve the original hand-built material language:
- warm paper field
- strong red display typography
- light pink collage shapes with outlines
- scribbled loops / parentheses / zigzags / strokes
- visible open negative space
- slightly irregular authored rhythm

Shapes should feel like:
- stickers
- cut paper bursts
- tags
- speech-bubble scraps
- brush patches

But they remain secondary to the composition anchors; they support the layout rather than creating a whole new design language.

---

## Interaction behavior
Pointer response is required, but it must stay restrained and physical.

Required:
- whole poster tilts with pointer
- inspection light follows pointer
- internal layers drift at slight depth offsets

Optional:
- subtle cursor accent
- slight ambient glow change on hover

Forbidden:
- elastic bounce
- noisy hover states
- animation that changes the layout logic
- micro-interactions that make it feel like an app UI instead of a printed object

---

## Signal Cabinet translation rules
This page represents the concept through **fragments becoming a system**.
That should be shown through sparse language such as:
- route / hold / release
- trace pending
- unstable index
- drift archive
- pattern emerging
- live fragment

But the experience must remain **expressive**, not explanatory.

Think:
- “entry mood for the cabinet”
not
- “overview of everything the cabinet does”

---

## Acceptance checklist
A correct implementation should satisfy all of these:
1. Reads immediately as a **single poster-object**
2. Feels like a **marketing / entry layer**, not a functional screen
3. Contains **very little text**
4. Keeps the **original demo’s staggered typographic placement logic**
5. Uses **graphic marks as structure**, not UI components
6. Pointer response feels like **inspecting a printed artifact**
7. Does not look like a generic AI landing page

---

## Rejection criteria
Reject if any are true:
- it reads like a homepage
- it reads like resource management
- it explains the product in full sentences or sections
- text density is more than sparse poster copy
- the large-word placement has been freely reorganized away from the original demo logic
- shapes/graphics became secondary decoration on top of a normal web layout
- the page loses the red/pink/paper authored poster mood
- pointer interaction is weak or absent
