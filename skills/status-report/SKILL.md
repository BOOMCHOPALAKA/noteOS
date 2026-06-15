---
name: status-report
description: Use when the user asks for a status report, weekly update, monthly summary, monthly recap, daily report, or any cadence-based status writeup for a specific client (your project, your client, Allovus, etc.). Triggers on "status report," "weekly update," "weekly status report," "monthly summary," "monthly recap," "daily report," "month-end report." the user prompts with cadence and client at invocation.
---

# Status Report

**When this skill triggers, start your response with:** `Using status-report skill`

## Invocation Pattern

Specify cadence and client at the prompt. Examples:
- "Status report for your project, weekly, week of April 27 - May 1"
- "Monthly status report for your client for April"
- "Daily status report for Allovus for today"

If cadence is missing, ask. If client is missing, ask. Don't guess.

## Overview

Produce structured executive status reports for individual clients. Reports get shared with stakeholders outside the vault, so they must stand alone without vault-specific references.

**Each client gets its own report.** Never cross-pollinate. your project doesn't reference your client, your client doesn't reference Allovus, etc.

**Audience is executive.** Stakeholder leadership for each client. They skim for status, blockers, and decisions they need to make. Not engineers. Not in the ticket queue.

**Density is the whole point.** Every sentence earns its place or gets cut. If a stakeholder reads only the TLDR, they should have the period. If they read the full report, no sentence should feel like padding.

**Abstraction level: business outcome, not engineering detail.** Translate dev-internal language into outcomes the audience cares about.

| Cut (engineering detail) | Keep (executive abstraction) |
|---|---|
| Function names (`your client's systemApiService::resolveConsentIdentifiers()`) | "Consent flow logic" |
| File paths (`consents.php:4182`), commit hashes, PR numbers | The behavior change |
| UUIDs (`b9d51293-...`), specific IDs | "your project brand identifier" |
| Internal ticket IDs unless externally referenced (SUP-, AWE-) | Plain language description |
| Stack trace, request/response shape, payload structure | "API call now formed correctly" |
| Library versions, framework specifics | The capability they enable |

Ticket IDs ARE fine when they're already in stakeholder vocabulary (Desk #579, customer-facing tickets, sprint items the audience tracks). Cut the ones that exist only inside the dev team.

**The "say it out loud" test.** Read each sentence as if speaking to the lead stakeholder on a call. If you'd never say it out loud, don't write it.

## Source Discipline (anti-fabrication, hard rules)

This section overrides everything else. If a claim conflicts with these rules, the rule wins.

**Read these first:** `_shared/source-discipline.md`, `_shared/external-comms-voice.md`, `_shared/source-discipline.md`, `_shared/source-discipline.md`.

**Verify the current date before dating the report.** Run `date '+%Y-%m-%d %H:%M %Z'` in Bash. The reporting period (daily date, week range, month) and the report's own date stamp must come from the system clock, not the injected `currentDate` context (set at session start, can be stale). A wrong date misframes the period for a stakeholder-facing artifact. If MCP timestamps conflict with the injected date, trust the live data.

**Stakeholder warning:** every claim in this report goes to your manager / your client contact / your executive contact / your marketing contact / clients via your project management tool or email. Three fabrications got caught in May 2026 status reports because upstream synthesis (sweep journals, prior reports) was treated as ground truth. Don't repeat the pattern.

### Audit upstream sources

Status reports source from sweep journals (`Sweeps/[Client].md`), prior weekly/monthly reports, daily notes, deployment logs, and Current Context. **Do NOT treat any of these as ground truth automatically.**

The May 2026 audit found that sweep journals are the primary contamination vector. They contain confident interpretations promoted to structural facts ("Foyer success is creating timeline pressure," "Anton is the bottleneck"). When you inherit a claim from a sweep journal, trace it back to the original source (transcript, email, team chat, deploy log) before propagating.

For each load-bearing claim you're about to write:

1. **Where did I get this?** Sweep journal, prior report, daily note, direct source?
2. **If from a sweep journal or prior report, can I trace it to a transcript line, email, team chat message, or deploy entry?**
3. **If I can't trace, hedge or omit.** Don't propagate confident synthesis upstream.

