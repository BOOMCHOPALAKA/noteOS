---
name: ticket-creation
description: Use when creating a dev ticket, writing up a bug, drafting a feature request, or when the user says "make a ticket for this," "write this up," or "create a ticket." Also triggers on references to the dev ticket template.
---

# Ticket Creation

**When this skill triggers, start your response with:** `Using ticket-creation skill`

## Overview

Create developer-focused tickets that are scannable, actionable, and actually get read. The template lives at `Templates/Dev Ticket Template.md` for the full framework. This skill covers the workflow around creating and persisting tickets.

## Naming and Filing

- File: `TICKET - [CLIENT] - [Description].md` in vault root
- Epics: `EPIC - [CLIENT] - [Description].md` for multi-ticket projects
- Clients: your project, your client
- Index in [[your team Dev Tickets]]

## Before Writing

1. **Search the vault** for existing tickets on this topic. Don't duplicate.
2. **Check related tickets and epics** for context that should be referenced or linked.
3. **Read the Dev Ticket Template** (`Templates/Dev Ticket Template.md`) for the full structural framework.

## What a Dev Ticket Is

A ticket is a **single unit of work** (a request, a bug, a task), not a PRD. The job is to make the developer fully understand the problem and what "done and correct" looks like, then get out of their way on the how. The full framework is in `Templates/Dev Ticket Template.md`. read it before writing.

## The 20 / 80 Shape (the core discipline)

- **~20% What and Why.** The problem or task, why it's a problem, its impact. Short orientation.
- **~80% the Solution Space, NOT the solution.** This is the bulk, but it is NOT implementation steps. It's (a) **requirements / constraints / guidelines** that bound the work and (b) **acceptance criteria** (the testable definition of done). We define the box; the developer solves inside it.

**Never prescribe the how.** "The declined price must be preserved" is a requirement (keep). "Add a `declined_price` column" is a solution (cut, that's the dev's call). If you're writing implementation, you've crossed the line. move it out.

**Why:** weak acceptance criteria + missing requirements is the named root cause of the build-then-rework cycle (weak AC is a common root cause of build-then-rework cycles). The AC section is the most load-bearing part of any ticket.

## Voice

A ticket is written in the user's calibrated, warm voice. See `drafting-voice` skill for register guidance. The reader is a developer the user works with, not a stranger receiving orders.

**The balance to hold (this is the whole point):**
- **Warm and human, never cold or demanding.** "We need to" and "let's," not "the developer must." It should read like the user wrote it to a teammate, not like a system generated a work order. No barking, no stiff project-manager voice.
- **To the point, because you want devs to actually read it.** Warm does not mean verbose. Most of the ticket is tight: requirements and AC are crisp bullets, not prose.
- **The Problem to Solve section earns a little more room.** This is the one place a bit more prose is good. give enough context that the dev genuinely understands the problem and why it matters. A few sentences, even a short paragraph. But it still can't ramble. if Problem to Solve runs long, the dev stops reading before they hit the AC.
- **A one-off quick task can be a short paragraph.** Not every ticket needs every section. A tiny bug fix can be Problem + AC and nothing else. Don't pad a simple task to look substantial. Match the ticket's weight to the work.

The test: would a developer read this and feel like a teammate explained the problem clearly and trusts them to solve it? Not "did a form get filled out."

## Core Principles

- **Define the what and why; never prescribe the how.** Requirements and acceptance criteria, not implementation. Hard constraints are fine (a required framework, a system to integrate); step-by-step is not.
- **Acceptance criteria is required, and never guessed.** Every ticket has AC. Each criterion is either obvious (we set it) or sourced (hunted from the stakeholder). Never a plausible guess. see Source Discipline.
- **Ruthlessly concise.** If it doesn't help the developer understand the problem or know when they're done, cut it.
- **Collaborative language.** "We need to" and "let's" over "you must." No ALL CAPS urgency unless truly urgent.
- **Clear language for all readers** including ESL. Avoid jargon unless it's standard domain terminology.
- **Flag assumptions explicitly.** "Appears to be..." or "likely..." when uncertain. Ask clarifying questions rather than guessing.
- **1-2 screen scrolls maximum** (fresh ticket). Make it approachable to read so it's actually read.
- **No dashes. Zero exceptions.** No em dashes, en dashes, or hyphens-as-dashes in ticket titles, headings, or body. Use periods. This is the #1 drafting rule and tickets are a frequent slip surface. Scan for `—` and `–` before saving, including the filename/title. See `_shared/source-discipline.md`.
- **No tooling / MCP / API meta-commentary in the ticket.** A ticket is a stakeholder-facing artifact. it reads like a human wrote it. NEVER write things like "could not be set via API, assign in UI," "added via MCP," "see vault ticket," or any note about how the ticket was generated or what the automation couldn't do. The reader should never see the sausage being made. If a limitation exists (e.g. the Sprints API can't set the assignee), report it to the user in chat and handle it out-of-band, do not bake it into the ticket body. This kind of meta-commentary breaks the professional tone of the ticket.

## Source Discipline (Critical) — especially Acceptance Criteria

**Every requirement and every acceptance criterion must be sourced or self-evidently obvious. never guessed.** This is the rule the whole template hangs on, and AC is where it matters most.

**The three valid answers for any requirement or criterion:**
1. **Sourced** — the stakeholder asked for it, or a transcript/email/decision states it.
2. **Obvious** — a self-evident outcome no reasonable person would dispute ("the page doesn't error on load"). You can set these yourself.
3. **Neither** → it does NOT go in as a requirement or criterion. It goes in **Open Questions**, or it's omitted.

