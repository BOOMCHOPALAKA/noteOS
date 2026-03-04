# pkmOS — Building Your Second Brain with AI
*A practical guidebook to building your own AI-powered personal knowledge management system that connects everything you know, forgets nothing, and gets more helpful the more you use it.*

## What This Is (and Why You Should Care)

Imagine having a personal Wikipedia for your entire life. Not just work. Everything. The projects you're managing, the side business you're building, the house you're trying to buy, the research you did last month on a health question, the conversation with your financial advisor, the recipe you perfected over the summer. All of it indexed, linked together, and searchable. Not buried in email threads or scattered across apps. Structured, connected, and growing every day.

Now imagine an AI that can search through all of it. You ask "what did we decide about the vendor contract?" and it traces through your notes, finds the meeting where it was discussed, pulls up the decision and the reasoning behind it. You ask "what were the terms Martin proposed on the house?" and it pulls up the negotiation timeline. You ask "draft an update for my team" and it already knows the status, the people, the blockers, and your writing style. You get pulled into a meeting with someone you've only met once, and it tells you who they are, what they work on, and the last time they came up in your notes. It doesn't need a briefing. It's been building the knowledge base alongside you.

That's what this is. Personal knowledge management, reimagined as an AI-powered "operating system" for your life. Except this OS runs on markdown files and conversations, not code. It gets more helpful every week because every note, every conversation, every document you feed it makes the whole system more connected and more useful. Work, personal, side projects, whatever matters to you. It's all one system.

I'm not a developer. There's no code involved here. Everything is plain text files and an AI tool that can read them. I've been using this system every day for the past couple months. The time savings alone are worth it. The way it organizes your thinking, the brainstorming sessions it enables, the fact that it can draft something in your voice without you explaining your voice. All of that is great. But the thing that's surprised me most is how accurate the AI becomes when it has your actual knowledge base to work from. It's not guessing. It's searching through your notes, tracing the links, pulling up what was really said and what was actually decided. I've had it recall details from weeks-old meetings to help me give someone an update on the spot. I was in a meeting where I asked it about something that happened a while back, it traced through the vault, and gave me context that nobody in the room remembered. That opened some eyes. When AI has real source material to work with instead of just its training data, the answers get remarkably reliable. That was the most delightful surprise of this whole system for me.

The key ingredient is an AI that can see and work within your file system. Not a chat window where you paste things in. An actual tool that lives in your vault, reads your files, creates new ones, edits existing ones, and follows the links between them. Right now that's tools like Claude Code, Claude Co-work, or similar tools from other providers. The specific tool doesn't matter. What matters is it can read and write to a folder on your computer. That's the unlock.

And yes, it also means you never re-explain yourself. Most people use AI like a search engine with personality. Every conversation starts from zero. This system doesn't. But that's just the entry point. The real value is having a knowledge partner that compounds over time.

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

**You already use AI and want the next level.** You're past the basics. You want AI that knows your writing style, your team, your active projects, your communication preferences. You want to drop a meeting transcript and get back a linked, cross-referenced summary that connects to everything else you've been working on. You want to ask a question and have it pull context from three months of accumulated knowledge. This is the system for that.

**You're technical and want to build on this.** Developers, engineers, technical leads. You can customize the instruction file for code review workflows, architecture decision records, sprint planning, codebase analysis. The whole thing is just text files. Fork it, modify it, make it yours.

The common thread: if you've ever thought "I know I wrote this down somewhere" or "I wish AI already knew my situation," this is the fix. The system scales from five notes to five hundred. Start where you are.

---

## How It Actually Works

There are three things happening:

### 1. A structured place for your knowledge

