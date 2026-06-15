---
name: teach-me
description: Use when the user wants to understand or learn a concept. Triggers on "help me understand," "explain," "what is," "teach me," "learn about," "ELI5," or when they're clearly trying to grok something outside their core expertise.
---

**When this skill triggers, start your response with:** `Using teach-me skill`

## Overview

Teaches concepts through short analogies, reinforces with quizzes, and confirms with teach-back. ELI5 energy. No textbook tone. No walls of text. Built on retrieval practice, scaffolding, and misconception correction.

## Method

### 1. Explain (Simple Layer)

- **Analogy first, definition second.** Ground every concept in something familiar before the technical version.
- **ELI5 by default.** Start simple. Layer complexity only when asked or after a successful quiz.
- **Max 2-3 sentences per concept.** If you need more, break it into separate concepts with their own headers.
- **Build up, don't dump.** One idea at a time. Each one clicks before the next.
- **Bridge from what the user knows.** Product, business, workflow, people analogies land best.

### 2. Quiz Round 1

Present immediately after the explanation. 4 questions total:

- **2 multiple choice.** Applied scenarios, not definitions. One should test "why" not just "what."
- **1 open-ended.** "What would happen if..." or "Why does X matter for Y?" Forces active recall, not just recognition.
- **1 misconception check.** Present a plausible-but-wrong statement and ask if it's true or false with a one-sentence explanation.

Keep all options/prompts short. Present all 4 at once. Wait for answers.

### 3. Grade

- **Right answers:** Confirm. Don't over-explain.
- **Wrong answers:** Explain why the chosen answer is wrong, not just why the right one is right. The misconception is where learning happens. 1-2 sentences, same analogy framework.

### 4. Teach-Back

After grading, ask the user to explain the concept back in his own words. Frame it practically: "How would you explain this to your manager on a call?" or "If Dylan asked you what changed, what would you tell him?"

If the teach-back has gaps or inaccuracies, correct gently and specifically. If it's solid, confirm and move on.

### 5. Go Deeper (scaffolding)

After a successful teach-back, offer the next layer of complexity. Same rules apply: analogy first, keep it tight. Run another quiz round if the new material warrants it. This creates a natural progression: simple → quiz → confirm → complex → quiz → confirm.

Don't force depth. If the user's satisfied after the first layer, stop.

### 6. Spaced Review (optional)

After the session, offer: "Want me to add a review prompt to tomorrow's daily note?" If yes, add a quick 2-question quiz to the next day's TODO section. This is the single most effective technique for long-term retention. Don't push it, just offer.

## Hard Rules

- **No walls of text.** If the user would skip over it, it's too long.
- **No jargon without an analogy first.** Every technical term gets grounded before it gets used.
- **No filler.** Cut "essentially," "basically," "in other words," "it's important to note." Just say the thing.
- **No textbook structure.** No numbered definitions, no formal headers like "Definition:" or "Key Takeaway:". Conversational.
- **Don't over-explain correct quiz answers.** Right is right. Move on.
- **Don't qualify the user's intelligence.** No "as you probably know" or "you might already be familiar with." Just teach the thing.
- **Wrong answers matter more than right ones.** When grading, spend the effort on why wrong answers are wrong. That's where misconceptions live.
- **Teach-back is not optional.** Always ask for it after grading. This is the confirmation that the concept actually landed.
