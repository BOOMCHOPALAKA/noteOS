---
name: prd-creation
description: "Use when the user wants to write a product requirements document. Triggers on \"write a PRD,\" \"create a PRD,\" \"PRD for [X],\" \"product requirements doc,\" \"spec out [product/feature],\" or building a requirements doc for a product, feature, or system. Different from journey-first (exploratory product thinking before anything is written) and ticket-creation (a single dev ticket)."
---

# PRD Creation

**When this skill triggers, start your response with:** `Using prd-creation skill`

## Overview

Builds a product requirements document in the structure that's been refined and tested on real stakeholder-facing PRDs. The canonical worked example is [[your client Product Hub PRD]] (the v0.8 trimmed structure). A PRD is a document people actually read and skim, not a 15-page reference nobody opens. The workflows are the spine; everything else frames them.

This skill captures the structure AND the rules for using it. The rules are the valuable part. They're what keeps every PRD from re-litigating the same voice and structure decisions.

## Inputs

Vault-aware by default. Before writing, pull the source material the PRD should reflect:
- Related meeting transcripts and daily-note writeups on the project
- Existing tickets, epics, and Sprints items
- The relevant Basecamp and any prior version of the doc
- Current Context threads on the project
- Reference notes on adjacent/analog systems (e.g. an your project reference when building an your client PRD)
- **A working-layer requirements directory if one exists** (e.g. `Requirements/[Project]/`, one file per workflow with roles, fields, edge cases). The PRD is the readable summary of this; the working layer holds the depth. Check for it before assuming requirements don't exist.

If the project is net-new with no vault history, work from what the user provides (a brief, a pasted transcript) and say so.

## The Structure (this is the default, adapt per project)

Section order, from the canonical example:

1. **What we're building and why** (~20% of the doc). What, Why, the model being followed, what it manages, what it does NOT include. Short. This is the only "why" section; don't re-explain motivation later.
2. **Architecture.** The shape of the system, the key decisions (and which are still open), data flow, resourcing, what's deferred to a later phase. Plain, not exhaustive.
3. **Workflows** (the spine, ~50% of the doc). The core of the build. Each workflow uses the same shape (below).
4. **Timeline.** Milestones working back from a target, sizing, dependencies + risk-if-late, open phasing questions.
5. **Appendices.** Everything that's reference, not required reading: scope exclusions, design lessons, origin/history, the vs-analog comparison table, glossary, source meetings.

### The workflow shape (every workflow follows this)

**Who it's for · user stories · what's in / out of Phase 1 · acceptance criteria · what's still open.**

- **Who it's for.** Name the personas concretely. For infrastructure workflows with no hands-on user, name who *depends* on it ("everyone who works in your client's system downstream of the catalog: location staff, lab integrations"), never just "Everyone."
- **User stories (jobs to be done).** One per relevant persona, in the JTBD format. See `~/.claude/skills/_shared/jtbd-user-stories.md`. The "Who it's for" line sits ABOVE the stories (it frames the cast, then the stories carry the detail).
- **What it does / Today / In Phase 1.** Current state and the target state.
- **Acceptance criteria.** What the system must do, testably, for this workflow to be done. This is the requirements layer. It's the difference between scope ("In Phase 1 we manage prices") and a testable spec ("a price change in the Hub appears on the website within N minutes, and the prior price is preserved if a location declines"). **Missing acceptance criteria is the named root cause of build-then-rework cycles** (your manager's "9 out of 10" frustration, your lead's "can't test without good acceptance criteria"), so every workflow carries this block even when it's mostly pending. If the detailed criteria don't exist yet, say so plainly ("Pending the [date] requirements gathering") rather than inventing them. Write them as checkable statements (Given/When/Then, or "the system must..."), tied to the user stories above.
- **Still open.** The open questions for THIS workflow, embedded here. Do not collect them into a standalone "Open Questions" section. Open questions live where they're actionable.

The layering to keep straight: **user stories** = what the user needs (the why). **In Phase 1** = scope (the rough what). **Acceptance criteria** = the testable spec (the verified how). They are three different altitudes; don't let the stories or the scope bullets stand in for acceptance criteria. If a project keeps a deeper working-layer requirements doc, the PRD's acceptance criteria are the readable summary and can point to it.

## Workflow

1. **Confirm scope.** What product/feature, who the audience is (devs only, or a joint doc the client also reads), and whether it's a new doc or a revision. The audience determines voice (see Hard Rules).
2. **Pull sources** (Inputs above). Source every concrete claim. Label what's confirmed vs. open vs. inferred.
3. **Draft the structure**, leading with the workflows once the why/architecture frame is set. Adapt section order to the project, but keep workflows as the spine and open questions embedded.
4. **Write it 20/80.** ~20% why, ~80% what and how. If a "why" paragraph runs long, cut it.
5. **Voice pass.** Run the Hard Rules as a checklist before delivering. Dashes, meta-commentary, joint-doc tone, all of it.
6. **Save + render.** Vault note is the source of truth. Render the shareable copy (below).
7. **Revision history + source meetings.** Append a dated revision row and add the source meetings to the appendix.

## Rendering the shareable copy

