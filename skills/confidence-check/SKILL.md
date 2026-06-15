---
name: confidence-check
description: Use when the user says /confidence, "confidence check," "how sure are you," "verify this," "check your work," "is that solid," or any variant asking Claude to audit its own certainty. ALSO fires automatically (1) before any outbound comm is finalized (email, team chat, ticket, status report, anything going to another person), and (2) when Claude has made a load-bearing factual claim the user might act on. A triggerable safety net that forces primary-source re-verification and outputs a per-claim confidence table. The output must be trustworthy enough to act on.
---

**When this skill triggers, start your response with:** `Using confidence-check skill`

## Overview

This is a self-audit ritual. the user needs a hard safety net he can pull (or that fires on its own at the riskiest moments) to find out which parts of what Claude just told him are actually verified versus guessed. The output has to be trustworthy enough that the user can relay the GREEN/VERIFIED rows to a stakeholder without checking them himself.

The philosophy already lives in [_shared/source-discipline.md](~/.claude/projects/-Users-chop-Documents-chopOS/memory/_shared/source-discipline.md) and the CLAUDE.md two-bucket discipline. This skill is the **enforcement mechanism** for that philosophy. Principle is the law; this is the audit that proves you followed it.

**The core failure this prevents:** stating a plausible claim with quiet confidence, then walking it back when the user pushes or when the real source gets checked. Real example (June 3, 2026): Claude told the user the LCC blank-income tests were "$0 shadow rows" with a confident tone. The vault note said so. But opening the actual export showed only 1 of ~1,600 was $0. The wrong claim was about to go to your lead. What caught it was re-opening the primary source, not re-reading the reasoning. **That is the whole point of this skill: re-checking your own head is not verification. Going back to the source is.**

## Hard Rule: Re-Check the Primary Source, Don't Trust Your Earlier Read

This is the teeth. For every load-bearing claim, you must go BACK to the actual source and confirm it fresh:

- Claim from a file? **Re-read the file** (the relevant lines), don't trust your memory of it.
- Claim from a data pull / query / count? **Re-run it** or re-open the data and re-derive the number.
- Claim from an email / message / transcript? **Re-open it** and confirm the exact wording.
- Claim from a vault note? Treat the note as a SECONDARY source. Auto-generated notes especially are hypotheses, not ground truth. If the claim is going to someone else, verify against the primary thing the note describes (the code, the export, the actual ticket), not just the note.
- Claim from "I remember"? That's not a source. Either find the real source or mark it UNKNOWN.

If you cannot re-reach the source in the current environment, say so explicitly and mark the claim's confidence as capped (e.g. "INFERRED, can't re-verify here"). Never launder an unverifiable claim into VERIFIED.

## Confidence Levels

Use exactly these four. No softer-than-the-evidence labeling.

- **VERIFIED** . re-checked against the primary source THIS pass. You can quote the line, the count, the exact wording. the user can relay it as fact.
- **INFERRED** . a reasonable read from verified facts, but not itself directly confirmed. Recommendations live here. Anything where you connected dots lives here.
- **ASSUMED** . filled from plausibility or convention, not from a source. The danger zone. If it's load-bearing and only ASSUMED, that's a flag to raise, not a row to bury.
- **UNKNOWN** . you don't have it. Say so. Do not upgrade a gap to an assumption to make the table look complete.

## Output: Per-Claim Table

Produce a table. One row per load-bearing claim in the content under audit. Skip trivia. focus on claims the user might act on or relay.

```
## Confidence Check: [what's being audited]

| Claim | Level | Source (re-checked) | To raise confidence |
|-------|-------|---------------------|---------------------|
| CRL appears in the "All" export | VERIFIED | re-counted CSVs: 60 CRL rows | — |
| CRL is an inactive lab | INFERRED | Melanie's email says so; not confirmed in PP admin | check lab status in PP |
| ~1,600 LCC tests missing income acct | VERIFIED | re-parsed export: 1,599 of 2,004 blank | — |
| Why they're missing | UNKNOWN | no source | dev to trace |

**Confidence score: 50% (2/4 claims VERIFIED) — Band: Don't relay yet, re-check flagged rows.**
Two of four claims are sourced to primary evidence; the other two are either inferred from a secondary source or have no source at all. Relay the CRL row count and LCC blank-income count only; hold the inactive-lab status and root cause until confirmed.

**Bottom line:** [one or two sentences. What's safe to relay, what is not, what's the single biggest soft spot.]

**Re-verification done this pass:** [list what you actually re-opened/re-ran. If you did NOT re-check something, say which and why.]
```

