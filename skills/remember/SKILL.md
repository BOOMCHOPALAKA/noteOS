---
name: remember
description: Use when the user says /remember, "log this chat," or asks to capture/log/document what was discussed in the current session. Also offer proactively at natural breakpoints after substantial work. On-demand session persistence.
---

# Remember

**When this skill triggers, start your response with:** `Using remember skill`

## Overview

On-demand session capture. When fired, assess everything substantive from the current conversation and persist it to the right places in the vault. the user shouldn't have to explain what or where. Figure it out.

**Also offer proactively** at **session-end and major-milestone breakpoints only**: wrapping up for the day, after processing transcripts, after a big decision, after creating multiple tickets, after any substantial block of work that's clearly closing out. The nudge should be specific: "Want me to log this session? We covered X, Y, and Z."

**This is the boundary with [[update-notes]].** Mid-flow "want me to file this one finding?" moments are `/update-notes` territory, not `/remember`. `/remember` fires when the session (or a major chunk of it) is closing and the cross-session bridge needs writing — Chat Log, Current Context, daily note. If you're just parking a fact and the conversation is still going, that's `/update-notes`.

## Workflow

### 0. Get the Current Date and Time

Run `date '+%Y-%m-%d %H:%M %Z'` to get the actual current date and time. Don't rely on the system context date, which is set at session start and may be stale. Use this timestamp for all entries (Chat Log headers, daily note routing, Current Context date markers).

**Late-bank sessions (work happened on a prior day):** When you're logging work that happened on a different day than this remember run fires, stamp each artifact to when it's true: the daily note to the day the work happened, the Chat Log entry to now (the actual run time from `date`), and Current Context to now. State the date split inline in the Chat Log Topics field so a future reader isn't confused. Before patching Current Context, check whether a parallel or later session already advanced it past this work — if so, don't regress it.

### 1. Assess What Was Discussed

Scan the full conversation for:
- Decisions made
- New information learned (about systems, people, projects, processes)
- Analysis or investigation findings
- Status changes on existing work
- Action items identified
- Problems surfaced or resolved
- Anything that would be useful context in a future session

### 2. Determine Where Things Go

For each substantive item, decide the right destination. Common targets:

