---
name: session-handoff
description: Use when ending a work session, when the user says "log this," "save this session," at natural breakpoints after substantial work, or when context preservation is needed before a session ends. Also use proactively when a session has produced significant work that should be captured.
---

# Session Handoff

## Overview

Preserve session context so nothing falls through the cracks between conversations. The vault only works if things get written to it, and the biggest risk is sessions ending without capturing the thinking that happened.

## When to Trigger

- When the user asks to log the session
- **Proactively offer** at natural breakpoints: after processing transcripts, after a big decision, after creating multiple notes, after any substantial block of work
- The nudge should be specific: "Want me to log this session? We covered X, Y, and Z."
- Don't wait for end-of-session only. Offer mid-session at natural breakpoints.

## What to Capture

### Session Log Entry

If the vault has a running session log (like a Chat Log note), write a new entry in reverse chronological order:

```
### YYYY-MM-DD

**Topics:** Brief description of what was covered.

**What got persisted:**
- Notes created/updated
- Decisions captured
- Any other vault changes made

**Key context:** The stuff that's hardest to reconstruct. What was the thinking, what connections were made, what was discussed but NOT yet persisted anywhere. This is the safety net content.
```

**Key context is the most important field.** Notes and tickets are findable. The thinking that led to them, the connections made in conversation, the things discussed but not written down. That's what gets lost.

### Context File Update

If the vault has a Current Context or active threads file, update it:
1. Read existing content first
2. Update/add entries for this session's threads
3. Remove items that are now resolved
4. **Preserve entries from other sessions.** Don't blindly overwrite.

## End-of-Session Persistence Sweep

Before logging, check: is there anything substantive from this session that hasn't been persisted? Be specific:
- "We discussed X but I didn't write it anywhere yet. Want me to add it to [specific note]?"
- "The analysis we did on Y would be worth capturing. Want me to create a note?"

Don't be generic ("anything else to save?"). Name what and where.
