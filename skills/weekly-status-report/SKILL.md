---
name: weekly-status-report
description: Use when the user asks for a "weekly update," "weekly status report," "status report," or needs to produce a summary of the week's work for stakeholders, managers, or clients.
---

# Weekly Status Report

## Overview

Produce structured weekly status reports for projects or clients. These get shared with external readers (stakeholders, managers, clients) who don't have access to the vault. They must stand alone without vault-specific references.

**If the user manages multiple clients or projects, each gets its own report.** Never mix items from different clients/projects.

## Sourcing Content

1. Read daily notes for the week (`Calendar/[Month]/[Week]/`)
2. Read any meeting summaries processed that week
3. Check relevant project notes, Basecamps, and tickets
4. Cross-reference previous week's report if one exists (IN PROGRESS and UPCOMING items become this week's COMPLETED or carry forward)

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

- File: `[Project] Weekly Status Report - Week of [Date Range].md`
- Location: `Calendar/[Month]/[Week]/` alongside daily notes
- **Always save to vault file AND output in chat.** Never just chat output.

## Style Rules

- Informative and succinct. No filler, no buzzwords, no alarmist language.
- Plain language. Let numbers and details speak for themselves.
- Bold item names in COMPLETED and IN PROGRESS.

## External Sharing

Proactively offer a clean version for sharing outside the vault:
- Strip all `[[wiki links]]` to plain text
- Strip all hashtags
- Convert markdown tables to bullet lists
- Remove vault navigation links
- Output in a code block for easy copy/paste
