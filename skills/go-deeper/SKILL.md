---
name: go-deeper
description: Use when the user says "go deeper on X," "expand on Y," "flesh this out," "more on [topic]," "tell me more about," "dig in on," or any variant that asks to extend prior analytical output. Works as an escalation layer on top of any analytical skill (deep-analysis, tldr, situation-assessment, next-steps, meeting-transcript-processing, email-analysis, ticket-investigation, codebase-investigation) and also on analytical content in vault notes.
---

# Go Deeper

**When this skill triggers, start your response with:** `Using go-deeper skill`

## Overview

the user's analytical skills default to tight, scannable output. That's the point. This skill is the escalation path: when the initial output is too thin for what the user actually needs, he pulls a thread and this skill expands it. One thread at a time by default. Multiple if he says so.

The job is to preserve the composability: tight first pass, explicit deeper dives on request, no need to ask for "thorough" upfront because the escalation is always available.

## When it triggers

The user says something like:
- "Go deeper on [thread]"
- "Expand on [thread]"
- "Tell me more about [thread]"
- "Flesh out [thread]"
- "Dig in on [thread]"
- "More on [thread]"
- "What else on [thread]"
- "Go deeper" (no thread specified, ambiguous . ask which one)

## What it works on

This skill is an escalation layer. It pairs with any analytical output:
- **Conversation output:** Anything produced by `deep-analysis`, `tldr`, `situation-assessment`, `next-steps`, `meeting-transcript-processing`, `email-analysis`, `ticket-investigation`, `codebase-investigation`, `ticket-digest`, `daily-email-digest`, `weekly-email-digest`, `meeting-prep`, `team-ai-assessment`, and similar analytical skills
- **Vault notes:** If the user says "go deeper on the third angle in [[Allovus Assessment Findings]]" or "expand on the blockers section of [[Current Context]]"

## Workflow

### 1. Identify the anchor and the thread

**Anchor** = the source material to expand. Either the most recent analytical output in the conversation, or a vault note the user named.

**Thread** = the specific sub-topic the user wants deeper. Examples: "the HubSpot integration option," "the voice protection pattern," "why the cache fix hasn't landed," "the Alena recommendations."

**If the thread is ambiguous** (the user said just "go deeper" without naming what), ask which piece. Don't guess and pick the juiciest one. List the candidate threads from the prior output and let him pick.

**If the user names multiple threads** ("go deeper on the Alena and Evan pieces"), handle them as distinct threads. Output is still per-thread, not merged.

### 2. Determine scope

**Default:** One thread per invocation. Keeps output scannable and the user can always pull another thread next.

**Override:** If the user explicitly asks for multiple ("deeper on all three angles," "expand on both"), handle them. Each thread gets its own section.

### 3. Pull the right source material

**For conversation anchors:** The prior analytical output is the starting point, but the source material that produced it is in earlier conversation. Scan back for the raw data, transcript, research, or vault reads the original output was built from.

**For vault anchors:** Read the named note. Search the vault for related notes linked from it. Pull Current Context if the thread is an active work item.

**Don't regenerate from scratch.** Go-deeper is *expansion*, not re-analysis. Build on what was already said. Add what was left out, not a new pass at the same data.

### 4. Build the expanded output

**Hard ceilings:**
- **One thread:** ~600 words max
- **Multiple threads:** ~600 words per thread, each in its own clearly labeled section
- **Scannable structure.** Not a wall of text. Headers, bullets, short paragraphs

**What to include in an expansion:**
- **Context the first pass left out.** Background, history, adjacent data points
- **Second-order implications.** If the first pass said "X matters because Y," this goes to "Y matters because Z, and here's what that changes"
- **Tradeoffs and counterarguments.** Where the first pass took a position, name the case against
- **Specifics and examples.** If the first pass was abstract, ground it in real data, real quotes, real file paths
- **Uncertainty the first pass smoothed over.** What wasn't verified. What the data could also mean. What would change the read

**What NOT to include:**
- Restating the first pass before expanding (the user already read it)
- Manufactured depth (if there's nothing more to say, say so)
- Expansions of threads the user didn't ask about (stick to the ask)
- A new "overall conclusion" section at the end (the first pass already concluded, this is a footnote layer)

### 5. Cut pass

Before sending:
- Can any bullet be removed without losing the point?
- Is anything just a longer restatement of the first pass?
- Is there a paragraph that's padding because the expansion "should" be longer?
- Is the uncertainty actually honest, or am I hedging to fill space?

Cut hard. The ceiling is the ceiling. If the real expansion is 300 words, it's 300 words. Short is not a failure state.

### 6. Offer next pulls

At the end, offer (don't list exhaustively) what else could be pulled deeper if the user wants more. One or two suggestions max. Not a menu. Example:

> Want to go deeper on the tradeoff between the Power Automate path and the Claude ETL path, or on how Liz's licensing constraint changes the recommendation?

Skip this entirely if there's nothing obvious worth pulling next.

## Hard Rules

- **Brevity:** Follow `~/.claude/skills/_shared/brevity.md` for the cut test, padding patterns, and hard rules. The 600-word cap here is additive to that baseline.
- **Expand, don't restart.** Build on the prior output, don't redo it
- **One thread default, multiple on request.** Don't bundle threads the user didn't ask for
- **If the thread is ambiguous, ask.** Don't pick for him
- **No manufactured depth.** If there genuinely isn't more to say on a thread, say "the first pass covered this. Want me to pull a different thread?" instead of padding
- **Preserve composability.** the user can go-deeper on a go-deeper output. Each pull is its own anchor. Don't treat the first expansion as the final word
- **No em dashes.** Periods to separate thoughts
- **Don't editorialize the process.** Don't say "I'll dig into this more thoroughly." Just do it

## What This Doesn't Do

- Doesn't generate new high-level analysis. Use `deep-analysis` for that
- Doesn't replace `tldr` or `situation-assessment`. Those are starting points, this is a follow-up
- Doesn't update the vault by default. It's a chat-output skill. If the expansion should be saved, the user will ask
- Doesn't work in isolation. It always needs an anchor (prior conversation output or a vault note)

## Examples

**Example 1: Thread on prior deep-analysis**
> the user: "Go deeper on the HubSpot integration thread"
> Skill: Pulls the HubSpot integration section from the prior deep-analysis output. Expands on: Power Automate feasibility (specific flow shape, permission requirements), the Claude ETL alternative (maintenance burden, complexity), why this hasn't been fixed already (likely political or resourcing, not technical), and what Liz would need to approve it. ~500 words.

**Example 2: Ambiguous request**
> the user: "Expand on that"
> Skill: "A few threads you could pull here: (1) the voice-protection pattern across Steve and Evan, (2) the LinkedIn Recruiter Lite budget signal, (3) the RFP deadline miss as a channel-chaos cost example. Which one?"

**Example 3: Vault note expansion**
> the user: "Go deeper on the tradeoffs section in [[your team Compensation Research]]"
> Skill: Reads the note, finds the tradeoffs section, expands with: market data not captured in the note, specific negotiation framings, what changes if the user's scope expands, what changes if it contracts. ~600 words.

**Example 4: Multiple threads on request**
> the user: "Expand on both the Alena recommendation and the Evan recommendation"
> Skill: Two clearly labeled sections, each ~500 words. No merged "here's the sales cohort strategy" conclusion. Each persona stays distinct.
