---
name: pickup-work
description: Use when the user says /pickup-work, "work pickup," or wants to resume just the professional/work side of things. Filters out personal threads and focuses on work projects, clients, and professional commitments.
---

# Pickup (Work)

**When this skill triggers, start your response with:** `Using pickup-work skill`

## Overview

Work-focused variant of /pickup. Same read-and-orient workflow, but filters the briefing to professional threads only. Gets the user into work mode without personal items cluttering the view.

## What counts as "work"

**Include:**
- Client work, dev tickets, deployments, team coordination
- Active consulting or freelance engagements
- Professional projects and side projects in a work context
- Any thread involving clients, team members, or professional deliverables

**Exclude:**
- Personal projects (home, vehicle, family, errands)
- Health, fitness, gear
- Personal planning and life admin

**When in doubt:** If something personal affects the work schedule (e.g., "vacation overlaps with a deployment"), mention it briefly as a scheduling note, not as its own thread.

## Workflow

### 0. Verify the Current Date

Run `date '+%Y-%m-%d %H:%M %Z'` first. The gap between "last time" and "now," and which daily note is today's, both depend on the real date. Don't rely on the system context date, which is set at session start and may be stale. If file timestamps or Chat Log dates conflict with the assumed date, trust those.

### 1. Read Current Context

Start with Current Context (or whatever cross-session whiteboard the vault uses). Identify which threads are work vs. personal. Note dates and linked files for work threads.

### 2. Read the Latest Chat Log Entries

Open the Chat Log and read recent entries (not just the latest). Look for the most recent work-relevant session. If the last few sessions were personal, keep scanning back until you find the last work session.

### 3. Read Recent Daily Notes

Check the last 2-3 daily notes. Read the TODO sections (Work) and Body (Work) for:
- Items that may have been completed or changed since Current Context was last updated
- New items that got added outside of an AI session
- Carried items that are piling up or getting stale

### 4. Repo Pulse

If the user has local repos referenced in the vault (instruction file, Basecamps, or project notes), pull fresh data and report what changed.

**For each repo:**
- Run `git fetch --all` (safe, non-destructive)
- New commits since last work session: author + one-line summary. Use `origin/main` (not local)
- Staging/production gap if the repo uses separate branches for environments
- New unmerged branches (WIP not on any environment)

Skip repos with zero activity. Keep it scannable (table or compact list).

If no repos are configured or accessible, skip this step silently.

### 5. Read Linked Work Files

Based on what the above sources point to, read the specific sections that matter:
- Active tickets or project notes referenced
- Analysis docs or knowledge notes that were updated
- Anything in "Open For Next Session" that's work-related

Don't read everything. Follow the breadcrumbs.

### 6. Orient

Give a concise work briefing, grouped by client or engagement:

**Where we left off:** 2-3 sentences about the last work session. What was discussed or decided.

**Repo Pulse:** Compact summary of what changed in the repos since last session. Skip if no repos or no activity.

**[Client/Project Name]:**
Bulleted list of active threads with clear next steps. Lead with the most time-sensitive. If multiple clients or projects have active threads, give each its own sub-header.

**Other Professional Work:**
Separate section for secondary professional threads (consulting, side projects, etc.). Only include if there are active items.

**Waiting on others:** Work items blocked on someone else. Name and last known status.

**Needs attention:** Work items from "Open For Next Session" or daily note TODOs that look time-sensitive, stale, or due today.

Keep it tight. This is a launchpad, not a report.

### 7. Bridge

Close with: **"What do you want to dig into?"** followed by 2-4 work topic lines. Brief label plus one-line status. Lead with the most urgent or time-sensitive.

Example:
- **Product launch prep** . Production target tomorrow, waiting on team confirmation
- **Hosting follow-up** . Stable, but vendor still hasn't acknowledged the issue
- **Consulting onboarding** . Need to confirm start with client today

## Hard Rules

- **No personal threads in the briefing.** Personal items stay out. If something personal affects the work schedule, one line as a scheduling note. That's it.
- **Don't summarize the entire vault.** Only surface what's relevant from recent sessions and active work threads.
- **Don't guess at state.** If the last known status is "waiting on someone," say that. Don't assume delivery.
- **Read before orienting.** Actually read Current Context, Chat Log, daily notes, and linked files. Don't produce the briefing from memory alone.
- **Group by client/engagement.** Keep different clients and projects visually separate. Don't mix them.
- **Be brief.** If the orient section is more than a screen, cut it down.
- **If there's no work to pick up,** say so. Don't manufacture threads.
