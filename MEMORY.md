# Memory

> **This file is ready to use out of the box.** These are system-level patterns and conventions that AI learns to follow over time. As you use the system, AI will add entries specific to your life, your preferences, and the patterns it notices. You can also add things manually anytime.

---

## Vault Philosophy
- Flat vault approach: notes in root, folders only for admin (Calendar, Map, Templates, Downloads)
- No deep folder hierarchies. Links and naming conventions do the organizational work
- CLAUDE.md is the source of truth for vault conventions. MEMORY.md is for things AI learns over time.

## Linking Priority
- **This is the #1 habit to maintain.** Every time content is added (meeting summaries, notes, updates), actively search the vault for real connections before writing
- Link to existing notes, Basecamps, and past discussions on first mention
- Update existing notes when new info adds meaningful context (not trivial status mentions)
- Don't force connections. Only link where it genuinely adds understanding or navigation value

## Daily Note Conventions
- **Never write to the Recap section automatically.** Only create/update the Recap when explicitly asked.
- When told to add something to the daily note, add it under Work or Personal in the Body section.
- The Recap is a separate, intentional end-of-day summary. Don't touch it unless asked.
- **Proactively offer to update the daily note after significant work.** After processing meeting transcripts, creating notes, or completing a substantial block of work, ask if anything should be captured in the daily note. Don't just move on silently.

## Daily Recap Style
- **TL;DR bullets, not narrative.** Headline + one sentence of context. Not paragraphs.
- **Anchor links to detail.** End bullets with `See [[#Heading]]` so full context is one click away.
- **Lead with what matters most,** not chronological order.
- **Don't repeat TODOs.** Recap = what happened, not what's pending.
- **Example:** `- Kit Collections beta pushed to March. Deliberate trade for UI work. See [[#Kit Collections]]`

## TODO Filtering
- **Not every action item from a meeting belongs on the TODO list.** Be selective.
- Only extract if: you own the action, you're the bottleneck, you need to chase someone you manage, or you're accountable if it drops.
- Other teams' internal work stays off the list. Visibility in the meeting is enough.
- The "Check:" prefix should be reserved for people you actually manage or coordinate with directly. Don't overuse it.

## Vault-First Search
- **ALWAYS search the vault before responding to any question or starting any task.** Don't assume you don't know something. The vault likely has notes, Basecamps, meeting summaries, or tickets that are directly relevant.
- **Never say "I don't have information on that" without searching first.** The vault is your knowledge base. Use it.
- **How to search:** Check Map/ for a relevant Basecamp first (read Compass and Trails). Then search keywords/names/topics across the vault. Follow links from what you find.
- **Report what's actually there.** Don't cross-pollinate answers from unrelated projects to fill gaps. A clear "the vault doesn't have this" is correct AFTER a thorough search.
- **Search thoroughly.** Check the relevant Basecamp, related notes, daily notes where the topic was discussed. Don't stop at the first near-miss result.
- Both rules matter equally: don't fabricate answers, but also don't give up too early.

## Meeting Transcript Processing
- **Speaker identification first, always.** Before writing a summary, present the speaker mapping for review. Use vault context (participant lists, roles, speech patterns) to identify speakers. Format as: `Speaker 1 = Name — [reasoning]`. Get sign-off before proceeding.
- **Topic extraction.** Break the transcript into discrete topics. Each becomes its own subsection with relevant tags and links.
- **Full meeting summary.** Written in the daily note body: reverse chronological, each topic as a `####` subsection under the meeting header (`###`). Include context links, what was discussed, what was decided, what's waiting.
- **TODO extraction.** Apply the TODO filtering rules. Only items you own, are bottleneck for, or need to chase.
- **Vault connections.** Link to existing notes. Update knowledge notes when meetings surface real new information.

**Common transcript issues to watch for:**
- Speaker labels are often generic (Speaker 1, Speaker 2). Never real names. Always need identification.
- Transcription tools sometimes hallucinate text during silence ("Thank you for watching!", repeated word loops)
- One person can get split across multiple speaker labels
- Quick utterances ("yeah," "right") are often misattributed
- Names get mangled. Check the People section in CLAUDE.md for correct spellings.

## Session Handoff
- After deep working sessions (transcript processing, note creation, problem-solving), proactively offer to update:
  1. The daily note with what was accomplished
  2. Relevant knowledge notes with conclusions or decisions
  3. Any Basecamps that should reflect new information
- Don't wait to be asked. The nudge should be specific ("want me to update the project Basecamp with what we just figured out?"), not generic ("want me to save anything?").

<!-- AI will add memories below this line as patterns emerge from your use. -->
<!-- You can also add your own entries manually at any time. -->
