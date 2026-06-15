---
name: pickup
description: Use when the user says /pickup, "pick up where we left off," "what were we working on," or wants to resume a previous session's work. The load to remember's save.
---

# Pickup

**When this skill triggers, start your response with:** `Using pickup skill`

## Overview

Resume a previous session. Read what was saved, load the relevant context, and orient the user on where things stand so he can keep going without re-explaining.

## Workflow

### 0. Verify the Current Date

Run `date '+%Y-%m-%d %H:%M %Z'` in Bash first. The gap between "last time" and "now," and which daily note is today's, both depend on the real date. Never trust the injected `currentDate` context (set at session start, can be stale). If file mtimes or Chat Log timestamps conflict with the injected date, trust the live data.

### 1. Read Current Context

Start with [[Current Context]]. This has the active threads, where things left off, and what needs attention. Note which threads have the most recent dates and which files are linked.

### 2. Read the Latest Chat Log Entry

Open `Chat Log.md` and read the most recent entry. This has:
- **Topics:** What was covered
- **What got persisted:** Which files were updated
- **Key context:** The thinking, connections, and unresolved items that are hardest to reconstruct

The Chat Log entry often has nuance that Current Context doesn't. Decisions that were discussed but not finalized. Patterns that were noticed. Things that felt off.

### 3. Read the Linked Files

Based on what Current Context and the Chat Log point to, read the specific sections that matter:
- Daily note entries referenced (use section anchors)
- Tickets or epics that were updated
- Analysis docs or knowledge notes that were created/modified
- Anything in "Open For Next Session"

Don't read everything in the vault. Read what the breadcrumbs point to.

### 3.5. Close Open Loops

**Run `_shared/loop-closer.md` against what the session left open.** Pickup is otherwise read-light; this is the one step that reaches into the channels. The payoff at session start is high: "the thing you were waiting on landed overnight" is exactly what you want to know before re-engaging.

- Detection sources: Current Context `Pending Asks (owed)` + the last session's Chat Log entry + the daily notes the breadcrumbs point to (grep loop-phrases: awaiting/pending/waiting on/owed/unresolved).
- Targeted per-loop lookup in mail + team chat (check DM↔channel both ways). A reply can resolve a loop without naming it. connect it.
- **Auto-persist the resolution flip** (awaiting→resolved on the source ticket/CC/daily note, with evidence). Ambiguous → surface as "confirm?" not a write. This is the only vault write pickup performs; everything else stays a read.
- Feeds the "What's waiting on others" line in Orient — say what actually resolved vs. what's still open, not a stale guess.

### 4. Orient

Give the user a concise briefing:

**Where we left off:** 2-3 sentences. What was the last session about, what was the last thing discussed or decided.

**Active threads:** Bulleted list of threads that have clear next steps. Lead with the most actionable ones.

**What's waiting on others:** Anything blocked on someone else. Quick status if known.

**What needs attention:** Items from "Open For Next Session" that look time-sensitive or stale.

Keep it tight. This is a launchpad, not a report.

### 5. Bridge

Close with: **"Where do you want to pick up from?"** followed by 2-4 numbered options. Brief topic label plus one-line summary of where it stands or what's next. No fake quoted prompts. Just a scannable menu. Numbered so the user can reply with just a number to select.

Example:
1. **WP Engine cron strategy** . Site stable, need a plan for re-enabling essential jobs safely
2. **NeuroX launch prep** . Production target Tuesday, your lead hasn't confirmed B2B script yet
3. **Allovus onboarding** . Offer not accepted, Monday start date

Lead with the most urgent or time-sensitive item.

## Hard Rules

- **Don't summarize the entire vault.** Only surface what's relevant from the last session and active threads.
- **Don't guess at state. Verify it.** If Current Context says "waiting on your lead," the Open Loops step (3.5) should check the channels and tell you whether your lead delivered, not punt to "last known." Only fall back to "last known: waiting on your lead" if loop-closer finds no resolving evidence. Never assume a loop closed without evidence.
- **Read before orienting.** Don't produce the briefing from memory or CLAUDE.md alone. Actually read Current Context, Chat Log, and linked files.
- **Be brief.** The whole point is to get the user back into flow fast. If the orient section is more than a screen, it's too long.
- **If there's nothing to pick up** (empty Current Context, no recent Chat Log entries), say so. Don't manufacture context.
