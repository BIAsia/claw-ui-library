# Agent Probe / Case 029 / Zina Poster Grid — Style-Family Spec

## Product role decision
**Case 029 should be treated as a public programme bulletin: a campaign-grade publication poster that announces a season, issue, exhibition, or drop rather than acting as a browser, dashboard, or operator console.**

This decision is the mode lock for any concept built on top of the style.

---

## Why this mode fits the source
The original case-029 demo is fundamentally a **single-sheet announcement object**.
Its core signals are:
- repeated factual metadata
- strict grid segmentation
- large typographic declarations occupying whole cells
- poster-scale composition instead of app chrome
- a public-facing tone rather than a task-oriented one

The page behaves less like software and more like a printed bulletin pinned to a wall.
That quality must remain intact after concept translation.

---

## Style-family thesis
The Zina Poster Grid family is for product concepts that need to publish:
- season launches
- programme calendars
- issue announcements
- contributor lineups
- event details
- release broadside information

It is **not** for:
- dense content browsing
- resource inventory
- operations management
- data dashboards
- long-form editorial reading

If a concept needs users to compare many objects at once, this style is the wrong mode.
If the concept needs one bold public announcement page, this style is a strong fit.

---

## Non-negotiable visual locks
Any implementation in this family must preserve all of the following from case-029.

### 1. Single poster sheet
The experience must read as **one printed poster field** floating on a darker stage/background.
Do not expand it into a multi-panel website shell.
Do not add sidebars, cards, drawers, or utility rails around it.

### 2. Fixed folded-grid structure
The poster must keep the same structural logic:
- one vertical seam centered on the poster
- four major horizontal bands
- repeated metadata rows near the top, middle, lower sections, and footer zone
- oversized type blocks landing in different grid compartments

The seams are not decoration. They are the organizing system.

### 3. Duplicated metadata cadence
Repeated metadata is a defining feature, not filler.
At least three repeated metadata rows must exist.
They should contain the same public facts in slightly different placements or groupings.
Examples:
- season dates
- issue / edition label
- venue / URL / city
- participants / editors / speakers
- release time

### 4. Oversized declaration blocks
The poster must contain at least three large declaration clusters:
- one venue / platform / host block
- one title / programme block
- one event / release-time block

These should occupy substantial cell area and dominate over body copy.

### 5. Green poster mood and material feel
Keep the source mood:
- saturated green poster body
- white rules and typography
- dark surrounding stage
- light print/noise/shimmer allowed only as subtle material treatment

Do not recolor into a totally different palette unless there is a very strong reason.
The family identity depends on the green broadside feel.

---

## Interaction rules
This family is mostly static.
Allowed interaction:
- gentle hover lift of the poster sheet
- subtle shimmer / paper-light movement
- tiny local translation of one or two content blocks

Forbidden interaction:
- section expansion/collapse
- hidden drawers
- marquee-heavy motion
- slideshow logic
- deep scrolling narrative transitions
- UI patterns that make it feel like a dashboard or web app shell

The user should still feel they are looking at a poster first.

---

## Information architecture rules
### Required
- single poster canvas
- repeated metadata bands
- title / programme band
- host / venue / location band
- schedule or release-time declaration
- footer note that clarifies the product concept in one short line

### Allowed
- one or two tiny utility links outside the poster
- one conceptual subtitle
- one archival note or edition note

### Forbidden
- multi-card feeds
- side navigation
- search/filter controls
- tab bars
- dashboard KPI modules
- long paragraphs
- product feature sections below the fold

---

## Concept-translation rule
When translating a product concept into this style, convert product meaning into **public bulletin language**.

That means:
- product features become programme lines or edition notes
- contributors become artists/editors/curators/authors/builders depending on concept
- release timing becomes opening date / season span / issue window
- venue can be physical or digital, but should still read like a host/platform line

Do **not** force literal app UI into the poster.
Instead, publish the app's public-facing announcement surface.

---

## First concept lock: Signal Cabinet
The first probe in this family should use **Signal Cabinet** because it already supports cultural/archive language.
Within this style, Signal Cabinet should become a **season bulletin** for a new cluster of archival programming.

### Signal Cabinet-specific translation
Use the poster to announce:
- a seasonal issue or cluster title
- run dates / programme window
- contributor lineup
- venue/platform line
- one sentence describing the bulletin as a public issue from the archive product

The result should feel like Signal Cabinet is publishing a public cultural programme, not exposing its internal browser.

---

## Acceptance checklist
The implementation passes only if all are true:
1. First read is **poster / public bulletin / programme sheet**.
2. The page still clearly resembles the original case-029 composition.
3. Repeated metadata rows are visibly intentional and structurally important.
4. Large type blocks dominate over supporting copy.
5. The chosen concept feels plausible in bulletin form.
6. The page does not drift into dashboard, browser, or editorial article modes.

---

## Failure tests
Fail if a reviewer could reasonably say:
- “this is just a landing page in green”
- “this looks like a dashboard hidden inside poster styling”
- “the original Zina layout cadence is gone”
- “the repeated metadata feels arbitrary or decorative”

Pass if a reviewer would say:
- “this preserves the Zina poster grammar while turning it into a real product bulletin”
- “the concept feels like a public programme announcement, not a generic website”
- “the original demo’s structure and mood are still unmistakable”
