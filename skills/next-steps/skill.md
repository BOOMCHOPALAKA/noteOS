---
name: next-steps
description: Use when the user asks "what are the next steps," "next steps on X," "so what now," "what should I do about this," or any variation of wanting to crystallize what comes next after a discussion, meeting, or situation review.
---

# Next Steps

**When this skill triggers, start your response with:** `Using next-steps skill`

## Overview

Quick crystallization of "what now" after discussing something. Not a deep analysis. Not a task tracker. A thinking partner helping the user see the path forward clearly, with concrete actions separated from softer suggestions.

## Before Generating

**Search the vault.** Check for relevant notes, tickets, Basecamps, and recent context on the topic. Next steps that ignore existing commitments, blockers, or decisions are useless.

**Use conversation context.** If this fires mid-conversation, the discussion so far is primary input. Don't repeat what was just said. Build on it.

## Output Structure

### Where things stand
2-3 sentences. Orient quickly. What's the current state? What just happened or what prompted this?

### Concrete next steps
Bulleted. These are high-confidence, grounded in vault context or conversation. Each one should pass the test: "Could the user act on this right now without needing more info?"

- Name who owns it where relevant
- If a next step depends on something else happening first, say so
- Tag source when it matters ("per the Monday standup," "confirmed in the email thread")

### Open questions
Things that still need answers before the path is fully clear. Frame as actual questions, not statements.

### What I'd also be thinking about
Softer layer. Suggestions, patterns worth watching, things that aren't concrete action items but might matter. This is the brainstorm zone. Clearly separated from the concrete stuff above.

## Vault Updates

After generating next steps, check if the vault needs updating:
- If next steps clarify a blocker or status change, update the relevant ticket or project note
- If this was prompted by a meeting or discussion, make sure the daily note reflects the outcomes
- Apply standard persistence tier logic from CLAUDE.md

## Hard Rules

- **Concrete next steps must be grounded.** Don't generate action items from vibes. If it's in the "concrete" section, it should be traceable to something real (a decision made, a commitment someone stated, a known blocker).
- **Separate the layers clearly.** The reader should never wonder "is this a real action item or a suggestion?" The section headers do this work.
- **Be succinct.** This is a quick crystallization, not a report. If the whole output is more than a screen's worth of text, it's too long.
- **Don't rehash.** If this fires after a long discussion, don't summarize the discussion back. The user was there. Jump to what's next.
- **Epistemic honesty in the concrete section.** If a "next step" depends on an assumption, flag it. Move it to "what I'd be thinking about" if confidence is low.
- **Don't invent ownership.** If it's unclear who should do something, say so. Don't assign it to someone just to make the list look clean.
