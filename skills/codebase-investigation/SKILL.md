---
name: codebase-investigation
description: Use when investigating a bug, tracing a code path, debugging an issue, or answering questions about how something works in the your project or your client codebases. Triggers on ticket investigation, "how does X work," "why is X happening," codebase questions, or repo analysis.
---

# Codebase Investigation

**When this skill triggers, start your response with:** `Using codebase-investigation skill`

## Overview

Systematic process for investigating bugs, tracing behavior, and answering codebase questions across the your project and your client repos. Validated by dev team (Anton confirmed accuracy on Elavon payment investigation, March 2026).

The core principle: start wide (vault context), narrow to code (trace the chain), come back wide (vault update with findings).

## Repos

All at `/Users/chop/Documents/chopOS/repos/`:
- **your project:** `repos/your project/your project Repos/altn-checkout`, `altn-corporate-wordpress`, `altn-pricing-portal`, `altn-labgpt-api` (Ask Alice)
- **your client:** `repos/your client/arcpointlabs`

## The Process

### 0. Sync the Repo First (non-negotiable)

**Before reading a single line, pull the latest.** A stale local checkout is the single most common way an investigation goes wrong. You analyze for an hour, hand the user a finding, and the code was a month and a half old.

```bash
cd "<repo path>"
git fetch --all --prune
git status          # confirm branch + clean/dirty working tree
git pull            # update the working tree you're about to read (fetch alone does NOT)
git log -1 --format='%h %ci %s'   # stamp: what commit am I actually reading?
```

- `git fetch` updates refs only. `git pull` is what changes the files on disk you'll be reading. Do the pull.
- If the working tree is dirty or on a detached/feature branch, **stop and tell the user** before pulling. Don't blow away local changes.
- Note the commit hash + date you synced to. Every finding is "as of `<hash>` (`<date>`)." If the date is old relative to recent deploys, say so.
- If a pull fails (no remote, auth, conflict), say so explicitly and proceed only after flagging that the checkout may be stale.

### 1. Vault First

Before touching code, get oriented:
- Check the **Codebase & Team Report** for the relevant repo (architecture, hot files, domain ownership, knowledge gaps)
- Check related **tickets** and **epics** for prior investigation history
- Check **[[your project System Integrations]]** if the issue crosses system boundaries
- Check **[[your project Deployment Flow]]** for branch-to-environment mapping
- Check recent **daily notes** for standup context on the issue

This step prevents re-investigating things already documented and gives you the map before you enter the territory.

**For root-cause / accountability questions ("how did this happen," "whose decision was this," "why is the code like this"), also pull the authorizing ticket up front.** Search your project tracker / Projects for the item that introduced or last changed the behavior. You need its scope and acceptance criteria, not just its title. The case usually cracks not in the code but in the gap between what the ticket asked for and what the code does. Sprints search caveat: don't trust the "active" sprint as current. The board runs stale (Sprint 98 has been the active container for 70+ days). Search recent sprints by date and name, and check both the active sprint and dated completed sprints. Sprints status lags deployment, so cross-reference git for what actually shipped.

### 2. Scope the Code Paths

Before diving into a single file, map ALL code paths that could be involved.

- **Grep broadly first.** Search for the symptom string, function name, database column, or error message across the entire repo.
- **Identify audited vs unaudited paths.** Which paths have logging/audit trails? Which are silent? Silent paths are where bugs hide.
- **Count the candidates.** "There are 6 code paths that write to `retail_price`" is better than "I found the file that does it."

### 3. Trace the Chain

Don't stop at the first file. Follow:
- **Parent classes.** Inherited methods, shared logic. Fields you're looking for may live in a parent, not the "obvious" file.
- **Subclasses.** Overrides, additional fields that modify parent behavior.
- **Cross-file method calls.** `get_customer_data_from_order` might resolve in a completely different class.
- **Hidden paths.** Hooks, filters, middleware, interceptors that modify data between source and execution:
  - WordPress: `apply_filters`, `do_action`
  - Laravel (Pricing Portal): model events, observers, `updateQuietly()` (bypasses events)
  - General: middleware, decorators, event listeners

