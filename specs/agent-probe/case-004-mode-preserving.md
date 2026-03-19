# Case 004 — Mode-Preserving Spec

## Core Role in the Product
Case 004 is the **resource management / browsing layer** inside the same Signal Cabinet product family.

It is **not**:
- a campaign page
- a manifesto page
- an editorial story page
- a product-marketing surface
- a dashboard trying to summarize the whole system

It **is**:
- the place where the collection is **stored, browsed, filtered, and lightly indexed**
- the shelf/archive surface people use when they want to **scan the library as objects**
- the cabinet view that turns fragments into a **catalog of holdings**

If 001/002/003 can hold mood, framing, or narrative tension, **004 must hold inventory logic**.
Its job is to answer: **what is in the cabinet, where is it, what kind of fragment is it, and which object should I open next?**

---

## Product Mode
**Archive browser / shelf catalog / resource layer**

The interaction model should feel closer to:
- archive shelf
- bookstore/catalog browser
- media cabinet
- library inventory wall

than to:
- homepage
- campaign microsite
- portfolio landing page
- storytelling editorial longform

The user should feel like they are:
1. entering a collection that already exists
2. scanning covers and object thumbnails first
3. using light controls to narrow the set
4. deciding what to inspect based on cover + tiny metadata

The page should read as **“browse the holdings”**, not **“learn about the brand.”**

---

## Primary Experience Goal
### First impression
The first screen must immediately communicate:
- **dense collection**
- **cover/object-led browsing**
- **thin archival metadata**
- **clear grid rhythm**
- **catalog discipline**

A user should understand the mode **without reading a paragraph**.

### Functional promise
004 should plausibly support these product verbs:
- archive
- browse
- shelve
- scan
- sort
- filter
- locate
- inspect

It does **not** need to deeply perform those flows, but the surface must visually support them.

---

## Composition Lock
### 1. Grid-first, immediately
The page must open directly into the catalog experience.
There should be **no hero preamble** that delays the grid.

The main viewport should be dominated by a **multi-column object grid**.
The grid is the product.

### 2. Original demo logic stays visible
Layout density and placement should stay anchored to the original Booookin demo logic:
- slim inventory masthead
- narrow control strips
- repeated equal-width product columns
- object centered within each tile
- title / metadata living at the card edges, not in big content blocks
- strong horizontal and vertical divider rhythm

This should feel like a **mode-preserving transposition**, not a redesign from scratch.

### 3. Covers do most of the work
The dominant visual unit is the **cover/object tile**.
Each item should read first as:
- a cover
- a sheet/object
- a catalog object
- a visual fragment container

Only after that should the user notice title, date, shelf code, or status.

### 4. Metadata must stay light
Metadata should be compact and quiet.
Prefer fields such as:
- type
- shelf
- date
- issue
- source
- status
- duration
- format

Keep it to **one short header line + one short footer line** where possible.
No paragraphs.
No descriptive summaries unless compressed into a very small inventory-style note.

---

## Allowed Information Architecture
### Required
- top masthead / cabinet inventory bar
- one compact controls row (or two slim rows max)
- visible count / shelf count / scope label
- dense repeated grid
- cover-led item cards
- light archive metadata per item

### Strongly encouraged
- search field
- format/type filter
- sort selector
- shelf or status labels
- quiet counts / collection scope indicators

### Allowed, but restrained
- small action buttons like open / pin / mark / queue
- compact pills or toggles
- subtle active states
- tiny bottom utility rail or header utility label

### Forbidden
- hero copy
- mission statement block
- “about this project” essay section
- feature marketing cards
- oversized statistics section
- testimonial / CTA logic
- explanatory sidebar that becomes a second page
- story-first featured article layout
- masonry chaos that breaks the underlying demo logic

---

## Visual Direction
### Material feel
- warm paper / off-white field
- soft ink / charcoal text
- restrained accents only
- thin dividers
- subtle depth, not glossy product UI polish

### Mood
- editorial-retail
- quiet, tactile, collectible
- ordered rather than expressive
- browseable rather than performative

### Contrast hierarchy
- highest contrast: object silhouette / cover typography
- medium contrast: titles and interactive utility labels
- lowest contrast: dates, shelf codes, auxiliary metadata

### Density target
The page should feel **productively full**.
Not cramped, but definitely not spacious like a landing page.
There should be enough repeated units on screen that the browser logic is obvious.

---

## Card Model
Each card should be understood as a **catalog slot**.

### Card anatomy
1. **top edge metadata**
   - type / issue / format / class
2. **center object area**
   - cover or visual object representation
3. **bottom edge metadata**
   - title
   - shelf/date/source/duration as one compact line
   - optional tiny status indicator

### Card behavior
- hover may gently lift/highlight/focus the slot
- hover must not cause layout jump
- actions must remain secondary to the object itself
- card should remain readable as part of a grid, not turn into a feature panel

---

## Signal Cabinet Content Translation
Signal Cabinet entries in this mode should behave like archived holdings, for example:
- scan
- note
- image
- tape
- clipping
- transcript
- field record
- proof
- contact sheet

Naming can be slightly poetic, but the surrounding system must stay catalogic.
The poetic part belongs in the object title or cover, **not** in long supporting prose.

---

## Page Behavior Rules
### Search / filter / sort
Controls should look operational, not promotional.
They should feel like collection utilities:
- filter by type / format
- sort by recent / shelf / status / title
- search by title / shelf / issue / source

### Counts
Counts are useful because they reinforce archive scale.
Examples:
- visible / total
- shelf count
- indexed / new / queued

These should stay compact and embedded into the chrome.

### Responsiveness
When the viewport shrinks, preserve the same logic:
- controls condense, but do not disappear entirely
- grid collapses from 4 columns downward
- cover remains the dominant object inside each tile
- metadata remains short and aligned to edges

---

## Anti-Drift Rules
The page fails if it drifts toward any of these:
- “beautiful marketing site”
- “editorial essay homepage”
- “modern dashboard with feature cards”
- “portfolio gallery with oversized captions”
- “app shell with sidebar-heavy navigation”

The page passes if it clearly feels like:
- a browser layer
- a shelf layer
- a catalog layer
- an archive holdings surface

---

## Acceptance Heuristic
The implementation passes only if all of these feel true:
1. **First read is archive/catalog, not marketing.**
2. **Most of the viewport is occupied by browsable objects.**
3. **Cover/object tiles are the visual center of gravity.**
4. **Metadata is light enough that scanning beats reading.**
5. **The page rhythm still clearly echoes the original Booookin demo grid logic.**
6. **The surface plausibly supports archive/browser/shelf/catalog use inside the same product.**

### Failure test
If someone says:
- “this is a nice website for Signal Cabinet” → too generic, likely failed
- “this looks like the archive browsing layer of Signal Cabinet” → mode is correct
- “this feels like a shelf/catalog transposed from the original reference” → target hit
