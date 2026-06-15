---
name: email-analysis
description: Use when the user asks to analyze emails, review email exports, process an email batch, or wants to understand communication patterns, surface net-new items from email threads, or cross-reference emails against meeting notes and vault context.
---

# Email Analysis

**When this skill triggers, start your response with:** `Using email-analysis skill`

## Overview

Process email exports to surface actionable items, communication patterns, and net-new context that hasn't been captured elsewhere in the vault. This is pattern recognition across async multi-sender communication over time. Not a summary of individual emails.

## Source Format

Email exports land in `Downloads/EmailExports/` organized by client and date range. Formats vary (text exports, forwarded chains, batch dumps).

## Workflow

### 1. Vault First
Before reading a single email, check what's already captured:
- Recent daily notes (what's been discussed in meetings)
- Active tickets for the relevant client
- Previous email analyses (to avoid re-surfacing known items)
- Current Context for active threads

The goal: know what's already known so you can identify what's net-new.

### 2. Batch and Categorize
- Group by client folder (your project, your client, General Inbox)
- Count total volume and distribution
- Identify top senders and communication density
- Flag threads with high back-and-forth (usually indicates active issues)

### 3. Cross-Reference Against Vault
For each substantive thread:
- Does a ticket already exist for this issue?
- Was this discussed in a recent standup or meeting?
- Is this net-new information or a repeat of something already captured?

**Only surface what's actually new.** The vault already has most meeting-sourced context. The value of email analysis is catching what fell through the cracks between meetings.

### 4. Structure the Output

**Executive Summary:**
- Email distribution by client/folder with counts and percentages
- Key insight (what the volume pattern tells you)

**Critical Issues (by client):**
For each issue surfaced:
- Email evidence (who said what, when, thread activity level)
- Cross-reference with existing tickets/sprint items
- Status: resolved, in progress, or needs attention
- Action needed (if any)

**Threads Waiting on the user's Response:**
- List with sender, topic, date sent, and how long it's been sitting
- This is the accountability section. Don't sugarcoat it.

**Already Covered:**
- Brief list of threads that map to existing vault notes/tickets
- Proves the analysis was thorough without re-surfacing known items

### 5. Generate TODOs
Extract actionable items for the daily note. Same filtering rules as meeting processing: only items where the user owns the action, is the bottleneck, or is accountable if it drops.

### 6. Update the Vault
- Create standalone analysis note: `Email Analysis - [Date Range].md` in vault root
- Update existing tickets when emails add new context
- Flag items for Basecamp-level updates when email threads reveal structural changes
- Cross-link analysis to daily note and relevant tickets

## Length ceilings

- **Executive Summary:** 4-5 bullets. Not a page
- **Each Critical Issue:** ~100 words. Evidence, cross-ref, status, action. No narrative retelling
- **Waiting on the user's Response:** bulleted list, one line each
- **Already Covered:** one line per thread. This section is the shortest, not the longest
- **Total:** ~1000 words. This is deeper than a digest but it is not a book

## Cut Pass

Before finalizing:
- Any Critical Issue that's actually a routine update? Demote to Already Covered
- Any pattern that's "emails came in this week"? Cut
- Any paragraph summarizing earlier sections? Cut
- Any thread narrated in three sentences when one captures it? Cut

## Hard Rules on Length

- **Brevity:** Follow `~/.claude/skills/_shared/brevity.md`. No em dashes
- **Rich source material does not justify longer output.** 500 emails gets a tighter analysis, not a longer one
- **Don't manufacture patterns to fill the Patterns section**
- **Don't restate thread content verbatim when a one-line summary captures it**

## Client Separation
your project and your client are completely separate. Analyze and report separately. Never cross-pollinate findings.

## TLDR Convention

Every email analysis output gets a TLDR block. 3-5 bullets max. What's net-new, what's waiting on the user, and the biggest pattern.

- **In chat:** TLDR goes at the very bottom of the full output. the user reads the detail first, gets the punchline at the end.
- **In vault notes:** TLDR goes at the top of the analysis note (right after the header). the user scanning the vault sees the takeaway first and drills into detail if needed.

## What Makes This Different from Meeting Processing
Emails are async, multi-sender, over weeks. Meetings are synchronous, single session. Email analysis catches:
- Threads that never made it to a standup
- Decisions made via email that weren't announced in meetings
- Response gaps (things sitting unanswered)
- Communication patterns (who's talking to whom, how often)