The vault `.md` is the source of truth. For sharing:
- **HTML export:** `pandoc "[doc].md" --from gfm --standalone -H ~/.claude/skills/prd-creation/prd-style.html -o "Downloads/Work/.../[doc].html"`, then `open` it. The bundled `prd-style.html` is the tuned CSS (clean headings, table borders, blockquote styling) used on the canonical PRD. Select-all → copy → paste into your document tool.
- **`.docx` for WorkDrive:** render to `.docx` via pandoc, upload-new-version via the WorkDrive UI (the MCP can't upload binaries). See [reference_zoho-writer-mcp-formatting.md](file:///Users/chop/.claude/projects/-Users-chop-Documents-chopOS/memory/reference_zoho-writer-mcp-formatting.md).
- Strip a leftover title-metadata duplicate H1 if pandoc adds one.

## Hard Rules

These are the corrections that prompted this skill. They are not optional.

- **No dashes. Ever.** No em dashes, en dashes, or double hyphens in prose. Periods to separate thoughts, commas for tight clauses, "to" for ranges (Aug to Oct, 3 to 4 months). Compound-modifier hyphens (real-time, dual-brand) are fine. Scan before delivering. Per [[feedback_no-em-dashes-ever]].
- **No meta-commentary about the document.** Don't tell the reader how to read it or how important a section is. Cut "the most important part of this document," "the core of the build," "the short version," "not required reading," "for anyone who wants the receipts," "flagged so it's not a surprise." The document should *be* the thing, not narrate itself. This reads as amateur hour to a senior audience.
- **Joint-document voice when the client may read it.** No calling out the client or finger-pointing. Don't write "pending from ArcPoint" or "your marketing contact hasn't provided X" or "Jessica can't do this because she's not in the lab." Reframe as collaborative ("ArcPoint is filling in the detail, with templates provided"). No internal personnel content, no "my read" tension framing, no QA/supervision politics in a shared doc. That lives in the working-layer note.
- **Open questions stay embedded in workflows.** Each workflow's "Still open" block carries its own questions. Never build a standalone consolidated "Open Questions" section. It duplicates and bloats. (Cross-cutting *decisions* that need a named owner can get a short callout near the top, but that's different from a question dump.)
- **20% why, 80% what and how.** The "why" earns roughly a fifth of the doc. The rest is what's being built and how. A long why section is the first thing to cut.
- **Trim relentlessly.** A 15-page PRD nobody reads is worthless. Default to the shortest version that's still complete. Keep sprinkles of story-telling detail that earn their place; cut everything that doesn't.
- **Source discipline.** Every concrete claim (a date, a decision, a number, a status) traces to something a stakeholder actually said. When uncertain, mark it open or omit it. Never invent plausible detail. See `~/.claude/skills/_shared/source-discipline.md`.
- **Unverified names get flagged, not guessed.** If a person's name comes from an auto-transcript with multiple spellings, flag it as needs-confirmation rather than picking one. (The your client PRD had Jessica spelled three ways.)
- **Brevity.** Per `~/.claude/skills/_shared/brevity.md`.

## Vault Updates

- **The PRD note** is the source of truth, lives in the vault root, named `[Project] PRD` or `PRD - [Client] - [Product]`. Link it to the project Basecamp and the project file.
- **Revision history table** at the bottom: a dated row per substantive change, naming what changed and why.
- **Daily note (auto-log):** one line under Work noting the PRD was created/revised and where the shareable copy lives.
- **Current Context:** update the project thread if the PRD's state materially changed (new version shared, decision resolved).
- **Project file / Basecamp:** update if the PRD changes how the project is understood at the territory level (rare; usually the PRD note itself is enough).

## What This Is NOT

- **Not journey-first.** That's exploratory product thinking (mapping JTBDs, user journeys) *before* a doc exists. Use it first if the product isn't scoped yet, then this skill to write it up.
- **Not requirements-gathering.** That's the upstream feeder: it sorts a pile of raw material into Confirmed / Assumed / Open and surfaces gaps. Run it first when the requirements are still messy; its output becomes this skill's sourced input (Confirmed → acceptance criteria, Assumed → labeled/still-open, Gaps → "pending" criteria).
- **Not ticket-creation.** That's a single dev ticket. A PRD spans a product/feature and feeds many tickets.
- **Not a blank template to fill in.** The structure is a default to adapt, not a rigid form. Match it to the project's actual shape.

<!-- created 2026-06-05: built from the your client Product Hub PRD (v0.8 trimmed structure). Hard rules are the corrections the user made across the June 5 PRD-building session: no dashes, no meta-commentary ("amateur hour"), joint-document voice (don't call out the client), open questions embedded not standalone, 20/80 why-to-what, trim relentlessly, flag unverified names. JTBD format extracted to _shared/jtbd-user-stories.md for reuse. -->
<!-- updated 2026-06-05: added an Acceptance criteria block to the workflow shape (the requirements layer). the user noticed the PRD had no real requirements section and asked whether that was an oversight. Answer: deep requirements live in the working layer (Requirements/[Project]/), the PRD surfaced only the trimmed "In Phase 1" scope bullets, and testable acceptance criteria didn't exist on either product yet. The June 5 transcript named missing acceptance criteria as the root cause of the pricing-portal build-then-rework cycle, so acceptance criteria is now a standing block in every workflow (often "pending" until requirements finalize, never invented). Added the three-altitude framing (stories=why, scope=what, acceptance=verified-how) and an Inputs note to check for a working-layer requirements dir. -->
