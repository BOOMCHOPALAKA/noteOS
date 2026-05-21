---
name: update-notes
description: Use when the user says /update-notes, "update notes," "update the vault," or "update" after a block of output. Also use when you would normally ask "want me to update X with this?" Instead of asking, just do it. Lightweight mid-conversation vault flush.
---

# Update Notes

## Overview

Quick, targeted vault update based on recent conversation context. This is the skill version of "want me to update X with this?" without the asking. Assess what just happened, figure out where it goes, update, confirm. No ceremony.

## Workflow

### 1. Assess Recent Context

Look at the last meaningful exchange or block of output. Not the full session. Identify:
- New information about a system, person, project, or process
- Decisions made or direction confirmed
- Analysis findings or investigation results
- Status changes on existing work
- Anything that changes understanding of an existing topic

### 2. Determine Targets

For each item, find where it belongs. Search the vault for existing notes, Basecamps, and project notes that are touched by what was discussed.

Common targets:
- **Knowledge notes** when new info changes understanding of a topic
- **Basecamps** when something changes how you'd understand the whole territory
- **Project notes** when status, findings, or context changed
- **Daily note Body** when it's a routine status update or event worth logging

Search before deciding. Don't guess at file names. Verify the target exists and read it.

### 3. Execute Updates

For each target:
- **Read the file first.** Check what's already there. Don't duplicate.
- **Update the relevant section.** Don't rewrite the whole document.
- **Link everything.** First mention of any topic with an existing vault note gets a wiki link.
- **Follow existing format.** Match the structure and conventions already in the file.

### 4. Confirm + Bridge

Brief summary of what got updated. One line per file. Then a natural continuation prompt.

Example:
> Updated [[Project Overview]] with the new findings.
> Added notes to [[Vendor Evaluation]].
>
> Want to keep going on the vendor decision, or shift to something else?

**The bridge:** After confirming what got persisted, offer a natural "keep going or pivot" prompt. Scoped to this session only. What was the thread we were just on, and what else came up during this conversation that's still open? Not a formal numbered menu. Don't pull from Current Context or do a full vault scan. Just a casual read on the session's momentum. One sentence.

## Hard Rules

- **Read before writing.** Every file, every time.
- **Section updates over full rewrites.** Touch what needs touching.
- **No new files without asking.** Update existing notes. If something needs a new note, ask first.
- **No persistence sweep.** No "anything else to save?" Just do the update and confirm.
- **No Recap writes.** Ever, unless explicitly asked.
- **Don't duplicate.** If something was already persisted earlier in the session, don't write it again.
- **Respect parallel sessions.** Files may have entries from other sessions. Preserve them.
- **Scope to recent context.** This is not a full session scan. Focus on what just happened.

## Source discipline before writing

This skill takes whatever was just produced in chat and turns it into a vault entry. **That's the highest fabrication-laundering risk path.** Chat output that was framed as exploration or hedged synthesis can become a vault fact this way.

Before writing each section update, check:

1. **Is this claim sourced?** Did the conversation establish it as fact, or am I synthesizing from chat banter? Vault entries become future stakeholder copy. Write only what the source supports.
2. **Does the wording match source hedge level?** If the user or another source said "should be," the vault entry says "should be," not "is."
3. **Am I claiming a milestone?** ("launched," "shipped," "first sale," "approved," "decided") If yes, verify the source actually supports the milestone, not just operational language.
4. **Am I treating chat synthesis as fact?** If I produced an inferred connection in chat ("X relates to Y"), the vault entry needs to label it as inference, not assert it as fact.

If a claim fails any check, hedge it or omit it. Don't propagate confident chat synthesis into the permanent record.

See `skills/_shared/source-discipline.md` for the four failure modes.
