# Agent Probe / Traditional Agent / 004 — Mode-Preserving Spec

## Core role in the product
Case **004** is the **resource management / browsing layer** for the Traditional Agent concept.

This is where work becomes inventory.
It should answer questions like:
- what requests are in the system?
- which runs exist already?
- what status is each run in?
- which briefs, assets, outputs, and logs belong to which job?
- what should I open next?

It is **not**:
- the brand campaign page
- a manifesto
- a report page
- an editorial homepage
- a metrics dashboard trying to summarize everything at once

It **is**:
- the operating shelf
- the run browser
- the asset / brief / output holdings layer
- the place where the product proves it can keep work organized

---

## Product mode
**Run browser / operator inventory / resource shelf**

The interaction model should feel closer to:
- a catalog
- a resource browser
- an evidence shelf
- a run library
- a production archive with live statuses

than to:
- a homepage
- a feature-marketing surface
- a KPI dashboard
- a storytelling editorial page

The first feeling should be:
**“I can browse jobs and their artifacts here.”**

---

## Role translation for Traditional Agent
Traditional Agent 004 should hold things like:
- requests
- briefs
- runs
- files
- outputs
- prompts
- review packets
- delivery bundles
- transcripts
- logs

The important move is that the agent concept becomes a **browseable holdings system**.
This is the surface where the product earns trust through legibility.

---

## Hard mode lock
### 1. Grid first, immediately
The page must open directly into the browser layer.
No hero preamble.
No intro essay.
No top-heavy narrative.

The main viewport should be dominated by a **dense multi-column object grid**.
The grid is the product.

### 2. Preserve original demo logic
The page must remain visibly anchored to the original Booookin demo logic:
- slim masthead
- narrow control rows
- equal-width catalog columns
- object-led cards
- metadata living on edges
- strong divider rhythm
- browse-first discipline

### 3. Object-led, not copy-led
The dominant visual unit is the **run / packet / file object tile**.
A user should scan cards by cover/object signature before reading full metadata.

### 4. Metadata stays light
Preferred fields:
- type
- queue
- owner
- status
- date
- run time
- toolset
- destination
- ticket
- bundle

Keep metadata compact.
No paragraphs.
No long summaries.

---

## Information architecture
### Required
- compact masthead / operator bar
- one slim controls row (two max)
- count / queue / status indicators
- dense grid of repeated entries
- object-led cards
- light metadata on each card

### Strongly encouraged
- search
- type filter
- status filter
- sort selector
- visible counts
- quiet operational labels

### Allowed but restrained
- tiny action buttons
- queue/status pills
- pin/save markers
- open packet / review / deliver affordances

### Forbidden
- hero copy
- mission statement block
- product feature rows
- giant KPI panels
- narrative sidebar that takes over the page
- complicated dashboard widgets
- masonry chaos

---

## Visual direction
### Material feel
- warm paper / soft off-white field
- ink / charcoal typography
- restrained deep accent color where useful
- thin dividers
- tactile but disciplined atmosphere

### Mood
- procedural
- browseable
- accountable
- calm
- ordered

Compared with Signal Cabinet 004, this concept should feel:
- less cultural/archive-poetic
- more operational
- more obviously tied to jobs and runs

### Density target
The page should feel productively full.
It should not feel roomy like a marketing site.
Enough repeated units must be visible that the browser logic is self-evident.

---

## Card model
Each card is a **job packet / run slot / delivery bundle**.

### Card anatomy
1. **top edge metadata**
   - type / queue / ticket / status
2. **center object area**
   - visual packet, folder, brief sheet, tape, stack, ledger, or other run-signature object
3. **bottom edge metadata**
   - title
   - queue/date/runtime or owner/destination line
   - tiny status indicator

### Card behavior
- hover may gently lift / brighten / focus
- no layout jump
- actions stay secondary
- the card must still feel like part of a disciplined shelf, not a feature panel

---

## Demo-preserving rule for 004
The original demo is fundamentally a merchandise/browser surface.
For Traditional Agent, preserve that mode by treating each tile like a **real operational holding** rather than a decorative concept card.

That means:
- the grid remains the center of gravity
- the controls remain small and practical
- the metadata remains compact
- the object art carries first impression
- the right reading is “browse runs and packets,” not “read a product pitch”

---

## Suggested content vocabulary
Entry titles can include things like:
- Inbox Sweep
- Launch Packet
- Support Escalation
- Daily Queue
- Review Bundle
- Tool Audit
- Client Handoff
- Memory Sync
- Build Log
- Deliverable Set

Types can include:
- brief
- run
- output
- note
- transcript
- build
- asset
- review

Statuses can include:
- queued
- running
- review
- delivered
- archived

---

## Responsiveness
When viewport shrinks:
- controls condense but remain visible
- grid reduces columns progressively
- center object remains dominant inside each card
- metadata stays short and edge-aligned
- page should still feel like the same browser mode, not a different mobile app

---

## Acceptance checklist
A correct implementation should satisfy all of these:
1. First read is **resource browser / run catalog**, not marketing
2. Most of the viewport is occupied by **browseable objects**
3. The page still clearly echoes the **original 004 demo grid logic**
4. Metadata is **light and scannable**
5. The concept now feels like **Traditional Agent** — jobs, queues, runs, outputs
6. The page plausibly supports real resource management without becoming a dashboard

---

## Failure tests
Fail if a viewer could reasonably say:
- “this is a nice marketing site for an AI agent”
- “this looks like a dashboard homepage”
- “the grid feels secondary to the header or copy”

Pass if a viewer would say:
- “this feels like the browse layer for a classical AI operator”
- “I can scan jobs, packets, and outputs here”
- “this preserves the Booookin shelf logic while changing the product concept”
