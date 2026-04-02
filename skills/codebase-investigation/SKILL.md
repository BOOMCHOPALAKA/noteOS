---
name: codebase-investigation
description: Use when investigating a bug, tracing a code path, debugging an issue, or answering questions about how something works in a codebase. Triggers on "how does X work," "why is X happening," "trace this," codebase questions, or repo analysis linked from the vault.
---

# Codebase Investigation

## Overview

Systematic process for investigating bugs, tracing behavior, and answering codebase questions. Start wide (vault context), narrow to code (trace the chain), come back wide (vault update with findings).

## The Process

### 1. Vault First

Before touching code, get oriented:
- Check for existing codebase reports, architecture notes, or system documentation in the vault
- Check related tickets for prior investigation history
- Check recent daily notes for standup or meeting context on the issue
- Check Basecamps for broader system understanding

This prevents re-investigating things already documented and gives you the map before entering the territory.

### 2. Scope the Code Paths

Before diving into a single file, map ALL code paths that could be involved.

- **Search broadly first.** Grep for the symptom string, function name, database column, or error message across the entire repo.
- **Identify which paths have logging/audit trails and which are silent.** Silent paths are where bugs hide.
- **Count the candidates.** "There are 6 code paths that write to this field" is better than "I found the file that does it."

### 3. Trace the Chain

Don't stop at the first file. Follow:
- **Parent classes.** Inherited methods, shared logic. Fields you're looking for may live in a parent class.
- **Subclasses.** Overrides, additional fields that modify parent behavior.
- **Cross-file method calls.** A method might resolve in a completely different class.
- **Hidden paths.** Hooks, filters, middleware, interceptors that modify data between source and execution. Framework-specific: WordPress `apply_filters`/`do_action`, Laravel model events/observers, Express middleware, Django signals.

### 4. Eliminate by Evidence

Rank candidate paths and eliminate methodically:
- **Deployment timeline.** When was each path last deployed? If it hasn't been deployed since the bug started, eliminate it.
- **Logs.** When application audit logs have gaps, check database-level timestamps or raw logs.
- **Team confirmation.** Ask if a path is in production yet. The team knows what's shipped vs. sitting in staging.
- **Reproduction evidence.** Error logs, data exports, API responses that narrow the window.

### 5. Document Findings

**Be specific:**
- Cite exact file paths and line numbers
- Show the relevant code, not just describe it
- Distinguish what you can see (static code) from what you can't confirm (runtime state, what's deployed)

**Hedge appropriately:**
- Static analysis has limits. Say so.
- For compliance/security questions, always recommend dev confirmation even when confident.

### 6. Update the Vault

After investigation:
- Update the relevant ticket or note with findings, file references, and next steps
- If findings reveal architectural understanding, check whether it belongs at the Basecamp level
- Log the investigation in the daily note if it was substantive

## Common Patterns

**Symptom in UI, root in API:** Trace backward from display → data layer → API call → external system. The bug is usually at the integration seam.

**"Nobody recognizes this string":** Grep the entire repo. Check git blame. It's often a fallback value someone wrote months ago.

**Audit log doesn't show the change:** Look for direct DB writes, bulk operations, or methods that explicitly bypass model events.

## What NOT to Do

- Don't stop at one file and declare findings
- Don't grep for one term and call it done. Try synonyms, function names, database columns
- Don't overclaim certainty on runtime behavior from static analysis
- Don't update the vault with speculative findings. Distinguish confirmed from suspected.
