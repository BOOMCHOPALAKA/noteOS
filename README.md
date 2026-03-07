# noteOS — An Operating System Built on Notes
*A practical guidebook to building your own AI-powered knowledge system that connects everything you know, forgets nothing, and gets more helpful the more you use it.*

## Table of Contents
- [What This Is](#what-this-is)
- [The Core Idea](#the-core-idea)
- [Who's This For](#whos-this-for)
- [Getting Started](#getting-started)
- [How It Actually Works](#how-it-actually-works)
- [Making It More Powerful](#making-it-more-powerful-go-as-deep-as-you-want)
- [What the Payoff Looks Like](#what-the-payoff-looks-like)
- [See It In Action](#see-it-in-action)
- [Building the Habit](#building-the-habit)
- [Why Portability Matters](#why-portability-matters)
- [FAQ](#faq)

---

## What This Is

Imagine a personal Wikipedia for your entire life. Work, side projects, health, finances, real estate, recipes, everything. All of it connected, searchable, and growing every day. Now imagine that Wikipedia is fully interactive and conversational. You can talk to it, ask it questions, and it talks back with the full weight of everything you've ever put into it.

That's noteOS. Here's what it looks like in practice:

**It turns your meetings into lasting knowledge.** You probably already get transcripts from Zoom or Otter or whatever recording tool your team uses. Maybe you get a summary too. And then what? It sits in a folder somewhere and you never look at it again. In this system, you drop that transcript in and AI turns it into a structured summary linked to the project it's about, the people who were there, and every other meeting where those topics came up. Three weeks later someone asks "what did we decide about the vendor contract?" and you have the answer in ten seconds. Not because you remembered. Because the system did.

**It makes connections you wouldn't.** A vendor quoted me $2.80 per unit. Without being asked, the AI flagged that the same vendor quoted $2.40 for similar work three months ago on a different project. It traced through my notes, found the overlap, and surfaced it.

**It builds itself.** I thought I'd spend hours organizing notes. Instead I just talk. I tell it what happened in a meeting, what I'm thinking about, what I need to remember. It creates the notes, files them, links them to everything related. You don't build a productivity system. You just talk to AI and the system grows around you.

The whole thing runs on plain text files and a free app. No code. No databases. I'm not a developer. If my wife started using this tomorrow, she'd become an AI power user without realizing it, because the system does the heavy lifting.

---

## The Core Idea

Think of it like this: if you had the world's best personal assistant, their value wouldn't just be their skills. It would be the six months they spent learning how you work, what you care about, how you like things done, and what's going on in your life. If they quit, all of that knowledge walks out the door.

This system is like writing all of that down so the next assistant (or AI) can pick it up on day one.

Your knowledge, your preferences, your workflows, your context. It all lives in files you control on your computer. Plain text. Markdown. Nothing proprietary. Right now I use Claude as the AI engine. But because everything is just files, I could switch to a different AI tomorrow and bring my entire system with me. The intelligence is in the structure, not the tool.

I think of it as: **own the playbook, rent the tech.** The playbook is yours. The AI is just the engine you plug in.

---

## Who's This For

Honestly, anyone. But that's not a useful answer, so here's what it actually looks like for different people.

This was built for normal people with busy lives who want AI to actually be useful for them.

**You're not a tech person. You just want things to work.** You've tried ChatGPT a few times. Maybe you had it help with an email or asked it to explain something. It was fine. But you're not sure what else to do with it, and every conversation feels like it starts from zero. You re-explain your job, your situation, your preferences. You can tell there's something bigger here but nobody's shown you what it looks like in practice. This system gives you that. You don't need to be technical. You don't need to know what markdown is. You talk to AI, it builds and organizes your knowledge, and the whole thing gets more helpful over time.

**You have a lot going on and things slip through the cracks.** Work, family, personal projects, health stuff, finances, a house hunt, a side business, whatever. You're not looking for a productivity system with dashboards and workflows. You just want a place where the conversation with your financial advisor, the research on your kid's school options, and the details of the contractor bid all live in one searchable system that doesn't forget. You want to be able to say "what did the doctor recommend in March?" and get an actual answer.

**You're a knowledge worker drowning in information.** Product managers, project managers, consultants, directors, lawyers, anyone whose job is meetings, decisions, documents, and keeping track of what happened and why. You have more information flowing through your week than you can retain. If you've heard the term "personal knowledge management" (PKM), this is that. But instead of you doing the organizing, AI does it. This system catches information, structures it, links it, and gives it back to you when you need it.

**You already use AI and want the next level.** You're past the basics. You use ChatGPT or Claude regularly. Maybe you've set up projects, custom instructions, or memory features. It's been useful. But you've hit the wall. You still spend time re-explaining context. You still copy and paste things in. The AI remembers some things but misses others, and you can't really control what sticks. You know there's more here but the chat window feels like a ceiling. This system breaks through that ceiling. Instead of AI that remembers fragments of past conversations, you get AI that searches through a structured knowledge base of everything you've built. Your meeting summaries, your project notes, your decisions, your preferences. All linked, all searchable, all growing. You drop a meeting transcript and it comes back as a fully linked summary connected to the three other meetings where this topic came up. You ask a question and it traces through months of accumulated context to give you a real answer. The difference between using AI in a chat window and using AI inside your knowledge base is the difference between asking a stranger for directions and asking someone who's walked the trail a hundred times.

**You're technical and want to build on this.** Developers, engineers, technical leads. You can customize the instruction file for code review workflows, architecture decision records, sprint planning, codebase analysis. The whole thing is just text files. Fork it, modify it, make it yours.

The common thread: if you've ever thought "I know I wrote this down somewhere" or "I wish AI already knew my situation," this is the fix. The system scales from five notes to five hundred. Start where you are.

---

## Getting Started

The whole system is built on two things: a folder of text files on your computer, and an AI tool that can read and write to that folder. That's it. Everything else is just structure that makes it compound over time.

**A quick note on Obsidian.** You'll see Obsidian mentioned throughout this guide. Obsidian is a free app that gives you a visual interface for a folder of text files. It's not a platform or a service. There's no account to create, no cloud to sync to. You point it at a folder on your computer, and it lets you browse, edit, and link your files in a nice visual way. Think of it as a really good file viewer with superpowers like linking and search. Under the hood, everything is still just a folder with `.md` text files inside.

You could create a folder on your Desktop right now called "MyBrain" and that would technically be your vault. That's how simple the foundation is.

### Step 1: Download Obsidian

Go to [obsidian.md](https://obsidian.md) and download it. Free, works on Mac, Windows, Linux, and mobile.

### Step 2: Get the starter vault

Download the starter vault from the [noteOS GitHub repo](https://github.com/BOOMCHOPALAKA/noteOS). Click the green **Code** button and select **Download ZIP**. Unzip it and put the folder somewhere on your computer. Your Documents folder works great.

Open Obsidian and point it at that folder. You now have a working vault with:
- **An instruction file** (`CLAUDE.md`) pre-loaded with battle-tested conventions for meeting processing, daily notes, linking, TODO filtering, status reports, and communication style. Works out of the box. Fill in the personal sections (About Me, Active Projects, People) whenever you're ready, or just start talking to AI and let it fill them in from your conversations.
- **A memory file** (`MEMORY.md`) pre-loaded with system-level patterns that AI follows: how to handle recaps, research your vault, process transcripts, hand off between sessions. AI adds to this over time as it learns your preferences.
- **Templates** for daily notes, Basecamps (topic hubs), meeting summaries, and weekly status reports.
- **The folder structure** already set up: Map, Calendar, Downloads, Attachments, Templates.

### Step 3: Connect your AI tool

This is the part that makes it all work. You need an AI tool that can read and write files on your computer. Not a chat window. An AI that lives inside your vault.

If your experience with AI has been chat windows (ChatGPT or Claude in a browser, on your phone, or even the desktop apps), this is the part that's different. Those are conversations that happen separately from your files. The tools below are different. They run on your computer and work directly inside your folders. You talk to them the same way, but they can read your notes, create new ones, edit existing ones, and search across everything.

**My path here:** I started with Claude in the browser. Custom instructions, projects, memory features. It was useful. But every conversation still felt like briefing a new coworker. Then I tried Claude Code, which runs in your terminal and works directly inside a folder on your computer. That was the unlock. The moment AI could actually read my files, create notes, edit things, and trace connections between documents, everything changed. It went from "smart chatbot" to "knowledge partner that knows my entire system." That's when this project started taking shape.

**Here's what makes this powerful:** because your vault is just folders and text files, you're not locked into any single AI tool. Plain text and markdown are universal. If something better comes along next month, you take your entire vault and plug it into the new tool. Full context, day one. No re-explaining, no starting over. You own the knowledge. The AI is just the engine you plug in. Pick the best tool available today knowing you can switch tomorrow without losing anything.

Right now the tools I'd recommend are **Claude Cowork** and **Claude Code** (both from Anthropic):

- **Claude Cowork** is the easiest starting point. It's built into the Claude desktop app. You point it at your vault folder and start talking. If you're new to this, start here. [Getting started with Cowork](https://support.claude.com/en/articles/13345190-get-started-with-cowork)
- **Claude Code** is what I use daily. It's a command-line tool. More powerful, more flexible, usage-based pricing. If you're comfortable with a terminal or want to grow into it, this is the path. [Getting started with Claude Code](https://code.claude.com/docs/en/overview)

Other AI providers are building similar tools. The specific tool doesn't matter. What matters is it can see your files and work inside them. The whole system is designed to be portable.

**Using a different AI tool?** The starter vault ships with `CLAUDE.md` because Claude Code auto-discovers it. But the instructions inside are just plain text. They work with any AI tool that reads files. Just rename or copy the file to match what your tool expects:

| Tool | Instruction file it reads |
|---|---|
| Claude Code / Claude Cowork | `CLAUDE.md` (auto-discovered) |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Cursor | `.cursor/rules/*.mdc` or `AGENTS.md` |
| OpenAI Codex CLI | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Windsurf | `.windsurfrules` |

### Step 4: Start using it

You're live. Try one of these to see it in action:

- **"Create a daily note for today. Here's what I worked on..."** and give it a few bullets about your day.
- **"Here's a meeting I had today. Summarize it and add it to my daily note."** Paste or drop a transcript.
- **Ask it something.** "What did I write down yesterday?" or "What am I working on this week?"

AI reads your instruction file, knows your conventions, and starts working within your system from the first conversation. Everything below this point explains how it works under the hood and how to get the most out of it.

---

## How It Actually Works

Three things are happening: a structured place for your knowledge, an instruction file that teaches AI how you work, and a loop where AI both creates and retrieves your content.

### 1. A structured place for your knowledge

I use [Obsidian](https://obsidian.md). It's free, it works on everything, and under the hood it's just a folder of markdown files on your computer. Obsidian calls this folder a "vault." That's your second brain.

**What the vault actually looks like on your computer:**

```
My Vault/
├── Map/              ← Basecamps live here. Your navigation hubs.
├── Calendar/         ← Daily notes, organized by month and week.
│   └── March/
│       └── Week 1/
│           ├── 2026-03-03.md
│           └── 2026-03-04.md
├── Downloads/        ← Raw inputs. Meeting transcripts, PDFs, docs,
│                       anything you want AI to process.
├── Attachments/      ← Images, exports, diagrams. Non-markdown files.
├── Templates/        ← Instructions for AI. How to build notes, not forms to fill in.
├── repos/            ← Git repos that live inside your vault. AI sees them,
│                       Obsidian ignores them. Clone your projects here.
├── CLAUDE.md         ← Your instruction file. AI reads this every session.
├── MEMORY.md         ← Things AI should remember across conversations.
└── [everything else] ← Knowledge notes, project docs, tickets, personal
                        notes. All in the root. No subfolders needed.
```

**This is a framework, not a rulebook.** Everything below is how I've set up my system. It works as-is, but it's also just scaffolding. Add folders, rename things, create templates I didn't think of. Some people will use it verbatim. Some will reshape it into something I wouldn't recognize. Both are the right answer.

#### Basecamps: hub notes that anchor entire topics

A Basecamp is a hub note for a topic or area of your life. Your "Work Project" Basecamp links to every related meeting summary, decision, ticket, and person involved. Your "Fitness" Basecamp links to your training plan, workout logs, and health research. Basecamps don't contain everything about a topic. They link to everything about a topic. When you need to get up to speed on something, you start at its Basecamp and follow the links.

You might have five Basecamps. You might have twenty. They grow as your life gets more complex.

#### Notes: the building blocks

Every piece of knowledge is a note. A plain text file. Meeting summaries, project overviews, recipes, real estate offers, fitness plans. All notes.

Most notes live in the root of the vault. Not buried in subfolders. This is intentional and it's the most important design decision in the whole system. Traditional file systems make you think in hierarchies: "Does this go in Work or Health?" That question is a waste of time, and worse, each file can only live in one place.

Instead, the vault is flat. Notes live in one big pool. You find them through names (consistent naming conventions) and links. A note about a project references a person and links to that person's note. A meeting summary discusses a decision and links to the ticket where it plays out. Over time, every note becomes part of a web. Not filed in a drawer. Connected to everything it relates to.

Each note has a small section at the top called the **Compass**. A few sentences to get your bearings: what is this note about, and where does it connect? Links to related notes so you're never stranded wondering how you got there or what else is related.

#### How it all connects

The **Map** folder holds your **Basecamps**. Each Basecamp links to individual **notes** across the vault. Those notes link to each other, to other Basecamps, and to **daily notes** in Calendar. Every note has a **Compass** pointing to related notes. Links go in every direction.

The result is a web where you can start anywhere and get anywhere. When you ask AI a question, it doesn't just search for keywords. It follows the links. "What did we decide about vendor pricing?" leads to the meeting summary, which links to the ticket, which links to the Basecamp, which has the full history. One question, full context.

This also applies to people. As you process meetings over time, names keep appearing in context. You never sit down and build a stakeholder directory. But after a few months, the system knows who the key players are, what they work on, and which projects they're connected to. You walk into every conversation with context you didn't have to prepare.

The more notes you add, the denser the web gets. The denser the web, the better AI can trace through it. This is why the system compounds. It's not just accumulating files. It's accumulating understanding.

#### Quick reference: the navigation metaphor

The system borrows from backcountry travel:

- **Map** — The folder that holds your hub notes. Your territory overview.
- **Basecamp** — A hub note for a topic. Links to everything related. Your starting point for getting up to speed.
- **Compass** — The orientation section at the top of each note. What is this, and where does it connect?
- **Trail** — A curated sequence of linked notes that walks through a topic in order. Great for onboarding or teaching.

You don't build most of this by hand. You tell AI to do it. "Create a Basecamp for this project." "Summarize this meeting and link it to the relevant notes." The AI reads your instruction file, knows your conventions, and builds it the way you've taught it to.

#### The other folders

**Calendar** holds your daily notes, organized by month and week. Over time this becomes a searchable journal. "What was I working on the first week of February?" AI knows.

**Downloads** is your inbox. Drop a meeting transcript, a contract, an export from some app. Tell AI to process it. The raw file stays in Downloads. The structured knowledge goes into the vault as notes.

**Attachments** holds non-text files: images, diagrams, data exports.

**Templates** are instructions for AI, not forms for you to fill in. Every other knowledge system gives you a blank template and says "fill this in." That's homework. In this system, templates teach AI how to build things for you. The Basecamp template tells AI what sections to create, how to structure the Compass, and how to link to existing notes. You say "create a Basecamp for my house renovation" and AI reads the template and builds it. The template is the recipe. AI is the cook.

The starter vault includes templates for daily notes, Basecamps, meeting summaries, and weekly status reports.

**repos/** is for code repositories. If you work with code, clone your projects here. AI can reference your knowledge notes while working in your codebase, and vice versa. Obsidian ignores this folder so repo files don't clutter your vault.

### 2. An instruction file that teaches AI how you work

There's a special file (`CLAUDE.md`) that AI reads at the start of every conversation. Think of it as a briefing document:

- Here's who I am and what I'm focused on
- Here are my active projects and areas of life I'm tracking
- Here are the people who come up a lot (and how to spell their names)
- Here's how I like my notes formatted
- Here's what to include in a meeting summary and what to leave out
- Here's how I communicate (my tone, my style, what to avoid)

You can start with five lines. "I'm a contracts director at a nonprofit. My main projects are X, Y, Z. I prefer concise summaries over detailed ones." That alone puts you ahead of most AI users because now every conversation starts with context instead of from scratch.

Over time, you add more. You notice AI formatted something wrong, so you add a rule. You catch it using a word you'd never use, so you note that. The file grows organically based on real experience, not upfront planning.

### 3. A dual-purpose loop: AI creates content AND retrieves it

This is the part that surprised me most about my own system.

Your primary interaction with this whole thing is talking to the AI. Not writing notes in Obsidian. Not manually organizing files. Talking. You can absolutely write notes manually if you want to. That's the beauty of this system. It's hybrid. But here's what actually happened after two months of using it: I thought I'd be writing a lot more by hand. I expected to spend time in Obsidian crafting notes, organizing things, building out the structure myself. Instead, I just talk to Claude. I tell it what happened in a meeting, what I'm working on, what I need to remember. It generates the notes, files them in the right place, links them to everything else. And then Obsidian becomes this beautiful visual layer where I can open a Basecamp, click through to the notes connected to it, follow links between topics, and just browse what's been built. Or I skip Obsidian entirely and ask Claude a question right in the chat. "What did we decide about the pricing portal?" And it searches the vault and gives me the answer. Both paths work. That's the freedom of it.

And "talking" goes in a few directions:

**You think out loud.** This is the one that surprised me. You're not just feeding it data and asking it questions. You're having actual conversations. You're brainstorming a business idea, riffing on a problem, thinking through a decision. And what starts as a casual chat naturally turns into something structured. You're talking through an idea for a new product line and somewhere in the conversation it suggests, "This is getting substantial. Want me to create a Basecamp for this?" So now that idea has a home. A few days later you're thinking about it again, and another note gets created. Then you have a meeting where someone mentions something related, and when AI processes that transcript it goes, "Hey, this connects to the product line idea from last week. Let me link it." You didn't plan any of that. You were just talking. The vault grew around the conversation.

**You give it raw information and it comes back organized.** Drop in a meeting transcript. Share a document you just received. Paste in the details from a real estate offer. Log a workout. The AI takes whatever you give it, structures it into notes, files it in your vault, links it to the relevant topics, and adds a Compass so it's findable later. A 45-minute meeting becomes a linked, searchable summary in a few minutes. A messy contract becomes a clean note with the key terms pulled out.

**You ask it questions and get real answers.** "What did we decide about the pricing portal last month?" "What were the terms on that house offer?" "How have my workouts been trending?" AI searches through your notes, traces the links, and gives you a confident answer with context. You didn't dig through files. You asked, and the system already had it.

**The creation IS the curation.** You're not maintaining a knowledge base separately from doing your work. The knowledge base builds itself as a natural byproduct of brainstorming, processing meetings, drafting documents, and thinking out loud. And then that same knowledge base becomes the thing AI searches when you ask questions. The more you put in, the more useful it gets. Not because the AI improved. Because *your* knowledge base got richer.

**Everything AI builds is real.** The notes AI creates aren't hidden in some database or locked in a chat history. They're actual files sitting in your vault. You can open them in Obsidian, read them, edit them, browse between them. The AI builds the knowledge base, and Obsidian gives you a visual way to explore it. You always have both paths.

---

## Making It More Powerful (Go As Deep As You Want)

The basic system works with just notes and an instruction file. How far you go is entirely up to you.

**Start simple:**
- After a meeting or important conversation, tell AI what happened. It creates the note, links it, and adds a Compass. Or write it yourself in Obsidian. Both work.
- Keep a daily note. A few bullets about what you worked on, what's pending, any decisions made.
- When you make a decision, capture the reasoning. This is gold when you need to reference it later.

**Go deeper when you're ready:**
- Feed it documents from your life. Contracts, proposals, reports, recipes, research. Drop them in Downloads and tell AI to process them.
- Share your writing samples and let it learn your voice. Once it understands how you communicate, it can draft things that sound like you.

**For the ambitious:**
- Build out full knowledge bases on specific subjects. Individual notes are useful, but when they start linking to each other, the system surfaces connections you wouldn't have made yourself.
- Create Basecamps and Trails for your most active areas. The more structured your hubs, the better AI navigates between topics.
- Analyze codebases or document libraries to map expertise and identify knowledge gaps.

**On privacy:** You control what goes in. Some people feed it everything. Others keep it strictly professional. The structure works at any level. It just gets more powerful the more context it has. Never put anything in that you're not comfortable with.

---

## What the Payoff Looks Like

After a few weeks of using this, some things start to shift:

**Your knowledge compounds.** The 50th note is more useful than the 5th, because it has 49 other notes to connect to. Every meeting summary links to the project it's about, the people who were there, and the decisions that were made. Every new note makes every existing note more findable. Most productivity tools accumulate clutter. This one accumulates understanding.

**You have a knowledge partner, not just an assistant.** This isn't AI that answers one question and forgets. It's AI that knows the full history of your projects, your personal life, your decisions, your interests. Ask it to draft something and it already has context. Ask it a question and it traces through weeks of connected notes to give you a real answer. The more you use it, the more it has to work with.

**You catch connections you'd miss.** When you add a note about a new problem, AI can link it to a similar problem from two months ago that you forgot about. The network does pattern matching that your memory can't.

**You build a memory that doesn't fade.** Decisions, context, reasoning. All searchable and linked. Why did you choose that contractor? What were the terms of that deal? What did the doctor say in March? The system has it. You don't have to reconstruct it from memory or dig through email.

**You stop re-explaining yourself.** AI knows your projects, your people, your preferences. Conversations start where you left off, not from zero. But honestly, by this point that's the least interesting thing about the system.

---

## See It In Action

### Work: When AI connects what you forgot

Sarah is a product director. Her vault has meeting summaries, project notes, vendor contacts, and Basecamps for the projects she manages.

**Tuesday.** Sarah drops a quarterly planning meeting transcript into Downloads. AI creates the summary, links it to today's daily note and the relevant project Basecamps. One agenda item: a push to reduce vendor costs across the board.

**Thursday.** She drops a vendor call transcript. The vendor quotes $2.80 per unit for packaging. AI processes it, links it to the Product Launch Basecamp and the Tuesday planning meeting.

But then it does something she didn't ask for. In the summary, it adds: "For reference, this vendor quoted $2.40 per unit for similar packaging in the October product launch. See the October 14 daily note, linked from the Fall Launch Basecamp."

Sarah had completely forgotten about that. Different project, three months ago. But the vault had it. The October meeting was linked to the vendor's contact note and the Fall Launch Basecamp. When AI saw the same vendor discussing similar packaging, it traced the links and surfaced the price difference.

**The next morning.** Sarah tells AI to draft an email referencing the $2.40 rate. AI knows her writing style from the instruction file. She adjusts one line and sends it.

**The following week.** She gets pulled into a cross-functional meeting with people she hasn't worked with. AI processes the transcript and identifies participants by pulling in what it already knows: "Lisa Chen (VP of Operations, last appeared in Q3 planning)" and "Marcus from Atlanta warehouse (same contact from the November shipping delay)."

Sarah didn't build a contact directory. But over four months of processing meetings, AI built a picture of who knows what. She walks into every meeting with background she didn't have to prepare.

### Personal: Planning a backpacking trip

Jake is planning a 4-day backpacking trip in the North Cascades with two friends.

**First conversation.** Jake tells AI about the trip and asks it to create a Basecamp. AI builds "North Cascades Trip" with a Compass linking to his Fitness Basecamp and sections for route, gear, permits, and food.

**Over the next week.** Jake has a few conversations as he researches. Permit details, gear decisions, route planning. Each conversation generates linked notes. A permit note, a gear checklist, a route note with daily mileage. All connected back to the Basecamp.

**Packing night.** Jake opens the Basecamp in Obsidian. Everything is right there. Or he asks AI: "What am I still missing?" AI checks the gear list against route conditions, notices he hasn't added a water filter, and flags a cold front in the forecast.

**After the trip.** Jake tells AI what worked and what didn't. AI adds a trip report, updates the gear checklist with lessons learned. Next time he plans a similar trip, all of this context is there.

---

## Building the Habit

The setup takes 20 minutes. The value comes from using it consistently. Here's how it typically builds:

**First two weeks:**
- Keep doing daily notes. Tell AI what happened, or type them yourself. A few bullets is fine.
- When something comes up that you'll want to reference later, tell AI to make it a note. Or write it yourself. The point is it gets into the system.
- When AI gets something wrong, add a line to your instruction file. "Don't do X. Do Y instead." This is how the system learns your preferences.

**After a few weeks:**
- You'll notice patterns. Topics that keep coming up. Projects generating lots of notes. Tell AI to create Basecamps for those.
- Start feeding AI more of your existing data. Documents, contracts, writing samples, whatever you reference regularly.

**After a month:**
- Your instruction file has real depth, your daily notes form a searchable journal, and notes are linking to each other in ways that surface connections you wouldn't have made on your own. The system grows because you're using it, not because you're maintaining it.

---

## Why Portability Matters

Some AI tools have started adding memory features. ChatGPT remembers things. Claude remembers things. And it's helpful. But here's the catch: Claude's memory doesn't know what you told ChatGPT. ChatGPT's memory doesn't follow you into Gemini. Your phone app doesn't share context with your laptop. Every company is building its own little silo of your context, and they don't talk to each other. On purpose.

The more you tell one tool, the harder it is to leave. That's not memory. That's a loyalty program dressed up as a feature.

Your dentist doesn't own your x-rays. Your bank doesn't own your transaction history. But right now, the AI that knows your job, your goals, your writing style? That company owns all of it. The moment you want to try something better, you start from zero.

This system fixes that. Everything is plain text files. Markdown. The most universal, future-proof format there is. If Obsidian disappears, the files still work. If Claude disappears, the files still work. If something better drops next week, you take your files and plug them into the new thing. Full context, day one, no re-explaining.

Own the playbook. Rent the tech.

---

## FAQ

**What does this cost?**
Obsidian is free. The AI tool is where pricing comes in. Claude Code is usage-based (you pay for what you use). Claude Pro ($20/month) gives you access to Claude Cowork. Other providers have their own pricing for file-system AI tools. The landscape is evolving fast, so check current pricing when you're ready to start.

**How is this different from other PKM tools like Notion or Roam?**
Most PKM tools are about organizing notes. This system is about AI working inside your notes. AI reads your instruction file, processes raw inputs into structured notes, builds the links, and searches across all of it when you ask questions. Traditional PKM tools give you a place to put things. This gives you a partner that does the putting and the finding.

**Does it have to be Obsidian?**
Not technically. Anything that edits markdown files could work. But Obsidian is what I use and recommend. It handles linking natively, has a graph view that shows your knowledge network visually, and it's free. More importantly, everything is still just files on your computer. If you ever wanted to switch, you take your vault with you.

**How long before it starts feeling useful?**
A few days if you commit to daily notes and the instruction file. A few weeks before the linking and compounding effect really kicks in. The first time you ask AI a question about something you noted three weeks ago and it gives you a perfect answer with context, you'll get it.

**I barely use AI now. Is this overkill?**
Maybe. If you're happy with how you manage your information, you don't need this. But if you've ever thought "I know I wrote this down somewhere" or "I spend too much time getting AI up to speed on my situation," this solves those problems.

**What if I don't want to share personal data with AI?**
You control exactly what goes in. The system works fine with just work notes. You never have to share anything you're not comfortable with. Start with what feels safe and expand if and when you want to.
