# Shared Source Discipline

Canonical source-discipline rules for all skills that produce vault writes or stakeholder-facing copy. Every skill that writes content references this file in its Hard Rules.

This rule overrides volume pressure. If "synthesize aggressively" and "source every claim" conflict, source wins. Volume without sourcing is worse than no entry.

## Core principle

Every concrete claim must trace to a specific source. Concrete claims include:

- **Milestones** ("launched," "shipped," "first sale," "first customer," "live")
- **Numbers** ("113 customers affected," "30+ tickets," "1 in 40")
- **Dates** ("April 29 deploy," "May 1 root cause")
- **Status assertions** ("ready for production," "in progress," "blocked," "approved")
- **Decisions** ("the client approved," "leadership decided," "the team aligned on")
- **Attributions** ("X confirmed Y," "X said Z")

Acceptable sources:
- A specific transcript line (with date and recording context)
- A daily note entry
- A deploy log entry
- A commit message or git history entry
- A chat or email message
- A stakeholder's recorded statement

**Not acceptable as sources:**
- "Synthesized from prior reports" (cites the secondary, not the original)
- "Inferred from operational context"
- "Implied by [hedged stakeholder language]"
- "Mentioned in same meeting as" (adjacency is not membership)
- The skill's own prior outputs (circular sourcing)
- "Per [name]" attributions where [name] is reporting what someone else said

## The four failure modes (forbidden)

These are the patterns that produce fabrications. Don't do them.

### 1. Inferring milestones from operational language

Operational language ("going live," "ready," "should be," "in testing," "officially live") is NOT milestone language ("launched," "shipped," "first sale," "first customer"). They are not interchangeable.

| Source said | Don't write | Write |
|---|---|---|
| "going live" / "officially going live" | "launched" / "first customer order" | "going live" |
| "officially live" | "first sale" | "live" |
| "ready" | "shipped" | "ready" |
| "should be done by Monday" | "done Monday" | "expected by Monday" |
| "I think they're launching" | "launched" | "expected launch this week" |
| "we're testing" | "tested and verified" | "in testing" |
| "code is on production" | "released to customers" | "deployed to production" |
| "successfully deployed" | "major milestone" | "deployed" |

### 2. Treating adjacency as causation

If X is mentioned in the same meeting/document/thread as Y, that does not mean X involves Y. Co-occurrence is not membership. If the only evidence for "X involves Y" is that they appeared in the same meeting, that's not evidence. Find a direct claim or hedge it ("may relate to," "could intersect with").

### 3. Eroding hedges across hops

Hedged source language must stay hedged downstream. Each hop (transcript → daily note → status report → stakeholder copy) is a chance to erode. After enough hops, "I think" becomes fact. **Match the source's hedge level at every hop.**

### 4. Confident attribution from secondhand sources

When attributing a claim to a person, the source must be that person directly. If the chain is "the CEO, per a colleague" or "the client, per a teammate," keep the chain visible. Don't collapse into "the CEO approved." If multiple people held different positions, name the disagreement. Don't soften it into "all aligned."

## Pre-write source check

Before writing any non-trivial claim, ask:

1. **What's the source?** Name it specifically. If you can't, the claim doesn't ship.
2. **Does my wording match what the source actually says?** If the source hedged, my wording hedges.
3. **Am I claiming a milestone the source supports, or one I inferred?** If inferred, hedge or omit.
4. **Could this trigger a stakeholder fact-check?** If yes, double-check the source. If still uncertain, hedge.

If a claim fails any check, surface it before finalizing. Say: "I want to claim X. Source is Y. Y is hedged ('might,' 'should be,' 'going to') — should I keep this claim, hedge it, or cut it?"

**Do not silently translate. Do not silently fabricate. Do not silently fill gaps.**

## Source pass at synthesis time

For skills that synthesize across multiple sources (status-report, weekly-email-digest, situation-assessment, analyze):

The source pass runs **at synthesis time**, not just at delivery. As you write each thread/section/bullet, name the source for each concrete claim. If you can't name it, hedge or omit. Don't write the synthesis first and check sources later. By then the narrative is locked.

## Source pass for vault writes

For skills that write to vault files (update-notes, remember, meeting-transcript-processing):

Vault writes are forever. A confident claim in a daily note becomes a fact in next week's status report. Hedge harder than you would in chat. Inference belongs in clearly-labeled "my read" or "thinking partner" sections, never in the factual record.

## What good looks like

**Bad (synthesis-as-fact, no traceable source):**
> The new product launched. First customer order April 30.

**Good (sourced, hedged appropriately):**
> Deployed to production April 29. Code-side ready for customer orders. Customer launch gated on the partner agreement, per the March summary.

**Bad (adjacency synthesis):**
> The marketing team is looping in on the broader platform rollout.

**Good (sourced or omitted):**
> Platform rollout in progress (engineering side). [Or omitted entirely if marketing involvement isn't actually stated.]

**Bad (attribution drift):**
> Sam, Maria, and Alex aligned on the framing.

**Good (preserves disagreement):**
> Sam and Maria aligned on "working as designed." Alex flagged a gap. Decision pending.

## Hard rules

- **No claim ships without a source.** If you can't name it, hedge or omit.
- **Hedges from the source stay in the output.** No compression for density.
- **Adjacency is not causation.** Don't synthesize membership from co-occurrence.
- **Disagreements stay visible.** Don't soften into consensus.
- **Vault writes hedge harder than chat output.** They feed future stakeholder copy.
- **Synthesis must label its sources.** Inferred connections in a "my read" bucket, never in a "what we know" bucket.
- **Surface uncertainty before writing.** If you're about to write a claim you can't fully source, ask before drafting.

## Related

- `skills/_shared/brevity.md` — brevity rules (with the source-faithful-hedges carve-out)
