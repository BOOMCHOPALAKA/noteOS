---
name: perspective-check
description: Use when the user needs a non-technical or outside-perspective read on something they're building, explaining, or pitching. Triggers on "how would [persona] see this," "would this make sense to a non-technical person," "run this by [type of person]," "perspective check," "outside eyes on this," or when testing whether a product, feature, explanation, or deliverable lands for someone who isn't deep in the work. Also invokable by other skills when the topic is user-facing.
---

# Perspective Check

**When this skill triggers, start your response with:** `Using perspective-check skill`

## Overview

You're too close to the thing. You know how it works, why it was built that way, and all the tradeoffs. The person you're trying to reach doesn't. This skill gives you a read from that person's perspective before you send, ship, or pitch.

## Persona Calibration

The most useful check is against a specific person type, not "a general user." Before running the check, clarify:

**What kind of reader is this for?**
- Non-technical but smart and curious — they understand concepts, not implementations
- Executive or decision-maker — they care about outcomes, not mechanics
- First-time user — they have no prior context, just a problem they want solved
- Skeptic — they're looking for reasons it won't work
- Client or customer — they have their own goals and may not trust you yet

If the user has a specific person in mind, model that person. If not, default to the smart non-technical reader. That's the most valuable check for most AI and product work.

## The Perspective Check

Read the material as the target persona. Then answer these questions in order:

**1. What problem does this solve?**
Can you state it in one sentence without using any of the user's vocabulary? If not, the framing hasn't landed. The reader will either fill in their own (possibly wrong) version or disengage.

**2. What's the first thing that confused you?**
Name it specifically. Not "it was a bit unclear" — name the moment where the logic broke or a term wasn't defined. That's usually where the user lost the room.

**3. What did you trust?**
What felt concrete, earned, and credible? Specifics, real examples, honest hedges. Name what worked so the user knows to keep it.

**4. What felt like marketing?**
Any phrasing that sounds like a pitch instead of a fact. "Seamless," "powerful," "game-changing," "you won't be able to go back." That language triggers skepticism, not confidence.

**5. What did you want to know that wasn't there?**
What question came up that went unanswered? Often this is: who is this for, what does it actually cost, what happens when it goes wrong, or what does "better" mean in concrete terms.

**6. What would make you try it (or not)?**
What would this persona need to see to take the next step? And what's the thing that would make them walk away?

## Output Format

Keep it tight. The value is in the specific — not a general "the non-technical person would be confused." A specific observation they can act on.

```
**Perspective: [persona type]**

What I understood: [one sentence]

Where I got lost: [specific moment or term]

What felt credible: [specific thing]

What felt like marketing: [specific phrase or claim]

What I wanted to know: [missing piece]

What would make me try it: [concrete answer]
```

If the material is solid, say so and say why. The check isn't just for finding problems.

## Common Patterns by Context

**AI / product demos:**
The #1 failure is leading with how it works instead of what it does for you. The reader doesn't care about the mechanism until they believe in the outcome. Lead with the outcome. Save the mechanism for people who asked.

**Technical explanations for non-technical stakeholders:**
The reader doesn't need to understand your architecture. They need to understand what they're responsible for, what they need to approve, and what happens if something goes wrong. Filter everything through that.

**First-touch pitches:**
You have about three sentences before they decide whether to keep reading. If sentence one is about the company and sentence two is background, you've lost them. Lead with the thing they actually care about.

**Status updates to leadership:**
They don't need to know what happened. They need to know: is this on track, what's the risk, and do they need to do anything. Those three questions, in that order.

## Interaction with Other Skills

- **tldr:** If the material is long, run tldr first to get a distilled version, then run perspective-check on the distilled version. Saves time and surfaces whether the distillation itself lands.
- **incident-communication:** Use perspective-check after drafting an incident communication to verify it lands for a non-technical stakeholder before sending.
- **drafting-voice:** Perspective-check catches what doesn't land; drafting-voice is how you fix the draft.
