---
name: drafting-voice
description: Use when asked to draft, write, compose, or ghostwrite any message on the user's behalf. Emails, Slack/chat messages, texts, social media posts, comments, team updates, vendor messages, negotiations. Triggers on "draft," "write a message," "help me write," or implied ghostwriting. Also applies to vault writes that will feed into stakeholder-facing copy.
---

# Drafting Voice

**When this skill triggers, start your response with:** `Using drafting-voice skill`

## Pre-Draft Protocol

Run this before writing a word:

1. What register is this? Professional, casual peer, or social? Set the dial.
2. Am I hedging findings or declaring them? Conclusions should usually be framed as "maybe," "looks like," "from what we can tell."
3. Am I leaving room for the other person to respond or push back?
4. Does this sound like the user said it out loud, or like AI wrote a report?

**Ask before drafting if you don't have:**
- The recipient (who is this going to?)
- The purpose (what outcome do we want?)
- The register (how formal?)
- Any context that changes the message (prior thread, relationship, stakes)

Don't draft on missing critical context. A bad draft wastes more time than asking upfront.

If you haven't seen enough of the user's writing to confidently match their voice, say so and ask for a sample or two. A few emails or messages is enough to calibrate. When the user edits your drafts, those edits are the highest-signal voice feedback. Learn from them.

## The One Dial: Professional ↔ Casual

The core voice stays the same. Tone shifts on volume, not character.

### Professional end (work emails, stakeholder messages, status updates, tickets)
- Match the formality of the recipient
- Exclamation points land when genuine, not decorative
- Hedge harder when the recipient is senior or external
- Lead with the human, then the substance
- Closers: "Thanks," "Cheers," or whatever fits the relationship

### Casual end (close peers, team chat, social posts, quick messages)
- Shorter, more direct, more energy
- Sentences don't always need to finish cleanly
- Thinking out loud on paper is fine
- Still no jargon unless the recipient shares it

## Core Voice Principles

**Hedge findings.** Never declare root cause as settled. "May be part of what you're seeing." "From what we can tell." "Looks like." Frame observations as ongoing even when fairly certain. Reserve flat declaratives for very little.

**Show the reasoning, not polished conclusions.** "I'm not 100% sure but I think..." reads as human. A clean declarative reads as AI.

**Direction as recommendation.** "I would reach out to [person]." "I would send an email." Not bare imperatives when coaching or suggesting.

**"We" for team work.** Default to team-framing for stakeholders and status updates. Don't itemize who's doing which piece. Exception: when relaying what a specific expert found or did, distance with "the team" rather than "we" so it's clear who has the knowledge.

**Cover for people.** Generous explanations for others' delays. Frame problems as process issues, not people issues.

**Paraphrase over direct quote** when quoting would put someone's words in front of people who didn't consent to being quoted. Same fact, no one singled out.

**Minimizers and softeners for asks.** "Just a quick heads up." "Curious if..." Triple hedge on stretch asks: "I know this might be a stretch, but I was just curious if..."

**Don't commit to timelines.** "We're looking to address that" is usually as specific as needed. Soft hedges ("hoping to," "looking at," "thinking we could") invite honest answers.

**Ground timeline asks in a downstream reason.** Don't just ask "when?" Tie it to a stakeholder consequence: "So I can give [person] a realistic window to plan around."

**Lead with the human, then the substance.** Professional writing should still sound like a person who gives a damn.

## Hard Rules (zero exceptions)

- **No em dashes or dashes.** Use periods to separate thoughts. Before sending any draft, scan for `—` and `–`. Replace with periods. Zero exceptions across all output.
- **No corporate jargon.** No "circle back," "align," "sync up," "touch base," "level-set," "move the needle." State the thing, make the ask, stop.
- **No AI template phrasing.** "That's not X, that's Y." "Let me break this down." Manufactured rhetorical turns. Cut all of it.
- **No glaze openers.** Don't open by praising the recipient for doing their job. Generic praise that could be pasted into any email to anyone is the #1 AI tell. The test: if the compliment names a specific thing they did AND you actually mean it, keep it (one line). If it's interchangeable filler, cut it and open on the substance. Warmth is fine. Hollow flattery is not.
- **No narration of other people's internal states or backstory.** Don't write "[Person] came in primed from a prior conversation" or "[Person] seemed excited." State observable behavior or cut it entirely.
- **No commitment-tracking phrasing in team messages.** Never "you committed to," "you said you'd," "as agreed," "per our discussion." Confrontational and contractual. Ask the question directly instead.
- **No emoji in emails unless the relationship clearly warrants one.** Occasionally fine in casual team chat. Never in first-touch or routine work mail.
- **No content-free abstractions.** Every claim needs a concrete anchor: a system name, a symptom, a date, a specific behavior. Sentences that gesture at meaning without detail are the clearest AI tell.

## Message Shape by Type

**Stakeholder update (managers, clients, leadership):**
- Acknowledge → context → current state → what's next → close
- Plain English, no jargon, no technical detail they don't need
- Don't commit to timelines unless confirmed
- "Will loop back when I have a clear update" is a good close
- Credit the team; don't itemize who did what

**Expert/team ping (engineers, specialists, vendors):**
- Lead with the ask or status question
- Share new info that might be relevant
- Offer a hypothesis softly: "Guessing it might be X?"
- "No rush, just trying to [goal]" closes without pressure
- Use their vocabulary

**How-to / walkthrough email:**
- Don't announce you're about to walk through something. Just walk through it.
- Translate jargon to the reader's vocabulary
- "Also" as a soft connector, not a new section header
- Use "they" over naming individuals in instructional context (keeps it illustrative)
- "Hope this helps!" is a valid closer for a genuine how-to

**Leadership catch-up:**
- Chronological: what happened, what we found, what's next
- Bullets for state, prose for narrative
- Credit the team
- "No ask on you right now" is a strong close
- Never dramatize. Incident tone, not crisis tone.

**Team broadcast/recap:**
- "Hey team," + one warm human line before diving in
- TL;DR in the first 3 lines (the top is often all they read)
- Numbered items, plain labels, not bold headers
- Questions stay soft and open — ask, don't assign
- Hedge your own reads explicitly: "my current read (not confirmed) is..."
- Closer is plain and short. No recap paragraph at the end.

## Common AI Phrases to Cut

- "I wanted to reach out..."
- "I hope this email finds you well"
- "Please don't hesitate to..."
- "As per my previous email..."
- "Moving forward..."
- "It's worth noting that..."
- "Needless to say..."
- "That said..."
- Any opener that thanks the recipient for doing their ordinary job

## Voice Extends to Vault Writes

Anything written to the vault that will eventually feed stakeholder-facing copy (daily notes, status report drafts, meeting summaries) follows the same voice rules: no inflation words, match source hedge level, plain-spoken, no flowery framing. Vault writes become future stakeholder copy. Apply the same discipline.

## Interaction with Other Skills

- **quarterback-mode:** Quarterback mode drafts messages in real time during coordination. Drafting-voice calibration always layers on top.
- **incident-communication:** Handles the specific shape of technical incident updates to non-technical stakeholders. Drafting-voice rules apply to those drafts too.
- **social-captions:** Specific to social media captions. Drafting-voice handles all other message types.
- **tldr:** If you need talking points pulled from content before drafting, run tldr first, then draft.
