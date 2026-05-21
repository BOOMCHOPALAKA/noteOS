---
name: tldr
description: Use when the user asks for a tldr, talking points, summary, "sum this up," "what are the key findings," or references a topic they want distilled for a stakeholder call. Triggers on "tldr," "talking points," "sum this up for [name]," "give me the bullets on X." Also triggers on exec briefing requests: "exec rollup," "brief [name] on," "rollup for leadership," "C-level update on X," which use the exec briefing format variant instead of the default shape.
---

# TLDR

## Overview

Distills analysis into stakeholder-ready talking points the user can read off or reference mid-call. Two modes: current conversation context, or topic-based (pulls from vault). Output is speakable, hedged on interpretation, and accurate on facts.

## Workflow

### 1. Determine the source

- **Conversation mode:** The user says "tldr" or "sum this up" without naming a specific topic. Source is the current conversation.
- **Topic mode:** The user names a topic ("tldr the budget situation," "talking points on the vendor delay"). Search vault: Current Context, Basecamps, daily notes, project notes, and linked notes for the topic. Combine with any conversation context.

### 2. Identify the audience

If the user names a person ("sum this up for my manager"), calibrate the detail level and framing for that person. If no audience is named, default to a non-technical stakeholder who needs to understand what's happening and what it means.

### 2b. Plain-language register (default)

**Plain language is the default.** Every tldr output, both the default format and the exec briefing format, goes out in business-observable terms, not insider jargon. The output should read naturally to a stakeholder without forcing them to translate internal mechanisms into their own mental model.

**What this means in practice:**
- Describe mechanisms by what they DO, not what they're called internally
- Example: "the sync service" becomes "the part of the tool that automatically pushes updates out to every location"
- Example: "cache invalidation issue" becomes "the page was showing old data because it hadn't refreshed"

**Plain language does NOT mean dumbed-down.** The goal is precision in business-observable terms. Preserve the facts. Translate only the vocabulary.

