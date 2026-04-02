---
name: morning-brief
description: Use when the user asks for a morning brief, morning update, daily brief, daily kickoff, or "start my day." Delivers a structured daily briefing covering vault state, weather, and news, written to the daily note and output in chat.
---

# Morning Brief

## Overview

Daily morning briefing that orients the user on what's active, what needs attention, and what's happening in the world. **Always write to the daily note AND output in chat.** Never write silently to file.

**Placement in daily note:** `## Morning Brief` section at the bottom of `# Body`, after `## Work` and `## Personal`. Standalone peer section, not nested.

## Sections

### 1. Vault. State of Things

Read today's daily note and the previous day's note. Summarize what's active, what moved, and what needs attention.

- 3-5 focus items for today. Not a TODO rehash. The things that actually matter.
- Flag anything sitting too long, blocked, or approaching a deadline.
- This section gets richer as the vault grows. On day one it's sparse. After a few weeks it knows the user's projects, open threads, and priorities.

### 2. Weather

Run `curl -s "wttr.in/?format=3"` for today's forecast. Single line. If location is wrong (IP-based), the user can customize the command with their city.

### 3. News

Search the web for today's headlines. Cover what's most relevant based on the user's vault (ongoing situations, relevant industries, topics they've been tracking). At minimum: major world news, tech/AI news, and anything that might affect their work or projects.

- Headline + 2-3 sentences of context with source link
- Keep it scannable, not comprehensive
- Prefer wire services (AP, Reuters) and independent outlets over cable news

### Customization

At the end of the first brief, add:
> Want to customize this? Tell me what to add, remove, or change. More detail on a project, different news categories, fitness recap, anything. The brief grows with your vault.

After the user customizes, follow their preferences in future briefs without repeating the prompt.

## Format

```
## Morning Brief

### State of Things
[Vault summary. Active threads, what moved, open questions]

**Focus today:**
- [Item 1]
- [Item 2]
- [Item 3]

### Weather
[Single line from wttr.in]

### News
#### [Headline]
[2-3 sentences + source link]

#### [Headline]
[2-3 sentences + source link]
```

## Notes
- Don't write to the Recap section. The brief goes in `## Morning Brief` under `# Body`.
- Generate fresh each morning. Not updated throughout the day.
- If the vault is new and sparse, lead with news and weather. Note that the vault section fills in as they add more content.
