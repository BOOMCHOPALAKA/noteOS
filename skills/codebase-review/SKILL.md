---
name: codebase-review
description: Use when conducting a QA/QC/security review of a codebase. Triggers on "codebase review," "audit this repo," "QA/QC review," "security audit," "code review on [project]," or when scoping a consulting engagement around a code audit. Two modes (triage sweep vs. full audit) and a two-stage output flow (internal doc with verification gate → client deliverable). Different from codebase-investigation (forensic trace of one behavior) and codebase-team-assessment (org/ownership analysis).
---

# Codebase Review

**When this skill triggers, start your response with:** `Using codebase-review skill`

## Overview

Full-codebase QA/QC/security review. Produces an internal review doc with verification pointers first, then a client-facing deliverable only after a human has signed off. Two depths (triage sweep, full audit) and five pillars (security, code quality, architecture, operational, team/process).

The internal verification gate is the most important part of this skill. AI codebase analysis makes mistakes. File paths drift, line numbers shift, "this looks like SQL injection" sometimes isn't. A human confirms before any claim leaves the building.

## Modes

Ask which mode if not specified.

**Triage sweep:**
- Half-day scope. Top 10-15 findings.
- Good as a discovery/sales front door. Sells the deeper audit.
- All five pillars, light touch.

**Full audit:**
- Multi-day scope. Comprehensive prioritized remediation roadmap.
- All five pillars, deep.

## Five Pillars

Every review hits all five. Triage = light touch. Full audit = deep.

1. **Security** — auth, input validation, secrets, dependency CVEs, OWASP-class issues
2. **Code quality** — dead code, duplication, complexity, test coverage, maintainability
3. **Architecture** — coupling, layering, DB access patterns, scalability red flags
4. **Operational** — logging, error handling, observability, deployment safety, config management
5. **Team/process** — light touch only; for deep team analysis run codebase-team-assessment separately

## Engagement Classification

Before starting, classify the codebase. Same workflow applies to all — classification changes calibration, not method.

- **Dev-team-built** — default, no special calibration
- **AI-assisted (mixed)** — team using Claude Code, Cursor, Copilot. Apply AI bug-class checklist.
- **Vibe-coded (non-dev owner)** — entire codebase built by someone without dev background using AI. Apply all AI calibrations harder. Deliverable shape changes (heavier executive framing, remediation playbook is the headline).

How to classify: ask if you know; look for AGENTS.md/CLAUDE.md files, AI-style commit messages, unusual dependency choices; default to AI-assisted (mixed) if uncertain.

Don't label the engagement type in the client deliverable. Use classification for internal calibration only.

## Red Zone / Green Zone Calibration

For AI-assisted and vibe-coded codebases, weight attention by zone.

**Red Zone (high scrutiny):** auth logic, authorization, session handling, payments, financial calculations, data sanitization, state transitions, DB access patterns. AI flattens security boundaries here — spend disproportionate review effort.

**Green Zone (light scrutiny):** UI components, styling, layout, copy, animations, frontend-only state. AI is genuinely good at "the vibe." Skim, don't dig.

**Yellow Zone:** business logic touching state but not security-critical, observability, error handling, integrations. Standard scrutiny.

## AI Bug-Class Checklist

For AI-assisted and vibe-coded codebases, explicitly check for:

- **Hallucinated dependencies** — `package.json` or imports pointing to packages that don't exist or are typosquats. Treat as Blocker if actively imported.
- **Auth UI without backend validation** — login screen exists but server-side check is missing or shallow.
- **Webhook signature verification missing or broken** — especially payment webhooks. Verify raw-body handling, secret loading, signature compare.
- **Missing idempotency on side-effecting endpoints** — payment, email, transfer, notification routes that don't dedupe on request ID.
- **RLS policy gaps** — tables without row-level security, policies that don't cover all roles.
- **Hardcoded secrets** — higher rate than human code. Automated tools catch obvious ones; manual reading catches disguised ones.
- **Permissive defaults** — CORS `*`, PII in logs, debug mode on, broad network bindings.
- **N+1 queries** — loop bodies that issue per-row DB queries despite looking efficient.
- **Swallowed errors** — `catch {}`, empty exception handlers, silent error logging.
- **Stale comments** — AI-generated comments that no longer match the code after iterative edits.

## Pre-Review: Refresh Best Practices

Before starting any review, web search for current best practices on the stack being audited. Code analysis evolves. Run searches like:
- "OWASP Top 10 [current year]"
- "[language/framework] security best practices [current year]"
- "[framework] common vulnerabilities"

Note what's current at the top of the internal doc so the human verifier knows the baseline used.

## Tooling

**Required (run on every review):**
- **semgrep** — multi-language SAST. `semgrep --config=auto`
- **gitleaks** — secrets scanning across git history. `gitleaks detect`
- **Dependency CVE scanning** — `npm audit`, `pip-audit`, `bundle audit`, `composer audit`, `govulncheck` per language
- **Manual reading** — architecture, business logic, patterns tools can't see

**Optional (when relevant):**
- Language-specific linters (eslint, ruff, rubocop) for code quality
- Complexity analyzers for hot spots

If a tool isn't available, install it before starting. Never skip dependency CVE scanning.

## Severity Framework

Use this framing in all output (internal and client). Never use Critical/High/Medium/Low.