### 4. Eliminate by Evidence

Rank candidate paths and eliminate methodically:
- **Deployment timeline.** When was each path last deployed? If a path hasn't been deployed since the bug started, eliminate it.
- **Database vs application logs.** When application audit logs have gaps, check database-level triggers or raw timestamps.
- **Team confirmation.** Ask if a path is in production yet. Dev team knows what's shipped vs sitting in staging.
- **Reproduction evidence.** API logs, order exports, error logs that narrow the window.

**Confirm the code you're reading is the code that's running.** You already pulled latest in Step 0 — now confirm the synced tip matches what's deployed to prod (compare against the deploy log / [[your project Deployment Flow]], or the branch the environment tracks). A conclusion from a stale local checkout is worse than no conclusion. This is non-negotiable for "why is prod doing X" questions. Then use `git blame` / `git log` on the relevant lines to confirm whether the behavior was ever changed or removed. "The code still does X" plus "git history shows X was never touched" is a much stronger finding than either alone.

**Keep deferring to devs — but keep the verified finding on the table.** Continue to recommend dev confirmation; devs know production better than static analysis does, and that hedge stays. The discipline this case adds is narrower: when a dev's recollection ("I removed that long ago," "that's not in prod," "we fixed that months ago") contradicts a git-verified finding, *don't erase the finding to resolve the disagreement.* Hold both. The framing is "great — let's confirm against the code," not "no, you're wrong." Keep the TODO open, note that the trace still shows X, and re-verify the artifact before anyone closes the thread. A claim and a git trace that disagree is an open question, not a settled one. **"I removed it" plus a commit/diff/file closes it. "I removed it" alone leaves it open.** (Source: the June 2026 5/9 auto-approval case — a git-verified finding was correct but got treated as resolved for two days on a confident "I removed it," with the prod queue still firing on it, until a dev opened the file and confirmed the rule was still live. The fix wasn't to argue with the dev — it was to not let the finding drop off the list before the code was re-checked. See [[Codebase Investigation Case Study - The 5-9 Rule (June 2026)]].)

**"Removed in one path" reads as "removed" to the person who did it.** Before accepting any "I removed X" claim, grep for ALL instances of X across the repo. Duplicated logic (the same rule copied into several services) makes human memory unreliable: a dev removes *a* version and honestly remembers it as *the* version. This is not lying, it's the classic "I fixed that" when you fixed one of several copies. Tie-in: [[your project Architectural Fragility Pattern]].

**A live production invariant outranks a meeting's verbal consensus.** A running symptom (a queue actively firing, a log line repeating, a metric off) is a primary source. When observable production behavior contradicts a "we fixed it" belief, the behavior wins and the belief gets re-checked. Don't let a standup's consensus overwrite what the system is actively doing in front of you.

### 5. Document Findings

**Be specific:**
- Cite exact file paths and line numbers: `/app/Services/Import/FranchiseEcommerceImporter.php:64-65`
- Show the relevant code, not just describe it
- Distinguish what you can see (static code) from what you can't confirm (runtime state, what's actually deployed)

**Hedge appropriately:**
- Static analysis has limits. Say so.
- "This is what the code does. A dev should confirm this matches production behavior."
- For compliance/security questions, always recommend dev confirmation even when confident.

### 6. Update the Vault

After investigation:
- Update the relevant **ticket** with findings, file references, and next steps
- If the investigation revealed architectural understanding (how systems connect, deployment risks, knowledge gaps), check whether it belongs in the **Codebase & Team Report** or at the **Basecamp level**
- Log investigation in the **daily note** if it was substantive

## Integration Surface Area

Many your project bugs cross system boundaries. Know which systems are involved:
- **your integrated system** . order flow, appointment data, sub-client routing
- **DaySmart** . appointment scheduling, time slots, availability
- **Converge (Elavon)** . payment processing, tokenization
- **CareEvolve** . lab results delivery
- **QuickBooks** . financial sync
- **Salesforce** . lead capture, web-to-lead
- **Pricing Portal ↔ WordPress** . test pricing, MSRP, franchise data

