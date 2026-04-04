---
name: onboarding
description: First-run experience for new noteOS users. Detects a fresh vault (empty About Me section), welcomes the user, and runs a guided conversation to personalize the system. Also available as /onboarding for manual re-runs.
---

# Onboarding

## When This Triggers

**Automatically:** When the "About Me" section in the instruction file (CLAUDE.md) is empty. This means it's a fresh vault and the user hasn't been onboarded yet. On detecting this, run the onboarding flow before responding to whatever the user typed.

**Manually:** When the user types `/onboarding` or asks to update their profile. Skip the welcome and go straight to the questions, updating what's already there.

## Overview

This is the user's first real interaction with noteOS. It should feel like meeting someone who's going to be working alongside you every day. Curious, warm, useful. Not a setup wizard or intake form.

The goal: by the end of 5-7 questions, the vault has enough context that the second session already feels different from a blank chat. The user has a personal Basecamp they can go look at, the instruction file knows who they are, and the system is ready to start being genuinely useful.

## Workflow

### 0. Detection

Check the "About Me" section in the instruction file. If it's empty (just the heading with no content below it), this is a fresh vault.

**If fresh vault:** Start with Step 1 (Welcome), regardless of what the user typed. This is the one time the system overrides the user's input.

**If already populated:** Don't run onboarding. Respond to the user normally.

**If manually triggered (/onboarding):** Skip the welcome. Say something like "Let's update your profile. I'll ask a few questions and update the vault as we go." Then go to Step 2.

### 1. Welcome

Greet the user warmly. Keep it brief. Set expectations for what's about to happen.

Something like:

> "Welcome to noteOS! Before we dive in, I'd like to get to know you a bit so I can set this up around how you actually work and think. I'll ask a few questions, one at a time. As you answer, I'll be building out your vault in real time. Your first note, your profile, your preferences. By the end of this conversation you'll have a personalized system ready to go.
>
> If you'd rather skip this and set things up yourself, just say so. You can always run /onboarding later."

Don't recite the whole noteOS pitch. They already read the README. Get into the conversation.

### 2. Ask Questions

One question per message. React to answers before asking the next one. Make connections. Show genuine interest. This is a conversation, not a questionnaire.

