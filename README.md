# noteOS - Your Personal Operating System. Powered by Simple Text Files, Supercharged by AI.
*All your knowledge. Documented. Connected. Searchable. Conversational.*

## What's New

**April 2026 — Skills System**
The vault now ships with a `skills/` folder containing 11 on-demand workflow guides. Meeting processing, deep analysis, drafting in your voice, weekly reports, and more. Each one is a markdown file that walks AI through a proven workflow step by step. They load when relevant and stay out of the way when they're not. The instruction file (`CLAUDE.md`) has been trimmed to take advantage of this. Conventions that apply to every conversation stay inline. Multi-step workflows that only apply in specific contexts moved to skills, which keeps the instruction file lighter and gives AI more room to work with your actual content. [Read more about skills.](#skills-teaching-ai-how-you-work)

---

## Table of Contents
- [Imagine a World...](#imagine-a-world)
- [What This Actually Is](#what-this-actually-is)
- [How It Works](#how-it-works)
- [Your Knowledge, Your Files](#your-knowledge-your-files)
- [Getting Started](#getting-started)
- [Start Using It](#start-using-it)
- [Going Deeper](#going-deeper)
- [Reference](#reference)

---
## Imagine a World...

...where you had a personal Wikipedia for your life. Work, side projects, health, finances, travel, adventures, recipes. All of it connected, searchable, and growing every day. Fully interactive and conversational. You ask it questions and it answers with the full weight of everything you've ever put into it. If you can make a folder on your computer and type a message to AI, you're already there. 

That's noteOS.

**It remembers what you don't.** You had a conversation with your doctor three months ago. Or a contractor gave you a quote. Or you made a decision in a meeting and can't remember the reasoning. Instead of digging through emails or hoping you wrote it down somewhere, you ask. The system traces through your notes and gives you the answer with full context. Not because you organized everything perfectly. Because the system did.

**Things start connecting themselves.** You're planning a ski trip to the Alps and you're reminded of a hotel your friend raved about two years ago in a completely different conversation. You're experimenting with a new recipe and it connects back to a cooking class you took on vacation. Your life is full of these threads. The system finds them for you.

**It builds itself while you use it.** I thought I'd spend hours setting up folders and organizing notes. I didn't. I just type. I tell it what happened in a meeting, what I'm thinking about, what I need to remember. It creates the notes, links them to everything related, and the structure emerges on its own. Everything connects through links and references, like Wikipedia. You find things by following connections, not by remembering which folder you put something in.

The whole thing runs on plain text files and a free app. No code. No databases. You don't need to be technical. The system does the heavy lifting.

---

## What This Actually Is

You're probably already using AI. ChatGPT, Claude, Gemini, whatever. Maybe you've had it help draft an email, summarize a meeting, do some research. Maybe you've even set up custom instructions or used the memory features.

But there's a ceiling. And if you've used these various AI chatbots enough, you've hit your head on it. Carrying on a conversation in one chat, then moving to another session and bringing something up expecting it to just know. But it acts like it doesn't have the slightest clue. Or constantly having to give it background info on something for the umpteenth time.

That's where this idea of a personal operating system comes in. Your own Wikipedia that you're both the editor and reader of, with AI as the engine that helps you build and search through it all. Your projects, your ideas, your info, your plans, your decisions, your preferences, your life. All in files you control on your computer. Plain text. Nothing proprietary. It gets more useful the more you put into it. That's noteOS.

### Things You Won't Have to Do Anymore

**Re-explain yourself every session.** noteOS loads an instruction file automatically. AI already knows your projects, your people, your preferences. You just start talking.

**Manage fuzzy memory.** Your knowledge lives in structured files AI reads every conversation. Not fragments. Actual files you can open, read, and verify. They get richer the more you use the system.

**Babysit the tool.** The instruction file has rules for when AI should act, when to ask, and what to leave alone. When something goes wrong, you add a line and it doesn't happen again.

**Treat every conversation as an island.** Notes link to other notes. AI searches your vault before answering. The denser the web gets, the better it navigates. You build that density just by using it.

**Re-type the same prompts.** The instruction file and skills folder ship with tested workflows for meeting processing, daily notes, TODO filtering, deep analysis, and more. Works on the first conversation. You customize over time.

Think of it this way. If you had the world's best personal assistant, their value wouldn't just be their skills. It would be the six months they spent learning how you work, what you care about, and what's going on in your life. If they quit, all of that walks out the door. This system is like writing all of that down so the next assistant, or AI, can pick it up on day one. The intelligence is in the structure, not the tool.

---

## How It Works: 
### Folders & Files + Obsidian + AI = Your Personal Operating System

Before you download anything, here's what you're building and why it's structured the way it is. Three things work together:

1. **A main folder of subfolders and plain text files** that holds all your knowledge. This is where all the content you create will live and where we point the AI to work in and supercharge it.
2. **Obsidian**, a free app to browse, search, and edit those files visually. Think of it as a really nice window into your folder.
3. **An AI tool** (like Claude) that reads and writes inside the folder. It's the engine that builds notes, makes connections, and answers your questions.

That's the whole stack. A folder, a viewer, and an AI engine. They don't just sit next to each other. They feed into each other in a continuous loop. Everything below explains how they fit together.

### The folder and file structure

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

Every major AI tool looks for a different instruction filename. Instead of maintaining copies, the starter vault uses **symlinks** that all point back to `CLAUDE.md`. Edit one file, every tool picks up the changes. This works out of the box on Mac and Linux. On Windows, git may need to be configured to support symlinks (run `git config core.symlinks true` before cloning).

#### A few things to know

##### The navigation metaphor

The system borrows its naming from backcountry travel:

- **Map** - The folder that holds all your Basecamps. Your territory overview.
- **Basecamp** - A home base note for a main topic. It provides a high-level overview of whatever the subject is and then also houses links and references to other more detailed notes on the subject. 
- **Compass** - The orientation and summary section at the top of each note. Think of it like a TL;DR that tells you what this note is about, why it's important, and what it connects to.
- **Trails** - Curated links from a Basecamp to the notes that matter most for that topic. noteOS can automatically make these connections as you build the system out for yourself.
##### Glossary

A **note** is a single text file. A meeting summary, a project overview, a recipe - every piece of knowledge in the system is a note. Most live in the root of the folder, not buried in subfolders. Instead of deciding where something goes, you just create the note and let links connect it to everything related.

A **Basecamp** is a hub note for a topic. It doesn't contain everything about that topic - it links to everything. Think of it as a table of contents for an area of your life. When you need to get up to speed on something, you start at its Basecamp and follow the links. They all live in the **Map** folder.

A **daily note** is a running log of what happened that day, organized by date in the **Calendar** folder. Over time it becomes a searchable journal. "What was I working on the first week of February?" The system knows.

**Downloads** is your inbox. Drop a transcript, a contract, an export. Tell the system to process it. The raw file stays in Downloads. The structured knowledge goes into the vault as notes.

**Templates** are instructions for AI, not forms for you to fill in. You say "create a Basecamp for my house renovation" and the system reads the template and builds it. The template is the recipe. noteOS is the cook.

The result is a web where you can start anywhere and get anywhere. "What did we decide about vendor pricing?" leads to the meeting summary, which links to the project Basecamp, which has the full history. One question, full context. The denser the web, the better noteOS can trace through it.

**This is a framework, not a rulebook.** Add folders, rename things, create templates that aren't included. Some people will use it as-is. Some will reshape it into something unrecognizable. Both are the right answer.

#### The Instruction File

This is what makes the whole thing work the way it does with AI. There's a file called `CLAUDE.md` that AI reads at the start of every conversation. It's called CLAUDE.md because that's what Claude auto-discovers, but the starter vault includes symlinks so every major AI tool finds it automatically. More on that in Getting Started.

Think of it as a briefing document. If you've used Claude's project instructions or ChatGPT's custom instructions, it's the same idea, except it lives in your folder instead of inside the AI app.

- Here's who I am and what I'm focused on
- Here are my active projects and areas of life I'm tracking
- Here are the people who come up a lot (and how to spell their names)
- Here's how I like my notes formatted
- Here's what to include in a meeting summary and what to leave out
- Here's how I communicate (my tone, my style, what to avoid)

You don't need to fill all of this out before you start. You can start with five lines. "I'm a contracts director at a nonprofit. My main projects are X, Y, Z. I prefer concise summaries over detailed ones." That alone puts you ahead of most AI users because now every conversation starts with context instead of from scratch. Or just start using the system and let AI fill it in over time based on your conversations.

The starter vault comes with this file already built out with tested conventions for daily notes, linking, and more. **It works out of the box.** Here's what it already knows how to do on day one:

- **Morning brief** - Ask "give me a morning brief" and it pulls today's weather, top news, and whatever's active across your life. Sparse on day one. Rich after a few weeks.
- **Daily notes** - It creates them, files them, and keeps them organized. A running log of your day - work, personal, fitness, whatever you tell it about.
- **Processing anything you drop on it** - Meeting transcript, doctor's notes, a recipe you want to save, a contractor's quote, a trip itinerary. Drop it in and tell it what it is. It'll either create the note automatically or ask if you want it to - and suggest whether it should be a daily note entry, a standalone note, or a full Basecamp depending on how substantial it is.
- **Vault search before answering** - Before it responds to any question, it reads your notes. Not guessing. Actually tracing through what you've built and telling you what's there.
- **Activity and fitness log** - Tell it about a workout, a hike, a training block. It knows how to log it in your daily note and build context over time.
- **Voice and drafting** - Fill in the Communication Style section and it drafts messages, emails, and documents that sound like you, not like a template.

That's what's pre-built. Everything else you build over time. When something goes wrong, add a line: "Don't do X. Do Y instead." When a new project kicks off, add it. When a name keeps getting mangled, add it to People. The file grows with you. That's how it gets personal.

### Obsidian: your viewer and editor

[Obsidian](https://obsidian.md) is a free app that reads the files in your folder and makes them look good and easily readable. Obsidian calls your folder a "vault." It adds clickable links between notes, instant search, a visual graph of how everything connects, and themes to make it yours. Under the hood, it's just reading plain text files. You could delete Obsidian tomorrow and every file would still be there, readable in any text editor.

Obsidian is not an AI tool. It doesn't process anything or talk back to you. It's where you go to read your notes, click through links, and see your knowledge base visually. The AI conversation happens in a separate tool (we cover that in Getting Started). But having both means you always have two paths to the same information: ask AI, or open Obsidian and browse.

You don't have to use Obsidian. Any text editor works since the files are just plain text. But Obsidian handles linking natively, makes everything super easy to find and read, has some great keyboard shortcuts, and even has a really amazing graph view to see how everything you make is connected visually. And it's free. In our opinion, it's the best way to experience what you're building.

### The AI tool: your engine

This is the piece that makes everything feel alive. You open an AI tool, point it at your vault folder, and start chatting. The AI reads your files, writes new ones, builds links between notes, and answers questions using everything you've built. It's the same conversational experience you're used to from ChatGPT or Claude, except now it has your entire knowledge base behind it.

Remember the instruction file from earlier? This is where it really matters. Every conversation starts with context. AI already knows your preferences, your projects, how you write, how you think. The instruction file turns a general-purpose AI into *your* AI.

And because AI is living inside your folder, it can see everything. Not just the note you're working on, but every note, every link, every Basecamp, every trail. When it creates something new, it searches the vault for related content and links to it. That meeting summary connects to the project Basecamp, which connects to the decision log. Over time, the web gets denser and AI has more paths to trace when you ask a question. Each note makes every other note more findable. Each link makes every future question easier to answer. It's not just adding information. It's multiplying the value of what's already there.

The AI tool and Obsidian are separate but connected. They work on the same files, so anything AI creates shows up in Obsidian immediately, and anything you edit in Obsidian is available to AI next time you chat. We cover the specific tools and setup in [Getting Started](#getting-started) below. The short version: we recommend Claude, and the easiest option is called Cowork. It requires a paid account. The system works with any AI tool that can read and write files in a folder.

### Using it is building it

This is where the three pieces stop being a stack and start being a cycle.

You talk to AI. AI creates notes and links them to what's already in your folder. You open Obsidian and see the new notes sitting alongside everything else, connected and searchable. Next time you talk to AI, it has even more context to work with. Which means better answers, better notes, more connections. Which means Obsidian shows you an even richer web. Which means AI has even more to draw from next time. The folder gets richer. Obsidian shows you more. AI gets smarter about your world. Round and round.

That's what surprised me most. When you use this system, you're building it at the same time. Brainstorming, processing meetings, drafting documents, thinking out loud - all of it generates notes as a natural byproduct. Those same notes are what the system searches when you ask questions later. The more you put in, the more useful it gets. Not because the AI improved. Because *your* knowledge base got richer. The system grows because you're using it, not because you're maintaining it.

---

## Your Knowledge, Your Files

I know I keep reiterating this but that's only because I think this part the most important part of this whole thing. Everything in this system lives in folders and files on your computer. Plain text. Nothing proprietary, nothing complicated, nothing cloud-locked, nothing that belongs to a specific platform. The AI platform you choose to use reads your files, but your files aren't locked inside the AI platform.

This matters because the AI landscape is moving fast. Your workplace might standardize on ChatGPT this quarter and switch to Claude next quarter. A new tool might launch next month that's better than everything. With this system, you don't rebuild. Your folder is the constant. The AI tool is just what you plug into it today. Your company switches tools? Everything you've built is still right there. You want to try something new? It's all still there. Nothing moves, nothing exports, nothing breaks. Own the playbook, rent the tech.

Now, finally, with all that being said... Let's get you a personal operating system!

---

## Getting Started

Now that you know what you're building and how the pieces fit together, here's how to set it up. The whole thing takes about 20 minutes.

### Step 1: Download Obsidian

Go to [obsidian.md](https://obsidian.md) and download it. Free, works on Mac, Windows, Linux, and mobile. This is the app you'll use to browse and edit your vault. (We covered what it does and why we use it in [How It Works](#obsidian-your-viewer-and-editor) above.)

### Step 2: Get the starter vault

Download the starter vault from this [noteOS GitHub repo](https://github.com/BOOMCHOPALAKA/noteOS). Click the green **Code** button at the top of the page and select **Download ZIP**. Unzip it and put the folder somewhere on your computer. It can go anywhere you'd like. Desktop, Documents, your Home folder. Anywhere works great. You can also rename the folder to whatever you want (yournameOS maybe??).

Open Obsidian, select **Open folder as vault**, and point it at the folder you just downloaded. You now have a working vault with:
- **An instruction file** (`CLAUDE.md`) pre-loaded with conventions for meeting processing, daily notes, linking, and more. Works out of the box.
- **A memory file** (`MEMORY.md`) with system-level patterns that AI follows. AI adds to this over time as it learns your preferences.
- **Templates** for daily notes, Basecamps, meeting summaries, and weekly status reports.
- **Skills** for meeting processing, deep analysis, drafting, weekly reports, and more. Detailed workflow guides that load when you need them.
- **The folder structure** already set up: Map, Calendar, Downloads, Templates, skills.

### Step 3: Connect your AI tool

This is the part where the magic happens and here's the good news: if you've already used ChatGPT, Claude, or Gemini, you already know how to do this. You're still typing messages and getting answers in natural language. Nothing about how you interact changes.

The one difference: instead of chatting with AI that can only see what you paste into the conversation, you point it at your vault folder. Now when you ask a question, AI can search through all your notes. When you tell it about a meeting, it can create the summary, file it in the right place, and link it to everything related. When you ask "what did we decide about X last month?" it traces through your notes and gives you a real answer instead of asking you to paste in the context.

Same conversation. Same chat window. But now AI has your entire knowledge base behind it.

**This does require a paid AI account.** The system needs an AI tool that can read and write files directly in a folder on your computer. That's a step beyond what free AI chat tools offer today. The good news is the cost is comparable to a streaming subscription, and the value compounds over time in a way Netflix doesn't.

Right now, the most complete option for non-technical users in our opinion is **Claude** from Anthropic. It's what this system was built and tested with, and it has two tools that both work out of the box:

**Claude Cowork** is the easiest starting point and what most people should use. If you already have the Claude desktop app (or download it from [claude.ai](https://claude.ai)), Cowork is built right in. Here's how to connect it to your vault:

1. Open the Claude desktop app
2. Click the **Cowork** tab at the top (next to "Chat")
3. In the message area, click the **folder icon** and select your vault folder
4. Start typing

That's it. You're now chatting with the same Claude you already know, except it can read and write files in your vault. Create notes, process meeting transcripts, search across everything you've built. It can even handle longer tasks on its own, breaking things into steps and working through them while you do other things. The whole experience is visual and conversational. If you've used ChatGPT or Claude in the browser, this will feel immediately familiar. You just gained superpowers.

Cowork requires a paid Claude subscription (Pro at $20/month, Max at $100/month, or Team/Enterprise). [Getting started with Cowork](https://support.claude.com/en/articles/13345190-get-started-with-cowork)

**Claude Code** is a command-line tool. If you don't know what that means, skip this paragraph and stick with Cowork. You won't miss anything. Claude Code does the same thing as Cowork, just in a terminal window instead of a desktop app. You open a terminal, navigate to your vault folder, and type `claude`. It's a little more powerful and a little more flexible. You get a little more control over how AI interacts with your files, and it's more extensible if you want to customize how the system works under the hood. It's usage-based pricing, meaning you pay for what you use rather than a monthly subscription. If you're technical, curious, or want to grow into it, it's there when you're ready. [Getting started with Claude Code](https://code.claude.com/docs/en/overview)

**The important thing:** both tools read the same `CLAUDE.md` instruction file, work inside the same vault folder, and produce the same markdown notes. You're not choosing a platform. You're choosing an interface. Everything you build is the same either way, and you can switch between them anytime.

#### What about other AI tools?

This system is designed to be portable. It's just folders and text files. Any AI tool that can read and write files in a local folder will work. That said, the landscape is still evolving. Here's where things stand as of early 2026:

- **OpenAI/ChatGPT** recently launched [ChatGPT agent](https://openai.com/index/introducing-chatgpt-agent/), which can interact with local apps and create files on your computer. It's getting closer to what Cowork does but works differently. It uses a virtual computer to interact with your apps rather than reading and writing directly in a folder. ChatGPT also has [Codex CLI](https://github.com/openai/codex), a terminal tool with full local file access that reads an `AGENTS.md` instruction file. Available on Plus ($20/month) and up.
- **Google Gemini** has a CLI tool ([Gemini CLI](https://github.com/google-gemini/gemini-cli)) that works similarly to Claude Code. It can read and write local files and supports its own instruction file (`GEMINI.md`). But it's terminal-only. There's no visual desktop equivalent to Cowork yet for non-technical users.
- **Other tools** like Cursor, GitHub Copilot, and Windsurf also support instruction files and local file access, though they're primarily built for software development.

This is moving fast. Any of these providers could ship a Cowork-equivalent tomorrow. When they do, your vault works with them immediately. No migration, no export, no starting over. That's the whole point.

**Using a different AI tool?** The starter vault already includes symlinks for every major AI tool. You don't need to rename or copy anything. Just open your preferred tool and point it at the vault folder. It will find its instruction file automatically because they all point back to the same `CLAUDE.md`.

| Tool | File it reads | Included in vault |
|---|---|---|
| Claude Code / Claude Cowork | `CLAUDE.md` | Source file |
| GitHub Copilot | `.github/copilot-instructions.md` | Symlink → CLAUDE.md |
| Cursor | `.cursorrules` or `AGENTS.md` | Symlinks → CLAUDE.md |
| OpenAI Codex CLI | `AGENTS.md` | Symlink → CLAUDE.md |
| Gemini CLI | `GEMINI.md` | Symlink → CLAUDE.md |
| Windsurf | `.windsurfrules` | Symlink → CLAUDE.md |
| Cline | `.clinerules` | Symlink → CLAUDE.md |

One file to maintain. Every tool picks it up. If you ever need to give a specific tool different instructions, just replace its symlink with a real file.

---

## Start Using It

Just start typing. That's genuinely it. You don't need to set up folders or figure out an organizational scheme. Just chat with AI the way you normally would, but now it's building your knowledge base as you go.

Here are some things you can try right out of the gate:

- **"Give me a morning brief."** Works on day one. Pulls today's weather, top headlines, and whatever's active in your vault. Sparse at first. After a few weeks it knows your open TODOs, your active projects, what happened yesterday. It grows with your vault.
- **"Create a daily note for today. Here's what I worked on..."** and give it a few bullets about your day.
- **"Here's a meeting I had today. Summarize it and add it to my daily note."** Paste in a transcript or your own notes.
- **"Create a Basecamp for [topic]."** A project you're managing, a trip you're planning, a side business you're running.

Start with whatever's on your mind today. The first few notes will feel like scattered dots. But they start connecting fast.

**You're the driver.** noteOS can do a lot on its own. Point it at a task and it'll work through it, do research, build out notes, make connections. But it doesn't decide what matters to you. You do. The more intentional you are about directing it, the better the output.

Sometimes it will handle things automatically. It might create a note without being asked, or pause and say "this feels worth saving, want me to create a note?" But when it doesn't, a nudge goes a long way:

- If something feels like it should be a note, say so. "Can we save this as a note?" AI will figure out where it fits and what to link it to.
- If a topic is getting big enough to deserve its own hub, ask. "Should we make a Basecamp for this?"
- If you just want it to remember something small - a preference, a detail, a name - just say "remember this." It'll either add it to your memory file or instruction file depending on what it is. No full note needed.
- If you start a new session and AI seems to not know something you've already captured, point it at the vault. "Yes you do, look through the vault." It'll find it. That nudge takes two seconds and the answer you get back will be more grounded and specific than anything you'd get from a regular chat.

The system grows because you keep using it. You get out of it what you put in. But what you get back is usually better than you expected.

**One thing to know: the system knows what you tell it.** It doesn't connect to your apps or pull data automatically. There's no fitness tracker sync, no calendar integration, no background magic. You give it information, and it remembers and connects it. That's by design. You control exactly what goes in.

In practice, that looks like:

- **Exporting data you already have.** Most apps let you download your own data. Export transactions from your bank, health data from Apple Health, attachments from email. Save those files into the vault's `Downloads/` folder and tell the system to look at them.
- **Just telling it about your day.** "I did a 3-mile hike today, felt great, legs weren't as heavy as last week." Type it out, paste stats from an app, or send a screenshot. noteOS logs it and the context builds over time.
- **Sharing things as they come in.** A meeting transcript, a recipe you tried, a quote from a contractor, notes from a doctor's appointment. Drop it in and tell the system what it is.

After a conversation, switch over to Obsidian and take a look. The notes are just there. Click on one. See how it's formatted, how it links to other notes. Click a link and you're in another note. That's the Wikipedia layer. A few keyboard shortcuts will make navigating Obsidian feel fast. See the [Obsidian tips and shortcuts](#obsidian-tips-and-shortcuts) section in the Reference below.

Once you've had a few sessions and you're starting to see notes multiply, Basecamps forming, connections being made between things you talked about at different times - that's when you open the graph view in Obsidian (sidebar icon, or Cmd+G on Mac). Every note is a dot. Every link is a line. What you'll see looks like a neural network. Nodes branching out, clusters forming around your big topics, connections you didn't even consciously create. It's one of those moments where the whole thing clicks. This is a big reason we love Obsidian specifically - nothing else gives you this visual layer on top of your own knowledge.

You now have two paths to the same information: ask noteOS, or open Obsidian and browse. Most interaction happens through the chat. But the visual layer is always there when you want to explore or read on your own.

**This also changes how much you can trust the answers.** With a normal chat, "where did you get that?" gets a vague response. With a vault, the answer is "I got this from your March 3rd meeting summary and your pricing strategy note." Specific files. You can click through in Obsidian and verify. It doesn't guarantee accuracy, but it's transparency you don't get anywhere else.

### Once the system has some weight behind it

You stop asking generic questions and start asking things only your vault can answer:

- **"I have a standup in 20 minutes. Catch me up on everything that's happened this week."** It reads your daily notes and recent updates and gives you a briefing.
- **"I'm planning a backpacking trip in August. What gear worked last time and what did I say I'd change?"** It finds your trip notes, your gear lists, that comment you made about your pack being too heavy.
- **"Draft a status report for this week. You know the format."** It does. Because the instruction file has your format, your voice, your conventions.
- **"Here's a meeting transcript. Process it."** It knows what that means. Summarize, extract your action items, update the daily note, link to relevant projects.
- **"When was the dog's last vet appointment and what did they say about her knee?"** It finds the note, the vet's recommendation, the follow-up timeline.

You don't get here on day one. But you get here faster than you'd think.

### Where this goes

To give you a sense of what this looks like after a few months of just using it:

I manage a dev team across two clients. Early on I pointed Claude at our GitHub repos and had it analyze the commit history. Now it knows who built what, who has the deepest expertise in each part of the codebase, and where the knowledge gaps are. When an issue comes up, I can ask "who would be the best person to look at this?" and get a real answer based on actual contribution history.

I also run a small brewing cacao business (shameless plug www.understorycacao.com) on the side. I have a Basecamp for it that links to supplier notes, customer order patterns, pricing strategy, product development ideas. 

I'm also into hiking, backcountry skiing, rucking. I exported my Garmin data into the vault and now whenever I log a workout, AI has years of context behind it. It knows my resting heart rate trends, my training patterns, my peak fitness benchmarks. It tells me things about my own data that Garmin never surfaced.

At work, I have Basecamps for each client with every stakeholder, every project, every decision linked and traceable. When someone mentions a name in a meeting, AI already knows who they are, what they work on, and what they said three weeks ago. I walk into every conversation with context I didn't have to prepare.

I didn't sit down and manually create notes for any of that. It grew from conversations I was having with Claude within Claude Code. None of this was necessarily planned either. I just kept using the system and it built itself around those conversations. That's the magic.

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
- Build out Basecamps with curated links for your most active areas. The more structured your hubs, the better AI navigates between topics.

### Skills: teaching AI how you work

Here's something I noticed after a few months of using this system. I'd process a meeting transcript and AI would nail it. Speaker identification, TODO extraction, linking to existing tickets, the whole thing. Then a week later I'd process another one in a new session and it would miss half the steps. Not because it forgot. Because the instruction file had a condensed version of the workflow and the new session interpreted it differently.

The fix was obvious once I saw it. Take the full workflow and put it in its own file. Not in the instruction file that loads every conversation. In a separate file that only loads when you're actually doing that specific thing. That's what skills are.

The starter vault has a `skills/` folder with a bunch of these already built. Meeting processing, morning briefs, weekly status reports, deep analysis, drafting in your voice, and more. Each one is just a markdown file that walks AI through a proven workflow step by step.

**What this actually looks like in practice:** You drop a meeting transcript in chat. AI recognizes what you're doing, finds the meeting processing skill, and follows it. Identifies the speakers, presents a mapping for you to confirm before writing anything, searches the vault for related notes, writes the summary, extracts only the TODOs you're actually responsible for, and then gives you the "so what" layer in chat. Not a summary rehash. The part where it tells you what changed, what connects, and what doesn't add up. All of that is in the skill. Every session. Consistent.

**Why not just put all of that in the instruction file?** Because the instruction file loads on every conversation. When you're asking about your ski trip or drafting an email, you don't need 100 lines of meeting processing instructions taking up space. Skills load when they're relevant and stay out of the way when they're not.

**How you use them depends on your AI tool:**

If you're using **Claude Code**, skills just work. It discovers them automatically when the task matches. To connect your vault's skills, one command: `ln -s /path/to/your/vault/skills ~/.claude/skills`. Done.

If you're using **anything else**, you can still use them. Just tell your AI tool "read `skills/meeting-processing/SKILL.md` and follow it." They're just files. Any tool can read a file when you point it there.

And the instruction file still works on its own. Every workflow section has a quick version inline. If your AI tool doesn't load skills, it still gets enough to do a decent job. The skill is the full playbook. The instruction file is the cheat sheet.

**What's included:**

| Skill | What it does |
|---|---|
| `meeting-processing` | Speaker ID, structured summaries, TODO extraction, vault linking, takeaway analysis |
| `morning-brief` | Daily briefing with vault state, weather, and news |
| `weekly-status-report` | Sourcing, structure, and external sharing format |
| `activity-logging` | Fitness and activity logging to daily notes |
| `drafting-voice` | Learns how you write and drafts messages in your voice |
| `deep-analysis` | Thinking partner for decisions. Pushes back, stress-tests assumptions, steelmans the other side |
| `situation-assessment` | Paste a messy email thread or ticket history, get a clear picture of what's actually going on |
| `session-handoff` | Captures what happened in a session so nothing falls through the cracks between conversations |
| `ticket-creation` | Scannable dev tickets that people actually read |
| `codebase-investigation` | Systematic debugging. Traces code paths, checks the vault for prior context, documents findings |
| `codebase-team-assessment` | Analyzes a repo's commit history, maps who knows what, flags knowledge gaps and bus-factor risks |

**Building your own:** This is where it gets personal. As you develop workflows that click, capture them. Create a folder in `skills/`, write a `SKILL.md` that describes what you do and how. AI learns the process once and follows it every time after that. The skills you build become part of your system. They travel with your vault. They work with whatever AI tool you're using. And if you ever share your vault with someone, they get your workflows too.

**Building the habit:**

The value comes from using it consistently. First couple weeks: focus on daily notes and telling the system to save things worth remembering. When something goes wrong, add a correction to the instruction file. After a few weeks you'll notice topics keep coming up - create Basecamps for those. After a month, your instruction file has real depth, your daily notes form a searchable journal, and connections are surfacing that you wouldn't have made on your own.

**Log your chats:**

Here's something that will happen: you'll have a great conversation with AI. You'll figure something out, make a decision, talk through a problem. Then you close the chat window. And ten minutes later you realize none of it made it into the vault. The conversation is gone.

The fix is simple. Keep a chat log. It's a single note in your vault that tracks your sessions. Date, what you covered, what got saved, and the stuff that's hardest to reconstruct later. Think of it like saving a document. You don't save after every keystroke, but you develop an instinct for when something has enough weight that you don't want to lose it. Same thing here. When a session feels like it had substance, say "log this chat" and AI captures it.

Over time, AI gets better at recognizing those moments too. After you process a batch of meeting transcripts, create a few notes, or work through a tough decision, it'll ask: "Want me to log this session?" It's like autosave catching the things you forget to save manually. But the habit of consciously logging is still worth building. AI catches what slips through. You catch what matters most.

The log isn't detailed notes. Those live in the vault as their own notes. The log is a trail of breadcrumbs. "March 12: planned the kitchen renovation, created the contractor comparison note, decided to go with Option B." Enough that if you come back two weeks later and think "when did we figure that out?" you can trace it. Enough that if you closed a session without saving something, you can see what was discussed and recover it.

It's a small practice that prevents a real problem. The best knowledge system in the world doesn't help if the knowledge never makes it in.

---

## Reference

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
