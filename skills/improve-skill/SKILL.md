---
name: improve-skill
description: Use when the user wants to tune an existing skill based on how it's actually been performing. Triggers on "/improve-skill [name]," "improve the [X] skill," "tune up [X]," "this skill keeps getting [Y] wrong," "make [skill] better." The expert-in-the-loop ritual — review a skill's recent runs, spot soft patterns, encode improvements back into SKILL.md. Different from skill-creation, which builds net-new skills.
---

**When this skill triggers, start your response with:** `Using improve-skill skill`

## Overview

This is the expert-in-the-loop role made into a ritual. Not "did the skill hallucinate" (it can self-check that). The real job: look back over how a skill has actually performed across multiple real runs, find where it's *not wrong but could be better*, and encode that back into the skill as a permanent improvement. An observation that stays in your head is worthless. The whole point is the write-back.

Skills are playbooks. This skill makes the playbook better over time, with every change traced to evidence from real runs.

## Trigger

- `/improve-skill [name]`, "improve the [X] skill," "tune up [X]," "this skill keeps getting [Y] wrong," "make [skill] better."
- **Proactive nudge (offer, never auto-run):** when the same correction lands on one skill twice in a session, or a recalled feedback file is already about a skill in play, offer to run this. Don't run it without the user saying yes.

## Workflow

### Phase 1: Load the target

Read the target skill's SKILL.md in full. Note its current success criteria, hard rules, and any self-check steps it already has. You're improving what's there, not starting over.

If the named skill barely exists, or is fundamentally broken rather than just in need of tuning, stop and defer to skill-creation. This skill tunes; it doesn't build from scratch.

### Phase 2: Gather run evidence

Reconstruct how the skill has actually performed. Mine existing artifacts. Don't add logging.

- Grep `Chat Log.md` for mentions of the skill and the work it produced.
- Find the vault artifacts the skill produces and read a representative sample of recent ones:
  - `status-report` → recent status reports
  - `ticket-creation` → recent tickets
  - `meeting-transcript-processing` → recent meeting summaries
  - `my-voice` → recent drafted messages
  - (and so on — match the skill to what it outputs)
- Pull any feedback memory files that name the skill or its failure modes (`~/.claude/projects/-Users-chop-Documents-chopOS/memory/feedback_*.md`).

If the evidence is thin, say so plainly: "I found N runs, that's a thin base." Then ask the user to supply what he's noticed across recent uses. **Never invent runs to justify a change.**

### Phase 3: Expert analysis

The center of this skill. Four questions, in order:

1. **Soft patterns.** What does the skill get *almost* right, repeatedly? The not-wrong-but-could-be-better stuff. This is the highest-value finding and the one a checker would miss.
2. **Missing success criteria.** What does good output need that the skill never tells it to do?
3. **Scope expansion.** What else should this skill be doing in its process that would add value? What's the next capability?
4. **Redundant self-checks.** What does the skill make the user verify that it could verify itself? Move it into the playbook as a step.

Label every finding:
- **Sourced** — found it in N runs / this feedback file. Cite which.
- **My read** — inference. the user decides whether it holds.

Keep the buckets separate. Don't let a my-read finding pose as sourced.

### Phase 4: Propose edits

Concrete changes to SKILL.md. New success criterion, new hard rule, new self-check step, reworded trigger, sharper output spec.

**Every proposed edit cites the Phase 3 finding and the run evidence behind it.** No edit without a "because runs showed X." Show the actual before/after text so the user can see exactly what changes.

The user approves per-edit or as a batch. Per-edit approval is required for anything structural (new workflow phase, reworked output format). Small additions (one new success criterion, one hard rule) can batch.

### Phase 5: Write back + log

- Make the approved edits to the skill, matching its existing structure and voice.
- Append a dated changelog comment at the bottom of the skill so it carries its own improvement history:
  `<!-- improved YYYY-MM-DD: [what changed], per [evidence] -->`
- If a finding is calibration rather than structure, offer to put it in a feedback memory file instead of editing the skill (see Write-Back Routing).

## Write-Back Routing

- **Structural / repeatable** → edit SKILL.md (new step, success criterion, hard rule). This is the default.
- **One-off calibration** → offer a feedback memory file (standard frontmatter + MEMORY.md pointer), the way corrections work today.
- Propose which bucket each finding lands in. the user can override.

## Hard Rules

- **No edit without evidence.** Every change cites the run(s) or feedback file behind it. Inference is labeled "my read" and the user decides.
- **No invented runs.** Thin evidence means say so and ask the user to supply the pattern. Never fabricate performance history to justify a change.
- **No scope creep into a different skill.** If the fix belongs in another skill or CLAUDE.md, say so. Don't bloat the target.
- **Don't rewrite the skill.** Targeted edits only, matching existing structure and voice. Small task, small change.
- **Ask before large edits.** Per-edit approval for structural changes. A new success criterion is small; restructuring the workflow is large and needs explicit sign-off.
- **Preserve what works.** Add and refine; rarely remove. Removal needs a stated reason. Never strip existing hard rules or self-checks to make room.

## Vault Updates

- **Daily note (auto-log):** one line under Work — which skill was tuned and what changed.
- **Feedback memory file:** only for calibration findings, per the routing above. Standard frontmatter + a MEMORY.md pointer line.
- **No Basecamp / Current Context** touch unless the improvement changes how the whole skill system works (rare).

## What This Doesn't Do

- Doesn't create skills from scratch. If the target barely exists or is fundamentally broken rather than needing tuning, defer to skill-creation.
- Doesn't add run-logging infrastructure. Evidence is mined from existing artifacts, not logged going forward.
- Doesn't run on a schedule. On-demand only, with a proactive nudge that offers but never auto-runs.
- Doesn't improve a skill with no evidence and no the user input. If there are no runs to learn from and the user has nothing to add, there's nothing to encode yet. Say so and stop.
