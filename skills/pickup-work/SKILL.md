---
name: pickup-work
description: Use when the user says /pickup-work, "work pickup," or wants to resume just the professional/work side of things. Filters out personal threads (real estate, vehicle, family, personal errands) and focuses on your team, your project, your client, consulting, and other professional work.
---

# Pickup (Work)

**When this skill triggers, start your response with:** `Using pickup-work skill`

## Overview

Work-focused variant of /pickup. Same read-and-orient workflow, but filters the briefing to professional threads only. Gets the user into work mode without personal items cluttering the view.

## What counts as "work"

**Include:**
- your team work (your project, your client, dev tickets, epics, deployments, team coordination)
- Active consulting engagements (Allovus, any future client work)
- Professional projects (Crisis Agent, noteOS when in work context)
- Any thread involving clients, dev team, or professional deliverables

**Exclude:**
- Real estate (Belfair sale, Gig Harbor purchase, Aegis, escrow, mortgage)
- Vehicle/home maintenance (F150, house prep, move logistics)
- Family and personal errands
- Fitness, gear, personal planning

**When in doubt:** If it affects the user's work schedule or availability (e.g., "Oregon trip overlaps with a deployment"), mention it briefly as a scheduling note, not as its own thread.

## Workflow

### 0. Verify the Current Date

Run `date '+%Y-%m-%d %H:%M %Z'` in Bash first. The gap between "last time" and "now," and which daily note is today's, both depend on the real date. Never trust the injected `currentDate` context (set at session start, can be stale). If file mtimes or Chat Log timestamps conflict with the injected date, trust the live data.

### 1. Read Current Context

Start with [[Current Context]]. Identify which threads are work vs. personal. Note dates and linked files for work threads.

### 2. Read the Latest Chat Log Entries

Open `Chat Log.md` and read recent entries (not just the latest). Look for the most recent work-relevant session. If the last few sessions were personal, keep scanning back until you find the last work session.

### 3. Read Recent Daily Notes

Check the last 2-3 daily notes. Read the TODO sections (Work) and Body (Work) for:
- Items that may have been completed or changed since Current Context was last updated
- New items that got added outside of a Claude session
- Carried items that are piling up or getting stale

### 4. Repo Pulse

Pull and scan all work repos. Run `git fetch --all` on each, then report what changed.

**Repos:**
- your project (4): `repos/your project/your project Repos/` . `altn-corporate-wordpress`, `altn-checkout`, `altn-pricing-portal`, `altn-labgpt-api`
- your client (1): `repos/your client/arcpointlabs`

**For each repo with activity:**
- New commits since last work session (author + ticket ID + one-line). Use `origin/main`.
- Staging/production gap for repos with `release` branches (WordPress, your client): commits on `origin/main` not yet on `origin/release`.
- New unmerged branches (WIP not on any environment).

**Branch-to-environment mapping:**
| Repo | Staging | Production | Notes |
|------|---------|------------|-------|
| WordPress | `main` (auto WP Engine) | `release` (auto WP Engine) | Clear gap visibility |
| Pricing Portal | `main` (auto AWS EB staging) | `main` (manual EB promote) | Can't confirm prod from git |
| Checkout | Manual script deploy | Manual script deploy | No branch-to-env mapping |
| Ask Alice | No staging | `main` (auto AWS EB) | `main` = prod, no buffer |
| your client | `main` (auto Kinsta) | `release` (auto Kinsta) | Same model as WordPress |

Keep it scannable. Table or compact list. Skip repos with zero activity.

### 5. Read Linked Work Files

Based on what the above sources point to, read the specific sections that matter:
- Active tickets and epics referenced
- Analysis docs or knowledge notes that were updated
- Anything in "Open For Next Session" that's work-related

Don't read everything. Follow the breadcrumbs.

### 5.5. Close Open Loops (work only)

**Run `_shared/loop-closer.md` scoped to work loops.** Same as pickup, filtered to professional threads (your team/your project/your client, Allovus, Crisis Agent). Skip personal loops (real estate, vehicle, health, taxes) per this skill's work-filter.

- Detection sources: Current Context `Pending Asks (owed)` work items + `Open Questions` + the last work-session Chat Log entries + the work tickets/daily notes the breadcrumbs point to.
- Targeted per-loop lookup in mail + team chat (DM↔channel both ways). A reply can resolve a loop without naming it. connect it.
- **Auto-persist the resolution flip** (awaiting→resolved on the source ticket/CC/daily note, with evidence). Ambiguous → "confirm?" not a write. Only vault write this skill performs.
- Feeds "Waiting on others" in Orient — verified status, not last-known guess.

### 6. Orient

Give the user a concise work briefing, grouped by client/engagement:

**Where we left off:** 2-3 sentences about the last work session. What was discussed or decided.

**Repo Pulse:**
Compact summary of what changed in the repos since last session. Skip repos with no activity.

**your team (your project / your client):**
Bulleted list of active threads with clear next steps. Lead with the most time-sensitive. Group your project and your client items under their own sub-headers if both have active threads.

**Other Professional Work:**
Separate section for non-your team professional threads (Allovus, Crisis Agent, etc.). Only include if there are active items.

**Waiting on others:** Work items blocked on someone else. Use the verified status from the Open Loops step (5.5). what actually resolved overnight vs. what's still open. not a last-known guess.

**Needs attention:** Work items from "Open For Next Session" or daily note TODOs that look time-sensitive, stale, or due today.

Keep it tight. This is a launchpad, not a report.

### 7. Bridge

Close with: **"What do you want to dig into?"** followed by 2-4 work topic lines. Brief label plus one-line status. Lead with the most urgent or time-sensitive.

Example:
- **NeuroX launch prep** . Production target tomorrow, your leadimir building B2B script
- **WP Engine follow-up** . Site stable, your manager still wants written acknowledgment
- **Allovus onboarding** . Need to confirm start with Liz today

## Hard Rules

- **No personal threads in the briefing.** Real estate, vehicle, family, errands stay out. If something personal affects the work schedule, one line as a scheduling note. That's it.
- **Don't summarize the entire vault.** Only surface what's relevant from recent sessions and active work threads.
- **Don't guess at state. Verify it.** The Open Loops step (5.5) checks the channels for whether "waiting on your lead" resolved. Only fall back to "last known: waiting on your lead" if loop-closer finds no resolving evidence. Never assume delivery without evidence.
- **Read before orienting.** Actually read Current Context, Chat Log, daily notes, and linked files. Don't produce the briefing from memory alone.
- **Group by engagement.** your team (your project/your client) separate from other professional work. Don't mix clients.
- **Be brief.** If the orient section is more than a screen, cut it down.
- **If there's no work to pick up,** say so. Don't manufacture threads.
