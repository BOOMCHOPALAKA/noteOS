---
name: smoking-gun
description: Codebase forensics for attribution questions. Use when the user or a stakeholder asks "is this ours," "where did this come from," "who wrote this," "when was this added." Runs grep → mechanism trace → git blame → attribution → evidence stamp. Produces a paste-ready evidence trail for tickets, messages, or live-call responses. Different from codebase-investigation (tracing behavior) and codebase-review (full audit).
---

# Smoking Gun

**When this skill triggers, start your response with:** `Using smoking-gun skill`

## Overview

Codebase forensics. When someone asks "is this our code, where did it come from, who wrote it, and when," run the trace. Produce a defensible attribution with an evidence trail that any developer can retrace independently.

## When To Use

- "Is this our code?"
- "Where did this come from?"
- "Who wrote this?"
- "When was this added?"
- "Is this from a prior vendor / agency / contractor?"
- "Is this mechanism in the repo?"
- Pre-ticket triage when you need to know if a bug is in code your team wrote vs. inherited
- Mid-call when a stakeholder asks attribution questions and you need a fast answer

## Prerequisites

### Repo context

Figure out which repo to search before running the trace:

1. Check recent session context — if a specific repo or file path was mentioned recently, use that
2. Check Current Context for the active thread (it usually implies the repo)
3. Check your MEMORY.md "Local Repos" section for the canonical list
4. If still ambiguous, ask once: "Which repo should I look in?"

Don't guess. A wrong-repo trace is worse than a 5-second clarifying question.

### Sync the repo before any trace

Attribution runs on git history. A stale checkout silently drops recent commits, so "who wrote this / when" comes back wrong. Before grepping or blaming:

```
git fetch --all --prune && git pull
```

Note the commit you synced to. If the working tree is dirty or on a feature branch, flag it before pulling. If a pull isn't possible (no remote, zip-only), say so in the evidence stamp — nobody should read a stale trace as authoritative.

### Identifiers to search

You'll usually be given one or more of:
- A specific string (function name, CSS class, config key, ID value)
- A concept ("the session storage code that fires analytics")
- A file path
- A screenshot showing admin UI or code

Derive search terms from what you have. If only a screenshot, extract visible identifiers before grepping.

## Workflow

### Step 1: Grep for identifiers

Run a broad grep across the target repo for every identifier:

```
grep -r "<identifier>" <repo-path>
```

Search:
- The exact identifier
- Close variants and related patterns
- Concept-based terms if the literal string isn't found

Record what you find: files, line numbers, rough context.

Flag scope: if you didn't search certain directories (plugins, vendor, etc.), say so. The team may need to re-run with full access.

### Step 2: Trace the mechanism

For each file the identifier appears in, read the context. Answer:
- What does this code do?
- What other files does it touch?
- What's the full chain of behavior?

If the mechanism spans multiple files, map it:
- **Writers:** where is data/state created?
- **Readers:** where is it consumed?
- **Triggers:** what user action starts the chain?

Cite everything with `file:line` format.

### Step 3: Pull git blame / git log

For each file in the mechanism:

```
git log --all --follow --format="%h %ad %an - %s" --date=short -- <file>
```

Look for:
- **Authorship patterns.** Is the same author/email on every commit? Shared vendor accounts are the signal, not individual names.
- **Commit message patterns.** Does the author use a distinct ticket format?
- **Date ranges.** When was this code active? Does it align with a known engagement period?
- **The critical commit.** The one that introduced the behavior. Pull its full diff: `git show <hash>`

### Step 4: Cross-check with your team's activity

Grep commits for your team's authors in the relevant files:

```
git log --all --author="<team-member-email>" -- <file>
```

Confirm whether anyone on the current team has touched this code since the original author. If not, the original attribution is clean. If yes, note what the later commits changed.

### Step 5: Surface the evidence trail

Produce the Evidence Stamp (output format below).

## Evidence Stamp (Output Format)

This is the core deliverable. Paste-able into tickets, messages, or readable aloud on calls.

```markdown
**Repo:** [repo-name]

**Mechanism** (what the code does):
[1-3 sentence plain-language description, citing file:line]

**Files involved:**
- `path/to/file:lines` — [role in the mechanism]
- `path/to/file:lines` — [role in the mechanism]

**Git blame:**
- All commits touching [mechanism] authored by [name/email] ([affiliation if known])
- Commits span [date range]
- Critical commit: [hash] ([date]), message: "[commit message]", ticket: [ticket-id if present]
- This commit introduced: [what it added]

**Current-team activity:**
[Whether anyone on the current team has touched this code since the original author, and if so, what they did]

**Search terms used** (for anyone to retrace):
- Grepped for: [term1], [term2]
- Ran `git log --all --follow` on each file
- Cross-checked current-team authors with `git log --author=...`

**Caveats:**
- [Any scope limitations: "Only searched root-level files, didn't include plugins/"]
- [Any hedges on the attribution: "One commit shows unknown author, may be a rebase artifact"]
```

## Output Modes

**Full Evidence Stamp** — for tickets, written reports, async team communication. Use the full template above.

**Compressed (for live calls)** — 2-3 sentences:

> Yes. All commits by [vendor account]. Critical commit [hash], [date], [ticket-id if present]. No current-team touches since.

No explanatory framing. Just the attribution.

**Chat/message update** — between the two. One sentence on the mechanism, one on the attribution, pointer for more detail.

## Hard Rules

- **Never attribute without git blame.** Even if the code "looks like" a specific vendor's style, don't say it's theirs until commits prove it. The blame is the evidence, not vibes.
- **Always cite file:line.** Every claim about what code does must point to a specific location the reader can verify.
- **Always include the critical commit hash.** The hash is what makes the attribution defensible.
- **Flag scope caveats.** If you only searched certain directories, say so. The team needs to know what to re-check.
- **Don't inflate "the" critical commit when it's unclear.** If multiple commits contributed to the mechanism, list the top 2-3. Don't manufacture a single smoking gun.
- **Hedge when genuinely ambiguous.** If commits span multiple authors, name both and let the human interpret. Don't pick a winner to tell a cleaner story.
- **Preserve commit messages verbatim.** Don't clean them up. The original wording is part of the evidence.
- **Never speculate about intent.** "This looks intentional" belongs in your commentary, not the evidence stamp. The stamp is facts only.

## Common Pitfalls

- **Searching only the repo root.** Many projects have code in subdirectories (plugins, packages, vendor). Search broadly, flag what you didn't search.
- **Missing config stored outside the repo.** Some mechanisms (plugin settings, DB-stored config) aren't in the code at all. If grep turns up empty, it may be in a database or admin UI.
- **Conflating file history with mechanism history.** `git log` on a file shows everything that happened to the file, not just the mechanism you care about. Use `git blame` or `git log -L` for line-level history.
- **Taking generic commit authors at face value.** Shared team accounts (`admin`, `dev`, `deploy`) are signals, not conclusive attribution. Note the shared-account pattern explicitly.

## Interaction with Other Skills

- **live-call-mode:** Smoking-gun runs as a subroutine for live attribution questions. Use the Compressed output mode.
- **codebase-investigation:** Investigation is for "how does this work." Smoking-gun is for "who wrote this and when." They're different questions.
- **ticket-creation:** The full Evidence Stamp drops directly into a ticket's overview or background section. Pair the two when creating a ticket driven by attribution.
- **codebase-review:** During a full codebase review, smoking-gun can be invoked to trace ownership of a specific mechanism.