| What | Where |
|---|---|
| What happened today, meeting notes, status updates | Daily note Body (Work or Personal) |
| Action items, follow-ups | Daily note TODO section |
| Findings about an active ticket or epic | That ticket/epic's activity log or relevant section |
| Cross-session state (what's active, what's blocked, what's next) | [[Current Context]] |
| New understanding of a system, process, or integration | Existing knowledge note or ticket |
| Something that changes how you'd understand a whole territory | Basecamp in Map/ |
| New topic with enough substance for its own note | Ask first, then create |

**Minimum targets per session:** Daily note entry + Current Context refresh. Most sessions will also touch tickets, epics, or knowledge notes. Current Context covers everything discussed, not just client work. Personal projects, skill-building, real estate, consulting, gear research. If it's an active thread, it belongs there.

### 3. Execute Updates

For each target:
- **Read the file first.** Always. Check what's already there. Don't duplicate or overwrite.
- **Update the relevant section**, don't rewrite the whole document.
- **Link everything.** First mention of any topic with an existing vault note gets a wiki link. Check for related Basecamps, tickets, and knowledge notes.
- **Activity logs:** Follow existing format in the target file.

**Current Context (critical for continuation):**

This is the bridge between sessions. A new conversation reads Current Context first. Write it for a cold reader who needs to pick up where you left off.

1. Read existing content. Preserve other sessions' entries.
2. **Timestamp every entry.** Run `date` (step 0) and include the date in each thread heading or entry. Example: `### WP Engine Performance Crisis — Root Cause Identified (April 3)`. Also update the file's `*Last updated:*` line at the top. This makes it obvious how fresh each piece of context is when a future session reads it.
3. For each active thread discussed this session, write entries that answer:
   - What's the current state? (not history, just where things stand right now)
   - Where did we stop? (the last thing discussed or decided)
   - What's the immediate next step?
   - What files should a new session read to get full context? (daily note sections, analysis docs, tickets. Use specific `[[links]]` and section anchors like `[[2026-04-03#WP Engine Log Analysis]]`)
4. Update "Open For Next Session" as a pickup prompt, not just a checklist. Each item should have enough context that a new session can act on it without asking "what does this mean?"
5. Remove resolved items. Prune stale entries.

### 4. Log to Chat Log

Append an entry to `Chat Log.md` following the existing format (reverse chronological, newest at top after the Compass section):

```markdown
### YYYY-MM-DD, HH:MM TZ (Short Session Description)

**Topics:** What was discussed in 1-2 sentences.

**What got persisted:**
- Bulleted list of files updated and what changed, with [[wiki links]]

**Key context:** 1-3 sentences of non-obvious context that would help a future session understand why this work mattered or what was left unresolved.
```

**Key context is the most important field.** Notes and tickets are findable. The thinking that led to them, the connections made in conversation, the things discussed but not yet written down. That's what gets lost between sessions.

### 5. Persistence Sweep

Before reporting back, check: is there anything substantive from this session that hasn't been persisted? Be specific:
- "We discussed X but I didn't write it anywhere yet. Want me to add it to [specific note]?"
- "The analysis we did on Y would be worth capturing as [specific type of note]."

Don't be generic ("anything else to save?"). Name what and where.

### 6. Note & Basecamp Evaluation

After the persistence sweep, evaluate whether any topic from this session has outgrown its current home. Three signals:

1. **Basecamp candidate.** A topic came up that has (or is accumulating) 3+ related notes, and there's no hub to orient from. The test: "Would a new session need to understand this territory, not just one note within it?" Search the vault to confirm no Basecamp already exists for the topic and to count how many notes touch it.

2. **Standalone note candidate.** Something substantive was discussed that's currently only captured in a daily note entry or conversation, but it'll be referenced independently later. A decision with reasoning, an analysis with findings, a plan with steps.

3. **Neither.** Most sessions. The daily note and existing notes handled it. Don't force it. If nothing warrants a new note or Basecamp, say nothing about this step.

If something qualifies, make a specific suggestion: "X is starting to feel like Basecamp territory. You've got [[note A]], [[note B]], and [[note C]] all touching it. Want me to set one up?" Or: "The analysis we did on Y has enough substance to stand alone. Right now it's just in the daily note. Want a dedicated note?" Never create without asking.

### 7. Report Back

After all updates, give the user a brief summary in chat:
- Which files were updated
- What was captured where
- Anything you chose NOT to persist and why (if relevant)

### 8. Session Recap

After the persistence sweep, close with a bulleted recap of the conversation. Each bullet is one topic or thread, with a sentence on what happened and where it landed. This captures the arc, not just the artifacts. The goal is that the user can skim the bullets and immediately see what was covered, not just what files changed. Keep each bullet to 1-2 sentences. Group related items into the same bullet.

**Always close with a natural reminder about the Chat Log.** The Chat Log is a running record of all sessions, what was discussed, what got persisted, and key context. Remind the user it's there if he wants to review. Vary the phrasing. Examples: "All session entries live in [[Chat Log]] if you want to look back at what's been captured." / "Everything's logged. [[Chat Log]] has the full history across sessions."

## Hard Rules

- **Every remember run gets its own Chat Log entry.** Never update or merge into a previous entry. Even if remember ran 10 minutes ago in the same session, create a new entry with a new timestamp. The Chat Log is an append-only log.
- **No new content since last run = still a new entry.** If remember is re-fired in the same session with nothing substantive added since the prior run, create a new timestamped entry anyway (append-only holds), but keep it short: note "no new content since [HH:MM TZ] run" and point to the prior entry's captures. Don't re-persist what the prior run already wrote.
- **Read the FULL file before writing.** Every file, every time. Not just the section you plan to edit. Partial reads miss stale content elsewhere in the file — read top to bottom before confirming any update is complete.
- **Section updates over full rewrites.** Touch what needs touching.
- **Ask before creating new standalone notes.** Daily note entries, activity log updates, and section updates to existing notes just happen. New files need a yes.
- **Link to the vault web.** No orphan content. Search for connections before saving.
- **Bias toward thoroughness, but every claim sourced.** When in doubt, document it — but only what the conversation actually established. Don't compensate for thin source material with confident synthesis. Hedge or omit when uncertain.
- **Don't duplicate.** If something was already persisted earlier in the session (by another skill or manual request), don't write it again. Check first.
- **Respect parallel sessions.** Current Context and daily notes may have entries from other sessions. Preserve them.
- **No Recap writes.** Daily note Recap section is only written when explicitly asked. This skill writes to Body and TODO.

## Source discipline before writing

This skill writes to vault files (daily notes, Current Context, Chat Log, ticket activity logs) that future sessions and stakeholder copy treat as truth. **Apply source discipline at every claim.** See `_shared/source-discipline.md` and `_shared/source-discipline.md`.

Before writing each section update, especially the **Key Context** field in Chat Log entries (which is a synthesis field):

1. Did the conversation actually establish this as fact, or am I synthesizing?
2. If a claim has a hedge in the source ("should be," "I think," "tentatively"), the vault entry preserves the hedge.
3. Am I claiming a milestone the source supports? "Launched," "shipped," "approved," "decided" all need direct evidence.
4. Am I treating chat exploration as conclusion? Inferences belong in clearly labeled "my read" framing, not assertions.

The Key Context field in particular is where session-level interpretation gets baked in. Future /pickup runs read it as truth. Hedge harder there than you would in chat.

If this entry supersedes an earlier writeup (or is itself likely to be superseded by a later layer — e.g. a morning framing overtaken by an afternoon triage), say so explicitly so a future reader doesn't trust a stale layer standalone.

<!-- improved 2026-06-02: re-trigger handling (no-new-content path), late-bank session convention, stale-layer flagging in Key Context — per 3+ runs each in Chat Log (May 11 re-triggers; June 1-2 late-bank entries; Apr 28 + June 1 MSRP stale-layer flags) -->
