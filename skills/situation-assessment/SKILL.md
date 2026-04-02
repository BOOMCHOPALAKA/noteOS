---
name: situation-assessment
description: Use when the user pastes raw context (email threads, chat threads, ticket comments, Slack messages, forwarded chains, or any block of unstructured context) and needs help understanding what's going on. Triggers on pasted content without a specific question, "what's going on here," "can you make sense of this," "what am I looking at," or any implied "process this and tell me the situation."
---

# Situation Assessment

## Overview

Untangle raw context into a clear picture of what's happening, who's involved, what's being asked, and what needs attention. This is the comprehension layer. Understanding before analysis. Making sense of messy inputs before deciding what to do about them.

## Context Gathering (do this BEFORE producing output)

**The first paste is almost never the full picture.** Don't take it at face value and immediately produce an assessment.

### After the first paste, always ask:

**"Before I dig into this, is there more context I should see?"**

Be specific based on what you're looking at:
- Email thread: "Is there a chat thread or Slack discussion where this was also discussed?"
- Ticket with comments: "Any meeting where this came up? Any related email chains?"
- Chat thread: "Is there a ticket for this? Any email chain that preceded this?"
- Forwarded chain: "What prompted sharing this? Is there a specific question or are you trying to get the full picture?"

**Don't over-ask.** One focused question about what adjacent context might exist. If the user says "that's it," proceed.

### If the user pastes with no framing:
Ask what they're trying to understand. "What's the question here?" or "Are you trying to figure out the current state, or is there a specific decision?" The answer changes the output shape.

### If the user pastes with a clear question:
Still ask about additional context, but be briefer. "Got it. Any other threads on this before I dig in?"

## Vault Check

Before writing the assessment, search the vault:
- Does this topic have an existing note or ticket? Link to it.
- Was this discussed in a recent meeting? Cross-reference.
- Is there a Basecamp with background? Use it.
- Has this issue come up before? Surface the history.

## Processing the Raw Input

### 1. Identify the source type and players
What am I looking at? Who are the people? Map names to known roles using vault context. Flag any identification uncertainty.

### 2. Untangle the chronology
Email chains are backwards. Chat threads have gaps. Tickets have duplicate comments mixed with discussion. Reconstruct what happened in order. When multiple sources are provided, interleave them chronologically.

### 3. Separate signal from noise
Not everything in a 30-comment thread matters. Identify:
- **Decisions made** (who decided what, when)
- **Current state** (what's the actual status right now)
- **Open questions** (what's unresolved)
- **The ask** (what's being asked of the user, if anything)
- **Noise** (status pings, duplicate comments, auto-notifications, pleasantries)

### 4. Surface what's not obvious
- Contradictions between what different people are saying
- Timeline gaps (weeks of silence between messages)
- Assumptions people are making that might be wrong
- Escalation signals (tone shifts, new people getting cc'd)
- Things that were asked but never answered

## Output Structure

Adapt based on what the situation needs. Not every section every time.

**The Situation:** 2-4 sentences. What's actually going on. The "if someone asked you in the hallway" version.

**The Players:** Who's involved and their role in this thread. Only if 3+ people or roles aren't obvious.

**The Timeline:** Chronological reconstruction. Only if sequence matters for understanding.

**What's Being Asked of You:** Specific. "Sarah is waiting for you to confirm X." "Nobody is explicitly asking you anything, but this will land on your desk because Z."

**What's Falling Through the Cracks:** Things nobody is tracking. Questions not answered. Assumptions not verified. Related work that thread participants don't seem to know about.

**Connection to Vault:** Related notes, prior context. What the vault already knows that adds to the picture.

## After the Assessment

- Ask if the user wants to persist anything. Does this warrant a note? Should it update an existing one?
- Surface if this connects to something bigger. "This is the third time this month that X has come up."
- If the situation reveals a decision point, offer to shift into deep-analysis mode.
- If it reveals an action item, offer to add it to the daily note TODOs.

## What This is NOT

- **Not deep analysis.** This is comprehension, not strategy. Understand first, analyze later.
- **Not meeting processing.** Meetings have a known structure. This handles messy, multi-source, async context.
- **Not email analysis.** Email analysis is a batch workflow across dozens of emails. This is focused: one situation, traced across whatever sources exist.