This is the audit pass. Do it before drafting, not after.

### Rule 1: Source-only claims

Every concrete claim in the report must trace to a specific source. Concrete claims include:
- Milestones ("first customer order," "first sale," "launched," "shipped," "live")
- Numbers ("113 customers affected," "30+ PRs," "1 in 40")
- Dates ("April 29 deploy," "May 1 root cause")
- Status assertions ("ready for production," "in progress," "blocked")
- Attributions ("X confirmed Y," "X aligned with Y on Z")

Acceptable sources:
- A specific transcript line (with date and recording context)
- A daily note entry
- A deploy log entry
- A commit message or git history entry
- A team chat/email message
- A stakeholder's recorded statement in a sweep journal

**Not acceptable as sources:**
- "Synthesized from prior reports" (cites the secondary, not the original)
- "Inferred from operational context" (this is the failure mode)
- "Implied by [hedged stakeholder language]" (see Rule 2)
- The skill's own prior outputs (circular sourcing)

**Pre-delivery check:** before handing the report to the user, mentally pair every concrete claim with its source. If you can't cite the source, cut the claim or hedge it back to what the source actually supports.

### Rule 2: Preserve hedges, never translate operational language into milestone claims

Hedged stakeholder language stays hedged. Operational language is not milestone language.

| Source said | Don't write | Write |
|---|---|---|
| "going live with the customer today" | "first customer order today" | "going live for customer use" |
| "officially live" | "first sale" | "live" |
| "ready" | "shipped" | "ready" |
| "should be done by Monday" | "done Monday" | "expected by Monday" |
| "I think they're launching" | "launched" | "expected launch this week" |
| "we're testing" | "tested and verified" | "in testing" |
| "code is on production" | "released to customers" | "deployed to production" |

**The deeper rule:** "deployed/shipped/launched/live" each have specific executive meanings. They are not interchangeable. A code deploy is not a customer launch. A launch is not a sale. A sale is not a milestone you can claim without an actual sale.

**The trap:** when a stakeholder uses ambiguous operational language ("going live with the customer"), the temptation is to firm it up for the report. Don't. Preserve the ambiguity by quoting the operational phrase or hedging your interpretation. Resist the urge to make the report "cleaner" by making the language firmer.

### Rule 3: Pre-delivery verification pass

Before showing the report to the user, do a verification pass. For each concrete claim, ask:

1. **What's the source?** If you can't name a specific transcript / note / log / message / commit, the claim doesn't ship
2. **Does my wording match what the source actually says?** If the source hedges, my wording hedges
3. **Am I claiming a milestone the source supports, or a milestone I inferred?** If inferred, cut or hedge
4. **Could this trigger a stakeholder fact-check?** If yes, double-check the source. If still uncertain, hedge

If a claim fails any of these, surface it to the user BEFORE finalizing: "I want to claim X. Source is Y. Y is hedged ('might,' 'should be,' 'going to') — should I keep this claim, hedge it, or cut it?"

Do not silently translate. Do not silently fabricate. Do not silently fill gaps.

### What this looks like in practice

**Good (source-traceable, preserves hedge):**
> NeuroX deployed to production. Code-side ready for customer orders.

Source: April 29 your team Dev Standup transcript, your lead: "NeuroX is deployed and tested on production." Operational launch status not asserted because no source confirms it.

**Bad (fabricated milestone, untraceable):**
> NeuroX launched. First customer order April 30.

No source for "first customer order." Closest source is the user's hedged "I think they were officially going live with those products today" to your manager on April 30 — which is not the same claim. This is a translation error. Don't make it.

## Framing Rules (don't amplify negatives)

These reports are stakeholder-facing. Don't aggregate or dwell on setbacks. State them once, paired with their resolution status, in neutral language.

