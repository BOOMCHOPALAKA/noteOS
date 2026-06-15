---
name: learnings
description: Use when the user asks "what did we learn," "what's new from this," "what are the learnings," "/learnings," or any variant that asks Claude to surface net-new information from a meeting, transcript, conversation, incident, or scope. Different job from tldr (key bullets), analyze (interpretation), remember (session capture), and next-steps (forward-looking). Specifically extracts what's net-new vs. what got reaffirmed vs. what got reframed, with source per bullet and a persistence triage at the end. Also called by transcript-sweep, full-picture, situation-assessment, and morning-brief tails when the user opts in for a learnings pass.
---

# Learnings

**When this skill triggers, start your response with:** `Using learnings skill`

## Overview

Different shape from summary, tldr, or analysis. The job: surface what the **conversation, meeting, transcript, or incident actually taught us that we didn't already know.** Then triage which of those learnings deserve to live in the vault.

The discipline is the buckets. Net-new vs. reaffirmed vs. reframed is the load-bearing distinction. Without it, this is just a renamed summary.

## When to Trigger

The user invokes explicitly or implicitly:
- `/learnings`
- "What did we learn"
- "What's new from this"
- "What are the learnings"
- "What did this teach us"
- "What did we walk away with"
- "What's worth capturing from this"

Also called by other skills as a tail step:
- `transcript-sweep` after batch processing
- `full-picture` after cross-channel synthesis
- `situation-assessment` after raw-context processing
- `morning-brief` if the user opts in for a learnings layer
- After `analyze` when the user wants to crystallize what was learned

**Do not auto-trigger.** This skill produces a specific, focused output. If the user didn't ask for it, the right move is probably summary, analysis, or next-steps. Don't manufacture learnings out of nothing.

## The Three Buckets

This is the core discipline. Every learning must land in one of three buckets.

### Bucket 1: Net-New (we didn't know this before)

Information that did not exist in the vault, in active context, or in stated stakeholder positions prior to the trigger event.

**The bar:** if it's in a daily note, ticket, basecamp, knowledge note, Current Context, or established stakeholder framing already, it is NOT net-new. It's reaffirmed.

**Examples:**
- A new technical mechanism named for the first time ("the Beanstalk swap requires config change + local-storage verification, not in-place")
- A new fact about a person, system, or relationship ("your lead has custom cache invalidation code tied to WP Rocket")
- A new scenario or possibility surfaced for the first time ("Brandon thinks AFG may go bankrupt and Cresso buys your integrated system")
- A new workstream that wasn't on any tracker ("Alexis bringing on Accureference, 210 tests")

### Bucket 2: Reaffirmed (we knew, today confirmed)

Information that already exists in the vault or active context, but the trigger event provided additional evidence, a fresh restatement, or independent corroboration.

**The bar:** the substance is already documented somewhere. Today added weight, not new shape.

**Examples:**
- your lead's recurring architectural-fragility position (named 4-5 times since May 1, surfaced again today)
- A stable pattern reasserting itself (Brandon-as-relay / your lead-as-authority showed up on two calls today)
- A previously hedged claim now confirmed by an additional source

**Reaffirmed bullets are still valuable** because they signal *patterns hardening into facts.* But they go in their own bucket so they don't crowd out genuinely net-new info.

### Bucket 3: Reframed (we knew, but today changed the shape)

Information that already exists in the vault, but the trigger event changed the meaning, the framing, the priority, the cause, or the implication.

**Reframed is the most valuable bucket and the easiest to skip.** Force this pass. If nothing reframed, say so explicitly.

**Examples:**
- "Yesterday's MSRP outage was framed as a technical incident. Today your lead reframed it as a process/discipline issue."
- "WP Rocket renewal was framed as a small spend approval. Today it's reframed as a dependency on the AWS cutover sequence."
- "We thought X was settled. Today your executive contact's mental model surfaced as different from what we assumed."

**The reframe question to ask each candidate learning:** does this change what we thought we knew, or how we thought about it?

## Workflow

### 1. Identify the trigger scope

What is the unit being mined for learnings?
- A single transcript or meeting
- A batch of meetings (transcript-sweep tail)
- A full-picture pull on a scope
- A specific incident or thread
- A conversation session

State the scope in one line so the rest of the workflow has a clear boundary.

