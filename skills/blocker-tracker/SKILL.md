---
name: blocker-tracker
description: Cross-cutting component, not typically invoked directly. Surfaces stale blockers and forgotten dependencies. Referenced by morning-brief, meeting-prep, and live-call-mode skills. Can also be invoked directly when the user asks "what's stale," "what's stuck," "what am I forgetting," or "what's fallen through the cracks."
---

# Blocker Tracker

**When this skill triggers directly, start your response with:** `Using blocker-tracker skill`

## Overview

This is a detection system, not a standalone report. It runs as part of other skills (morning brief, meeting prep, live support) to surface things that are stuck, stale, or falling through cracks. Can also be invoked directly when the user wants a full scan.

## What Counts as a Blocker

1. **Waiting on a person.** Someone was supposed to do something and hasn't. "Check:" items in daily note TODOs are the primary signal.
2. **Waiting on external.** Vendor response, client approval, third-party system.
3. **No movement.** A ticket or thread that had activity and then went quiet.
4. **Implicit dependency.** Ticket A can't start until Ticket B finishes, but nobody's tracking Ticket B.
5. **Commitment without follow-through.** Someone said they'd do X in a meeting. No evidence it happened.

## Detection Sources

Scan these (in priority order for speed):

1. **Current Context.md** — Active Threads section. Check dates. Anything 3+ days old without a status change is potentially stale.
2. **Daily note TODOs** — "Check:" items and carried items. If an item has been carried 3+ days, it's stale.
3. **Open For Next Session** — Items that have survived multiple sessions. Something dropped.
4. **Recent meeting notes** — Commitments made but not yet tracked as TODO items.
5. **Ticket files** — Tickets where the status implies waiting (blocked, needs info, waiting on QA) with no recent daily note mentions.

## Staleness Thresholds

| Type | Stale After | Escalation Signal |
|------|------------|-------------------|
| Production issue | 24 hours | Immediate |
| Conference-deadline work | 2 days | Flag to your lead/your manager |
| Helpdesk ticket | 3 days | Raise at standup |
| Feature work | 5 days | Raise at standup |
| Investigation | 5 days | Check if still relevant |
| External dependency | 7 days | Follow up with vendor/client |
| "Nice to have" | 14 days | Archive or re-prioritize |

## Output Format

When surfacing blockers (within another skill's output or standalone):

**Inline (within morning brief, meeting prep, live support):**
Weave into the relevant section. Don't create a separate "Blockers" heading unless there are 3+.
> "your developer's price revert code dive was supposed to happen Monday. No movement in daily notes since. Blocks MSRP rollout targeting next week."

**Standalone (when directly invoked):**

```
## Stale Items — [Date]

### Waiting on People
- **[Person]:** [What they owe] — [How long] — [What it blocks]

### No Movement
- **[Ticket/Thread]:** Last activity [date] — [What's expected next]

### Commitments Without Follow-Through
- **[Who said what, when]:** No evidence of action in vault

### Upcoming Deadlines at Risk
- **[Item]:** Due [date] — [What's not done yet] — [Who's on it]
```

## Vendor / External Boundary

External team blockers get flagged differently. The user can't directly unblock vendor work. The output should be: "Ball is in [vendor]'s court on [X]. Flag it at the next sync call if it's still stuck." Not "follow up with [person]."

## What This Doesn't Do

- Doesn't create tickets. It surfaces what's stuck.
- Doesn't assign blame. "No movement since Monday" not "your developer hasn't done it."
- Doesn't auto-escalate. It flags for the user. He decides what to raise and with whom.
