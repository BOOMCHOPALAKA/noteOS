---
name: meeting-transcript-processing
description: Use when processing a meeting transcript, summarizing a meeting, when the user pastes or references a .txt transcript file from Downloads/Transcripts/, or when the user says "process my last meeting," "process today's meetings," or similar requests to pull transcripts directly from your transcription tool
---

# Meeting Transcript Processing

**When this skill triggers, start your response with:** `Using meeting-transcript-processing skill`

## Overview

Process your transcription tool transcripts into structured vault summaries with speaker identification, TODO extraction, vault linking, and a thinking partner takeaway layer.

## Source Format

Transcripts come from your transcription tool. Format is `Speaker N` blocks. The `Microphone` speaker is the meeting host (you). On Zoom/Teams recordings, Microphone captures the host's voice directly. Other speakers come through system audio.

**Always request transcripts with `include_microphone: true`.** Microphone lines will partially overlap with Speaker lines (echo/duplication from the same audio). When analyzing, treat Microphone as the host and deduplicate intelligently. If a Microphone line says the same thing as a Speaker line at the same timestamp, it's the same utterance. But Microphone often captures the host's words more completely (especially when they're speaking at length) while the Speaker version may be truncated or split. Use the fuller version.

Watch for hallucinated text during silence.

Files land in `Downloads/Transcripts/` named like `YYMMDD-MeetingName.txt`.

## Workflow

### 0. Acquire and Identify Recordings

If a file path or pasted transcript is provided, use that directly and skip to Step 1.

If no transcript is provided (e.g., "process my last meeting," "process today's meetings," or "log today's transcripts"):

#### 0a. Gather Sources (in parallel)

Pull all three of these at once:
1. **your transcription tool recordings:** Call `list_recordings` to find recordings. Date filters were broken until macwhisper-mcp commit `72bf158` (April 29, 2026) — the DB stores `dateCreated` as `"YYYY-MM-DD HH:MM:SS.sss"` UTC text but the filter built `T`-separated ISO strings, which sorted before the DB format under SQLite TEXT comparison and silently returned zero rows. **Verify discipline:** if a date filter returns 0 or implausibly few results, don't trust it. Pull `list_recordings` with `limit: 25` and no date filter, then filter `dateCreated` client-side (timestamps are UTC; convert to PT before matching). Same discipline applies to any future filter regression.
2. **Calendar events:** If you have calendar MCP access, call it for the same date range to get scheduled meetings with their titles and times.
3. **Vault context:** Read `[[Current Context]]`, `[[Chat Log]]`, and today's daily note for active threads, recent topics, and known meeting context.

#### 0b. Smart Title Resolution

For each recording, resolve a contextual title using this priority chain:

1. **User-chosen title** (if already descriptive, e.g., `260406-your team-DevStandup`). Use as-is.
2. **Calendar match.** Compare recording `dateCreated` and `duration` against calendar event start/end times. A recording that overlaps a calendar event window (allow ~5 min buffer on either side) maps to that event. Use the calendar event title.
3. **Vault context match.** If the AI-generated title or recording metadata references a known project, person, or thread from Current Context or active tickets, use that context to build a descriptive title. Examples:
   - AI title "Home Inspection Scheduling Call" + active Gig Harbor Purchase thread → "Gig Harbor. Home Inspection Scheduling"
   - AI title "Escrow and Property Transaction" + Belfair Sale in Current Context → "Belfair Sale. Escrow Discussion"
4. **AI title fallback.** If no calendar or vault match, use your transcription tool's AI-generated title.
5. **Generic fallback.** App name + timestamp (e.g., "Zoom Meeting 3:24 PM").

**Title format rules:**
- Use periods to separate compound titles, not dashes
- Lead with the project/client/context, then the topic
- Keep under ~60 characters
- For non-meeting recordings (JRE clips, random audio), flag as "Non-meeting" and keep the original title

#### 0c. Present the Catalog

Present the user a table with resolved titles:

| # | Resolved Title | Source Match | Type | Time | Speakers |
|---|---------------|-------------|------|------|----------|
| 1 | your team Dev Standup | Calendar: "Dev Standup" | Meeting | 10:24 AM | 8 |
| 2 | Gig Harbor. Home Inspection Scheduling | Vault: Gig Harbor Purchase | Voice Memo | 12:31 PM | 2 |
| 3 | *Non-meeting: JRE Clip* | — | Other | 12:09 PM | 2 |

**Source Match** column shows what resolved the title (Calendar event name, Vault note, AI title, or User title). This gives the user transparency into why each title was chosen.

Ask which recording(s) to process. For non-meeting recordings, note them but don't suggest processing unless the user asks.

#### 0d. Pull Transcript

Call `get_transcript` with the recording ID for the selected recording(s). **Always pass `include_microphone: true`** so the host's voice is included. The Microphone speaker is you. Deduplicate overlapping lines during analysis (same content at same timestamp = same utterance, keep the fuller version).

If the transcription tool MCP server is unavailable, fall back to asking the user for the file path.

### 1. Speaker Identification (Always First)

Before writing anything, map `Speaker N` labels to real people.

**Check the participant roster:**
- Add your recurring meeting participants here (name → role mapping)
- **Dev Standup:** your lead Lishafai, Anton, Rost, your developer, your leadimir, Dylan, Tonya
- Add your recurring meeting participants here (name → role mapping)
- **your client Weekly:** your marketing contact Lee, plus varies

Use contextual clues (who they reference, what systems they discuss, management vs IC language) to map speakers.

**Present the mapping to the user for sign-off before writing the summary.** Don't guess and iterate. Get this right first.

### 2. Load Context and Search Vault (Before Writing)

**Always read these first:**
- **[[Current Context]]** for active threads, recent decisions, and open items. This is the cross-session whiteboard and tells you what's live right now.
- **[[Chat Log]]** for recent session history. Scan for prior discussions on the same topics. Meetings are often continuations of earlier conversations, decisions, or threads.

Then search the vault for existing notes on every substantive topic mentioned in the transcript:
- Related tickets (`TICKET - [CLIENT] - ...`)
- Basecamps in `Map/`
- Recent daily notes for carried context
- Knowledge notes on the systems discussed

The goal is to process the transcript with full awareness of what's already been discussed, decided, and tracked. Not in isolation.

### 3. Write the Summary

Write into the daily note `Body > ## Work` section under a `###` heading for the meeting.

**Structure per the Meeting Summary template:**
- **Overview:** 1-2 sentences on what and why
- **[Topic sections]:** One per substantive topic. What was discussed, decisions made, action items with owners
- Action items lead with the "why" (the problem), then the task
- **Unresolved Issues** and **Next Steps** only if substantive

**Spelling corrections (apply always):**
- Transcription tools commonly mishear system or product names — add your own corrections here
- "Orion," "Oran," "Orain" = your webmaster Ellis (male)
- "Bodon" = your developer
- See CLAUDE.md People section for full list

**Linking rules:**
- `Related:` line at top when relevant Basecamps/tickets exist
- First mention of any topic with an existing vault note gets a wiki link
- Tag sections when it helps discovery

### 4. Extract TODOs

**Filtering rule (critical):** Only items where the user owns the action, is the bottleneck, needs to follow up on someone else's work, or is accountable if it drops.

**Excluded:** External vendor or partner team's internal work. Only include integration-layer issues (API connections, data flow between systems) that affect work your team owns directly.

**But:** If a ticket explicitly asks for work on a system your team owns, lead with that action item even if a vendor is involved.

**Format:** Checkbox items with anchor links to the summary heading.
```
- [ ] Follow up with Anton on SMS fix - see [[#Dev Standup]]
```

**"Check:" prefix** for following up on someone else's work (people the user manages or is responsible for chasing).

Write TODOs to the daily note TODO section under `**From today's meetings:**`, grouped by context with italicized sub-headers.

### 5. Update Knowledge Notes

When meetings surface real new info (not trivial status mentions):
- Update the relevant ticket or knowledge note
- Check whether findings belong at the Basecamp level ("does this change how someone would understand the territory?")

### 5b. Verify New Claims (Before Writing to Vault)

People say things loosely in meetings. Before writing factual claims into the vault as ground truth, do a verification pass. Once something is in a daily note or knowledge note, future sessions treat it as fact. Bad info that gets baked in here propagates silently — and it's the upstream source for sweep journals and status reports.

This step has TWO scopes: external entities (web-verifiable) and internal cross-thread claims (vault-verifiable). Both matter.

#### External entities (web-verifiable)

**What to verify:**
- **New companies, products, or platforms** mentioned for the first time. Confirm what they are, what they do, and how they relate to the entities we know. A 10-second search prevents writing "X is Y's partner" when X is actually Y's own product.
- **Claims about relationships between entities.** "X is built on Y," "X is a subsidiary of Y," "X partners with Y." Verify before writing as fact.
- **Claims about how an external system works.** If someone describes a third-party tool's capabilities or limitations, spot-check when it's quick to do so.

**Why this matters:** In the Feb 25 Chris Hansen handoff call, someone described Total Reporting as "your client's background check partner company." That characterization got written to the vault verbatim and was treated as fact for six weeks. A 10-second web search would have shown Total Reporting is your client's own branded product, not a separate partner.

#### Internal cross-thread claims (vault-verifiable)

This is the higher-risk category. Claims of the form:

- "Third time the team has discussed X."
- "Decision shifted from Y to Z."
- "Contradicts what was agreed in [prior meeting]."
- "The user flagged this in a prior session but no one picked it up."
- "[Person] approved this last week."
- "[X] is part of [larger initiative]."

These get written into Connections / This Meeting in Context / Thinking Partner sections and feel like helpful synthesis. They are also where most fabrications start. The sweep journals and status reports inherit them as facts.

**Required verification for internal cross-thread claims:**

1. **"Third time" / "decision shifted" / "contradicts X":** find the prior session/decision in the vault. Quote the source. If you can't find it, hedge ("seems like the team has discussed this before — couldn't find specific prior session") or omit.
2. **"X is part of Y initiative":** verify in vault basecamps, project files, or sweep journals that this membership claim has direct backing. **Adjacency is not membership** — if X was just mentioned in a meeting tagged Y, that's not membership. Find the direct claim or hedge.
3. **"[Person] approved/decided X":** verify the person made the decision directly. If the source is "[Person2] said [Person1] was OK with it," keep the chain visible: "Per [Person2], [Person1] was OK with it."
4. **Milestone language ("launched," "shipped," "first sale," "in production"):** verify with the deploy log, commit history, or direct stakeholder confirmation. Never translate operational language ("going live," "ready," "should be") into milestone language.

#### What to skip (don't slow down processing for these)

- Status updates, who's doing what, blockers. These are meeting context, not cross-thread synthesis.
- Systems the team already knows well. Only verify if someone makes a claim that contradicts existing vault knowledge.
- Opinions, preferences, priorities. These are what someone said, not facts to verify.

#### How to handle unverifiable claims

If something can't be quickly verified (or the search is inconclusive), you have three options:

1. **Write it with attribution preserved:** "Per [speaker], [claim]." Captures what was said without presenting it as independently verified ground truth.
2. **Hedge inline:** "Seems to be the third time this came up — I couldn't find specific prior sessions in the vault."
3. **Omit:** if the claim doesn't add enough value to justify the hedge, leave it out.

**Don't write the claim as a confident fact and let the reader figure out it's unverified.** That's the failure mode.

#### The four failure modes (don't do these)

These are the patterns that produce vault fabrications. See `_shared/source-discipline.md` and `_shared/source-discipline.md` for full detail.

1. **Inferring milestones from operational language** (going live → launched, ready → shipped)
2. **Treating adjacency as causation** (mentioned in same meeting → "is an X thing")
3. **Eroding hedges across hops** (I think → confident fact)
4. **Confident attribution from secondhand sources** (your client contact per Dylan → "your client contact approved")

### 6. Meeting Summary Output (In Chat)

After writing to the daily note, output the full meeting summary in chat. This is the same content that was written to the daily note.

### 7. TLDR

Every meeting output gets a TLDR block. **120 words max, 3-5 bullets max.** No headline paragraph on top of the bullets. The bullets are the TLDR. The headline finding, key decisions, and anything that changed from what was known before.

- **In chat:** TLDR goes at the top of the chat output, before the full summary. The user gets the punchline first.
- **In the vault note:** TLDR goes at the top of the meeting section (right after the `###` heading, before Overview). The user scanning the daily note sees the takeaway first.

### 8. Thinking Partner Output (In Chat)

After the summary, output the thinking partner layer. This is NOT a summary rehash. Lead with the thinking — don't silently update the vault without delivering the analysis in chat. Four sections, succinct, bullets only.

**Hard ceiling: 400 words total across all four sections. 3-5 bullets per section max. Skip any section with nothing to say.** A rich meeting does not justify a longer thinking partner block. Cut harder when the meeting is meaty.

**What happened**
3-5 bullets. Plain summary of what the meeting actually was.

**Takeaways / learnings**
What's new. What changed from what we knew before. What wasn't in the vault before this meeting.

**Interesting / worth flagging**
Signals, tensions, surprises, things that don't add up, things worth watching. Be direct. "I'm not sure that tracks because..." is the right move.

**Connections**
How this ties to other active threads. Pull from Current Context, Chat Log, prior daily notes, and related vault notes.

**Every connection claim must cite a vault source.** This is exactly where fabrications start — confident cross-thread synthesis without a traceable source. If you can't find the prior session or decision in the vault, hedge or skip the connection.

Examples (with required sourcing):

- "Third time the team has discussed X (see [[2026-03-28]], [[2026-04-15]]). Last time, decision was Y. Today shifted to Z."
- "The user flagged this in a prior session (link to daily note) but no one picked it up. Still open."
- "Appears to contradict what was agreed in Dev Standup two weeks ago — worth verifying ([[2026-04-22#Dev Standup]])."
- "First time this topic has come up. No prior vault context."

**If you can't cite the source, don't write the connection.** Either find it, hedge ("seems like this came up before — I couldn't find a specific prior session"), or omit. Adjacency is not connection. Vibes are not sources.

If there's no meaningful prior context, say so briefly and move on. Don't manufacture insights.

**This Meeting in Context**

After the takeaways, add a section that connects this meeting to the history of its topics. **Same source-citation rule applies.** Every cross-thread claim cites the prior vault entry.

Examples (with required sourcing):

- "Third time the team has discussed X (see [[2026-03-28]], [[2026-04-15]]). Last time, decision was Y. Today that shifted to Z."
- "The user flagged this in a prior session (link to daily note) but no one picked it up in the meeting. Still open."
- "Appears to contradict what was agreed in Dev Standup two weeks ago — worth verifying ([[2026-04-22#Dev Standup]])."
- "First time this topic has come up. No prior vault context."

The point is to make the meeting legible as part of an ongoing conversation. **Don't manufacture cross-thread claims** to fill the section. An honest "first time this topic has come up" or "no prior vault context found" is much better than a fabricated "third time" that turns into a vault fact next week.

Be direct. "The vault doesn't have this" or "I'm not sure that tracks because..." is the right move. Don't manufacture insights.

## Cut Pass

Before sending the chat output, run a cut pass on the TLDR and thinking-partner block:
- Can any bullet be removed without losing the point?
- Is there a "so what" the headline already says?
- Any transitional framing ("Let me walk through...", "Now let's turn to...") that adds nothing?
- Any "also" bullet that doesn't add a distinct point?
- Any section padded because the meeting was rich, not because there's something to say?

Cut. Short is the goal, not a failure state.

## Hard Rules

- **Brevity:** Follow `~/.claude/skills/_shared/brevity.md` for canonical word caps, cut test, and padding patterns. The ceilings in this skill are additive to that baseline.

## Common Mistakes

- Writing a summary without speaker ID sign-off first
- Padding the thinking-partner block because the meeting was long. Rich source material does not justify longer output
- Manufacturing insights to fill sections. If Connections has nothing, skip it
- Restating the meeting's content in the thinking-partner block instead of adding analysis on top
- Transitional framing between sections ("Now let me turn to takeaways")
- Summary paragraph at the end that repeats the bullets
- No em dashes. Periods.
- Including vendor-internal tickets as the user's action items
- Dismissing a ticket as a vendor issue when it actually requires work from your team
- Forgetting to read Current Context and Chat Log before processing (missing the thread of prior discussions)
- Forgetting to search the vault before writing (missing existing ticket context)
- Writing to Recap (never do this unless explicitly asked)
- Rehashing the summary in chat instead of providing the analytical layer
- Treating the meeting as a standalone event instead of connecting it to the ongoing thread
- Silently updating the vault without delivering the thinking partner output in chat. Always lead with the thinking — the analysis is the valuable part.
- Writing claims about external entities (companies, products, platforms) to the vault without verifying them first. "Per [speaker]" framing if unverified.
