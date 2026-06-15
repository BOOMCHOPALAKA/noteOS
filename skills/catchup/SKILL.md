---
name: catchup
description: Re-orientation skill for topics the user hasn't touched recently. Use when the user runs "/catchup," "/catchup [scope]," or says "catch me up on X," "where did we leave off with X," "remind me what's going on with X," "I haven't touched X in a while." Auto-detects scope window from last vault/session touchpoint, pulls available channels, then synthesizes into a "Last time you saw this / What's new" shape. Re-orientation only — does not journal. Different from /full-picture (which journals and aims for total situational awareness) and /pickup (which resumes the last session).
---

# Catchup

**When this skill triggers, start your response with:** `Using catchup skill`

## Overview

Re-orientation on a topic you haven't touched recently. Reconstructs your prior understanding from vault anchors, then walks the deltas across available channels.

**Three call patterns:**
- `/catchup` (no args) → re-orient on everything currently active
- `/catchup [scope]` → one project, basecamp, ticket, or topic
- `/catchup [free text]` → keyword search across vault and channels

**Different from `/full-picture`:**
- Time window is anchor-derived (last touchpoint), not a fixed window
- Output is "Last time you saw this / What's new since," not per-thread multi-field blocks
- Session-log aware — references prior AI discussions instead of re-explaining
- No journaling — output is chat-only, ephemeral
- No Current Context patches

**Different from `/pickup`:**
- Pickup resumes your last *session* (chat log + Current Context)
- Catchup resumes your last *understanding of a topic* (vault + channels)
- Both can run in the same session for different jobs

## End Goal

Walk away feeling oriented. Not fully briefed (that's full-picture). Not just where you left off in chat (that's pickup). Oriented: you know where the topic stands, what moved since you last touched it, and what needs attention.

## Scope Detection

| You say | Scope |
|---------|-------|
| `/catchup` | Everything currently active in the vault |
| `/catchup [project/topic]` | That specific scope |
| `/catchup [person name]` | Everything involving that person |

When scope is ambiguous, ask once before running.

## Workflow

### Step 0: Date verification
Run `date '+%Y-%m-%d %H:%M %Z'` before calculating any time windows.

### Step 1: Find the anchor
Search the vault for the last time this topic was touched:
- Vault notes, tickets, daily notes, meeting summaries
- Session logs and Current Context entries

The anchor gives the "last time you saw this" baseline. If no anchor exists, say so — this is a first look, not a catchup.

### Step 2: Determine the window
Calculate the time gap between the anchor and now. Announce it: "Looks like you last touched this [X days/weeks ago] — pulling everything since [date]."

### Step 3: Channel sweep (scoped)
Pull only what's relevant to the scope since the anchor date:
- Email threads touching the scope
- Project/ticket updates
- Chat messages or DMs
- Any new transcripts or notes

Announce what's being swept.

### Step 4: Synthesize

Structure the output as:

**[Scope] Catchup — [date]**

```
## Last time you saw this ([anchor date])
[2-4 bullets: what was true, what was open, where things stood]

## What's new since then
[Bulleted deltas, sourced. Each item: what changed, from where.]

## Still open
[What was unresolved then and is still unresolved now]

## Watch for
[Next expected move, upcoming deadline, risk flagged]
```

Keep it tight. This isn't a comprehensive briefing — it's an orientation. If the scope is large, lead with the highest-signal items and note that there's more depth available on request.

### Step 5: No journaling
Catchup output stays in chat. Don't write to the vault unless you explicitly ask. If something surfaces that should be persisted (new info, a decision), offer to capture it: "Want me to update [note] with this?"

## Output Calibration

**Lead with what changed, not what you already knew.** The whole point is the delta. If nothing changed, say so clearly: "Nothing's moved on this since [date] — here's where it stood."

**Source the deltas.** "Per email from [person] on [date]" or "per [ticket] comment." Not "apparently" or "it seems."

**Match the time gap to the tone.** Three days away: quick delta. Three months away: brief the backstory before the delta so context loads properly.

**Be honest about gaps.** If a channel couldn't be pulled or a thread wasn't accessible, say so. Don't present a partial picture as complete.

## Failure Modes to Avoid

- **Re-explaining what you already knew.** If it was in the vault, don't restate it as if it's new. Reference it, then move to the delta.
- **Missing the "what's open" section.** Orientation means knowing what needs attention, not just what happened.
- **Journaling without asking.** Catchup is deliberately ephemeral. Persist only on request.

## Interaction with Other Skills

- **full-picture:** Use full-picture when you want a complete current-state read with vault journaling. Use catchup when you want quick re-orientation without a write.
- **pickup:** Use pickup to resume the last session. Use catchup to re-orient on a topic you've been away from.
- **morning-brief:** Morning brief includes a lightweight catchup on all active work as one of its sections. For a deeper dive on one topic, run catchup separately.