**What stays as-is (don't translate):**
- Identifiers: file paths, ticket numbers, URLs, dates
- Product/system names the stakeholder already knows
- Industry-standard terms in the stakeholder's own domain

**What MUST be translated:**
- Internal architecture terms (system component names, "write path," "cache key")
- Code mechanism descriptions ("the method was queueing," "the handler fired")
- Implementation jargon ("service container," "endpoint," "middleware")

**Opt-out to technical precision (narrow):** Use precise terminology ONLY when the user names a technical audience explicitly ("for the dev team"), explicitly asks to keep the technical terms, or the tldr is distilling code-level content where precision is the point.

**If in doubt, plain language wins.** Over-translation has near-zero cost. Under-translation costs the user a stumble on a stakeholder call.

### 2a. Determine the output format

**Default format (headline + bullets):** Use when the user says "tldr," "sum this up," "talking points," or similar. Best for quick distillations, topic summaries, and mid-call reference.

**Exec briefing format (five-section):** Use when the user says "exec rollup," "brief [name] on," "rollup for leadership," "C-level update," or similar. Best for briefing leadership on an active situation or incident where they need the full arc (problem → status → progress → remainder → risk) in one pass. This format is specifically designed for how executives process updates.

### 3. Build the output

## Default format (headline + bullets)

**Hard ceilings (non-negotiable):**
- **Headline:** 1 sentence
- **Key findings:** 6 bullets MAX. Use as few as the topic needs. 2-3 is typical. 6 is the ceiling for complex topics.
- **So what:** 1 sentence. Optional. Skip if the headline already says it.
- **Open questions:** 2 bullets MAX. Optional. Skip if there are none worth naming.

**Total output target: under 200 words. If the user can't read the entire thing in 45 seconds out loud, it's too long.**

**Format:**

**[Topic Label]**

**Headline:** One sentence. What's the core finding or situation. Hedged if it's interpretation.

- Bullet. Data or observation stated as fact, or interpretation framed as a read
- Bullet. Speakable in one breath. If it's too long, cut it, don't split it
- Additional bullets only if each adds something the previous ones don't. 2-3 is typical. 6 is the hard ceiling

**So what:** One line. Skip if redundant with the headline.

**Open questions:** (Optional, max 2.)
- Who's doing what, what's still unknown

## Exec briefing format (five-section)

Designed for briefing an executive on an active situation or incident in 60-90 seconds, with enough structure that they can repeat it to their own stakeholders in their own words.

**Hard ceilings (non-negotiable):**
- **Total output target: under 300 words.** Should be readable silently in 60 seconds, aloud in 90.
- **Always five sections, always in this order.** Consistent structure means the executive's eye learns the pattern across briefings.
- **Each section 1-4 sentences, or 2-4 bullets when listing distinct items.**

**Format:**

```
[TOPIC NAME] — [Date, Time TZ]

SITUATION
What's going on in plain language. The problem or scenario the exec
needs to understand. If there are multiple distinct issues or layers,
name each one in its own short paragraph. Chronological if helpful.

WHERE WE ARE
One or two sentences. Current state. What's stable, what's held,
what's active.

WHAT'S DONE
What's been fixed, resolved, shipped, or completed. Credit by name
where appropriate.

WHAT'S LEFT
What's still open. Name the owner and (if known) the ETA. "No ETA yet"
is a valid answer, don't fabricate timing.

RISK
Real-world impact right now. Any stakeholder-visible exposure.
Whether holding is the right call. Keep this honest: if there IS risk,
say so. If there isn't, say "none customer-facing right now."
```

**Why the five sections:**
- SITUATION first because execs ask "what's going on" before "what's the status"
- WHERE WE ARE gives the binary-ish status marker (stable, rolled back, deployed, etc.)
- WHAT'S DONE addresses the implicit "how hard is the team working on this"
- WHAT'S LEFT addresses "is this going to be done soon"
- RISK addresses the unasked but always-sitting "do I need to worry"

**Source-only discipline (critical for exec briefings).** Executives will quote this briefing to their own leadership. Every claim has to trace to a source: email, transcript, code, or direct stakeholder statement. If something is inferred, say "per [person]" or "based on [source]" or "not yet verified." Never let editorial framing slip in as fact (e.g. "they didn't anticipate adoption" is an inference, not a stated cause). See `skills/_shared/source-discipline.md`.

**Don't include:**
- Jargon or implementation detail (commit hashes, file paths, function names)
- Names that aren't load-bearing for the exec's understanding
- Hedging that doesn't change the answer ("it's worth noting," "of course")
- Closing pleasantries or "let me know if you need more"
- Any section that doesn't have something substantive to say (but prefer "none" over silence)

### 4. The cut test

**For default format:** "If the user reads only the headline and the first bullet, do they have what they need to say the right thing on a call?" If no, the headline or first bullet is wrong. If yes, the rest is bonus and should be cut hard.

**For exec briefing format:** "If the executive reads only SITUATION and RISK, do they understand the problem and know whether to worry?" If no, fix those two sections. WHERE WE ARE / WHAT'S DONE / WHAT'S LEFT are scaffolding that supports those two.

If the source material is rich (a long conversation, a multi-session assessment, a complex situation), the temptation is to produce a long TLDR. Resist it. Richness in the source is not a license for length in the output. A TLDR from a 10,000-word analysis is the same length as a TLDR from a 500-word analysis. That's the entire point of the skill.

## Hard Rules

- **Brevity:** Follow `skills/_shared/brevity.md` for the canonical cut test, padding patterns, and hard rules. The ceilings in this skill are additive to that baseline.
- **Never be declarative on interpretation.** Use "could be," "the data suggests," "looks like." State what the data shows as fact. Frame analysis as a read, not a conclusion.
- **Don't assume or fill gaps.** If something is uncertain, inferred, or unverified, say so.
- **Verify before stating.** If you're pulling a number, a date, a name, or a claim, make sure it's accurate. Check the source.
- **Keep it speakable.** Every line should sound natural said out loud on a call.
- **Plain language is default, always-on.** Translate internal jargon into business-observable terms by default. Technical precision is the opt-out, not the default. See Section 2b.
- **Lead with what matters most.** The headline and first two bullets should carry 80% of the value.
- **Don't pad.** If the tldr is 2 bullets, it's 2 bullets. Short is the goal, not a failure state.
- **Three bullets is the ceiling, not the floor.** (Default format only; exec briefing uses fixed five sections.)
- **No em dashes.** Periods to separate thoughts.
- **Exec briefing: always five sections, always same order.** SITUATION → WHERE WE ARE → WHAT'S DONE → WHAT'S LEFT → RISK.
- **Exec briefing: source-only on every claim.** If it's not directly sourced, it's inferred, and inferred claims get "per [person]" or "not yet verified" framing.

## What This Doesn't Do

- Doesn't generate new analysis. It distills what already exists in the conversation or vault
- Doesn't update the vault. This is ephemeral, on-the-fly output
- Doesn't replace `analyze` or `situation-assessment`. Those are for doing the thinking. This is for communicating the result
