---
name: weekly-email-digest
description: Use when the user asks for a weekly email digest, weekly email recap, "what happened this week in email," or wants a pattern-level view of the week's email activity. Triggers on "weekly digest" or "week in email."
---

# Weekly Email Digest

## Overview

Pattern-level view of the week's email activity. Not a list of every email. This surfaces what threads moved, what's stale, what came in that nobody acted on, and what communication patterns are worth noting. Built on top of the daily digest format but at a higher altitude.

## Email Source

Same as daily-email-digest: source-agnostic. Use a connected email integration, a pasted batch, or an export. If your source can pull the Sent folder, do it. The "Waiting on You" section depends on knowing what's already been replied to.

## Workflow

### 1. Load Vault Context

- Read [[Current Context]] for active threads
- Scan the week's daily notes for meetings processed and TODOs captured
- Check if any daily email digests were already run this week (avoid re-surfacing)

### 2. Pull Emails

- Pull the target week's inbox (Monday through current day, or Monday through Friday if run on the weekend)
- **Also pull the Sent folder** for the same period if your source allows. Cross-reference inbound threads against sent replies. This is critical for the "Waiting on You" section. Don't list threads as unanswered if they were already replied to
- If daily digests exist for some days, focus deeper reads on days that weren't covered

### 3. Filter and Categorize

Same noise filtering as the daily digest. Then categorize what's left:
- **Active threads:** Multiple emails in the same thread this week
- **New threads:** Started this week, not a continuation
- **Stale/unanswered:** Sent to the user, no reply yet, getting old
- **Resolved:** Thread that closed out this week

### 4. Structure the Digest

**Week at a Glance:**
- Total substantive emails (noise filtered out)
- Busiest day and why
- Top senders this week

**By Project/Client (if the user tracks multiple):**

Sub-group by sub-area when volume warrants.

For each section:
- **Threads that moved.** What progressed, what decisions were made, what changed status. Speak in context of vault knowledge
- **New threads.** What came in this week that wasn't being tracked before. Flag net-new info
- **Waiting on You.** Unanswered emails where the user owns the reply. How long they've been sitting. Don't sugarcoat
- **Resolved.** Threads that closed out. One-liner each

**Cross-Cutting Patterns:**
- Communication gaps (who's talking to whom, who's not in the loop)
- Threads that should have been meetings (or vice versa)
- Items that came in via email but never made it to a meeting
- Anything that smells like it's about to become a problem

### 5. Output Format

Higher altitude than daily. Think executive summary that a busy person reads on Friday afternoon or Monday morning.

- Bold thread names/topics
- One to three sentences per thread
- Patterns section should be observations, not just lists
- Total length: 3-5 minute read max

## Persistence

**Auto-log:** Write to the most recent daily note under `## Work` as `### Weekly Email Digest ([date range])`.

**Nudge on updates:** Same as daily. Flag note updates as suggestions, don't auto-update.

**TODOs:** Surface any unanswered emails or dangling threads as TODO items. Same filtering rules: only if the user owns the action.

## Length ceilings

- **Week at a Glance:** 3 bullets max
- **Each section:** ~200 words, 3-5 bullets per sub-heading
- **Cross-Cutting Patterns:** 3-5 observations. One line each
- **Total digest:** ~800 words. Longer than a daily, not a dissertation

## Cut Pass

Before sending:
- Any sub-heading that's empty or has one trivial item? Fold it in or cut
- Any pattern that's just "there were a lot of emails"? Cut it
- Any Waiting on You item that was already handled (check Sent)? Cut it
- Any closing paragraph repeating the patterns? Cut it

## Hard Rules

- **Brevity:** Follow `skills/_shared/brevity.md`. Ceilings here are additive. No em dashes
- **Keep separate areas separate.** Don't cross-pollinate unrelated projects or clients
- **Don't repeat daily digests verbatim.** If dailies ran this week, synthesize and add the pattern layer. Don't just concatenate them
- **Patterns over lists.** The daily digest lists what happened. The weekly digest says what it means
- **Keep it short.** If it reads like a report, it's too long
- **No standalone file.** This goes in the daily note, not a separate document. The email-analysis skill handles deep dives that warrant their own file

## TLDR Convention

Every weekly email digest gets a TLDR block. 3-5 bullets max. Biggest pattern of the week, what's stale, and anything net-new that matters.

- **In chat:** TLDR goes at the very bottom of the full digest. Read the detail first, get the punchline at the end.
- **In vault notes:** TLDR goes at the top of the digest section in the daily note (right after the `###` heading).

## Relationship to Other Skills

- **daily-email-digest:** The daily is the building block. Weekly synthesizes across days
- **email-analysis:** Deep analysis over large batch exports. Weekly digest is routine, lighter
- **status-report:** A client deliverable with specific formatting. The email digest is the user's internal view of what happened in email. Don't confuse them
