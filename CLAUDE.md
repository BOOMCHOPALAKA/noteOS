# noteOS — Your Instruction File

> **This is a working system you can use out of the box.** Every convention below was developed through months of real daily use. Just fill in the personal sections (About Me, Active Projects, People) and start using it. Or just start talking to AI and have it fill them in for you based on your conversations. Customize everything over time as you develop your own preferences.

**Why is this called CLAUDE.md?** Claude Code auto-discovers this filename. The starter vault includes symlinks (`GEMINI.md`, `AGENTS.md`, `.cursorrules`, `.windsurfrules`, `.clinerules`, `.github/copilot-instructions.md`) that all point back to this file. Every major AI tool finds its expected instruction file automatically. One file to maintain, every tool picks it up. If you need tool-specific instructions, replace the symlink with a real file.

---

## Core Behaviors

These are the non-negotiable habits that make the system work. Follow these on every message, every task, every note.

1. **Read [[Current Context]] at the start of every session.** This is the cross-session whiteboard. It has what's active, where things left off, and what needs attention next. Read it before doing anything else. If a topic comes up mid-conversation that you haven't loaded context for, check Current Context and the linked files before responding.
2. **Search the vault before responding.** Before answering any question or starting any task, search for existing context. Check Map/ for a relevant Basecamp, search keywords across the vault, follow links from what you find. Never say "I don't have information on that" without searching first.
3. **Link every note to the web.** Before finishing any note creation or update, verify: does this note link to at least one existing Basecamp or related note? If not, search the vault for connections before saving. No orphan notes.
4. **Persist everything that matters.** Every session should leave the vault richer than it started. If something substantive was discussed and nothing was written down, something went wrong. When in doubt about whether to save something, ask. Never default to doing nothing.
5. **Ask before making large changes.** Don't rewrite documents, restructure notes, or make sweeping edits unless explicitly asked. When given a small task, make a small change. When uncertain about scope, ask.

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

---

## Searching the Vault

**This applies to every message, not just the first one in a session.** Any time the user references something by name, topic, or implied shared context, search the vault BEFORE responding. The trigger is: "Could the vault have context on this?" If the answer is "maybe" or higher, search first.

**How to search:**
1. Check `Map/` for a relevant Basecamp. Read its Compass and Trails to orient yourself.
2. Search for keywords, names, or topics across the vault.
3. Follow links from what you find to build fuller context.

**Why this matters:** The vault is a shared knowledge base built over time. When someone says "I finally got those boots we talked about," they expect you to already know you did a sizing deep-dive together. A generic response signals you're not using the system. The goal is conversational continuity. It should feel like picking up a conversation with someone who was there last time, not starting fresh every message.

**If the vault doesn't have it and it's a general knowledge or research question, automatically search the web.** Don't stop after the vault search and ask if the user wants you to look it up. The flow is: vault first, web search second, then respond. Only ask clarifying questions if the question itself is ambiguous, not because you ran out of internal knowledge.

---

## Persisting Knowledge

The vault only works if things actually get written to it. Don't wait for the user to remember to say "save that." Be proactive about persistence at three levels:

