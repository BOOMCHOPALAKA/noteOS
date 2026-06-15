---
name: tldr
description: Use when the user asks for a tldr, talking points, summary, "sum this up," "what are the key findings," or references a topic he wants distilled for a stakeholder call. Triggers on "tldr," "talking points," "sum this up for your manager," "give me the bullets on X." Also triggers on exec briefing requests: "exec rollup," "brief your manager on," "rollup for leadership," "C-level update on X," which use the exec briefing format variant instead of the default shape.
---

**When this skill triggers, start your response with:** `Using tldr skill`

## Overview

Distills deep analysis into stakeholder-ready talking points the user can read off or reference mid-call. Two modes: current conversation context, or topic-based (pulls from vault). Output is speakable, hedged on interpretation, and accurate on facts.

## Workflow

### 1. Determine the source

- **Conversation mode:** the user says "tldr" or "sum this up" without naming a specific topic. Source is the current conversation.
- **Topic mode:** the user names a topic ("tldr the pagespeed situation," "talking points on the traffic spike"). Search vault: Current Context, Basecamps, daily notes, tickets, and linked notes for the topic. Combine with any conversation context.

### 2. Identify the audience

If the user names a person ("sum this up for your manager"), calibrate the detail level and framing for that person. If no audience is named, default to a non-technical stakeholder who needs to understand what's happening and what it means.

### 2b. Language register (laymens default)

**Laymens is the default.** Every tldr output — default format and exec briefing format — goes out in business-observable terms, not developer jargon. The output should read naturally to your manager, your client contact, your executive contact, Alexis, Dylan, or any stakeholder without forcing them to translate internal mechanisms into their own mental model.

**What laymens means in practice:**
- Describe mechanisms by what they DO, not what they're called internally
- Example: "corporate sync" becomes "the part of the tool that was automatically pushing the new price out to every location's website"
- Example: "cache invalidation issue" becomes "the website was showing an older price because it hadn't refreshed"
- Example: "MsrpBatchApplier was queueing the corporate-push call" becomes "the apply action was also triggering an automatic push"

**Laymens does NOT mean dumbed-down.** The goal is precision in business-observable terms. Preserve the facts. Translate only the vocabulary.

