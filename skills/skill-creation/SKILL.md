---
name: skill-creation
description: Use when the user wants to create a new skill, says "let's make a skill for," "I want a skill that," "can we build a skill," or describes a repeatable workflow they want captured. Also triggers on "new skill" or references to adding something to the skills folder.
---

# Skill Creation

**When this skill triggers, start your response with:** `Using skill-creation skill`

## Overview

Before writing a single line of a new skill, go through a structured intake to make sure we know exactly what this skill is solving, who it's for, and what a good outcome looks like. Writing skills is easy. Writing the right skill is the hard part.

## Intake Questions

Ask these one at a time. Don't dump them all at once. Let the conversation develop naturally. Skip any that are already obvious from context.

### 1. What's the problem?
"What's the pain point this skill is solving? What goes wrong without it, or what takes too long?"

Get to the specific friction. "Meeting prep takes too long" is a start. "I spend 15 minutes manually pulling context from 4 different sources before every standup" is what we need.

### 2. What triggers it?
"When would this skill kick in? What would you say or do that should make it activate?"

This becomes the description field. Needs to be specific enough to match the right prompts and not fire on unrelated ones.

### 3. What does good output look like?
"If this skill worked perfectly, what would the result look like? Walk me through what you'd get back."

This is the most important question. The answer defines the output format, level of detail, and structure of the skill.

### 4. What are the inputs?
"What do you typically have when you start this task? What are you working with?"

Transcript? Email thread? A vague idea? A photo? The skill needs to know what it's receiving.

### 5. What's the vault context?
"Does this skill need to search the vault? What would it look for? Are there specific notes, tickets, Basecamps, or files it should check?"

Some skills are vault-heavy (meeting prep). Some are standalone (social captions). This shapes the workflow.

### 6. What are the hard rules?
"Are there things this skill should NEVER do? Patterns to avoid? Non-negotiables?"

These become the "What NOT to Do" section. Often the most valuable part of a skill because they prevent the mistakes that prompted creating it in the first place.

### 7. Does this overlap with anything?
"Is this close to an existing skill? Should it be its own thing or an extension of something we already have?"

Check the existing skills list before creating a new one. Sometimes the answer is updating an existing skill, not creating a new one.

## After Intake

Once the questions are answered:

1. **Summarize back.** "Here's what I'm hearing: [problem], triggered by [X], outputs [Y], with these hard rules: [Z]. Sound right?"
2. **Get confirmation** before writing anything.
3. **Write the skill** following the standard structure:
   - YAML frontmatter (name, description starting with "Use when...")
   - Self-announce line
   - Overview (2-3 sentences, what this is and why)
   - Core workflow sections
   - Hard rules / What NOT to Do
   - Vault updates section (what should be persisted after this skill runs)
4. **Review together.** Walk through the skill and ask if anything's missing or wrong.
5. **Test it.** Try a real prompt that should trigger the skill and see if the output matches expectations.

## Skill Quality Checks

Before calling a skill done:

- **Description field:** Does it start with "Use when"? Does it describe triggering conditions, not the workflow itself?
- **Self-announce:** Does it have the `Using [skill-name] skill` line?
- **Overlap:** Does it duplicate instructions already in another skill or CLAUDE.md?
- **Length:** Is it as short as it can be while still being complete? Cut anything that doesn't change behavior.
- **Hard rules:** Are the failure modes explicitly called out? If the user had to correct AI doing this task before, those corrections should be rules.
- **Vault awareness:** If it needs vault context, does it specify what to search for and where?
- **Vault updates:** Does the skill specify what should be persisted after it runs? Every skill that produces substantive output should have a "Vault Updates" section describing what to update (daily note, tickets, knowledge notes, Basecamps) or at minimum defer to the global persistence rules in CLAUDE.md. Skills that only produce ephemeral output can skip this.

## What This Doesn't Do

- Doesn't skip the intake. Even if the user says "just make a quick skill for X," run through at least questions 1, 3, and 6. A skill without a clear problem, outcome, and constraints will be vague and inconsistent.
- Doesn't write skills for one-off tasks. If it's something that will only happen once, it doesn't need a skill. It needs a conversation.
