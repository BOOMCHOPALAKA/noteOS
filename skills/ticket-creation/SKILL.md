---
name: ticket-creation
description: Use when creating a task ticket, writing up a bug, drafting a feature request, or when the user says "make a ticket for this," "write this up," or "create a ticket." Also triggers when the user has a dev ticket template in their vault.
---

# Ticket Creation

## Overview

Create clear, scannable tickets that developers (or anyone picking up the work) can use as working documents. Focused on what and why, not how.

## Before Writing

1. **Search the vault** for existing tickets on this topic. Don't duplicate.
2. **Check related notes and Basecamps** for context that should be linked.
3. **Check Templates/** for a ticket template. If one exists, follow its structure.

## Core Principles

- **Ruthlessly concise.** If it doesn't help the person doing the work, cut it. Target 1-2 screen scrolls maximum.
- **Define the "why" and "what," not the "how."** Trust the person doing the work to make implementation decisions.
- **Collaborative language.** "We need to" over "you must." No ALL CAPS urgency unless truly urgent.
- **Clear for all readers.** Avoid jargon unless it's standard domain terminology. Be conscious of ESL readers.
- **Flag assumptions.** "Appears to be..." or "likely..." when uncertain. Ask clarifying questions rather than guessing.

## Minimal Structure

Every ticket should have at least:

- **Title** that describes the work, not the symptom
- **Overview / Problem** (the why. What's wrong or what we're building and why it matters)
- **What Needs To Happen** (the what. High-level bullets, not step-by-step instructions)
- **Acceptance Criteria** (checkbox list. How do we know it's done?)

Optional sections when they add value: Bug Details (steps to reproduce), Out of Scope (only when scope is genuinely ambiguous), Technical Constraints (hard requirements only), Design Reference (link to designs if they exist).

## After Writing

1. **Link the ticket** to related Basecamps, project notes, and existing tickets.
2. **No orphan tickets.** Every ticket connects to the vault web.
3. **Offer an external-sharing version** if the user needs to post it outside the vault (stripped of wiki links and hashtags, in a code block for copy/paste).