- **No `NOTABLE INCIDENTS` section.** Don't create a section that aggregates negative events. Regressions and incidents belong inside the relevant initiative status entry (so the audience sees state and resolution together) or as a one-line acknowledgement under COMPLETED if already resolved
- **No "pattern flag" or systemic-issue bullets in TLDR.** Don't lead with "two regressions in two weeks" as a top-line observation. If a systemic issue genuinely needs visibility, it goes in NOTES, framed as an action under consideration ("Code-freeze window under consideration")
- **Regressions in TLDR are acceptable when they ARE the news.** A live P1 with a fix in flight (consent regression Thursday → fix Monday) earns a TLDR bullet. State + resolution path. Don't hide it
- **Pair every regression mention with current state.** "Diagnosed. Fix on staging. Production push Monday" is correct. "Two regressions hit production" with no resolution context is not
- **No "crisis," "outage," "broken," "failure," "catastrophic," "alarming" language** in headlines. Describe what happened and how it landed
- **TLDR defaults to forward-positive framing** — what shipped, what's near completion, what's locked. Mix in regression-with-resolution bullets only when they're the dominant story

## Internal Attributions

Names are fine inside narrative entries when they describe collaborative work or who confirmed something.

What stays:
- "your developer deployed the fix. Alexis re-tested." (action attribution inside an entry)
- "your developer, Melanie, and Alexis aligned on the framing." (alignment attribution)
- "Root cause confirmed live with Dr. Angel and your lead." (collaboration attribution)
- "Brandon administering, IT support team on user management." (ownership attribution)

What to cut:
- Bare attribution prefaces with no other content: "Per Chris H," "your lead said," "[name] flagged" used as a sentence-opener for an opinion or recommendation
- Internal dev voices framed as judgment: "your lead flagged a code-freeze window" — rewrite as "Code-freeze window under consideration"
- Names in TLDR bullets (TLDR is unified, executive-summary level)

The simpler rule: if the name is part of the *fact* (who did, who deployed, who aligned, who confirmed), keep it. If the name is just *whose opinion this is*, cut it.

## Cadence Differences

The same skill produces three cadences. Sourcing, timeframe, and section emphasis vary. Shape stays the same.

### Daily

- **Sourcing:** today's daily note, today's transcripts, current team chat/email if relevant
- **Timeframe:** one day
- **TLDR:** 2-3 bullets max. What shipped today. What landed today. What's blocking tomorrow
- **Sections:** RELEASED (if any), IN PROGRESS, UPCOMING (next-day items only). Drop COMPLETED — daily means everything is fresh, no separate COMPLETED-but-not-released bucket needed
- **Word target:** 200-400 words
- **Filename:** `[Client] Daily Status Report - YYYY-MM-DD.md`
- **Location:** `Calendar/[Month]/[Week]/`

### Weekly

- **Sourcing:**
  1. Read the week's `full-picture` journal entries first (`Sweeps/[Client].md`). If no journal entries for the week, run `full-picture` for the relevant client first, then return here
  2. Read daily notes for the week (`Calendar/[Month]/[Week]/`)
  3. Read meeting transcripts processed that week
  4. Check modified tickets and epics for the client
  5. Check deployment log if relevant (e.g., `[Client] Deployments Log.md`)
  6. Cross-reference previous week's report (IN PROGRESS and UPCOMING become this week's COMPLETED or carry forward)
- **Timeframe:** Monday-Friday of the named week
- **TLDR:** 3-5 bullets
- **Sections:** RELEASED, COMPLETED, IN PROGRESS, optional DECISIONS, optional UPCOMING, optional NOTES
- **Word target:** 600-900 words. Quiet week ~400-500. Heavy week up to ~900. Over 1000 means another cut pass
- **Filename:** `[Client] Weekly Status Report - Week of [Date Range], YYYY.md`
- **Location:** `Calendar/[Month]/[Week]/`

### Monthly

- **Sourcing:**
  1. All four (or five) weekly reports for the month
  2. The full month of `Sweeps/[Client].md` journal entries
  3. The deployment log for the month
  4. Major decisions and structural shifts captured in daily notes
