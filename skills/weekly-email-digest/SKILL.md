---
name: weekly-email-digest
description: "Use when the user asks for a weekly email digest, weekly email recap, \"what happened this week in email,\" or wants a pattern-level view of the week's email activity. Triggers on \"weekly digest\" or \"week in email.\""
---

# Weekly Email Digest

**When this skill triggers, start your response with:** `Using weekly-email-digest skill`

## Overview

Pattern-level view of the week's email activity. Not a list of every email. This surfaces what threads moved, what's stale, what came in that nobody acted on, and what communication patterns are worth noting. Built on top of the daily digest format but at a higher altitude.

## Sources

Same as daily-email-digest: your email via the official your email MCP (`mcp__zoho-mail__*`). Extensible to other accounts as integrations expand.

## Workflow

### 0. Verify the Current Date

Run `date '+%Y-%m-%d %H:%M %Z'` in Bash first. The week window must anchor to the real date, not the injected `currentDate` context (set at session start, can be stale). A wrong "now" shifts the whole 7-day range. If `received_time` values conflict with the injected date, trust the live data.

### 1. Load Vault Context
- Read [[Current Context]] for active threads
- Scan the week's daily notes for meetings processed and TODOs captured
- Check if any daily email digests were already run this week (avoid re-surfacing)

### 2. Pull Emails
- `mcp__zoho-mail__ZohoMail_listEmails` with limit 50, multiple pulls if needed to cover the full week
- **Also pull the Sent folder** for the same period. Cross-reference inbound threads against the user's sent replies. This is critical for the "Waiting on the user" section. Don't list threads as unanswered if the user already replied
- Filter to the target week (Monday through current day, or Monday through Friday if run on the weekend)
- If daily digests exist for some days, focus deeper reads on days that weren't covered

### 3. Filter and Categorize
Same noise filtering as daily digest. Then categorize what's left:
- **Active threads:** Multiple emails in the same thread this week
- **New threads:** Started this week, not a continuation
- **Stale/unanswered:** Sent to the user, no reply yet, getting old
- **Resolved:** Thread that closed out this week

### 3b. Cross-Channel Completion Check (gated, action-items only)

**The Sent-folder check alone is not enough.** the user completes tasks across channels: an emailed request gets answered in team chat, a ticket gets resolved in your ticket system, a deliverable gets shared in a different channel. If the digest only reads mail, it will flag things as "waiting on the user" or "unanswered" that were already handled somewhere else. That misframes the user's open list and erodes trust in the digest. (Real failure, June 5 2026: a request by email was flagged "built, not sent" because it went out via team chat, not mail.)

**This is the loop-closer mechanic, scoped to the digest.** Before any inbound thread is written as a user-owes / needs-reply / still-open item, verify across channels that it hasn't already been closed. See `_shared/loop-closer.md` for the per-loop verification discipline (targeted lookup, cross-topic resolution, evidence-required, hedge-matching).

**It is gated — it runs ONLY on action-item candidates, not every thread.** A thread qualifies for a cross-channel check only if it is about to be written as:
- **Waiting on the user** (he owes a reply or deliverable), or
- **Unanswered / stale** (inbound request with no mail response), or
- **An open request** someone made of the user this week.

A thread that's clearly resolved in-mail, a pure FYI, or already-closed needs no check. Don't fan out across every thread — that's a full-picture, not a digest.

**For each qualifying thread, run a scoped check (single thread, not "everything"):**
- **Team chat:** the DM with that person AND the relevant channel. Coordination and deliverables often live in DMs, not broadcast channels. Check whether the user posted a reply, a link, or a file that satisfies the request.
- **Desk:** the related ticket's current state, if the thread maps to one.
- **Sprints / Airtable:** only if the thread is tracked there.

**Cross-topic resolution counts.** The completion may not name the email. A team chat message sharing a Sheet link answers an emailed "can you send the forecast" even though it's a different surface. Connect it explicitly with both dates.