### 2. Extract candidate learnings

Read the trigger material. Pull out every claim, statement, finding, or observation that could plausibly be a learning. Don't filter yet. Cast wide.

Each candidate must have a **source line** attached: which transcript, which speaker, which message, which document. No source = not a candidate.

### 3. Vault-check pass (mandatory)

For each candidate, search the vault for prior mention. This is non-negotiable.

**What to search:**
- Current Context active threads
- Basecamps in `Map/`
- Related notes for the scope (e.g., your project Pricing Portal, your client Platform & Website)
- Active tickets on the topic
- Recent daily notes for the topic

**The triage:**
- Found in vault, same shape, no new evidence → **drop** (not a learning at all, it's already known)
- Found in vault, same shape, fresh evidence/restatement → **Bucket 2 (reaffirmed)**
- Found in vault, different shape → **Bucket 3 (reframed)** — name the prior shape, name the new shape
- Not found in vault → **Bucket 1 (net-new)**

Skip the vault check at your peril. The whole point of this skill is that "net-new" actually means net-new.

### 4. Source per bullet

Every learning that survives the vault check needs a source line. Inline, brief. Examples:

- *(your lead, May 28 MSRP retro)*
- *(Brandon, May 28 WP Rocket call)*
- *(transcript line, May 21 Kit Collections call)*
- *(your manager's reply, May 15 team chat thread)*

If a learning has multiple sources, list them. If a learning is your own synthesis across sources, label it as such and explain what you synthesized from where. Synthesis-without-source is not a learning, it's an inference, and it should be marked *(my read)*.

### 5. Reframe pass

After buckets 1 and 2 are populated, **explicitly walk through the candidates a second time asking: does this reframe anything?** This is the easiest bucket to skip and the most valuable when found.

For each candidate, ask:
- Does this change a prior conclusion we had?
- Does this change the cause we thought was driving something?
- Does this change the priority or sequence of work?
- Does this change a stakeholder's understanding in a way that matters?

If yes, pull it into Bucket 3 with the prior framing named and the new framing named.

If nothing reframes, say *"No reframes identified."* Don't manufacture one to fill the bucket.

### 6. Deliver the three-bucket output

Standard shape:

```markdown
## What we actually learned (net-new)

**1. [Learning].** [One or two sentences explaining.] *(source)*

**2. [Learning].** [Explanation.] *(source)*

[...]

## What got reaffirmed (we knew, today confirmed)

- [Pattern or claim] *(prior context + today's source)*

[...]

## What got reframed (we knew, but today changed the shape)

- **[Prior framing] → [new framing].** [What changed and why it matters.] *(source)*

[...]
```

**Length defaults:**
- Net-new: as many as warranted, but each bullet ≤3 sentences
- Reaffirmed: tight bullets, ≤2 sentences each
- Reframed: ≤3 sentences each, but include the before-and-after framing explicitly

Cap total output around 600 words unless the scope genuinely demands more (full-picture tail, incident debrief). If it's running long, the issue is usually that Bucket 1 has things that should be Bucket 2.

### 7. Persistence triage (default: propose, not auto-write)

After delivering the three-bucket output, propose which learnings should become vault artifacts.

The five persistence buckets:

| Bucket | When to use |
|---|---|
| **New standalone note** | Reusable pattern, ongoing reference value, doesn't fit cleanly in an existing note. Earns its own searchable surface. |
| **Update existing note** | Belongs in a basecamp, ticket, knowledge note, or system doc that already exists. Adds to ongoing territory. |
| **Current Context entry** | Active thread, date-sensitive, will be obsolete within a few weeks. Goes in the whiteboard, not the vault permanently. |
| **Ticket** | This is work, not a learning. Belongs in a ticket. Defer to `ticket-creation` skill. |
| **Too small to spin out** | The learning is real but doesn't earn a vault entry. Goes in the daily note or sits in chat. |

**Default: propose, ask, then write.** Present the triage table with recommendations. Wait for the user's "go" before writing.

**Exception:** if the user says "do everything applicable" or "go ahead," skip the confirm step and execute the proposed triage.

**Hard rule:** never auto-create tickets from this skill. Tickets need source-only discipline via the dedicated ticket-creation skill.

### 8. Write the artifacts

For each artifact in the approved triage:

- **New standalone notes:** include Compass (summary + Related links), source notes on every claim, a `## History` section dated today, and at least one outbound link to existing vault content (no orphans).
- **Updates to existing notes:** add a new section or extend an existing one. Cross-link to the source meeting/daily note. Don't restructure the host note.
- **Current Context entries:** append to the active threads section. Date-stamped, sourced, with the next move named.
- **Daily note entries:** under the relevant `###` heading in Body, not Recap.

After writing, summarize what was written and where.

## Hard Rules

- **Brevity:** Follow `~/.claude/skills/_shared/brevity.md`. Three-bucket output capped at ~600 words.
- **Source discipline:** Follow `~/.claude/skills/_shared/source-discipline.md`. Every learning has a source line. Synthesis without source is labeled *(my read)*.
- **Vault-check pass is mandatory.** No bullet enters Bucket 1 (net-new) without a vault check confirming it's not already documented.
- **Reframe pass is mandatory.** Walk through candidates a second time looking for reframes. If none, say so explicitly. Don't skip.
- **No em dashes ever.** Periods.
- **No auto-writes for tickets.** Defer to `ticket-creation`.
- **Default to propose-then-write.** "Do everything applicable" or "go" overrides to auto-write.
- **Don't manufacture learnings.** If the trigger material genuinely didn't teach anything new, say so. *"No net-new learnings from this scope"* is a valid output.

## Failure Modes to Avoid

- **Restating the summary.** If Bucket 1 reads like the meeting summary, the vault-check pass was skipped or the bar for "net-new" was too low.
- **Skipping the reframe pass.** Reframes are the most valuable bucket and the easiest to lose. Force the second pass.
- **Inflating volume.** Five real learnings beats fifteen learning-shaped bullets. If a candidate barely clears the bar, drop it.
- **Persistence without proposal.** Don't auto-write notes unless explicitly told to. The cost of a bad standalone note is higher than the cost of one extra confirm.
- **Ticket fabrication.** This skill does not create tickets. It flags candidates and defers.
- **Pattern-claiming on thin evidence.** "Brandon-as-relay" being noticed once is an observation. Being noticed three times across separate calls is a pattern. Don't promote one-offs to patterns.
- **Becoming ceremonial.** If every trigger produces the same three buckets with the same triage even when the material is thin, the skill is performing structure rather than serving its job. Better to say "the conversation didn't produce learnings worth filing" than to manufacture three buckets.

## Interaction With Other Skills

- **tldr:** Different job. tldr is "key bullets for a stakeholder." Learnings is "what's net-new for us." If the user asks for both, run them separately and label clearly.
- **analyze:** Analyze does first-pass interpretation. Learnings extracts what's new from that interpretation. Often analyze comes first, then learnings is the persistence step.
- **next-steps:** Forward-looking. Learnings is backward-looking. Pair them but don't conflate them.
- **remember / pickup:** Session capture skills. Learnings is content-extraction, not session-state.
- **update-notes:** Update-notes is mid-conversation vault flush. Learnings is the structured "what's new" pass with explicit buckets.
- **transcript-sweep:** Often calls learnings as a tail step. Sweep produces summaries per recording; learnings extracts what was net-new across the batch.
- **full-picture:** Often calls learnings as a tail step. Full-picture produces cross-channel synthesis; learnings extracts what changed in our understanding.
- **ticket-creation:** Learnings flags candidates. Ticket-creation owns the actual ticket write.

## Vault Updates

After producing the three-bucket output and running the persistence triage, follow the standard CLAUDE.md tier logic:

- **Tier 1 (auto-log):** routine learnings already get logged via the daily note. No special action.
- **Tier 2 (nudge):** propose the persistence triage and wait for the user's go.
- **Tier 3 (sweep):** if the session is closing and learnings haven't been persisted, surface them in the close-out.

If the user says "go" or "do everything applicable," execute the proposed triage. Otherwise wait for explicit approval per artifact.

## History

- **2026-05-28:** Created. Triggered by the user's "what did we learn" ask after the May 28 transcript sweep produced two meeting writeups. The three-bucket discipline (net-new / reaffirmed / reframed) and the five-bucket persistence triage emerged from the conversation. Built to be invokable both directly and as a tail step from transcript-sweep, full-picture, situation-assessment, and morning-brief.