- **Timeframe:** first to last day of the named month
- **Leadership reframe:** monthlies for your client contact/your executive contact (vs. the dev-facing version) strip technical jargon, lead with business outcomes, neutral framing. May need a separate reframed version from the internal monthly. See `_shared/source-discipline.md`
- **TLDR:** 3-5 bullets at the month-level. What shipped at month level, what landed structurally, what's the forward direction
- **Sections:** RELEASED TO PRODUCTION (whole month), MAJOR INITIATIVES STATUS (replaces IN PROGRESS for the month-level cadence), optional KEY DECISIONS, optional NOTES. Drop TEAM & OPERATIONS, WHAT'S AHEAD, NOTABLE INCIDENTS unless explicitly needed
- **Word target:** 600-1000 words. The monthly is NOT four times longer than weekly. It's a roll-up, not a stack
- **Filename:** `[Client] [Month] YYYY Summary.md`
- **Location:** vault root, alongside other monthly summaries

## Per-Client Conventions

### your project

**Project areas (use bold sub-headers within RELEASED, COMPLETED, IN PROGRESS):**
- **Ecommerce/Website** (anylabtestnow.com, WordPress, checkout, product pages, consent flows on the customer-facing site)
- **Pricing Portal** (the dev-team-built portal, MSRP Bulk Update Tool, your client's system API integration, location/test management UI)
- **your integrated system Integration** (consent flow to your integrated system, sub-client routing, your integrated system API work, your client's system extension code)
- **Ask Alice** (AI chatbot, training data pipeline, AWE-I249 Responses API migration)
- **Infrastructure** (AWS migration, Cloudflare, performance work, SSO)
- **Cross-cutting** (initiatives that genuinely span multiple areas — use sparingly)

**Routing rules for ambiguous items:**
- **MSRP Bulk Update Tool → Pricing Portal.** Dev work lives in `altn-pricing-portal` codebase
- **Linked-test pricing display issues → Pricing Portal** if the underlying logic is in the portal
- **Consent flow bugs → your integrated system Integration** when the symptom is "data not flowing to your integrated system." File under Ecommerce/Website only if purely customer-facing form
- **NeuroX, Kit Collections, similar feature launches → Ecommerce/Website** if customer-facing checkout/booking is the deliverable
- **Site performance, Core Web Vitals, PageSpeed → Ecommerce/Website**
- **GTM, ad tracking, third-party scripts → Ecommerce/Website**
- **AWS migration → Infrastructure**

**Header tags:** `#altn #work #weeklyreport` (or `#monthly-summary` / `#daily-report`)

**Vault links to include in header:** `[[your project E-commerce Overview]] | [[your team Dev Tickets]] | [[your project Deployments Log]]`

**Audience:** your manager (VP Tech), your client contact (Creso CMO + your client President when your client is in scope), your executive contact (CEO). Brandon, Vincent if specifically routed.

### your client

your client's project structure is less defined than your project's. Don't force the same bucket discipline. Two standing tracks:

- **Framework 2** (the redesign work with Anton — foyer, icons, performance/SEO, brand/design, dual-brand routing)
- **Tickets / KTLO** (everything else — Desk tickets, GTM debugging, location-specific fixes, infrastructure adjustments, owner asks)

**One-off tracks** can appear when something is actively in flight:
- **your client Product Hub** — surface as its own track only when there's substantive movement that period (kickoff, resourcing decision, scope lock, milestone). Otherwise it sits inside Tickets/KTLO or doesn't appear. Project formerly referred to as "Pricing Portal Clone" — use Product Hub going forward

**Don't add buckets just to have them.** A weekly with only Framework 2 and ticket work needs only those two. A weekly where Pricing Portal Clone scope locks needs three. A quiet weekly may fit cleanly without project separation at all.

**Header tags:** `#arcpoint #work #weeklyreport`

**Audience:** your marketing contact (Marketing Operations Manager, main POC), Crissy McDowell (AFG your client's system POC), your client contact (when strategic).

### Allovus

**Project areas:** TBD when first report runs. Likely:
- **AI Adoption** (assessment work, tool rollout, training)
- **Power Apps / All of It / Allovit**
- **MCP Integration**
- **Process / Operations**

**Header tags:** `#allovus #consulting #weeklyreport`

**Audience:** Aimee, Megan, Steve+Jenn, Shelby+Liz depending on track. Default: whoever's commissioning the report.

### Other clients

When the user invokes the skill for a client not yet documented, ask once: "What are the project areas for [client]? I'll add them to the skill." Then proceed.

## The Density Standard

Every item follows the same shape: **bold headline, then one or two tight sentences.** If a sentence can be removed without losing meaning, remove it. No summary sentences. No framing sentences. The facts speak.

**Model item (COMPLETED):**
> **Consent-to-your integrated system Regression Diagnosed.** ~1 in 40-50 email-link consents had been silently failing to flow into your integrated system since April 22. 113 customers affected. Root cause confirmed live. Fix shipped to staging.

What's NOT in the model: function name, UUID, file path, PR number, commit hash, internal-process date stamps. What IS there: scope, volume, confirmation status, deployment state.

**Model item (IN PROGRESS):**
> **Consent Fix to Production. Highest priority.** Dummy site verification over the weekend, then production push Monday morning. Customer-impact communication being drafted in coordination with your manager and your client contact.

**Model item (RELEASED):**
> **NeuroX / Lucent AD Complete** Alzheimer's blood test (April 29). Sub-client routing, age-gate, consent flow. End-to-end verified through production. First customer order April 30

## Dates: when to use, when to skip

**Use dates when they're substantive — milestone, deadline, or real reference point:**
- **RELEASED bullets:** the production deploy date IS the news. Always include
- **UPCOMING:** future dated milestones. Always include
- **MAJOR INITIATIVES STATUS:** real targets ("October target," "May 1-5 cutover window," "August 26 hard deadline")
- **TLDR:** a regression timeframe ("since April 22") or a planned action ("Production push Monday 5/4")
- **Volume framing inside an entry** when the timeframe is the news ("113 customers affected since April 22")

**Skip dates that just timestamp when something happened internally:**
- COMPLETED entries: don't write "Resourcing Locked (April 30)." The internal date when a sync happened isn't the news. Drop the parenthetical
- IN PROGRESS entries: don't add "(April 29)" to mark when work last moved
- "your developer deployed the fix (April 22)" — drop the date. "your developer deployed the fix" is enough
- Bare meeting timestamps: "post-standup sync with your manager and your lead" beats "post-standup sync with your manager and your lead on April 30"

**The test:** if the date answers "when do I need to act?" or "how long has this been going on?" — keep it. If it just answers "when did this internal moment happen?" — cut it.

**Target lengths:**
- RELEASED bullets: one line. Description, owner (if standard), date. No clauses
- COMPLETED entries: 1-3 sentences after the bold headline. Stop when the fact is stated
- IN PROGRESS entries: 1-2 sentences. State + next step
- DECISIONS bullets: one sentence, sometimes a fragment
- TLDR bullets: one sentence or sentence fragment

If an entry exceeds 3 sentences, it either needs splitting or it's padded.

## Tone Rules

- **Hedge what isn't confirmed.** "Possible root cause." "Seems to have fixed it." Hedging is accuracy
- **No dramatization.** Never "dramatically," "crisis," "catastrophic," "game-changing"
- **No connective tissue.** Skip "This means," "As a result," "Additionally"
- **No closers.** Don't end entries with a summary sentence
- **No preview sentences.** State facts directly
- **Plain language.** Would you say this out loud?
- **No em dashes.** Periods to separate thoughts. Zero exceptions

## Optional Sections

Cut a section entirely when it's empty or padded. Don't reach for sections to fill the page.

**DECISIONS:** drop if no decisions affecting schedule/scope/approach landed in the period. Many periods won't have it.

**UPCOMING:** keep when there are dated milestones the audience needs to track. 1-3 bullets max. Drop if everything's covered in IN PROGRESS / MAJOR INITIATIVES.

**NOTES:** drop unless something genuinely warrants it (forward-positive observation, public recognition, systemic issue under consideration). Empty NOTES is worse than no section.

**TEAM & OPERATIONS (monthly):** drop unless team changes are genuinely audience-relevant.

**WHAT'S AHEAD (monthly):** drop if NOTES already captures forward-positive framing or if it'd just restate IN PROGRESS items.

**MAJOR INITIATIVES STATUS (monthly):** keep, but tighter than weekly IN PROGRESS. One paragraph per initiative max.

## Anti-pattern: empty section headers

Don't leave bold subheaders with no content. Either fill it or cut the header.

## Project Separation (within sections)

Within RELEASED, COMPLETED, and IN PROGRESS, group items by project area. Use bold sub-headers.

**Where buckets DON'T apply:**
- TLDR (stays unified — exec wants the punchline, not the org chart)
- DECISIONS (decisions sit at client level)
- UPCOMING (dates and milestones, not project breakouts)
- NOTES (cross-cutting observations)
- MAJOR INITIATIVES STATUS (initiatives often span project areas; bucket only if truly clean)

**Bucket selection rules:**
- One project area cleanly → use that bucket
- Spans two areas → put it where the primary work happened, mention the other in the body
- Spans three or more → use Cross-cutting
- Don't over-bucket: an item under "Other:" doesn't need its own bucket

## Header Format

```markdown
# [Client] [Cadence] Status Report - [Period], [Year]

#[client-tag] #work #[weeklyreport|monthly-summary|daily-report]

[[client-overview]] | [[client-tickets]] | [[client-deployments]]

---
```

## Summary (TLDR) Convention

The top section is headed `## Summary` in the report file. Same content this convention describes.

Daily: 2-3 bullets. Weekly: 3-5 bullets. Monthly: 3-5 bullets at the month-level.

Biggest release, biggest blocker, biggest shift. One line per bullet. Fragment sentences are fine.

**The Summary always goes at the top.** Chat, vault, your project tracker. Same structure everywhere.

## Filing

- Daily: `Calendar/[Month]/[Week]/[Client] Daily Status Report - YYYY-MM-DD.md`
- Weekly: `Calendar/[Month]/[Week]/[Client] Weekly Status Report - Week of [Date Range], YYYY.md`
- Monthly: `[Client] [Month] YYYY Summary.md` at vault root
- **Always save to vault file AND output in chat.**

## Cut Test (Run Before Delivering)

For every item, ask:
1. Can I cut the last sentence without losing meaning? If yes, cut it
2. Is there a framing sentence before the facts? Cut it
3. Is there a summary sentence after the facts? Cut it
4. Does any clause start with "This means," "As a result," "Additionally"? Cut or split
5. Am I stating certainty where I should be hedging? Add "possible," "seems to," "likely"
6. Is NOTES earning its place or is it filler? If filler, delete section

**Engineering-detail check before delivery:** scan for these red flags and rewrite each:
- Function or class names
- File paths and line numbers
- Commit hashes, PR numbers, branch names
- Full UUIDs or ID strings
- Library names, framework versions, technical jargon

If you find any, ask "what business outcome does this support?" and rewrite at that level.

## Shareable Version

Proactively offer after the vault version. To convert:
- Strip all `[[wiki links]]` to plain text
- Strip all hashtags
- Convert markdown tables to bullet lists
- Remove the Related links line at top
- Output in a code block for copy/paste
- Bold headers and horizontal rules render fine in most tools

## Gold Standard References

- **`Calendar/May/Week 1/your project Weekly Status Report - Week of April 27 - May 1, 2026.md`** — executive abstraction benchmark for your project weekly. Heavy week with multiple parallel workstreams
- **`your project April 2026 Summary.md`** — executive abstraction benchmark for your project monthly. Tight initiative roll-up

If a new report skews longer or more technical than these, run another cut pass.

<!-- improved 2026-05-21 via improve-skill: (A) renamed TLDR Convention → Summary (TLDR), per May 11-15 your project+your client weeklies both heading the top section "## Summary"; (B) dropped "surgical fix" from the model COMPLETED item, per feedback_external-comms-voice ban on inflation words; (C) added leadership-reframe step to Monthly, per your manager's May 11 voice direction + the your client contact/your executive contact reframe artifact + feedback_monthly-rollup-voice -->

