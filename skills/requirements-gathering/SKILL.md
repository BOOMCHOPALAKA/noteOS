---
name: requirements-gathering
description: "Use when the user has a pile of raw material on a topic (transcripts, threads, notes, a half-formed idea) and needs it structured before writing anything. Triggers on \"gather requirements,\" \"requirements gathering on X,\" \"what do we actually know about X,\" \"what's confirmed vs. open,\" \"sort this out before we write it up,\" \"structure this.\" The feeder step between journey-first (explore) and prd-creation / ticket-creation (write the artifact). Different from learnings (what's net-new) and full-picture (situational awareness across channels)."
---

# Requirements Gathering

**When this skill triggers, start your response with:** `Using requirements-gathering skill`

## Overview

Turns a pile of raw context into a structured read of what's actually **known vs. inferred vs. unknown**, then surfaces the gaps and hands off. It's source discipline made into an active pass: every fact gets sorted into Confirmed, Assumed, or Open, with a source per item. This is the step that catches assumptions hiding as facts *before* they get written into a PRD or a ticket and cause build-then-rework.

It's a feeder. journey-first explores the idea, this structures the requirements, prd-creation or ticket-creation writes the artifact.

## The Output (the three-bucket pass)

The core artifact. Sort everything in the material into:

- **Confirmed.** Sourced facts. Each item names where it came from (transcript line, who said it, a ticket, an email, a file). If it can't be sourced, it isn't Confirmed.
- **Assumed.** Things being inferred or carried as "probably," that haven't been validated. Plausible, but nobody confirmed them. These are the dangerous ones, the assumptions that masquerade as facts. Label each with what it rests on and what would validate it.
- **Open.** Genuine unknowns. Questions nobody has answered. Don't fill these by inventing plausible answers.

Then:

- **Gaps.** What's *missing* that someone has to provide before this is buildable. Distinct from Open questions: a gap names the deliverable and ideally the owner ("acceptance criteria for the sync workflow, owned by [role]"; "confirmation of whether rooms are shared, needs an owner conversation"). This is the section that turns "we don't know" into "here's what to go get."
- **Hand-off.** One line naming what's ready: enough to draft a PRD, discrete enough to ticket, or too thin and here's what to gather next. Offer the next skill (see Pipeline).

Organize the buckets by the natural unit of the work, usually by workflow / job-to-be-done (see `~/.claude/skills/_shared/jtbd-user-stories.md`) when it's product/feature work, or by topic otherwise. Don't flatten everything into one list if it spans distinct areas.

## Workflow

1. **Take the input.** Whatever the user has: a transcript, a thread, scattered notes, a verbal brief. If it's thin, say so.
2. **Pull related vault context** (vault-aware, like the other gathering skills): prior notes on the topic, related tickets/epics, a working-layer requirements dir if one exists (`Requirements/[Project]/`), the relevant Basecamp, Current Context threads, analog-system references. Fold what's already known in so the pass doesn't re-derive it.
3. **Run the three-bucket sort.** Read the material and place every substantive claim into Confirmed / Assumed / Open, sourced. Be ruthless about the Confirmed/Assumed line: if the user would have to say "well, we think so," it's Assumed.
4. **Surface the gaps.** What's missing to make this buildable. Name the deliverable and the likely owner.
5. **Hand off.** State what's ready and offer the next step.

## Pipeline (the hand-off)

End by naming where this goes next:
- **Enough to draft a PRD** (Confirmed bucket is substantial, workflows are emerging) → offer `prd-creation`. The buckets become its sourced input; the Assumed items become things the PRD labels or the workflows' "still open"; the Gaps map to "pending" acceptance criteria.
- **Discrete enough to ticket** (specific, scoped, buildable items) → offer `ticket-creation`. Only the Confirmed items become ticket criteria; Assumed/Open go to the ticket's Open Questions.
- **Too thin** (Assumed and Open dwarf Confirmed) → say so plainly, and list the top gaps to close before it's worth writing anything. Don't let a half-known topic get written up as if it's ready.

## Hard Rules

- **Source discipline is the entire point.** Every Confirmed item names its source. An unsourced claim is Assumed at best. See `~/.claude/skills/_shared/source-discipline.md`. This skill is that rule turned into a structuring pass.
- **Never invent to fill a bucket.** An empty Open is fine. A fabricated Confirmed is the failure this skill exists to prevent. Don't construct a plausible answer to make the doc look complete.
- **Assumptions never wear a confident tone.** The Assumed bucket is labeled as inference, every time. The whole value is that the user (and anyone downstream) can see at a glance what's solid and what's a guess.
- **Don't translate operational language into milestone language.** "Should be ready Monday" is Assumed (a target), not Confirmed (a fact). "Going live" is not "launched." Preserve the hedge level of the source.
- **This is not learnings or full-picture.** `learnings` extracts what's *net-new* (temporal). This extracts what's *known vs. unknown* (epistemic). `full-picture` pulls cross-channel for situational awareness and journals it. This structures requirements toward a buildable artifact. If the user wants "what changed," that's learnings; if he wants "where do we stand everywhere," that's full-picture.
- **No dashes.** Per the global rule. Periods and commas.

## Vault Updates

- **Optional working-layer requirements note (offer, default to conversational).** When the output is substantial and headed toward a build, offer to persist it as a structured requirements note in the working layer (`Requirements/[Project]/`, one file per workflow/topic, the doc `prd-creation` looks for). This makes the skill the literal feeder for the PRD. Don't force it for a quick conversational sort.
- **Daily note (auto-log):** one line if the gathering produced a decision or a persisted artifact.
- **Current Context:** update the project thread if the gathering materially changed what's known on an active thread (e.g. confirmed something that was open).
- Otherwise defer to the global persistence tiers in CLAUDE.md.

## What This Is NOT

- **Not journey-first.** That explores the idea and maps user journeys before anything is structured. Run it first if the product isn't scoped; this structures what discovery (or real-world meetings) produced.
- **Not prd-creation or ticket-creation.** Those write the finished artifact. This produces the structured, sourced input they consume.
- **Not a full-picture or catchup.** Those are cross-channel situational awareness. This is an epistemic sort of material you already have in hand.
- **Not a research skill.** It structures what's known, it doesn't go find new external facts (that's deep-research / web search).

<!-- created 2026-06-05: built as the feeder step between journey-first and prd-creation/ticket-creation, after the user asked whether requirements gathering was its own skill. Sharpened from "gather information on anything" (too vague, would overlap full-picture) to a specific output discipline: the Confirmed/Assumed/Open three-bucket sort + Gaps + Hand-off. Defined by its output, not its input, which is what keeps it from being a vague catch-all. Core mechanic is _shared/source-discipline.md made active. Distinct axis from learnings (net-new/temporal) vs. this (known-vs-unknown/epistemic). Optional persistence to Requirements/[Project]/ makes it the literal feeder prd-creation looks for. -->
