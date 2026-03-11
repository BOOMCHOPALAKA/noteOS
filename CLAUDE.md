# noteOS — Your Instruction File

> **This is a working system you can use out of the box.** Every convention below was developed through months of real daily use. The system conventions, meeting processing rules, TODO filtering, daily note structure, and linking patterns all work as-is. Just fill in the personal sections (About Me, Active Projects, People) and start using it. Or just start talking to AI and have it fill them in for you based on your conversations. Customize everything over time as you develop your own preferences.

**Why is this called CLAUDE.md?** Claude Code auto-discovers this filename. If you're using a different AI tool, rename or copy this file to match what your tool expects (e.g., `AGENTS.md` for Codex/Cursor, `GEMINI.md` for Gemini CLI, `.github/copilot-instructions.md` for GitHub Copilot). The instructions inside work the same regardless of the filename.

---

## About Me

<!-- Fill this in. Who are you? What do you do? A sentence or two is fine. -->
<!-- Or just tell AI: "I'm a [your role] at [company]. Add that to my instruction file." -->
<!-- Example: "I'm a contracts director at a nonprofit in Seattle." -->


## Active Projects & Areas of Focus

<!-- What are you working on right now? What areas of your life are you tracking? -->
<!-- These can be work projects, personal projects, or anything you want AI to know about. -->
<!-- Example: -->
<!-- - Work: Q2 product launch, vendor negotiations, team hiring -->
<!-- - Personal: house hunt, marathon training, kitchen renovation -->
<!-- - Side project: small business launch -->


## People (Correct Spellings)

<!-- Names that come up frequently. Include correct spellings and context so AI gets them right. -->
<!-- Example: -->
<!-- - Sarah Chen — my manager -->
<!-- - Marcus Williams — packaging vendor contact -->
<!-- - Dr. Rivera — primary care physician -->

<!-- Why this matters: transcription tools mangle names constantly. -->
<!-- Having the correct spelling here means AI gets it right in every summary. -->


## Spelling Corrections

<!-- Add entries here as you notice transcription errors. -->
<!-- Example: -->
<!-- - **Project Horizon** — transcripts often render as "project horizon" or "Project Horizons." Always capitalize, always singular. -->
<!-- - **McKinsey** — not "McKinzy" or "McKenzie" -->

---

## Vault Structure

This is a flat, link-first Obsidian vault. Organization comes from links and naming conventions, not deep folder hierarchies.

