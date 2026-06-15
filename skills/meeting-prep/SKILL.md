---
name: meeting-prep
description: Use when the user says "prep me for," "what do I need for," "I have a call with," or references an upcoming meeting he wants to be ready for. Also triggers on "your client sync," "standup," "your vendor sync call," or any named recurring meeting when context is being requested before it starts.
---

# Meeting Prep

**When this skill triggers, start your response with:** `Using meeting-prep skill`

## Overview

Compile a briefing before a meeting so the user walks in knowing what to raise, what to expect, and what's stale. One skill, adapts to meeting type.

## Meeting Types

### Dev Standup (daily, 11 AM ET)
**Source:** Previous standup notes, Current Context, modified tickets since last standup, repo pulse (recent commits/PRs).
**Focus:** What changed overnight. Blockers to raise. Things to follow up on from yesterday. New commits or PRs that need attention.
**Audience:** your lead, Anton, Rost, your developer, your leadimir, Dylan, Tonya.

### your client Weekly (Mondays, 9 AM PT)
**Source:** your client tickets, previous your client weekly notes, Current Context (your client threads only), recent your client repo activity.
**Focus:** Framework 2 progress by phase. What your marketing contact needs to know. What the user needs from your marketing contact. Anything stale.
**Audience:** your marketing contact Lee (primary), sometimes Anton.

### your client's system Weekly Planning
**Source:** your client's system/your integrated system tickets, Current Context (your integrated system threads), recent your client's system meeting notes, any your integrated system team communications.
**Focus:** Integration-layer items only (the user doesn't control vendor internals). What vendor contacts need from your team. What your team needs from your integrated system. Deployment coordination.
**Audience:** Add your recurring meeting participants here.

### Ad Hoc / Other
**Source:** Whatever's relevant. Current Context, related tickets, daily notes, email threads.
**Focus:** Ask the user what the meeting is about, then pull targeted context.

## Briefing Structure

Keep it scannable. Not a document. A cheat sheet.

```
## [Meeting Name] Prep — [Date]

**Raise:**
- Item the user needs to bring up (with context)
- Item the user needs to bring up

**Expect:**
- Thing someone will likely ask about (with the user's current answer)
- Update someone promised last time (did it happen?)

**Stale / Falling Through Cracks:**
- Blocker that's been sitting X days
- Question asked but never answered
- Commitment made but no follow-through

**For Reference:**
- Recent decision that may come up
- Status of thing that's in flight
```

## Blocker Surfacing

Run the `blocker-tracker` skill's detection logic scoped to this meeting's attendees and topics. Use its staleness thresholds and detection sources. Key signals:
- Items in Current Context with no movement in 3+ days
- "Check:" items from daily note TODOs that haven't been resolved
- Tickets assigned to attendees that haven't had updates

Don't just list them. Flag why they matter: "your developer's price revert code dive was supposed to happen Monday. Nothing since. Blocks MSRP rollout."

## Process

0. **Verify the current date.** Run `date '+%Y-%m-%d %H:%M %Z'` in Bash before pulling calendar or context. "Upcoming," "today," and the recency window for prior touchpoints all depend on the real date. Never trust the injected `currentDate` context (set at session start, can be stale). If calendar/MCP timestamps conflict with the injected date, trust the live data.
1. **Identify meeting type** from the user's prompt or calendar context.
2. **Read Current Context.md** for active threads in scope.
3. **Read recent daily notes** (last 2-3 days) for meeting-relevant entries.
4. **Check relevant tickets** for status changes.
5. **Run blocker scan** across those sources.
6. **Compile briefing** in the structure above. Keep it tight.

## What NOT to Do

- Don't write a meeting agenda. This is the user's prep, not the meeting doc.
- Don't include everything. Only what the user needs to know walking in.
- Don't pad with background context the user already knows. New info and stale items only.
- Don't mix clients. your client prep has zero your project content and vice versa.
