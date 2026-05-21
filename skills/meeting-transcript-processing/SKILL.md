---
name: meeting-transcript-processing
description: Use when processing a meeting transcript, summarizing a meeting, or when the user pastes or references a transcript file from Downloads/ (from Zoom, Teams, Otter, Google Meet, or any recording/transcription tool). Handles speaker identification, structured summaries, TODO extraction, vault linking, and takeaway analysis.
---

# Meeting Transcript Processing

## Overview

Process meeting transcripts into structured vault summaries with speaker identification, TODO extraction, vault linking, and a takeaway layer that surfaces what actually matters.

## Source Format

Transcripts come from whatever tool you use to capture meetings: Zoom, Teams, Google Meet, Otter, a local transcription app, or a pasted transcript. The common format is `Speaker N` blocks, sometimes with real names if the tool captured them. Some tools include echo/duplicate lines or label one speaker's audio twice; ignore duplicates entirely. Watch for hallucinated text during silence ("Thank you for watching!", word loops), which most auto-transcription tools produce.

Transcript files usually land in `Downloads/` for processing, or the user pastes the transcript directly into the conversation.

## Workflow

### 1. Speaker Identification (Always First)

Before writing anything, map `Speaker N` labels to real people.

**How to identify speakers:**
- Check the user's People section in the instruction file for names and roles
- Use contextual clues: who do they reference, what systems/topics do they discuss, are they giving updates or asking questions, management language vs. individual contributor language
- One person can get split across multiple speaker labels
- Quick utterances ("yeah," "right") are often misattributed
- Names get mangled by transcription tools. Check spelling corrections in the instruction file.

**Present the speaker mapping for sign-off before writing the summary.** Don't guess and iterate. Get this right first. A table format works well:

| Label | Likely Person | Reasoning |
|---|---|---|
| Speaker 1 | [Name] | [Why you think so] |

### 2. Vault Search (Before Writing)

Search the vault for existing notes on every substantive topic mentioned in the transcript:
- Related project notes, tickets, or Basecamps in Map/
- Recent daily notes for carried context
- Knowledge notes on the systems or topics discussed

This prevents writing a summary that ignores context the vault already has.

### 3. Write the Summary

Write into the daily note Body under `## Work` with a `###` heading for the meeting.

**Structure (following the Meeting Summary template):**
- **Overview:** 1-2 sentences on what the meeting was about and why
- **[Topic sections]:** One per substantive topic discussed. Include what was discussed, decisions made, and action items with owners
- Action items lead with the "why" (the problem driving the task), then the task itself
- **Unresolved Issues** and **Next Steps** only when substantive

**Linking:**
- `Related:` line at the top when relevant Basecamps or notes exist
- First mention of any topic with an existing vault note gets a wiki link
- Tag sections when the tag helps discovery

**Spelling corrections:** Always check the instruction file's People and Spelling Corrections sections. Transcription tools mangle names consistently. Apply corrections before writing.

### 4. Extract TODOs

Write to the daily note TODO section under `**From today's meetings:**`

**Only extract items that pass these filters:**
1. The user owns the action
2. The user is the bottleneck (someone is waiting on them)
3. The user needs to follow up with someone they manage or coordinate with
4. The user is accountable if it drops

**Exclude:** Other teams' internal work, things other people are investigating on their own, operational tasks that belong to someone else.

**Format:** Checkbox items with anchor links back to the summary:
```
- [ ] Follow up with Sarah on the vendor timeline - see [[#Team Standup]]
```

Use `Check:` prefix for items where the user is following up on someone else's work.

### 5. Update Knowledge Notes

When meetings surface real new information (not trivial status mentions):
- Update the relevant knowledge note or ticket
- Check whether findings belong at the Basecamp level. The test: "Does this change how someone would understand the territory, or just one trail within it?"

### 5b. Verify New Claims (Before Anything Becomes a Vault Fact)

A meeting summary is the most common way an unsourced claim enters the vault and then becomes "fact" in next week's status report. Before writing any concrete claim (a milestone, a date, a number, a decision, an attribution), check it against what the transcript actually says.

The four failure modes to catch:

1. **Operational language is not milestone language.** If someone said "we're going live Monday" or "it should be ready," don't write "launched Monday" or "shipped." Write what they said, with the hedge intact.
2. **Adjacency is not causation.** If two topics came up in the same meeting, that doesn't mean they're connected. Don't synthesize a relationship the speakers didn't state.
3. **Hedges stay hedged.** "I think we're good" is not "we're good." Preserve the confidence level the speaker used.
4. **Secondhand attribution stays secondhand.** If someone said "I think the client is okay with it," don't write "the client approved." Keep the chain visible.

If a claim is your inference rather than something stated, it belongs in the Takeaway section labeled as a read, not in the factual summary. See `skills/_shared/source-discipline.md`.

### 6. Takeaway Output (In Chat)

After writing to the daily note, output key takeaways in chat. This is NOT a summary rehash. This is the analytical layer:

- **What changed** from what we knew before
- **What connects** across projects or topics that wasn't obvious
- **What to watch** for patterns, risks, or things that don't add up

Be direct. If something doesn't track, say so. If the vault doesn't have context on something, say that too. Don't manufacture insights to fill gaps.

## Common Transcript Issues

- Speaker labels are generic. Never trust `Speaker 1` as a name.
- Transcription tools hallucinate during silence (word loops, "Thank you for watching!")
- One person can appear under multiple speaker labels
- Quick utterances get misattributed constantly
- Names are always mangled. Always check spelling corrections.
