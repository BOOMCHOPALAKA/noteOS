---
name: status-report
description: Use when the user asks for a "status report," "weekly update," "weekly status report," "monthly summary," "monthly recap," or "daily report," or needs to produce a summary of work for stakeholders, managers, or clients at any cadence (daily, weekly, or monthly).
---

# Status Report

## Overview

Produce structured status reports for projects or clients at any cadence (daily, weekly, or monthly). These get shared with external readers (stakeholders, managers, clients) who don't have access to the vault. They must stand alone without vault-specific references.

The cadence sets the window and the altitude. Daily is a tight "what moved today." Weekly is the default. Monthly zooms out to themes and outcomes rather than task-by-task detail. The section structure below is the same across all three; what changes is the time window you source from and how much you roll up.

**If the user manages multiple clients or projects, each gets its own report.** Never mix items from different clients/projects.

## Sourcing Content

Source from the time window the cadence implies (today for daily, the week for weekly, the month for monthly):

1. Read the daily notes covering the window (`Calendar/[Month]/[Week]/`)
2. Read any meeting summaries processed in the window
3. Check relevant project notes, Basecamps, and tickets
4. Cross-reference the previous report if one exists (IN PROGRESS and UPCOMING items become this period's COMPLETED or carry forward)

## Report Structure

Sections in order. Skip any section with no content.

### 1. COMPLETED
Done work. Bold headers per item with dates. 1-2 sentences max. Group small items under "Other Completed Items" with who did the work in parentheses.

### 2. IN PROGRESS
Active work. Lead with critical/blocking items as their own bold sections. State what's blocking and the next step. Group smaller items under "Other In Progress."

### 3. DECISIONS
Bullet list. Only decisions that affect schedule, scope, or approach. Include who made the call when relevant.

### 4. UPCOMING
Bullet list with dates or timeframes. Be specific about conditions.

### 5. NOTES
Standout callouts only: exceptional work, biggest risks, systemic issues. 2-3 bullets max. Skip entirely if nothing warrants it.

## Filing

- File: `[Project] [Cadence] Status Report - [Date or Range].md` (e.g. `Acme Weekly Status Report - Week of May 18.md`, `Acme Monthly Status Report - April 2026.md`)
- Location: `Calendar/[Month]/[Week]/` alongside daily notes
- **Always save to vault file AND output in chat.** Never just chat output.

## Style Rules

- Informative and succinct. No filler, no buzzwords, no alarmist language.
- Plain language. Let numbers and details speak for themselves.
- Bold item names in COMPLETED and IN PROGRESS.

## Source Discipline (critical)

A status report goes to people who will act on it and quote it to their own stakeholders. A claim that's wrong here propagates. Every concrete claim (a milestone, a date, a number, a status, a decision, an attribution) must trace to a real source: a daily note entry, a meeting summary, a deploy log, a commit, a message, or a direct statement.

The trap is translating operational language into milestone language. They are not interchangeable:

| Source said | Don't write | Write |
|---|---|---|
| "going live Monday" | "launched Monday" | "going live Monday (per [source])" |
| "should be ready" | "shipped" / "done" | "expected ready, not yet confirmed" |
| "we're testing it" | "tested and verified" | "in testing" |
| "I think the client's good with it" | "client approved" | "client appears on board (per [whoever said it])" |

Rules:
- **RELEASED / COMPLETED means actually done.** Deployed to production, shipped, confirmed. Staging, "ready," or "should be done" goes in IN PROGRESS, not COMPLETED.
- **Match the source's hedge level.** If the source hedged, the report hedges.
- **No claim without a source.** If you can't trace it, hedge it or cut it.
- **Don't soften disagreement into consensus.** If people disagreed, the report can say a decision is pending, not that everyone aligned.

See `skills/_shared/source-discipline.md` for the full rule and the four failure modes.

## External Sharing

Proactively offer a clean version for sharing outside the vault:
- Strip all `[[wiki links]]` to plain text
- Strip all hashtags
- Convert markdown tables to bullet lists
- Remove vault navigation links
- Output in a code block for easy copy/paste
