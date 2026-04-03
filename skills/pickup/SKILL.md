---
name: pickup
description: Use when the user says /pickup, "pick up where we left off," "what were we working on," or wants to resume a previous session's work. The load to remember's save.
---

# Pickup

**When this skill triggers, start your response with:** `Using pickup skill`

## Overview

Resume a previous session. Read what was saved, load the relevant context, and orient the user on where things stand so they can keep going without re-explaining.

## Workflow

### 1. Read Current Context

Start with Current Context (or whatever cross-session whiteboard the vault uses). This has the active threads, where things left off, and what needs attention. Note which threads have the most recent dates and which files are linked.

### 2. Read the Latest Chat Log Entry

Open the Chat Log and read the most recent entry. This has:
- **Topics:** What was covered
- **What got persisted:** Which files were updated
- **Key context:** The thinking, connections, and unresolved items that are hardest to reconstruct

The Chat Log entry often has nuance that Current Context doesn't. Decisions that were discussed but not finalized. Patterns that were noticed. Things that felt off.

### 3. Read the Linked Files

Based on what Current Context and the Chat Log point to, read the specific sections that matter:
- Daily note entries referenced (use section anchors)
- Project notes that were updated
- Analysis docs or knowledge notes that were created/modified
- Anything in "Open For Next Session" or equivalent

Don't read everything in the vault. Read what the breadcrumbs point to.

### 4. Orient

Give a concise briefing:

**Where we left off:** 2-3 sentences. What was the last session about, what was the last thing discussed or decided.

**What's ready to pick up:** Bulleted list of threads that have clear next steps. Lead with the most actionable ones.

**What's waiting on others:** Anything blocked on someone else. Quick status if known.

**What needs attention:** Items from "Open For Next Session" that look time-sensitive or stale.

Keep it tight. This is a launchpad, not a report. The user will say "let's pick up on X" and then you're in it.

## Hard Rules

- **Don't summarize the entire vault.** Only surface what's relevant from the last session and active threads.
- **Don't guess at state.** If Current Context says "waiting on someone" and you don't know if they delivered, say "last known: waiting on [person]." Don't assume.
- **Read before orienting.** Don't produce the briefing from memory alone. Actually read Current Context, Chat Log, and linked files.
- **Be brief.** The whole point is to get back into flow fast. If the orient section is more than a screen, it's too long.
- **If there's nothing to pick up** (empty Current Context, no recent Chat Log entries), say so. Don't manufacture context.