**Question sequence (adapt naturally, don't follow rigidly):**

**Q1: Who are you?**
"What's your name? And what do you do? Doesn't have to be your job title. Could be your role, what you spend your time on, however you'd describe yourself."

*This fills: Basecamp title, About Me opening, MEMORY.md basics*

**Q2: What are you working on?**
"What's on your plate right now? Active projects, things you're focused on, areas you're spending the most time and energy in. Work, personal, both."

*This fills: Active Projects section, Basecamp content, first Current Context threads*

**Q3: Who are the key people?**
"Who comes up a lot in your world? Coworkers, clients, family, collaborators. Names I should know and spell correctly."

*This fills: People section in instruction file, Basecamp references*

**Q4: How do you like to work with AI?**
"How do you like to communicate? Direct and terse, or detailed and thorough? Any pet peeves with AI? Things you want me to always do or never do?"

*This fills: Communication style preferences in instruction file, feedback memories*

**Q5: What brought you here?**
"What are you hoping to get out of noteOS? What problem are you solving, or what are you curious about?"

*This fills: Basecamp context, informs how to frame everything, MEMORY.md goals*

**Q6: Anything else?**
"Anything else you want the system to know about you from the start? Hobbies, interests, quirks, things that matter to you. There's no wrong answer here."

*This fills: Basecamp personal section, potential future Basecamp seeds*

**Adapting the flow:**
- If someone gives a short answer, don't push. Move on.
- If someone goes deep on a question, let them. You might get answers to later questions naturally.
- If an answer reveals something interesting, react. "Oh you're into backcountry skiing? That's the kind of thing that builds great notes over time."
- Skip questions that have already been answered through earlier responses.
- 5-7 questions total. Don't stretch it. Read the room.

### 3. Build the Vault

After each answer (or in batches if the conversation flows quickly), write to the vault. Don't wait until the end. Show the system working in real time.

**Personal Basecamp (the centerpiece):**

Create `Map/About [Name].md`. This is their first Basecamp. Structure it like a real note:

```markdown
## Compass

[Name]'s personal profile in noteOS. Who they are, what they're working on, what matters to them. This note grows as the system learns more.

---

## Profile

[Natural paragraph about who they are, based on Q1 and Q6. Written like a note, not a form field.]

## What I'm Working On

[Active projects and focus areas from Q2. Each as a brief description.]

## People

[Key people from Q3, with context about who they are and how they relate.]

## Goals for noteOS

[What they're hoping to get out of the system, from Q5.]

## Trails

- [[Current Context]] . Cross-session whiteboard
- [Any other notes created during onboarding]
```

Write this with personality. It should read like a real document about a real person, not a template with blanks filled in.

**Instruction file (CLAUDE.md):**

Fill in these sections based on the conversation:
- **About Me:** Brief paragraph. Role, context, enough for AI to calibrate.
- **Active Projects & Areas of Focus:** Bulleted list of what they mentioned.
- **People (Correct Spellings):** Names and who they are.
- **Communication style additions:** If they mentioned preferences, add them to the conventions or communication section.

Keep the instruction file lean. It loads every session. Put the rich detail in the Basecamp, the functional essentials in the instruction file.

**MEMORY.md:**

Seed with initial entries:
- User profile basics (role, goals, knowledge level)
- Any preferences or pet peeves they mentioned
- What they're hoping to get out of noteOS

Follow the existing MEMORY.md format with frontmatter-based memory files if that's how the vault is structured, or inline entries if it's simpler.

**Daily note:**

Create today's daily note with a Body entry:

```markdown
### noteOS Onboarding
#noteos

First session. Set up personal profile, instruction file, and initial context. See [[Map/About [Name]|About [Name]]] for the full profile.
```

**Current Context:**

Create or update Current Context with active threads from what they mentioned. Even if it's just one or two items. Gives /pickup something to work with tomorrow.

### 4. Close the Onboarding

After the questions are done and the vault is built, give a brief summary of what was created. Don't list every file. Focus on what matters:

> "You're all set. I created your personal Basecamp in Map/, updated the instruction file so I'll remember who you are every session, and started your first daily note. Your vault is live.
>
> A few things to know going forward:
> - **Just start talking.** Whatever you're working on, thinking about, need help with. The system learns as you use it.
> - **Type /remember when you've covered meaningful ground.** It saves everything to the right places.
> - **Type /pickup when you start a new session.** It catches you up on where you left off.
> - **If you have Obsidian, open the vault folder there.** You'll see your notes, the links between them, and the graph view that shows how everything connects. Not required, but it's the best way to browse your vault visually.
>
> What would you like to work on first?"

That last question transitions them from onboarding into actually using the system. The vault is no longer blank. They're a user now.

## Hard Rules

- **One question at a time.** Never stack questions in one message.
- **Conversational, not transactional.** React to what they say. Don't just process it and move on.
- **Show the work.** Mention when you've written something. "I just added that to your profile."
- **Keep the instruction file lean.** Rich detail goes in the Basecamp. Functional essentials go in CLAUDE.md.
- **Don't oversell.** Be honest about what the system is and isn't. "This gets more useful over time" is better than "this will change your life."
- **Respect the skip.** If they want to skip onboarding, let them. Fill in a minimal About Me ("User chose to set up manually") so the detection doesn't trigger again.
- **Handle re-runs gracefully.** If /onboarding is run on a populated vault, update what's there. Don't start from scratch. "Looks like you've already been set up. Want to update any of your profile info?"
- **Don't assume Obsidian.** Suggest it, don't require it. noteOS works with any way of reading markdown files.
- **Link everything.** The personal Basecamp should link to Current Context and any other notes created. The daily note should link to the Basecamp. No orphans, even on day one.
