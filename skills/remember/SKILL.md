---
name: remember
description: Use when the user says /remember, "log this chat," or asks to capture/log/document what was discussed in the current session. Also offer proactively at natural breakpoints after substantial work. On-demand session persistence.
---

# Remember

**When this skill triggers, start your response with:** `Using remember skill`

## Overview

On-demand session capture. When fired, assess everything substantive from the current conversation and persist it to the right places in the vault. The user shouldn't have to explain what or where. Figure it out.

**Also offer proactively** at natural breakpoints: after processing transcripts, after a big decision, after creating multiple notes, after any substantial block of work. The nudge should be specific: "Want me to log this session? We covered X, Y, and Z."

## Workflow

### 0. Get the Current Date and Time

Run `date '+%Y-%m-%d %H:%M %Z'` to get the actual current date and time. Don't rely on the system context date, which is set at session start and may be stale. Use this timestamp for all entries (Chat Log headers, daily note routing, Current Context date markers).

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
| What happened today, meeting notes, status updates | Daily note Body |
| Action items, follow-ups | Daily note TODO section |
| Findings about an active project or topic | That project's note or relevant section |
| Cross-session state (what's active, what's blocked, what's next) | Current Context (if the vault uses one) |
| New understanding of a system, process, or domain | Existing knowledge note |
| Something that changes how you'd understand a whole topic | Basecamp in Map/ |
| New topic with enough substance for its own note | Ask first, then create |

**Minimum targets per session:** Daily note entry. If the vault has a Current Context file, refresh that too. Most sessions will also touch project notes or knowledge notes. Current Context covers everything discussed, not just work projects. Personal projects, hobbies, research, side work. If it's an active thread, it belongs there.

### 3. Execute Updates

For each target:
- **Read the file first.** Always. Check what's already there. Don't duplicate or overwrite.
- **Update the relevant section**, don't rewrite the whole document.
- **Link everything.** First mention of any topic with an existing vault note gets a wiki link. Search for related Basecamps and notes before saving.
- **Follow existing format.** Match the structure and style of whatever file you're updating.

**Current Context (critical for continuation):**

This is the bridge between sessions. A new conversation reads Current Context first. Write it for a cold reader who needs to pick up where you left off.

1. Read existing content. Preserve other sessions' entries.
2. **Timestamp every entry.** Run `date` (step 0) and include the date in each thread heading or entry. Also update the file's `*Last updated:*` line at the top if it has one. This makes it obvious how fresh each piece of context is when a future session reads it.
3. For each active thread discussed this session, write entries that answer:
   - What's the current state? (not history, just where things stand right now)
   - Where did we stop? (the last thing discussed or decided)
   - What's the immediate next step?
   - What files should a new session read to get full context? (daily note sections, analysis docs, project notes. Use specific `[[links]]` and section anchors)
4. Update "Open For Next Session" as a pickup prompt, not just a checklist. Each item should have enough context that a new session can act on it without needing re-explanation.
5. Remove resolved items. Prune stale entries.

### 4. Log to Chat Log

If the vault has a Chat Log (or similar session log), append an entry in reverse chronological order (newest at top):

```markdown
### YYYY-MM-DD, HH:MM TZ (Short Session Description)

**Topics:** What was discussed in 1-2 sentences.

**What got persisted:**
- Bulleted list of files updated and what changed, with [[wiki links]]

**Key context:** 1-3 sentences of non-obvious context that would help a future session understand why this work mattered or what was left unresolved.
```

**Key context is the most important field.** Notes and project files are findable. The thinking that led to them, the connections made in conversation, the things discussed but not yet written down. That's what gets lost between sessions.

If no Chat Log exists, suggest creating one.

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

After all updates, output a brief summary in chat:
- Which files were updated
- What was captured where
- Anything you chose NOT to persist and why (if relevant)

### 8. Session Recap

After the persistence sweep, close with a bulleted recap of the conversation. Each bullet is one topic or thread, with a sentence on what happened and where it landed. This captures the arc, not just the artifacts. The goal is that the user can skim the bullets and immediately see what was covered, not just what files changed. Keep each bullet to 1-2 sentences. Group related items into the same bullet.

**Always close with a natural reminder about the Chat Log.** The Chat Log is a running record of all sessions, what was discussed, what got persisted, and key context. Remind the user it's there if they want to review. Vary the phrasing. Examples: "All session entries live in [[Chat Log]] if you want to look back at what's been captured." / "Everything's logged. [[Chat Log]] has the full history across sessions."

## Hard Rules

- **Every remember run gets its own Chat Log entry.** Never update or merge into a previous entry. Even if remember ran 10 minutes ago in the same session, create a new entry with a new timestamp. The Chat Log is an append-only log.
- **Read before writing.** Every file, every time. No blind overwrites.
- **Section updates over full rewrites.** Touch what needs touching.
- **Ask before creating new standalone notes.** Daily note entries and section updates to existing notes just happen. New files need a yes.
- **Link to the vault web.** No orphan content. Search for connections before saving.
- **Bias toward thoroughness.** When in doubt, document it. Better to capture something that turns out to be minor than to lose something that mattered.
- **Don't duplicate.** If something was already persisted earlier in the session (by another skill or manual request), don't write it again. Check first.
- **Respect parallel sessions.** Current Context and daily notes may have entries from other sessions. Preserve them.