**What stays technical (don't translate):**
- File paths, line numbers, commit hashes, ticket numbers, SKU codes, URLs. These are identifiers, not jargon
- Product/system names stakeholders already know (WordPress, Pricing Portal, MSRP, WooCommerce, Ask Alice)
- Industry-standard terms in the stakeholder's domain (checkout, location price, franchisee)

**What MUST be translated:**
- Internal architecture terms ("corporate sync," "franchise sync," "write path," "cache key")
- Code mechanism descriptions ("the method was queueing," "sessionStorage persistence")
- Implementation jargon ("service container," "endpoint," "handler")

**Opt-out to technical precision (narrow):**
Use precise dev terminology ONLY when:
- the user names a technical audience explicitly ("for your developer," "for Rost," "for the dev team")
- the user explicitly asks to keep the technical terms ("don't laymens this one," "keep the dev terms")
- The tldr is distilling code-level content where precision is the point (codebase trace output, commit history summary)

**If in doubt, laymens wins.** Over-translation has near-zero cost. Under-translation costs the user a stumble on a stakeholder call.

See the `laymens` skill for the canonical translation patterns and examples.

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

Use when the user triggers with "exec rollup," "brief [name] on," "rollup for leadership," "C-level update on X," or similar. Designed for briefing an executive (your client, your executive contact, or leadership) on an active situation or incident in 60-90 seconds, with enough structure that they can repeat it to their own stakeholders in their own words.

**Hard ceilings (non-negotiable):**
- **Total output target: under 300 words.** Should be readable silently in 60 seconds, aloud in 90.
- **Always five sections, always in this order.** Consistent structure means the executive's eye learns the pattern across briefings.
- **Each section 1-4 sentences, or 2-4 bullets when listing distinct items.**

**Format:**

```
[TOPIC NAME] — [Date, Time TZ]

SITUATION
What's going on in plain language. The problem or scenario the exec
needs to understand. If there are multiple distinct bugs or layers,
name each one in its own short paragraph. Chronological if helpful.

WHERE WE ARE
One or two sentences. Current state. What's stable, what's held,
what's active.

WHAT'S DONE
What's been fixed, resolved, shipped, or completed. Credit by name
where appropriate (your developer, Rost, Alexis).

WHAT'S LEFT
What's still open. Name the owner and (if known) the ETA. "No ETA yet"
is a valid answer, don't fabricate timing.

RISK
Customer-facing impact right now. Any stakeholder-visible exposure.
Whether holding is the right call. Keep this honest: if there IS risk,
say so. If there isn't, say "none customer-facing right now."
```

**Why the five sections:**
- SITUATION first because execs ask "what's going on" before "what's the status"
- WHERE WE ARE gives the binary-ish status marker (stable, rolled back, deployed, etc.)
- WHAT'S DONE addresses the implicit "how hard is the team working on this"
- WHAT'S LEFT addresses "is this going to be done soon"
- RISK addresses the unasked but always-sitting "do I need to worry"

**Source-only discipline (critical for exec briefings).**
Executives will quote this briefing to your client contact, your executive contact, or their own leadership. Every claim has to trace to a source: email, transcript, code, or direct stakeholder statement. If something is inferred, say "per your developer" or "based on Alexis's email" or "not yet verified." Never let editorial framing slip in as fact (e.g. "they didn't anticipate adoption" is an inference, not a stated cause). See MEMORY.md `_shared/source-discipline.md` and `_shared/source-discipline.md` for the underlying discipline.

**Don't include:**
- Dev jargon or implementation detail (commit hashes, file paths, function names)
- Stakeholder names that aren't load-bearing for the exec's understanding
- Hedging that doesn't change the answer ("it's worth noting," "of course")
- Closing pleasantries or "let me know if you need more"
- Any section that doesn't have something substantive to say (but prefer "none" over silence)

### 4. The cut test

**For default format:** "If the user reads only the headline and the first bullet, does he have what he needs to say the right thing on a call?" If no, the headline or first bullet is wrong. If yes, the rest is bonus and should be cut hard.

**For exec briefing format:** "If the executive reads only SITUATION and RISK, do they understand the problem and know whether to worry?" If no, fix those two sections. WHERE WE ARE / WHAT'S DONE / WHAT'S LEFT are scaffolding that supports those two.

If the source material is rich (a long conversation, a multi-session assessment, a complex situation), the temptation is to produce a long TLDR. Resist it. Richness in the source is not a license for length in the output. A TLDR from a 10,000-word analysis is the same length as a TLDR from a 500-word analysis. That's the entire point of the skill.

## Hard Rules

- **Brevity:** Follow `~/.claude/skills/_shared/brevity.md` for the canonical cut test, padding patterns, and hard rules. The ceilings in this skill are additive to that baseline.
- **Never be declarative on interpretation.** Use "could be," "the data suggests," "looks like," "maybe this." State what the data shows as fact. Frame analysis as a read, not a conclusion.
- **Don't assume or fill gaps.** If something is uncertain, inferred, or unverified, say so. Don't make plausible-sounding claims to fill holes.
- **Verify before stating.** If you're pulling a number, a date, a name, or a claim, make sure it's accurate. Check the source. Don't round in misleading ways.
- **Keep it speakable.** Every line should sound natural said out loud on a call. No jargon dumps, no nested clauses, no dense technical language unless the audience is technical.
- **Laymens is default, always-on.** Translate internal architecture and implementation jargon into business-observable terms by default. Technical precision is the opt-out, not the default. See Section 2b for translation rules and narrow opt-out conditions.
- **Lead with what matters most.** The headline and first two bullets should carry 80% of the value. If the user only gets through those before being interrupted, the message still lands.
- **Don't pad.** If the tldr is 2 bullets, it's 2 bullets. Don't stretch to fill a template. Short is the goal, not a failure state.
- **Three bullets is the ceiling, not the floor.** Rich source material does not justify more bullets. It justifies harder cuts. (Default format only; exec briefing uses fixed five sections.)
- **Skip optional sections when empty.** Default format: if there's no "so what" worth adding, don't write one. Exec briefing: never skip the five sections, but a section can be "none customer-facing right now" if that's the honest answer.
- **No em dashes.** Periods to separate thoughts.
- **Watch for scope creep.** Lists of "quick wins" and "longer-term items" belong in a briefing, not a TLDR. If the user wants structured recommendations, he'll ask for a different skill (deep-analysis, next-steps). TLDR is headline plus bullets, or the fixed five-section exec briefing.
- **Exec briefing: always five sections, always same order.** SITUATION → WHERE WE ARE → WHAT'S DONE → WHAT'S LEFT → RISK. Consistency is the value; don't rearrange or add sections.
- **Exec briefing: source-only on every claim.** If it's not directly sourced, it's inferred, and inferred claims get "per [person]" or "not yet verified" framing. Execs quote briefings to their stakeholders. Editorial framing becomes fact in the next room.

## What This Doesn't Do

- Doesn't generate new analysis. It distills what already exists in the conversation or vault
- Doesn't update the vault. This is ephemeral, on-the-fly output
- Doesn't replace deep-analysis or situation-assessment. Those are for doing the thinking. This is for communicating the result
