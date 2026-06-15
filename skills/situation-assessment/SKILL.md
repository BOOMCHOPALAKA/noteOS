---
name: situation-assessment
description: Use when the user pastes raw context (email threads, chat threads, ticket comments, Slack messages, forwarded chains, or any block of unstructured context) and needs help understanding what's going on. Triggers on pasted content without a specific question, "what's going on here," "can you make sense of this," "what am I looking at," or any implied "process this and tell me the situation."
---

# Situation Assessment

**When this skill triggers, start your response with:** `Using situation-assessment skill`

## Overview

Untangle raw context into a clear picture of what's happening, who's involved, what's being asked, and what needs attention. This is the comprehension layer. Understanding before analysis. Making sense of messy inputs before deciding what to do about them.

## Context Gathering (do this BEFORE producing output)

**The first paste is almost never the full picture.** Don't take it at face value and immediately produce an assessment. The email thread has a Slack thread behind it. The ticket has a transcript where the real conversation happened. The forwarded chain is missing the reply that changed everything.

### After the first paste, always ask:

**"Before I dig into this, is there more context I should see?"**

Be specific based on what you're looking at:
- Email thread → "Is there a team chat thread or Slack thread where this was also discussed?"
- Ticket → "Any standup or meeting where this came up? Any related email threads?"
- Chat thread → "Is there a ticket for this? Any email chain that preceded this?"
- Transcript excerpt → "Is there a ticket tracking this? Any follow-up emails after the meeting?"
- Forwarded chain → "What prompted sharing this? Is there a specific question or are you trying to get the full picture?"

**Don't over-ask.** One focused question about what adjacent context might exist. If the user says "that's it," proceed. If he shares more, integrate it before producing output.

### If the user pastes with no framing:
Ask what he's trying to understand. "What's the question here?" or "Are you trying to figure out the current state, or is there a specific thing you need to decide?" The answer changes the output shape.

### If the user pastes with a clear question:
Still ask about additional context, but you can be briefer. "Got it. Any other threads on this before I dig in?"

## Vault Check

Before writing the assessment, search the vault:
- Does this topic have an existing ticket? Link to it.
- Was this discussed in a recent meeting? Cross-reference.
- Is there a Basecamp or knowledge note with background? Use it.
- Has this issue come up before? Surface the history.

The vault often has context the user forgot he already captured. Use it.

## Processing the Raw Input

### 1. Identify the source type and players
What am I looking at? (email chain, team chat, ticket comments, Slack, mixed)
Who are the people? Map names to known roles using vault context and participant rosters.
Flag any speaker identification uncertainty.

### 2. Untangle the chronology
Email chains are backwards. Chat threads have gaps. Tickets have duplicate comments and status changes mixed with discussion. Forwarded chains nest in confusing ways.

Reconstruct what happened in order. When multiple sources are provided, interleave them chronologically to show what was happening across channels simultaneously.

### 3. Separate signal from noise
Not everything in a 30-comment ticket thread matters. Identify:
- **Decisions made** (who decided what, when)
- **Current state** (what's the actual status right now)
- **Open questions** (what's unresolved)
- **The ask** (what's being asked of the user, if anything)
- **Noise** (status pings, duplicate comments, auto-notifications, pleasantries)

### 4. Surface what's not obvious
- Contradictions between what different people are saying
- Timeline gaps (3 weeks of silence between messages. What happened?)
- Assumptions people are making that might be wrong
- Escalation signals (tone shifts, new people getting cc'd, "per our conversation")
- Things that were asked but never answered

## Length ceilings

- **The Situation:** 2-4 sentences. Not a paragraph
- **The Players:** One line per person. Only include when 3+ people or roles aren't obvious
- **Timeline:** Only when sequence matters. Bullets, not prose
- **What's Being Asked of You:** 3-5 bullets max, one line each
- **What's Falling Through the Cracks:** 3 bullets max. Only real gaps
- **Total assessment:** Aim for ~500 words. the user stops reading past that

Skip any section with nothing to say. A tight 6-bullet assessment beats a padded 3-section one.

## Output Structure

Adapt based on what the situation needs. Not every section every time.

**Thread Temperature:** (email chains, chat threads, and forwarded chains only. Skip for single-message pastes or ticket comments.)
Always the first section when applicable. Two parts:
1. **Per-participant tone read.** One line each. Name, emotional state, what their tone is signaling beyond the literal words. Read the subtext. "Professional but frustrated" is different from "frustrated." "Just routing" is different from "calm." Why someone forwarded something matters as much as what they wrote.
2. **Overall temperature gauge.** One line. Cold / Cool / Warm / Hot / On Fire. Plus a short read on trajectory. "Warm, trending hot" or "Cool but one more missed deadline changes that." The trajectory matters more than the current state.

**The Situation:** 2-4 sentences. What's actually going on. Plain language. This is the "if someone asked you in the hallway" version.

**The Players:** Who's involved and what role they're playing in this specific thread. Only if there are 3+ people or the roles aren't obvious.

**The Timeline:** Chronological reconstruction. Only if the sequence matters for understanding (it usually does with email chains and ticket histories).

**What's Being Asked of You:** Specific. "Brandon is waiting for you to confirm X." "your webmaster asked about Y on March 17 and hasn't gotten a response." "Nobody is explicitly asking you anything, but this is going to land on your desk because Z."

**What's Falling Through the Cracks:** Things nobody is tracking. Questions asked but not answered. Assumptions that haven't been verified. Related work that the thread participants don't seem to know about.

**Connection to Vault:** Related tickets, meeting notes, prior context. What the vault already knows about this that adds to the picture.

## After the Assessment

- **Ask if the user wants to persist anything.** Does this warrant a ticket? Should it update an existing note? Daily note entry?
- **Surface if this connects to something bigger.** "This is the third time this month that consent form issues have come up. Might be worth a pattern note."
- If the situation reveals a decision point, offer to shift into deep-analysis mode.
- If it reveals an action item, offer to add it to the daily note TODOs.

## TLDR Convention

Every situation assessment gets a TLDR block. 3-5 bullets max. What's happening, what's being asked of the user, and the temperature.

- **In chat:** TLDR goes at the very bottom of the full assessment. the user reads the detail first, gets the punchline at the end.
- **In vault notes (if persisted):** TLDR goes at the top. the user scanning the vault sees the takeaway first.

## Cut Pass

Before sending:
- Any section with nothing real to say? Cut it
- Any bullet that's just "also" with extra words? Cut it
- Any transitional framing between sections ("Now let me turn to the timeline")? Cut it
- Any restating of what the user pasted back at him? Cut it
- Would the user read this if he were rushed?

## Hard Rules

- **Brevity:** Follow `~/.claude/skills/_shared/brevity.md` for canonical cut test and padding patterns. The ceilings here are additive
- **Don't restate the pasted content back to the user.** He saw it
- **Don't manufacture tension for the Temperature section.** If it's a routine ask, say so
- **No em dashes.** Periods

## What This is NOT

- **Not deep analysis.** This is comprehension, not strategy. Understand first, analyze later. If the user needs to make a decision, this skill hands off to deep-analysis.
- **Not meeting processing.** Meetings have a known structure (single event, known participants, transcript format). This handles messy, multi-source, async context.
- **Not email analysis.** Email analysis is a batch workflow across dozens/hundreds of emails looking for patterns. This is focused: one situation, traced across whatever sources exist.
