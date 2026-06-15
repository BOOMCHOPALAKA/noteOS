---
name: morning-brief
description: Use when the user asks for a morning brief, morning update, daily brief, or starts a session that appears to be a morning kickoff. Delivers 6 sections covering work, repos, email digest, personal, news/backcountry, and AI.
---

# Morning Brief

**When this skill triggers, start your response with:** `Using morning-brief skill`

## Overview

Daily morning brief. **Always write to daily note AND output in chat.** Never write silently to file.

**Placement in daily note:** `## Morning Brief` section at the bottom of `# Body`, after `## Work` and `## Personal`. Standalone peer section, NOT nested under Work or Personal.

## Section Priority

**Tier 1 (full treatment):** Work, Repo Pulse, Email Digest. This is the core. Spend the time here.

**Tier 2 (elevated):** AI News. Deeper than a scan, tied to the user's consulting work and daily workflows.

**Tier 3 (light touch):** News, Backcountry, Personal. Quick bullets. No deep sourcing or multi-paragraph writeups.

## Per-section caps

- **Work:** ~200 words, 3-5 focus items max
- **Repo Pulse:** bulleted. One bullet per active repo. Skip repos with zero activity entirely
- **Email Digest:** follow the daily-email-digest skill's caps
- **AI News:** ~250 words total across What's New, What's Useful, and Tip of the Day. This is the elevated section, not a license for sprawl
- **News & Backcountry:** ~150 words. Bullets, one-liners. Skip Backcountry entirely if nothing real happened
- **Personal:** 2-3 lines
- **Bridge:** 2-4 items, one line each

Skip any section with nothing to say. Don't pad to hit the tier.

## Sections

### 0. Verify the Current Date

Before pulling anything, run `date '+%Y-%m-%d %H:%M %Z'` in Bash. A morning brief is inherently dated — the daily note it routes to, the "today" framing, and every digest section depend on the real date. Never trust the injected `currentDate` context, which is set at session start and can be stale. If MCP timestamps conflict with the injected date, trust the live data.

### 1. Work. State of Things
- Read current + previous day's daily notes for context.
- High-level developments, progress, momentum shifts. NOT a TODO rehash.
- "Focus items for today." Usually ~3, flexible.
- **Run blocker-tracker scan.** Surface stale items inline. See `blocker-tracker` skill for detection logic and staleness thresholds. Weave into the narrative, don't create a separate section.

### 1b. Repo Pulse
Quick git check across all your project + your client repos. Run automatically.

**Repos:**
- your project (4): `repos/your project/your project Repos/` . `altn-corporate-wordpress`, `altn-checkout`, `altn-pricing-portal`, `altn-labgpt-api`
- your client (1): `repos/your client/arcpointlabs`

**Process:**
- **First: `git fetch --all`** on each repo. Safe, non-destructive.
- **New commits since yesterday** per repo: author + ticket ID + one-line. Use `origin/main` (not local `main`).
- **Staging/production gap** for repos with `release` branches (WordPress, your client): commits on `origin/main` not yet on `origin/release`.
- **Production deploys** merged to `origin/release` or known shipped.
- **Hotfixes** straight to production bypassing staging.
- **New unmerged branches** (WIP not on any environment).

**Branch-to-environment mapping:**
| Repo | Staging | Production | Notes |
|------|---------|------------|-------|
| WordPress | `main` (auto WP Engine) | `release` (auto WP Engine) | Clear gap visibility |
| Pricing Portal | `main` (auto AWS EB staging) | `main` (manual EB promote) | Can't confirm prod from git |
| Checkout | Manual script deploy | Manual script deploy | Opaque. No branch-to-env mapping |
| Ask Alice | No staging | `main` (auto AWS EB) | `main` = prod, no buffer |
| your client | `main` (auto Kinsta) | `release` (auto Kinsta) | Same model as WordPress |

**Format: bulleted list, not table.** Bold repo name as header, bullets underneath for activity and staging gap. Tables are hard to scan for this kind of mixed-length content. Skip repos with zero activity.
See [[your project Deployment Flow]] for details.

### 1c. Full Picture (per active org)
Run the `full-picture` skill for each active org (currently your project and your client). Configs live at `Sweeps/configs/[org].md`.

**Format:** Bold org name as header. Under each, surface the top 3-5 threads from the run's current-state synthesis. Cap 5 bullets per org. Link to the journal entry at the end.

**Reference prior journal entry.** Read the most recent entry in `Sweeps/[Org].md` before pulling so the new entry can describe what's changed since the last run rather than re-stating everything.

Skip an org entirely if the run surfaces nothing meaningful. Don't pad.

### 1d. Email Digest
Run the `daily-email-digest` workflow as part of the morning brief. Pull overnight/early morning emails via the your email MCP (`mcp__zoho-mail__*`), filter noise, group by client and project, summarize substantive threads in vault context. Same format and rules as the standalone daily-email-digest skill.

