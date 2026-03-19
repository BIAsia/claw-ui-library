# Agent Probe / Traditional Agent / 005 — Mode-Preserving Spec

## Purpose
This spec locks **Traditional Agent / 005** to the compositional mode of the original `case-005-self-esteem-editorial` demo.

The page is the **editorial / publication layer** of the Traditional Agent product family.
It should show how the product publishes work back to humans after intake, routing, and execution.

It is **not**:
- a dashboard
- a task board
- a feature-marketing stack
- a documentation center
- a reporting page with widgets

It must behave like a **publication front page** for agent dispatches, operator notes, and finished briefings.

---

## Product role
If 003 is the entrance poster and 004 is the browser layer,
**005 is where the agent speaks back in finished form.**

This page should imply outputs such as:
- dispatches
- briefings
- issue summaries
- operator notes
- team memos
- published recaps
- field reports

The key is that Traditional Agent becomes legible as a **publishing instrument for work**, not just a system for storing it.

---

## Locked mode
**Magazine-style editorial front page**

Traditional Agent may change the copy and subject matter.
It may **not** convert the page into a SaaS landing page or a dashboard with editorial styling pasted on top.

---

## Structural model (mandatory)
Preserve the original three-part front-page structure:

1. **Left rail / publication navigation**
   - sparse, publication-led navigation
   - reads like issue/site sections or desk labels
   - includes publication signature or subscribe/archive affordance

2. **Center column / masthead + scenic field + lead story**
   - oversized masthead/title relationship
   - date / issue metadata
   - one dominant scenic field
   - one lead editorial headline + byline/meta + short deck
   - one issue marker / continuation cue

3. **Right rail / issue blocks**
   - a few supporting article-like entries
   - compact and editorial
   - not feature cards or product pillars

---

## Translation rules for Traditional Agent
The subject matter should feel like:
- the weekly issue of an operator desk
- dispatches from an AI-assisted execution team
- reviewed outputs published for human consumption
- field reports after agent work has completed

Good semantic territory:
- operator desk
- dispatches
- issue notes
- desk memo
- release bulletin
- weekly queue review
- handoff journal
- review ledger

This is more classical and work-oriented than Signal Cabinet’s cultural/editorial mood.

---

## Scenic field rule
A scenic field is still required.
But for Traditional Agent it can imply:
- a distant operations landscape
- quiet shipping / delivery imagery
- dispatch atmosphere
- a controlled, procedural horizon

It should still feel like an editorial image plate rather than a feature card illustration.

---

## Typography and tone
Typography should preserve the magazine mode:
- strong masthead
- refined editorial contrast
- optional serif italic accents
- date / byline / reading-time style metadata

Tone should be:
- composed
- responsible
- procedural
- publication-led
- not brand-hype driven

---

## Navigation rules
Navigation must read as publication-led, not app-led.
Preferred labels:
- Issue
- Dispatches
- Desk
- Archive
- Notes
- Subscribe
- Releases

Avoid:
- Features
- Pricing
- Integrations
- Dashboard
- Analytics
- Settings
- Get started

---

## Explicit prohibitions
Do **not** add or emphasize:
- product hero copy
- feature sections
- KPI strips
- CTA conversion blocks
- dashboard widgets
- tabbed product modules
- “how it works” sections
- card-grid marketing stacks

If it feels like a startup website wearing editorial clothes, the mode is wrong.

---

## Acceptance checklist
A correct implementation should satisfy all of these:
1. Reads immediately as a **publication front page**
2. The **masthead + scenic field + lead story** dominate first impression
3. Supporting entries read as **dispatch/article blocks**, not features
4. Navigation reads as **publication-led**
5. The concept is recognizably **Traditional Agent** rather than Signal Cabinet
6. The page preserves the original 005 demo’s editorial homepage mode

---

## Failure tests
Reject if any are true:
- it reads like a product landing page
- it reads like a reporting dashboard
- the right rail becomes feature cards
- the scenic field disappears or becomes an app illustration
- the concept still feels archive-poetic instead of operational/editorial

Pass if a viewer would say:
- “this looks like the publication layer of an AI operator product”
- “the agent seems to publish desk dispatches, not just run jobs”
- “the original editorial front-page mode is preserved”
