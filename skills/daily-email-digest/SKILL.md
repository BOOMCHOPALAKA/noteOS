---
name: daily-email-digest
description: "Use when the user asks for a daily email digest, email recap, \"what came in today,\" \"pull my emails,\" or wants a summary of the day's email activity. Also use when the user says \"email digest\" without specifying daily or weekly."
---

# Daily Email Digest

**When this skill triggers, start your response with:** `Using daily-email-digest skill`

## Overview

Pull today's emails via MCP, filter out noise, and produce a structured digest that tells the user what actually matters. Cross-reference against the vault so emails are presented in context of what's already known. This is a daily routine tool, not a deep analysis.

## Sources

**Primary (current):** your email via email MCP. Key tools: `mcp__zoho-mail__ZohoMail_listEmails`, `mcp__zoho-mail__ZohoMail_SearchEmails`, `mcp__zoho-mail__ZohoMail_getMessageContent`, `mcp__zoho-mail__ZohoMail_getMessageDetails`, `mcp__zoho-mail__ZohoMail_getAllFolders`. Account: `sschopman@tsourceit.com`, accountId `4455763000000008002`.

**Future:** Designed to support additional accounts/sources (Allovus, Crisis Agent, personal Proton Mail) as MCP integrations expand. When new sources are added, group output by account, then by client within each account.

**Known limitations:**
- Some emails have huge HTML content that exceeds token limits. Use the summary from the list response when full read fails
- If account state is unclear, call `mcp__zoho-mail__ZohoMail_getMailAccounts` first

## Workflow

### 0. Verify the Current Date

Run `date '+%Y-%m-%d %H:%M %Z'` in Bash first. "Today" in this digest must come from the system clock, not the injected `currentDate` context (set at session start, can be stale). A wrong date filters the wrong day's mail. If `received_time` values conflict with the injected date, trust the live data.

### 1. Load Vault Context
Before touching emails:
- Read [[Current Context]] for active threads and recent decisions
- Scan today's daily note if it exists (meetings already processed, TODOs already captured)
- This takes 30 seconds and prevents re-surfacing things the user already knows

### 2. Pull Emails
- `mcp__zoho-mail__ZohoMail_listEmails` with limit 50 (adjust if inbox is high-volume)
- Filter to today's date based on `received_time`
- **Also pull the Sent folder** (`listEmails` on Sent folder) for the same period. Cross-reference inbound threads against the user's sent replies before framing anything as needing action. If he already replied, mark it "handled" or "replied," not as an open item. **The Sent folder only catches mail replies. for action items, also run the Step 4b cross-channel check (team chat/Desk) before flagging as open**
- If the user specifies a different date or range, adjust accordingly