The "Re-verification done this pass" line is mandatory. It's how the user knows the table reflects a real re-check, not a re-labeling of the same guesses. If that line says "re-read nothing, relabeled from memory," the audit failed and you must go do the re-check.

## The Three Triggers

**1. On command.** the user says /confidence, "confidence check," "how sure are you," "verify this," "is that solid." Run the full ritual on whatever's in scope (the last output, or a named claim/document).

**2. Auto before outbound comms.** Any time you've drafted something that will go to another person (email, team chat message, ticket, status report, any customer-facing copy) and it's about to be finalized or sent, run a confidence pass on the factual claims in it FIRST, before presenting it as send-ready. This is the highest-stakes moment. a wrong claim here becomes a confidently-stated error in front of a stakeholder. Keep it tight (don't audit subjective/voice choices, only factual claims), but every fact in outbound copy gets a level. If anything is below VERIFIED and load-bearing, flag it above the draft, don't bury it in a table below.

**3. Auto on load-bearing claims.** When you make a factual claim mid-analysis that the user could act on (a number, a status, a date, an attribution, a "the code does X," a "they decided Y"), and you have NOT actually verified it this session, either verify it before stating it or tag it inline at the moment ("INFERRED, not yet confirmed"). This trigger is lighter-weight. it doesn't always need the full table, but it must never let a load-bearing guess wear a confident tone. When several such claims stack up, escalate to the full table.

Calibrate trigger 3 so it's a safety net, not a tic. Don't confidence-table every sentence. The bar is "would the user act on this or relay it to someone, and have I actually checked it?" If yes-and-no, that's when it fires.

## Stakes Calibration

The rigor scales with where the content is going:

- **Going to another person (email, message, ticket, report, anything external):** maximum rigor. Re-check every load-bearing fact against its primary source. This is non-negotiable. These are the claims the user can't personally verify before relaying.
- **Internal vault writes (notes, daily log, Current Context):** high rigor, because vault writes become future "facts" that downstream skills re-synthesize for stakeholders. A wrong fact in a note propagates. Re-check anything load-bearing.
- **In-chat analysis to the user:** honest labeling always, full re-check when a claim is load-bearing or the user's about to act on it. Lighter when it's exploratory thinking-out-loud (but say it's exploratory).

## What This Skill Does NOT Do

- It does not soften or hedge for voice. That's [[my-voice]]'s job. This skill is about whether the claim is TRUE and SOURCED, not how it reads. (A claim can be VERIFIED and still get hedged phrasing in the outbound draft. they're separate passes.)
- It does not replace honest in-the-moment labeling. The default behavior (label confidence at first delivery) still applies always. This skill is the deeper audit on top, for when it's pulled or when stakes spike.
- It does not produce a clean narrative. If re-checking breaks the story, break the story. Accuracy over flow.

## Failure Modes to Catch in Yourself

- **Re-reading your own claim and calling that verification.** It isn't. Go to the source.
- **Treating a vault note as primary.** Notes describe sources; they aren't the source. Auto-generated ones can be wrong (see the June 3 $0-shadow example).
- **Upgrading ASSUMED to VERIFIED because it "sounds right."** Plausible is not verified. The most dangerous claims are the plausible-but-unchecked ones.
- **Completing the table by guessing.** A row marked UNKNOWN is more useful than a fabricated source. Gaps are findings.
- **Confident tone on an unverified claim.** The tone must match the level. If it's INFERRED, it cannot sound VERIFIED.
- **Auditing only the easy claims.** The one you're least sure of is the one the user most needs flagged. Don't skip it because it's uncomfortable.

<!-- improved 2026-06-08: added confidence score line to output format (% VERIFIED, band label, 1-2 sentence explanation of why it got that grade). Score sits between the table and Bottom line. Bands: 90-100% safe to relay; 75-89% relay VERIFIED rows hold gaps; 60-74% don't relay re-check first; below 60% stop too much guesswork. Per the user's direction: more granularity at a glance without losing per-claim table detail. -->
