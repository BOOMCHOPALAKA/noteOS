# noteOS - Your Personal Operating System. Powered by Simple Text Files, Supercharged by AI.
*The system that remembers what you don't.*

## What's New

**May 2026: More skills, cleaner sourcing**
The skill library grew to 22. New analytical skills: `analyze` (thinking partner), `go-deeper` (expand any thread on request), and `tldr` (stakeholder talking points). New email skills: a daily digest, a weekly digest, and deeper email analysis. Plus `update-notes` for quick mid-conversation vault flushes. The skills that write to your vault or go out to stakeholders now share a source-discipline rule: every concrete claim has to trace to a real source, and operational language ("going live," "should be ready") never gets upgraded into milestone language ("launched," "shipped"). The goal is a vault you can trust and reports you can stand behind.

**April 2026: Onboarding Experience**
Your first conversation with noteOS is now a guided setup. The system detects a fresh vault and walks you through a short conversation to personalize everything. By the end of a few questions, you have a personal Basecamp, a configured instruction file, and a vault ready to use. No manual setup required.

**April 2026: Skills System**
The vault now ships with a library of skills. Step-by-step workflow guides that AI follows for specific tasks. Process a meeting, analyze a situation, draft something in your voice, capture a session. Each one is a markdown file in `skills/` that loads when relevant and stays out of the way when it's not. Two highlights: `/remember` saves everything from your current session to the right places in the vault. `/pickup` reads what was saved and gets you back up to speed in a new conversation. Together they solve the biggest pain point in working with AI: losing context between sessions.

---