**Tier 1: Auto-log (just do it, no need to ask)**
- Workouts, activities, fitness data
- Gear/purchases that arrived (especially if there's an existing note to update)
- Quick personal updates
- Meeting summaries and transcript processing

When something in Tier 1 comes up in conversation, write it to the daily note as part of your response. Don't ask, don't wait, don't batch it for later. Daily note Body sections (Work, Personal) only. Never Recap.

**Tier 2: Nudge in the moment (flag it, let the user decide)**
- Decisions or conclusions reached during discussion
- Research findings or recommendations
- New information about people, projects, or relationships
- Plans or intentions ("I think I'm going to..." or "We should probably...")
- Updates to existing knowledge notes

When something in Tier 2 comes up, flag it right then: "Want me to capture this in [specific place]?" or "This updates what we have in [note name], want me to add it?" Don't wait until the end of the session.

**Tier 3: End-of-session sweep (catch what fell through)**
- When the conversation is winding down or there's a natural stopping point after a long session: review what was discussed and surface anything substantive that hasn't been persisted yet.
- Be specific: "We covered X, Y, and Z today. X is already in the daily note. Want me to capture Y as a note?"
- This is the safety net, not the primary mechanism.

**When in doubt about which tier, default to Tier 2 (ask). Never default to doing nothing.**

### After any skill produces output

When a skill generates substantive output (analysis, next steps, drafted messages, meeting summaries, email reviews, etc.), check whether the vault needs updating before moving on. Common updates:
- **Daily note:** Log what happened (emails sent, decisions made, new info surfaced)
- **Tickets/project notes:** Update status, add history entries, note new blockers or resolutions
- **Knowledge notes:** Update when new info changes understanding of a system, project, or person
- **Basecamps:** Update when something changes how someone would understand the whole territory

Some skills handle vault updates explicitly in their workflow. For all others, apply the same tier logic: auto-log routine updates, nudge on substantive ones, never default to doing nothing. If the skill output changed something or produced a decision, the vault should reflect that.

### Should this become a note?

After any substantive input, pause and consider:

- **Daily note entry** — for routine things: a quick update, a workout, something that happened today. Just log it. No need to ask.
- **Standalone note** — for anything with more substance: a detailed decision, a trip plan, a project kicking off. Ask first: "Want me to save this as a note?"
- **Basecamp** — when a topic is clearly going to have a lot of sub-notes around it. "This feels like it could use a Basecamp. Want me to set one up?"
- **"Remember this"** — when the user says "remember this" or "just remember that," they want something captured without overhead. If it's a preference or instruction, add it to this file. If it's a learned fact, add it to MEMORY.md. Confirm what you added and where.

**Examples:**
- User pastes a meeting transcript → process it, create the summary, add to daily note. No need to ask.
- User describes a conversation with a contractor → "Want me to save this as a note? I can link it to a Home Renovation Basecamp if you have one, or create one."
- User shares thoughts on a decision → "This feels worth capturing. Want me to create a decision note so you can reference the reasoning later?"
- User mentions a new person who's going to come up a lot → "Sounds like [Name] is going to come up again. Want me to add them to your People section?"

---

## Linking

**Links are the backbone of this vault.** There are no deep folder hierarchies. Links do the organizing. Every link makes the vault more navigable and strengthens the knowledge graph. A note with no links is an orphan that may never be found again.

**Before finishing any note creation or update:** search the vault for related notes and Basecamps. On first mention of any topic that has an existing note or Basecamp, link to it. If you can't find any connections, say so. Don't silently create an unconnected note.

**When to link:**
1. **Cross-vault connections** — Link to Basecamps, related notes, and source documents
2. **Internal navigation** — Link between summary and detail sections using `[[#Heading Text|display text]]`
3. **Bidirectional** — If section A references section B, link both ways
4. **Related discussions** — Cross-link sections covering the same topic from different angles

**How to link smartly:**
- Use descriptive link text: `[[Project X Basecamp|Project X]]` not bare `[[Project X Basecamp]]`
- In Basecamps, use the "Trails" section for curated outbound links. In regular notes, use "Related" or "See also" sections
- Don't over-link: first mention gets a link. Repeated mentions in the same section don't need links
- Link to context, not just keywords. Link when it adds understanding, not just because words match
- **Always use `[[#Heading]]` syntax for same-note links, never markdown-style `[text](#slug)` anchors** — Obsidian's slug generation is unreliable with special characters

**Hashtag usage:**
- Use hashtags for filtering and discovery: `#work #meetings #decisions`
- Keep tags consistent across related notes
- Don't hashtag everything. Use them where they help organize or surface content

---

## General Conventions

- Read the relevant Basecamp in Map/ first to understand a topic before diving into individual notes.
- If adding a new note, place it in root unless it's a Basecamp (Map/) or template (Templates/).
- Preserve existing link structures. Obsidian relies on `[[wiki links]]`.
- Basecamps use a **Trails** section (not "Related") for curated outbound links. Trails are the paths worth taking from that Basecamp. Not everything that mentions the topic, just the notes that genuinely matter if you're exploring that territory. Every link should earn its spot.

---

## Meeting Summary Conventions

For the full workflow (speaker ID, TODO extraction, vault linking, takeaway analysis), see `skills/meeting-processing/SKILL.md`.

Search the vault for existing notes on the meeting topics before writing. Link to them. Extract TODOs only for items you own, are the bottleneck on, need to chase someone about, or are accountable for. Other teams' internal work stays off your TODO list. Always identify speakers and get sign-off before writing the summary.

---

## Daily Note Structure

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

---

## Activity & Fitness Log

For the full format and rules, see `skills/activity-logging/SKILL.md`.

Log workouts under `## Personal` in the daily note Body. One line of stats, one line of how it felt. The subjective feel line is the most valuable part. Tag `#fitness`.

---

## Morning Brief

For the full briefing structure and customization, see `skills/morning-brief/SKILL.md`.

When asked for a morning brief, generate a structured daily briefing covering: vault state of things (what's active, focus items for today), weather, and news. Write it to the daily note as `## Morning Brief` under `# Body` AND output in chat. The brief grows richer as the vault fills in. On day one it's mostly news and weather.

---

## Weekly Status Reports

For the full workflow (sourcing, structure, external sharing format), see `skills/weekly-status-report/SKILL.md`.

When asked for a weekly report: COMPLETED, IN PROGRESS, DECISIONS, UPCOMING, NOTES. Informative and succinct. Plain language, no buzzwords. Never reference vault-internal work. These are for people who don't have vault access.

---

## Communication Style

For the full drafting framework (voice calibration, pre-draft protocol, context-specific registers), see `skills/drafting-voice/SKILL.md`.

<!-- Customize the baseline below to match how YOU actually communicate. -->
<!-- Share writing samples (emails, messages) so AI learns your specific voice over time. -->

**Always-on rules (apply to all output, not just drafting):**
- Conversational and direct. Plain language over jargon.
- Don't agree just to be agreeable. Push back when something seems off.
- No corporate buzzwords. No walls of text without structure.
- Don't over-explain. If the point is made, move on.

---

## Memory

Things AI learns across conversations live in MEMORY.md, not here. This file is for instructions. MEMORY.md is for learned context. See MEMORY.md for details.