**Format: bulleted list.** Bold subject/topic label per thread, then a one or two sentence summary. Group under bold client headers (your project, your client, your team Internal, etc.). Easy to scan, not paragraphs.

**Always check the Sent folder.** Cross-reference inbound emails against the user's sent replies before framing anything as needing action. If the user already replied to a thread, frame it as "handled" or "replied," not as an open item. Include a "Sent mail check" summary line so it's visible that outbound was reviewed.

This catches what landed in email since the last session. Complements Repo Pulse (what happened in code) with what happened in communication.

### 1e. Open Loops
**Run `_shared/loop-closer.md`** to close outstanding threads against overnight channel traffic. Different job from the 1d email digest (what's new) and the 1a blocker scan (what's stale): this verifies whether *specific outstanding loops* (anything awaiting/pending/owed/unresolved a PM should track) have been answered.

- Detection sources: Current Context `Pending Asks (owed)` + `Open Questions` + recent daily notes (grep loop-phrases).
- Targeted per-loop lookup, but **reuse the 1d digest pull first** — if the digest already surfaced a resolving email, use it; only do an extra focused lookup for loops the digest didn't touch. Don't re-pull mail blindly.
- **Dedupe against 1d.** If a resolved loop already appears in the email digest, don't repeat the full thread here. One line: "↳ closes the [loop] we were waiting on." The digest reports the email; Open Loops reports the loop it closed.
- **Auto-persist resolutions** (flip awaiting→resolved on the source ticket/CC/daily note, with evidence). Ambiguous → "confirm?" line, not a write.
- Output: a short "Resolved overnight / Still open" block. Skip if nothing's open. Keep it tight — this is a brief, not a sweep.

### 2. Personal. On Your Radar
Quick line or two on anything active (real estate deals, household, family items). Keep it short.

### 3. News & Backcountry
**This is a quick scan, not a newsletter.** Bullets with one-liners. No multi-paragraph writeups. No source link blocks. If something is worth reading deeper, drop a single inline link.

**News bullets:**
- US Political. What's happening with the Trump admin, Congress, courts
- Geopolitical. Gaza/Israel, Ukraine/Russia, other active conflicts. Include humanitarian impact, not just diplomatic moves. Don't create an echo chamber
- Environmental/Outdoor. Climate, conservation, public lands. Only if something notable happened
- Cacao & Chocolate. Commodity prices, supply chain, craft trends. Understory context. Only if something notable happened

**Backcountry.** Mountain-specific news: notable ascents, rescues, fatalities, video drops, gear. PNW focus when available. **Hard rule: skip entirely if nothing real happened.** Do not pad with old content or generic seasonal observations.

### 4. AI News
**Defer to the `ai-news` skill.** Run it in morning-brief mode (condensed implications, 3-5 words each) per its "Morning Brief Integration" section.

Four buckets: Platform & Models, Product & Productivity Features, AI Consulting & Operations, AI x Politics. Plus a Theme of the Day line if one genuinely threads the news.

**Add one morning-brief-only element on top of the ai-news output:** an **AI Tip of the Day** . one concrete thing to try or apply today. Claude Code trick, workflow optimization, something to demo to a client. Not theoretical.

**The test:** Would this help the user sound informed in an AI consulting meeting? Would it make his own workflows better? If neither, cut it.

### 5. Bridge (Pickup Integration)
Close the brief with a pickup-style launchpad. 2-4 subject lines, prioritized by urgency or time-sensitivity. Brief topic label plus one-line summary of where it stands or what's next.

This replaces the need to run /pickup separately after a morning brief. The data is already loaded from Current Context and the daily note. Just close with the action prompt.

Example:
- **PageSpeed standup prep** . 8 PT today, need audit findings and team assignments ready
- **Mercedes April estimate** . finalized, needs to go to Mercedes by Wednesday
- **Allovus team sessions** . schedule Megan first, then Jen + Steve after Thursday

Lead with the most urgent or time-sensitive item. **"Where do you want to start?"** as the closing line.

**This section is chat-only.** Don't write it to the daily note. It's a session launchpad, not a record.

## Format & Style
- Conversational tone. Smart friend catching you up, not a news anchor.
- **Length check:** Tier 1 sections can breathe within their caps. Tier 3 sections should be tight. Whole brief under 5 minutes to read.
- No source link blocks at the bottom. Inline links only, and only when the story is worth clicking.
- **Brevity:** Follow `~/.claude/skills/_shared/brevity.md`. No em dashes. Don't pad sections with nothing to say

## Cut Pass

Before sending:
- Any section over its cap? Cut it, don't split
- Any "also" bullet that doesn't add a distinct point?
- Any news item that's not actually news?
- Any AI News bullet that wouldn't help the user in a consulting meeting? Cut it (the test in Section 4)
- Backcountry has nothing? Skip the whole section
- Open Loops (1e): did any resolved loop repeat the full email thread already in 1d? Collapse it to the one-line "↳ closes X" pointer. Any loop marked resolved actually evidenced, not guessed?