| Tier | When to use | Cost of waiting |
|---|---|---|
| **Blocker** | Active or imminent harm. Stop and fix now. | Hours to days. Customer impact, financial loss, or active exploitation likely. |
| **Risk** | Meaningful exposure that will likely cause an incident if left in place. Fix this cycle. | Weeks. Probability of harm is real but not imminent. |
| **Tech Debt** | Suboptimal pattern, fragility, or maintainability cost. Plan for next quarter. | Months. Slows the team or accumulates cost over time. |
| **Polish** | Style, minor cleanup, nice-to-have. Backlog. | None. The team's call. |

**Calibration test for Blocker:** "If this doesn't get addressed for 72 hours, what specifically goes wrong?" If the answer is "nothing concrete, but it's bad in principle" — it's Risk, not Blocker. Blocker requires a concrete harm path with a short fuse.

## Two-Stage Output Flow

### Stage 1: Internal Review Doc (always first, never goes to client)

```markdown
# Codebase Review — [Project] — [Repo] — [Date]

**Reviewed by:** [name]
**Commit reviewed:** [hash] ([date])
**Mode:** Triage sweep / Full audit
**Engagement type:** Dev-team-built / AI-assisted / Vibe-coded (INTERNAL ONLY)
**Verified by:** [REQUIRED before client deliverable]
**Verified date:** [REQUIRED before client deliverable]

## Stack Overview
[Language, framework, DB, hosting, notable deps]

## Key Observations
[High-level read on code maturity, main risk areas, what worked well]

## Findings

### F-001: [Title]
- **Severity:** Blocker / Risk / Tech Debt / Polish
- **Pillar:** Security / Code Quality / Architecture / Operational / Team
- **Location:** `path/to/file.ext:42-58`
- **Description:** [What the issue is and why it matters]
- **Fix Prompt:** [Specific enough to act on. File + lines, what to change, edge cases, what test to add.]
- **Verify the Fix:** [Concrete check that proves the fix worked. Command to run, output to expect.]
- **Verify (internal):** Open `path/to/file.ext` lines 42-58. Confirm: [what to see]. Falsified if: [what would disprove it]. Tool source: [semgrep rule ID / manual / etc.]
- **Status:** Unverified

## Verification Checklist
- [ ] F-001: [file:lines] — [what to confirm]
- [ ] F-002: [file:lines] — [what to confirm]

## Findings Requiring Runtime Verification
[Findings that can't be confirmed by reading code alone. Test or drop before client delivery.]

## Tool Output Summary
- semgrep: X findings (Y after triage)
- gitleaks: X matches (Y after triage)
- Dep scan: X CVEs (Y high-severity)

## Open Questions for Client
[Things the review can't answer without client input.]
```

### Stage 2: Client Deliverable

Generate only after the internal doc has `Verified by:` and `Verified date:` filled in. The skill must refuse to generate client output if those fields are blank.

Structure: executive summary (plain language, no jargon, for non-technical readers) followed by technical findings section (for dev leads). Strip all `Verify:` pointers, internal notes, and unverified findings. Client only sees what the team has signed off on.

Format as clean HTML for easy sharing.

## Workflow

1. Confirm mode (triage or full audit)
2. Classify the codebase (internal only — never expose to client)
3. Sync repo to latest: `git fetch --all --prune && git pull`. Record the commit hash and date being reviewed. If zip-only, confirm how recent it is with the user.
4. Refresh best practices via web search for the stack
5. Run automated tools: semgrep, gitleaks, dep scanner
6. Run AI bug-class checklist for AI-assisted / vibe-coded codebases
7. Manual review of architecture, business logic, hot spots from tool output
8. Draft internal doc with findings, Fix Prompts, Verify sub-sections, draft executive summary
9. Hand off to human verifier — skill stops here
10. Human works through the verification checklist, marks each finding, fills in Verified by/date
11. Generate client deliverable only after verification fields are populated
12. Save both docs to vault with consistent naming: `Codebase Review - [Client] - [Repo] - [YYYY-MM-DD]`

## Hard Rules

- **Never review stale code.** Pull latest on any git clone before reviewing. Stamp the commit hash + date in the internal doc. A review of old code is worse than no review because it looks authoritative.
- **Never generate the client deliverable without `Verified by:` and `Verified date:`.** No exceptions.
- **Always web-search current best practices before starting.**
- **Never skip dependency CVE scanning.**
- **Never present a finding without a file:line citation.**
- **Every Blocker and Risk finding must have a Verify pointer, a Fix Prompt, and a Verify the Fix sub-section.**
- **Never use Critical/High/Medium/Low.** Use Blocker/Risk/Tech Debt/Polish.
- **Never include unverified findings in the client deliverable.**
- **Hedge appropriately.** "Appears vulnerable to" not "is vulnerable to" until verified.

## Interaction with Other Skills

- **codebase-investigation:** Forensic trace of one specific behavior. Use when you need to answer "how does this work" on a single mechanism.
- **codebase-team-assessment:** Org/ownership/bus-factor analysis. This skill touches team/process lightly — run that one separately for deep team analysis.
- **smoking-gun:** Git forensics for attribution questions ("who wrote this, when"). A subroutine that can feed into the review.
- **ticket-creation:** After the review, create tickets for findings that need to be tracked.
