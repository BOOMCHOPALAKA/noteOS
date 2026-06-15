---
name: activity-logging
description: Use when logging workouts or fitness activities. Triggers on "log my workout," activity data, fitness tracker stats, or /activity-logging. Always backfills since the last logged activity, not just today.
---

# Activity Log

**When this skill triggers, start your response with:** `Using activity-logging skill`

## Overview

Sweep Garmin for all unlogged activities and log each one to its daily note. Not just today — always backfill since the last logged entry.

## Getting the data

On a bare invoke with no data supplied, sweep automatically. Don't ask the user to hand it over.

1. Run `date '+%Y-%m-%d %H:%M %Z'` to anchor today's date.
2. **Find the last logged activity.** Search recent daily notes for the most recent `#fitness` tag. The date of that note is the cutoff — pull everything after it.
3. Pull activities from the **Garmin MCP** (`mcp__garmin__query_activities`) from the day after the last logged entry through today. Use `start_date` / `end_date` with `unit: imperial`.
4. **Fallbacks:** if Garmin returns nothing or errors, use the Strava MCP (`mcp__strava__get-recent-activities` → `get-activity-details`). Strava-sourced entries will be thinner (no Training Load); note that rather than inventing the number. If the user hands over the data directly, just use it.

## Logging

For each unlogged activity:

1. Find the daily note for its date. If it doesn't exist, create one with the standard shell (`# Recap / ## Work / ## Personal / --- / # TODO / --- / # Body / ## Personal`).
2. Read the full daily note before writing — check that the activity isn't already logged.
3. Log under `## Personal` in the Body section.

## Format

```
#### [Activity Name]
[distance] | [time] | [elevation] | [ft/mi] | Avg HR [bpm] | Load [number]
[Primary zone]. [Subjective feel or brief note].
```

`ft/mi` = elevation gain divided by distance in miles, rounded to nearest whole number. This is the climbing-context stat — include it on every ride and hike. Omit on walks, kayaking, and other non-climbing activities where it's not meaningful.

## Rules
- Activity name matches Garmin activity name or the user's nickname for it.
- One line stats, one line context. Keep it tight.
- Link to [[Back to Q3 2023 - Fitness Plan|the plan]] or [[Fitness & Activity Profile|the profile]] only for notable activities.
- Tag `#fitness`.
- Omit stat fields that aren't available (don't put "N/A").
- After logging all activities, confirm what was logged and what date range was covered.

## Summary & Fitness Read

After logging, produce a short summary in chat (not written to the vault):

**Activity summary:** Total activities, total distance, total time, and dominant activity types for the sweep window.

**Fitness read:** A plain-spoken take on current fitness level based on the data — volume, intensity distribution, training load trend, HR patterns. Reference [[Fitness & Activity Profile]] baselines (VO2 max, resting HR, bio age) where relevant for context. Call out what's working, what's missing (e.g. no Zone 4-5 work, low volume week), and one concrete thing worth watching or adjusting. Keep it under 150 words. Be direct — not a cheerleader read, an honest one.

When reading HR and intensity data, always factor in elevation gain relative to distance. A high max HR on a ride with 1,000+ ft of gain in under 15 miles — especially with a sustained climb — is expected, not a flag. Don't call out peak HR as a concern unless the elevation profile doesn't explain it.

<!-- renamed from activity-logging 2026-06-14: added backfill step — prior skill only logged today's date, missing all unlogged activities since the last sweep. -->
<!-- improved 2026-06-14: added Summary & Fitness Read section — post-log summary of activity window + honest fitness assessment. -->
<!-- improved 2026-05-22: added "Getting the data" auto-sweep step (Garmin MCP primary, Strava fallback). -->

