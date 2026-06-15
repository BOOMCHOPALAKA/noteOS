---
name: laymens
description: Use when the user needs to explain a technical situation in plain language for non-technical stakeholders. Triggers on "explain this simply," "laymens," "how would I explain this to [non-technical stakeholder]," "put this in plain English," or when drafting explanations for business audiences. Also use proactively when output from other skills (codebase-investigation, ticket-investigation) is heading to a non-technical recipient.
---

# Laymens

**When this skill triggers, start your response with:** `Using laymens skill`

## Overview

Translates technical findings into plain language a non-technical stakeholder can repeat in their own meeting. The gold standard is your manager's restatement pattern: hear the technical explanation, strip it to the business consequence, say it back in one sentence anyone would understand.

## The your manager Test

Before delivering any explanation, ask: "Could your manager say this to your client contact on a walk and have it land?" If the answer is no, it's still too technical.

your manager's restatements from real conversations:

> "Somebody's injecting code to our site that we don't have control over, that we can't test, yet we're being held accountable to make sure everything works."

> "He's not just loading code. He's loading code that ends up generating a thousand queries."

> "So that's wrong. He's getting credit, he's getting paid for clicks that aren't happening."

**What makes these work:**
- **Concrete, not abstract.** "A thousand queries" not "excessive request volume." "Getting paid for clicks that aren't happening" not "misattributed conversion tracking."
- **Consequence first.** The business impact is the sentence, not a footnote after the technical explanation.
- **Accountability is clear.** Who's doing it, who's affected, who's responsible. No passive voice, no "the system."
- **One sentence carries the whole point.** If you need a paragraph, you haven't found the laymens version yet.

## Output Format

For each technical finding, produce:

**What's happening:** One or two sentences. Speakable. This is the line the user would say out loud to your client contact, your executive contact, or a franchise owner. No jargon. Business consequence front and center.

*Technical: One line of supporting detail with the actual numbers, acronyms, and specifics. For the user's reference or for relaying to devs. Never more than two sentences.*

**Example:**

**What's happening:** Every time someone visits our homepage, the site fires off about a thousand tracking requests in the background. Two ad tracking setups are responsible for almost all of it, and we don't have control over either one.

*Technical: GTM-NMWW852 (716 requests, 20.7 MB) and GTM-NVHHVGH (569 requests, 19.8 MB) account for 97% of the 987 total requests per page load. Both are vendor-managed containers loaded via the Moove GDPR plugin.*

**Example:**

**What's happening:** The ad vendor's tracking code is telling Google that every person who visits our site came from every ad they're running. So a single visit gets counted 135 times across 135 different ads.

*Technical: GTM collect requests fire for all 135 AdWords IDs on every page load regardless of UTM parameters. The attribution logic isn't filtering by the ad that actually drove the visit.*

## Multiple findings

When explaining a situation with several technical layers, produce one "What's happening" block per finding. Order them by business impact, not by technical sequence. The stakeholder cares about what it means, not the order you discovered it.

Keep the total output to 3-4 blocks max. If there are more than 4 things to explain, consolidate. The recipient will not absorb 7 separate findings. Pick the ones that change decisions.

## Translation Patterns

### How to convert technical language

| Technical | Laymens |
|---|---|
| GTM container | ad tracking setup / tracking code |
| 987 requests per page load | about a thousand things loading in the background |
| 20 MB transferred | a huge amount of data downloading |
| Main thread blocked | the browser freezes up |
| Cache miss / uncached load | some people get the slow version of the site |
| sessionStorage trigger | if you've visited certain pages before, it flips a switch that makes every future visit slow |
| Render-blocking JavaScript | code that stops the page from loading until it finishes running |
| API endpoint | a connection point between two systems |
| Database query | looking something up in the system |
| Deploy to staging | test it on a copy of the site before making it live |
| HAR capture | a recording of everything the browser loaded |

Don't memorize the table. The principle is: **use the word a non-technical person would use to describe what they'd see or experience.** "The browser freezes up" is what your webmaster sees. "Main thread blocked" is what causes it. Lead with what they see.

### How to frame consequences

- **Performance:** "The site is slow for some people" not "TBT exceeds 18 seconds"
- **Money:** "He might be getting credit for visits he didn't generate" not "attribution is misconfigured"
- **Control:** "We can't see or test what he's putting on our site" not "vendor restricts GTM access"
- **Risk:** "If this keeps happening, Google could stop running our ads" not "ad disapprovals due to destination not working errors"
- **Accountability:** "We're being held responsible for something we don't control" not "the vendor's scripts are causing performance regressions"

## Hard Rules

- **No acronyms in the laymens line.** GTM, PPC, GDPR, HAR, TBT, LCP, CLS, API. None of them. If you catch yourself writing one, replace it with what it does.
- **No investigation play-by-play.** "We tried a fix, it didn't work" not "Rost removed the hardcoded GTM injection from 5 theme header files, deployed to staging, we cleared WP Rocket cache, then discovered we were reading Brave instead of Chrome." The recipient doesn't need the journey, just the destination.
- **No mechanism detail when the consequence is what matters.** "The ad tracking is over-counting visitors" is the point. How the UTM parameter matching fails inside the GTM collect request lifecycle is not the point.
- **No hedging on the laymens line.** The laymens version is the simplified truth. Save hedges and uncertainty for the technical line. If you're not sure enough to state it plainly, you're not sure enough to explain it yet.
- **No "basically" or "essentially."** These are filler words that signal you're about to be technical and trying to soften it. Just say the plain version.
- **One sentence is the target.** Two is acceptable. Three means you haven't found the laymens version yet. Cut until you have.
- **Lead with what changed or what's wrong.** Not with background. "The site is loading a thousand tracking scripts on every page" not "So the way Google Tag Manager works is..."

## When to Use This Skill

- **Standalone:** the user says "laymens" or "explain this simply" and wants the translation
- **Inside other skills:** When `incident-communication`, `tldr`, `my-voice`, or `situation-assessment` output is heading to a non-technical recipient, apply laymens principles to the explanation sections
- **Proactively:** When the user is clearly about to relay technical findings to your manager, your client contact, your executive contact, or franchise owners, offer the laymens version before he asks

## What This Is NOT

- **Not incident-communication.** That skill handles the full message format (email structure, tone, recipient calibration). This skill handles only the explanation.
- **Not wwlt.** That skill checks whether something lands for Lisa (non-technical user perspective). This skill produces the plain-language version of a technical finding.
- **Not a dumbing-down tool.** The laymens version should be accurate. It's a translation, not a simplification that loses the point. your manager's restatements are precise. They just use different words.
