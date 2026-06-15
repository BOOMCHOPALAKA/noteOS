---
name: full-picture
description: Cross-channel situational awareness sweep on a defined scope. Use when the user runs "/full-picture," "/full-picture [scope]," or says "give me the full picture," "where do we stand on X," "what's the latest on X," "catch me up on X." Pulls all available channels (email, project threads, tickets, vault, transcripts) and produces a current-state read with backstory. Scope can be everything, one project/client, one initiative, one person, or any topic. Journals the result to the vault.
---

# Full Picture

**When this skill triggers, start your response with:** `Using full-picture skill`

## Overview

Cross-channel current-state synthesis on a defined scope. Solves the problem of too many channels and no high-confidence read on where things actually stand.

**Three call patterns:**
- `/full-picture` (no args) → everything currently active, all projects and threads, synthesized
- `/full-picture [project/client]` → one project or client, all channels, current state
- `/full-picture [free text]` → a topic, initiative, person, or anything else

**The same workflow runs every time.** Scope changes the filter, not the logic.

**Catch-up mode (optional).** If you say "catch-up only," "since last run," "what's changed," or "just the new stuff" after a scope, run a lighter variant: same workflow, but skip backstory blocks for threads already covered in a prior run on the same scope. Show only deltas. Useful for re-running on the same scope within hours or days.

## End Goal

A read so current and complete that you could walk into any meeting on the scope and handle any question thrown at you. Not a summary of what you already knew. A synthesis of what's actually true right now, across all channels.

## Scope Detection

| You say | Scope | Channels |
|--------|-------|----------|
| `/full-picture` | Everything active | All |
| `/full-picture [project name]` | One project | All |
| `/full-picture [person name]` | Everything involving that person | All |
| `/full-picture [topic]` | Free-text scope | All |

When scope is ambiguous, ask once to confirm before running.

## Workflow

### Step 0: Date verification
Run `date '+%Y-%m-%d %H:%M %Z'` to confirm the current date before any time-windowed pull.

### Step 1: Vault pull
Search the vault for everything in scope:
- Basecamps, ticket files, meeting notes, daily notes
- Current Context entries for the scope
- Any knowledge notes touching the topic

This gives the baseline: what was known as of the last vault write.

### Step 2: Channel sweep
Pull across all available channels for the scope, prioritized by recency:
- **Email:** new threads, replies to tracked threads, anything from known stakeholders in scope
- **Project/ticket systems:** status changes, new comments, assignment changes
- **Chat/messaging:** relevant threads and DMs
- **Transcripts:** any unprocessed recordings touching the scope

Announce what's being swept: "Pulling email, tickets, and chat for [scope] — give me a moment."

### Step 3: Delta identification
Compare channel results against vault baseline:
- What's genuinely new since the last vault write?
- What moved (status changed, decision made, blocker resolved)?
- What's stale (no movement expected but also none occurred)?
- What's missing (expected update didn't come)?

### Step 4: Synthesis

Produce the full-picture output. Structure:

**[Scope Name] — Full Picture as of [date]**

For each active thread in scope:

```
### [Thread/Project/Topic name]
**State:** [one-sentence current status]
**Since last update:** [what changed — specific, sourced]
**Open:** [what's unresolved or waiting]
**Watch for:** [next expected move or risk]
```

Then a bottom-line section:

```
## Bottom Line
[3-5 bullets: the most important things to know right now across the full scope]

## Gaps
[What couldn't be pulled, what's uncertain, what needs a human check]
```

### Step 5: Journal
Write the full-picture output to the vault:
- Update relevant ticket files with new status
- Update Current Context with the bottom line and timestamp
- Log to today's daily note: "Full picture on [scope] — see [file]"

Announce: "Journaled to vault — [specific files updated]."

## Output Calibration

**Don't summarize what's already known.** If the vault already has "ticket is in QA," the full picture should say "still in QA, no movement in 3 days" not just restate "in QA."

**Source every status claim.** "Per [email from X on date]" or "per [transcript from meeting Y]." No unsourced state assertions.

**Hedge what's inferred.** If the AI is reading between lines, say so. "Appears to be on hold based on no email activity since [date] — not confirmed."

**Separate fact from read.** If there's an interpretation layered on top of facts, label it. "Here's what I know: [facts]. Here's my read: [interpretation]."

## Failure Modes to Avoid

- **Re-stating the vault baseline as if it's current.** The vault is the starting point, not the answer. The channels are the update.
- **Pulling everything and dumping it.** Synthesis means deciding what matters. The output should be shorter than the raw channel pull.
- **Missing the bottom line.** If you had 60 seconds to brief someone walking into a meeting, what would you say? That's the bottom line section. Write that first, then the detail.
- **Journaling without announcing.** Always tell the user what got written and where.

## Interaction with Other Skills

- **catchup:** Lighter version with no journaling. Use catchup when re-orienting on something not actively tracked; use full-picture for a complete current-state read with a vault write.
- **quarterback-mode:** Full-picture is invokable inside quarterback mode for the initial engagement sweep.
- **situation-assessment:** For a quick read on a single pasted thread. Full-picture is for cross-channel synthesis across a whole scope.
- **morning-brief:** Morning brief is a fixed daily structure. Full-picture is on-demand and scope-variable.
