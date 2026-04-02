---
name: activity-logging
description: Use when logging a workout, run, hike, bike ride, ski tour, gym session, or any fitness activity to the daily note. Triggers on activity data, fitness tracker stats, or "log my workout."
---

# Activity Logging

## Overview

Log workouts and activities to the daily note Body under `## Personal`.

## Format

```
#### [Activity Name]
[distance] | [time] | [elevation] | Avg HR [bpm]
[Brief note on how it felt]
```

## Rules

- Activity name should match what the user calls it or what their tracker names it.
- One line of stats, one line of subjective feel. Keep it tight.
- The subjective feel line is the most valuable part. "Felt easy" vs "legs were heavy" tracks adaptation over time.
- Link to a fitness Basecamp only for noteworthy activities (PR, milestone, injury). Not routine entries.
- Tag `#fitness` for discovery.
- Omit stat fields that aren't available. Don't put "N/A."
