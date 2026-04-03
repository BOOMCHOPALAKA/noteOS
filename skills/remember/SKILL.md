---
name: remember
description: Use when the user says /remember or asks to capture/log/document what was discussed in the current session. On-demand session persistence.
---

# Remember

**When this skill triggers, start your response with:** `Using remember skill`

## Overview

On-demand session capture. When fired, assess everything substantive from the current conversation and persist it to the right places in the vault. The user shouldn't have to explain what or where. Figure it out.

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

**Minimum targets per session:** Daily note entry. If the vault has a Current Context file, refresh that too. Most sessions will also touch project notes or knowledge notes.

### 3. Execute Updates

For each target:
- **Read the file first.** Always. Check what's already there. Don't duplicate or overwrite.
- **Update the relevant section**, don't rewrite the whole document.
- **Link everything.** First mention of any topic with an existing vault note gets a wiki link. Search for related Basecamps and notes before saving.
- **Follow existing format.** Match the structure and style of whatever file you're updating.

**Current Context (critical for continuation):**

This is the bridge between sessions. A new conversation reads Current Context first. Write it for a cold reader who needs to pick up where you left off.

1. Read existing content. Preserve other sessions' entries.
2. For each active thread discussed this session, write entries that answer:
   - What's the current state? (not history, just where things stand right now)
   - Where did we stop? (the last thing discussed or decided)
   - What's the immediate next step?
   - What files should a new session read to get full context? (daily note sections, analysis docs, project notes. Use specific `[[links]]` and section anchors)
3. Update "Open For Next Session" as a pickup prompt, not just a checklist. Each item should have enough context that a new session can act on it without needing re-explanation.
4. Remove resolved items. Prune stale entries.

### 4. Log to Chat Log

If the vault has a Chat Log (or similar session log), append an entry in reverse chronological order (newest at top):

```markdown
### YYYY-MM-DD, HH:MM TZ (Short Session Description)

**Topics:** What was discussed in 1-2 sentences.

**What got persisted:**
- Bulleted list of files updated and what changed, with [[wiki links]]

**Key context:** 1-3 sentences of non-obvious context that would help a future session understand why this work mattered or what was left unresolved.
```

If no Chat Log exists, suggest creating one.

### 5. Report Back

After all updates, output a brief summary in chat:
- Which files were updated
- What was captured where
- Anything you chose NOT to persist and why (if relevant)
- Any new notes you'd recommend creating (don't create without asking)

**Always close with:** "Running session log: [[Chat Log]]"

## Hard Rules

- **Read before writing.** Every file, every time. No blind overwrites.
- **Section updates over full rewrites.** Touch what needs touching.
- **Ask before creating new standalone notes.** Daily note entries and section updates to existing notes just happen. New files need a yes.
- **Link to the vault web.** No orphan content. Search for connections before saving.
- **Bias toward thoroughness.** When in doubt, document it. Better to capture something that turns out to be minor than to lose something that mattered.
- **Don't duplicate.** If something was already persisted earlier in the session (by another skill or manual request), don't write it again. Check first.
- **Respect parallel sessions.** Current Context and daily notes may have entries from other sessions. Preserve them.