I use [Obsidian](https://obsidian.md). It's free, it works on everything, and under the hood it's just a folder of markdown files on your computer. Obsidian calls this folder a "vault." That's your second brain. Text files, linked together, living on your machine.

**What the vault actually looks like on your computer:**

Think of the vault as a top-level folder that lives on your machine. Everything goes in it or through it. Here's the structure:

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

**This is a framework, not a rulebook.** Everything below is how I've set up my system. It works as-is. You can use it exactly like this and never change a thing. But it's also just scaffolding. Add folders that make sense for your life. Rename things. Create templates I didn't think of. The structure is a starting point, not a ceiling. Some people will use it verbatim. Some will reshape it into something I wouldn't recognize. Both are the right answer.

Now let me explain the philosophy behind the default structure, because understanding why it's set up this way helps whether you keep it or change it.

#### The Map: your territory overview

Open the Map folder and you see every topic you've built knowledge around: your projects, your interests, your areas of responsibility. It's the table of contents for your entire system. The Map answers a simple question: "What do I have knowledge about?"

This is the only folder (besides root) where your actual writing lives. Everything in the Map folder is a Basecamp.

#### Basecamps: hub notes that anchor entire topics

A Basecamp is a hub note for a topic or area of your life. Think of it like a home page. Your "Work Project" Basecamp links to every related meeting summary, decision, ticket, and person involved. Your "Real Estate" Basecamp links to properties, negotiations, loan details, and contact notes. Your "Fitness" Basecamp links to your training plan, workout logs, gear notes, and health research.

Basecamps don't contain everything about a topic. They link to everything about a topic. The actual knowledge lives in individual notes scattered across the vault. The Basecamp pulls it all together into one navigable view. When you need to get up to speed on something, you start at its Basecamp and follow the links.

You might have five Basecamps. You might have twenty. They grow as your life gets more complex. And because they're just notes with links, they cost nothing to create and maintain.

#### Notes: the building blocks

Every piece of knowledge in the system is a note. A plain text file. A meeting summary is a note. A project overview is a note. A recipe you perfected is a note. The details of a real estate offer are a note. Your fitness plan is a note.

Most notes live in the root of the vault. Not buried in subfolders. This is intentional and it's the most important design decision in the whole system. Traditional file systems make you think in hierarchies: "Does this document go in the Work folder or the Health folder? What about the Benefits subfolder?" That question is a waste of time, and worse, it means each file can only live in one place.

Instead, the vault is flat. Notes live in one big pool. You find them through their names (consistent naming conventions make this easy) and through links. When a note about a project references a person, it links to that person's note. When a meeting summary discusses a decision, it links to the ticket where that decision plays out. Over time, every note becomes part of a web. Not filed in a drawer somewhere. Connected to everything it relates to.

This is what makes the system searchable by both you and AI. There's no hierarchy to navigate. There's a network to traverse.

Each note has a small section at the top called the **Compass**. A few sentences to get your bearings: what is this note about, and where does it connect? It's not a separate note or a special file. It's just a heading inside every note with a brief summary and links to related notes. But it does enormous work. It means you can land on any note in the vault and immediately understand what you're looking at and where to go next. You're never stranded wondering how you got there or what else is related. A note without a Compass is an island. A note with one is part of the network.

#### How it all connects

Here's the magic. None of this is a rigid hierarchy. It's a network with natural entry points.

The **Map** folder holds your **Basecamps**. Each Basecamp links to dozens of individual **notes** scattered across the vault root. Those notes link to each other, to other Basecamps, and to your **daily notes** in Calendar. Every note has a **Compass** at the top pointing to related notes. And links go in every direction. A meeting summary links to the project Basecamp. The project Basecamp links back to the meeting summary. A ticket links to the person working on it. That person's note links to every ticket they've touched.

The result is a web where you can start anywhere and get anywhere. Start at a Basecamp and drill into details. Start at a daily note and trace outward to the projects discussed that day. Start at a single note and follow its Compass to the bigger picture. AI can do this too. When you ask a question, it doesn't just search for keywords. It follows the links. "What did we decide about vendor pricing?" leads to the meeting summary, which links to the ticket, which links to the Basecamp, which has the full history. One question, full context.

This also applies to people. As you process meetings and conversations over time, names keep appearing in context. A person gets mentioned in a meeting summary, linked to a project, referenced in a decision. You never sit down and build a stakeholder directory. But after a few months, the system knows who the key players are, what they work on, when they last came up, and which projects they're connected to. When that person shows up in a new transcript, AI already has background on them. You walk into every conversation with context you didn't have to prepare.

The more notes you add, the denser the web gets. The denser the web gets, the more connections exist. The more connections exist, the better AI can trace through them to give you complete answers. This is why the system compounds. It's not just accumulating files. It's accumulating understanding: about your projects, your decisions, and the people involved in them.

#### The other folders

**Calendar** is for time-based notes. Your daily notes live here, organized by month and week. Each day is a file. It captures what happened, what's pending, decisions made, personal stuff. Over time this becomes a searchable journal that AI can reference. "What was I working on the first week of February?" It knows.

**Downloads** is your inbox. Drop a meeting transcript in there, a contract PDF, an export from some app. Then tell AI to process it. "Summarize this transcript and add it to today's daily note." "Pull out the key terms from this contract and create a note." The raw file stays in Downloads. The structured knowledge goes into the vault as notes.

**Attachments** holds non-text files. Images, diagrams, data exports. Things you want to reference from notes but that aren't notes themselves.

**Templates** are instructions for AI, not forms for you to fill in. This is a subtle but important distinction. Every other knowledge system gives you a blank template and says "here, fill this in." That's homework. In this system, templates teach AI how to build things for you. The Basecamp template doesn't say "write your overview here." It tells AI what a Basecamp is, what sections to create, how to structure the Compass, and how to link it to existing notes. You never see the template. You say "create a Basecamp for my house renovation" and AI reads the template, reads your vault, and builds it. The template is the recipe. AI is the cook. You're the one who said "I'm hungry."

The starter vault includes templates for daily notes, Basecamps, meeting summaries, and weekly status reports. Each one has visible structure (what the note looks like) plus hidden AI instructions (how to build it, what to check for, what conventions to follow). If you're writing notes yourself in Obsidian, you can use the templates directly. But the real power is letting AI use them on your behalf.

**repos/** is for code repositories that live inside your vault. If you're a developer or work with code, clone your projects here. AI tools like Claude Code can see everything in your vault, which means they can reference your knowledge notes while working in your codebase, and vice versa. Your project documentation, meeting summaries, and technical notes all become context for code work. Obsidian is configured to ignore this folder so repo files don't clutter your vault search or graph view. The vault's git also ignores it since each repo has its own git history.

### 2. An instruction file that teaches AI how you work

This is where it gets interesting. There's a special file (in my case called `CLAUDE.md`) that AI reads at the start of every conversation. Think of it as a briefing document for your AI assistant. It says things like:

- Here's who I am and what I'm focused on (work, personal, whatever)
- Here are my active projects and areas of life I'm tracking
- Here are the people who come up a lot (and how to spell their names)
- Here's how I like my notes formatted
- Here's what to include in a meeting summary and what to leave out
- Here's how I communicate (my tone, my style, what to avoid)

You can start with five lines. "I'm a contracts director at a nonprofit. My main projects are X, Y, Z. I prefer concise summaries over detailed ones." That alone puts you ahead of most AI users because now every conversation starts with context instead of from scratch.

Over time, you add more. You notice AI formatted something in a way you don't like, so you add a rule. You realize it's including irrelevant details in meeting summaries, so you add a filter. You catch it using a word you'd never use, so you note that. The file grows organically based on real experience, not upfront planning.

### 3. A dual-purpose loop: AI creates content AND retrieves it

This is the part that surprised me most about my own system.

Your primary interaction with this whole thing is talking to the AI. Not clicking around in Obsidian. Not manually organizing files. Talking.

And "talking" goes both directions:

**You give it information.** Drop in a meeting transcript. Share a document you just received. Explain a decision you made and why. Log a workout. Paste in the details from a real estate offer. Vent about a problem you're stuck on. The AI takes whatever you give it, structures it into notes, files it in your vault, links it to the relevant topics, and adds a Compass so it's findable later. You dumped raw information. It came back organized.

**You ask it questions.** "What did we decide about the pricing portal last month?" "What were the terms on that house offer?" "How have my workouts been trending?" "What's the status of Project X?" AI searches through your notes, traces the links, and gives you a confident answer with context. You didn't dig through files. You didn't open Obsidian and search. You asked, and the system already had it.

**The creation IS the curation.** You're not maintaining a knowledge base separately from doing your work. The knowledge base builds itself as a natural byproduct of using AI to process meetings, draft documents, write project notes, and organize information. And then that same knowledge base becomes the thing AI searches when you ask questions.

The more you put in, the more useful it gets. Not because the AI improved. Because *your* knowledge base got richer.

**Choose your own adventure.** There are two ways to use this system and both are valid. You can talk to the AI for everything: give it information, ask it questions, have it build and retrieve. The AI is your interface. Or you can open Obsidian and browse your vault directly. Click through Basecamps, follow links, read notes. The vault is your interface. Most people do both depending on the moment. Quick question? Ask the AI. Want the full picture on a project? Open the Basecamp and explore. The point is the system works either way because everything the AI builds is real, readable, browsable files sitting in your vault.

**What "talking to AI" actually means here.** This isn't copy-pasting text into a chat window. You're using an AI tool that lives inside your vault. Tools like Claude Code or Claude Co-work run directly on your file system. You talk, and the AI reads your files, creates new notes, edits existing ones, follows links, and searches across everything you've built. It's not a separate app you switch to. It's working inside your system. Other AI providers are building similar tools. The important thing is the AI can see your files and work within them, not just receive text you paste in.

---

## The Navigation System

As your vault grows, you need a way to navigate it. I use a simple set of concepts borrowed from backcountry travel:

- **Map** — The folder that holds your hub notes. Your territory overview. Just like a map shows you what's out there, this folder shows you what topics you've built out.
- **Basecamp** — A hub note for a topic. Links to every related note, decision, document, and person. When you want to get up to speed on something, you start at its Basecamp. "Project X Basecamp" or "Real Estate Basecamp" or "Fitness Basecamp."
- **Compass** — The orientation section at the top of each note. Gets you your bearings: what is this about, and where does it connect? Links to related notes so you always know where to go next. This is the most important habit. A note with a Compass is navigable. A note without one is an island.
- **Trail** — A curated sequence of linked notes that walks through a topic in order. Not random browsing. Intentional paths through your knowledge. Great for onboarding or teaching.

Here's the important part: **you don't build most of this by hand.** You tell your AI to do it. "Create a Basecamp for this project." "Summarize this meeting and link it to the relevant notes." "Build me a Trail that walks through how this decision got made." The AI reads your instruction file, knows your conventions, and builds it the way you've taught it to. You're directing, not constructing.

You don't need all of these on day one. Start with links and Compass sections. The rest emerges as your vault grows.

---

## Making It More Powerful (Go As Deep As You Want)

The basic system works with just notes and an instruction file. But you can make it dramatically more powerful by feeding it more of your existing data. How far you go is entirely up to you.

**Start simple:**
- After a meeting or important conversation, tell AI what happened. "Here's what we discussed in the vendor call today." It creates the note, links it to the right places, and adds a Compass. You can also write notes yourself in Obsidian if you prefer. Both work. The point is information gets into the system.
- Keep a daily note. Tell AI what you worked on, what's pending, any decisions made. Or open the template and type it yourself. A few bullets is fine either way.
- When you make a decision, capture the reasoning. "We went with Vendor B because of the lead time. Add this to the project notes." This is gold when you need to reference it later.

**Go deeper when you're ready:**
- Feed it documents from your life. Contracts, proposals, reports, financial records, recipes, research. Whatever you reference regularly. Drop them in Downloads and tell AI to process them. Now AI can answer questions about them without you digging through files.
- Share your writing samples (emails, reports, messages) and let it learn your voice. Once it understands how you actually communicate, it can draft things that sound like you instead of sounding like a robot.
- Drop meeting transcripts into the vault and tell AI to process them. "Summarize this and add it to today's daily note." A 45-minute meeting becomes a linked, searchable summary in a few minutes. This is one of the biggest time savers.

**For the ambitious:**
- Build out full knowledge bases on specific subjects by adding notes over time. Individual notes are fine on their own, but when they start linking to each other, the system surfaces connections you wouldn't have made yourself. A note about your fitness routine links to your health research which links to the gear you bought.
- Create Basecamps and Trails for your most active areas. The more structured your hubs are, the better AI navigates between topics.
- Analyze work repositories, codebases, or document libraries to map expertise and identify knowledge gaps on your team

**On privacy:** You control what goes in. Some people might feed it everything. Others might keep it strictly professional. Some might have a combined system, some might keep work and personal separate. The structure works at any level. It just gets more powerful the more context it has to work with. Never put anything in that you're not comfortable with.

---

## What the Payoff Looks Like

After a few weeks of using this, some things start to shift:

**Your knowledge compounds.** The 50th note is more useful than the 5th, because it has 49 other notes to connect to. Every meeting summary links to the project it's about, the people who were there, and the decisions that were made. Every new note makes every existing note more findable. Most productivity tools accumulate clutter. This one accumulates understanding.

**You have a knowledge partner, not just an assistant.** This isn't AI that answers one question and forgets. It's AI that knows the full history of your projects, your personal life, your decisions, your interests. Ask it to draft something and it already has context. Ask it a question and it traces through weeks of connected notes to give you a real answer. The more you use it, the more it has to work with.

**You catch connections you'd miss.** When you add a note about a new problem, AI can link it to a similar problem from two months ago that you forgot about. The network does pattern matching that your memory can't.

**You build a memory that doesn't fade.** Decisions, context, reasoning. All searchable and linked. Why did you choose that contractor? What were the terms of that deal? What did the doctor say in March? The system has it. You don't have to reconstruct it from memory or dig through email.

**You stop searching for things.** Instead of digging through folders or email or Slack, you ask AI to find it. Because everything is structured and linked, it usually can.

**You stop re-explaining yourself.** AI knows your projects, your people, your preferences. Conversations start where you left off, not from zero. But honestly, by this point that's the least interesting thing about the system.

---

## See It In Action

All of the above probably makes sense in the abstract. But it clicks differently when you see what an actual day looks like. Here are two examples: one work, one personal.

### Work: When AI connects what you forgot

Sarah is a product director. She's been using the system for about four months. Her vault has meeting summaries, project notes, vendor contacts, and a handful of Basecamps for the projects she manages.

**Tuesday.** Sarah has a quarterly planning meeting with leadership. She drops the recording into Downloads (or copies the transcript from the zoom recording and pastes it directly in chat) and tells AI to process it. AI creates the summary, links it to today's daily note, and connects it to the relevant project Basecamps. Standard stuff. One of the agenda items was a push to reduce vendor costs across the board.

**Thursday.** Sarah has a call with a packaging vendor about a new product line. She drops that transcript too. AI processes it, and the vendor quotes $2.80 per unit. AI creates the summary, links it to the Product Launch Basecamp, the vendor's contact note, and the quarterly planning meeting from Tuesday (since the cost reduction initiative is relevant).

But then it does something she didn't ask for. In the summary, it adds a note: "For reference, this vendor quoted $2.40 per unit for similar packaging in the October product launch. That conversation is in the October 14 daily note, linked from the Fall Launch Basecamp."

Sarah had completely forgotten about that. It was a different project, three months ago. But the vault had it. The October meeting summary was tagged with the vendor's name, linked to their contact note, and connected to the Fall Launch Basecamp. When AI processed Thursday's transcript and saw the same vendor discussing similar packaging, it traced the links back and surfaced the price difference.

**The next morning.** Sarah tells AI: "Draft a quick email to the vendor. Reference the $2.40 rate from October and ask about the difference. Keep it conversational, not confrontational." AI knows her writing style from the instruction file. It drafts the email, she adjusts one line, and sends it.

**The following week.** Sarah gets pulled into a cross-functional meeting about a supply chain issue. She hasn't worked with half the people on the call. Afterward she drops the transcript and AI processes it. In the summary, it identifies the participants by name and pulls in what it already knows about them: "Lisa Chen (VP of Operations, last appeared in the Q3 planning meeting where she raised concerns about lead times)" and "Marcus from the Atlanta warehouse (same contact from the shipping delay in November, see that daily note)."

Sarah didn't build a contact directory. She never sat down and documented who these people are. But over four months of processing meetings, AI has seen these names appear in transcripts, linked them to the projects they were involved in, and built a picture of who knows what. Now when they show up again, the system already has context. She's walking into every meeting with background she didn't have to prepare.

**What happened here:** Two things. First, the system connected information across time. Thursday's vendor quote linked back to an October conversation Sarah had completely forgotten about. That happened because of the structure: the linking, the tagging, the Basecamps, the Compass sections all created paths AI could trace. Second, the system built knowledge about people organically. Nobody told it to create a stakeholder map. It just happened naturally as meetings were processed and names kept appearing in context. Four months in, the vault knows who the key players are, what they care about, and when they last came up. That's the compound effect. It's not just accumulating notes. It's accumulating understanding about your work, your projects, and the people in them.

### Personal: Planning a backpacking trip

Jake is planning a 4-day backpacking trip in the North Cascades with two friends. He's been researching routes, gear, and permits for a few weeks.

**First conversation.** Jake tells AI: "I'm planning a backpacking trip to the North Cascades in August. Four days, three nights. We want to do the Copper Ridge loop. Create a Basecamp for this trip."

AI creates a "North Cascades Trip" Basecamp in the Map folder with a Compass linking to his Fitness Basecamp (since he'll want to train for it) and a blank sections for route, gear, permits, and food planning.

**Over the next week.** Jake has a few conversations with AI as he researches. "Here's what I found about the permit situation for Copper Ridge. Add this to the trip notes." "I'm thinking about bringing my 45L pack instead of the 60L. What are the tradeoffs for a 4-day trip?" "Create a gear checklist based on a summer alpine trip in the PNW."

Each conversation generates notes. A permit note with dates, lottery details, and backup options. A gear checklist note. A route note with daily mileage and elevation profiles. All linked back to the Basecamp. All with Compass sections pointing to each other.

**Packing night.** Jake opens the North Cascades Trip Basecamp in Obsidian. Everything is right there. Gear checklist, route plan, permit confirmation, food notes. He can browse it directly or ask AI: "What am I still missing for the trip?" AI checks the gear list against the route conditions, notices he hasn't added a water filter to the list, and flags that the weather forecast for his dates is showing a cold front.

**After the trip.** Jake tells AI: "The trip was great. A few notes. The 45L pack was tight but worked. Copper Ridge was incredible but the snow on the north side was sketchy in early August. We should have brought microspikes. Add this to the trip notes."

AI adds a trip report note, links it to the Basecamp, and updates the gear checklist with the microspikes lesson. Next time Jake plans a similar trip, all of this context is there. He doesn't have to remember. The system remembers.

**What happened here:** Jake used the AI as his planning partner. He talked through his research, asked questions, and let AI organize everything into linked notes. When it was time to actually use the information, he had two ways in: browse the Basecamp in Obsidian, or ask AI to pull up what he needed. The same system that helped him plan helped him pack, and then captured what he learned for next time.

---

## Enough Reading. Let's Build It.

You could keep reading about this or you could have a working system in 20 minutes. Here's how.

**Step 1: Download Obsidian**

Go to [obsidian.md](https://obsidian.md) and download it. It's free. Works on Mac, Windows, Linux, and mobile.

**Step 2: Get the starter vault**

You're looking at it. This repo is the starter vault. Clone it or download the zip:

```bash
git clone https://github.com/BOOMCHOPALAKA/pkmOS.git
```

Or click the green **Code** button above and select **Download ZIP**. Unzip it and put it somewhere easy to find on your computer. Your Documents folder works great. Then open Obsidian and point it at that folder.

The starter vault comes pre-built with the folder structure from this guide: Map, Calendar, Downloads, Attachments, and Templates. It also includes:
- **An instruction file** (`CLAUDE.md`) pre-loaded with battle-tested conventions: meeting processing rules, TODO filtering, daily note structure, linking patterns, weekly report format, communication style defaults. All of it works out of the box. Just fill in the personal sections (About Me, Active Projects, People) and start using it.
- **A memory file** (`MEMORY.md`) pre-loaded with system-level patterns that AI learns to follow: how to handle recaps, how to research your vault, how to process transcripts, how to hand off between sessions. AI will add to this over time as it learns your specific preferences.
- **A daily note template** in Templates/ so every day starts with the same structure.
- **A Basecamp template** in Templates/ with the Compass section already in place.

You're not starting from scratch. You're not even filling in blanks if you don't want to. The system works immediately. The conventions, the rules, the patterns are all live. The only things that need your input are the personal sections: who you are, what you're working on, and who comes up in your conversations. You can type those in yourself, or just start talking to AI and let it fill them in based on your conversations. Either way, you're up and running.

**Step 3: Fill in your instruction file**

Open `CLAUDE.md` and fill in the basics. Five lines is enough to start:
- Who you are and what you do
- Your active projects or areas of focus (work, personal, whatever)
- People who come up a lot
- Any formatting preferences you already know you want

That's it for now. This file grows over time based on real experience, not upfront planning. Every time AI does something you don't like, you add a line. Every time it gets something right, you leave it alone.

The good news: your `CLAUDE.md` already comes loaded with conventions that work. Meeting processing, TODO filtering, daily note structure, linking rules, weekly reports, communication style. It's all there. You're not building from zero. You're personalizing a system that's already running.

**Step 4: Create your first daily note**

Tell AI: "Create a daily note for today. Here's what I worked on..." and give it a few bullets about your day. It'll create the note in the right place with the right structure. Or if you prefer, open the Calendar folder, create a note using the daily note template, and type it yourself. Either way, a few bullets is fine. This is your first deposit into the system.

**Step 5: Connect AI to your vault**

This is the part that makes it all work. You need an AI tool that can read and write files on your computer. Not a chat window. An AI that lives inside your vault.

Right now the best options are **Claude Code** and **Claude Co-work** (both from Anthropic). Open one of them and point it at your vault folder. It reads your instruction file automatically, sees all your notes, and can create and edit files directly. Other AI providers are building similar file-system tools. The specific tool will evolve. What matters is the AI can see your files and operate within them.

Once it's connected, try it. "Here's a meeting I had today. Summarize it and add it to my daily note." Or ask it something. "What did I write down yesterday?" It reads your instruction file, knows your conventions, and starts working within your system from the first conversation.

**Using a different AI tool?** The starter vault ships with `CLAUDE.md` because Claude Code auto-discovers it. But the instructions inside are just plain text. They work with any AI tool that reads files. If you're using a different tool, just rename or copy the file to match what your tool expects:

| Tool | Instruction file it reads |
|---|---|
| Claude Code / Claude Co-work | `CLAUDE.md` (auto-discovered) |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Cursor | `.cursor/rules/*.mdc` or `AGENTS.md` |
| OpenAI Codex CLI | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Windsurf | `.windsurfrules` |

The content stays the same. Only the filename changes. This is the "own the playbook" idea in practice. Your instructions are portable. The AI tool is just the engine.

That's your setup. You have a vault, an instruction file, and a daily note. The system is live.

---

## Building the Habit

The setup takes 20 minutes. The value comes from using it consistently. Here's how it typically builds:

**First two weeks:**
- Keep doing daily notes. Tell AI what happened, or type them yourself. They don't need to be long. A few bullets is fine.
- When something comes up that you'll want to reference later (a decision, a conversation, a piece of research), tell AI to make it a note. "Create a note about the vendor pricing decision we made today." Or write it yourself in Obsidian. Either way works. The point is it gets into the system.
- When AI gets something wrong or formats something in a way you don't like, add a line to your instruction file. "Don't do X. Do Y instead." This is how the system learns your preferences.

**After a few weeks:**
- You'll notice patterns. Topics that keep coming up. Projects generating lots of notes. Tell AI to create Basecamps for those.
- Start feeding AI more of your existing data. Documents, contracts, writing samples, whatever you reference regularly.

**After a month:**
- Your instruction file has real depth, your daily notes form a searchable journal, and notes are linking to each other in ways that surface connections you wouldn't have made on your own. The system grows because you're using it, not because you're maintaining it.

---

## Why "Own the Playbook" Matters

Some of these AI tools have started adding memory features. ChatGPT remembers things. Claude remembers things. And it's helpful. But here's the catch: Claude's memory doesn't know what you told ChatGPT. ChatGPT's memory doesn't follow you into Gemini. Your phone app doesn't share context with your laptop. Every company is building its own little silo of your context, and they don't talk to each other. On purpose.

The more you tell one tool, the harder it is to leave. That's not memory. That's a loyalty program dressed up as a feature.

Your dentist doesn't own your x-rays. Your bank doesn't own your transaction history. But right now, the AI that knows your job, your goals, your writing style? That company owns all of it. The moment you want to try something better, you start from zero.

This system fixes that. Everything is plain text files. Markdown. The most universal, future-proof format there is. If Obsidian disappears, the files still work. If Claude disappears, the files still work. If something better drops next week, you take your files and plug them into the new thing. Full context, day one, no re-explaining.

Your knowledge, your preferences, your voice, your workflows. Those are yours. They live in files on your computer. The AI is just the engine that reads them and does work based on what they say.

Own the playbook. Rent the tech.

---

## FAQ

**Do I need to be technical to do this?**
No. If you can have a conversation, you can do this. Most of the system builds itself through talking to AI. You tell it what happened, it creates the notes. You ask a question, it finds the answer. The files underneath are plain text, and the structure is just folders and naming conventions. You can open Obsidian and browse everything directly whenever you want, but you never have to. There's no code involved unless you want there to be.

**What does this cost?**
Obsidian is free. The AI tool is where pricing comes in. Claude Code is usage-based (you pay for what you use). Claude Pro ($20/month) gives you access to Claude Co-work. Other providers have their own pricing for file-system AI tools. The landscape is evolving fast, so check current pricing when you're ready to start.

**How is this different from other PKM tools like Notion or Roam?**
Most PKM tools are about organizing notes. This system is about AI working inside your notes. You're not just storing knowledge and manually linking things. AI reads your instruction file, processes raw inputs into structured notes, builds the links, and then searches across all of it when you ask questions. The vault is the knowledge base. AI is the engine that builds it and retrieves from it. Traditional PKM tools give you a place to put things. This gives you a partner that does the putting and the finding.

**How is this different from just using ChatGPT/Claude normally?**
Two big differences. First, normal AI use is stateless. Every conversation starts fresh. This system gives AI persistent context through files it reads at the start of every session. Second, the AI isn't in a chat window. It's running inside your file system using tools like Claude Code or Claude Co-work. It can read your notes, create new ones, edit existing ones, and trace links between them. That's fundamentally different from pasting text into a chat box and getting a response back.

**What if I don't want to share personal data with AI?**
You control exactly what goes in. The system works fine with just work notes. You never have to share anything you're not comfortable with. Start with what feels safe and expand if and when you want to.

**Does it have to be Obsidian?**
Not technically. Anything that edits markdown files could work. But Obsidian is what I use and recommend. It handles linking between notes natively, has a graph view that shows your knowledge network visually, and it's free. More importantly, everything is still just files on your computer. If you ever wanted to switch, you take your vault with you.

**How long before it starts feeling useful?**
Honestly, a few days if you commit to daily notes and the instruction file. A few weeks before the linking and compounding effect really kicks in. The first time you ask AI a question about something you noted three weeks ago and it gives you a perfect answer with context, you'll get it.

**I barely use AI now. Is this overkill?**
Maybe. If you're happy with how you manage your information and your life, you don't need this. But if you've ever thought "I know I wrote this down somewhere" or "I wish I could remember what we decided about that" or "I spend too much time getting AI up to speed on my situation," this solves those problems.
