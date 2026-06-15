---
name: natural-convo
description: Use when the user pastes social media comments, forum threads, email chains, or any threaded conversation and wants help crafting a reply. Triggers on pasted comment threads, "help me reply to," "what should I say to," or any back-and-forth exchange where the user wants the next move.
---

**When this skill triggers, start your response with:** `Using natural-convo skill`

## Overview

This skill handles live, threaded conversations. Facebook debates, Twitter replies, Reddit threads, email chains, casual comment sections. The goal is to sound like the next natural thing the user would type, not a drafted response.

**This skill works in tandem with my-voice.** Drafting-as-scott owns the voice. This skill owns the conversation dynamics. When natural-convo triggers, always load my-voice as well. Use its voice registers, hard rules, and pre-draft protocol. Then layer on the threading, strategic reads, and conversational flow from this skill. Voice comes from my-voice. How to advance the conversation comes from here.

## Before Drafting

### 1. Parse the thread
Figure out who said what. Pasted social media formatting is messy. Identify speakers, order of replies, and who's responding to whom. If it's unclear, ask.

### 2. Read the user's original comment
This is the anchor. Everything about tone, register, energy level, and argument structure comes from what the user already wrote. Don't override it. Match it.

### 3. Read the reply/replies
What are they actually saying? Are they engaging with the argument or deflecting? Do they have a point or are they just name-calling? This determines the strategic advice.

### 4. Check the vault (when relevant)
If the topic connects to something in the vault (a note, a project, research, context around a person or situation), pull it. Don't force it. Most social media threads won't need this. But if the user's debating something he has deep context on, use it.

## Drafting the Reply

### Voice Rules
Inherit everything from my-voice. Specifically:
- No dashes. Periods to separate thoughts.
- No emoji in written replies (unless the platform/context calls for it and the user's original used them).
- Match the user's register. If he went surgical, stay surgical. If he went scorched earth, match that energy. If he's being funny, be funny.
- The "Political/Debate" register from my-voice applies to arguments: confrontational but not unhinged, accumulation, binary traps, timeline stacking, triple question marks for disbelief.

### The Core Rule: Advance, Don't Restate
This is the #1 failure mode and the reason this skill exists.

**The user already made their argument.** You read it. You internalized it. Now your job is to move the conversation forward based on what the other person said back.

- **Respond to what they said.** Not to what the user originally said. The reply should feel like it's in direct conversation with the other person's response.
- **Restating for emphasis is fine.** Restating verbatim is not. If revisiting a point, it must hit differently. Sharper. New angle. Building on what happened since. Stronger wording. Never copy the structure or phrasing of the original.
- **Don't re-present the case.** The case was already made. If they didn't engage with it, call that out. Don't re-argue it hoping they'll engage this time.
- **If they gave you nothing to work with** (just insults, deflection, "blah blah blah"), the reply is about their non-response, not a retry of the original argument.

### Length
Match the energy. A long, detailed original post earns a longer reply. A one-line dismissal from the other person gets a tight, punchy response. Don't write an essay to counter a sentence. Don't write a sentence when there's substance to engage with.

### Multiple Replies
When several people respond, or one person posts multiple replies:
- Assess whether to reply to each individually or combine into one response.
- Flag which ones are worth engaging and which ones do the user's work for him by just sitting there.
- "Ignore that one" is valid strategic advice.

## Strategic Advice

Separate from the draft. Offered before or after the reply text. This includes:

- **Engage or ignore?** Some replies are bait. Some are so bad they make the user's point for him. Flag these.
- **Combine or separate?** When there are multiple replies, advise on whether to address them individually or roll them into one.
- **Temperature read.** "This person has nothing." "They actually made a point here, might want to address it." "The audience is watching this one."
- **Escalation awareness.** If the thread is getting to a point of diminishing returns, say so. "You've won this one, anything more is victory lapping."
- **Screenshot risk.** If a line could get taken out of context, flag it. Not to kill it, just to make sure the user's aware.

## What NOT to Do

- **Don't sound drafted.** No clean rhetorical bows. No "Let me be clear." No structured thesis statements. This is a comment section, not an op-ed.
- **Don't lecture.** the user debates, he doesn't lecture. There's a difference. Lectures talk at people. Debates talk to them.
- **Don't be diplomatic when the user isn't being diplomatic.** If he's going hard, don't soften it. Match the energy he set.
- **Don't introduce new arguments the user didn't make.** Build on his points, don't add your own. If there's a strong angle he missed, offer it as strategic advice, not in the draft.
- **Don't over-explain.** If the point is obvious, let it land. Don't add a paragraph explaining why the point is devastating.
- **Don't moralize.** No "this is what's wrong with discourse" energy. Stay in the fight or get out of it.

## Vault Updates

Generally none. Social media threads are ephemeral. Exception: if a thread surfaces something the user wants to remember or connects to an active project/note, offer to capture it per the standard persistence tiers.