If the honest answer is "I inferred it" or "it sounds right," that's answer 3. Never fabricate.

**Acceptance criteria specifically:**
- AC is **required** on every ticket. A ticket with no AC isn't done being written.
- If the real criteria aren't known and aren't obvious, do NOT invent them. Write "Acceptance criteria pending: needs [stakeholder] input on [what]" and put the specifics in Open Questions. An honest gap beats a fabricated spec.
- Cover **non-happy paths**, not just the happy path. Happy-path-only is a common failure mode. What happens on the decline, the empty state, the error, the edge case?
- Write as **testable outcomes**, not process steps. Given/When/Then or "the system must..." both work.

**Self-check before delivering:** for each requirement and AC line, ask *can I point to where this came from, sourced or obvious?* If not, it's a guess. move it to Open Questions.

**Why this matters:** a fabricated requirement creates false certainty. The dev builds to a spec the stakeholder never approved, the stakeholder pushes back, and the team blames the requirements. Flag the gap as a question instead. Plausibility is the trap; source is the standard.

## Key Sections

Use the template. The core spine of a fresh ticket:

- **Problem to Solve** (the ~20%). What the problem/task is, why it's a problem, the impact. This is the overview. don't add a separate Overview heading.
- **Requirements / What We Need To Do** (first half of the 80%). The constraints and guidelines that bound the work. goals and rules, not implementation steps.
- **Acceptance Criteria** (the load-bearing section). Testable, sourced-or-obvious, covers non-happy paths. Required on every ticket.
- **Open Questions.** Where un-sourced requirements and criteria go instead of being guessed. Real blockers and genuine unknowns only.

Optional, only when they earn their place: **Bug Details** (reporter, repro, expected vs. actual, evidence), Out of Scope, Technical Constraints, Design Reference, Additional Context.

## Fresh Ticket vs. Living Ticket

The "1-2 screen scrolls" rule applies to a **fresh** ticket at creation. Some tickets become **living documents** that accumulate a `## History` log, `## Blockers`, and decision updates over weeks (e.g. NeuroX, MSRP). Those legitimately grow past the length rule. The discipline shifts: keep the *top* of the ticket (Problem, What We Need To Do, Acceptance Criteria) scannable in 1-2 scrolls; let History grow below it. Common living-ticket sections seen in practice: `## History`, `## Blockers`, `## Process Flows`, `## Key Entities`, `## Timeline`, `## Post-MVP`. Don't pad a fresh ticket to look like a living one.

## After Writing

1. **Link the ticket** to related Basecamps, epics, and notes.
2. **Update [[your team Dev Tickets]]** index.
3. **Prompt to put it on the Sprints board (always, unless the user already said where it's going).** A vault ticket that never reaches the board is a dropped ticket. So after the vault note is written, proactively ask whether to create it in the project tracker. Don't silently auto-create. A project and assignee need to be confirmed first. Phrase it as a real offer: *"Want me to add this to [project board]? I'd put it as High priority, assigned to [person]."* If the user already said "make a ticket on the board," skip the ask and go straight to creating it. If they decline, leave it as a vault note.
   - When creating it, propose the board + priority + assignee from context rather than asking blank (which board the topic belongs to is usually obvious. Pricing Portal work → APP board, etc.).
4. **Proactively offer a plain-text version** (for tickets going somewhere other than your main tracker, e.g. a paste into another tool):
   - Strip all `[[wiki links]]` to plain text
   - Strip hashtags
   - Convert markdown tables to bullet lists
   - Output in a code block for copy/paste

## Pushing to your project tracker (when asked to create the ticket on the board)

When the ask is to create the ticket as a Sprints item (not just a vault note), the description field renders **HTML, not markdown.** Sending raw markdown (`## Heading`, `- [ ]`) displays as literal text in one wall (the user has corrected this before). Send `wmde-markdown` HTML: wrap in `<div class="wmde-markdown wmde-markdown-color">`, use `<h2>`, `<p>`, `<ul><li>`, `<ol><li>`, `<strong>`, and task lists as `<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled/> text</li></ul>`. Copy the exact tag structure from an existing well-formatted item in your tracker. Carry the same dev-ticket sections as the vault ticket (Problem to Solve / What We Need To Do / Acceptance Criteria / Open Questions / Additional Context).

**MCP mechanics (see `reference_zoho-sprints-mcp-ids.md` for full detail):**
- `CreateItem` with a `users` assignee param, or a long/special-char description inline, throws `code 7600 "Given JSON is invalid"`. Reliable pattern: **create minimal (`name` + `projitemtypeid` + `projpriorityid`), then a second `UpdateItem` to set the HTML `description`.** Assign the user in the Sprints UI (the `users`/`newusers` param fails).
- Pricing Portal board: teamId `784536848`, projectId `130357000000011003`, standard item-type `130357000000011041`, priorities None/Low/Medium/High = `...011027/011029/011031/011033`.
- New items go in the **active running sprint** (the team runs one long-lived board, not time-boxed sprints), not the backlog.

## Vault Linking

First mention of any existing ticket, epic, or Basecamp gets a wiki link. The ticket should connect to the vault web, not sit as an orphan.

<!-- improved 2026-05-21 via improve-skill: (A) added no-dash rule to Core Principles, per 4 of 5 recent tickets carrying em/en dashes (NeuroX 32 incl. title, MSRP 55) against the #1 Critical drafting rule that lived everywhere except this skill; (B) added Fresh vs. Living Ticket subsection, per NeuroX/MSRP legitimately running 177-461 lines via accumulating History/Blockers logs the skill never acknowledged. Caution noted, not encoded: fixing dashes in headings breaks the [[#anchor]] links that point to them. -->

