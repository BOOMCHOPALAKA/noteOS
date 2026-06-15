---
name: journey-first
description: Use when doing product discovery, scoping, or strategy work on any product, feature, workflow, or service. JTBD and UX thinking partner. Two modes. Reset mode triggers when a team is iterating on features, UI, or mockups without an agreed user journey underneath (e.g. debating colors before anyone's written down who the user is). Exploration mode triggers when the user wants to do proactive product thinking on a new or underdeveloped idea — mapping potential user journeys, scenarios, use cases, and jobs-to-be-done before building. Works for Crisis Agent, Allovus consulting, your project, your client, noteOS, or any personal project. Triggers on "/journey-first," "journey first," "map the journey," "user journey for X," "jobs to be done," "JTBD on X," "product thinking on X," "discovery on X," "what's the MVP cut-line," "what's the spine here," or when feature/UI iteration is happening without a named user and a journey.
---

# Journey First

**When this skill triggers, start your response with:** `Using journey-first skill`

## Overview

A JTBD and UX thinking partner for product discovery. Installs the product spine before artifacts get built: who is the user, how did they arrive, what journey are they on, what jobs-to-be-done at each step, and where's the MVP cut-line.

**Purpose: produce something stakeholders can react to.** The output isn't a journey map. It's a lever a decision-maker (a client, a team lead, the user himself) can use to react, redirect, cut, or commit. Artifacts without a spine make stakeholders react to colors. Spines without artifacts make them react to abstractions. This skill produces the reactable thing.

**Two modes, one workflow.**
- **Reset mode:** A team is iterating on artifacts without a shared spine. Intervention is to stop artifact work, define the spine, give stakeholders something to react to instead of mockups.
- **Exploration mode:** the user is doing product thinking on a new or underdeveloped idea. No team off-track required. Goal is to surface potential users, map their journey, identify JTBDs, and find the MVP cut-line before building anything.

Mode is usually clear from how the user invokes. If not, ask.

## Workflow

### 0. Mode Check and Vault Search

Figure out the mode. Then search the vault for existing notes on the project or user if the topic has prior context:
- Basecamps in Map/ for the project
- Existing journey, persona, or user-research notes
- Prior meeting notes where the user or journey came up

Don't skip this. If a journey or persona structure already exists in the vault, build on it instead of starting over.

### 1. Name the User — Forcing Function

Stop if the user description is vague. "Families," "customers," "clinicians," "users," "franchisees," "the team" are all too broad. Different segments have different journeys. Pick one segment to map per pass.

Good user specificity looks like:
- "A first-time buyer under 35 in a competitive market, 60 days from target close"
- "A small-business finance lead managing payroll across 4 states"
- "A power user of tool X migrating to tool Y after a vendor acquisition"

Ask the specificity questions if the user is fuzzy:
- Who specifically? Role, life stage, relationship to the problem.
- What's their state? Fresh to the problem, in the middle of it, coming out of it, habitual.
- What's different about them vs. adjacent segments?

If the named segment is actually two segments (e.g. "buyers and sellers," "owners and operators," "parent and child"), call it out and pick one to map now. The other gets its own pass.

### 1.5. Mine Lived Experience

Before inferring a journey, ask: **who on the team has lived this?** If anyone has firsthand experience of the journey you're about to map, their actual story is ground truth. Skip this step and you're writing fiction.

Ask:
- Has anyone on the team been through this journey themselves? (Or someone close to them.)
- What did they actually do, in what order? What did they want at each step?
- What did they want and not have? What would have changed the outcome?
- Where did they get stuck, and what got them unstuck?

Lived experience turns inferred jobs into evidenced jobs. A single honest paragraph from someone who has been the user produces better JTBDs than hours of speculation.

If nobody on the team has lived it, flag that explicitly in the output. The journey is hypothetical and needs real user validation before the MVP cut-line hardens.

Don't stop at the team. Existing vault notes on real user experiences, sourced research, or prior interviews are ground truth too. Use them.

### 2. Acquisition — Step 0 Before the Journey

Before mapping the journey, answer: **how does this user arrive?**

This is often the step that reshapes the product most. If users arrive via Google search during research, the product is web-first and SEO matters. If users arrive via app store during a sudden need, the immediacy bar is high. If users arrive via an existing tool (Teams, Slack, a vendor portal), delivery is in-product. Different acquisition paths produce different products.

Common acquisition paths to evaluate:
- SEO / organic search
- Referral from an authority (a clinician, a colleague, a vendor handoff)
- Word of mouth / direct share
- App store browsing
- Paid ad / marketing funnel
- In-product (feature of an existing tool they already use)
- Physical touchpoint (QR code, print handoff, event)

Pick the dominant path. Note secondary paths as "also supported."

**Web-first vs. app-first is the sub-question to force here if it applies.** Even when it's not literally web-vs-app, ask the equivalent: what's the first surface the user touches, and how does that constrain the rest?

### 3. Map the Journey

States the user moves through. Phases, not features. Not "opens app, sees home screen, taps button." Phases describe user state, motivation, or lifecycle position.

For products that involve a durable change (health, career, finance, onboarding, career transitions, real estate), the journey often spans weeks/months/years. The product is a companion across that, not a single-session tool.

For products that are single-session tools (a calculator, a search, a one-shot decision aid), the journey is shorter but still has phases (arrives with intent → evaluates fit → uses → returns or doesn't).

Write out the phases in order. 5–9 phases is typical. Fewer usually means you're missing granularity. More usually means you're describing features instead of states.

### 4. Jobs-to-be-Done Per Phase

At each phase, what is the user trying to get done? Use the JTBD format:

> "When I'm [situation], I want to [motivation], so I can [outcome]."

Three kinds of jobs worth surfacing at each phase:
- **Functional:** What physical/cognitive task is the user doing?
- **Emotional:** What do they want to feel (or stop feeling)?
- **Social:** How do they want to be perceived, or what relationship do they want to protect?

The functional job is often gated by the emotional job. "Find the right tool" is often blocked by "stop feeling like I'm falling behind." "File the right form" is often blocked by "stop feeling like I'm going to screw this up." Name both.

**Pressure-test competing JTBDs with three sub-principles:**

**"Yes and" over "or".** When two JTBDs at a phase feel mutually exclusive (chat vs. button, fast vs. rich, short vs. deep, structured vs. open), ask whether they can coexist with a clear hierarchy. Often the resolution is "yes and, with one primary and the others self-selectable." User's first action becomes the segmentation signal — they declare which JTBD path they're on by clicking. Default to "yes and with hierarchy" before accepting a binary.

**Cognitive load scales inversely with user stakes or distress.** High-stakes or high-distress phases get ruthlessly reduced options. Two or three choices max. Low-stakes phases tolerate richer navigation, nested menus, and open exploration. Check each phase: how loaded is the user here, and are we asking them to make a proportionate number of decisions? If a low-stakes-phase UX pattern bleeds into a high-stakes phase, cut it.

**Account creation, signup, and onboarding friction are JTBD choices, not standards.** The rule: ask nothing until you've delivered value. Signup goes at the phase where the user has already gotten something useful and now wants to keep it, share it, or come back to it. Don't inherit onboarding patterns from adjacent categories — make it a journey-phase choice informed by when value lands.

### 5. Architecture Implications

For each JTBD, what capability does the product need? Capabilities aggregate into features.

Don't design the full architecture here. Surface the capability implications so stakeholders see what each JTBD actually costs to build. Capabilities that repeat across phases (search, chat, notifications, persistence) are often the load-bearing architecture decisions.

### 6. MVP Cut-Line — Forcing Function

Don't leave this open. Produce a proposed cut-line with reasoning. Three tiers:

- **MVP (must-have for first version):** JTBDs that are load-bearing. Remove any of them and the product doesn't solve the core problem for the named user.
- **Growth phase:** JTBDs that extend value but aren't required for first usefulness.
- **Someday:** JTBDs that belong in the vision but are far from now.

Force the line. Better to propose a specific cut and have the team correct it than leave it fuzzy. The cut-line is the thing stakeholders can react to.

**What's-in is informed by what's-future.** MVP isn't just "which JTBDs ship first." It's "which JTBDs ship first plus what the MVP architecture must not foreclose." A door that has to become a hallway later gets framed differently than a door that stays a door. Spell out what the MVP architecture needs to accommodate downstream even if it doesn't ship with it. Otherwise the team will pick an MVP shape that paints the growth-phase work into a corner.

### 6.5. Kill Unsurvivable Acquisition Paths

Now that the journey + JTBDs + MVP cut-line are visible, go back to step 2 (acquisition) and pressure-test the paths you wrote honestly. Ask:

- For each acquisition path, **what are the odds this user actually reaches us this way?** Not "could they," but "would they, given everything else they're doing instead?"
- Where are they before they find us? Are we plausibly the tool they reach for at that moment?
- What's the competing option that would win against us at that moment? (Google, an existing product, a friend, doing nothing, an incumbent.)

Ask this out loud. "What are the odds we truly are the touchpoint here?" Paths that don't survive honest scrutiny get removed. Rescope the MVP accordingly. A path that's "nice if it happens but we can't design around it" is a different investment than a path that's load-bearing.

This step exists because acquisition paths written in step 2 are often written aspirationally. After you've lived with the journey + JTBDs for a few minutes, some of those paths will feel obviously unserious. Kill them before they lock the MVP into shape that solves for users who don't exist.

### 7. Grows-with-You UX Check

Treat this as a design constraint, not a final check: **the UX should evolve as the user moves through the journey.** Tone starts one way and becomes another. Options start minimal and become richer. Brand starts serious and becomes approachable (or the reverse). The product speaks differently to a user in phase 2 than the same user in phase 6.

Apply it to the MVP cut-line. If the MVP spans two phases with different emotional or cognitive registers, the UX needs to shift register within the MVP itself. Name the shifts explicitly so the designer has a constraint to design to, not a vibe to guess at.

Not every product has this shape. A single-state tool (a calculator, a search, a one-shot transactional flow) doesn't need UX evolution. Flag this check as "applies" or "doesn't apply" and move on. When it applies, the output should include a register-per-phase column — "phase 3 is blunt/fast, phase 5 is warm/conversational, phase 8 is light-touch/consultive."

### 8. Output

**Reset mode output (chat-first):**
A short structured summary the user can bring back to the team or the stakeholder. Format:

- Named user (one sentence)
- Lived-experience sources (or flag as hypothetical)
- Acquisition (one sentence with dominant path called out)
- Journey phases (bulleted)
- JTBDs per phase (bulleted, JTBD format)
- Architecture implications (bulleted capabilities)
- MVP cut-line (3 tiers, with reasoning + "can't foreclose" notes)
- Killed acquisition paths (list with why)
- Grows-with-you applicability (yes/no + register shifts if yes)
- Open questions for the stakeholder

**Exploration mode output (same structure, optionally persisted):**
Same shape, but the user is likely iterating on it himself. At the end, ask: "This feels like it should live somewhere. Want to save as a standalone journey doc, or update an existing note?" If yes, persist to the vault using the project's Basecamp convention.

### 9. Close

End with: **"What's the biggest open question this surfaced?"** followed by 1–3 candidates. The skill's job isn't to finalize the spine. It's to install enough of one that the next conversation has a shared starting point.

## Hard Rules

- **No vague users.** Stop-work signal. Force specificity before mapping.
- **Mine lived experience before inferring.** If anyone on the team has lived the journey, their actual story is ground truth. Use it. If nobody has, flag the journey as hypothetical.
- **Acquisition is step 0, not an afterthought.** The first surface the user touches constrains everything downstream.
- **Pressure-test acquisition paths after the journey is visible.** Paths written aspirationally in step 2 often don't survive scrutiny once JTBDs are explicit. Kill the unserious ones.
- **MVP cut-line is required output.** Propose a specific line, even if it's wrong. Don't leave it open.
- **MVP includes "what the MVP can't foreclose."** Growth and someday JTBDs aren't just cut — they constrain the architecture of what ships first.
- **Yes-and before or.** When two JTBDs at a phase compete, ask whether they can coexist with hierarchy before picking one.
- **Cognitive load scales inversely with stakes or distress.** High-stakes phases get 2-3 choices max. Low-stakes phases tolerate richer navigation.
- **Ask nothing until value is delivered.** Signup, account creation, and onboarding friction get placed at the journey phase where the user has already gotten something useful.
- **Phases, not features.** Journey phases describe user state. If you're writing "taps button," you're in UI land, not journey land.
- **Don't substitute for real users.** Flag when a JTBD or journey step is inferred rather than validated. "This needs to be checked against real user conversations" belongs in the output if it applies.
- **Don't force grows-with-you when it doesn't apply.** Single-state tools don't need UX evolution. Check and move on.
- **One segment per pass.** If the user splits into two segments, call it out and pick one. The other gets its own pass.
- **Don't skip the vault search.** Existing journey, persona, or user-research work in the vault is the starting point.

## Case Studies

Each case study shows the workflow applied to a different kind of product. Use them to see output shape and depth, not as templates to match.

### Case Study 1 — Crisis Agent (reset mode, team iterating without a spine)

The archetypal reset-mode invocation. A design team was iterating on color palettes and layouts for a mental-health-crisis family platform. No agreed user journey, no MVP cut-line. A product-minded team member redirected: stop iterating on UI, build a user journey and jobs-to-be-done first.

What the workflow produced:
- **User:** "Parents of a teen post-discharge from inpatient mental health, 0–6 months after discharge." Parent and teen flagged as separate segments; one picked for this pass.
- **Lived experience mined:** Two team members had personally been through the journey. Their own ER visits and therapist-hunting surfaced JTBDs that would have been guesses otherwise.
- **Acquisition reframed:** Killed the assumed "app store during crisis" path after a "what are the odds" pressure test. Replaced with web-first (SEO during research) + post-discharge QR code as physical referral. That single reframe reshaped the MVP from "big crisis button on app homescreen" to "responsive web experience optimized for post-discharge research."
- **Yes-and resolution:** Chat vs. button debate resolved with 3-option hierarchy (emergency phone link → resources → self-select into chat). User's first tap became the segmentation signal.
- **Cognitive load scaling:** High-distress phases (ER wait, discharge) capped at 2-3 choices. Low-distress phases (recovery, advocacy) allowed richer navigation.
- **Account placement:** End of initial experience, not front. Team rule: "ask nothing until you've delivered value."
- **MVP cut-line:** Discharge + short-term stabilization phases. Growth = care team formation + long-term recovery. Someday = advocacy, community.
- **Can't foreclose:** MVP architecture must accommodate persistent user accounts and journey-state persistence even though they don't ship in MVP.
- **Grows-with-you:** Applies. Register shifts inside MVP: discharge = blunt/actionable, stabilization = warmer/conversational.

Key verbatim framing from the call worth banking across future invocations:
- "Give stakeholders something to react to, and prioritize the jobs to be done, and say here's the line for the MVP."
- "All this other stuff is going to be future. But [the designer] needs to know what the future is in order to finalize the architecture."
- "When you first engage it, it's very, very actionable, very to the point. But then as you move through your arc and you're on the backside, it becomes more approachable, more conversational, more consultive."

### Case Study 2 — Internal Daily Digest (exploration mode, proactive scoping)

A consulting engagement surfaced unprompted enthusiasm for a "morning rollup" concept from a mid-level PM. Before scoping what to build, worth running journey-first to find the MVP cut-line.

What the workflow produced:
- **User:** "PM managing 3 active client projects + internal sprints, split across two tenants (company + partner), morning-driven triage." Not "the team."
- **Lived experience:** User self-described the pain in detail. Ground truth.
- **Acquisition:** In-product. User doesn't "arrive" — the digest arrives to them. Delivery mechanism (Teams chat, email, native Loop doc) is the make-or-break question.
- **Journey:** Opens laptop → checks overnight messages → reconstructs yesterday's loose threads → checks today's calendar → preps for first meeting. 5 phases in the first hour.
- **JTBDs:** "When I open my laptop, I want yesterday's unresolved threads surfaced so I don't have to reconstruct them from memory." "When I see today's calendar, I want each meeting pre-briefed with context so I can walk in ready instead of scrambling."
- **Yes-and check:** Surface-everything vs. surface-only-changes competed. Resolved with 2-tier output: headline summary always, expandable details on tap.
- **Cognitive load:** Morning-triage is medium-load. User wants density over whitespace. 5-7 section headings tolerated.
- **Architecture:** Requires synthesis capability across email + chat + calendar + doc systems. MCP-style integrations are load-bearing.
- **MVP cut-line:** MVP = daily brief with yesterday's loose threads + today's calendar + per-meeting prep. Growth = cross-meeting action-item tracking. Someday = full persistent memory across all projects and teams.
- **Can't foreclose:** MVP must be delivered in the user's existing tool (not a separate app), and must support add-later memory layer.
- **Killed acquisition paths:** "User opens a separate app for the digest" killed. Not going to happen for this persona. Delivery must live where they already are.
- **Grows-with-you:** Doesn't apply. Morning triage is one user state.
- **Biggest open question:** Does the brief live in Teams chat, email, or a Loop doc? Delivery mechanism is everything for this user.

### Case Study 3 — Tool Migration (exploration mode, exploring a personal-project or infrastructure move)

Applies when the user is thinking about migrating himself or a team off one tool onto another. Example shape, not a specific past project.

What the workflow would produce:
- **User:** "Power user of tool X who built a custom workflow over 2 years and is evaluating migrating to tool Y after a vendor acquisition." Specific because the migration cost is weighted by how much custom workflow exists.
- **Lived experience:** the user himself is the user. The prior two years of tool X usage is ground truth.
- **Acquisition:** No acquisition problem — user is already motivated. But *trigger* matters. Vendor acquisition, pricing change, feature gap?
- **Journey:** Current-state comfort → trigger event → evaluation of alternatives → partial adoption (both tools in parallel) → migration commit → settled-in phase → advocacy or regret. 7 phases.
- **JTBDs per phase:** Evaluation phase = "When I'm comparing tools, I want to know whether my custom workflow can be reproduced, so I can estimate migration cost before committing." Parallel phase = "When I'm running both tools, I want friction signals that tell me when to fully switch, so I don't stay stuck in indecision."
- **Architecture:** Not applicable — this isn't a product being built, it's a decision being made. But the capability analog is "what must tool Y do for me to consider the migration survivable."
- **MVP cut-line (of the migration):** Phase 1 = replicate top-5 workflows in tool Y. Phase 2 = retire tool X for those workflows. Phase 3 = migrate remaining. "Someday" workflows may never migrate.
- **Can't foreclose:** Don't pick a tool Y setup that blocks bringing back tool X if Y fails.
- **Grows-with-you:** Doesn't apply. One user, one migration.
- **Biggest open question:** What's the specific trigger event that makes the user pull the plug on tool X? Without it, parallel usage continues indefinitely.

This case study shows the workflow applies even when "the user" is the user himself and "the product" is a decision. Discovery shape is the same.

## Vault Updates

By default the skill produces output in chat. the user decides what to persist.

**If output is worth persisting (common in exploration mode):**
- Standalone journey/JTBD note in root, named `[Project] — User Journey and JTBD.md`. Link to the project's Basecamp.
- Update the project's Basecamp with a pointer to the new note under Trails.
- If the journey replaces or supersedes an existing journey note, update that note, don't duplicate.

**If output is a reset intervention in an active meeting/decision (common in reset mode):**
- Write to today's daily note under `## Work` as a decision/intervention record.
- Update [[Current Context]] if the journey map changes an active thread.
- Optionally: message to the team/stakeholder in the user's voice via `my-voice` skill.

Ask before creating a new standalone note. Don't ask before updating the daily note.

## What This Is NOT

- **Not a replacement for user research.** The skill produces inferred journeys based on available context. Real user conversations still need to happen. The skill's output is a hypothesis stakeholders can react to, not ground truth.
- **Not a design methodology.** This is product spine only. Visual design, interaction design, and component work happen downstream.
- **Not a prioritization framework.** The MVP cut-line is a proposal, not a scored/ranked decision. If the user needs formal prioritization (RICE, MoSCoW, weighted shortest job first), that's a separate pass.
- **Not `brainstorming` or `analyze`.** Those are general-purpose thinking tools. This is a specific product-discovery ritual with a fixed workflow and output shape.
