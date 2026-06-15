---
name: incident-communication
description: Use when the user needs to communicate a technical issue, outage, incident, or complex bug to non-technical stakeholders. Triggers on "write Dylan an update," "send your executive contact an email about," "explain this to your client contact," "recap this for," or when translating technical situations for business audiences. Also use for escalation messages (to AML, to vendors, to leadership).
---

# Incident Communication

**When this skill triggers, start your response with:** `Using incident-communication skill`

## Overview

Translate technical incidents into clear, stakeholder-appropriate communication. Different audiences need different framing. A WP Engine cron job issue needs to sound different when explaining it to Dylan (design/product) vs your executive contact (CEO) vs Brandon (IT lead).

**Always use the drafting-as-scott skill for voice and tone.** This skill handles the what and structure. Drafting handles the how it sounds.

## Audience Map

| Recipient | Needs to Know | Doesn't Need | Tone |
|-----------|--------------|--------------|------|
| **Dylan** (design/product) | What's broken for users, timeline to fix, does it affect his work | Root cause details, server configs | Warm-professional, collaborative |
| **your webmaster** (product) | Impact on product pages/checkout, what to test, when | Infrastructure details | Direct, task-oriented |
| **your client contact** (CMO, approval authority) | Business impact, timeline, who's on it | Any technical detail | Concise, reassuring, escalate only if needed |
| **your executive contact** (CEO) | Executive summary, risk level, resolution status | Everything technical | Brief, confident, proactive |
| **Brandon** (IT lead) | Full technical detail, what was tried, what's next | — | Peer technical, collaborative |
| **Your tech lead** | Architecture implications, resource needs, decisions needed | — | Technical shorthand, decision-oriented |
| **your lead** (dev lead) | What the team needs to do, priority relative to current work | Business politics | Direct, brief |
| **External vendors** (AML, DaySmart, WP Engine) | Specific error details, timestamps, impact scope, what you've already tried | Internal team dynamics | Professional, show your work, soft leverage |

## Message Structure

### For Business Stakeholders (Dylan, your webmaster, your client contact, your executive contact)

1. **What's happening** — one sentence, plain language. No jargon.
2. **Impact** — what's broken for users/customers/franchisees.
3. **Status** — are we actively working on it, waiting on something, or resolved.
4. **Timeline** — when we expect resolution (hedge appropriately. "The dev team is looking at it now" not "should be fixed by 3pm").
5. **What they need to do** — usually nothing. Say so explicitly. Or: "If you see X, let me know."

### For Technical Stakeholders (your dev team, your lead)

1. **What's happening** — technical description with specifics.
2. **Root cause** (known or suspected) — hedge if uncertain. "Looks like" not "caused by."
3. **What's been tried** — actions taken, results.
4. **Current state** — where it stands right now.
5. **Decision needed** (if applicable) — what the user needs from them.

### For External Vendors

1. **Issue description** with timestamps and error details.
2. **What you've already investigated** — show your work. Prevents "have you tried turning it off and on."
3. **Impact scope** — number of locations, customers affected, business criticality.
4. **What you need from them** — specific ask. Not "please help." Say "we need X."
5. **Soft leverage** — if appropriate. "This is affecting X locations" or "we've been seeing this since [date]."

## Drafting Rules

- **Always run through drafting-as-scott.** Pre-draft protocol, hedging, no dashes, no emoji.
- **Technical recap voice:** "seem to change" not "change." "The dev team" not "we" for technical claims. "Was checking on" not "is working on." Close with invitation to correct.
- **Don't blame.** Reference the system or the change, not the person. "After the cron setting was updated" not "after Brandon changed the cron setting."
- **Temperature control.** State impact and let urgency speak for itself. If everything sounds urgent, nothing is.
- **Separate what you know from what you think.** "We confirmed X. We suspect Y might be related but haven't verified."

## Escalation Messages

When something needs to go up the chain (to your executive contact, to AML leadership, to a vendor's management):

- **Lead with impact**, not frustration. "24+ hours of downtime affecting X locations" not "we've been waiting forever."
- **Include timeline of attempts.** Shows good faith effort before escalating.
- **Specific ask.** What do you need the escalation to produce?
- **Don't write these as demands.** Frame escalations as "raising visibility" and "making sure this is on your radar." The leverage is in the facts, not the tone.

## After Sending

- Log the communication in the daily note (who you wrote to, what about, when).
- If it changes the status of a ticket or thread, update Current Context.
- If a commitment was made ("we'll have an update by EOD"), add a follow-up item to TODOs.
