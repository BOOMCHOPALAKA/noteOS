---
name: investigate
description: Use when working through a technical problem, debugging an issue, or when the user says "help me think through this," "I'm going in circles," "what are we missing," "walk me through this," or "investigate." Also use proactively when the conversation has been circling the same problem for more than 3 exchanges without progress. Two modes. fresh start (beginning an investigation) and reset (mid-investigation when stuck).
---

# Investigate

**When this skill triggers, start your response with:** `Using investigate skill`

## Overview

A thinking framework for working through technical problems. Not a script. Not a runbook. A set of questions and mental moves that force clarity when the problem feels murky or the conversation is going in circles.

Built from how real investigations actually play out: isolate, measure, compare what should happen vs. what is happening, trace backwards from the symptom, and ground every theory in something you can observe.

## Detect the Mode

**Fresh start:** the user is bringing a new problem or starting an investigation. Open with Step 1.

**Reset:** the user says something like "I'm going in circles," "what are we missing," "I don't understand what's going on," or the conversation has been circling without progress. Skip to the Reset Checklist.

## Fresh Start: The Investigation Framework

Work through these in order. Don't dump them all at once. Ask one, let the user answer, then move to the next. Skip any that are already obvious from context.

### Step 1: What's the symptom?
Not the theory. Not the suspected cause. What is the person actually experiencing?

"your webmaster's browser freezes for 90 seconds when he searches for a test" is a symptom.
"The GTM containers are loading too many scripts" is a theory.

**Ask:** "What's the actual thing someone is seeing or experiencing? Describe it like you're watching over their shoulder."

If the user gives you a theory instead of a symptom, push back: "That sounds like a possible cause. What's the thing the user actually sees?"

### Step 2: Who sees it and who doesn't?
This is the fastest way to narrow the problem space. If some people see it and others don't, the difference between those groups IS the clue.

**Ask:** "Who's affected? Who isn't? What's different about those two groups?"

