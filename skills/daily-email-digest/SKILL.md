---
name: daily-email-digest
description: Use when the user asks for a daily email digest, email recap, "what came in today," "pull my emails," or wants a summary of the day's email activity. Also use when the user says "email digest" without specifying daily or weekly.
---

# Daily Email Digest

## Overview

Pull today's emails, filter out noise, and produce a structured digest that tells the user what actually matters. Cross-reference against the vault so emails are presented in context of what's already known. This is a daily routine tool, not a deep analysis.

## Email Source

This skill is source-agnostic. Get today's emails however your setup allows:

- **A connected email MCP/integration** (if your AI tool has one). Pull the inbox for today, and also pull the Sent folder for the same period. See the README's "Optional: connecting AI to your data" section for setup.
- **A pasted batch** the user drops into the conversation.
- **An export file** in `Downloads/EmailExports/`.

The workflow below is the same regardless of how the emails arrive. If you have a live integration, prefer it; it can also pull Sent mail, which matters for the "needs a reply" check.

**Known limitation:** Some emails have large HTML bodies that blow past token limits. Use the list/summary view to triage, and only pull full content for threads that matter.

## Workflow

### 0. Verify the Current Date

Run `date '+%Y-%m-%d %H:%M %Z'` before pulling anything. "Today" frames the whole digest: which emails count, which daily note it logs to. Don't rely on the system context date, which is set at session start and may be stale. If email timestamps conflict with the assumed date, trust the email timestamps.

### 1. Load Vault Context

Before touching emails:
- Read [[Current Context]] for active threads and recent decisions
- Scan today's daily note if it exists (meetings already processed, TODOs already captured)
- This takes 30 seconds and prevents re-surfacing things the user already knows

### 2. Pull Emails

- Pull today's inbox (adjust the window if the user names a different date or range)
- **Also pull the Sent folder** for the same period if your source allows it. Cross-reference inbound threads against the user's sent replies before framing anything as needing action. If they already replied, mark it "handled" or "replied," not as an open item

### 3. Filter Noise

Auto-filter these categories (mention the count in a one-liner at the bottom, don't detail them):
- Calendar reminders and event notifications
- Meeting join/recording notifications
- Routine app notifications (unless they contain a comment worth surfacing)
- Automated sync/import scripts and system reports
- System emails (password resets, verification codes, export confirmations)
- Obvious spam/vendor outreach

**When in doubt, include it.** Better to surface something the user can skip than to bury something that matters.

### 4. Read Substantive Emails

For threads that look substantive based on subject/summary, pull the full message. Prioritize:
- Emails from clients, stakeholders, or team members with real content
- Threads with multiple back-and-forth (active issues)
- Anything that looks like a decision, request, or escalation

Don't read every email. Use the list summary to triage, then read the ones that matter.

### 5. Structure the Digest

**Group by project or client if the user tracks multiple.** Keep separate areas separate; don't blend an unrelated work project with a personal thread. If everything is one stream, skip the grouping.

**Sub-group by sub-area** only when there's enough volume to warrant it. Don't force sub-groups when there are only 1-2 emails.

**For each substantive thread:**
- Who emailed whom, brief summary of what was said
- If it maps to a known note or project, name it
- If it's net-new info the vault doesn't have, flag it
- If it needs the user's response, say so

**Vault Context section (at the end):**
- What's net-new. Info from emails that isn't already captured in the vault
- Speak about these in context. "The vendor is pushing for a decision this week but the vault shows the budget is frozen" is useful. "Email from the vendor, see the budget note" is not

**Sent mail check (near bottom):**
- One-liner summary of what the user sent, so it's visible that outbound was reviewed

**Filtered out (one-liner at bottom):**
- "Filtered out: 4 calendar reminders, 2 meeting notifications, 3 system reports."

### 6. Output Format

Keep it concise. This is a digest, not an analysis. If the user wants to go deeper on any thread, they'll ask.

- No executive summary header. Just start with the sections
- **Bulleted list format.** Bold section header, then bulleted items underneath. Each bullet: bold subject/topic label, then one to two sentence summary
- Vault context section should be short. Bullets, not paragraphs

**Length ceilings:**
- One sentence per substantive thread. Two max if the thread is complex
- Vault Context section: 3-5 bullets, never paragraphs
- Sent mail check: one line
- Filtered out: one line
- **Total digest: ~400 words.** If longer, cut. Don't split

## Cut Pass

Before sending:
- Any thread bullet that's two sentences when one would do?
- Any "also" item under a section header?
- Any paragraph in Vault Context? Bullets only
- Would the user read this if they were rushed?

## Persistence

**Auto-log:** Write the digest to the daily note under `## Work` as `### Email Digest ([date])`. This happens automatically.

**Nudge on updates:** If emails contain info that should update a note, project, or Basecamp, flag it: "Want me to update the [note] with this?" Don't auto-update. These are judgment calls.

**TODOs:** If emails surface action items (needs to reply, needs to follow up), add them to the daily note TODO section under `**From email digest:**` with the same filtering rules as meeting processing. Only items where the user owns the action or is accountable.

## Hard Rules

- **Brevity:** Follow `skills/_shared/brevity.md`. The ceilings here are additive. No em dashes
- **Keep separate areas separate.** If the user tracks multiple projects or clients, don't cross-pollinate them
- **Don't re-surface what's already known.** If a meeting summary already captured this, skip it or say "already captured in [meeting name]"
- **Don't read every email.** Triage from the list, read what matters. Token budget is real
- **Keep it short.** The whole point is that the user actually reads this. If it feels like a report, trim it
- **No standalone analysis file.** This is a daily note entry, not a separate document. The email-analysis skill handles deep dives

## What This Is NOT

- **Not email-analysis.** That skill does deep cross-referencing over weeks of batch exports. This is a quick daily pull
- **Not morning-brief.** Morning brief covers work, personal, news. This is email-only
- **Not a replacement for reading emails.** This tells the user what's worth opening