## Table of Contents
- [Imagine a World...](#imagine-a-world)
- [What This Actually Is](#what-this-actually-is)
- [What Changes](#what-changes)
- [How It Works](#how-it-works)
- [Your Knowledge, Your Files](#your-knowledge-your-files)
- [Getting Started](#getting-started)
- [Going Deeper](#going-deeper)
- [Reference](#reference)

---
## Imagine a World...

...where you had a personal Wikipedia for your life. Work, side projects, health, finances, travel, adventures, recipes. All of it connected, searchable, and growing every day. Fully interactive and conversational. You ask it questions and it answers with the full weight of everything you've ever put into it. If you can make a folder on your computer and type a message to AI, you're already there. 

That's noteOS.

**It remembers what you don't.** You had a conversation with your doctor three months ago. Or a contractor gave you a quote. Or you made a decision in a meeting and can't remember the reasoning. Instead of digging through emails or hoping you wrote it down somewhere, you ask. The system traces through your notes and gives you the answer with full context. Not because you organized everything perfectly. Because the system did.

**You pick up right where you left off.** You close your laptop Friday afternoon in the middle of a complex project. Or halfway through planning a trip. Or after a long conversation about a decision you're weighing. Monday morning you open a new chat, pick up where you left off, and you're back in it. What you were working on, where you stopped, what's still open. No re-explaining. No scrolling through old chats trying to reconstruct what happened.

**Things start connecting themselves.** You're planning a ski trip to the Alps and you're reminded of a hotel your friend raved about two years ago in a completely different conversation. You're experimenting with a new recipe and it connects back to a cooking class you took on vacation. Your life is full of these threads. The system finds them for you.

**It builds itself while you use it.** I thought I'd spend hours setting up folders and organizing notes. I didn't. I just type. I tell it what happened in a meeting, what I'm thinking about, what I need to remember. It creates the notes, links them to everything related, and the structure emerges on its own. Everything connects through links and references, like Wikipedia. You find things by following connections, not by remembering which folder you put something in.

The whole thing runs on plain text files and a free app. No code. No databases. You don't need to be technical. The system does the heavy lifting.

---

## What This Actually Is

You're probably already using AI. ChatGPT, Claude, Gemini, whatever. Maybe you've had it help draft an email, summarize a meeting, do some research. Maybe you've even set up custom instructions or used the memory features.

But there's a ceiling. And if you've used these tools enough, you've hit your head on it. Every conversation starts from scratch. You re-explain your projects, your preferences, your situation. You tell it things you've told it before. You double-check its answers because you know it's filling gaps with confident guesses. It's like working with a brilliant intern. Smart, fast, capable. But every morning they show up having forgotten everything from yesterday.

What if instead of managing that intern, you were working with a partner who already knew your projects, your history, and your preferences? Who you could trust to check their own work against real context? Who got sharper the more you worked together, not because the AI got smarter, but because the system around it got richer?

That's noteOS. A folder of plain text files, a free app to browse them, and AI that reads and writes inside them. Your instruction file loads every session, so AI already knows who you are. Your notes link to each other, so AI can trace connections you'd never find manually. And when you close your laptop Friday afternoon and come back Monday morning, you pick up right where you left off. What you were working on, what's still open, what needs attention. No re-explaining. No scrolling through old chats. The context carries forward because it lives in your files, not in a chat history that disappears.

The longer you use it, the better it gets. Not because the AI improved. Because your knowledge base got richer.

---

## What Changes

If you've been using Claude or ChatGPT for a while, you've probably built up your own bag of tricks. You tell it not to rewrite the whole document. You re-explain your context at the start of every chat. You paste in the same briefing docs over and over. All of that works. But it's manual, it's fragile, and it resets every time you start a new conversation. noteOS gives you a foundation where those problems get smaller the more you use it.

| | What you're probably doing now | What noteOS gives you |
|---|---|---|
| **Context** | Every new conversation starts from zero. You upload documents, set roles, say "ground this to these files." Every. Single. Time. | An instruction file loads automatically at the start of every conversation. AI already knows your projects, your people, your preferences. You just start talking. |
| **Memory** | Claude remembers fragments. A few saved facts, some vague conversation history. You still end up re-explaining what you're working on and what happened last week. | Your knowledge lives in structured files AI reads every session. Not fuzzy recall. Actual files you can open, read, and verify. The more you use the system, the richer they get. |
| **Control** | Ask Claude to fix one sentence and it rewrites the whole document. You learn to add "do not do anything until I say so" to every prompt. You're managing the tool instead of using it. | The instruction file comes pre-loaded with rules for when AI should act, when to ask, and what to leave alone. Not perfect out of the box, but when something goes wrong, you add a line and it doesn't happen again. |
| **Continuity** | Each conversation is an island. There's no way to tell AI "always check that document" or "remember everything from this project." It can't connect things across sessions on its own. | Save where you are at the end of a session. Pick up where you left off at the start of the next one. Your notes link to each other, AI searches across them, and the context compounds over time. New sessions start informed, not blank. |
| **Setup Tax** | You figure out the same tricks everyone else figures out. "Be concise." "Cite your sources." "Don't be polite." You re-type them every session, or forget, and wonder why the output got worse. | The instruction file ships with tested conventions for meeting processing, daily notes, TODO filtering, communication style, and more. Works on the first conversation. You customize over time. |

Think of it this way. If you had the world's best personal assistant, their value wouldn't just be their skills. It would be the six months they spent learning how you work, what you care about, and what's going on in your life. If they quit, all of that walks out the door. This system is like writing all of that down so the next assistant, or AI, can pick it up on day one. The intelligence is in the structure, not the tool.

### What this looks like in practice

To give you a sense of where this goes after a few months of just using it:

I manage a dev team across two clients. Early on I pointed Claude at our GitHub repos and had it analyze the commit history. Now it knows who built what, who has the deepest expertise in each part of the codebase, and where the knowledge gaps are. When an issue comes up, I can ask "who would be the best person to look at this?" and get a real answer based on actual contribution history.

I also run a small brewing cacao business on the side. I have a hub page for it (we call these Basecamps in noteOS) that links to supplier notes, customer order patterns, pricing strategy, product development ideas.

I'm into hiking, backcountry skiing, rucking. I exported my Garmin data into the vault and now whenever I log a workout, AI has years of context behind it. It knows my resting heart rate trends, my training patterns, my peak fitness benchmarks. It tells me things about my own data that Garmin never surfaced.

At work, I have Basecamps for each client with every stakeholder, every project, every decision linked and traceable. When someone mentions a name in a meeting, AI already knows who they are, what they work on, and what they said three weeks ago.

I didn't sit down and build any of that manually. It grew from conversations I was already having. That's the part that surprised me most. You don't maintain the system. You just use it and it builds itself.

You stop asking generic questions and start asking things only your vault can answer:

- **"I have a standup in 20 minutes. Catch me up on everything that's happened this week."** It reads your daily notes and recent updates and gives you a briefing.
- **"I'm planning a backpacking trip in August. What gear worked last time and what did I say I'd change?"** It finds your trip notes, your gear lists, that comment you made about your pack being too heavy.
- **"Draft a status report for this week. You know the format."** It does. Because the instruction file has your format, your voice, your conventions.
- **"Here's a meeting transcript. Process it."** It knows what that means. Summarize, extract your action items, update the daily note, link to relevant projects.
- **"When was the dog's last vet appointment and what did they say about her knee?"** It finds the note, the vet's recommendation, the follow-up timeline.

You don't get here on day one. But you get here faster than you'd think.

---

## How It Works

Three things work together:

1. **A folder of plain text files** that holds all your knowledge. Notes, meeting summaries, project docs, daily logs. Everything lives here.
2. **[Obsidian](https://obsidian.md)**, a free app to browse, search, and edit those files visually. Clickable links between notes, instant search, and a graph that shows how everything connects. Under the hood, it's just reading plain text files. You could delete Obsidian tomorrow and every file would still be there, readable in any text editor.
3. **An AI tool** (like Claude) that reads and writes inside the folder. It builds notes, makes connections, and answers your questions using everything you've put in.

That's the whole stack. A folder, a viewer, and an AI engine.

### The instruction file

This is what ties it together. There's a file called `CLAUDE.md` that AI reads at the start of every conversation. Think of it as a briefing document. Here's who I am. Here are my projects. Here's how I like things formatted. Here's what to do with a meeting transcript. The starter vault includes symlinks so every major AI tool finds its own version of this file automatically. One file to maintain, every tool picks it up.

You don't need to fill it all out before you start. Five lines puts you ahead of most AI users. "I'm a contracts director at a nonprofit. My main projects are X, Y, Z. I prefer concise summaries over detailed ones." That alone means every conversation starts with context instead of from scratch. Or just start using the system and let AI fill it in over time based on your conversations.

The starter vault ships with tested conventions that work out of the box:

- **Morning brief** . Ask for one and it pulls today's weather, top news, and whatever's active in your vault. Sparse on day one. Rich after a few weeks.
- **Daily notes** . It creates them, files them, keeps them organized. A running log of your day.
- **Processing anything you drop on it** . Meeting transcript, doctor's notes, a recipe, a contractor's quote. Drop it in and tell it what it is.
- **Vault search before answering** . Before it responds to any question, it reads your notes. Not guessing. Actually tracing through what you've built.
- **Voice and drafting** . Fill in the Communication Style section and it drafts messages that sound like you, not like a template.

When something goes wrong, add a line: "Don't do X. Do Y instead." When a new project kicks off, add it. When a name keeps getting mangled, add it to People. The file grows with you. That's how it gets personal.

### Using it is building it

You talk to AI. AI creates notes and links them to what's already there. Next time you talk to AI, it has more context to work with. Better answers, better notes, more connections. Round and round. The folder gets richer. AI gets sharper about your world. Not because it improved. Because your knowledge base did.

That's what surprised me most. You're not maintaining the system. You're building it by using it. Brainstorming, processing meetings, drafting documents, thinking out loud. All of it generates notes as a natural byproduct. Those same notes are what the system searches when you ask questions later. The more you put in, the more useful it gets.

---

## Your Knowledge, Your Files

Everything in this system lives in folders and files on your computer. Plain text. Nothing proprietary, nothing cloud-locked, nothing that belongs to a platform.

This matters because the AI landscape moves fast. Your workplace might standardize on ChatGPT this quarter and switch to Claude next quarter. With noteOS, you don't rebuild. Your folder is the constant. The AI tool is just what you plug into it today. Own the playbook, rent the tech.

---

## Getting Started

The whole thing takes about 20 minutes.

### Step 1: Download Obsidian

Go to [obsidian.md](https://obsidian.md) and download it. Free, works on Mac, Windows, Linux, and mobile. This is the app you'll use to browse and read your notes visually.

### Step 2: Get the starter vault

Download the starter vault from this [noteOS GitHub repo](https://github.com/BOOMCHOPALAKA/noteOS). Click the green **Code** button at the top of the page and select **Download ZIP**. Unzip it and put the folder somewhere on your computer. Desktop, Documents, wherever. You can rename the folder to whatever you want.

Open Obsidian, select **Open folder as vault**, and point it at the folder you just downloaded. You now have a working vault with:
- An **instruction file** (`CLAUDE.md`) pre-loaded with conventions for meeting processing, daily notes, linking, and more. Works out of the box.
- A **memory file** (`MEMORY.md`) that AI adds to over time as it learns your preferences.
- **Templates** for daily notes, Basecamps, meeting summaries, and weekly reports.
- The **folder structure** already set up and ready to go.

### Step 3: Connect your AI tool

This is where the magic happens. If you've used ChatGPT, Claude, or Gemini, you already know how to do this. You're still typing messages and getting answers in natural language. Nothing about how you interact changes.

The one difference: instead of chatting with AI that can only see what you paste into the conversation, you point it at your vault folder. Now AI can search through all your notes. When you tell it about a meeting, it creates the summary, files it, and links it to everything related. When you ask "what did we decide about X last month?" it traces through your notes and gives you a real answer.

**This does require a paid AI account.** The system needs an AI tool that can read and write files directly on your computer. That's a step beyond what free AI chat tools offer today. The cost is comparable to a streaming subscription, and the value compounds in a way Netflix doesn't.

The most complete option for non-technical users right now is **Claude** from Anthropic. It has two tools that both work out of the box:

**Claude Cowork** *(Recommended starting point)* is the easiest starting point and what most people should use. If you already have the Claude desktop app (or download it from [claude.ai](https://claude.ai)), Cowork is built right in. Here's how to connect it to your vault:

1. Open the Claude desktop app
2. Click the **Cowork** tab at the top (next to "Chat")
3. In the message area, click the **folder icon** and select your vault folder
4. Start typing

That's it. You're now chatting with the same Claude you already know, except it can read and write files in your vault. Create notes, process meeting transcripts, search across everything you've built. It can even handle longer tasks on its own, breaking things into steps and working through them while you do other things. The whole experience is visual and conversational. If you've used ChatGPT or Claude in the browser, this will feel immediately familiar. You just gained superpowers.

Cowork requires a paid Claude subscription (Pro at $20/month, Max at $100/month, or Team/Enterprise). [Getting started with Cowork](https://support.claude.com/en/articles/13345190-get-started-with-cowork)

**Claude Code** *(For technical users)* is a command-line tool. If you don't know what that means, skip this paragraph and stick with Cowork. You won't miss anything. Claude Code does the same thing as Cowork, just in a terminal window instead of a desktop app. You open a terminal, navigate to your vault folder, and type `claude`. It's a little more powerful and a little more flexible. You get more control over how AI interacts with your files, and it's more extensible if you want to customize how the system works under the hood. It's usage-based pricing, meaning you pay for what you use rather than a monthly subscription. If you're technical, curious, or want to grow into it, it's there when you're ready. [Getting started with Claude Code](https://code.claude.com/docs/en/overview)

**Both tools read the same instruction file, work inside the same vault folder, and produce the same notes.** You're not choosing a platform. You're choosing an interface. Everything you build is the same either way, and you can switch between them anytime.

#### What about other AI tools?

The vault is designed to be portable. Any AI tool that can read and write files in a local folder will work. The starter vault includes instruction files that every major tool auto-discovers: Claude, ChatGPT's Codex CLI, Gemini CLI, Cursor, GitHub Copilot, Windsurf, Cline. One file to maintain, every tool picks it up. See the [full compatibility table](#ai-tool-compatibility) in the Reference section below.

This is moving fast. Any of these providers could ship a Cowork equivalent tomorrow. When they do, your vault works with them immediately. No migration, no export, no starting over. That's the whole point.

### Just start typing

That's genuinely it. Say hello, ask a question, tell it what you're working on. Anything.

**Your first session is special.** The system detects that it's a fresh vault and kicks off a short onboarding conversation. It'll ask you a few questions. Who you are, what you're working on, how you like to communicate. As you answer, it builds out your vault in real time. Your personal profile, your instruction file, your first daily note. By the end of 5-7 questions, the system knows who you are and you have a personal Basecamp you can go browse. Every session after that starts with that context already loaded.

If you'd rather skip the onboarding and just start using it, just say so. You can always run it later.

**Some things to try:**

- **"Give me a morning brief."** Works on day one. Pulls today's weather, top headlines, and whatever's active in your vault. Sparse at first. After a few weeks it knows your open TODOs, your active projects, what happened yesterday.
- **"Create a daily note for today. Here's what I worked on..."** and give it a few bullets about your day.
- **"Here's a meeting I had today. Summarize it and add it to my daily note."** Paste in a transcript or your own notes.
- **"Create a Basecamp for [topic]."** A project you're managing, a trip you're planning, a side business you're running.

Start with whatever's on your mind today. The first few notes will feel like scattered dots. They start connecting fast.

**A few things to know:**

**The system knows what you tell it (by default).** Out of the box, it doesn't connect to your apps or pull data automatically. You give it information and it remembers and connects it. You control exactly what goes in. In practice, that looks like exporting data from apps you already use, telling it about your day in conversation, or dropping documents into the vault and telling it to process them. If you want to plug AI directly into your email, calendar, or other tools later, you can. See the "Optional: connecting AI to your data" section below.

**You can nudge it.** If something feels like it should be a note, say so. If a topic is getting big, ask "should we make a Basecamp for this?" If you want it to remember something small, just say "remember this." The system gets more proactive over time, but a nudge goes a long way.

**You can verify everything.** With a normal chat, "where did you get that?" gets a vague response. With a vault, AI points to specific notes. You can open them in Obsidian and check. It's not a guarantee of accuracy, but it's transparency you don't get anywhere else.

After a conversation, switch to Obsidian and take a look. Click a note. See how it links to others. After a few sessions, open the graph view (Cmd+G on Mac, Ctrl+G on Windows). Every note is a dot, every link is a line. What you'll see looks like a neural network. Clusters forming around your big topics, connections you didn't consciously create. That's when the whole thing clicks.

### Optional: connecting AI to your data

Some of the skills get noticeably better when AI can pull live data instead of waiting for you to paste it in. The email digest skills, for example, can either work on an export you drop in `Downloads/`, or pull straight from your inbox if AI has a live connection to your email. The vault stays the same either way. You just save a step.

These live connections are called **MCPs**, which stands for Model Context Protocol. Think of an MCP as a USB port for AI. Each one is a small adapter that lets your AI tool talk to a specific service (Gmail, Google Calendar, GitHub, Slack, whatever). You install the ones you want, AI uses them when relevant, and that's it.

**You do not need MCPs for noteOS to work.** Everything in this guide works without them. They are an optional upgrade for skills that touch outside data.

**The three that pay off the most for a noteOS user:**

- **Email** (Gmail, Outlook, or your provider's MCP). Makes the daily and weekly email digest skills work without exports.
- **Calendar** (Google Calendar or equivalent). Lets the morning brief see what's on your day, and lets meeting-related skills know what meeting you're talking about.
- **File storage** (Google Drive, Dropbox, etc.). Useful if you keep documents outside the vault and want AI to read them.

**How to install one.** Setup happens inside your AI tool, not inside the vault. The official docs are the right place to start, because the install steps change as the ecosystem matures. The Anthropic docs at [docs.anthropic.com](https://docs.anthropic.com) cover Claude Code and Claude Cowork. Most major services now publish their own MCPs with install instructions on their developer pages.

**Privacy note.** Adding an MCP means AI can read live data from that service. That data flows through your AI provider's API the same way your chat messages do. If you're already comfortable with how your AI tool handles conversation data, MCP data follows the same rules. If you handle anything sensitive (client work under NDA, regulated data, etc.), check your AI provider's terms before connecting an MCP to that source.

When you're not sure, start without MCPs. The vault is fully useful on its own. Add MCPs later when a specific skill makes you wish for one.

---

## Going Deeper

The basic system works with just notes and an instruction file. How far you go is entirely up to you.

**Start simple:**
- After a meeting or important conversation, tell AI what happened. It creates the note, links it, and organizes it. Or write it yourself in Obsidian. Both work.
- Keep a daily note. A few bullets about what you worked on, what's pending, any decisions made.
- When you make a decision, capture the reasoning. This is gold when you need to reference it later.

**Go deeper when you're ready:**
- Feed it documents from your life. Contracts, proposals, reports, recipes, research. Drop them in Downloads and tell AI to process them.
- Share your writing samples and let it learn your voice. Once it understands how you communicate, it can draft things that sound like you.
- Build out Basecamps with curated links for your most active areas. The more structured your Basecamps, the better AI navigates between topics.

### Session continuity: save and load

Two commands. `/remember` is the save. `/pickup` is the load.

You're in a session and you've covered a lot of ground. Decisions made, new information surfaced, things still open. Type `/remember`. AI reads the conversation, figures out what's substantive, and writes it where it belongs. Daily note, project notes, your cross-session context file. You don't have to explain what to save or where. It reads the conversation, reads the vault, and connects the dots. Use it whenever it feels right. Mid-session, end of session, multiple times in a long conversation. Think of it like hitting save.

Next session. Type `/pickup`. AI reads what was saved, traces the links, and gives you a concise briefing. Where you left off. What's active. What needs attention. Then it asks where you want to pick up. You pick one and you're back in it.

There's a practical reason this matters beyond convenience. AI tools have a context window. The longer a conversation goes, the more likely things get missed or go slightly off. Starting fresh sessions regularly is genuinely better practice. But only if you have a way to carry the important stuff forward. That's what remember does. You get the benefits of a clean slate without the cost of lost context.

The system also persists things proactively as you work. Auto-logging routine items, nudging you when something substantive comes up. But `/remember` is you taking control. The manual save that makes sure nothing gets missed.

### Skills: teaching AI how you work

Here's the problem skills solve. You process a meeting transcript and AI nails it. Speaker identification, TODO extraction, vault linking. Perfect. Then a week later you process another one and it misses half the steps. Not because it forgot. Because the new session interpreted the condensed instructions differently.

The fix: take the full workflow and put it in its own file. Not in the instruction file that loads every conversation. In a separate file that only loads when you need it. That's what skills are. Markdown files that walk AI through a proven workflow step by step. Consistent results, every session.

The instruction file tells AI who you are. Skills tell AI how to do specific things for you.

#### What skills look like in practice

You drop a meeting transcript in chat. AI loads the meeting processing skill and follows it. Identifies the speakers, presents a mapping for you to confirm, searches the vault for related notes, writes the summary, extracts only the TODOs you're responsible for, and gives you the "so what" layer. Not a summary rehash. The part where it tells you what changed, what connects, and what doesn't add up. Every session. Consistent.

You need to make a tough call. The analyze skill kicks in. It doesn't list pros and cons. It challenges your assumptions, steelmans the other side, separates what you know from what you're inferring. It pushes back when you're rationalizing. If you want to go deeper on any single thread, the go-deeper skill expands it.

You've covered a lot of ground in this session. Type `/remember`. Everything gets saved, linked, timestamped. Tomorrow, type `/pickup`. Caught up in 30 seconds.

#### 22 skills included

| Skill | What it does |
|---|---|
| Onboarding | First-run experience. Detects a fresh vault, walks you through setup, creates your personal Basecamp |
| Remember | Type `/remember` and AI saves what matters, where it matters, with links and timestamps |
| Pickup | Type `/pickup` to resume where you left off with a concise briefing |
| Pickup (Work) | Work-only variant of pickup. Filters to professional threads, pulls repo updates, groups by client |
| Meeting Transcript Processing | Speaker ID, summaries, TODO extraction, vault linking, takeaway analysis. Works with any transcript (Zoom, Teams, Otter, paste) |
| Analyze | Thinking partner that pushes back and stress-tests your assumptions |
| Go Deeper | Expand any thread of a prior analysis on request. Tight first pass, deeper dives when you ask |
| TLDR | Stakeholder-ready talking points. Default headline-and-bullets, or a five-section exec briefing |
| Situation Assessment | Paste a messy thread, get a clear picture of what's going on |
| Next Steps | Crystallizes "what now" after any discussion |
| Email Analysis | Pattern recognition across email exports. Surfaces what fell through the cracks |
| Daily Email Digest | Quick daily pull, filtered for noise, cross-referenced against your vault |
| Weekly Email Digest | Pattern-level view of the week. What moved, what's stale, what's waiting on you |
| Update Notes | Lightweight mid-conversation vault flush. "Update" and it just does it |
| Drafting Voice | Learns how you write and drafts messages in your voice |
| Morning Brief | Daily briefing with vault state, weather, and news |
| Status Report | Daily, weekly, or monthly. Sourcing, structure, and external sharing format |
| Activity Logging | Fitness and activity tracking to daily notes |
| Skill Creation | Guided intake for building your own skills |
| Ticket Creation | Scannable dev tickets that people actually read |
| Codebase Investigation | Systematic debugging with vault context |
| Codebase Team Assessment | Maps who knows what in a repo |

If you're using **Claude Code**, skills are discovered automatically. If you're using **anything else**, just tell your AI "read `skills/meeting-transcript-processing/SKILL.md` and follow it." They're just files. Any tool can read a file.

As you develop workflows that click, capture them. The skill creation skill walks you through the intake. What's the problem? What triggers it? What does good output look like? The skills you build become part of your system. They travel with your vault.

### Building the habit

First couple weeks: focus on daily notes and telling the system to save things worth remembering. When something goes wrong, add a correction to the instruction file. After a few weeks you'll notice topics keep coming up. Create Basecamps for those. After a month, your instruction file has real depth, your daily notes form a searchable journal, and connections are surfacing that you wouldn't have made on your own.

---

## Reference

### The vault structure

This is what the vault folder looks like on your computer. It's just a folder with subfolders and text files inside it.

```
My Vault/
├── Map/              ← Basecamps live here. Your topic hubs.
├── Calendar/         ← Daily notes, organized by month and week.
│   └── March/
│       └── Week 1/
│           ├── 2026-03-03.md
│           └── 2026-03-04.md
├── Downloads/        ← Raw inputs and non-text files. Transcripts, PDFs,
│                       images, exports, diagrams, anything to process.
├── Templates/        ← Instructions for AI on how to build notes.
├── skills/           ← On-demand workflow guides. Meeting processing,
│                       analysis, drafting, and more. Load when needed.
├── .github/
│   └── copilot-instructions.md  ← Symlink → CLAUDE.md (GitHub Copilot)
├── CLAUDE.md         ← Your instruction file. The single source of truth.
├── GEMINI.md         ← Symlink → CLAUDE.md (Gemini CLI)
├── AGENTS.md         ← Symlink → CLAUDE.md (OpenAI Codex, Cursor)
├── .clinerules       ← Symlink → CLAUDE.md (Cline)
├── .cursorrules      ← Symlink → CLAUDE.md (Cursor)
├── .windsurfrules    ← Symlink → CLAUDE.md (Windsurf)
├── MEMORY.md         ← Things AI remembers across conversations.
└── [everything else] ← Your notes. All in the root folder, not buried
                        in subfolders. Links do the organizing.
```

Every major AI tool looks for a different instruction filename. Instead of maintaining copies, the starter vault uses **symlinks** that all point back to `CLAUDE.md`. Edit one file, every tool picks up the changes. Works out of the box on Mac and Linux. On Windows, git may need `git config core.symlinks true` before cloning.

### Terminology

The system borrows its naming from backcountry travel:

- **Map** . The folder that holds all your Basecamps. Your territory overview.
- **Basecamp** . A home base note for a main topic. It provides a high-level overview of whatever the subject is and then also houses links and references to other more detailed notes on the subject.
- **Compass** . The orientation and summary section at the top of each note. Think of it like a TL;DR that tells you what this note is about, why it's important, and what it connects to.
- **Trails** . Curated links from a Basecamp to the notes that matter most for that topic. noteOS can automatically make these connections as you build the system out for yourself.

A **note** is a single text file. A meeting summary, a project overview, a recipe. Most live in the root of the folder, not buried in subfolders. Instead of deciding where something goes, you just create the note and let links connect it to everything related.

A **Basecamp** is a hub note for a topic. It doesn't contain everything about that topic. It links to everything. Think of it as a table of contents for an area of your life. They all live in the **Map** folder.

A **daily note** is a running log of what happened that day, organized by date in the **Calendar** folder. Over time it becomes a searchable journal.

**Downloads** is your inbox. Drop a transcript, a contract, an export. Tell the system to process it. The raw file stays in Downloads. The structured knowledge goes into the vault as notes.

**Templates** are instructions for AI, not forms for you to fill in. You say "create a Basecamp for my house renovation" and the system reads the template and builds it.

The result is a web where you can start anywhere and get anywhere. One question, full context. The denser the web, the better noteOS can trace through it.

**This is a framework, not a rulebook.** Add folders, rename things, create templates that aren't included. Some people will use it as-is. Some will reshape it into something unrecognizable. Both are the right answer.

### AI tool compatibility

The starter vault includes instruction files for every major AI tool. They all point back to the same `CLAUDE.md` via symlinks. One file to maintain, every tool picks it up. If you ever need to give a specific tool different instructions, just replace its symlink with a real file.

| Tool | File it reads | Included in vault |
|---|---|---|
| Claude Code / Claude Cowork | `CLAUDE.md` | Source file |
| GitHub Copilot | `.github/copilot-instructions.md` | Symlink → CLAUDE.md |
| Cursor | `.cursorrules` or `AGENTS.md` | Symlinks → CLAUDE.md |
| OpenAI Codex CLI | `AGENTS.md` | Symlink → CLAUDE.md |
| Gemini CLI | `GEMINI.md` | Symlink → CLAUDE.md |
| Windsurf | `.windsurfrules` | Symlink → CLAUDE.md |
| Cline | `.clinerules` | Symlink → CLAUDE.md |

Additional context on tools beyond Claude:

- **OpenAI/ChatGPT** recently launched [ChatGPT agent](https://openai.com/index/introducing-chatgpt-agent/), which can interact with local apps and create files on your computer. ChatGPT also has [Codex CLI](https://github.com/openai/codex), a terminal tool with full local file access that reads an `AGENTS.md` instruction file. Available on Plus ($20/month) and up.
- **Google Gemini** has a CLI tool ([Gemini CLI](https://github.com/google-gemini/gemini-cli)) that works similarly to Claude Code. It can read and write local files and supports its own instruction file (`GEMINI.md`). Terminal-only for now.
- **Other tools** like Cursor, GitHub Copilot, and Windsurf also support instruction files and local file access, though they're primarily built for software development.

### Markdown basics

Markdown is a simple way to format text files. AI writes it for you most of the time, but knowing the basics makes you more effective. You can structure a request with headers and bullets, or tweak something AI created without waiting for it. It takes five minutes:

```
# This is a heading
## This is a smaller heading

**This text is bold**
*This text is italic*

- This is a bullet point
- Another bullet point
  - A nested bullet

[[Link to another note]]
```

`#` for headings (more `#`s = smaller), `**` for bold, `-` for bullets, `[[]]` for links between notes. That's most of what you need.

### FAQ

**What does this cost?**
Obsidian is free. The AI tool is where pricing comes in. Claude Pro ($20/month) or Max ($100/month) gives you access to Claude Cowork. Claude Code is usage-based (you pay for what you use). Other providers have their own pricing. The landscape is evolving fast, so check current pricing when you're ready to start.

**How is this different from other note apps like Notion or Roam?**
Most note apps are about organizing notes. This system is about AI working inside your notes. AI reads your instruction file, processes raw inputs into structured notes, builds the links, and searches across all of it when you ask questions. Traditional note apps give you a place to put things. This gives you a partner that does the putting and the finding.

**Does it have to be Obsidian?**
Not technically. Anything that edits markdown files could work. But Obsidian handles linking natively, has the graph view, and it's free. Everything is still just files. If you ever wanted to switch apps, you take your vault with you.

**How do I know if AI's answers are accurate?**
Ask it to show its work. With a normal chat, "where did you get that?" gives you a vague answer. With a vault, AI points to specific notes and sections. You can open them in Obsidian and verify. It's not a guarantee of accuracy, but it's a level of transparency you don't get from a regular chat window.

**How long before it starts feeling useful?**
A few days if you commit to daily notes and the instruction file. A few weeks before the linking and compounding really kicks in. The first time you ask AI a question about something you noted three weeks ago and it gives you a perfect answer with full context, you'll get it.

**I barely use AI now. Is this overkill?**
Maybe. If you're happy with how you manage your information, you don't need this. But if you've ever thought "I know I wrote this down somewhere" or "I spend too much time getting AI up to speed on my situation," this is the fix.

**What about privacy? Is my data safe?**
A few things to understand here. Your vault files live on your computer. Only you and anyone with access to your machine can see them. AI doesn't permanently store your entire vault somewhere.

But when you type something into Cowork or Code, that message goes to the AI provider's servers for processing. This is true of every AI chat tool, not just this system. So if you paste a contract into Claude, Claude's servers process it to generate a response.

What happens with that data depends on your plan. On personal plans (Claude Free, Pro, Max), your conversations can be used to improve AI models unless you opt out in your privacy settings. On business plans (Team, Enterprise), your data is not used for training. Period.

If you work somewhere with an AI policy, that policy is your guide. This system doesn't change what your company allows you to share with AI tools. Some people mask sensitive details before sharing them. "Summarize this contract but replace all names with Donor X." Others keep sensitive material out of the vault entirely and only use it for non-confidential work. Both approaches work fine. The system is useful at any level of openness.

You can also tell AI to anonymize information in the notes it saves. The raw input still went to the server for processing, but your local files stay clean. This is useful if you're concerned about someone seeing your vault on your computer.

Start with what feels safe. Expand when and if you're comfortable.

### The graph view

One of Obsidian's best features. It shows your entire vault as a visual network. Every note is a dot, every link is a line between them. You can watch your knowledge base grow from a handful of scattered dots into a dense, interconnected web. It's not just eye candy. It's a real way to spot clusters, find orphan notes, and see which topics are most central to your thinking.

### Obsidian tips and shortcuts

You don't need to memorize any of this to get started. But once you're using the vault regularly, a few shortcuts make everything faster. These are the ones that matter most.

**Finding things fast:**

| Action | Mac | Windows/Linux |
|---|---|---|
| Quick switcher (jump to any note by name) | Cmd+O | Ctrl+O |
| Command palette (search for any action) | Cmd+P | Ctrl+P |
| Search across all notes | Shift+Cmd+F | Ctrl+Shift+F |
| Search within current note | Cmd+F | Ctrl+F |

The **quick switcher** is the one to learn first. Start typing a note name and it finds it instantly. You'll use this more than anything else in Obsidian.

The **command palette** is the Swiss army knife. If you're not sure how to do something, open it and start typing. "Graph", "daily", "template", whatever. It searches every available action.

**Editing and navigating:**

| Action | Mac | Windows/Linux |
|---|---|---|
| Create new note | Cmd+N | Ctrl+N |
| Toggle bold | Cmd+B | Ctrl+B |
| Toggle italic | Cmd+I | Ctrl+I |
| Insert link | Cmd+K | Ctrl+K |
| Toggle edit/reading view | Cmd+E | Ctrl+E |
| Open graph view | Cmd+G | Ctrl+G |
| Go back (like a browser) | Alt+Cmd+Left | Ctrl+Alt+Left |
| Go forward | Alt+Cmd+Right | Ctrl+Alt+Right |

**Linking tip:** To link to another note while typing, just type `[[` and start typing the note name. Obsidian autocompletes it for you. This is faster than the insert link shortcut for wiki links.

**Other things worth knowing:**
- You can customize any shortcut in Settings > Hotkeys
- Clicking a link while holding Cmd (Mac) or Ctrl (Windows) opens the note in a new pane, so you can see both notes side by side
- Star/bookmark notes you reference often so they're always one click away in the sidebar
