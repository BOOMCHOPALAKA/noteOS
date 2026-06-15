---
name: ticket-triage
description: Use when new work comes in and the user needs to figure out who should do it, how urgent it is, and where it fits in the current pipeline. Triggers on "who should handle this," "where does this fit," "how should we prioritize this," "route this," or when processing a new request, bug report, or feature ask that needs to be assigned and sized before it becomes a ticket.
---

# Ticket Triage

**When this skill triggers, start your response with:** `Using ticket-triage skill`

## Overview

Something new came in. Before it becomes a ticket, a calendar item, or a panic, you need to answer three questions: how urgent is it, who should own it, and where does it fit in what's already in flight.

Triage is not ticket creation. It's the gate before ticket creation. The output is a routing decision, not a full writeup.

## Step 1: Characterize the Work

Read the incoming request and identify:

**Type:**
- Bug (something broken that was working)
- Feature request (something new, didn't exist before)
- Enhancement (something that exists but needs to be better)
- Question / investigation (unclear yet, needs a look)
- Maintenance / KTLO (keep the lights on, routine upkeep)

**Requestor:** Who asked? Client, internal stakeholder, end user, system alert? Their relationship to the work affects urgency and how you handle the response.

**Impact:** What breaks or degrades if this isn't handled? Who's affected and how many?

**Clarity:** Is the request specific enough to act on, or does it need scoping first?

If the type or impact is unclear, say so before routing. Triaging an unclear request leads to the wrong assignment.

## Step 2: Urgency Assessment

Rate urgency on four levels:

**P0 — Drop everything:** Production is broken for real users, revenue is at risk, or a client is actively blocked. Goes to the front of the queue now.

**P1 — This sprint/this week:** Significant impact, workaround exists but is painful. Schedule it before new feature work.

**P2 — Next cycle:** Real issue or useful request, but nothing is on fire. Goes into the backlog with a note.

**P3 — Someday/maybe:** Low impact, nice to have. Add it to the backlog and don't lose sleep over it.

When in doubt, ask: "What happens if this doesn't get addressed for one week?" If the answer is "a lot," it's at least P1.

## Step 3: Ownership

Who should own this?

Match the request to the right person based on:
- Domain expertise (who knows this part of the system)
- Current capacity (who isn't already buried)
- Relationship to requestor (sometimes ownership is about communication, not just execution)

**If unclear:** name the person most likely to know the answer, and frame the handoff as a question rather than an assignment. "This looks like it might be in [person]'s territory — can you confirm before we route?"

Don't assign something without at least a soft check. Surprise assignments create friction.

## Step 4: Fit in Current Pipeline

Before creating a ticket:

1. Is this already tracked somewhere? Search open tickets for duplicates or near-duplicates first. Triaging a duplicate creates noise.
2. Does it conflict with anything in flight? If the same part of the system is being worked on right now, that changes the approach.
3. Does it unlock or block something else? Some requests aren't urgent in isolation but become urgent because something else depends on them.

## Output

After triage, produce a short routing summary:

```
**Type:** [Bug / Feature / Enhancement / Investigation / Maintenance]
**Urgency:** P[0-3] — [one-sentence reason]
**Owner:** [Person or team] — [one-sentence reason]
**Pipeline fit:** [duplicate check, conflicts, dependencies]
**Next move:** [Create ticket / Scope first / Route to [person] for confirmation / Already tracked at [link]]
```

This is the handoff note, not the ticket. Keep it to what's needed to make the routing decision.

## What NOT to Do

- **Don't create a full ticket before triage confirms ownership and urgency.** Tickets that route to the wrong person or wrong sprint create rework.
- **Don't escalate to P0 as a reflex.** P0 means drop everything. If everything is P0, nothing is.
- **Don't route unclear requests.** If the request doesn't have enough information to size or assign, the next move is clarification, not routing.
- **Don't skip the duplicate check.** The most common triaging mistake is creating a second ticket for something already being tracked.

## Interaction with Other Skills

- **ticket-creation:** Triage comes first. Once the routing decision is made, use ticket-creation to write the actual ticket.
- **investigate:** If triage surfaces a bug with unclear scope, investigate before creating the ticket. You'll write a much better ticket with a scoped understanding of the issue.
- **situation-assessment:** If the incoming request is embedded in a messy email thread or stakeholder message, use situation-assessment to get a clean read on what's actually being asked before triaging.
