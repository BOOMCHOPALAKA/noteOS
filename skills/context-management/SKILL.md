---
name: context-management
description: Use when updating the cross-session whiteboard (Current Context) after processing meetings, making decisions, resolving threads, or at session handoff. Also use when the user asks "what's active," "what am I tracking," or when the cross-session whiteboard needs maintenance. Manages the Current Context file specifically — adding new threads, removing resolved ones, updating status, and keeping it under the size ceiling.
---

# Context Management

**When this skill triggers, start your response with:** `Using context-management skill`

## Overview

Current Context is the cross-session whiteboard. It's what lets you pick up exactly where you left off, across sessions and across days. This skill maintains it.

The whiteboard has one job: hold the things that would take too long to re-derive from scratch if you walked away for a week. Active threads, open decisions, blocking questions, next moves. Everything else stays in the vault.

## When This Runs

- After processing a meeting transcript
- After a decision gets made that changes an active thread
- After a thread resolves (it needs to come off the board)
- When you explicitly say "update Current Context" or "update the whiteboard"
- At natural session close (after `/remember`)
- When you ask "what's active" or "what am I tracking"

## The File

`Current Context.md` lives in the vault root. It's read at the start of every session by the vault-first search behavior. It should be:
- **Small enough to load fast.** Hard ceiling: 50 KB / 1500 lines. Archive when approaching that limit.
- **Current enough to trust.** If a thread on the board is 3 weeks stale with no movement, either update it or remove it.
- **Source-honest.** Every status claim should trace to something — a transcript, an email, a decision made in session.

## Reading the Whiteboard

When you ask "what's active" or "what am I tracking":

1. Read Current Context.md
2. Surface the active threads in a short summary: thread name, current state, what's open
3. Flag anything stale (no update in 7+ days)
4. Ask if anything should be removed, added, or updated

## Writing to the Whiteboard

### Adding a new thread
Use this when something new needs tracking across sessions:

```
## [Thread name]
**Status:** [one-sentence current state]
**Last updated:** [date]
**Open:** [what's unresolved]
**Next move:** [specific next action or expected event]
**Source:** [where this came from — meeting, email, decision in session]
```

Keep thread entries tight. The whiteboard is a pointer, not a document. If there's deep context, it lives in a vault note — put a link here.

### Updating an existing thread
- Change `Status` to current state
- Update `Last updated` to today's date
- Revise `Open` to reflect what's still unresolved
- Update `Next move` to reflect what happens next
- Add a `Source` note for the update: "Per [meeting/email/decision] on [date]"

Don't append update history to the whiteboard entry itself. History belongs in the vault note for the thread. The whiteboard entry stays at current state only.

### Removing a resolved thread
When a thread closes (decision made, issue resolved, project shipped):
1. Remove the entry from Current Context
2. Log the resolution to today's daily note: "[Thread] resolved — [one-sentence outcome]"
3. Update the relevant vault note to reflect closure

Don't leave resolved threads on the board. A full whiteboard is a noisy whiteboard.

## Size Management

When Current Context approaches 1000 lines or 35 KB:
1. Flag it: "Current Context is getting large — want to do an archive pass?"
2. On approval: move threads that haven't been touched in 14+ days to `Sweeps/Current Context Archive/[YYYY-MM].md`
3. Keep the active board to threads with movement in the last 2 weeks, plus anything explicitly flagged as long-running
4. Log the archive: "Archived [N] threads to [file] on [date]"

## Multi-Session Discipline

Other sessions may be running in parallel and writing to Current Context. Before updating:
1. Read the current file state — don't write from a cached version
2. Preserve entries from other sessions
3. Only remove entries you are certain are resolved from your current session's context

If unsure whether another session's entry is still live, leave it and flag it instead of removing it.

## Interaction with Other Skills

- **remember:** `/remember` calls context-management as part of its workflow. The whiteboard update is the persistent artifact; the session chat log is ephemeral.
- **pickup:** `/pickup` reads Current Context as its first move. The quality of the pickup depends on the quality of the last whiteboard write.
- **meeting-transcript-processing:** Processing a meeting almost always surfaces whiteboard updates — new threads, status changes, resolved items.
- **full-picture:** Full-picture patches Current Context after its sweep. Context-management handles targeted single-thread updates.