**Caps (a busy week can't blow up the digest):**
- Hard cap **3-4 cross-channel checks per weekly digest.** Pick the highest-stakes action items (a leadership request, a stakeholder waiting, a deliverable owed).
- If more than 4 qualify, check the top 4 and label the rest "unverified across channels — confirm before treating as open." **Never silently present an unchecked item as definitively open.**
- Match hedge level: if no completion evidence is found, it's "no reply found in mail or team chat this week," not "the user ignored it."

**Output:** feeds the **Waiting on the user** sub-section. Each item is now either confirmed-open (checked, still nothing) or moved to **Resolved** with the cross-channel evidence ("sent via team chat June 5"). Anything you couldn't check gets the explicit unverified label.

### 4. Structure the Digest

**Week at a Glance:**
- Total substantive emails (noise filtered out)
- Busiest day and why
- Top senders this week

**By Client (your project, your client, other):**

Sub-group by project/platform when volume warrants.

For each client section:
- **Threads that moved.** What progressed, what decisions were made, what changed status. Speak in context of vault knowledge
- **New threads.** What came in this week that wasn't being tracked before. Flag net-new info
- **Waiting on the user.** Unanswered emails where the user owns the reply, **after the Step 3b cross-channel check** has cleared the ones they already handled elsewhere. How long they've been sitting. Don't sugarcoat. Never put an item here without the completion check first. a cross-channel resolution moves it to Resolved, not here
- **Resolved.** Threads that closed out. One-liner each

**Cross-Cutting Patterns:**
- Communication gaps (who's talking to whom, who's not in the loop)
- Threads that should have been meetings (or vice versa)
- Items that came in via email but never made it to standup
- Anything that smells like it's about to become a problem

### 5. Output Format

Higher altitude than daily. Think executive summary that a busy person reads on Friday afternoon or Monday morning.

- Bold thread names/topics
- One to three sentences per thread
- Patterns section should be observations, not just lists
- Total length: 3-5 minute read max

## Persistence

**Auto-log:** Write to the most recent daily note under `## Work` as `### Weekly Email Digest ([date range])`.

**Nudge on updates:** Same as daily. Flag ticket/note updates as suggestions, don't auto-update.

**TODOs:** Surface any unanswered emails or dangling threads as TODO items. Same filtering rules: only if the user owns the action.

## Length ceilings

- **Week at a Glance:** 3 bullets max
- **Each client section:** ~200 words, 3-5 bullets per sub-heading
- **Cross-Cutting Patterns:** 3-5 observations. One line each
- **Total digest:** ~800 words. Longer than a daily, not a dissertation

## Cut Pass

Before sending:
- Any sub-heading that's empty or has one trivial item? Fold it in or cut
- Any pattern that's just "there were a lot of emails"? Cut it
- Any Waiting on the user item that the user already handled? Check Sent **and** run the Step 3b cross-channel check (team chat/Desk). A task done in team chat still counts as done. Move it to Resolved, don't list it as open
- Any closing paragraph repeating the patterns? Cut it

## Hard Rules

- **Brevity:** Follow `~/.claude/skills/_shared/brevity.md`. Ceilings here are additive. No em dashes
- **Never cross-pollinate your project and your client**
- **Don't repeat daily digests verbatim.** If dailies ran this week, synthesize and add the pattern layer. Don't just concatenate them
- **Patterns over lists.** The daily digest lists what happened. The weekly digest says what it means
- **Mail is not the only channel a task gets done in.** Before flagging anything as waiting-on-the user or unanswered, run the Step 3b cross-channel completion check. the user routes a lot of outbound through channels other than email (replies in DMs, group chats, team chat). An emailed request answered in team chat is answered. Reporting it as open is a sourcing failure, not a harmless miss
- **Keep it short.** If it reads like a report, it's too long
- **No standalone file.** This goes in the daily note, not a separate document. The email-analysis skill handles deep dives that warrant their own file

## TLDR Convention

Every weekly email digest gets a TLDR block. 3-5 bullets max. Biggest pattern of the week, what's stale, and anything net-new that matters.

- **In chat:** TLDR goes at the very bottom of the full digest. the user reads the detail first, gets the punchline at the end.
- **In vault notes:** TLDR goes at the top of the digest section in the daily note (right after the `###` heading). the user scanning the daily note sees the takeaway first.

## Relationship to Other Skills

- **daily-email-digest:** The daily is the building block. Weekly synthesizes across days
- **email-analysis:** Deep analysis over large batch exports. Weekly digest is routine, lighter
- **status-report:** The status report is a client deliverable with specific formatting. The email digest is the user's internal view of what happened in email. Don't confuse them