Look for splits along:
- Device / hardware (fast laptop vs. old laptop)
- Browser (Chrome vs. Brave vs. Firefox)
- Network / location (office vs. home, US vs. international)
- Role / behavior (someone who tests ad pages daily vs. someone who doesn't)
- Time (morning vs. afternoon, consistent vs. intermittent)

### Step 3: What do you know for certain?
Separate facts from theories. This is the grounding step.

**Ask:** "What have you actually measured or observed? Not what you think is happening. What do you KNOW?"

Good answers: "I recorded the browser loading 987 requests." "your webmaster confirmed it happens in both Chrome and Firefox." "Rost removed the code and the request count didn't drop."

Bad answers: "I think it's the PPC vendor." "It's probably caching." "The GTM is broken." These are hypotheses, not facts. Label them as such.

### Step 4: What should be happening vs. what is happening?
This is the comparison that makes the problem concrete and explainable. Once you can state both sides clearly, you've found the problem. You might not know the fix yet, but you know the problem.

**Ask:** "How is this supposed to work? And how is it actually working?"

Example from real investigation:
- **Should:** When someone visits the homepage, the tracking code should only count the visit for the specific ad that brought them there.
- **Actually:** The tracking code is counting every visit against all 135 ads regardless of how the person got there.

That comparison IS the finding. Everything else is detail.

### Step 5: Isolate
Remove things one at a time and test after each removal. Don't theorize about what will help. Just remove and observe.

**Ask:** "What's one thing you can turn off, remove, or block right now to see if it changes the behavior?"

The key discipline: change ONE thing, test, observe. Not three things at once. If the problem goes away, you found it. If it doesn't, put it back and try the next thing.

**Important: verify your measurement tool before trusting results.** If you block something and the problem "goes away," confirm you're measuring with the right tool, the right browser, and the right conditions. A false positive here sends the whole investigation sideways.

### Step 6: Trace backwards from the symptom
Start at the thing the user sees and work backwards toward the cause. Don't start at the code and work forward toward the user.

**Ask:** "The browser froze. What was it doing when it froze? What triggered that? What triggered THAT?"

Follow the chain until you hit something you can change.

### Step 6b: When was this decided / was this ever ticketed? (dev-process investigations)
For "how did this happen," "whose decision was this," or "why is the behavior different from what we intended" investigations, the answer often lives in the dev ticket board, not the code. Pull it proactively. Don't wait to be told.

**Ask:** "Was there a ticket for this? What did its scope actually say?" A requirements gap in the ticket scope is a common root cause (June 2, 2026: a price auto-approval rule was supposed to be removed in Feb 2026, but the Sprints ticket APP-I633 scope only said "change 15% to 20%" and never mentioned removing the rule, so the backend rule was never touched).

**Where to look:** your project tracker / Projects ticket board, plus git history (`git log`, `git blame`) for what actually shipped, plus the vault timeline. Triangulate live code + git history + the ticket scope + the vault. **Sprints caveat:** the active sprint is NOT "current" (Sprint 98 is 79 days overdue as of June 2026). Enumerate sprints by date and search across dated completed sprints + backlog, not just the active sprint. Procedure in [reference_zoho-sprints-mcp-ids.md](~/.claude/projects/-Users-chop-Documents-chopOS/memory/reference_zoho-sprints-mcp-ids.md).

### Step 7: Who owns what?
Before proposing a fix, figure out who actually has the ability to make the change. Some problems live on your side. Some live on a vendor's side. Some require coordination across both.

**Ask:** "Do we control the thing that needs to change? If not, who does? And what's our leverage to get them to act?"

This question prevents wasted effort. If the fix requires a vendor who won't cooperate, knowing that early changes the entire strategy.

### Step 7b: How did it get this way? (accountability questions only)
When the question is "how did this happen," "whose decision was this," or "why is the code like this" (not just "how do we fix it"), trace the behavior back to whatever authorized it. Don't stop at "the code does X."

**Triangulate across sources and look for the mismatch:**
- **Live code** . confirm what's deployed actually does X (`git fetch` first, confirm the local tip matches prod).
- **Git history** . `git blame` / `git log`. Was X ever added, changed, or removed? Did a planned change ship half (frontend shipped, backend never did)?
- **The authorizing ticket** . pull the Sprints/Projects item and read its acceptance criteria. Does the ticket scope match the code?
- **The thread** . check the team chat DM and the channel. Threads migrate between them; check the other surface before concluding the context isn't there.

**The finding is usually the gap between the ticket scope and the code.** If the ticket never asked for the behavior the code has, it's a requirements miss, not a dev error. Name which one. That distinction changes who owns the follow-up.

### Step 8: State the constraint
Before committing to a fix path, name what you can't break.

**Ask:** "What has to keep working? What's the thing we absolutely cannot lose while fixing this?"

Example: "The goal is to decrease the load time and not lose any tracking information." That constraint shapes every solution. Without it, someone will propose "just delete all the tracking" which would fix performance and break the business.

## Reset Checklist

When stuck or going in circles, run through these quickly. They're designed to break the loop.

### R1: State what you actually know right now.
Write it down. Facts only, no theories. If the list is short, that's the problem. You need more data, not more discussion.

### R2: What have you tried and what happened?
List each thing attempted and the actual result. Not "it didn't work" but specifically what you observed. "Rost removed the hardcoded code, deployed to staging, Chrome still showed 1180 requests." That precision prevents re-trying the same thing or misremembering what happened.

### R3: Are you solving the right problem?
Re-read the original symptom from Step 1. Is the thing you're working on right now actually connected to what the user reported? Or have you drifted into a side problem that feels productive but isn't the thing that needs fixing?

### R4: Are you measuring with the right tool?
This one catches more false conclusions than anything else. Are you looking at the right browser? The right environment? Is your cache cleared? Is your ad blocker off? Is your test matching the conditions the user described?

### R5: Who haven't you talked to, and where haven't you looked?
Sometimes the answer isn't in the code or the data you've looked at. It's in a conversation with someone who has context you don't (the vendor, the person who set it up, the user experiencing it), or in a source you skipped.

And sometimes the answer is a message you already have, on a surface you didn't check. If someone references a specific message or decision ("your manager confirmed that with Stephanie," "your lead answered this already") and you don't find it where you looked, **check the other surface before concluding it isn't there.** team chat threads migrate DM<->channel mid-conversation: if it's not in the 1:1 DM, it's likely in #dev-altn, and vice versa. Don't say "I'm not seeing that context" until both surfaces are checked.

For "how did this happen / was this ticketed," also check the your project tracker / Projects ticket board if you haven't. The ticket scope often holds the answer, and the active sprint being stale means the item may sit in a dated completed sprint, not where you'd expect.

### R6: What would you tell a new person walking into this?
Explain the problem from scratch in two sentences. If you can't, you don't understand it well enough yet. If you can, and the explanation sounds different from what you've been working on, you've drifted.

## When to Act vs. When to Investigate More

**Act when:**
- You can state the "should vs. actually" comparison clearly
- You've isolated the cause to one specific thing
- You know who owns the fix
- You've named the constraint

**Investigate more when:**
- You have theories but no measurements
- Multiple people have different framings of the problem and nobody has tested theirs
- You've been talking for 20 minutes without opening a browser, running a test, or looking at data
- The fix you're proposing is based on what you think is happening rather than what you've observed

## What This Skill Does

- Asks questions that force clarity
- Structures the thinking process so it doesn't loop
- Catches the moment when the investigation drifts from the original problem
- Prevents acting on unverified theories
- Adapts to where you are (fresh start vs. stuck in the middle)

## What This Skill Does NOT Do

- Replace domain expertise. It asks the right questions. The answers require knowing the system.
- Run tests or execute code. It guides the thinking. Other skills and tools do the doing.
- Produce a report. The output is the investigation itself, not a document about the investigation.

## Hard Rules

- **Symptom first, theory second.** Always start with what someone is actually experiencing. Never skip to the suspected cause.
- **Measure before theorizing.** "I think it's X" has to become "I tested X and here's what I observed" before it drives any action.
- **One change at a time when isolating.** Multiple changes at once make results uninterpretable.
- **Verify your instruments.** Check that you're measuring in the right browser, the right environment, with the right conditions. A measurement from the wrong tool is worse than no measurement.
- **Don't skip "who owns this."** A perfectly diagnosed problem that lives on someone else's server still requires their cooperation to fix. Know this before planning the fix.
- **Label facts and theories differently.** "We measured 987 requests" is a fact. "The vendor's code is causing it" is a theory. Never present a theory as a fact.
- **When going in circles, stop talking and go measure something.** Twenty minutes of discussion without data means the conversation needs a test, not another hypothesis.
