---
name: email-analysis
description: Use when the user asks to analyze emails, review email exports, process an email batch, or wants to understand communication patterns, surface net-new items from email threads, or cross-reference emails against meeting notes and vault context.
---

# Email Analysis

## Overview

Process email exports to surface actionable items, communication patterns, and net-new context that hasn't been captured elsewhere in the vault. This is pattern recognition across async multi-sender communication over time. Not a summary of individual emails.

## Source Format

Email exports land in `Downloads/EmailExports/` organized by project or date range. Formats vary (text exports, forwarded chains, batch dumps). If your AI tool has a live email integration, the same workflow applies to a pulled batch.

## Workflow

### 1. Vault First

Before reading a single email, check what's already captured:
- Recent daily notes (what's been discussed in meetings)
- Active project notes for the relevant area
- Previous email analyses (to avoid re-surfacing known items)
- Current Context for active threads

The goal: know what's already known so you can identify what's net-new.

### 2. Batch and Categorize

- Group by project, client, or sender if you track multiple
- Count total volume and distribution
- Identify top senders and communication density
- Flag threads with high back-and-forth (usually indicates active issues)

### 3. Cross-Reference Against Vault

For each substantive thread:
- Does a note or project already cover this issue?
- Was this discussed in a recent meeting?
- Is this net-new information or a repeat of something already captured?

**Only surface what's actually new.** The vault already has most meeting-sourced context. The value of email analysis is catching what fell through the cracks between meetings.

### 4. Structure the Output

**Executive Summary:**
- Email distribution by project/sender with counts
- Key insight (what the volume pattern tells you)

**Critical Issues (grouped by project if you track multiple):**
For each issue surfaced:
- Email evidence (who said what, when, thread activity level)
- Cross-reference with existing notes or projects
- Status: resolved, in progress, or needs attention
- Action needed (if any)

**Threads Waiting on Your Response:**
- List with sender, topic, date sent, and how long it's been sitting
- This is the accountability section. Don't sugarcoat it.

**Already Covered:**
- Brief list of threads that map to existing vault notes
- Proves the analysis was thorough without re-surfacing known items

### 5. Generate TODOs

Extract actionable items for the daily note. Same filtering rules as meeting processing: only items where you own the action, are the bottleneck, or are accountable if it drops.

### 6. Update the Vault

- Create a standalone analysis note: `Email Analysis - [Date Range].md` in vault root
- Update existing notes when emails add new context
- Flag items for Basecamp-level updates when email threads reveal structural changes
- Cross-link the analysis to the daily note and relevant notes

## Length ceilings

- **Executive Summary:** 4-5 bullets. Not a page
- **Each Critical Issue:** ~100 words. Evidence, cross-ref, status, action. No narrative retelling
- **Waiting on Your Response:** bulleted list, one line each
- **Already Covered:** one line per thread. This section is the shortest, not the longest
- **Total:** ~1000 words. This is deeper than a digest but it is not a book

## Cut Pass

Before finalizing:
- Any Critical Issue that's actually a routine update? Demote to Already Covered
- Any pattern that's "emails came in this week"? Cut
- Any paragraph summarizing earlier sections? Cut
- Any thread narrated in three sentences when one captures it? Cut

## Hard Rules on Length

- **Brevity:** Follow `skills/_shared/brevity.md`. No em dashes
- **Rich source material does not justify longer output.** 500 emails gets a tighter analysis, not a longer one
- **Don't manufacture patterns to fill a section**
- **Don't restate thread content verbatim when a one-line summary captures it**

## Multi-Project Separation

If you track multiple projects or clients, analyze and report them separately. Don't cross-pollinate findings between unrelated areas. A single combined "everything" analysis loses the signal.

## TLDR Convention

Every email analysis output gets a TLDR block. 3-5 bullets max. What's net-new, what's waiting on you, and the biggest pattern.

- **In chat:** TLDR goes at the very bottom of the full output. Read the detail first, get the punchline at the end.
- **In vault notes:** TLDR goes at the top of the analysis note (right after the header). Scanning the vault, you see the takeaway first and drill into detail if needed.

## What Makes This Different from Meeting Processing

Emails are async, multi-sender, over weeks. Meetings are synchronous, single session. Email analysis catches:
- Threads that never made it to a meeting
- Decisions made via email that weren't announced elsewhere
- Response gaps (things sitting unanswered)
- Communication patterns (who's talking to whom, how often)
