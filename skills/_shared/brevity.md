# Shared Brevity Rules

Canonical brevity rules for all skills that produce analytical output. Every analytical skill references this file in its Hard Rules.

## Core principle

People stop reading when things are too long. That's the whole rule. Rich source material does not justify longer output. A TLDR of a 10K-word doc is the same size as a TLDR of a 500-word doc. Cut is better than split. If the headline and first bullet don't stand alone, they're wrong, not incomplete. Short is the goal, not a failure state.

The user can always ask for more. They cannot unread a wall of text.

## Word count targets by output type

- **TLDR / talking points:** 120 words max, 3 bullets max
- **Analytical section** (thinking-partner block, situation headline): 400 words max across all sub-sections
- **Section with header + bullets:** 3-5 bullets, ~300 words
- **Next steps:** 3 items max, one line each
- **Full briefing** (morning brief, weekly digest): each section has its own cap. Total varies but every section is individually capped
- **Client-facing report** (status report): respects the report structure. Brevity rules still apply inside each section

When in doubt, halve it.

## The cut test

Before sending any output, run this pass:

1. Would the reader get through this if they were rushed?
2. Can any bullet be removed without losing the point?
3. Is there a "so what" the headline already covers?
4. Are there transitional phrases that add nothing?
5. Is anything just "also" with extra words?
6. Is any section padded because the source was rich, not because there's something to say?

Cut everything that fails. Do not split to preserve content. Cut it.

## Common padding patterns to cut

- Restating the question before answering it
- Summarizing what you're about to say before saying it
- "Let me walk through..." "Now let's turn to..." "It's worth noting..." "It's important to mention..."
- Parallel constructions that sound like AI templates ("not X but Y," "that's just X with extra steps")
- Summary paragraphs that repeat the bullets above them
- Transitional framing between sections
- "Also" bullets that don't add a distinct point
- Listing three examples when one makes the point
- Manufactured insights to fill a section that has nothing to say. If a section is empty, skip it
- Hedge stacking ("it seems like it might possibly be")
- Restating the user's context back to them

## Hard rules

- **No em dashes. No dashes as sentence separators.** Periods. Zero exceptions.
- **No dramatized framing.** No "changes everything," "linchpin," "lands or dies," escalating-reveal structure.
- **Rich source material does not justify longer output.**
- **Skip empty sections.** Don't manufacture content to fill a template slot.
- **Short is the goal, not a failure state.**
- **If a section has nothing to say, cut it.** Don't pad.

## What NOT to cut: source-faithful hedges

The cut test catches hedges that don't change meaning. **Source-faithful hedges DO change the meaning.** Don't cut them.

If the original speaker hedged ("should be," "I think," "tentatively," "going to," "we'll try"), that hedge is a fact about confidence level. It is information, not padding. Preserve it in your output.

| Source said | Don't compress to | Keep as |
|---|---|---|
| "should be done by Monday" | "done Monday" | "expected by Monday" or "should be done by Monday" |
| "I think we're good" | "we're good" | "looks good" or "we believe we're good" |
| "tentatively" | "scheduled" | "tentatively" |
| "going to bring it up" | "will bring it up" | "going to bring it up" |
| "officially going live" | "launched" | "going live" |

This rule overrides the brevity cut test for source-faithful hedges. Compression that erodes hedges produces fabrications, not brevity.

See `skills/_shared/source-discipline.md` for the broader rule.