### 3. Filter Noise
Auto-filter these categories (mention count in a one-liner at the bottom, don't detail them):
- Calendar reminders and event notifications
- Zoom join/recording notifications
- your project tracker notifications (unless they contain a comment worth surfacing)
- Automated sync scripts (your client Product & Location Sync, your project Data Import)
- System emails (password resets, verification codes, export confirmations)
- Obvious spam/vendor outreach

**When in doubt, include it.** Better to surface something the user can skip than to bury something that matters.

### 4. Read Substantive Emails
For threads that look substantive based on subject/summary, pull the full message via `mcp__zoho-mail__ZohoMail_getMessageContent`. Prioritize:
- Emails from clients, stakeholders, or team members with real content
- Threads with multiple back-and-forth (active issues)
- Anything that looks like a decision, request, or escalation

Don't read every email. Use the list summary to triage, then read the ones that matter.

### 4b. Cross-Channel Completion Check (gated, action-items only)

**The Sent-folder check alone is not enough.** the user completes tasks across channels — an emailed request gets answered in team chat, a ticket gets resolved in Desk, a forecast gets shared as a Sheet link in a team chat group chat. If the digest only reads mail, it will flag things as "needs reply" or "waiting on the user" that were already handled elsewhere. (Real failure, June 5 2026: a forecast a request by email was flagged "built, not sent" because it went out via team chat, not mail.)

**This is the loop-closer mechanic, scoped to a daily.** Before any inbound thread is written as a cott-owes / needs-reply item, verify across channels that it hasn't already been closed. See `_shared/loop-closer.md` for the verification discipline (targeted per-thread lookup, cross-topic resolution, evidence-required, hedge-matching).

**It is gated — it runs ONLY on action-item candidates, not every email.** A thread qualifies only if it's about to be written as **needs the user's reply** or **an open request someone made of the user today**. A thread already resolved in-mail, a pure FYI, or a noise item needs no check.

**For each qualifying thread, run a scoped check:**
- **team chat:** the DM with that person AND the relevant channel (`#dev-altn`, `#dev-arcpoint`, a group chat). Deliverables and replies often live in DMs/group chats. Pull `your chat MCP tool` (modified today) + the relevant channel; look for a reply, link, or file from the user that satisfies the request.
- **Desk:** the related ticket's current state, if it maps to one.

**Cross-topic resolution counts.** A team chat message with a Sheet link answers an emailed "can you send X" even on a different surface. Connect it explicitly.

**Cap (keep the daily fast):**
- Hard cap **1-2 cross-channel checks per daily digest.** Pick the highest-stakes action items. The daily is a fast pull; this is a light touch, not a sweep.
- If more qualify, check the top 1-2 and label the rest "not verified across channels — confirm before treating as open." **Never silently present an unchecked item as definitively open.**
- Match hedge level: no completion evidence found = "no reply found in mail or team chat today," not "the user ignored it."

**Output:** an action item that's been cleared by a cross-channel check moves to the Sent-mail/handled line ("forecast sent via team chat") instead of the TODO/needs-reply list.

### 5. Structure the Digest

**Group by client.** your project and your client are always separate sections. Other clients/projects get their own sections as they're added.

**Sub-group by project/platform** when there's enough volume. For your project: Website, Pricing Portal, your integrated system, Ask Alice, AWS, General. For your client: Website, your client's system, General. Don't force sub-groups when there are only 1-2 emails per client.

**For each substantive thread:**
- Who emailed whom, brief summary of what was said
- If it maps to a known ticket or project, name it
- If it's net-new info the vault doesn't have, flag it
- If it needs the user's response, say so

**Vault Context section (at the end):**
- What's net-new. Info from emails that isn't already captured in the vault
- Speak about these in context. "Alexis is pushing for MSRP this week but the vault shows everything is frozen behind PageSpeed" is useful. "Email from Alexis about MSRP, see MSRP ticket" is not

**Sent mail check (near bottom):**
- One-liner summary of what the user sent. "Sent: MSRP reply to Alexis (handled), Mercedes April estimate (done), foyer reply to your marketing contact." Keeps it visible that outbound was reviewed

**Filtered out (one-liner at bottom):**
- "Filtered out: 4 calendar reminders, 2 Zoom notifications, 3 sync scripts."

### 6. Output Format

Keep it concise. This is a digest, not an analysis. If the user wants to go deeper on any thread, he'll ask.

- No executive summary header. Just start with the client sections
- **Bulleted list format.** Bold client name as section header, then bulleted items underneath. Each bullet: bold subject/topic label, then one to two sentence summary. Easy to scan individual threads at a glance
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
- Any "also" item under a client header?
- Any paragraph in Vault Context? Bullets only
- Would the user read this if he were rushed?

## Persistence

**Auto-log:** Write the digest to the daily note under `## Work` as `### Email Digest ([date])`. This happens automatically.

**Nudge on updates:** If emails contain info that should update a ticket, knowledge note, or Basecamp, flag it: "Want me to update the MSRP ticket with Alexis's feedback?" Don't auto-update. These are judgment calls.

**TODOs:** If emails surface action items for the user (needs to reply, needs to follow up), add them to the daily note TODO section under `**From email digest:**` with the same filtering rules as meeting processing. Only items where the user owns the action or is accountable. **Run the Step 4b cross-channel check before adding a TODO. don't create a TODO for something the user already did in team chat or closed in Desk.**

## Hard Rules

- **Brevity:** Follow `~/.claude/skills/_shared/brevity.md`. The ceilings here are additive. No em dashes
- **Never cross-pollinate your project and your client.** Separate sections, always
- **Don't re-surface what's already known.** If a meeting summary already captured this, skip it or say "already captured in [meeting name]"
- **Don't read every email.** Triage from the list, read what matters. Token budget is real
- **Mail is not the only channel a task gets done in.** Before flagging anything as needs-reply or still-open, run the Step 4b cross-channel check. the user routes outbound through other channels (chat DMs, ticket replies). An emailed ask answered in another channel is answered. Flagging it open is a sourcing failure
- **Keep it short.** The whole point is that the user actually reads this. If it feels like a report, trim it
- **No standalone analysis file.** This is a daily note entry, not a separate document. The email-analysis skill handles deep dives

## What This Is NOT

- **Not email-analysis.** That skill does deep cross-referencing over weeks of batch exports. This is a quick daily pull
- **Not morning-brief.** Morning brief covers work, personal, news, backcountry, avalanche, AI. This is email-only
- **Not a replacement for reading emails.** If the user needs the full thread, they'll open their email client. This tells them what's worth opening