See **[[your project System Integrations]]** for the full map.

## Common Investigation Patterns

**Symptom shows up in UI but root is in API:**
Trace backward from the display code → through the data layer → to the API call → to the external system. The bug is usually at the integration seam.

**"Nobody recognizes this string":**
Grep the entire repo. It's often a fallback/default value someone wrote months ago. Check git blame.

**Audit log doesn't show the change:**
Look for `updateQuietly()`, direct DB writes, or bulk operations that bypass model events. The database trigger log may have caught what the application missed.

**Works in staging, breaks in production:**
Check the deployment model. Pricing Portal's `main` = staging, and production deploys are manual. Checkout has no branch-to-env mapping at all. "It works on staging" may mean nothing about production.

**"How did this happen / whose decision was this" (accountability investigation):**
Don't stop at "the code does X." Triangulate to whether X was a dev error or a requirements gap:
1. **Live code** . pull latest (Step 0), confirm the synced tip matches prod, read what the code actually does now.
2. **Git history** . `git blame` / `git log` the relevant lines. Was the behavior ever added, changed, or removed? Did a planned removal ship only the frontend and never the backend?
3. **Authorizing ticket** . pull the Sprints/Projects item that scoped the work. Read its acceptance criteria, not its title. Does the ticket scope match the code?
4. **Vault timeline** . daily notes and release notes for when the decision was discussed and what was supposed to change.
5. **Team chat thread** — the DM and the channel both. Check the other surface before saying you can't find the context.
The finding is the mismatch. If the ticket scope never asked for the behavior the code has (e.g. ticket said "change 15% to 20%" but never said "remove the 5/9 rule"), it's a requirements gap, not a dev mistake. Say which one, and cite the ticket line that proves it. Verified June 2 2026 on the franchise price-change 5/9 auto-approval root-cause (Sprints item APP-I633).

## Length ceilings on chat output

Investigation writeups tend to narrate. the user wants findings, not a travelogue.

- **Finding summary:** 3-5 bullets. What's the answer, where's the evidence
- **Code citations:** file paths and line numbers. Show relevant snippet only when it's load-bearing
- **Hedge notes:** one line each. "Dev should confirm X"
- **Total chat output:** ~600 words for a normal investigation. Longer only when the root cause genuinely spans multiple systems

Write the narrative to the ticket/vault. Keep the chat output tight.

## Cut Pass

Before sending:
- Any paragraph describing how you investigated (vs. what you found)? Cut. the user wants answers
- Any file you looked at that didn't matter? Don't list it
- Any section summarizing the sections above? Cut
- Any "based on my analysis" framing? Cut

## Hard Rules on Length

- **Brevity:** Follow `~/.claude/skills/_shared/brevity.md`. No em dashes
- **Rich repo does not justify long output.** A 6-path investigation produces a 3-bullet conclusion

## What NOT to Do

- Don't stop at one file and declare findings
- Don't grep for one term and call it done. Try synonyms, related function names, database column names
- Don't overclaim certainty on runtime behavior from static analysis alone
- Don't update the vault with speculative findings. Distinguish confirmed from suspected.
- **Don't let a verified finding quietly drop off the list when a dev says it's handled.** Keep deferring to the dev, but keep the open TODO and re-verify the code before the thread closes. A confident "I already fixed that" that disagrees with your git trace is an open question, not a resolution. See Step 4 and [[Codebase Investigation Case Study - The 5-9 Rule (June 2026)]].

<!-- improved 2026-06-04: added the "keep deferring but keep the finding on the table" rules to Step 4 (a claim + a disagreeing git trace is an open question, not settled; "removed in one path" reads as removed so grep all paths; live invariant outranks consensus) + a What-NOT-to-Do line. Deliberately NOT framed as "stop deferring to devs" — the user values that hedge; the discipline is holding both the claim and the finding until the artifact settles it, not overruling the dev. Source: the 5/9 auto-approval case — a June 2 git-verified finding was correct but treated as resolved for two days before a dev re-opened the file June 4 and confirmed it. Case study + feedback_primary-source-beats-memory-claim memory same day. -->