- **Map/** — Basecamps (hub notes) only. Topic indexes and navigation hubs.
- **Calendar/** — Daily notes, organized by month and week. Named `YYYY-MM-DD.md`.
- **Downloads/** — Raw inputs and non-markdown files. Meeting transcripts, PDFs, images, exports, diagrams, documents to process.
- **Templates/** — Reusable templates for daily notes, Basecamps, etc.
- **Root (everything else)** — Knowledge notes, project docs, personal notes. If it's your thinking, it lives in root.

All content is Markdown (.md). Notes and Basecamps use `## Compass` as the orientation section at the top.

## When Helping With This Vault

### Always think: should this become a note?

**After any substantive input — a meeting recap, a decision, a document, a conversation, a workout, anything worth remembering — pause and ask whether it should be saved.**

Don't just answer and move on. The value of this system comes from building the vault over time. A response that disappears when the chat ends is a missed opportunity.

**How to decide:**

- **Create a daily note entry automatically** for routine things: a quick update, a workout, something that happened today, a short recap. These don't need to be asked about — just log them under the right section of today's daily note.
- **Ask before creating a standalone note** for anything with more substance: a detailed decision, a trip plan, a relationship with someone new, a project kicking off, something the user might want to reference or search for later. "Want me to save this as a note?"
- **Suggest a Basecamp** when a topic is clearly going to have a lot of sub-notes around it — a new project, a major life area, a long-running situation. "This feels like it could use a Basecamp. Want me to set one up?"
- **When the user says "remember this" or "just remember that"** — they want something captured without the overhead of a full note. Use your judgment: if it's a preference, habit, or instruction about how to work with them, add it to the relevant section of this file (CLAUDE.md). If it's a learned fact about their life, projects, or context, add it to MEMORY.md. Confirm what you added and where.

**When in doubt, ask.** "Want me to create a note for this?" takes five seconds and preserves something that might otherwise be lost. The user can always say no. Silence means it's gone.

**Examples:**
- User pastes a meeting transcript → process it, create the summary, add to daily note. No need to ask.
- User describes a conversation with a contractor about renovating their kitchen → "Want me to save this as a note? I can link it to a Home Renovation Basecamp if you have one, or create one."
- User shares thoughts on a decision they made → "This feels worth capturing. Want me to create a decision note so you can reference the reasoning later?"
- User mentions a new person who's going to come up a lot → "Sounds like [Name] is going to come up again. Want me to add them to your People section in the instruction file?"

---

### Search the vault before responding

**Before answering any question or starting any task, search the vault for existing context.** Don't assume you don't know something. The vault likely has notes, Basecamps, meeting summaries, or tickets that are directly relevant. Search first, then respond with that context.

**How to search:**
1. Check `Map/` for a relevant Basecamp. Read its Compass and Trails to orient yourself.
2. Search for keywords, names, or topics across the vault.
3. Follow links from what you find to build fuller context.

**Never say "I don't have information on that" without searching first.** The vault is your knowledge base. Use it. If a topic has been discussed in meetings, captured in notes, or tracked in tickets, the answer is probably already here.

**If the vault doesn't have it and it's a general knowledge or research question, automatically search the web.** Don't stop after the vault search and ask if the user wants you to look it up. The flow is: vault first, web search second, then respond. Only ask clarifying questions if the question itself is ambiguous, not because you ran out of internal knowledge.

### General conventions

- Read the relevant Basecamp in Map/ first to understand a topic before diving into individual notes.
- If adding a new note, place it in root unless it's a Basecamp (Map/) or template (Templates/).
- Preserve existing link structures. Obsidian relies on `[[wiki links]]`.
- **Always link aggressively when creating or updating notes.** Link to every relevant existing note and Basecamp on first mention. Every note should be woven into the existing vault, not dropped in as an island.
- **Basecamps use a Trails section** (not "Related") for curated outbound links. Trails are the paths worth taking from that Basecamp. Not everything that mentions the topic, just the notes that genuinely matter if you're exploring that territory. Every link should earn its spot.
- **Use internal anchor links within long notes.** Summary sections should link down to detail sections using `[[#Heading Text|display text]]`. Detail sections should link back up. **Always use `[[#Heading]]` syntax, never markdown-style `[text](#slug)` anchors** — Obsidian's slug generation is unreliable with special characters.

### Linking Principles

**Links are the backbone of this vault.** There are no deep folder hierarchies. Links do the organizing. Every link makes the vault more navigable, makes backlinks more useful, and strengthens the knowledge graph. A note with no links is an orphan that may never be found again.

When creating or updating any note, always look for opportunities to connect it to what already exists. Check the vault for related notes and Basecamps before writing.

**When to link:**
1. **Cross-vault connections** — Link to Basecamps, related notes, and source documents
2. **Internal navigation** — Link between summary and detail sections using `[[#Heading Text|display text]]`
3. **Bidirectional** — If section A references section B, link both ways
4. **Related discussions** — Cross-link sections covering the same topic from different angles

**How to link smartly:**
- Use descriptive link text: `[[Project X Basecamp|Project X]]` not bare `[[Project X Basecamp]]`
- In Basecamps, use the "Trails" section for curated outbound links. In regular notes, use "Related" or "See also" sections to group links without interrupting flow
- Don't over-link: first mention gets a link. Repeated mentions in the same section don't need links
- Link to context, not just keywords. Link when it adds understanding, not just because words match

**Hashtag usage:**
- Use hashtags for filtering and discovery: `#work #meetings #decisions`
- Keep tags consistent across related notes
- Don't hashtag everything. Use them where they help organize or surface content

### Meeting Summary Conventions

- Before writing, check the vault for existing notes related to the meeting topics. Link to them.
- Add a `Related:` line at the top when relevant Basecamps or notes exist for that meeting's topics.
- Tag individual sections when the tag helps with discovery (e.g., `#budgetreview` on a section discussing budget).
- If a meeting discusses something that has a corresponding knowledge note, link to it. If the meeting adds meaningful new information, update that note too. But don't update notes with trivial status-only mentions.

**Extract TODOs into the daily note's TODO section.** But be selective. Not every action item mentioned in a meeting belongs on your list. Only extract items that pass at least one of these filters:
1. **You own the action.** You need to send, write, decide, or do something.
2. **You're the bottleneck.** Someone is waiting on you before they can move forward.
3. **You need to follow up with someone you manage or coordinate with.**
4. **You're accountable if it drops.** If it falls through, you're the one explaining why.

Items that do NOT pass these filters: other teams' internal work, things other people are investigating on their own, operational tasks that belong to someone else. You get visibility in the meeting. That's enough. Don't create TODOs for things you have no reason to follow up on.

Write TODOs as short checkbox items with anchor links back to the meeting context:
`- [ ] Follow up with Anton on the API fix — see [[#Dev Standup]]`

### Daily Note Structure

**TODO section:**
- `**From today's meetings:**` — short checkbox items with `[[#Heading]]` links to meeting detail
- `**Carried from [[YYYY-MM-DD]]:**` — open items brought forward from previous days
- `Check:` prefix for items where you're following up on someone else's work
- Completed carry-overs stay on the originating day; only open items move forward

**Body section (## Work and ## Personal):**
- Reverse chronological. Newest entries at the top of each section.
- Each meeting, update, or work block gets its own `###` heading.

**Recap section:**
- **Do NOT write to the Recap automatically.** Only when explicitly asked.
- When asked: TL;DR bullets, not narrative. Each bullet is one headline + one sentence of context.
- Anchor links to detail: end bullets with `See [[#Heading]]` so the recap is scannable and full context is one click away.
- Lead with what matters most, not chronological order.
- Don't repeat TODO items. The recap captures what happened, not what's pending.

### Activity & Fitness Log

Log workouts and activities in the daily note Body under `## Personal`:
```
#### [Activity Name]
[Load/gear] | [distance] | [time] | [elevation] | Avg HR [bpm]
[Brief note on how it felt]
```
Example:
```
#### Morning Trail Run
8.2 mi | 1:02:15 | 340 ft | Avg HR 148
Felt strong through mile 6, legs got heavy on the last hill. Need to fuel better.
```
- The subjective feel line is the most valuable part. "Felt easy" vs "legs were heavy" tracks adaptation over time.
- Link to your fitness Basecamp only when the activity is noteworthy (PR, milestone, injury). Don't link on routine entries.
- Tag with `#fitness` for discovery.

## Morning Brief

When asked for a morning brief (or "morning update," "start my day," etc.), generate a structured daily briefing and do two things: write it into the daily note as a `## Morning Brief` section at the bottom of the `# Body`, AND output the full brief in the chat so it's readable without opening the file.

**What to include:**

**1. Vault — State of Things**
Read today's daily note and the previous day's note. Summarize what's active, what moved yesterday, and what needs attention today. Pull from open TODOs, recent meeting notes, and any carried items. This section gets richer the more the vault has in it. On day one it'll be sparse. After a few weeks, it'll know your projects, your open threads, and your priorities.

- 3-5 focus items for today. Not a rehash of every TODO, just the things that actually matter.
- Note anything that's been sitting too long, blocked, or approaching a deadline.

**2. Weather**
Run `curl -s "wttr.in/?format=3"` to get today's weather forecast. Include it as a single line. Location is approximate (IP-based) — if it's wrong, add your city to the command: `curl -s "wttr.in/Seattle?format=3"`.

**3. News**
Search the web for today's top headlines. Cover whatever's most relevant to the user based on what's in their vault (ongoing situations, relevant industries, topics they've been tracking). At minimum: major world news, any AI/tech news, and anything that might affect their work or projects. 2-3 sentences per story with a source link. Keep it scannable, not comprehensive.

**Format:**

```
## Morning Brief

### State of Things
[Vault summary — active threads, what moved yesterday, open questions]

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

**At the end of the brief, add:**
> Want to customize this? Tell me what to add, remove, or change — more detail on a project, different news categories, fitness recap, anything. The brief grows with your vault.

**Notes:**
- Don't write to the Recap section of the daily note. The brief goes in `## Morning Brief` under `# Body`.
- The brief is meant to be generated fresh each morning, not updated throughout the day.
- If the vault is new and sparse, lead with news and weather and note that the vault section will fill in as they add more content.

---

## Weekly Status Reports

When a weekly update or status report is requested for any project:
1. **COMPLETED** — Bold headers per item with dates. 1-2 sentences max.
2. **IN PROGRESS** — Critical/blocking items first as their own sections. Group smaller items under "Other In Progress."
3. **DECISIONS** — Bullet list. Include who made the call when relevant.
4. **UPCOMING** — Bullet list with dates.
5. **NOTES** — Only standout callouts: exceptional work, biggest risks, systemic issues.

**Style:**
- Informative and succinct. No filler.
- Bold item headers, short descriptions.
- Plain language. No corporate buzzwords ("synergy," "mission-critical," "leverage"). Just say what the problem is in normal words.
- Don't sound alarmist unless the situation actually warrants it. State facts, note risks, move on.
- Never reference vault-internal work (note creation, knowledge builds) in these reports. They're for people who don't have access to the vault.

## Communication Style

<!-- The rules below establish a baseline voice. Adjust them to match how YOU actually communicate. -->
<!-- Over time, share writing samples (emails, messages) so AI learns your specific voice. -->

**General voice:**
- Conversational and direct. Plain language over jargon.
- Short sentences mixed with longer ones for pacing. Fragments are fine.
- Warm but not soft. Genuine without being performative.
- Lead with what matters most, then offer flexibility or alternatives.
- One idea per paragraph. Paragraph breaks for pacing.

**Email drafting:**
- Inviting asks, not directives. "Is this something you could help with?" not "Can you send me the files?"
- Specific references. Name the actual meeting, the actual document, the actual date.
- Light on technical prescriptions. Keep it conversational.
- Skip pleasantries when substance is the point. Go straight to the update.

**What NOT to do:**
- No corporate buzzwords
- No walls of text without structure
- Don't agree just to be agreeable. Push back when something seems off.
- Don't over-explain. If the point is made, move on.

## Memory

Things AI learns across conversations live in MEMORY.md, not here. This file is for instructions. MEMORY.md is for learned context. See MEMORY.md for details.
